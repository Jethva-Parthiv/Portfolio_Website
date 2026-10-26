"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeContext'

const links = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'GitHub',       href: '#github' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [active,      setActive]      = useState('')
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [scrollPct,   setScrollPct]   = useState(0)
  const { theme, toggleTheme }        = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY   = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollY > 20)
      setScrollPct(maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0)

      // active section highlight
      const sections = links.map(l => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollPct}%` }}
      />

      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-3 inset-x-0 mx-auto z-50 transition-all duration-300 rounded-2xl px-6 py-3 flex items-center gap-6
          ${scrolled
            ? 'glass shadow-card border border-slate-200 dark:border-white/[0.07] w-[92%] max-w-5xl'
            : 'bg-transparent w-[92%] max-w-5xl'}`}
      >
        {/* Logo */}
        <a href="#" className="font-display font-bold text-lg gradient-text flex-shrink-0 select-none">
          JP<span className="text-slate-400 dark:text-white/30">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href.slice(1) ? 'active' : ''}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Parthiv_Jethva_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-glow px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold"
          >
            Resume
          </a>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl glass border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-violet-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden ml-auto flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl glass border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-all"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-violet-600" />
            )}
          </button>

          <button
            className="text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1,  y: 0 }}
            exit={{    opacity: 0,  y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 glass rounded-2xl p-6 shadow-card md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${active === l.href.slice(1) ? 'text-violet-600 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/Parthiv_Jethva_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-glow mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold text-center"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
