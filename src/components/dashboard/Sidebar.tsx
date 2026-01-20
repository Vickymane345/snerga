"use client";

import { 
  Home, 
  BookOpen, 
  Briefcase,
  UserCircle
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: BookOpen, label: "Tutorial", href: "/dashboard/tutorial" },
  { icon: Briefcase, label: "Job Search", href: "/dashboard/job-search" },
  { icon: UserCircle, label: "CV", href: "/dashboard/cv" },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-[280px] bg-[#0a1628] flex-col h-screen fixed left-0 top-0 z-40 border-r border-white/5">
        <div className="p-10 mb-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-15-at-23.43.04_ad35597b-1765842404829.jpg?width=8000&height=8000&resize=contain"
              alt="SYNERGASIA Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-white font-bold text-xl tracking-tight">SYNERGASIA</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
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
                  <Icon className={cn(
                    "w-6 h-6 transition-colors",
                    isActive ? "text-[#4ade80]" : "group-hover:text-white"
                  )} />
                  <span className="font-bold text-lg">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto w-6 h-6 rounded-full bg-[#4ade80] text-[#0a1628] text-[10px] font-black flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-6">
          <div className="bg-[#1a2b4b] rounded-3xl p-6 border border-white/5">
            <p className="text-white font-bold text-sm mb-2">Pro Access</p>
            <p className="text-[#94a3b8] text-xs mb-4">Get unlimited access to all courses and tutorials.</p>
            <Button className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-bold text-xs h-10">Upgrade Now</Button>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-lg border-t border-white/5 px-4 h-20 flex items-center justify-around pb-safe">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 group">
              <div className={cn(
                "p-2 rounded-xl transition-all duration-300",
                isActive ? "bg-[#4ade80] text-[#0a1628]" : "text-[#94a3b8]"
              )}>
                <Icon className="w-6 h-6" />
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
