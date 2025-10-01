import { Sidebar } from "@/components/dashboard/Sidebar";
import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { VerificationSection } from "@/components/dashboard/VerificationSection";
import { SkillMap } from "@/components/dashboard/SkillMap";
import { AnalyticsSection } from "@/components/dashboard/AnalyticsSection";
import { ProgressTracker } from "@/components/dashboard/ProgressTracker";
import { Bell, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search credentials, courses, or skills..."
                  className="w-full pl-12 pr-4 py-3 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative w-10 h-10 rounded-xl bg-muted/30 hover:bg-muted/50 flex items-center justify-center transition-all">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></div>
              </button>
              <div className="w-10 h-10 rounded-xl gradient-primary"></div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-muted-foreground text-lg">
              Your learning journey continues. Here's your personalized dashboard.
            </p>
          </div>

          <ProfileCard />
          
          <VerificationSection />
          
          <SkillMap />
          
          <AnalyticsSection />
          
          <ProgressTracker />

          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Scale?</h3>
              <p className="text-muted-foreground mb-6">
                Join millions of learners worldwide. Our platform supports global scalability,
                multilingual access, and offline capabilities for learning anywhere, anytime.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">2.5M+</div>
                  <div className="text-muted-foreground">Active Learners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">150+</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">50+</div>
                  <div className="text-muted-foreground">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
