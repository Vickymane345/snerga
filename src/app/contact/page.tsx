"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Building2, Users, Briefcase, MessageSquare, CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";

const contactMethods = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["3, Adepitan Street", "Off Ramat Crescent, Ogudu", "Lagos, Nigeria"],
    action: "Get Directions"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["08085850315", "09125204186", "WhatsApp: 08020727618"],
    action: "Start a Call"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["synergasialimited@gmail.com", "Response within 24 hours", "We're here to help"],
    action: "Send Email"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    action: "Schedule Meeting"
  }
];

const inquiryTypes = [
  { icon: Briefcase, label: "General Inquiry", value: "general" },
  { icon: Users, label: "Recruitment Services", value: "recruitment" },
  { icon: Building2, label: "Consultancy Services", value: "consultancy" },
  { icon: MessageSquare, label: "Partnership Opportunity", value: "partnership" }
];

const faqItems = [
  {
    question: "What industries do you serve?",
    answer: "We work across diverse industries including manufacturing, financial services, technology, healthcare, retail, and professional services. Our adaptable approach allows us to deliver value regardless of your sector."
  },
  {
    question: "How do I get started with SYNERGASIA?",
    answer: "Simply fill out the contact form below or call us directly. We'll schedule a complimentary consultation to understand your needs and recommend the best solutions for your organization."
  },
  {
    question: "Do you offer customized solutions?",
    answer: "Absolutely! We believe every organization is unique. Our solutions are tailored to your specific challenges, goals, culture, and budget constraints."
  },
  {
    question: "What is your typical engagement timeline?",
    answer: "Engagement timelines vary based on project scope. Small projects may take 2-4 weeks, while comprehensive programs can span 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Can you work with remote or distributed teams?",
    answer: "Yes! We have extensive experience working with remote and hybrid teams. We offer virtual training, digital assessments, and remote consulting services to support organizations regardless of location."
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment options including project-based fees, retainer arrangements, and hourly rates. Payment terms are customized based on engagement type and duration."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "general",
    message: ""
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Let&apos;s Start a <span className="text-[#4ade80]">Conversation</span>
            </h1>
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              Ready to transform your organization? We&apos;re here to answer your questions, discuss your needs, and explore how we can partner for success.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#111d32]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0a1628] border-[#1e3a5f] h-full hover:border-[#4ade80]/50 transition-all group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-6 group-hover:from-[#4ade80]/30 group-hover:to-[#4ade80]/10 transition-all">
                      <method.icon className="w-7 h-7 text-[#4ade80]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{method.title}</h3>
                    <div className="space-y-2 mb-6">
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-[#94a3b8] text-sm">{detail}</p>
                      ))}
                    </div>
                    <Button variant="ghost" className="text-[#4ade80] hover:text-[#22c55e] hover:bg-[#4ade80]/10 p-0 h-auto font-semibold">
                      {method.action}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">Send Us a Message</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-[#94a3b8] leading-relaxed mb-8 text-lg">
                Whether you have a specific project in mind or just want to explore how we can help, fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#4ade80]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Quick Response</h4>
                    <p className="text-[#94a3b8] text-sm">We respond to all inquiries within 24 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-[#4ade80]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Free Consultation</h4>
                    <p className="text-[#94a3b8] text-sm">Initial consultations are complimentary with no obligations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#4ade80]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                    <p className="text-[#94a3b8] text-sm">Connect directly with experienced HR professionals</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-[#1e3a5f]/50 to-[#1e3a5f]/20 border border-[#1e3a5f]">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#4ade80]" />
                  Prefer to Talk?
                </h4>
                <p className="text-[#94a3b8] text-sm mb-3">Schedule a call with one of our consultants</p>
                <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-semibold">
                  Book a Call
                  <Calendar className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="bg-[#111d32] border-[#1e3a5f]">
                <CardContent className="p-10">
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">First Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-[#0a1628] border border-[#1e3a5f] rounded-lg text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#4ade80] transition-colors"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">Last Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-[#0a1628] border border-[#1e3a5f] rounded-lg text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#4ade80] transition-colors"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">Email Address *</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-[#0a1628] border border-[#1e3a5f] rounded-lg text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#4ade80] transition-colors"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-[#0a1628] border border-[#1e3a5f] rounded-lg text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#4ade80] transition-colors"
                          placeholder="+234 xxx xxx xxxx"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Company / Organization</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#0a1628] border border-[#1e3a5f] rounded-lg text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#4ade80] transition-colors"
                        placeholder="Your Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="text-white text-sm font-medium mb-3 block">Inquiry Type *</label>
                      <div className="grid grid-cols-2 gap-3">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({...formData, inquiryType: type.value})}
                            className={`p-4 rounded-lg border transition-all text-left flex items-center gap-3 ${
                              formData.inquiryType === type.value
                                ? 'bg-[#4ade80]/10 border-[#4ade80] text-white'
                                : 'bg-[#0a1628] border-[#1e3a5f] text-[#94a3b8] hover:border-[#4ade80]/50'
                            }`}
                          >
                            <type.icon className={`w-5 h-5 ${formData.inquiryType === type.value ? 'text-[#4ade80]' : 'text-[#64748b]'}`} />
                            <span className="text-sm font-medium">{type.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Your Message *</label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-3 bg-[#0a1628] border border-[#1e3a5f] rounded-lg text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#4ade80] transition-colors resize-none"
                        placeholder="Tell us about your needs, challenges, or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <Button className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-semibold py-6 text-lg">
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111d32]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto mb-6" />
            <p className="text-[#94a3b8] text-lg">
              Quick answers to questions you may have. Can&apos;t find what you&apos;re looking for? Contact us directly.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0a1628] border-[#1e3a5f] hover:border-[#4ade80]/50 transition-all overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 flex items-center justify-between text-left"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <div className={`w-6 h-6 rounded-full bg-[#4ade80]/10 flex items-center justify-center flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                        <ArrowRight className="w-4 h-4 text-[#4ade80] rotate-90" />
                      </div>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-[#94a3b8] leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="bg-gradient-to-br from-[#1e3a5f] to-[#0a1628] border-[#4ade80]/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-[#4ade80] rounded-full blur-3xl" />
            </div>
            <CardContent className="p-12 relative z-10">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  Visit Our Office
                </h2>
                <p className="text-[#94a3b8] mb-6 text-lg">
                  We welcome in-person meetings at our Lagos office. Schedule ahead to ensure availability.
                </p>
                <div className="flex items-start gap-4 mb-8">
                  <MapPin className="w-6 h-6 text-[#4ade80] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">3, Adepitan Street</p>
                    <p className="text-[#94a3b8]">Off Ramat Crescent, Ogudu</p>
                    <p className="text-[#94a3b8]">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-semibold">
                    Get Directions
                    <MapPin className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-[#4ade80] text-[#4ade80] hover:bg-[#4ade80]/10">
                    Schedule Visit
                    <Calendar className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
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
              <Link href="/about" className="text-[#64748b] hover:text-[#4ade80] transition-colors text-sm">About</Link>
              <Link href="/values" className="text-[#64748b] hover:text-[#4ade80] transition-colors text-sm">Values</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
