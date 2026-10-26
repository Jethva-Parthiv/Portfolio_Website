import '../styles/globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import { ThemeProvider } from '../components/ThemeContext'

export const metadata = {
  title: 'Jethva Parthiv — Agentic AI Engineer & Python Developer',
  description: 'Portfolio of Jethva Parthiv — Agentic AI Engineer building multi-agent workflows, RAG pipelines, and AI-powered automation tools with LangGraph, LangChain, FastAPI and leading LLM APIs.',
  keywords: ['Agentic AI', 'LangGraph', 'LangChain', 'RAG', 'FastAPI', 'Python', 'Jethva Parthiv', 'AI Engineer'],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <div className="relative z-10 min-h-screen max-w-6xl mx-auto px-6">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
