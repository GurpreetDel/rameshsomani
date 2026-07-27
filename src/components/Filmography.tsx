import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { films } from '../data/content'
import type { Film } from '../data/content'
import { SectionHeading, Reveal } from './Section'

function TrailerLightbox({ film, onClose }: { film: Film; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-xl sm:p-8"
    >
      <motion.div
        initial={{ scale: 0.92, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 30 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl"
      >
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="font-display text-lg font-bold sm:text-2xl">{film.title}</h3>
            <p className="text-xs text-mist">
              {film.year} · as {film.role}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close trailer"
            className="rounded-full border border-white/15 px-4 py-2 text-xs tracking-widest text-white/80 uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Close ✕
          </button>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-gold/5">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${film.trailerId}?autoplay=1`}
            title={`${film.title} trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        {film.watchUrl && (
          <p className="mt-3 text-center text-xs text-mist">
            Original video:{' '}
            <a
              href={film.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {film.watchUrl}
            </a>
          </p>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Filmography() {
  const [active, setActive] = useState<Film | null>(null)

  return (
    <section id="films" className="relative scroll-mt-24 bg-ink-2/50 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="The Empire" title="The Ventures" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {films.map((film, i) => (
            <Reveal key={film.title} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-ink-2 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40">
                <button
                  onClick={() => film.trailerId && setActive(film)}
                  aria-label={`Play ${film.title} trailer`}
                  className="relative block aspect-[2/3] w-full cursor-pointer overflow-hidden text-left"
                >
                  {film.poster ? (
                    <img
                      src={film.poster}
                      alt={`${film.title} poster`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-3 to-ink">
                      <span className="font-display px-6 text-center text-3xl font-bold text-white/10">
                        {film.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full border border-gold/30 bg-ink/70 px-3 py-1 text-[10px] tracking-widest text-gold uppercase backdrop-blur">
                    {film.tag}
                  </span>
                  {film.trailerId && (
                    <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold/90 opacity-0 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-ink">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  )}
                </button>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl font-bold">{film.title}</h3>
                    <span className="text-sm text-gold">{film.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-mist">as {film.role}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{film.description}</p>

                  <div className="mt-5 flex items-center gap-3">
                    {film.trailerId && (
                      <button
                        onClick={() => setActive(film)}
                        className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold tracking-wide text-ink transition-transform hover:scale-105"
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-ink">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Play Trailer
                      </button>
                    )}
                    {film.watchUrl && (
                      <a
                        href={film.watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/15 px-4 py-2 text-xs tracking-wide text-white/70 transition-colors hover:border-gold hover:text-gold"
                      >
                        YouTube ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <TrailerLightbox film={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
