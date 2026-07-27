import { motion } from 'framer-motion'
import { site, socials } from '../data/content'
import type { Social } from '../data/content'
import { Reveal } from './Section'

function SocialIcon({ icon }: { icon: Social['icon'] }) {
  const cls = 'h-5 w-5'
  if (icon === 'instagram')
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
      </svg>
    )
  if (icon === 'youtube')
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 0 0 2.12-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
      </svg>
    )
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M2 5.5h20v13H2v-13Zm3.2 3v6.9h1.5V8.5H5.2Zm3 0v6.9h1.3v-4.6l1 4.6h.9l1-4.6v4.6h1.3V8.5h-2l-.75 3.6-.75-3.6h-2Zm7 0v6.9h2c1.3 0 1.9-.6 1.9-2v-2.9c0-1.4-.6-2-1.9-2h-2Zm1.5 1.1h.4c.4 0 .5.2.5.7v2.4c0 .5-.1.7-.5.7h-.4v-4.5Z" />
    </svg>
  )
}

export default function Footer() {
  const [first, ...rest] = site.name.split(' ')

  return (
    <footer id="connect" className="relative scroll-mt-24 overflow-hidden pt-28">
      {/* ambient glows */}
      <div className="absolute bottom-0 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-gold/8 blur-[150px]" />
      <div className="absolute -top-10 left-1/4 h-[260px] w-[440px] rounded-full bg-[#4a3aff]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* CTA */}
        <Reveal>
          <div className="text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-[10px] tracking-[0.35em] text-gold uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Join the journey
            </p>
            <h2 className="font-display text-5xl leading-[0.95] font-black sm:text-7xl">
              Follow the <br />
              <span className="text-gradient-gold italic">Empire</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base text-mist">
              Every issue, every launch, every lap — catch {first} first. Tap in below. 🚀✨
            </p>
          </div>
        </Reveal>

        {/* social cards */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-2/80 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50"
              >
                <div className="absolute -right-6 -bottom-6 text-white/[0.03] transition-colors duration-300 group-hover:text-gold/10">
                  <div className="scale-[6]">
                    <SocialIcon icon={s.icon} />
                  </div>
                </div>
                <div className="relative flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-colors group-hover:bg-gold group-hover:text-ink">
                    <SocialIcon icon={s.icon} />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-white/90 group-hover:text-gold">{s.label}</div>
                    <div className="text-xs text-mist">{s.handle}</div>
                  </div>
                  <span className="ml-auto text-mist transition-transform group-hover:translate-x-1 group-hover:text-gold">↗</span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* giant name marquee */}
        <div className="relative mt-24 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="font-display px-6 text-6xl font-black text-white/[0.04] select-none sm:text-8xl"
              >
                {first} <span className="italic">{rest.join(' ')}</span> ·
              </span>
            ))}
          </motion.div>
        </div>

        {/* bottom bar */}
        <div className="mt-8 border-t border-white/8 py-10">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-[11px] leading-relaxed text-mist/60">
              {site.disclaimer}
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <a
              href="#top"
              className="group flex items-center gap-2 text-xs tracking-widest text-mist uppercase transition-colors hover:text-gold"
            >
              <span className="transition-transform group-hover:-translate-y-0.5">↑</span> Back to top
            </a>

            <p className="order-first flex items-center gap-1.5 text-sm text-white/70 sm:order-none">
              Made by
              <a
                href="https://www.instagram.com/takemahheart"
                target="_blank"
                rel="noopener noreferrer"
                className="group/maker flex items-baseline gap-1.5"
              >
                <span className="text-gradient-gold font-display font-bold italic">Alok</span>
                <span className="text-xs text-mist transition-colors group-hover/maker:text-gold">
                  @takemahheart
                </span>
              </a>
              with
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                className="text-base text-red-400"
                aria-label="love"
              >
                ❤
              </motion.span>
            </p>

            <p className="text-xs text-mist/50">© {new Date().getFullYear()} · Tribute Site</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
