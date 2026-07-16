"use client"
import { motion } from 'framer-motion'

type Achievement = {
  icon: string
  title: string
  org: string
  year: string
  desc: string
  accent: string
  border: string
  highlights?: string[]
  link?: string // Optional verification link
}

const achievements: Achievement[] = [
  {
    icon: '🥇',
    title: '1st Place — Python Programming Competition',
    org: 'Tech-Fest · Sardar Patel University, Vallabh Vidyanagar',
    year: '2026',
    desc: 'Secured 1st place in the university-level Python programming competition, solving advanced logic, data structures, and algorithmic problems.',
    accent: 'text-amber-400',
    border: 'rgba(251,191,36,0.2)',
    highlights: ['Python', 'Data Structures', 'Algorithmic Logic'],
  },
  {
    icon: '🏆',
    title: '1st Place — Code Siege (Python)',
    org: 'Tech Kaushalya 2026 · Dept. of Computer Science, Gujarat University',
    year: 'Feb 2026',
    desc: 'Secured 1st place in Code Siege. A unique two-phase battle: I built the initial Python solution, then an opponent deliberately injected bugs — and my teammate, working in complete isolation without the problem statement, had to understand the codebase and restore it under time pressure.',
    accent: 'text-amber-400',
    border: 'rgba(251,191,36,0.2)',
    highlights: ['Clean Code', 'Problem Solving', 'Adaptability', 'Teamwork'],
    link: 'https://lnkd.in/p/d_bm2g-U',
  },
  {
    icon: '🥈',
    title: 'Runner-up — Logic Forge (Python)',
    org: 'Tech Kaushalya 2026 · Dept. of Computer Science, Gujarat University',
    year: 'Feb 2026',
    desc: 'Won second place in the university-level Python coding marathon, designing algorithms to solve complex logic challenges under strict run-time optimizations.',
    accent: 'text-slate-300',
    border: 'rgba(226,232,240,0.15)',
    highlights: ['Python', 'Code Optimisation', 'Logic Design'],
  },
  {
    icon: '🏆',
    title: '1st Place — Code Combat (Java)',
    org: 'IGNITE 2026 · CMPICA, CHARUSAT, Changa',
    year: 'Jan 2026',
    desc: 'Ranked 1st in Code Combat (PG Level – Java) on January 23. Started from an elimination round with 45 teams and worked through multiple coding challenges under time pressure with a clear strategy.',
    accent: 'text-yellow-400',
    border: 'rgba(234,179,8,0.2)',
    highlights: ['45 Teams Eliminated', 'Java OOP', 'Strategic Thinking'],
    link: 'https://lnkd.in/p/dFEKAC4f',
  },
  {
    icon: '🚀',
    title: 'Participant — SSIP Regional Hackathon',
    org: 'New India Vibrant Hackathon · Ganpat University, Kherva',
    year: '2023',
    desc: 'Built FitAthlete — a smart nutrition & diet recommendation web app for athletes — during a 24-hour hackathon. Tracked calories, fats, carbs and suggested nutritious dishes with exact nutritional breakdowns. Built with Python (Flask), HTML, CSS & JavaScript.',
    accent: 'text-violet-400',
    border: 'rgba(124,58,237,0.2)',
    highlights: ['Flask', 'MVP Mindset', 'Team Dynamics'],
    link: 'https://lnkd.in/p/dT4XFeRu',
  },
  {
    icon: '☁️',
    title: 'AWS Generative AI: Art of the Possible',
    org: 'AWS Training & Certification',
    year: 'Online',
    desc: 'Completed training on the fundamentals of Generative AI, foundational models, use cases, and deployment strategies in the AWS ecosystem.',
    accent: 'text-cyan-400',
    border: 'rgba(6,182,212,0.2)',
    highlights: ['Generative AI', 'AWS Cloud', 'Foundational Models'],
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading mb-16">Achievements & Certifications</h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-hover p-6 rounded-2xl card-glow flex gap-5"
              style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${a.border}` }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: a.border }}
              >
                {a.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className={`font-display font-semibold text-sm leading-snug ${a.accent}`}>{a.title}</h3>
                  <span className="flex-shrink-0 text-xs text-slate-500 font-medium">{a.year}</span>
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">{a.org}</div>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{a.desc}</p>
                {a.highlights && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {a.highlights.map(h => (
                      <span key={h} className="px-2 py-0.5 rounded-md text-xs font-medium bg-white/[0.05] text-slate-400 border border-white/[0.07]">{h}</span>
                    ))}
                  </div>
                )}
                {a.link && (
                  <div className="mt-4">
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <span>Verify Certificate</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
