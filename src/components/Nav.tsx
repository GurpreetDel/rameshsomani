import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#films', label: 'Practice' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#press', label: 'Quotes' },
  { href: '#connect', label: 'Connect' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* gold reading-progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-gold-2 via-gold to-gold-2"
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5 sm:px-6"
      >
        <nav
          className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 sm:px-7 ${
            scrolled
              ? 'border-white/10 bg-ink/70 shadow-2xl shadow-black/40 backdrop-blur-2xl'
              : 'border-white/5 bg-ink/30 backdrop-blur-md'
          }`}
        >
          <a href="#top" className="group flex items-baseline gap-2">
            <span className="text-gradient-gold font-display text-lg font-black tracking-tight italic sm:text-xl">
              Ramesh Somani
            </span>
            <span className="hidden text-[9px] tracking-[0.3em] text-mist/70 uppercase transition-colors group-hover:text-gold sm:inline">
              Exhibit
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-[11px] font-medium tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-gold to-gold-2 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.instagram.com/ramesh_somani/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-5 py-2 text-[11px] font-bold tracking-[0.15em] text-ink uppercase transition-transform hover:scale-105"
              >
                Follow
              </a>
            </li>
          </ul>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="relative z-[90] flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 lg:hidden"
          >
            <span
              className={`h-px w-4 bg-white transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-4 bg-white transition-transform duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
            />
          </button>
        </nav>
      </motion.header>

      {/* full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex flex-col justify-center bg-ink/95 px-10 backdrop-blur-2xl lg:hidden"
          >
            <p className="mb-8 text-[10px] tracking-[0.4em] text-gold uppercase">Menu</p>
            <ul className="space-y-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-2 text-4xl font-bold text-white/85 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gradient-gold font-display mt-10 text-sm italic"
            >
              Ramesh Somani · Exhibit
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
