import { Shield, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const credentials = [
  { name: "AI/ML Specialist", provider: "Coursera", verified: true },
  { name: "Data Science Pro", provider: "edX", verified: true },
  { name: "Cloud Architecture", provider: "AWS", verified: true },
  { name: "Web Development", provider: "Udemy", verified: false },
];

export const ProfileCard = () => {
  return (
    <div className="glass-card rounded-2xl p-8 shadow-glow border-2 border-primary/20">
      <div className="flex items-start gap-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold shadow-neon">
            JD
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-success rounded-full flex items-center justify-center border-4 border-background shadow-glow">
            <CheckCircle2 className="w-6 h-6 text-success-foreground" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">John Doe</h2>
              <p className="text-muted-foreground">Learner ID: LD-2024-8947</p>
            </div>
            <Badge className="bg-success/20 text-success border-success/50 text-sm px-4 py-1">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Verified Profile
            </Badge>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-background/50 rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-primary mb-1">24</div>
              <div className="text-sm text-muted-foreground">Total Credentials</div>
            </div>
            <div className="bg-background/50 rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-success mb-1">22</div>
              <div className="text-sm text-muted-foreground">Verified</div>
            </div>
            <div className="bg-background/50 rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-accent mb-1">Level 6</div>
              <div className="text-sm text-muted-foreground">NSQF Level</div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
              Recent Credentials
            </h3>
            <div className="flex flex-wrap gap-2">
              {credentials.map((cred, index) => (
                <Badge
                  key={index}
                  variant={cred.verified ? "default" : "secondary"}
                  className={cn(
                    "px-4 py-2 text-sm",
                    cred.verified
                      ? "bg-primary/20 text-primary border-primary/30 hover:bg-primary/30"
                      : "bg-warning/20 text-warning border-warning/30 hover:bg-warning/30"
                  )}
                >
                  {cred.verified ? (
                    <CheckCircle2 className="w-3 h-3 mr-2" />
                  ) : (
                    <Clock className="w-3 h-3 mr-2" />
                  )}
                  {cred.name}
                  <span className="ml-2 opacity-70">• {cred.provider}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};
