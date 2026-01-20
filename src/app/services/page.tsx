"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, MessageCircle, Briefcase, TrendingUp, Building2, Target, Award, CheckCircle, ArrowRight, Zap, Shield, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const services = [
  {
    icon: Users,
    title: "Human Capital Development",
    description: "Building high-performing teams through strategic talent management and workforce optimization solutions.",
    features: [
      "Strategic workforce planning and organizational design",
      "Talent management systems implementation",
      "Performance management frameworks",
      "Succession planning and career development",
      "Employee engagement and retention strategies",
      "HR analytics and metrics dashboard development"
    ],
    benefits: [
      "Improved organizational productivity by up to 35%",
      "Enhanced employee satisfaction and retention",
      "Data-driven decision making for talent optimization"
    ]
  },
  {
    icon: GraduationCap,
    title: "Learning and Development",
    description: "Comprehensive training programs designed to enhance skills, knowledge, and professional growth.",
    features: [
      "Customized training program design and delivery",
      "Leadership development and executive coaching",
      "Technical and soft skills workshops",
      "E-learning platform development and management",
      "Training needs analysis and competency mapping",
      "Post-training evaluation and ROI measurement"
    ],
    benefits: [
      "Accelerated skill development across all organizational levels",
      "Increased employee competency and confidence",
      "Measurable improvement in business outcomes"
    ]
  },
  {
    icon: MessageCircle,
    title: "Coaching and Mentoring",
    description: "Personalized guidance to unlock potential and accelerate career and organizational success.",
    features: [
      "One-on-one executive coaching sessions",
      "Career transition and advancement coaching",
      "Mentorship program design and facilitation",
      "Goal setting and accountability frameworks",
      "Behavioral assessment and personal development plans",
      "Leadership effectiveness and team building"
    ],
    benefits: [
      "Enhanced leadership capabilities and confidence",
      "Clear career progression pathways",
      "Improved decision-making and emotional intelligence"
    ]
  },
  {
    icon: Briefcase,
    title: "Recruitment and Placement",
    description: "Connecting organizations with exceptional talent through rigorous selection processes.",
    features: [
      "Executive search and headhunting services",
      "Mass recruitment for volume hiring needs",
      "Competency-based interviewing and assessment",
      "Background verification and reference checks",
      "Onboarding support and integration programs",
      "Talent pool development and pipeline management"
    ],
    benefits: [
      "Access to pre-vetted, high-quality candidates",
      "Reduced time-to-hire by up to 50%",
      "Lower turnover rates with better cultural fit"
    ]
  },
  {
    icon: TrendingUp,
    title: "Business Development & Support",
    description: "Strategic support services to drive business growth and operational excellence.",
    features: [
      "Market research and competitive analysis",
      "Business strategy formulation and execution",
      "Sales enablement and revenue optimization",
      "Partnership development and stakeholder management",
      "Process improvement and operational efficiency",
      "Change management and transformation support"
    ],
    benefits: [
      "Enhanced market positioning and competitive advantage",
      "Increased revenue and profitability",
      "Sustainable business growth and scalability"
    ]
  },
  {
    icon: Building2,
    title: "Consultancy Services & Outsourcing",
    description: "Expert advisory and flexible outsourcing solutions tailored to your unique needs.",
    features: [
      "HR function outsourcing and shared services",
      "Payroll processing and benefits administration",
      "Compliance audits and regulatory advisory",
      "Organizational restructuring and transformation",
      "HR policy development and implementation",
      "Flexible staffing and contract workforce management"
    ],
    benefits: [
      "Reduced operational costs by up to 40%",
      "Access to specialized expertise on-demand",
      "Focus on core business while we handle HR complexities"
    ]
  }
];

const approach = [
  {
    icon: Target,
    title: "Discovery & Assessment",
    description: "We begin by understanding your unique challenges, organizational culture, and strategic objectives through comprehensive needs analysis."
  },
  {
    icon: Network,
    title: "Strategy Development",
    description: "Our experts craft customized solutions aligned with your goals, leveraging industry best practices and innovative methodologies."
  },
  {
    icon: Zap,
    title: "Implementation",
    description: "We execute with precision, ensuring seamless integration with minimal disruption to your operations while maintaining quality standards."
  },
  {
    icon: Award,
    title: "Evaluation & Optimization",
    description: "Continuous monitoring, measurement, and refinement ensure sustainable results and long-term success for your organization."
  }
];

export default function ServicesPage() {
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
              Comprehensive Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Our <span className="text-[#4ade80]">Services</span>
            </h1>
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              From strategic workforce planning to talent acquisition and development, we offer end-to-end human capital solutions designed to transform your organization.
            </p>
          </motion.div>
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
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              How We Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto mb-6" />
            <p className="text-[#94a3b8] text-lg max-w-3xl mx-auto">
              Our proven methodology ensures exceptional results through systematic discovery, strategic planning, flawless execution, and continuous improvement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0a1628] border-[#1e3a5f] h-full hover:border-[#4ade80]/50 transition-all">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-6">
                      <step.icon className="w-8 h-8 text-[#4ade80]" />
                    </div>
                    <div className="text-5xl font-bold text-[#1e3a5f] mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-[#94a3b8] leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Detailed Service Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto" />
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-[#111d32] border-[#1e3a5f] overflow-hidden hover:border-[#4ade80]/50 transition-all">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 bg-gradient-to-br from-[#1e3a5f] to-[#0a1628] p-10 flex flex-col justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4ade80]/30 to-[#4ade80]/10 flex items-center justify-center mb-6">
                          <service.icon className="w-10 h-10 text-[#4ade80]" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
                          {service.title}
                        </h3>
                        <p className="text-[#94a3b8] leading-relaxed text-lg mb-6">
                          {service.description}
                        </p>
                        <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-semibold w-fit">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="md:col-span-3 p-10">
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-[#4ade80]" />
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#4ade80] flex-shrink-0 mt-0.5" />
                                <span className="text-[#94a3b8]">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-6 border-t border-[#1e3a5f]">
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5 text-[#4ade80]" />
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] mt-2 flex-shrink-0" />
                                <span className="text-[#94a3b8]">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111d32] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4ade80]/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-xl text-[#94a3b8] mb-8 leading-relaxed">
              Partner with SYNERGASIA LIMITED to build a high-performing organization that thrives in today&apos;s dynamic business environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-semibold px-8 py-6 text-lg">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[#1e3a5f] text-white hover:bg-[#1e3a5f] px-8 py-6 text-lg">
                  Contact Us
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
              <Link href="/about" className="text-[#64748b] hover:text-[#4ade80] transition-colors text-sm">About</Link>
              <Link href="/values" className="text-[#64748b] hover:text-[#4ade80] transition-colors text-sm">Values</Link>
              <Link href="/contact" className="text-[#64748b] hover:text-[#4ade80] transition-colors text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
