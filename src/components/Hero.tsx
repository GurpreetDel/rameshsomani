import { motion, useScroll, useTransform } from 'framer-motion'
import { site } from '../data/content'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 180])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  const [first, ...rest] = site.name.split(' ')

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* photo backdrop, heavily dimmed for text legibility */}
      <div className="absolute inset-0">
        <img
          src="/photos/rs-rolls.jpg"
          alt=""
          className="h-full w-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" />
      </div>

      {/* ambient glows */}
      <div className="absolute top-1/4 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold/8 blur-[160px]" />
      <div className="absolute bottom-0 left-1/4 h-[300px] w-[500px] rounded-full bg-[#4a3aff]/6 blur-[140px]" />

      {/* vertical film-strip lines */}
      <div className="absolute inset-y-0 left-8 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
      <div className="absolute inset-y-0 right-8 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

      <motion.div style={{ y, opacity }} className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xs tracking-[0.4em] text-gold uppercase"
        >
          {site.tagline}
        </motion.p>

        <h1 className="font-display text-6xl leading-[0.95] font-black sm:text-8xl lg:text-9xl">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {first}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-gradient-gold block italic"
          >
            {rest.join(' ')}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto mt-8 max-w-md text-base text-mist sm:text-lg"
        >
          {site.heroIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#films"
            className="rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-105"
          >
            The Ventures
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/20 px-8 py-3 text-sm tracking-wide text-white/80 transition-colors hover:border-gold hover:text-gold"
          >
            His Story
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}
