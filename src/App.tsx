
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import layout and pages
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import Menu from "@/pages/Menu";
import About from "@/pages/About";
import Location from "@/pages/Location";
import Contact from "@/pages/Contact";
import Catering from "@/pages/Catering";
import Faq from "@/pages/Faq";
import NotFound from "@/pages/NotFound";

// Initialize QueryClient
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/menu" element={<Layout><Menu /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/location" element={<Layout><Location /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/catering" element={<Layout><Catering /></Layout>} />
          <Route path="/faq" element={<Layout><Faq /></Layout>} />
          
          {/* Hidden routes (uncomment when ready) */}
          {/* <Route path="/news" element={<Layout><News /></Layout>} /> */}
          
          {/* 404 Page */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
