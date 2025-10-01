import { Target, TrendingUp, Award, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const goals = [
  { title: "Complete AI Specialization", progress: 75, target: "Mar 2025", icon: Target },
  { title: "Achieve NSQF Level 7", progress: 60, target: "Jun 2025", icon: Award },
  { title: "Master Cloud Architecture", progress: 45, target: "Sep 2025", icon: TrendingUp },
];

const heatmapData = [
  { skill: "Machine Learning", current: 85, required: 90 },
  { skill: "Data Engineering", current: 70, required: 85 },
  { skill: "Cloud Computing", current: 65, required: 80 },
  { skill: "DevOps", current: 55, required: 75 },
  { skill: "System Design", current: 50, required: 70 },
];

export const ProgressTracker = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="glass-card rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Learning Goals</h3>
            <p className="text-muted-foreground">Track your progress</p>
          </div>
        </div>

        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div key={index} className="bg-background/50 rounded-xl p-5 border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <goal.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{goal.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Target: {goal.target}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{goal.progress}%</div>
                </div>
              </div>
              <Progress value={goal.progress} className="h-2" />
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Skill Gap Analysis</h3>
            <p className="text-muted-foreground">Current vs Required</p>
          </div>
        </div>

        <div className="space-y-4">
          {heatmapData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{item.skill}</span>
                <span className="text-muted-foreground">
                  {item.current}% / {item.required}%
                </span>
              </div>
              <div className="relative h-8 bg-background/50 rounded-lg overflow-hidden border border-border/50">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary transition-all"
                  style={{ width: `${item.current}%` }}
                ></div>
                <div
                  className="absolute inset-y-0 left-0 border-r-2 border-accent"
                  style={{ left: `${item.required}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="font-semibold text-sm">AI Recommendation</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Focus on Data Engineering and System Design to reach your target role faster.
            Estimated time: 3-4 months with dedicated learning.
          </p>
        </div>
      </div>
    </div>
  );
};
