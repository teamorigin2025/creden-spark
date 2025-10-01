import { Home, Shield, Map, BarChart3, User, Settings, Globe, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: User, label: "Profile", active: false },
  { icon: Shield, label: "Verification", active: false },
  { icon: Map, label: "Skill Map", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col sticky top-0">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-neon">
            <Shield className="w-6 h-6 text-background" />
          </div>
          <div>
            <h1 className="text-xl font-bold">CredentiLearn</h1>
            <p className="text-xs text-muted-foreground">AI-Powered Platform</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
              item.active
                ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-neon"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all">
          <Globe className="w-5 h-5" />
          <span className="font-medium">Language</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all">
          <Download className="w-5 h-5" />
          <span className="font-medium">Offline Mode</span>
        </button>
      </div>
    </aside>
  );
};
