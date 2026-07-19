"use client"
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Zap } from 'lucide-react'

type Project = {
  title: string
  subtitle?: string
  desc: string
  bullets: string[]
  tech: string[]
  status: 'Live' | 'Improving' | 'Open Source'
  gradient: string
  github?: string
  live?: string
  liveLabel?: string // Add customizable label for the demo button
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'OpsPilot',
    subtitle: 'Autonomous RevOps AI Agent Platform',
    desc: 'Architected an autonomous ReAct AI agent using LangGraph and LangChain — integrating Salesforce, Slack, Notion, and ChromaDB-powered RAG into a real-time AI operations platform.',
    bullets: [
      'ReAct agent dynamically reasons, invokes tools, queries Salesforce CRM & retrieves knowledge from Notion via ChromaDB RAG',
      'Real-time event-driven platform using Slack Socket Mode + FastAPI backend + React dashboard with SSE',
      'Human-in-the-Loop (HITL) approval system for reviewing AI-generated responses before publishing to Slack',
      'Telemetry for token usage, latency & cost tracking with interactive ROI and automation dashboards',
    ],
    tech: ['Python', 'LangGraph', 'LangChain', 'Gemini', 'FastAPI', 'React', 'ChromaDB', 'LangSmith', 'Slack SDK', 'Notion API', 'Salesforce API', 'SSE'],
    status: 'Improving',
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    github: 'https://github.com/Jethva-Parthiv/opspilot',
    live: 'https://jethva-parthiv.github.io/OpsPilot/',
    liveLabel: 'Demo Website',
    featured: true,
  },
  {
    title: 'RAGVerse AI',
    subtitle: 'End-to-End RAG Framework',
    desc: 'Designed and implemented a modular Retrieval-Augmented Generation (RAG) system using LangGraph and LangChain, enabling multi-turn conversational interactions with persistent memory.',
    bullets: [
      'Modular RAG system enabling multi-turn conversational interactions with persistent memory checkpointing in PostgreSQL',
      'ChromaDB retrieval pipeline with hybrid retrieval, reranking, and configurable document chunking',
      'RAGAS-based evaluation pipeline measuring answer faithfulness, answer relevancy, context precision, and retrieval quality',
      'Extensible design supporting future LLM guardrails, query rewriting, contextual compression, and adaptive retrieval',
    ],
    tech: ['Python', 'LangChain', 'LangGraph', 'Gemini', 'ChromaDB', 'PostgreSQL', 'Ragas', 'LangSmith'],
    status: 'Improving',
    gradient: 'from-cyan-400 via-sky-400 to-indigo-500',
    github: 'https://github.com/Jethva-Parthiv/RAGVerse_AI',
  },
  {
    title: 'ResearchFlow',
    subtitle: 'Autonomous Deep Research Agent',
    desc: 'Autonomous deep research agent powered by LangGraph and Gemini LLM — orchestrating iterative self-correction loops and concurrent claim-level fact-verification against live web sources.',
    bullets: [
      'Iterative self-correction research loop that evaluates evidence and refines search queries dynamically',
      'Concurrent claim-level verification pipeline that fact-checks findings against live web sources',
      'Persistent Streamlit dashboard with LangSmith observability and tracing of multi-agent graphs',
    ],
    tech: ['Python', 'LangGraph', 'Gemini LLM', 'Streamlit', 'LangSmith'],
    status: 'Live',
    gradient: 'from-cyan-500 via-teal-500 to-blue-500',
    github: 'https://github.com/Jethva-Parthiv/research-assistant-agent',
    live: 'https://researchflow-agent.streamlit.app/',
    liveLabel: 'Live App',
  },
  {
    title: 'AI Event Scout Agent',
    subtitle: 'Autonomous Multi-Agent Discovery System',
    desc: 'Autonomous multi-agent system that discovers, validates, deduplicates, and ranks AI events from the web — replacing a fully manual research process.',
    bullets: [
      'Agent workflows covering web search, scraping, structured extraction, and duplicate detection',
      'Exposed as a FastAPI service for integration with downstream tools',
      'Modular architecture allows new data sources to be added in under 30 minutes',
    ],
    tech: ['Python', 'LangGraph', 'FastAPI', 'Streamlit', 'Gemini API'],
    status: 'Improving',
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    github: 'https://github.com/Jethva-Parthiv/autonomous-event-scout-agent',
  },
  {
    title: 'Dynamic Filter System',
    subtitle: 'FastAPI · PostgreSQL · JavaScript',
    desc: 'Production-ready FastAPI backend for enterprise datasets supporting dynamic filtering, sorting, pagination, and multi-attribute querying via REST APIs.',
    bullets: [
      'Dynamic filtering, sorting, pagination, and multi-attribute querying via REST APIs',
      'Optimized PostgreSQL queries through indexing and efficient SQL execution',
      'Significantly improved API response times for large datasets',
    ],
    tech: ['FastAPI', 'PostgreSQL', 'JavaScript', 'REST APIs'],
    status: 'Open Source',
    gradient: 'from-amber-500 via-orange-500 to-yellow-500',
    github: 'https://github.com/Jethva-Parthiv/Dynamic_Filter_System',
  },
]

