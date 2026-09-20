"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Skill = { name: string; pct: number }
type Group = { title: string; emoji: string; color: string; border: string; skills: Skill[] }

const groups: Group[] = [
  {
    title: 'Languages & Concepts',
    emoji: '💻',
    color: 'from-violet-600 to-purple-400',
    border: 'rgba(124,58,237,0.25)',
    skills: [
      { name: 'Python', pct: 98 },
      { name: 'SQL', pct: 85 },
      { name: 'OOPs', pct: 90 },
      { name: 'DSA', pct: 82 },
    ],
  },
  {
    title: 'LLM Harness',
    emoji: '🤖',
    color: 'from-cyan-500 to-teal-400',
    border: 'rgba(6,182,212,0.25)',
    skills: [
      { name: 'LLM Integration', pct: 95 },
      { name: 'LangGraph', pct: 94 },
      { name: 'LangChain', pct: 90 },
      { name: 'Tool Calling', pct: 92 },
      { name: 'Chatbots', pct: 92 },
      { name: 'Multi-Agent Systems', pct: 92 },
      { name: 'Prompt Engineering', pct: 90 },
      { name: 'Observability', pct: 86 },
      { name: 'LLM Evals', pct: 85 },
      { name: 'MCP', pct: 88 },
    ],
  },
  {
    title: 'AI Concepts',
    emoji: '🧠',
    color: 'from-blue-500 to-indigo-400',
    border: 'rgba(59,130,246,0.25)',
    skills: [
      { name: 'Agentic Harness', pct: 92 },
      { name: 'RAG Systems', pct: 94 },
      { name: 'Machine Learning', pct: 88 },
      { name: 'Data Science', pct: 85 },
      { name: 'NLP', pct: 88 },
    ],
  },
  {
    title: 'Frameworks & Tools',
    emoji: '⚡',
    color: 'from-green-500 to-emerald-400',
    border: 'rgba(16,185,129,0.25)',
    skills: [
      { name: 'FastAPI', pct: 94 },
      { name: 'Streamlit', pct: 90 },
      { name: 'React (basic)', pct: 68 },
      { name: 'REST APIs', pct: 92 },
      { name: 'Pydantic', pct: 90 },
    ],
  },
  {
    title: 'Libraries',
    emoji: '📚',
    color: 'from-pink-500 to-rose-400',
    border: 'rgba(236,72,153,0.25)',
    skills: [
      { name: 'Pandas', pct: 90 },
      { name: 'NumPy', pct: 88 },
      { name: 'SpaCy', pct: 82 },
      { name: 'NLTK', pct: 80 },
      { name: 'Scikit-Learn', pct: 86 },
      { name: 'HuggingFace Transformers', pct: 84 },
      { name: 'FastMCP', pct: 88 },
    ],
  },
  {
    title: 'Databases',
    emoji: '🗄️',
    color: 'from-amber-500 to-yellow-400',
    border: 'rgba(245,158,11,0.25)',
    skills: [
      { name: 'PostgreSQL', pct: 86 },
      { name: 'MySQL', pct: 82 },
      { name: 'Qdrant', pct: 88 },
      { name: 'FAISS', pct: 88 },
      { name: 'ChromaDB', pct: 86 },
      { name: 'Pinecone', pct: 84 },
      { name: 'Redis', pct: 80 },
    ],
  },
  {
    title: 'DevOps & LLMOps',
    emoji: '🚀',
    color: 'from-purple-500 to-pink-400',
    border: 'rgba(168,85,247,0.25)',
    skills: [
      { name: 'Docker', pct: 82 },
      { name: 'Render', pct: 85 },
      { name: 'Vercel', pct: 86 },
      { name: 'Streamlit Cloud', pct: 90 },
      { name: 'LangSmith', pct: 88 },
      { name: 'HuggingFace Spaces', pct: 86 },
      { name: 'AWS (Console Basics)', pct: 75 },
    ],
  },
  {
    title: 'Tools',
    emoji: '🛠️',
    color: 'from-teal-500 to-emerald-400',
    border: 'rgba(20,184,166,0.25)',
    skills: [
      { name: 'Git', pct: 90 },
      { name: 'GitHub', pct: 92 },
      { name: 'Postman', pct: 88 },
      { name: 'Google Colab', pct: 90 },
      { name: 'VS Code', pct: 95 },
      { name: 'Antigravity', pct: 90 },
      { name: 'n8n', pct: 82 },
    ],
  },
  {
    title: 'Soft Skills',
    emoji: '🤝',
    color: 'from-amber-500 to-orange-400',
    border: 'rgba(245,158,11,0.25)',
    skills: [
      { name: 'Problem Solving', pct: 95 },
      { name: 'Adaptability', pct: 90 },
      { name: 'Team Dynamics', pct: 88 },
      { name: 'Time Management', pct: 85 },
      { name: 'MVP Mindset', pct: 90 },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
              className="p-6 rounded-2xl glass-hover"
              style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${g.border}` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{g.emoji}</span>
                <h3 className="font-display font-semibold text-white">{g.title}</h3>
              </div>
              <div className="space-y-4">
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
