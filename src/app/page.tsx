"use client";

import { motion } from "framer-motion";
import { 
  Users, GraduationCap, MessageCircle, Briefcase, TrendingUp, Building2, 
  Phone, Mail, MapPin, ChevronRight, Shield, Lightbulb, Sparkles, Heart,
  Award, CheckCircle2, MessageSquareQuote, HelpCircle, Rocket, Search, 
  Settings, Target, ArrowRight, Quote, Globe, BarChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    icon: Users,
    title: "Human Capital Development",
    description: "Building high-performing teams through strategic talent management and workforce optimization solutions."
  },
  {
    icon: GraduationCap,
    title: "Learning and Development",
    description: "Comprehensive training programs designed to enhance skills, knowledge, and professional growth."
  },
  {
    icon: MessageCircle,
    title: "Coaching and Mentoring",
    description: "Personalized guidance to unlock potential and accelerate career and organizational success."
  },
  {
    icon: Briefcase,
    title: "Recruitment and Placement",
    description: "Connecting organizations with exceptional talent through rigorous selection processes."
  },
  {
    icon: TrendingUp,
    title: "Business Development & Support",
    description: "Strategic support services to drive business growth and operational excellence."
  },
  {
    icon: Building2,
    title: "Consultancy Services & Outsourcing",
    description: "Expert advisory and flexible outsourcing solutions tailored to your unique needs."
  }
];

const values = [
  { letter: "R", word: "Resilience", icon: Shield, description: "Adapting and thriving through challenges" },
  { letter: "I", word: "Integrity", icon: Heart, description: "Ethical conduct in all relationships" },
  { letter: "C", word: "Creativity", icon: Lightbulb, description: "Innovative solutions for complex problems" },
  { letter: "H", word: "Heritage", icon: Sparkles, description: "Building lasting organizational legacies" }
];

const stats = [
  { label: "Professionals Placed", value: "500+", icon: Users },
  { label: "Corporate Partners", value: "50+", icon: Building2 },
  { label: "Years of Excellence", value: "15+", icon: Award },
  { label: "Success Rate", value: "98%", icon: TrendingUp }
];

const processSteps = [
  {
    title: "Discovery & Analysis",
    description: "We dive deep into your organizational culture and specific needs to identify key opportunities.",
    icon: Search
  },
  {
    title: "Strategic Mapping",
    description: "Our experts design a tailored roadmap aligned with your long-term business objectives.",
    icon: Target
  },
  {
    title: "Execution & Deployment",
    description: "We implement solutions with precision, ensuring seamless integration and minimal disruption.",
    icon: Rocket
  },
  {
    title: "Continuous Optimization",
    description: "We monitor performance and provide ongoing support to ensure sustainable growth.",
    icon: Settings
  }
];

const testimonials = [
  {
    name: "Olawale Johnson",
    role: "HR Director, FinTech Solutions",
    content: "SYNERGASIA transformed our recruitment process. Their understanding of the Nigerian talent landscape is unparalleled.",
    avatar: "OJ"
  },
  {
    name: "Sarah Alabi",
    role: "CEO, Retail Dynamics",
    content: "The leadership training provided by SYNERGASIA has significantly improved our middle management's performance and morale.",
    avatar: "SA"
  },
  {
    name: "Chidi Okoro",
    role: "Operations Manager, Global Logistics",
    content: "Reliable, professional, and ethical. They are truly partners in our growth journey.",
    avatar: "CO"
  }
];

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We serve a diverse range of industries including FinTech, Healthcare, Logistics, Retail, and Telecommunications, providing tailored human capital solutions for each."
  },
  {
    question: "How long does your recruitment process typically take?",
    answer: "Depending on the complexity of the role, our rigorous selection process usually takes between 2 to 4 weeks to ensure we find the perfect match for your culture."
  },
  {
    question: "Do you offer remote consulting services?",
    answer: "Yes, we provide both on-site and virtual consulting and coaching sessions to accommodate organizations with distributed workforces."
  }
];

