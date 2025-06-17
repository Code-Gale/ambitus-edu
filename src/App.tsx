import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Analytics } from './lib/analytics-tracker';
import { useEffect } from 'react'; // Add this import

const queryClient = new QueryClient();
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    Analytics.trackPageView();
  }, [location]);

  return null;
};

const App = () => {
  // Add this useEffect
  useEffect(() => {
    Analytics.init({
      siteId: 'f81fb17d-bf13-4f82-9833-37ba8a4d597b',
      apiEndpoint: 'https://olhvinclxqcxesgydkql.supabase.co'
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;