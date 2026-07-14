"use client"
import { motion } from 'framer-motion'

type TimelineItem = {
  year: string
  type: 'work' | 'edu' | 'achievement'
  title: string
  org: string
  desc: string
  tags?: string[]
}

const items: TimelineItem[] = [
  {
    year: '2025 – Present',
    type: 'work',
    title: 'Agentic AI Engineer (Freelance)',
    org: 'Independent · Remote',
    desc: 'Designing and building scalable agentic AI systems, multi-agent workflows, RAG pipelines, and AI-powered automation tools. Delivered OpsPilot — an autonomous RevOps AI agent platform integrating LangGraph, Salesforce, Slack and Notion.',
    tags: ['LangGraph', 'LangChain', 'FastAPI', 'RAG', 'Gemini', 'LangSmith'],
  },
  {
    year: '2025 – 2027 (Expected)',
    type: 'edu',
    title: 'Master of Computer Applications (MCA)',
    org: 'Gujarat Vidyapith · Ahmedabad, Gujarat',
    desc: 'Pursuing advanced studies in AI/ML, system design, and software engineering alongside active development of production agentic AI systems and participation in inter-college coding competitions.',
    tags: ['AI/ML', 'System Design', 'Agentic AI'],
  },
  {
    year: '2026',
    type: 'achievement',
    title: '1st Rank — Code Siege (Python)',
    org: 'Inter-College Coding Competition',
    desc: 'Won first rank in the Python-focused competitive programming event, solving complex algorithmic challenges against competitors from colleges across the region.',
    tags: ['Python', 'Competitive Programming'],
  },
  {
    year: '2026',
    type: 'achievement',
    title: '1st Rank — Code Combat (Java)',
    org: 'Ignite 2026 Tech Fest',
    desc: 'Secured top rank in the Java-focused coding challenge at Ignite 2026, demonstrating strong object-oriented design and algorithmic problem-solving skills.',
    tags: ['Java', 'Algorithms'],
  },
  {
    year: '2022 – 2025',
    type: 'edu',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Smt. B.K. Mehta IT Centre BCA College · Palanpur, Gujarat',
    desc: 'Built a strong foundation in computer science, data structures, OOP, and databases. Developed early proficiency in Python, Java, and web technologies.',
    tags: ['Python', 'Java', 'DSA', 'Databases'],
  },
]

const typeStyle: Record<TimelineItem['type'], { dot: string; badge: string; label: string }> = {
  work:        { dot: 'from-violet-600 to-violet-400', badge: 'badge badge-violet', label: 'Work'        },
  edu:         { dot: 'from-cyan-500 to-cyan-300',     badge: 'badge badge-cyan',   label: 'Education'   },
  achievement: { dot: 'from-amber-400 to-yellow-300',  badge: 'bg-amber-500/15 text-amber-300 border border-amber-400/20 badge', label: '🏆 Award' },
}

export default function Timeline() {
  return (
    <section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading mb-16">Experience & Timeline</h2>

        <div className="relative pl-12">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-8">
            {items.map((item, idx) => {
              const st = typeStyle[item.type]
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: idx * 0.07, duration: 0.5 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Dot */}
                  <div className={`timeline-dot bg-gradient-to-br ${st.dot} absolute -left-[34px] top-5`} />

                  {/* Card */}
                  <div className="flex-1 p-6 glass rounded-2xl glass-hover card-glow border border-white/[0.06]">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-white text-lg leading-snug">{item.title}</h3>
                        <div className="text-sm text-slate-400 mt-0.5">{item.org}</div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`${st.badge} text-xs`}>{st.label}</span>
                        <span className="text-xs text-slate-500 font-medium">{item.year}</span>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map(t => (
                          <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
