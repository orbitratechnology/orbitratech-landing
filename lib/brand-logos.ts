export type BrandLogo = {
  id: string
  name: string
  src: string
  /** Optional note for screen readers / captions */
  caption?: string
}

export const TECHNOLOGY_LOGOS: BrandLogo[] = [
  { id: 'vercel', name: 'Vercel', src: '/brands/vercel.svg' },
  { id: 'supabase', name: 'Supabase', src: '/brands/supabase.svg' },
  { id: 'stripe', name: 'Stripe', src: '/brands/stripe.svg' },
  { id: 'google', name: 'Google', src: '/brands/google.svg' },
  { id: 'microsoft', name: 'Microsoft', src: '/brands/microsoft.svg' },
  { id: 'apple', name: 'Apple', src: '/brands/apple.svg' },
  { id: 'openai', name: 'OpenAI', src: '/brands/openai.svg' },
  { id: 'anthropic', name: 'Anthropic', src: '/brands/anthropic.svg' },
  { id: 'firebase', name: 'Firebase', src: '/brands/firebase.svg' },
  { id: 'shopify', name: 'Shopify', src: '/brands/shopify.svg' },
  { id: 'expo', name: 'Expo', src: '/brands/expo.svg' },
  { id: 'netlify', name: 'Netlify', src: '/brands/netlify.svg' },
  { id: 'resend', name: 'Resend', src: '/brands/resend.svg' },
  { id: 'meta', name: 'Meta', src: '/brands/meta.svg' },
]

export const PAYMENT_LOGOS: BrandLogo[] = [
  { id: 'visa', name: 'Visa', src: '/brands/visa.svg' },
  { id: 'mastercard', name: 'Mastercard', src: '/brands/mastercard.svg' },
  {
    id: 'paypal',
    name: 'PayPal',
    src: '/brands/paypal.svg',
  },
  { id: 'stripe', name: 'Stripe', src: '/brands/stripe.svg' },
  {
    id: 'payhere',
    name: 'PayHere',
    src: '/brands/payhere.png',
    caption: 'Sri Lankan payment gateway',
  },
  {
    id: 'polar',
    name: 'Polar',
    src: '/brands/polar.webp',
    caption: 'Embedded checkout',
  },
]
