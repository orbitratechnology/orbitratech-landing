-- Harden Payload CMS tables exposed in the public schema.
-- Payload connects via DATABASE_URL (postgres role) and bypasses RLS.
-- PostgREST (anon/authenticated) must not read or write CMS data directly.

DO $$
DECLARE
  tbl text;
BEGIN
  FOREACH tbl IN ARRAY ARRAY[
    'users',
    'users_roles',
    'users_sessions',
    'media',
    'products',
    'products_features',
    'site_stats',
    'site_stats_stats',
    'payload_kv',
    'payload_locked_documents',
    'payload_locked_documents_rels',
    'payload_mcp_api_keys',
    'payload_migrations',
    'payload_preferences',
    'payload_preferences_rels'
  ]
  LOOP
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', tbl);
    EXECUTE format('REVOKE ALL ON public.%I FROM anon, authenticated', tbl);
  END LOOP;
END $$;

-- Public media bucket for Payload uploads served via Supabase Storage CDN.
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'media',
  'media',
  true,
  5242880,
  ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg+xml']
)
ON CONFLICT (id) DO UPDATE
SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'Public read for media bucket'
  ) THEN
    CREATE POLICY "Public read for media bucket"
      ON storage.objects
      FOR SELECT
      TO public
      USING (bucket_id = 'media');
  END IF;
END $$;
