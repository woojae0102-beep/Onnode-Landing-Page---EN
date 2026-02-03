import { motion } from "framer-motion";
import { Check, Star, Zap, BarChart3, Layers, Settings2, Activity, Cpu } from "lucide-react";
import { Feature, PricingPlan, Testimonial, cn } from "@/lib/index";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  BarChart3,
  Layers,
  Settings2,
  Activity,
  Cpu,
};

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = iconMap[feature.iconName] || Zap;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="group relative h-full"
    >
      <Card className="h-full border-border bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card">
        <CardHeader className="pb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary ring-1 ring-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon size={24} strokeWidth={2} />
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {feature.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative h-full"
    >
      <Card 
        className={cn(
          "relative h-full flex flex-col border-border transition-all duration-300",
          plan.isPopular ? "ring-2 ring-primary border-primary/20 shadow-xl scale-105 z-10" : "hover:border-primary/20 shadow-sm"
        )}
      >
        {plan.isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge className="bg-primary text-primary-foreground px-4 py-1 uppercase tracking-wider text-[10px] font-bold shadow-lg">
              Most Popular
            </Badge>
          </div>
        )}
        
        <CardHeader className="space-y-1 pt-8">
          <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
          <p className="text-xs text-muted-foreground">{plan.description}</p>
        </CardHeader>

        <CardContent className="flex-1 space-y-6">
        {plan.id === 'plan-keyword-analysis' ? (
  // 다른 플랜과 동일한 레이아웃 사용
  <>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-bold tracking-tighter text-foreground">{plan.price}</span>
      {plan.period && <span className="text-sm text-muted-foreground">/{plan.period}</span>}
    </div>

    <div className="space-y-3">
      {plan.features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check size={10} strokeWidth={3} />
          </div>
          <span className="text-sm text-foreground/80 leading-snug">{feature}</span>
        </div>
      ))}
    </div>
  </>
) : (
            // 기존 레이아웃
            <>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tighter text-foreground">{plan.price}</span>
                {plan.period && <span className="text-sm text-muted-foreground">/{plan.period}</span>}
              </div>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-foreground/80 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="pt-6">
  <Button 
    className="w-full font-semibold transition-all duration-200 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
    size="lg"
    onClick={() => {
      // 각 플랜별 URL 연결
      if (plan.id === 'plan-optimization') {
        window.location.href = 'https://ai365mall.cafe24.com/surl/O/25';
      } else if (plan.id === 'plan-keyword-analysis') {
        window.location.href = 'https://your-payment-url.com/subscribe/20';
      } else if (plan.id === 'plan-expert') {
        window.location.href = 'https://your-payment-url.com/checkout/174';
      }
    }}
  >
    {plan.ctaText}
  </Button>
</CardFooter>
      </Card>
    </motion.div>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="h-full"
    >
      <Card className="h-full border-border bg-card shadow-sm">
        <CardContent className="pt-8 flex flex-col h-full">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-primary text-primary" />
            ))}
          </div>
          
          <blockquote className="flex-1 italic text-foreground/90 leading-relaxed mb-6">
            &ldquo;{testimonial.content}&rdquo;
          </blockquote>

          <div className="flex items-center gap-3 border-t border-border pt-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted overflow-hidden ring-1 ring-border">
              {testimonial.avatar ? (
                <img src={testimonial.avatar} alt={testimonial.author} className="h-full w-full object-cover" />
              ) : (
                <span className="text-xs font-bold text-muted-foreground">
                  {testimonial.author.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <cite className="text-sm font-bold not-italic text-foreground">
                {testimonial.author}
              </cite>
              <span className="text-xs text-muted-foreground">
                {testimonial.role}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
