"use client";

import { useState } from "react";
import { 
  Search, 
  Sun, 
  Moon, 
  Bell, 
  ChevronDown,
  BookOpen,
  GraduationCap,
  Award,
  BookText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserData {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string;
}

interface TutorialClientProps {
  user: UserData;
}

export default function TutorialClient({ user }: TutorialClientProps) {
  const [selection, setSelection] = useState<"professional" | "academics" | null>(null);
  
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
        <div className="flex items-center gap-4 lg:gap-8">
          <h1 className="text-lg lg:text-2xl font-black text-white">Tutorials</h1>
        </div>

        <div className="flex items-center gap-2 lg:gap-8">
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

          <div className="flex items-center gap-2 lg:gap-3 bg-white/5 pl-1.5 lg:pl-2 pr-2 lg:pr-4 py-1.5 lg:py-2 rounded-xl lg:rounded-2xl border border-white/5 cursor-pointer">
            <Avatar className="w-7 h-7 lg:w-10 lg:h-10 border-2 border-[#4ade80] p-0.5">
              <AvatarImage src={user.avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${fullName}`} />
              <AvatarFallback className="bg-[#4ade80] text-[#0a1628] font-bold text-[10px] lg:text-sm">{initials}</AvatarFallback>
            </Avatar>
            <div className="hidden sm:block text-left">
              <p className="text-xs lg:text-sm font-bold text-white leading-tight">{fullName}</p>
              <div className="flex items-center gap-1">
                <span className="text-[9px] lg:text-[10px] text-zinc-400">Student</span>
                <ChevronDown className="w-3 h-3 text-zinc-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 lg:p-10 max-w-6xl mx-auto pb-32 lg:pb-10">
        {!selection ? (
          <div className="space-y-8 lg:space-y-12">
            <div className="text-center space-y-3 lg:space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">Choose Your Path</h2>
              <p className="text-[#94a3b8] text-sm lg:text-lg max-w-2xl mx-auto px-4">Select the type of tutorial you want to explore today. We have specialized tracks for both professional certifications and academic excellence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <Card 
                onClick={() => setSelection("professional")}
                className="bg-[#1a2b4b]/50 backdrop-blur-sm border border-white/10 rounded-[32px] lg:rounded-[40px] p-6 lg:p-10 shadow-2xl hover:border-[#4ade80]/50 transition-all cursor-pointer group hover:-translate-y-1 lg:hover:-translate-y-2 duration-500"
              >
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-[#4ade80]/10 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-7 h-7 lg:w-10 lg:h-10 text-[#4ade80]" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 lg:mb-4">Professional</h3>
                <p className="text-[#94a3b8] text-sm lg:text-lg leading-relaxed mb-6 lg:mb-8">Advance your career with industry-recognized certifications and professional development programs.</p>
                <Button className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-black h-12 lg:h-14 rounded-xl lg:rounded-2xl text-base lg:text-lg">Select Professional</Button>
              </Card>

              <Card 
                onClick={() => setSelection("academics")}
                className="bg-[#1a2b4b]/50 backdrop-blur-sm border border-white/10 rounded-[32px] lg:rounded-[40px] p-6 lg:p-10 shadow-2xl hover:border-[#4ade80]/50 transition-all cursor-pointer group hover:-translate-y-1 lg:hover:-translate-y-2 duration-500"
              >
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-[#4ade80]/10 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-7 h-7 lg:w-10 lg:h-10 text-[#4ade80]" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 lg:mb-4">Academics</h3>
                <p className="text-[#94a3b8] text-sm lg:text-lg leading-relaxed mb-6 lg:mb-8">Excel in your studies with comprehensive academic resources and specialized degree preparation.</p>
                <Button className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-black h-12 lg:h-14 rounded-xl lg:rounded-2xl text-base lg:text-lg">Select Academics</Button>
              </Card>
            </div>
          </div>
        ) : (
          <div className="space-y-6 lg:space-y-10">
            <Button 
              variant="ghost" 
              onClick={() => setSelection(null)}
              className="text-[#4ade80] hover:text-white hover:bg-white/5 font-bold text-sm lg:text-base"
            >
              ← Back to Selection
            </Button>

            <Card className="bg-[#1a2b4b]/50 backdrop-blur-sm border border-white/10 rounded-[32px] lg:rounded-[40px] p-6 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 lg:p-12 opacity-5 lg:opacity-10 pointer-events-none">
                {selection === "professional" ? <Award className="w-32 h-32 lg:w-48 lg:h-48 text-[#4ade80]" /> : <GraduationCap className="w-32 h-32 lg:w-48 lg:h-48 text-[#4ade80]" />}
              </div>
              
              <div className="relative z-10 space-y-6 lg:space-y-8">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-[#4ade80]/10 text-[#4ade80] rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest">
                    {selection} track
                  </span>
                </div>

                <h2 className="text-2xl lg:text-5xl font-black text-white leading-tight">
                  {selection === "professional" ? "CIPM Exam Preparation" : "MSc Academic Excellence"}
                </h2>

                <div className="max-w-3xl">
                  {selection === "professional" ? (
                    <div className="space-y-4 lg:space-y-6 text-[#94a3b8] text-sm lg:text-xl leading-relaxed">
                      <p>
                        The Chartered Institute of Personnel Management (CIPM) exam is the gold standard for HR professionals. Our tutorial program covers the entire syllabus.
                      </p>
                      <ul className="space-y-3 lg:space-y-4">
                        <li className="flex items-start gap-3 text-white font-medium">
                          <div className="mt-1.5 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#4ade80] shrink-0" />
                          Comprehensive study materials and practice exams
                        </li>
                        <li className="flex items-start gap-3 text-white font-medium">
                          <div className="mt-1.5 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#4ade80] shrink-0" />
                          Expert-led sessions on labor laws and ethics
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-4 lg:space-y-6 text-[#94a3b8] text-sm lg:text-xl leading-relaxed">
                      <p>
                        Our MSc description provides a rigorous academic path designed to elevate your research and analytical skills.
                      </p>
                      <ul className="space-y-3 lg:space-y-4">
                        <li className="flex items-start gap-3 text-white font-medium">
                          <div className="mt-1.5 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#4ade80] shrink-0" />
                          Advanced research methodology training
                        </li>
                        <li className="flex items-start gap-3 text-white font-medium">
                          <div className="mt-1.5 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#4ade80] shrink-0" />
                          Thesis and dissertation support
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-4 lg:pt-8">
                  <Button className="w-full sm:w-auto bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-black px-8 lg:px-10 h-14 lg:h-20 rounded-xl lg:rounded-2xl text-lg lg:text-xl shadow-xl shadow-[#4ade80]/20">
                    Start Tutorial Now
                  </Button>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-[#1a2b4b]/30 border border-white/5 rounded-2xl lg:rounded-3xl p-5 lg:p-6 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:bg-[#4ade80]/10 transition-colors">
                      <BookText className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-400 group-hover:text-[#4ade80]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm lg:text-base">Module {i}</h4>
                      <p className="text-[10px] lg:text-xs text-zinc-500">2.5 hours • 12 lessons</p>
                    </div>
                  </div>
                  <div className="h-1 lg:h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#4ade80]/30 w-0 group-hover:w-1/3 transition-all duration-1000" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
