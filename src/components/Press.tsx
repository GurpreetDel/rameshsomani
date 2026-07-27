import { press } from '../data/content'
import { SectionHeading, Reveal } from './Section'

export default function Press() {
  return (
    <section id="press" className="scroll-mt-24 bg-ink-2/50 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="In His Words" title="Quotes & Captions" />

        <div className="grid gap-6 md:grid-cols-3">
          {press.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <blockquote className="flex h-full flex-col justify-between rounded-2xl border border-white/8 bg-ink-2 p-8 transition-colors hover:border-gold/30">
                <div>
                  <span className="font-display text-5xl leading-none text-gold/40">“</span>
                  <p className="mt-2 text-base leading-relaxed text-white/75">{item.quote}</p>
                </div>
                <footer className="mt-6 flex items-center justify-between">
                  <cite className="text-sm font-semibold text-gold not-italic">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {item.outlet}
                      </a>
                    ) : (
                      item.outlet
                    )}
                  </cite>
                  <span className="text-xs text-mist">{item.date}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
