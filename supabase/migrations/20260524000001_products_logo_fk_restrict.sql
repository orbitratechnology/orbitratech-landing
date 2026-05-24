-- logo_id is NOT NULL; ON DELETE SET NULL causes aborted transactions when deleting media.
ALTER TABLE public.products
  DROP CONSTRAINT IF EXISTS products_logo_id_media_id_fk;

ALTER TABLE public.products
  ADD CONSTRAINT products_logo_id_media_id_fk
  FOREIGN KEY (logo_id)
  REFERENCES public.media (id)
  ON DELETE RESTRICT
  ON UPDATE NO ACTION;
