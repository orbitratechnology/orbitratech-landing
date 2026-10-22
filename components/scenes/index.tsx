import { Globe, ShoppingBag, Smartphone, Workflow, type LucideIcon } from 'lucide-react';

import type { ProductDetails } from '@/lib/product-data';
import type { ServiceSceneId } from '@/lib/service-pages';

import { AutomationScene } from './AutomationScene';
import { MobileAppScene } from './MobileAppScene';
import { CallnetScene } from './products/CallnetScene';
import { GemfortScene } from './products/GemfortScene';
import { HermadeScene } from './products/HermadeScene';
import type { ProductSceneProps } from './products/ProductFrame';
import { WorknetScene } from './products/WorknetScene';
import { StoreScene } from './StoreScene';
import { WebsiteScene } from './WebsiteScene';

export const SERVICE_ICONS: Record<ServiceSceneId, LucideIcon> = {
  website: Globe,
  mobile: Smartphone,
  ecommerce: ShoppingBag,
  transform: Workflow,
};

const SERVICE_SCENES = {
  website: WebsiteScene,
  mobile: MobileAppScene,
  ecommerce: StoreScene,
  transform: AutomationScene,
} satisfies Record<ServiceSceneId, unknown>;

const PRODUCT_SCENES = {
  callnet: CallnetScene,
  worknet: WorknetScene,
  gemfort: GemfortScene,
  hermade: HermadeScene,
} satisfies Record<ProductDetails['id'], unknown>;

export function ServiceScene({
  id,
  active,
  className,
}: {
  id: ServiceSceneId;
  active?: boolean;
  className?: string;
}) {
  const Scene = SERVICE_SCENES[id];
  return <Scene active={active} className={className} />;
}

export function ProductScene({
  id,
  ...props
}: ProductSceneProps & { id: ProductDetails['id'] }) {
  const Scene = PRODUCT_SCENES[id];
  return <Scene {...props} />;
}
