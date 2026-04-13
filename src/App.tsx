import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin
import AdminLayout from "@/components/admin/AdminLayout";
import AdminLogin from "@/pages/admin/AdminLogin";
import Dashboard from "@/pages/admin/Dashboard";
import AdminBookings from "@/pages/admin/AdminBookings";
import AdminServices from "@/pages/admin/AdminServices";
import AdminGallery from "@/pages/admin/AdminGallery";
import AdminContacts from "@/pages/admin/AdminContacts";
import AdminCustomers from "@/pages/admin/AdminCustomers";
import AdminSettings from "@/pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Site */}
          <Route path="/" element={<><Navbar /><main><Index /></main><Footer /><WhatsAppButton /></>} />
          <Route path="/about" element={<><Navbar /><main><About /></main><Footer /><WhatsAppButton /></>} />
          <Route path="/services" element={<><Navbar /><main><Services /></main><Footer /><WhatsAppButton /></>} />
          <Route path="/gallery" element={<><Navbar /><main><Gallery /></main><Footer /><WhatsAppButton /></>} />
          <Route path="/contact" element={<><Navbar /><main><Contact /></main><Footer /><WhatsAppButton /></>} />

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
