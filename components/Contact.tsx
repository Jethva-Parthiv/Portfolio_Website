"use client"
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Linkedin, Github, Send, MapPin, MessageSquare, Phone } from 'lucide-react'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jethvaparthiv7@gmail.com',
    href: 'mailto:jethvaparthiv7@gmail.com',
    color: 'text-pink-400',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.2)',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 90819 08259',
    href: 'tel:+919081908259',
    color: 'text-green-400',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jethva-parthiv',
    href: 'https://linkedin.com/in/jethva-parthiv',
    color: 'text-blue-400',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Jethva-Parthiv',
    href: 'https://github.com/Jethva-Parthiv',
    color: 'text-slate-300',
    bg: 'rgba(255,255,255,0.04)',
    border: 'rgba(255,255,255,0.1)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gujarat, India · Open to Remote',
    href: '#',
    color: 'text-violet-400',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.2)',
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
          <p className="mt-6 text-slate-400 max-w-lg">
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
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{label}</div>
                  <div className={`text-sm font-medium mt-0.5 ${color}`}>{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-10 glass rounded-2xl border border-green-500/20"
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out — I'll get back to you shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 glass rounded-2xl border border-white/[0.06] space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-medium text-slate-300">Send a Message</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-1.5">Name</label>
                    <input
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-1.5">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-500 font-medium mb-1.5">Subject</label>
                  <input
                    required
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-500 font-medium mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-glow w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold transition-all disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
