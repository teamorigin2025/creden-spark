import { TrendingUp, Target, Award, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillNodes = [
  { name: "Python", level: 6, x: 20, y: 30, connected: true },
  { name: "Machine Learning", level: 6, x: 45, y: 20, connected: true },
  { name: "Data Science", level: 5, x: 70, y: 30, connected: true },
  { name: "Deep Learning", level: 5, x: 45, y: 50, connected: false },
  { name: "NLP", level: 4, x: 20, y: 65, connected: false },
];

const recommendations = [
  { title: "Advanced NLP Specialization", provider: "DeepLearning.AI", match: 95 },
  { title: "MLOps Engineering", provider: "Coursera", match: 88 },
  { title: "Computer Vision Mastery", provider: "Udacity", match: 82 },
];

export const SkillMap = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="glass-card rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
            <Target className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Skill Map & Pathways</h3>
            <p className="text-muted-foreground">Visualize your learning journey</p>
          </div>
        </div>

        <div className="relative h-80 bg-background/50 rounded-xl border border-border/50 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {/* Connecting lines */}
            <line x1="20%" y1="30%" x2="45%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" />
            <line x1="45%" y1="20%" x2="70%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" />
            <line x1="45%" y1="20%" x2="45%" y2="50%" stroke="hsl(var(--muted))" strokeWidth="2" strokeDasharray="4 4" />
          </svg>

          {skillNodes.map((node, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div
                className={cn(
                  "w-20 h-20 rounded-xl flex flex-col items-center justify-center border-2 transition-all hover:scale-110",
                  node.connected
                    ? "bg-primary/20 border-primary shadow-neon"
                    : "bg-muted/20 border-muted"
                )}
              >
                <div className="text-xs font-bold mb-1">Level {node.level}</div>
                <div className="text-xs text-center px-1">{node.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-primary"></div>
            <span className="text-muted-foreground">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-muted"></div>
            <span className="text-muted-foreground">Recommended</span>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
            <Award className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">AI Recommendations</h3>
            <p className="text-muted-foreground">Next steps in your journey</p>
          </div>
        </div>

        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-background/50 rounded-xl p-5 border border-border/50 hover:border-accent/30 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                    {rec.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{rec.provider}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                    style={{ width: `${rec.match}%` }}
                  ></div>
                </div>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  {rec.match}% Match
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 px-6 py-3 rounded-xl gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all">
          View All Recommendations
        </button>
      </div>
    </div>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};