const partners = ["TechCorp", "GlobalLogistics", "RetailHub", "HealthFirst", "EduSystems", "EcoPower"];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#111d32] to-[#0a1628]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#4ade80]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/40 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(74, 222, 128, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#1e3a5f] text-[#4ade80] text-sm font-medium mb-6 border border-[#4ade80]/30 shadow-lg shadow-[#4ade80]/10">
              Human Capital Solutions Partner
            </span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
              SYNERGASIA
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#22c55e]">LIMITED</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto mb-8 leading-relaxed">
              Empowering organizations with people-centered solutions that drive excellence, agility, and sustainable growth across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-semibold px-8 py-7 text-lg group transition-all duration-300 transform hover:scale-105">
                  Explore Our Services
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[#1e3a5f] text-white hover:bg-[#1e3a5f] px-8 py-7 text-lg backdrop-blur-sm">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-[#4ade80]/50 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-[#4ade80] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#111d32] border-y border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-2xl bg-[#0a1628] mb-4 border border-[#1e3a5f]">
                  <stat.icon className="w-6 h-6 text-[#4ade80]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>{stat.value}</div>
                <div className="text-[#94a3b8] font-medium uppercase tracking-wider text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-[#0a1628] opacity-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <span key={index} className="text-[#94a3b8] font-bold text-xl md:text-2xl tracking-tighter grayscale hover:grayscale-0 transition-all cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[#111d32] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4ade80]/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider mb-4 block">Our North Star</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto mb-10" />
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-5xl mx-auto leading-relaxed italic">
              "To partner with organisations in building high-performing workforces by delivering innovative, reliable, and ethical human capital solutions through strategic outsourcing and comprehensive human resource services that enhance productivity, compliance, and sustainable growth."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Our Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-[#111d32] border-[#1e3a5f] hover:border-[#4ade80]/50 transition-all duration-500 group h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ade80]/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
                  <CardContent className="p-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-[#4ade80]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-[#94a3b8] leading-relaxed text-lg">{service.description}</p>
                    <div className="mt-6 flex items-center text-[#4ade80] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#111d32] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
                The SYNERGASIA Way
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                We believe in a systematic approach that combines data-driven insights with human-centric empathy. Our four-step process ensures alignment and excellence at every stage.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Personalized Support", icon: Heart },
                  { title: "Data-Driven Insights", icon: BarChart },
                  { title: "Global Standards", icon: Globe },
                  { title: "Local Market Expertise", icon: MapPin }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-lg bg-[#0a1628] flex items-center justify-center border border-[#1e3a5f]">
                      <item.icon className="w-5 h-5 text-[#4ade80]" />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#0a1628] border border-[#1e3a5f] hover:border-[#4ade80]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center mb-6 group-hover:bg-[#4ade80] transition-colors">
                    <step.icon className="w-6 h-6 text-[#4ade80] group-hover:text-[#0a1628]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4ade80]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Building Tomorrow&apos;s Workforce Today
              </h2>
              <p className="text-[#94a3b8] leading-relaxed mb-6 text-lg">
                SYNERGASIA LIMITED is a trusted leader in human capital development, dedicated to empowering businesses with people-centered solutions that drive organizational excellence, workforce agility, and long-term success.
              </p>
              <p className="text-[#94a3b8] leading-relaxed mb-8">
                Based in Lagos, Nigeria, we partner with organizations across industries to build high-performing workforces through innovative, reliable, and ethical human capital solutions.
              </p>
              <div className="flex items-center gap-6">
                <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628]">Our Story</Button>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4ade80]" />
                  <span className="text-white font-medium text-sm">Certified Excellence</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#1e3a5f] to-[#0a1628] p-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="bg-[#0a1628]/95 backdrop-blur-md rounded-2xl p-8 border border-[#1e3a5f] shadow-2xl">
                    <Quote className="w-10 h-10 text-[#4ade80]/20 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>Our Vision</h3>
                    <p className="text-[#94a3b8] text-lg leading-relaxed">
                      To be a trusted leader in human capital development, recognized for empowering businesses with people-centered solutions that drive organizational excellence globally.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 bg-[#111d32]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Our Core Values: <span className="text-[#4ade80]">RICH</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-[#0a1628] border-[#1e3a5f] hover:border-[#4ade80] transition-all duration-500 group text-center h-full transform hover:-translate-y-2">
                  <CardContent className="p-10">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22c55e] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#4ade80]/20">
                      <span className="text-[#0a1628] text-5xl font-bold" style={{ fontFamily: "'DM Serif Display', serif" }}>{value.letter}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#4ade80] transition-colors">{value.word}</h3>
                    <p className="text-[#94a3b8] text-lg">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0a1628] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Trusted by Leaders
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111d32] p-8 rounded-3xl border border-[#1e3a5f] relative"
              >
                <MessageSquareQuote className="absolute top-8 right-8 text-[#4ade80]/10 w-12 h-12" />
                <div className="flex gap-1 mb-6 text-[#4ade80]">
                  {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-4 h-4" />)}
                </div>
                <p className="text-[#94a3b8] mb-8 leading-relaxed italic">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1e3a5f] flex items-center justify-center text-[#4ade80] font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <h5 className="text-white font-bold">{t.name}</h5>
                    <p className="text-[#4ade80] text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#111d32]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <HelpCircle className="w-12 h-12 text-[#4ade80] mx-auto mb-6 opacity-50" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-[#94a3b8]">Everything you need to know about our services and process.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#0a1628] border border-[#1e3a5f] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="p-6 flex justify-between items-center">
                  <h4 className="text-white font-semibold pr-8">{faq.question}</h4>
                  <ChevronRight className={`w-5 h-5 text-[#4ade80] transition-transform ${activeFaq === i ? 'rotate-90' : ''}`} />
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === i ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-[#94a3b8] leading-relaxed border-t border-[#1e3a5f]/30">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#4ade80]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#0a1628] mb-8" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Ready to Accelerate Your <br className="hidden md:block" /> Organizational Growth?
            </h2>
            <p className="text-[#0a1628]/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
              Join dozens of forward-thinking companies already partnering with SYNERGASIA to build world-class teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-[#0a1628] text-white hover:bg-[#111d32] px-10 py-7 text-lg rounded-full shadow-2xl">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628]/10 px-10 py-7 text-lg rounded-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Let&apos;s Design Your Future
              </h2>
              <p className="text-[#94a3b8] leading-relaxed mb-8 text-lg">
                Ready to transform your workforce? Contact us today to discuss how we can help your organization achieve its human capital goals.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#111d32] border border-[#1e3a5f] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7 text-[#4ade80]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Our Office</h4>
                    <p className="text-[#94a3b8] leading-relaxed">3, Adepitan Street, Off Ramat Crescent, Ogudu, Lagos</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#111d32] border border-[#1e3a5f] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-7 h-7 text-[#4ade80]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Call Support</h4>
                    <p className="text-[#94a3b8]">08085850315 | 09125204186</p>
                    <p className="text-[#4ade80] text-sm font-medium mt-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                      WhatsApp: 08020727618
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#111d32] border border-[#1e3a5f] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-7 h-7 text-[#4ade80]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Direct Email</h4>
                    <p className="text-[#94a3b8]">synergasialimited@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-[#111d32] border-[#1e3a5f] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e]" />
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'DM Serif Display', serif" }}>Inquiry Form</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[#94a3b8] text-xs font-bold uppercase tracking-widest">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-4 bg-[#0a1628] border border-[#1e3a5f] rounded-xl text-white placeholder:text-[#334155] focus:outline-none focus:border-[#4ade80] transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[#94a3b8] text-xs font-bold uppercase tracking-widest">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-4 bg-[#0a1628] border border-[#1e3a5f] rounded-xl text-white placeholder:text-[#334155] focus:outline-none focus:border-[#4ade80] transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#94a3b8] text-xs font-bold uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-4 bg-[#0a1628] border border-[#1e3a5f] rounded-xl text-white placeholder:text-[#334155] focus:outline-none focus:border-[#4ade80] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#94a3b8] text-xs font-bold uppercase tracking-widest">Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 bg-[#0a1628] border border-[#1e3a5f] rounded-xl text-white placeholder:text-[#334155] focus:outline-none focus:border-[#4ade80] transition-all"
                        placeholder="Your Organization"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#94a3b8] text-xs font-bold uppercase tracking-widest">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-4 bg-[#0a1628] border border-[#1e3a5f] rounded-xl text-white placeholder:text-[#334155] focus:outline-none focus:border-[#4ade80] transition-all resize-none"
                        placeholder="Tell us about your organizational needs..."
                      />
                    </div>
                    <Button className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-bold py-7 text-lg rounded-xl shadow-xl shadow-[#4ade80]/20 transition-all active:scale-[0.98]">
                      Submit Inquiry
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-[#0a1628] border-t border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <Link href="/" className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#4ade80] rounded-lg flex items-center justify-center">
                  <span className="text-[#0a1628] font-bold text-xl">S</span>
                </div>
                <span className="text-white font-bold text-2xl tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  SYNERGASIA
                </span>
              </Link>
              <p className="text-[#94a3b8] leading-relaxed mb-8 text-lg">
                Your trusted partner in building high-performing workforces through innovative, reliable, and ethical human capital solutions. Bridging the gap between potential and performance.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                  <Link key={social} href="#" className="w-10 h-10 rounded-full bg-[#111d32] border border-[#1e3a5f] flex items-center justify-center text-[#94a3b8] hover:text-[#4ade80] hover:border-[#4ade80] transition-all">
                    <span className="sr-only">{social}</span>
                    <Globe className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2 md:ml-auto">
              <h4 className="text-white font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-[#94a3b8] hover:text-[#4ade80] transition-all">About Us</Link></li>
                <li><Link href="/values" className="text-[#94a3b8] hover:text-[#4ade80] transition-all">Our RICH Values</Link></li>
                <li><Link href="/blog" className="text-[#94a3b8] hover:text-[#4ade80] transition-all">Insights</Link></li>
                <li><Link href="/contact" className="text-[#94a3b8] hover:text-[#4ade80] transition-all">Careers</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6">Core Services</h4>
              <ul className="space-y-4">
                <li><Link href="/services" className="text-[#94a3b8] hover:text-[#4ade80] transition-all">Human Capital Development</Link></li>
                <li><Link href="/services" className="text-[#94a3b8] hover:text-[#4ade80] transition-all">Learning & Development</Link></li>
                <li><Link href="/services" className="text-[#94a3b8] hover:text-[#4ade80] transition-all">Recruitment & Placement</Link></li>
                <li><Link href="/services" className="text-[#94a3b8] hover:text-[#4ade80] transition-all">Business Support</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
              <p className="text-[#94a3b8] text-sm mb-4">Stay updated with the latest in HR and workforce management.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#111d32] border border-[#1e3a5f] rounded-lg px-4 py-2 text-white w-full focus:outline-none focus:border-[#4ade80]"
                />
                <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-bold">
                  Join
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#1e3a5f] flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#64748b] text-sm font-medium">
              © {new Date().getFullYear()} SYNERGASIA LIMITED. RC: 1234567. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link href="#" className="text-[#64748b] hover:text-[#4ade80] transition-all text-sm font-medium">Privacy Policy</Link>
              <Link href="#" className="text-[#64748b] hover:text-[#4ade80] transition-all text-sm font-medium">Terms of Service</Link>
              <Link href="#" className="text-[#64748b] hover:text-[#4ade80] transition-all text-sm font-medium">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
