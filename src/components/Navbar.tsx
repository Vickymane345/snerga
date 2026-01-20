"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  // Mock user state - always null for landing page to show Login/Signup
  const [user] = useState(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-15-at-23.43.04_ad35597b-1765842404829.jpg?width=8000&height=8000&resize=contain"
            alt="SYNERGASIA Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-white font-semibold text-lg tracking-tight">SYNERGASIA</span>
        </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-[#94a3b8] hover:text-white transition-colors text-sm font-medium">Services</Link>
            <Link href="/about" className="text-[#94a3b8] hover:text-white transition-colors text-sm font-medium">About</Link>
            <Link href="/blog" className="text-white bg-[#4ade80]/20 px-3 py-1 rounded-full border border-[#4ade80]/30 hover:bg-[#4ade80]/30 transition-all text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              NEW: BLOG
            </Link>
            <Link href="/values" className="text-[#94a3b8] hover:text-white transition-colors text-sm font-medium">Values</Link>
            <Link href="/contact" className="text-[#94a3b8] hover:text-white transition-colors text-sm font-medium">Contact</Link>
          </div>
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <Link href="/dashboard">
                    <Button variant="ghost" className="text-[#94a3b8] hover:text-white transition-colors">
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="border-[#1e3a5f] text-[#94a3b8] hover:text-white hover:bg-[#1e3a5f]">
                      Sign Out
                    </Button>
                  </Link>
                </>
                ) : (
                  <>
                      <Link href="/login">
                        <Button variant="ghost" className="text-[#94a3b8] hover:text-white transition-colors">
                          Login
                        </Button>
                      </Link>
                      <Link href="/signup">
                        <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-semibold px-6">
                          Sign Up
                        </Button>
                      </Link>
                  </>
                )}
            </div>

      </div>
    </nav>
  );
}
