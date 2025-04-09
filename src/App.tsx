
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
import QuantumExperiments from "./pages/QuantumExperiments";
import CinematicExperience from "./pages/CinematicExperience";
import DigitalLab from "./pages/DigitalLab";
import Philosophy from "./pages/Philosophy";
import Music from "./pages/Music";
import ComedyHub from "./pages/ComedyHub";

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
          <Route path="/experiments" element={<QuantumExperiments />} />
          <Route path="/cinema" element={<CinematicExperience />} />
          <Route path="/lab" element={<DigitalLab />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/music" element={<Music />} />
          <Route path="/comedy" element={<ComedyHub />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
