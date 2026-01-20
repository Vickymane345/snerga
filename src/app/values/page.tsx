"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Lightbulb, Sparkles, Mountain, HandHeart, Brain, Trophy, Target, Leaf, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const coreValues = [
  {
    letter: "R",
    word: "Resilience",
    icon: Shield,
    color: "from-[#4ade80] to-[#22c55e]",
    tagline: "Strength Through Adversity",
    description: "Resilience is at the heart of our approach to human capital development. We believe that organizations and individuals thrive not by avoiding challenges, but by developing the capacity to adapt, recover, and grow stronger through adversity.",
    principles: [
      {
        icon: Mountain,
        title: "Adaptive Mindset",
        description: "We cultivate the ability to pivot quickly in response to changing market conditions, technological disruptions, and organizational needs."
      },
      {
        icon: Target,
        title: "Continuous Learning",
        description: "We embrace failure as a learning opportunity, fostering a culture where experimentation and innovation are encouraged."
      },
      {
        icon: Trophy,
        title: "Perseverance",
        description: "We remain committed to our clients' success even when faced with complex challenges, demonstrating unwavering dedication."
      }
    ],
    impact: "Organizations that embrace resilience experience 40% higher employee retention, faster recovery from setbacks, and stronger competitive positioning in dynamic markets."
  },
  {
    letter: "I",
    word: "Integrity",
    icon: Heart,
    color: "from-[#ec4899] to-[#be185d]",
    tagline: "Ethical Excellence in All We Do",
    description: "Integrity forms the foundation of every relationship we build and every service we deliver. We conduct business with honesty, transparency, and respect for all stakeholders, ensuring that trust is never compromised.",
    principles: [
      {
        icon: HandHeart,
        title: "Transparent Communication",
        description: "We communicate openly with clients, providing honest assessments, realistic timelines, and clear expectations at every stage."
      },
      {
        icon: Shield,
        title: "Ethical Practice",
        description: "We adhere to the highest professional standards, maintaining confidentiality, respecting diversity, and upholding legal compliance."
      },
      {
        icon: Users,
        title: "Accountability",
        description: "We take ownership of our commitments, delivering on promises and accepting responsibility for outcomes."
      }
    ],
    impact: "Our commitment to integrity has earned us 95% client satisfaction and long-term partnerships built on mutual trust and respect."
  },
  {
    letter: "C",
    word: "Creativity",
    icon: Lightbulb,
    color: "from-[#f59e0b] to-[#d97706]",
    tagline: "Innovation That Transforms",
    description: "Creativity drives our ability to solve complex human capital challenges. We approach every engagement with fresh perspectives, innovative methodologies, and customized solutions that break away from conventional thinking.",
    principles: [
      {
        icon: Brain,
        title: "Design Thinking",
        description: "We employ human-centered design principles to craft solutions that address root causes rather than symptoms."
      },
      {
        icon: Lightbulb,
        title: "Continuous Innovation",
        description: "We stay ahead of industry trends, integrating cutting-edge tools, technologies, and practices into our service offerings."
      },
      {
        icon: Star,
        title: "Collaborative Ideation",
        description: "We co-create solutions with clients, leveraging diverse perspectives to generate breakthrough ideas."
      }
    ],
    impact: "Creative approaches have enabled our clients to reduce costs by 30%, improve process efficiency by 45%, and achieve breakthrough results in talent management."
  },
  {
    letter: "H",
    word: "Heritage",
    icon: Sparkles,
    color: "from-[#8b5cf6] to-[#6d28d9]",
    tagline: "Building Lasting Legacies",
    description: "Heritage represents our commitment to creating sustainable impact that endures beyond individual projects. We focus on building organizational capabilities, transferring knowledge, and establishing systems that continue to deliver value long after our engagement ends.",
    principles: [
      {
        icon: Leaf,
        title: "Sustainable Solutions",
        description: "We design interventions that create lasting change rather than temporary fixes, ensuring long-term organizational health."
      },
      {
        icon: Users,
        title: "Knowledge Transfer",
        description: "We empower client teams with skills, frameworks, and tools needed to maintain momentum independently."
      },
      {
        icon: Trophy,
        title: "Legacy Building",
        description: "We help organizations establish strong cultures, robust systems, and capable leaders who drive continued success."
      }
    ],
    impact: "Our heritage-focused approach ensures that 90% of our solutions remain effective three years post-implementation, creating enduring organizational value."
  }
];

