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
  Users
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    title: "Navigating the Future of Human Capital in 2025",
    excerpt: "Discover the latest trends in workforce optimization and how AI is reshaping the HR landscape in Nigeria. We dive deep into data-driven decision making and the rise of hybrid work cultures.",
    author: "Adepitan Adebayo",
    date: "Jan 15, 2025",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    readTime: "5 min read",
    tags: ["AI", "HR Tech", "Nigeria"]
  },
  {
    title: "Effective Mentorship: Beyond the Basics",
    excerpt: "How personalized coaching can unlock hidden potential within your leadership teams. Learn the framework for building a mentorship program that actually delivers measurable ROI.",
    author: "Grace Oluchi",
    date: "Jan 12, 2025",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    readTime: "4 min read",
    tags: ["Coaching", "Leadership", "Growth"]
  },
  {
    title: "The Pivot to Remote Work in Lagos",
    excerpt: "Lessons learned from building high-performing remote teams in Africa's largest tech hub. Challenges, solutions, and the productivity myth debunked with local data.",
    author: "Tunde Williams",
    date: "Jan 10, 2025",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    readTime: "6 min read",
    tags: ["Remote Work", "Lagos", "Productivity"]
  },
  {
    title: "Scalable Recruitment for Fast-Growing Startups",
    excerpt: "A guide for founders on how to hire their first 50 employees without losing company culture. Focus on value-based hiring and automated screening pipelines.",
    author: "Sarah Johnson",
    date: "Jan 05, 2025",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    readTime: "8 min read",
    tags: ["Startups", "Hiring", "Culture"]
  },
  {
    title: "Understanding Employee Engagement in Post-Pandemic Era",
    excerpt: "Why traditional engagement surveys are failing and what you should be measuring instead. Hint: It's all about psychological safety and clear communication.",
    author: "Bisi Akande",
    date: "Dec 28, 2024",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    readTime: "7 min read",
    tags: ["Engagement", "Psychology", "HR"]
  },
  {
    title: "The Rise of Soft Skills in Technical Roles",
    excerpt: "Why the most successful engineers are often those with the highest emotional intelligence. How to interview for empathy and collaboration skills effectively.",
    author: "David Chen",
    date: "Dec 22, 2024",
    category: "Training",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    readTime: "5 min read",
    tags: ["Soft Skills", "Tech", "Teamwork"]
  }
];

const categories = ["All", "Strategy", "Leadership", "Operations", "Training", "Insights"];
const trendingTags = ["AI in HR", "Workplace Culture", "Remote Teams", "Diversity", "Retention", "Lagos Tech"];

