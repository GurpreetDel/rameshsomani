import { gallery } from '../data/content'
import { SectionHeading, Reveal } from './Section'

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading kicker="The Frames" title="Gallery" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((item, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <figure className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/8">
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-3 via-ink-2 to-ink">
                  <svg className="h-8 w-8 text-white/10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A1.5 1.5 0 0 0 21.75 19.5V4.5A1.5 1.5 0 0 0 20.25 3H3.75A1.5 1.5 0 0 0 2.25 4.5v15A1.5 1.5 0 0 0 3.75 21Zm10.5-11.25h.008v.008h-.008V9.75Z" />
                  </svg>
                </div>
              )}
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/95 to-transparent p-4 text-xs tracking-widest text-white/80 uppercase transition-transform duration-300 group-hover:translate-y-0">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-mist/60">
        Frames from his own YouTube journey and Exhibit brand imagery — full credits in the footer. Rights holders may request removal anytime.
      </p>
    </section>
  )
}
