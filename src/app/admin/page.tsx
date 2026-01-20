import { 
  Users, 
  FileText, 
  Trophy, 
  Briefcase,
  TrendingUp,
  ArrowUpRight,
  Clock
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Total Users", value: "1,284", icon: Users, trend: "+12%", color: "text-blue-400" },
  { label: "Questions Uploaded", value: "450", icon: FileText, trend: "+5%", color: "text-[#4ade80]" },
  { label: "Tests Taken", value: "8,920", icon: Trophy, trend: "+18%", color: "text-purple-400" },
  { label: "Active Job Posts", value: "24", icon: Briefcase, trend: "+2", color: "text-orange-400" },
];

const recentActivities = [
  { user: "Adeola Thompson", action: "Completed Professional Quiz", time: "2 mins ago", status: "Score: 85%" },
  { user: "Joshua Ashiru", action: "Signed up for Academics", time: "15 mins ago", status: "New User" },
  { user: "Sarah Johnson", action: "Applied for HR Manager role", time: "1 hour ago", status: "Job Application" },
  { user: "Michael Chen", action: "Uploaded past questions", time: "3 hours ago", status: "Contributor" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6 lg:space-y-10">
      <div>
        <h1 className="text-2xl lg:text-4xl font-black text-white mb-2">Admin Overview</h1>
        <p className="text-sm lg:text-base text-[#94a3b8] font-medium">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-white/5 border-white/5 hover:border-[#4ade80]/30 transition-all group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
              <stat.icon className="w-16 lg:w-24 h-16 lg:h-24" />
            </div>
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="flex items-center gap-1 text-[#4ade80] text-[10px] lg:text-sm font-bold bg-[#4ade80]/10 px-2 py-1 rounded-lg">
                  <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4" />
                  {stat.trend}
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-1">{stat.value}</h3>
              <p className="text-[10px] lg:text-sm font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <Card className="lg:col-span-8 bg-white/5 border-white/5 p-4 lg:p-8 rounded-3xl lg:rounded-[32px]">
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <h2 className="text-xl lg:text-2xl font-black text-white">Recent Activities</h2>
            <button className="text-[#4ade80] font-bold text-xs lg:text-sm hover:underline">View All</button>
          </div>
          <div className="space-y-4 lg:space-y-6">
            {recentActivities.map((activity, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 lg:p-4 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer border border-transparent hover:border-white/5 gap-3 sm:gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-lg lg:rounded-xl bg-gradient-to-br from-[#4ade80] to-[#22c55e] flex items-center justify-center text-[#0a1628] font-black text-sm lg:text-base">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-[#4ade80] transition-colors text-sm lg:text-base">{activity.user}</h4>
                    <p className="text-xs lg:text-sm text-zinc-400 font-medium">{activity.action}</p>
                  </div>
                </div>
                <div className="flex sm:flex-col justify-between items-center sm:items-end">
                  <p className="text-xs lg:text-sm font-bold text-white">{activity.status}</p>
                  <p className="text-[10px] lg:text-xs text-zinc-500 flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-4 bg-[#4ade80] p-6 lg:p-8 rounded-3xl lg:rounded-[32px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-32 lg:w-48 h-32 lg:h-48 text-[#0a1628]" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between gap-6 lg:gap-0">
            <div>
              <h2 className="text-2xl lg:text-3xl font-black text-[#0a1628] leading-tight mb-4">System <br className="hidden lg:block" />Performance</h2>
              <p className="text-[#0a1628]/70 font-bold mb-0 lg:mb-8 text-sm">Everything is running smoothly. 99.9% uptime achieved this month.</p>
            </div>
            <div className="bg-[#0a1628] text-white p-4 lg:p-6 rounded-2xl flex items-center justify-between group cursor-pointer">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#4ade80] mb-1">Current Load</p>
                <p className="text-lg lg:text-xl font-black italic">OPTIMIZED</p>
              </div>
              <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
