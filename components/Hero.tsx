"use client"
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Download, ArrowRight, Phone } from 'lucide-react'

const roles = [
  'Agentic AI Engineer',
  'Python Developer',
  'LangGraph',
  'End To End RAG Pipeline Builder',
  'AI Automation',
]

function TypewriterRole() {
  const [roleIdx,   setRoleIdx]   = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const full = roles[roleIdx]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < full.length) {
      timer = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 65)
    } else if (!deleting && displayed.length === full.length) {
      timer = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(full.slice(0, displayed.length - 1)), 35)
    } else {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    }
    return () => clearTimeout(timer)
  }, [displayed, deleting, roleIdx])

  return (
    <span className="gradient-text font-bold">
      {displayed}<span className="cursor-blink text-violet-400">|</span>
    </span>
  )
}

const socials = [
  { icon: Github,   href: 'https://github.com/Jethva-Parthiv',             label: 'GitHub'   },
  { icon: Linkedin, href: 'https://linkedin.com/in/jethva-parthiv',        label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:jethvaparthiv7@gmail.com',               label: 'Email'    },
  { icon: Phone,    href: 'tel:+919081908259',                             label: 'Phone'    },
]

const stats = [
  { value: '4+',  label: 'AI Projects'    },
  { value: '3+',  label: 'Years Coding'   },
]

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 min-h-screen flex items-center">
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-violet-700/20 top-10 -left-20" style={{ animationDelay: '0s' }} />
      <div className="orb w-72 h-72 bg-cyan-500/15 bottom-20 right-10"  style={{ animationDelay: '-4s' }} />

      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — text */}
        <div className="relative z-10">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full glass border border-green-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-medium">Open to Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-5xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            Jethva<br />
            <span className="text-white/80">Parthiv</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-xl md:text-2xl text-slate-400 font-medium h-8"
          >
            <TypewriterRole />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-5 text-slate-400 max-w-lg leading-relaxed"
          >
            I design and build scalable agentic AI systems, multi-agent workflows, RAG pipelines,
            and AI-powered automation tools — prototyping fast and iterating based on real usage.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-slate-200 font-medium hover:border-violet-500/40 transition-colors"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex items-center gap-3"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — avatar + stats */}
        <div className="relative flex flex-col items-center gap-8">
          {/* Avatar ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            {/* Spinning outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/30 animate-spin-slow" style={{ margin: '-16px' }} />
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/30 to-cyan-500/20 blur-2xl" style={{ margin: '-8px' }} />
            {/* Avatar circle */}
            <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-violet-700 to-cyan-500 p-1 shadow-glow">
              <div className="w-full h-full rounded-full bg-deep flex items-center justify-center overflow-hidden">
                <div className="text-center select-none">
                  <div className="font-display font-black text-5xl gradient-text">JP</div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Agentic AI Engineer</div>
                </div>
              </div>
            </div>
            {/* Floating tech badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-8 glass border border-white/10 px-3 py-1.5 rounded-xl text-xs font-medium text-violet-300"
            >
              🤖 LangGraph
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-8 glass border border-white/10 px-3 py-1.5 rounded-xl text-xs font-medium text-cyan-300"
            >
              ⚡ FastAPI
            </motion.div>
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -right-14 glass border border-white/10 px-3 py-1.5 rounded-xl text-xs font-medium text-green-300"
            >
              🧠 RAG
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -top-6 -left-10 glass border border-white/10 px-3 py-1.5 rounded-xl text-xs font-medium text-yellow-300"
            >
              🐍 Python
            </motion.div>
            <motion.div
              animate={{ x: [0, -6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute top-1/2 -left-16 glass border border-white/10 px-3 py-1.5 rounded-xl text-xs font-medium text-pink-300"
            >
              🤖 Agentic AI
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 gap-3 w-full max-w-sm"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="glass border border-white/[0.07] rounded-xl p-4 text-center">
                <div className="font-display font-bold text-2xl gradient-text">{value}</div>
                <div className="text-xs text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
