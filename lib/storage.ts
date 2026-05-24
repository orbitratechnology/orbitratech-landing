const projectRef = process.env.SUPABASE_PROJECT_REF ?? ''
const supabaseUrl =
  process.env.SUPABASE_URL ??
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  (projectRef ? `https://${projectRef}.supabase.co` : '')

export const s3Bucket = process.env.S3_BUCKET ?? 'media'

export const s3Config = {
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? '',
  },
  region: process.env.S3_REGION ?? 'ap-southeast-2',
  endpoint:
    process.env.S3_ENDPOINT ??
    (projectRef
      ? `https://${projectRef}.storage.supabase.co/storage/v1/s3`
      : undefined),
  forcePathStyle: true as const,
}

export function getS3FileKey(filename: string, docPrefix?: string | null) {
  const prefix = docPrefix || 'media'
  return `${prefix}/${filename}`
}

export function getPublicMediaUrl(filename: string, prefix?: string | null) {
  const path = getS3FileKey(filename, prefix)
  return `${supabaseUrl}/storage/v1/object/public/${s3Bucket}/${path}`
}