const statusStyle: Record<string, string> = {
  'Live':        'badge-green',
  'Improving':   'badge-violet',
  'Open Source': 'badge-cyan',
}

/* ─── Featured card (OpsPilot) ───────────────────────────────── */
function FeaturedCard({ p }: { p: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="md:col-span-2 glass rounded-2xl overflow-hidden card-glow border border-violet-500/20"
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 shadow-[0_0_12px_rgba(168,85,247,0.5)]" />

      <div className="p-8">
        {/* Header row */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="flex items-center gap-1.5 text-sm text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              Featured Project
            </span>
          </div>
          <span className={`badge ${statusStyle[p.status]}`}>{p.status}</span>
        </div>

        {/* Two-column body */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: title + description + bullets */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-display font-bold text-2xl text-white leading-tight">{p.title}</h3>
              {p.subtitle && (
                <p className="text-sm text-slate-500 mt-1">{p.subtitle}</p>
              )}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>

            <ul className="space-y-2">
              {p.bullets.map((b, bi) => (
                <li key={bi} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.gradient} flex-shrink-0`} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: tech stack + actions */}
          <div className="flex flex-col justify-between gap-6">
            {/* Tech stack */}
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-medium border"
                    style={{
                      background: 'rgba(124,58,237,0.08)',
                      borderColor: 'rgba(124,58,237,0.2)',
                      color: '#c4b5fd',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-sm text-slate-300 hover:text-white hover:border-white/25 transition-colors"
                >
                  <Github className="w-4 h-4" /> View Code
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${p.gradient} btn-glow`}
                >
                  <ExternalLink className="w-4 h-4" /> {p.liveLabel || 'Live Demo'}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Regular card ────────────────────────────────────────────── */
function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      className="group glass rounded-2xl overflow-hidden card-glow border border-white/[0.06] flex flex-col"
    >
      {/* Gradient top accent */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${p.gradient} shadow-[0_0_10px_rgba(255,255,255,0.15)]`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Badge row */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="font-display font-bold text-lg text-white leading-tight">{p.title}</h3>
          <span className={`badge ${statusStyle[p.status]} flex-shrink-0`}>{p.status}</span>
        </div>
        {p.subtitle && (
          <div className="text-xs text-slate-500 font-medium mb-3">{p.subtitle}</div>
        )}

        <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>

        {/* Bullet points */}
        <ul className="mt-4 space-y-1.5 flex-1">
          {p.bullets.map((b, bi) => (
            <li key={bi} className="flex items-start gap-2 text-sm text-slate-400">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.gradient} flex-shrink-0`} />
              {b}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map(t => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.05] text-slate-400 border border-white/[0.07]">
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-5">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm text-slate-300 hover:text-white hover:border-white/20 transition-colors"
            >
              <Github className="w-4 h-4" /> Code
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${p.gradient} btn-glow`}
            >
              <ExternalLink className="w-4 h-4" /> {p.liveLabel || 'Live'}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Section ─────────────────────────────────────────────────── */
export default function Projects() {
  const featured   = projects.filter(p => p.featured)
  const regular    = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
          <h2 className="section-heading">Projects</h2>
          <a
            href="https://github.com/Jethva-Parthiv"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <Star className="w-4 h-4" /> View all on GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured card spans full width */}
          {featured.map(p => <FeaturedCard key={p.title} p={p} />)}
          {/* Regular cards fill remaining columns */}
          {regular.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </motion.div>
    </section>
  )
}
