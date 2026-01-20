"use client";

import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Trophy, 
  Briefcase, 
  LogOut,
  ChevronRight
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AdminSidebar() {
  const pathname = usePathname();

  const mobileMenuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/admin" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: GraduationCap, label: "Pro", href: "/admin/professional" },
    { icon: BookOpen, label: "Acad", href: "/admin/academic" },
    { icon: Trophy, label: "Scores", href: "/admin/scores" },
  ];

  const fullMenuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/admin" },
    { icon: Users, label: "Users List", href: "/admin/users" },
    { 
      title: "Content Management",
      items: [
        { icon: GraduationCap, label: "Professional", subLabel: "Questions", href: "/admin/professional" },
        { icon: BookOpen, label: "Academic", subLabel: "Past Questions", href: "/admin/academic" },
      ]
    },
    { icon: Trophy, label: "User Scores", href: "/admin/scores" },
    { icon: Briefcase, label: "Job Postings", href: "/admin/jobs" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-[280px] bg-[#0a1628] hidden lg:flex flex-col h-screen fixed left-0 top-0 z-40 border-r border-white/5">
        <div className="p-10 mb-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#4ade80] rounded-lg flex items-center justify-center">
              <span className="text-[#0a1628] font-bold text-xl">S</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">ADMIN</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-4">
          {fullMenuItems.map((item, index) => {
            if ('title' in item) {
              return (
                <div key={index} className="space-y-2">
                  <p className="px-6 text-[10px] font-black text-zinc-500 uppercase tracking-widest">{item.title}</p>
                  {item.items.map((subItem) => {
                    const isActive = pathname === subItem.href;
                    return (
                      <Link key={subItem.href} href={subItem.href} className="block">
                        <div className={cn(
                          "flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 group relative",
                          isActive 
                            ? "bg-[#4ade80]/10 text-[#4ade80]" 
                            : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                        )}>
                          <subItem.icon className={cn(
                            "w-6 h-6 transition-colors",
                            isActive ? "text-[#4ade80]" : "group-hover:text-white"
                          )} />
                          <div>
                            <p className="font-bold text-lg leading-tight">{subItem.label}</p>
                            <p className="text-[10px] opacity-60 font-medium uppercase tracking-tighter">{subItem.subLabel}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="block">
                <div className={cn(
                  "flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 group relative",
                  isActive 
                    ? "bg-[#4ade80]/10 text-[#4ade80]" 
                    : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                )}>
                  {isActive && (
                    <div className="absolute left-0 w-1.5 h-8 bg-[#4ade80] rounded-r-full shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
                  )}
                  <item.icon className={cn(
                    "w-6 h-6 transition-colors",
                    isActive ? "text-[#4ade80]" : "group-hover:text-white"
                  )} />
                  <span className="font-bold text-lg">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-6">
          <Link href="/dashboard" className="block">
            <button className="w-full flex items-center justify-center gap-2 bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10 px-6 py-4 rounded-2xl transition-all font-bold">
              <LogOut className="w-5 h-5" />
              Exit Admin
            </button>
          </Link>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-lg border-t border-white/5 px-4 h-20 flex items-center justify-around pb-safe">
        {mobileMenuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 group">
              <div className={cn(
                "p-2 rounded-xl transition-all duration-300",
                isActive ? "bg-[#4ade80] text-[#0a1628]" : "text-[#94a3b8]"
              )}>
                <item.icon className="w-6 h-6" />
              </div>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest",
                isActive ? "text-[#4ade80]" : "text-[#94a3b8]"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
