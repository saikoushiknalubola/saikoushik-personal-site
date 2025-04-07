
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RebellionManifesto from "./pages/RebellionManifesto";
import DeepDiveProjects from "./pages/DeepDiveProjects";
import SoulOfCreation from "./pages/SoulOfCreation";
import ExperienceJourney from "./pages/ExperienceJourney";
import FutureVision from "./pages/FutureVision";
import ExploreGallery from "./pages/ExploreGallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/manifesto" element={<RebellionManifesto />} />
          <Route path="/projects" element={<DeepDiveProjects />} />
          <Route path="/soul" element={<SoulOfCreation />} />
          <Route path="/journey" element={<ExperienceJourney />} />
          <Route path="/future" element={<FutureVision />} />
          <Route path="/gallery" element={<ExploreGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
