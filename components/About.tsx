"use client"
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, MapPin } from 'lucide-react'

const infoCards = [
  {
    icon: GraduationCap,
    title: 'Education',
    lines: ['MCA — Gujarat Vidyapith', 'Ahmedabad, Gujarat · 2025–2027'],
    color: 'text-violet-400',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.2)',
  },
  {
    icon: Briefcase,
    title: 'Focus Areas',
    lines: ['Python · Agentic AI · RAG · LangGraph · FastAPI', 'Machine Learning · Data Science'],
    color: 'text-cyan-400',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
  },
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Gujarat, India', 'Open to Remote Opportunities'],
    color: 'text-pink-400',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.2)',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading mb-16">About Me</h2>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — bio */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">
              I'm an <span className="text-white font-medium">Agentic AI Engineer and Python Developer</span> pursuing
              a Master's degree, with hands-on experience designing and building scalable agentic AI systems,
              multi-agent workflows, retrieval-augmented generation (RAG) pipelines, and AI-powered automation tools.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Experienced in developing agentic applications and scalable backend services using
              <span className="text-violet-300"> Python, FastAPI, LangGraph, LangChain, LangSmith</span>, vector
              databases, and leading LLM APIs. I prototype fast with AI-assisted tools, iterate based on real
              usage, and focus on tools that <span className="text-cyan-300">automate workflows and save measurable time</span>.
            </p>

            {/* Passion tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'LangGraph', 'LangChain', 'RAG Pipelines', 'FastAPI',
                'Agentic Workflows', 'LLM Evaluation', 'MCP', 'Prompt Engineering',
                'LangSmith', 'Vector Databases',
              ].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: '#a78bfa' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — info cards */}
          <div className="lg:col-span-2 space-y-4">
            {infoCards.map(({ icon: Icon, title, lines, color, bg, border }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl glass-hover"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div className={`mt-0.5 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">{title}</div>
                  {lines.map(l => <div key={l} className="text-sm text-slate-200">{l}</div>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Areas of Interest Subsection */}
        <div className="mt-16 pt-12 border-t border-white/[0.06]">
          <h3 className="font-display font-bold text-xl text-white mb-8">Areas of Interest</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Python Ecosystem',
                emoji: '🐍',
                desc: 'Leveraging Python as a core language for versatile application development, system scripting, automation, backend services, and AI logic integrations.',
                border: 'rgba(53,114,165,0.2)',
                color: 'text-blue-400'
              },
              {
                title: 'Agentic AI & RAG',
                emoji: '🤖',
                desc: 'Orchestrating autonomous multi-agent workflows (LangGraph/LangChain) and advanced Retrieval-Augmented Generation (RAG) pipelines.',
                border: 'rgba(124,58,237,0.2)',
                color: 'text-violet-400'
              },
              {
                title: 'Machine Learning',
                emoji: '🧠',
                desc: 'Exploring supervised & unsupervised learning algorithms, classification, regression, and model evaluations with popular ML libraries.',
                border: 'rgba(6,182,212,0.2)',
                color: 'text-cyan-400'
              },
              {
                title: 'Data Science',
                emoji: '📊',
                desc: 'Uncovering patterns in data through statistical modeling, exploratory data analysis, feature scaling, and interactive visualizations.',
                border: 'rgba(236,72,153,0.2)',
                color: 'text-pink-400'
              }
            ].map((interest, i) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 glass rounded-2xl border flex flex-col gap-2 hover:-translate-y-1 transition-transform duration-200"
                style={{ borderColor: interest.border }}
              >
                <div className="text-2xl">{interest.emoji}</div>
                <h4 className={`font-semibold text-sm mt-1 ${interest.color}`}>{interest.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">{interest.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
