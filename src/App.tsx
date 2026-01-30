import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { Header } from "@/components/Layout";
import Home from "@/pages/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

/**
 * App Component
 * OnNode AI Automation SaaS Landing Page
 * 
 * Provides root layout and routing configuration.
 * Includes UI providers for tooltips, toasts, and data fetching.
 * 
 * @copyright 2026 OnNode
 */
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary/10 selection:text-primary">
            {/* Navigation Header */}
            <Header />

            {/* Main Content Area */}
            <main className="flex-1">
              <Routes>
                <Route 
                  path={ROUTE_PATHS.HOME} 
                  element={<Home />} 
                />
                {/* Fallback for undefined routes, redirecting to home for single-page SaaS experience */}
                <Route 
                  path="*" 
                  element={<Home />} 
                />
              </Routes>
            </main>

            {/* UI Feedback Components */}
            <Toaster />
            <Sonner position="bottom-right" closeButton />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
