import type { Metadata } from 'next';

import ProductPage from '@/components/ProductPage';
import { createProductMetadata, PRODUCT_DETAILS } from '@/lib/product-data';

export const metadata: Metadata = createProductMetadata(PRODUCT_DETAILS.hermade);

export default function HermadePage() {
  return <ProductPage product={PRODUCT_DETAILS.hermade} />;
}
