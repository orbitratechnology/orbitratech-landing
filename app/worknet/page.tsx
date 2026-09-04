import type { Metadata } from 'next';

import ProductPage from '@/components/ProductPage';
import { createProductMetadata, PRODUCT_DETAILS } from '@/lib/product-data';

export const metadata: Metadata = createProductMetadata(PRODUCT_DETAILS.worknet);

export default function WorknetPage() {
  return <ProductPage product={PRODUCT_DETAILS.worknet} />;
}
