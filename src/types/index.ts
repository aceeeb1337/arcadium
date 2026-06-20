export interface Spec {
  id: string;
  label: string;
  value: string;
  unit: string;
  description: string;
  highlight?: boolean;
}

export interface Platform {
  id: string;
  name: string;
  description: string;
  icon: string;
  available: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  duration: string;
  price: string;
  priceNote?: string;
  features: string[];
  cta: string;
  whatsappMessage: string;
  highlight: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
