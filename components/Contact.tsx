"use client"
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jethva.parthiv007@gmail.com',
    href: 'mailto:jethva.parthiv007@gmail.com',
    color: 'text-pink-600 dark:text-pink-400',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.25)',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 90819 08259',
    href: 'tel:+919081908259',
    color: 'text-emerald-700 dark:text-green-400',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jethva-parthiv',
    href: 'https://linkedin.com/in/jethva-parthiv',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Jethva-Parthiv',
    href: 'https://github.com/Jethva-Parthiv',
    color: 'text-slate-800 dark:text-slate-300',
    bg: 'rgba(100,116,139,0.08)',
    border: 'rgba(100,116,139,0.25)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gujarat, India · Open to Relocate & Remote',
    href: '#',
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.25)',
  },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1500)
  }

  return (
    <section id="contact" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-lg">
            Interested in working together? Whether it's a freelance AI project, a full-time
            role, or just a chat about agentic AI — I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-3">
            {socials.map(({ icon: Icon, label, value, href, color, bg, border }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-hover transition-all"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}
                  style={{ background: border }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">{label}</div>
                  <div className={`text-sm font-semibold mt-0.5 ${color}`}>{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right — message form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 glass rounded-2xl space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="form-input text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="form-input text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="AI Project / Full-time Role / Collaboration"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  className="form-input text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell me about your project, timeline, and goals..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="form-input text-sm resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-sm disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
                </button>

                {status === 'sent' && (
                  <span className="text-xs text-emerald-600 dark:text-green-400 font-medium">
                    ✓ Thanks! I'll reply soon.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
