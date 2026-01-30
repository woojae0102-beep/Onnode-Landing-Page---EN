import { Feature, PricingPlan, Testimonial, FAQ } from "@/lib/index";

export const features: Feature[] = [
  {
    id: "feat-1",
    title: "AI Sales Analysis Automation",
    description: "Every morning, AI analyzes yesterday's performance and delivers a concise summary report.",
    iconName: "BarChart3",
  },
  {
    id: "feat-2",
    title: "Platform Trend Analysis",
    description: "Precisely analyze keywords from global platforms like Google and Shopify to capture worldwide market trends.",
    iconName: "TrendingUp",
  },
  {
    id: "feat-3",
    title: "Integrated Ad Performance Dashboard",
    description: "Consolidate scattered advertising data from multiple channels and calculate actual ROAS (Return on Ad Spend).",
    iconName: "LayoutDashboard",
  },
  {
    id: "feat-4",
    title: "Revenue Simulation",
    description: "Provides projected revenue results based on keywords and market conditions to support data-driven decision-making.",
    iconName: "Calculator",
  },
  {
    id: "feat-5",
    title: "Pre-filter High-Risk Keywords",
    description: "Filter out keywords with high failure probability in advance to prevent resource waste and increase success rates.",
    iconName: "Shield",
  },
  {
    id: "feat-6",
    title: "Top Seller Data Analysis",
    description: "Based on proven data from top-performing sellers, re-validate already tested trends.",
    iconName: "Crown",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-optimization",
    name: "Sales Optimization Package",
    price: "$6,000",
    period: "per project",
    description: "Complete sales optimization solution",
    features: [
      "5 ultra-high-quality product images",
      "1 conversion-optimized detail page",
      "3 short-form videos (30 seconds each)",
      "Automated customer service + upload support",
    ],
    ctaText: "Buy Now",
  },
  {
    id: "plan-keyword-analysis",
    name: "Ad Keyword Analysis",
    price: "$220 ~ $590",
    period: "per month",
    description: "Keyword analysis service tailored to your business scale",
    features: [
      "Basic: $220/month - 3 keyword analyses per day",
      "Standard: $440/month - 30 keyword analyses per day",
      "Unlimited: $590/month - Unlimited usage",
    ],
    isPopular: true,
    ctaText: "Get Started",
  },
  {
    id: "plan-expert",
    name: "Expert Add-on Services",
    price: "$1,900",
    period: "per month",
    description: "Advanced marketing and global expansion services",
    features: [
      "Semantic Markup: $1,900/month per category",
      "Global Expansion Pack: Country-specific packages",
    ],
    ctaText: "Buy Now",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    author: "Michael C.",
    role: "CEO of Global Fashion Brand 'Luminaire'",
    content: "Keyword analysis that used to take 3 hours every morning now finishes in 5 minutes. After running ads with AI-selected golden keywords, our exposure increased 4x compared to last month. It finally feels like I'm doing proper strategic planning.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "test-2",
    author: "Sarah K.",
    role: "Operations Manager at Living Store 'Urban Space'",
    content: "I was exhausted from battling with outsourcing agencies for every detail page. After adopting OnNode, AI creates high-quality shorts in 1 minute, so production costs are almost zero. Conversion rates exceeded expectations, and I'm definitely recommending it to fellow sellers.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "test-3",
    author: "James P.",
    role: "Marketer at 'Urban Living'",
    content: "Being able to analyze performance across multiple ad channels in one place improved efficiency by over 40%. I think it's essential for any Cafe24 operator.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "test-4",
    author: "Robert D.",
    role: "Shopify North America Specialist Seller",
    content: "I regret the days when I relied on gut feeling without data analysis. After improving product issues identified by OnNode reports, my purchase conversion rate increased by 180%. For Shopify sellers, this is not an option—it's a necessity.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "test-5",
    author: "Kenji",
    role: "Top-rated Seller in Tokyo",
    content: "This is the most intuitive tool I've ever used. Thanks to the ability to analyze global trends and generate content in minutes, I launched 5 new products this month alone. If you want to expand your business globally, OnNode is the only answer.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How do I integrate with my Cafe24 store?",
    answer: "Install the OnNode app from the Cafe24 app store, and all data will automatically sync with just a few clicks.",
  },
  {
    id: "faq-2",
    question: "What happens when the free trial ends?",
    answer: "After the 14-day free trial expires, the service will be temporarily suspended. Register your payment method to continue using the service without data interruption.",
  },
  {
    id: "faq-3",
    question: "Is my data securely managed?",
    answer: "OnNode manages all data with financial-grade AES-256 encryption, and your store's confidential information is thoroughly protected.",
  },
  {
    id: "faq-4",
    question: "Can I change my plan anytime?",
    answer: "Yes, you can upgrade to a higher plan or downgrade to a lower plan anytime from the dashboard settings page.",
  },
];