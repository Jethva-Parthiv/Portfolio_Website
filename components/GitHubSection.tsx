"use client"
import { motion } from 'framer-motion'
import { Github, Star, GitFork, Code, ExternalLink } from 'lucide-react'

const repos = [
  {
    name: 'OpsPilot',
    desc: 'Autonomous RevOps AI agent platform — LangGraph + Gemini + Salesforce + Slack + Notion.',
    stars: 0, forks: 0,
    lang: 'Python', langColor: '#3572A5',
    url: 'https://github.com/Jethva-Parthiv/opspilot',
  },
  {
    name: 'ResearchFlow',
    desc: 'Autonomous deep research agent with iterative self-correction and live fact-checking.',
    stars: 0, forks: 0,
    lang: 'Python', langColor: '#3572A5',
    url: 'https://github.com/Jethva-Parthiv/research-assistant-agent',
  },
  {
    name: 'ai-event-scout',
    desc: 'Multi-agent system that discovers, validates, deduplicates, and ranks AI events from the web.',
    stars: 0, forks: 0,
    lang: 'Python', langColor: '#3572A5',
    url: 'https://github.com/Jethva-Parthiv/autonomous-event-scout-agent',
  },
  {
    name: 'dynamic-filter-system',
    desc: 'Production-ready FastAPI backend for enterprise datasets with dynamic filtering and pagination.',
    stars: 0, forks: 0,
    lang: 'Python', langColor: '#3572A5',
    url: 'https://github.com/Jethva-Parthiv/Dynamic_Filter_System',
  },
]

const stats = [
  { value: '4+',  label: 'AI Projects',  icon: Code     },
  { value: '10+', label: 'Technologies', icon: GitFork  },
]

export default function GitHubSection() {
  return (
    <section id="github" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
          <h2 className="section-heading">GitHub</h2>
          <a
            href="https://github.com/Jethva-Parthiv"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" /> @Jethva-Parthiv
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="p-5 glass rounded-2xl text-center border border-white/[0.06]">
              <Icon className="w-5 h-5 text-violet-400 mx-auto mb-2" />
              <div className="font-display font-bold text-2xl gradient-text">{value}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Repo cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {repos.map((r, i) => (
            <motion.a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.07 }}
              className="group p-5 glass rounded-2xl glass-hover card-glow border border-white/[0.06] flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-500" />
                  <span className="font-medium text-sm text-white group-hover:text-violet-300 transition-colors">{r.name}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors" />
              </div>

              <p className="text-xs text-slate-400 leading-relaxed flex-1">{r.desc}</p>

              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: r.langColor }} />
                {r.lang}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
