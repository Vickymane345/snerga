"use client";

import { useState } from "react";
import { 
  Search, 
  Sun, 
  Moon, 
  Bell, 
  ChevronDown,
  ChevronRight,
  Zap,
  LogOut,
  User,
  Settings,
  TrendingUp,
  Clock,
  CheckCircle2,
  BookOpen,
  Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UserData {
  id: string;
  email: string;
  fullName: string;
  company: string;
  phone: string;
  avatarUrl: string;
  role: string;
  createdAt: string;
}

interface DashboardClientProps {
  user: UserData;
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
};

export default function DashboardClient({ user }: DashboardClientProps) {
  const router = useRouter();
  const [mode, setMode] = useState<"professional" | "academics">("academics");
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const fullName = user.fullName || "User";
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <header className="h-16 lg:h-20 border-b border-white/5 flex items-center justify-between px-4 lg:px-10 bg-[#0a1628]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-2 lg:gap-8 flex-1">
          <div className="relative flex-1 lg:flex-none lg:w-96">
            <Search className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <Input 
              placeholder="Search..." 
              className="pl-9 lg:pl-12 bg-white/5 border-none h-9 lg:h-12 rounded-xl lg:rounded-2xl text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-[#4ade80]/50 w-full text-xs lg:text-base"
            />
          </div>

          <div className="hidden lg:flex bg-white/5 p-1 rounded-xl border border-white/5">
            <button 
              onClick={() => setMode("academics")}
              className={cn(
                "px-4 py-2 rounded-lg text-xs font-bold transition-all",
                mode === "academics" ? "bg-[#4ade80] text-[#0a1628] shadow-lg" : "text-[#94a3b8] hover:text-white"
              )}
            >
              Academics
            </button>
            <button 
              onClick={() => setMode("professional")}
              className={cn(
                "px-4 py-2 rounded-lg text-xs font-bold transition-all",
                mode === "professional" ? "bg-[#4ade80] text-[#0a1628] shadow-lg" : "text-[#94a3b8] hover:text-white"
              )}
            >
              Professional
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-8 ml-4">
          <div className="hidden md:flex items-center gap-4 bg-white/5 p-1 rounded-full border border-white/5">
            <button className="p-2 rounded-full text-zinc-400 hover:text-white transition-colors">
              <Sun className="w-5 h-5" />
            </button>
            <div className="w-12 h-6 bg-[#4ade80] rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg" />
            </div>
            <button className="p-2 rounded-full text-[#4ade80]">
              <Moon className="w-5 h-5" />
            </button>
          </div>

          <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5 lg:w-6 lg:h-6" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#4ade80] rounded-full border-2 border-[#0a1628]" />
          </button>

          <div className="relative">
            <div 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 lg:gap-3 bg-white/5 pl-1.5 pr-2 lg:pl-2 lg:pr-4 py-1.5 rounded-xl lg:rounded-2xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors"
            >
              <Avatar className="w-7 h-7 lg:w-10 lg:h-10 border-2 border-[#4ade80] p-0.5">
                <AvatarImage src={user.avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${fullName}`} />
                <AvatarFallback className="bg-[#4ade80] text-[#0a1628] font-bold text-[10px] lg:text-sm">{initials}</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block text-left">
                <p className="text-xs lg:text-sm font-bold text-white leading-tight">{fullName.split(' ')[0]}</p>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] lg:text-[10px] text-zinc-400">{mode === "academics" ? "Student" : "Professional"}</span>
                  <ChevronDown className="w-3 h-3 text-zinc-400" />
                </div>
              </div>
            </div>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-[#111d32] border border-white/5 rounded-2xl shadow-2xl py-2 z-50">
                <button className="w-full px-4 py-2 text-left text-sm text-[#94a3b8] hover:text-white hover:bg-white/5 flex items-center gap-2">
                  <User className="w-4 h-4" /> Profile
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-[#94a3b8] hover:text-white hover:bg-white/5 flex items-center gap-2">
                  <Settings className="w-4 h-4" /> Settings
                </button>
                <div className="h-px bg-white/5 my-2" />
                <button 
                  onClick={() => router.push("/")}
                  className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-red-400/10 flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="col-span-1 lg:col-span-8 space-y-6 lg:space-y-10">
          <section className="relative h-48 lg:h-64 rounded-3xl lg:rounded-[40px] bg-gradient-to-r from-[#4ade80] to-[#22c55e] overflow-hidden p-6 lg:p-12 flex items-center group shadow-2xl shadow-[#4ade80]/20">
            <div className="relative z-10 space-y-2 lg:space-y-4 max-w-md">
                <div className="flex items-center gap-3 lg:gap-4">
                  <span className="text-2xl lg:text-4xl animate-bounce">👋</span>
                  <h2 className="text-[#0a1628] text-xl lg:text-3xl font-bold leading-tight">
                    {getGreeting()}, <span className="text-[#0a1628] underline decoration-[#0a1628]/30 underline-offset-4 lg:underline-offset-8 italic">{fullName.split(" ")[0]}</span>!
                  </h2>
                </div>

              <p className="text-[#0a1628]/80 text-sm lg:text-lg font-medium">
                You&apos;ve learned <span className="font-bold">70%</span> of your goal this week.
              </p>
              <Button className="bg-[#0a1628] text-[#4ade80] hover:bg-[#0a1628]/90 font-bold rounded-xl px-4 lg:px-6 h-9 lg:h-11 border-none text-xs lg:text-sm">Resume Lesson</Button>
            </div>
            
            <div className="absolute right-4 lg:right-12 bottom-0 w-40 lg:w-80 h-full pointer-events-none opacity-50 lg:opacity-100">
              <div className="absolute bottom-0 right-0 w-full h-[120%] bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Adeola')] bg-contain bg-no-repeat bg-bottom transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
            <Card className="bg-[#1a2b4b]/50 backdrop-blur-sm border border-white/5 rounded-3xl lg:rounded-[40px] p-6 lg:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <h3 className="text-lg lg:text-xl font-bold text-white">Performance</h3>
                <TrendingUp className="w-5 h-5 text-[#4ade80]" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-2xl lg:text-4xl font-black text-white">92%</p>
                    <p className="text-xs lg:text-sm text-zinc-400">Average Score</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#4ade80] text-xs lg:text-sm font-bold">+5.2%</p>
                    <p className="text-[10px] lg:text-xs text-zinc-500">vs last week</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-[#4ade80] rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                </div>
              </div>
            </Card>

            <Card className="bg-[#1a2b4b]/50 backdrop-blur-sm border border-white/5 rounded-3xl lg:rounded-[40px] p-6 lg:p-8 shadow-2xl">
              <h3 className="text-lg lg:text-xl font-bold text-white mb-6 lg:mb-8">Completion Progress</h3>
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="50%" cy="50%" r="45%" className="stroke-white/5 fill-none stroke-[8px]" />
                    <circle cx="50%" cy="50%" r="45%" className="stroke-[#4ade80] fill-none stroke-[8px]" style={{ strokeDasharray: '251', strokeDashoffset: '75' }} />
                  </svg>
                  <span className="absolute text-xs lg:text-sm font-black text-white">70%</span>
                </div>
                <div className="space-y-1">
                  <p className="text-white font-bold text-sm lg:text-base">Course Finished</p>
                  <p className="text-zinc-400 text-xs lg:text-sm">14 of 20 modules</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
            <Card className="bg-[#1a2b4b]/50 backdrop-blur-sm border border-white/5 rounded-3xl lg:rounded-[40px] p-6 lg:p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-[#4ade80]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-[#4ade80]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm lg:text-base">Time Spent</h4>
                  <p className="text-zinc-400 text-xs lg:text-sm">This week</p>
                </div>
              </div>
              <p className="text-2xl lg:text-3xl font-black text-white">12h 45m</p>
            </Card>

            <Card className="bg-[#1a2b4b]/50 backdrop-blur-sm border border-white/5 rounded-3xl lg:rounded-[40px] p-6 lg:p-8 shadow-2xl flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <h4 className="text-white font-bold text-sm lg:text-base mb-2">Current Ranking</h4>
                <p className="text-2xl lg:text-3xl font-black text-[#4ade80]">#12 / 450</p>
              </div>
              <Trophy className="absolute right-[-10px] bottom-[-10px] w-24 h-24 lg:w-32 lg:h-32 text-white/5 transform group-hover:scale-110 transition-transform duration-500" />
            </Card>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-4 space-y-6 lg:space-y-10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl lg:text-2xl font-black text-white">My Progress</h3>
            <button className="text-[#4ade80] text-xs font-bold hover:underline">View All</button>
          </div>

          <div className="bg-[#1a2b4b]/50 backdrop-blur-sm border border-white/5 rounded-3xl lg:rounded-[40px] p-6 lg:p-8 shadow-2xl">
            <div className="space-y-6 lg:space-y-8">
              {[
                { label: "Soft Skills", progress: 85, color: "#4ade80" },
                { label: "Technical Skills", progress: 62, color: "#4ade80" },
                { label: "Leadership", progress: 45, color: "#4ade80" },
              ].map((item) => (
                <div key={item.label} className="space-y-2 lg:space-y-3">
                  <div className="flex justify-between text-xs lg:text-sm">
                    <span className="text-white font-bold">{item.label}</span>
                    <span className="text-zinc-400">{item.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 lg:h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000" 
                      style={{ width: `${item.progress}%`, backgroundColor: item.color }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl lg:text-2xl font-black text-white">Upcoming Activities</h3>
            </div>
            
            <div className="space-y-3 lg:space-y-4">
              {[
                { title: "Team Collaboration", time: "10:00 AM", type: "Workshop" },
                { title: "Client Presentation", time: "02:30 PM", type: "Meeting" },
              ].map((activity) => (
                <div key={activity.title} className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#4ade80] flex items-center justify-center text-[#0a1628]">
                    <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-xs lg:text-sm">{activity.title}</h5>
                    <p className="text-zinc-400 text-[10px] lg:text-xs">{activity.time} • {activity.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-[#1a2b4b]/50 backdrop-blur-sm border border-white/5 rounded-3xl lg:rounded-[40px] p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4">Your Profile</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs lg:text-sm">
                <span className="text-zinc-400">Email</span>
                <span className="text-white font-medium">{user.email}</span>
              </div>
              {user.company && (
                <div className="flex justify-between items-center text-xs lg:text-sm">
                  <span className="text-zinc-400">Company</span>
                  <span className="text-white font-medium">{user.company}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-xs lg:text-sm">
                <span className="text-zinc-400">Role</span>
                <span className="text-[#4ade80] font-medium capitalize">{user.role}</span>
              </div>
              <div className="flex justify-between items-center text-xs lg:text-sm">
                <span className="text-zinc-400">Member Since</span>
                <span className="text-white font-medium">
                  {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