const upcomingEvents = [
  { title: "Future of Work Summit 2025", date: "Feb 12", location: "Lagos, Nigeria" },
  { title: "HR Tech Africa Webinar", date: "Feb 20", location: "Online" },
  { title: "Executive Leadership Retreat", date: "Mar 05", location: "Abuja" }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 text-[#4ade80] text-sm font-black mb-8 tracking-tighter"
          >
            <Newspaper className="w-4 h-4" />
            SYNERGASIA INSIGHTS ENGINE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Decoding <span className="text-[#4ade80]">Success</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#94a3b8] text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Advanced strategies for the modern workforce. We provide the blueprint for organizational excellence in the digital age.
          </motion.p>
        </div>

        {/* Featured Hero Article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-32 group"
        >
          <div className="relative overflow-hidden rounded-[60px] border border-white/5 bg-[#111d32]/30 backdrop-blur-3xl shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="h-[400px] lg:h-[650px] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
                  alt="Featured Post"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60" />
                <div className="absolute top-10 left-10">
                  <div className="px-6 py-2 rounded-full bg-[#4ade80] text-[#0a1628] text-xs font-black uppercase tracking-widest shadow-xl">
                    Must Read
                  </div>
                </div>
              </div>
              <div className="p-12 lg:p-20 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Award className="w-64 h-64 text-[#4ade80]" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-[#4ade80] font-black text-xs uppercase tracking-[0.2em]">Whitepaper 2025</span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] hover:text-[#4ade80] transition-colors cursor-pointer">
                    Innovating Recruitment: How Africa is Leading the New Talent Economy
                  </h2>
                  <p className="text-[#94a3b8] text-xl mb-10 leading-relaxed font-medium">
                    As the global workforce shifts, African organizations are adopting unique strategies for talent acquisition and retention that prioritize agility, cultural alignment, and remote-first scaling.
                  </p>
                  <div className="flex items-center gap-8 mb-12">
                    <div className="flex -space-x-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0a1628] bg-[#1e3a5f] overflow-hidden">
                          <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=dev${i}`} alt="Author" width={48} height={48} />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-white font-black text-lg">Synergasia Strategy Lab</p>
                      <p className="text-[#94a3b8] font-bold text-sm tracking-wide">Published Jan 20, 2025 • 15 min deep dive</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-black py-8 px-10 rounded-[24px] text-lg group/btn shadow-[0_20px_40px_rgba(74,222,128,0.2)]">
                      Read Analysis
                      <ArrowRight className="ml-3 w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                    <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold py-8 px-8 rounded-[24px] text-lg">
                      <Download className="mr-3 w-6 h-6" /> JSON Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Filters & Search */}
        <div className="sticky top-24 z-20 bg-[#0a1628]/95 backdrop-blur-md py-6 mb-16 border-y border-white/5 mx-[-24px] px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-8 py-3 rounded-2xl text-sm font-black transition-all whitespace-nowrap uppercase tracking-widest ${
                    cat === "All" ? "bg-[#4ade80] text-[#0a1628] shadow-lg shadow-[#4ade80]/20" : "bg-white/5 text-[#94a3b8] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-[450px]">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search archive..."
                className="w-full pl-16 pr-8 py-5 bg-white/5 border border-white/10 rounded-[24px] text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#4ade80]/50 transition-all font-bold text-lg"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#94a3b8] font-black text-xs">
                CMD + K
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="col-span-12 lg:col-span-8 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-[#111d32]/20 border border-white/5 hover:border-[#4ade80]/40 transition-all group overflow-hidden rounded-[40px] h-full flex flex-col shadow-xl">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6 flex gap-2">
                        <span className="px-5 py-2 rounded-full bg-[#0a1628]/80 backdrop-blur-md text-[#4ade80] text-[10px] font-black uppercase tracking-[0.15em] border border-white/10">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                        <div className="w-12 h-12 rounded-full bg-[#4ade80] flex items-center justify-center text-[#0a1628]">
                          <Share2 className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-10 flex-1 flex flex-col">
                      <div className="flex items-center gap-6 text-[#94a3b8] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#4ade80]" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-[#4ade80]" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-[#4ade80] transition-colors leading-[1.2] tracking-tight">
                        {post.title}
                      </h3>
                      <p className="text-[#94a3b8] text-lg mb-8 line-clamp-3 font-medium leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-bold text-[#64748b] bg-white/5 px-3 py-1 rounded-md">#{tag}</span>
                        ))}
                      </div>

                      <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#4ade80] to-[#22c55e] flex items-center justify-center text-[#0a1628] font-black text-sm">
                            {post.author[0]}
                          </div>
                          <div>
                            <p className="text-white text-sm font-black">{post.author}</p>
                            <p className="text-[#64748b] text-[10px] font-bold">CONTRIBUTOR</p>
                          </div>
                        </div>
                        <Link href={`#`} className="p-3 bg-white/5 rounded-2xl text-[#4ade80] hover:bg-[#4ade80] hover:text-[#0a1628] transition-all transform hover:rotate-45">
                          <ArrowRight className="w-6 h-6" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More Section */}
            <div className="flex justify-center pt-8">
              <Button variant="ghost" className="group text-white font-black text-xl uppercase tracking-tighter flex items-center gap-4 hover:text-[#4ade80]">
                Explore More Insights
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#4ade80] transition-colors">
                  <ChevronRight className="w-6 h-6 animate-pulse" />
                </div>
              </Button>
            </div>
          </div>

          {/* Sidebar Column */}
          <aside className="col-span-12 lg:col-span-4 space-y-12">
            {/* Trending Tags Widget */}
            <div className="bg-[#111d32]/20 border border-white/5 rounded-[40px] p-10 backdrop-blur-3xl">
              <h4 className="text-2xl font-black text-white mb-8 uppercase tracking-widest flex items-center gap-3">
                <Tag className="w-6 h-6 text-[#4ade80]" />
                Trending
              </h4>
              <div className="flex flex-wrap gap-3">
                {trendingTags.map((tag, i) => (
                  <button key={i} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5 text-[#94a3b8] text-sm font-bold hover:bg-[#4ade80]/10 hover:text-[#4ade80] hover:border-[#4ade80]/30 transition-all uppercase tracking-wider">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Upcoming Events Widget */}
            <div className="bg-[#111d32]/20 border border-white/5 rounded-[40px] p-10 backdrop-blur-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Globe className="w-32 h-32 text-blue-400" />
              </div>
              <h4 className="text-2xl font-black text-white mb-8 uppercase tracking-widest flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#4ade80]" />
                Industry Events
              </h4>
              <div className="space-y-6">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex gap-6">
                      <div className="w-16 h-16 rounded-[20px] bg-[#4ade80]/10 border border-[#4ade80]/20 flex flex-col items-center justify-center text-[#4ade80]">
                        <span className="text-sm font-black uppercase leading-none">{event.date.split(' ')[0]}</span>
                        <span className="text-xl font-black leading-none mt-1">{event.date.split(' ')[1]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-white font-bold group-hover:text-[#4ade80] transition-colors truncate">{event.title}</h5>
                        <p className="text-[#64748b] text-xs font-bold uppercase tracking-widest mt-1">{event.location}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#1e3a5f] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-10 bg-white/5 hover:bg-white/10 text-white font-black py-6 rounded-2xl uppercase tracking-widest text-xs">
                View Global Calendar
              </Button>
            </div>

            {/* Newsletter Ad Widget */}
            <div className="rounded-[40px] bg-gradient-to-br from-[#4ade80] to-[#22c55e] p-12 text-[#0a1628] relative overflow-hidden group shadow-2xl shadow-[#4ade80]/20">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <h4 className="text-3xl font-black uppercase leading-[0.9] mb-6 tracking-tighter" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  Join the Syner<span className="opacity-70">gasia</span> Circle
                </h4>
                <p className="font-bold text-lg mb-8 leading-tight opacity-90">
                  Join 10,000+ HR leaders receiving our weekly strategic blueprints.
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Work email..."
                    className="w-full px-6 py-4 rounded-2xl bg-[#0a1628] text-white placeholder:text-[#64748b] focus:outline-none border-none font-bold shadow-2xl"
                  />
                  <Button className="w-full bg-[#0a1628] hover:bg-[#0a1628]/90 text-[#4ade80] font-black py-4 rounded-2xl text-xs uppercase tracking-[0.2em]">
                    Subscribe Now
                  </Button>
                </div>
                <p className="text-[10px] font-black mt-6 opacity-60 uppercase tracking-widest text-center">No spam. Only strategy.</p>
              </div>
            </div>

            {/* Top Contributors Widget */}
            <div className="bg-[#111d32]/20 border border-white/5 rounded-[40px] p-10 backdrop-blur-3xl">
               <h4 className="text-2xl font-black text-white mb-8 uppercase tracking-widest flex items-center gap-3">
                <Users className="w-6 h-6 text-[#4ade80]" />
                Contributors
              </h4>
              <div className="space-y-6">
                {[
                  { name: "Grace Oluchi", role: "Chief Strategy Officer", points: 42 },
                  { name: "Adepitan Adebayo", role: "Senior Analyst", points: 38 },
                  { name: "Sarah Johnson", role: "Workforce Architect", points: 29 }
                ].map((user, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-[#0a1628] flex items-center justify-center font-black text-[#4ade80] border border-white/5 group-hover:border-[#4ade80]/30 transition-all">
                      {user.name[0]}
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-sm group-hover:text-[#4ade80] transition-colors">{user.name}</h5>
                      <p className="text-[#64748b] text-[10px] font-black uppercase tracking-widest">{user.role}</p>
                    </div>
                    <div className="ml-auto text-[#4ade80] font-black text-xs">
                      +{user.points}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Big Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-16 md:p-32 rounded-[80px] bg-[#111d32] border border-white/5 relative overflow-hidden text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(74,222,128,0.15),transparent)] pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-black text-white mb-10 leading-[0.9] uppercase tracking-tighter" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Ready to <span className="text-[#4ade80]">Synergize?</span>
            </h2>
            <p className="text-[#94a3b8] text-xl md:text-2xl mb-16 font-medium leading-relaxed">
              Don't just adapt to the future. Shape it. Partner with Synergasia today and unlock the true potential of your human capital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-black px-16 py-10 rounded-[32px] text-xl uppercase tracking-tighter shadow-2xl">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 font-black px-16 py-10 rounded-[32px] text-xl uppercase tracking-tighter">
                Our Services
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="py-24 bg-[#0a1628] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2 lg:col-span-2">
               <Link href="/" className="flex items-center gap-3 mb-8">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-15-at-23.43.04_ad35597b-1765842404829.jpg?width=8000&height=8000&resize=contain"
                  alt="SYNERGASIA Logo"
                  width={48}
                  height={48}
                  className="rounded-xl shadow-2xl"
                />
                <span className="text-white font-black text-3xl tracking-tighter">SYNERGASIA</span>
              </Link>
              <p className="text-[#64748b] text-lg font-medium leading-relaxed max-w-sm mb-10">
                The leading authority in human capital development and strategic organizational growth across Africa.
              </p>
              <div className="flex gap-4">
                {['TW', 'IN', 'FB', 'IG'].map(social => (
                  <div key={social} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white font-black text-xs hover:bg-[#4ade80] hover:text-[#0a1628] cursor-pointer transition-all">
                    {social}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-white font-black uppercase text-xs tracking-widest mb-8">Solutions</h5>
              <ul className="space-y-4">
                {['Strategy', 'Leadership', 'Operations', 'Recruitment', 'Training'].map(link => (
                  <li key={link} className="text-[#64748b] font-bold text-sm hover:text-[#4ade80] cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>
            <div>
               <h5 className="text-white font-black uppercase text-xs tracking-widest mb-8">Resources</h5>
              <ul className="space-y-4">
                {['Case Studies', 'Whitepapers', 'Insights', 'Events', 'Archive'].map(link => (
                  <li key={link} className="text-[#64748b] font-bold text-sm hover:text-[#4ade80] cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>
            <div>
               <h5 className="text-white font-black uppercase text-xs tracking-widest mb-8">Company</h5>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Contact', 'Press', 'Legal'].map(link => (
                  <li key={link} className="text-[#64748b] font-bold text-sm hover:text-[#4ade80] cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[#64748b] text-sm font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} SYNERGASIA LIMITED. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <span className="text-[#64748b] text-xs font-black hover:text-white cursor-pointer uppercase tracking-widest">Privacy Policy</span>
              <span className="text-[#64748b] text-xs font-black hover:text-white cursor-pointer uppercase tracking-widest">Terms of Service</span>
              <span className="text-[#64748b] text-xs font-black hover:text-white cursor-pointer uppercase tracking-widest">Cookie Settings</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
