"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Skill = { name: string; pct: number }
type Group = { title: string; emoji: string; color: string; border: string; skills: Skill[] }

const groups: Group[] = [
  {
    title: 'Languages',
    emoji: '💬',
    color: 'from-violet-600 to-purple-400',
    border: 'rgba(124,58,237,0.25)',
    skills: [
      { name: 'Python',     pct: 99 },
      { name: 'Java',       pct: 75 },
      { name: 'JavaScript', pct: 72 },
      { name: 'C++',        pct: 70 },
      { name: 'C',          pct: 60 },
      { name: 'HTML & CSS', pct: 85 },
      { name: 'PHP',        pct: 65 },
      { name: 'SQL',        pct: 80 },
    ],
  },
  {
    title: 'AI & LLMs',
    emoji: '🧠',
    color: 'from-cyan-500 to-teal-400',
    border: 'rgba(6,182,212,0.25)',
    skills: [
      { name: 'LangGraph',          pct: 92 },
      { name: 'LangChain',          pct: 90 },
      { name: 'RAG Pipelines',      pct: 90 },
      { name: 'LLM APIs',           pct: 93 },
      { name: 'Prompt Engineering', pct: 88 },
      { name: 'LLM Evaluation',     pct: 82 },
      { name: 'Agentic Workflows',  pct: 91 },
    ],
  },
  {
    title: 'Frameworks & Tools',
    emoji: '⚡',
    color: 'from-green-500 to-emerald-400',
    border: 'rgba(16,185,129,0.25)',
    skills: [
      { name: 'FastAPI',   pct: 93 },
      { name: 'Flask',     pct: 80 },
      { name: 'Streamlit', pct: 85 },
      { name: 'REST APIs', pct: 90 },
      { name: 'React',     pct: 65 },
      { name: 'Pydantic',  pct: 90 },
      { name: 'Docker',    pct: 62 },
      { name: 'LangSmith', pct: 85 },
    ],
  },
  {
    title: 'Databases & Libraries',
    emoji: '🗄️',
    color: 'from-pink-500 to-rose-400',
    border: 'rgba(236,72,153,0.25)',
    skills: [
      { name: 'PostgreSQL',               pct: 82 },
      { name: 'ChromaDB / FAISS',         pct: 85 },
      { name: 'Qdrant',                   pct: 80 },
      { name: 'OpenSearch',               pct: 68 },
      { name: 'Pandas / NumPy',           pct: 88 },
      { name: 'Matplotlib / Plotly',      pct: 85 },
      { name: 'HuggingFace Transformers', pct: 72 },
      { name: 'Scikit-Learn',             pct: 70 },
    ],
  },
]

function SkillBar({ name, pct, color }: { name: string; pct: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-slate-500 text-xs">{pct}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-bar-fill bg-gradient-to-r ${color}`}
          style={{
            width: `${pct}%`,
            transform: inView ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 1.2s cubic-bezier(.4,0,.2,1)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading mb-16">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl glass-hover"
              style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${g.border}` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{g.emoji}</span>
                <h3 className="font-display font-semibold text-white">{g.title}</h3>
              </div>
              <div className="space-y-5">
                {g.skills.map(s => (
                  <SkillBar key={s.name} name={s.name} pct={s.pct} color={g.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
