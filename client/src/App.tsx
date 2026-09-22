import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster position="top-right" richColors />
        {window.location.pathname.endsWith("/gallery") || window.location.hash === "#gallery" ? <Gallery /> : <Home />}
      </TooltipProvider>
    </ThemeProvider>
  );
}
