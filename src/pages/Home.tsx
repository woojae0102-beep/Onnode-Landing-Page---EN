import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Clock,
  TrendingUp,
  AlertCircle,
  Zap,
  MessageSquare,
  MousePointer2,
} from "lucide-react";
import { IMAGES } from "@/assets/images";
import { features, pricingPlans, testimonials } from "@/data/index";
import { FeatureCard, PricingCard, TestimonialCard } from "@/components/Cards";
import { Button } from "@/components/ui/button";

const springPresets = {
  gentle: { stiffness: 300, damping: 35 },
  smooth: { stiffness: 200, damping: 40 },
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: springPresets.gentle,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HERO_BG_8}
            alt="Dashboard Analytics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.smooth}
            className="max-w-5xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
              OnNode: Next-Gen AI Automation
            </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
            Analyze Why Your Sales Are Growing<br/><span className="text-primary">Data-Driven E-commerce Strategy Solution</span>
          </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              Beautiful images, shorts, and detail pages don't guarantee sales—but no one tells you why.<br/>
              We don't just ask <span className="text-primary font-bold">"What should we create?"</span> We analyze <span className="text-primary font-bold">"Why does it sell?"</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-8 text-lg group">
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 italic text-muted-foreground">
              "Still collecting data manually?"
            </h2>
            <p className="text-muted-foreground">
              Store operators spend 70% of their time on repetitive data collection and organization tasks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[ 
              { icon: TrendingUp, title: "Sales-Boosting Analytics", desc: "Regional and platform-specific image analysis, shorts trend analysis, and top-performing store insights applied to your business" },
              { icon: Clock, title: "Inefficient Ad Spending", desc: "Identify which channels drive actual sales and optimize ad spending (reduce advertising costs effectively)" },
              { icon: AlertCircle, title: "Repetitive Manual Work", desc: "Customer CS, detail page creation, photography, trend analysis, ad keyword research—all solved with one click" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm"
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-destructive w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="flex-1">
              <img
                src={IMAGES.ANALYTICS_1}
                alt="AI Analysis"
                className="rounded-3xl shadow-2xl border border-border"
              />
            </motion.div>
            <motion.div {...fadeInUp} className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                AI-Powered Automated Analysis
                <br />
                for Data-Driven Decisions
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Automatic Data Sync</h4>
                    <p className="text-muted-foreground">Collect all data in real-time through API integration.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">AI-Driven Insights</h4>
                    <p className="text-muted-foreground">Not just data listing—identify sales decline causes and growth opportunities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MousePointer2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">One-Click Action Suggestions</h4>
                    <p className="text-muted-foreground">Provides immediately actionable optimization guides based on analysis results.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-muted-foreground">OnNode's core technologies that maximize operational efficiency.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-foreground text-background rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row">
            <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  After OnNode,
                  <br />
                  Your Business Will Transform
                </h2>
                <ul className="space-y-6">
                  {[
                    "Convenient access via messenger",
                    "Precise analysis of existing sales decline causes",
                    "25% improvement in ROAS (Return on Ad Spend)",
                    "Content creation completed in 10 minutes",
                    "0% data loss and human errors",
                    "Automated store management",
                    "Automated customer service management",
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <CheckCircle2 className="text-primary w-6 h-6" />
                      <span className="text-lg opacity-90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="flex-1 relative min-h-[400px]">
              <img
                src={IMAGES.AUTOMATION_4}
                alt="Future Tech"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="target" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                "Beginner sellers who opened a store but don't know where to start",
                "CEOs spending heavily on ads but experiencing low ROI",
                "CEOs with great products but unclear content creation direction",
                "CEOs needing data-driven strategies for efficient ad spending",
                "CEOs wanting to enter global markets but lacking methods and language preparation",
                "CEOs experiencing losses in store operations",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-4 rounded-xl border border-border bg-card"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mr-4" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Flexible Service Plans</h2>
            <p className="text-muted-foreground">
              Choose the optimal solution for your business stage.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.ECOMMERCE_5}
            alt="Start Today"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Experience OnNode's
              <br />
              Overwhelming Efficiency Today
            </h2>
            <p className="text-lg mb-10 opacity-90">
              Try it first with our free trial.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-10 text-lg shadow-xl">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-10 text-lg bg-background/50 backdrop-blur-sm"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm font-medium mb-4">© 2026 OnNode. All rights reserved.</p>
          <div className="flex justify-center gap-8 text-xs">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}