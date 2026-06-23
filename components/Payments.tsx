import { BrandMarquee } from '@/components/BrandMarquee'
import { PAYMENT_LOGOS } from '@/lib/brand-logos'

export default function Payments() {
  return (
    <BrandMarquee
      id='payments'
      eyebrow='Payments'
      title='Checkout your customers already trust'
      description='We integrate card networks, wallets, and local gateways — Visa, Mastercard, PayPal, Stripe, PayHere, and Polar — so Sri Lankan SMEs can get paid without friction.'
      logos={PAYMENT_LOGOS}
      reverse
    />
  )
}
