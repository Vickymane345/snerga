"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users, TrendingUp, Globe, Award, Briefcase, Building, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const milestones = [
  {
    year: "2020",
    title: "Foundation & Vision",
    description: "SYNERGASIA LIMITED was established with a vision to revolutionize human capital development in Nigeria and beyond."
  },
  {
    year: "2021",
    title: "Service Expansion",
    description: "Expanded our portfolio to include comprehensive learning and development programs, serving over 50 organizations."
  },
  {
    year: "2022",
    title: "Strategic Partnerships",
    description: "Formed key partnerships with leading industry players, enabling us to deliver world-class outsourcing solutions."
  },
  {
    year: "2023",
    title: "Regional Recognition",
    description: "Achieved recognition as a trusted HR solutions provider across West Africa, working with Fortune 500 companies."
  },
  {
    year: "2024",
    title: "Innovation & Growth",
    description: "Launched innovative digital HR platforms and expanded our team of certified consultants to meet growing demand."
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Briefcase, value: "1,000+", label: "Successful Placements" },
  { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
  { icon: Globe, value: "10+", label: "Industries Covered" }
];

const team = [
  {
    name: "Leadership Team",
    description: "Our executive leadership brings decades of combined experience in human resources, organizational development, and strategic consulting across diverse industries."
  },
  {
    name: "HR Consultants",
    description: "Certified professionals specializing in talent management, workforce planning, compensation design, and organizational effectiveness."
  },
  {
    name: "Learning & Development Specialists",
    description: "Expert trainers and coaches with extensive experience in leadership development, technical training, and change management."
  },
  {
    name: "Recruitment Specialists",
    description: "Dedicated talent acquisition experts skilled in executive search, competency-based interviewing, and candidate assessment."
  }
];

const principles = [
  {
    icon: Target,
    title: "Client-Centric Approach",
    description: "We prioritize understanding your unique challenges and tailor solutions that align with your organizational goals and culture."
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description: "We maintain the highest standards of quality and professionalism in every engagement, ensuring measurable results."
  },
  {
    icon: Building,
    title: "Ethical Practice",
    description: "We conduct business with integrity, transparency, and respect for all stakeholders, building trust through honest relationships."
  },
  {
    icon: Users,
    title: "People First",
    description: "We believe that investing in people is investing in organizational success, and we champion human-centered solutions."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#111d32] to-[#0a1628]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#4ade80]/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#1e3a5f] text-[#4ade80] text-sm font-medium mb-6 border border-[#4ade80]/30">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
              About <span className="text-[#4ade80]">SYNERGASIA</span>
            </h1>
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              Empowering organizations to unlock their full potential through strategic human capital solutions, innovative thinking, and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#111d32]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#0a1628] p-1">
                  <div className="w-full h-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800')] bg-cover bg-center" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#4ade80]/10 rounded-2xl backdrop-blur-sm border border-[#4ade80]/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#4ade80]" style={{ fontFamily: "'DM Serif Display', serif" }}>5+</div>
                    <div className="text-white text-sm mt-1">Years of Excellence</div>
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
              <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Building Tomorrow&apos;s Workforce Today
              </h2>
              <p className="text-[#94a3b8] leading-relaxed mb-6 text-lg">
                SYNERGASIA LIMITED is a premier human capital development firm headquartered in Lagos, Nigeria. We specialize in providing comprehensive, people-centered solutions that drive organizational excellence, workforce agility, and sustainable growth.
              </p>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                Founded on the principles of innovation, integrity, and impact, we partner with organizations across diverse industries to transform their human capital strategies and build high-performing teams that thrive in today&apos;s dynamic business environment.
              </p>
              <p className="text-[#94a3b8] leading-relaxed">
                Our multidisciplinary team of certified HR professionals, learning specialists, and organizational consultants brings deep expertise and a proven track record of delivering measurable results.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="bg-[#0a1628] border-[#1e3a5f] text-center">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-[#4ade80]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-[#94a3b8] text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">Our Mission & Vision</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              What Drives Us Forward
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#111d32] border-[#1e3a5f] h-full hover:border-[#4ade80]/50 transition-all">
                <CardContent className="p-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4ade80]/30 to-[#4ade80]/10 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-[#4ade80]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
                    Our Mission
                  </h3>
                  <p className="text-[#94a3b8] leading-relaxed text-lg">
                    To partner with organisations in building high-performing workforces by delivering innovative, reliable, and ethical human capital solutions through strategic outsourcing and comprehensive human resource services that enhance productivity, compliance, and sustainable growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-[#111d32] border-[#1e3a5f] h-full hover:border-[#4ade80]/50 transition-all">
                <CardContent className="p-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4ade80]/30 to-[#4ade80]/10 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-[#4ade80]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
                    Our Vision
                  </h3>
                  <p className="text-[#94a3b8] leading-relaxed text-lg">
                    To be a trusted leader in human capital development, recognized for empowering businesses with people-centered solutions that drive organizational excellence, workforce agility, and long-term success across Africa and beyond.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111d32]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Milestones & Growth
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto mb-6" />
            <p className="text-[#94a3b8] text-lg max-w-3xl mx-auto">
              From our founding to becoming a recognized leader in human capital solutions, our journey reflects our commitment to innovation and excellence.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4ade80]/50 via-[#4ade80]/30 to-transparent hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="bg-[#0a1628] border-[#1e3a5f] hover:border-[#4ade80]/50 transition-all">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-3" style={{ justifyContent: index % 2 === 0 ? 'end' : 'start' }}>
                          <Calendar className="w-5 h-5 text-[#4ade80]" />
                          <span className="text-[#4ade80] font-bold text-2xl" style={{ fontFamily: "'DM Serif Display', serif" }}>
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-[#94a3b8] leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-4 h-4 rounded-full bg-[#4ade80] border-4 border-[#111d32] flex-shrink-0 z-10 hidden md:block" />
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Expert Professionals
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto mb-6" />
            <p className="text-[#94a3b8] text-lg max-w-3xl mx-auto">
              Our diverse team of certified professionals brings together decades of experience in human resources, organizational development, and strategic consulting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {team.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#111d32] border-[#1e3a5f] h-full hover:border-[#4ade80]/50 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-[#4ade80]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">{group.name}</h3>
                        <p className="text-[#94a3b8] leading-relaxed">{group.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111d32]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">How We Operate</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Our Guiding Principles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0a1628] border-[#1e3a5f] h-full hover:border-[#4ade80]/50 transition-all">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-6">
                      <principle.icon className="w-7 h-7 text-[#4ade80]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{principle.title}</h3>
                    <p className="text-[#94a3b8] leading-relaxed text-lg">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4ade80]/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Join Us on Our Mission
            </h2>
            <p className="text-xl text-[#94a3b8] mb-8 leading-relaxed">
              Whether you&apos;re looking to transform your workforce or explore partnership opportunities, we&apos;re here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-semibold px-8 py-6 text-lg">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[#1e3a5f] text-white hover:bg-[#1e3a5f] px-8 py-6 text-lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 bg-[#0a1628] border-t border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#64748b] text-sm">
              © {new Date().getFullYear()} SYNERGASIA LIMITED. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-[#64748b] hover:text-[#4ade80] transition-colors text-sm">Home</Link>
              <Link href="/services" className="text-[#64748b] hover:text-[#4ade80] transition-colors text-sm">Services</Link>
              <Link href="/values" className="text-[#64748b] hover:text-[#4ade80] transition-colors text-sm">Values</Link>
              <Link href="/contact" className="text-[#64748b] hover:text-[#4ade80] transition-colors text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
