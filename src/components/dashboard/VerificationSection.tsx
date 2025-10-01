import { Shield, Scan, CheckCircle2, AlertTriangle, Lock } from "lucide-react";

const verificationItems = [
  {
    title: "AI Verification Scan",
    status: "complete",
    description: "All credentials verified using NLP analysis",
    icon: Scan,
  },
  {
    title: "Fraud Detection",
    status: "clear",
    description: "No anomalies detected in submitted documents",
    icon: AlertTriangle,
  },
  {
    title: "Blockchain Seal",
    status: "active",
    description: "Tamper-proof verification with distributed ledger",
    icon: Lock,
  },
];

export const VerificationSection = () => {
  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">AI Verification & Security</h3>
          <p className="text-muted-foreground">Real-time credential authentication</p>
        </div>
      </div>

      <div className="space-y-4">
        {verificationItems.map((item, index) => (
          <div
            key={index}
            className="bg-background/50 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-all",
                item.status === "complete" && "bg-success/20 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
                item.status === "clear" && "bg-primary/20 group-hover:shadow-neon",
                item.status === "active" && "bg-accent/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              )}>
                <item.icon className={cn(
                  "w-6 h-6",
                  item.status === "complete" && "text-success",
                  item.status === "clear" && "text-primary",
                  item.status === "active" && "text-accent"
                )} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  {item.status === "complete" && (
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  )}
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-xl flex items-center gap-3">
        <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
        <p className="text-sm">
          <span className="font-semibold text-primary">Live Monitoring:</span>{" "}
          <span className="text-muted-foreground">All systems operational • Last scan 2 minutes ago</span>
        </p>
      </div>
    </div>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};
