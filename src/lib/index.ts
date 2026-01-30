export const ROUTE_PATHS = {
  HOME: "/",
} as const;

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export const COPYRIGHT_YEAR = 2026;