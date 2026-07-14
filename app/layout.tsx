import '../styles/globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'

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
      </head>
      <body className="antialiased">
        <Navbar />
        <div className="relative z-10 min-h-screen max-w-6xl mx-auto px-6">
          {children}
        </div>
      </body>
    </html>
  )
}
