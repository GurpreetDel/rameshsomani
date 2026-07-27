import { about } from '../data/content'
import { SectionHeading, Reveal } from './Section'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading kicker="The Story" title={about.heading} />

      <div className="grid gap-12 lg:grid-cols-5">
        {/* portrait */}
        <Reveal className="lg:col-span-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/8">
            {about.portrait ? (
              <img src={about.portrait} alt="Ramesh Somani, founder of Exhibit" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-3 via-ink-2 to-ink">
                <span className="font-display text-7xl font-black text-white/8">RS</span>
                <span className="text-xs tracking-widest text-mist/50 uppercase">Portrait coming soon</span>
              </div>
            )}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 ring-inset" />
          </div>
        </Reveal>

        {/* bio */}
        <div className="space-y-6 lg:col-span-3">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-lg leading-relaxed text-white/70">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {about.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/8 bg-ink-2 p-5 text-center">
                  <div className="text-gradient-gold font-display text-3xl font-bold">{s.value}</div>
                  <div className="mt-1 text-xs tracking-widest text-mist uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
