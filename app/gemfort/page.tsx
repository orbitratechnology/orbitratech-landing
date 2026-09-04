import type { Metadata } from 'next';

import ProductPage from '@/components/ProductPage';
import { createProductMetadata, PRODUCT_DETAILS } from '@/lib/product-data';

export const metadata: Metadata = createProductMetadata(PRODUCT_DETAILS.gemfort);

export default function GemfortPage() {
  return <ProductPage product={PRODUCT_DETAILS.gemfort} />;
}
