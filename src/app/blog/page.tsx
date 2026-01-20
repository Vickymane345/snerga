"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  Calendar,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Newspaper,
  Tag,
  Download,
  Share2,
  ChevronRight,
  Globe,
  Award,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ---------------- DATA ---------------- */

const posts = [
  {
    title: "Navigating the Future of Human Capital in 2025",
    excerpt:
      "Discover the latest trends in workforce optimization and how AI is reshaping the HR landscape in Nigeria.",
    author: "Adepitan Adebayo",
    date: "Jan 15, 2025",
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    readTime: "5 min read",
    tags: ["AI", "HR Tech", "Nigeria"],
  },
  {
    title: "Effective Mentorship: Beyond the Basics",
    excerpt:
      "How personalized coaching can unlock hidden potential within your leadership teams.",
    author: "Grace Oluchi",
    date: "Jan 12, 2025",
    category: "Leadership",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    readTime: "4 min read",
    tags: ["Coaching", "Leadership", "Growth"],
  },
];

const categories = [
  "All",
  "Strategy",
  "Leadership",
  "Operations",
  "Training",
  "Insights",
];

const trendingTags = [
  "AI in HR",
  "Workplace Culture",
  "Remote Teams",
  "Diversity",
  "Retention",
  "Lagos Tech",
];

const upcomingEvents = [
  { title: "Future of Work Summit 2025", date: "Feb 12", location: "Lagos" },
  { title: "HR Tech Africa Webinar", date: "Feb 20", location: "Online" },
  { title: "Leadership Retreat", date: "Mar 05", location: "Abuja" },
];

/* ---------------- PAGE ---------------- */

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] overflow-x-hidden">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 text-[#4ade80] text-xs sm:text-sm font-black mb-6 tracking-tighter">
            <Newspaper className="w-4 h-4" />
            SYNERGASIA INSIGHTS
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
            Decoding <span className="text-[#4ade80]">Success</span>
          </h1>

          <p className="text-[#94a3b8] text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-medium">
            Advanced strategies for the modern workforce.
          </p>
        </div>

        {/* FEATURED */}
        <div className="mb-24">
          <div className="rounded-[40px] md:rounded-[60px] border border-white/5 bg-[#111d32]/30 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-[260px] sm:h-[400px] lg:h-[650px]">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
                  alt="Featured"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-10 lg:p-20 relative">
                <Award className="absolute top-0 right-0 w-40 h-40 opacity-5" />

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
                  Innovating Recruitment in Africa
                </h2>

                <p className="text-[#94a3b8] text-lg sm:text-xl mb-8">
                  How African companies are shaping the future of talent.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#4ade80] text-[#0a1628] font-black px-8 py-6 rounded-2xl">
                    Read Analysis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-white/10 text-white px-8 py-6 rounded-2xl"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="sticky top-16 md:top-24 bg-[#0a1628]/95 backdrop-blur-md py-4 mb-12 border-y border-white/5 -mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between max-w-7xl mx-auto">
            <div className="flex gap-3 overflow-x-auto w-full lg:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-6 py-3 rounded-xl text-xs font-black uppercase whitespace-nowrap ${
                    cat === "All"
                      ? "bg-[#4ade80] text-[#0a1628]"
                      : "bg-white/5 text-[#94a3b8]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-[420px]">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
              <input
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-white/5 text-white"
                placeholder="Search..."
              />
              <span className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 text-xs text-[#64748b]">
                CMD + K
              </span>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <Card
                key={i}
                className="bg-[#111d32]/20 border border-white/5 rounded-[32px] overflow-hidden flex flex-col"
              >
                <div className="relative h-60">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {post.title}
                  </h3>
                  <p className="text-[#94a3b8] mb-6">{post.excerpt}</p>

                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-xs text-[#64748b] font-bold">
                      {post.author}
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#4ade80]" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SIDEBAR */}
          <aside className="col-span-12 lg:col-span-4 space-y-10 mt-16 lg:mt-0">
            <div className="bg-[#111d32]/20 border border-white/5 rounded-[32px] p-8">
              <h4 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                <Tag className="w-5 h-5 text-[#4ade80]" />
                Trending
              </h4>

              <div className="flex flex-wrap gap-3">
                {trendingTags.map((tag) => (
                  <button
                    key={tag}
                    className="px-4 py-2 bg-white/5 text-xs font-bold text-[#94a3b8] rounded-xl"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#111d32]/20 border border-white/5 rounded-[32px] p-8">
              <h4 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#4ade80]" />
                Events
              </h4>

              {upcomingEvents.map((e) => (
                <div key={e.title} className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#4ade80]/10 text-[#4ade80] flex flex-col items-center justify-center font-black">
                    <span className="text-xs">{e.date.split(" ")[0]}</span>
                    <span>{e.date.split(" ")[1]}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{e.title}</p>
                    <p className="text-xs text-[#64748b]">{e.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
