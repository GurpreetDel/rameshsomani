import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="mb-14"
    >
      <p className="mb-3 text-xs tracking-[0.4em] text-gold uppercase">{kicker}</p>
      <h2 className="font-display text-4xl font-bold sm:text-5xl">{title}</h2>
    </motion.div>
  )
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