const valueInAction = [
  {
    value: "Resilience",
    scenario: "Client Scenario",
    description: "A manufacturing client faced sudden market disruption and needed to restructure their workforce within 60 days.",
    action: "Our Action",
    solution: "We rapidly deployed a comprehensive change management program, provided outplacement support for affected employees, and redesigned talent acquisition strategies for critical roles.",
    result: "Result",
    outcome: "The client achieved full operational continuity with zero production downtime, retained 85% of key talent, and emerged with a more agile organizational structure."
  },
  {
    value: "Integrity",
    scenario: "Client Scenario",
    description: "During a recruitment engagement, we discovered that a highly qualified candidate had falsified credentials.",
    action: "Our Action",
    solution: "We immediately notified the client, withdrew the candidate from consideration, and strengthened our verification processes to prevent future occurrences.",
    result: "Result",
    outcome: "The client appreciated our transparency and renewed their contract for three additional years, citing trust as the primary factor."
  },
  {
    value: "Creativity",
    scenario: "Client Scenario",
    description: "A financial services firm struggled with low employee engagement despite competitive compensation packages.",
    action: "Our Action",
    solution: "We conducted deep ethnographic research, uncovered hidden cultural issues, and designed a holistic engagement program combining career development, recognition systems, and flexible work arrangements.",
    result: "Result",
    outcome: "Employee engagement scores increased by 52% within six months, and voluntary turnover decreased by 38%."
  },
  {
    value: "Heritage",
    scenario: "Client Scenario",
    description: "A growing tech startup needed to scale their HR function without losing their innovative culture.",
    action: "Our Action",
    solution: "We built scalable HR systems, trained internal champions, documented processes, and established governance structures aligned with the company's culture.",
    result: "Result",
    outcome: "The startup successfully scaled from 50 to 300 employees while maintaining their culture scores above 4.5/5.0 and achieving recognition as a top employer."
  }
];

export default function ValuesPage() {
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
              What We Stand For
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Our Core Values: <span className="text-[#4ade80]">RICH</span>
            </h1>
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              RICH is not just an acronym—it&apos;s a philosophy that defines how we work, engage with clients, and create lasting impact in the organizations we serve.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#111d32]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0a1628] border-[#1e3a5f] hover:border-[#4ade80] transition-all h-full text-center">
                  <CardContent className="p-8">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6`}>
                      <span className="text-[#0a1628] text-4xl font-bold" style={{ fontFamily: "'DM Serif Display', serif" }}>{value.letter}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{value.word}</h3>
                    <p className="text-[#4ade80] text-sm font-medium">{value.tagline}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {coreValues.map((value, index) => (
        <section key={index} className={index % 2 === 0 ? "py-24 bg-[#0a1628]" : "py-24 bg-[#111d32]"}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${value.color} bg-clip-text text-transparent`} style={{ fontFamily: "'DM Serif Display', serif" }}>
                      {value.letter}
                    </span>
                    <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>
                      {value.word}
                    </h2>
                  </div>
                  <p className="text-[#4ade80] font-medium mt-2">{value.tagline}</p>
                </div>
              </div>
              <p className="text-[#94a3b8] text-lg leading-relaxed max-w-5xl">
                {value.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {value.principles.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className={index % 2 === 0 ? "bg-[#111d32] border-[#1e3a5f] h-full" : "bg-[#0a1628] border-[#1e3a5f] h-full"}>
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-4">
                        <principle.icon className="w-6 h-6 text-[#4ade80]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                      <p className="text-[#94a3b8] leading-relaxed">{principle.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className={index % 2 === 0 ? "bg-[#111d32] border-[#4ade80]/50" : "bg-[#0a1628] border-[#4ade80]/50"}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-[#4ade80]" />
                    <h4 className="text-xl font-semibold text-white">Impact</h4>
                  </div>
                  <p className="text-[#94a3b8] leading-relaxed text-lg">{value.impact}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">Values in Practice</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Real-World Applications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#22c55e] mx-auto mb-6" />
            <p className="text-[#94a3b8] text-lg max-w-3xl mx-auto">
              See how our RICH values translate into tangible outcomes and transformative results for our clients.
            </p>
          </motion.div>

          <div className="space-y-8">
            {valueInAction.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#111d32] border-[#1e3a5f] overflow-hidden hover:border-[#4ade80]/50 transition-all">
                  <CardContent className="p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="px-4 py-2 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30">
                        <span className="text-[#4ade80] font-semibold text-sm">{example.value}</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-[#4ade80] font-semibold mb-2 text-sm uppercase tracking-wider">{example.scenario}</h4>
                        <p className="text-[#94a3b8] leading-relaxed">{example.description}</p>
                      </div>
                      <div>
                        <h4 className="text-[#4ade80] font-semibold mb-2 text-sm uppercase tracking-wider">{example.action}</h4>
                        <p className="text-[#94a3b8] leading-relaxed">{example.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-[#4ade80] font-semibold mb-2 text-sm uppercase tracking-wider">{example.result}</h4>
                        <p className="text-white leading-relaxed font-medium">{example.outcome}</p>
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
              Experience RICH Values in Action
            </h2>
            <p className="text-xl text-[#94a3b8] mb-8 leading-relaxed">
              Partner with an organization that doesn&apos;t just talk about values—we live them every day in every engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-semibold px-8 py-6 text-lg">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[#1e3a5f] text-white hover:bg-[#1e3a5f] px-8 py-6 text-lg">
                  Start a Conversation
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
              <Link href="/about" className="text-[#64748b] hover:text-[#4ade80] transition-colors text-sm">About</Link>
              <Link href="/contact" className="text-[#64748b] hover:text-[#4ade80] transition-colors text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
