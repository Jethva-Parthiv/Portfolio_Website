"use client"
import { Github, Linkedin, Mail, Heart, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'About',        href: '#about'        },
  { label: 'Skills',       href: '#skills'       },
  { label: 'Projects',     href: '#projects'     },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact'      },
]

const socials = [
  { icon: Github,   href: 'https://github.com/Jethva-Parthiv',         label: 'GitHub'   },
  { icon: Linkedin, href: 'https://linkedin.com/in/jethva-parthiv',    label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:jethvaparthiv7@gmail.com',           label: 'Email'    },
  { icon: Phone,    href: 'tel:+919081908259',                         label: 'Phone'    },
]

export default function Footer() {
  return (
    <footer className="mt-12 pt-12 pb-8 border-t border-white/[0.06]">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="font-display font-bold text-2xl gradient-text mb-3">JP.</div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
            Agentic AI Engineer & Python Developer building multi-agent workflows, RAG pipelines,
            and AI-powered automation tools. Open to exciting opportunities.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Quick Links</div>
          <ul className="space-y-2.5">
            {quickLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Open to work */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Status</div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-green-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-medium">Open to Opportunities</span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Open to full-time AI Engineering roles, freelance AI projects, and research
            collaborations. Let's build something intelligent together.
          </p>
          <a
            href="mailto:jethvaparthiv7@gmail.com"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold btn-glow"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 border-t border-white/[0.04] flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-slate-600">
          © {new Date().getFullYear()} Jethva Parthiv. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          Crafted with <Heart className="w-3 h-3 text-pink-500 fill-pink-500" /> using Next.js & Tailwind
        </div>
      </div>
    </footer>
  )
}
