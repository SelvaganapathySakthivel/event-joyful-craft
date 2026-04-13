import { Link, useLocation, Outlet, Navigate } from "react-router-dom";
import { useAdminStore } from "@/store/adminStore";
import {
  LayoutDashboard, CalendarCheck, Wrench, Image, MessageSquare,
  Users, Settings, LogOut, Menu, X, ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const sidebarLinks = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Bookings", path: "/admin/bookings", icon: CalendarCheck },
  { label: "Services", path: "/admin/services", icon: Wrench },
  { label: "Gallery", path: "/admin/gallery", icon: Image },
  { label: "Contacts", path: "/admin/contacts", icon: MessageSquare },
  { label: "Customers", path: "/admin/customers", icon: Users },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

const AdminLayout = () => {
  const { isAuthenticated, logout } = useAdminStore();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-16 flex items-center gap-3 px-5 border-b border-border">
          <img src={logo} alt="DD Events" className="h-9 w-auto" />
          <span className="font-heading font-bold text-sm text-foreground">Admin Panel</span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden ml-auto text-muted-foreground">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
              >
                <link.icon size={18} />
                {link.label}
                {active && <ChevronRight size={14} className="ml-auto" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => { logout(); setSidebarOpen(false); }}
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-16 bg-card border-b border-border flex items-center px-4 lg:px-6 gap-4 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-foreground">
            <Menu size={22} />
          </button>
          <h1 className="font-heading font-semibold text-foreground text-lg">
            DD Events Admin
          </h1>
          <div className="ml-auto flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">admin@ddevents.com</span>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
