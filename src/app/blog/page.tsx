"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Newspaper,
  Tag,
  Download,
  Share2,
  Bookmark,
  ChevronRight,
  Globe,
  Award,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ===================== DATA ===================== */

const posts = [
  {
    title: "Navigating the Future of Human Capital in 2025",
    excerpt:
      "Discover the latest trends in workforce optimization and how AI is reshaping the HR landscape in Nigeria. We dive deep into data-driven decision making and the rise of hybrid work cultures.",
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
      "How personalized coaching can unlock hidden potential within your leadership teams. Learn the framework for building a mentorship program that actually delivers measurable ROI.",
    author: "Grace Oluchi",
    date: "Jan 12, 2025",
    category: "Leadership",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    readTime: "4 min read",
    tags: ["Coaching", "Leadership", "Growth"],
  },
  {
    title: "The Pivot to Remote Work in Lagos",
    excerpt:
      "Lessons learned from building high-performing remote teams in Africa's largest tech hub. Challenges, solutions, and the productivity myth debunked with local data.",
    author: "Tunde Williams",
    date: "Jan 10, 2025",
    category: "Operations",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    readTime: "6 min read",
    tags: ["Remote Work", "Lagos", "Productivity"],
  },
  {
    title: "Scalable Recruitment for Fast-Growing Startups",
    excerpt:
      "A guide for founders on how to hire their first 50 employees without losing company culture. Focus on value-based hiring and automated screening pipelines.",
    author: "Sarah Johnson",
    date: "Jan 05, 2025",
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    readTime: "8 min read",
    tags: ["Startups", "Hiring", "Culture"],
  },
  {
    title: "Understanding Employee Engagement in Post-Pandemic Era",
    excerpt:
      "Why traditional engagement surveys are failing and what you should be measuring instead. Hint: It's all about psychological safety and clear communication.",
    author: "Bisi Akande",
    date: "Dec 28, 2024",
    category: "Insights",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    readTime: "7 min read",
    tags: ["Engagement", "Psychology", "HR"],
  },
  {
    title: "The Rise of Soft Skills in Technical Roles",
    excerpt:
      "Why the most successful engineers are often those with the highest emotional intelligence. How to interview for empathy and collaboration skills effectively.",
    author: "David Chen",
    date: "Dec 22, 2024",
    category: "Training",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    readTime: "5 min read",
    tags: ["Soft Skills", "Tech", "Teamwork"],
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
  {
    title: "Future of Work Summit 2025",
    date: "Feb 12",
    location: "Lagos, Nigeria",
  },
  { title: "HR Tech Africa Webinar", date: "Feb 20", location: "Online" },
  { title: "Executive Leadership Retreat", date: "Mar 05", location: "Abuja" },
];

/* ===================== PAGE ===================== */

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] overflow-x-hidden">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 text-[#4ade80] text-xs sm:text-sm font-black mb-8 tracking-tighter"
          >
            <Newspaper className="w-4 h-4" />
            SYNERGASIA INSIGHTS ENGINE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.95]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Decoding <span className="text-[#4ade80]">Success</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#94a3b8] text-base sm:text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Advanced strategies for the modern workforce. We provide the
            blueprint for organizational excellence in the digital age.
          </motion.p>
        </div>

        {/* ================= FEATURED HERO ================= */}
        <motion.div className="mb-24 sm:mb-32">
          <div className="relative overflow-hidden rounded-[40px] sm:rounded-[60px] border border-white/5 bg-[#111d32]/30 backdrop-blur-3xl shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="h-[280px] sm:h-[350px] lg:h-[650px] relative">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
                  alt="Featured Post"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-10 lg:p-20 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Innovating Recruitment: How Africa is Leading the New Talent
                  Economy
                </h2>
                <p className="text-[#94a3b8] text-base sm:text-lg mb-8">
                  As the global workforce shifts, African organizations are
                  adopting unique strategies for talent acquisition and
                  retention.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#4ade80] text-[#0a1628] font-black px-8 py-6 rounded-2xl">
                    Read Analysis
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/10 text-white px-8 py-6 rounded-2xl"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    JSON Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {posts.map((post, i) => (
                <Card
                  key={i}
                  className="bg-[#111d32]/20 border border-white/5 rounded-[32px] overflow-hidden"
                >
                  <div className="relative h-56 sm:h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      {post.title}
                    </h3>
                    <p className="text-[#94a3b8] text-sm sm:text-base mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-xs font-bold text-[#64748b]">
                        {post.author}
                      </span>
                      <ArrowRight className="text-[#4ade80]" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="col-span-12 lg:col-span-4 space-y-10">
            <div className="bg-[#111d32]/20 border border-white/5 rounded-[32px] p-6 sm:p-8">
              <h4 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                <Tag className="text-[#4ade80]" /> Trending
              </h4>
              <div className="flex flex-wrap gap-3">
                {trendingTags.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold text-[#94a3b8]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
