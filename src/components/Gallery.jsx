import { useCallback, useState } from 'react'
import { ArrowUpRight, Images } from 'lucide-react'
import { galleryItems } from '../data/data'
import Reveal from './Reveal'
import ImageLightbox from './ImageLightbox'

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const selectedItem = selectedIndex !== null ? galleryItems[selectedIndex] : null

  const showPrevious = useCallback(() => {
    setSelectedIndex(current => current === 0 ? galleryItems.length - 1 : current - 1)
  }, [])

  const showNext = useCallback(() => {
    setSelectedIndex(current => current === galleryItems.length - 1 ? 0 : current + 1)
  }, [])

  return (
    <section id='gallery' className='bg-[#e9e2cf] px-5 py-20 text-[#071b18] sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col justify-between gap-7 md:flex-row md:items-end'>
          <Reveal>
            <p className='text-xs font-extrabold uppercase tracking-[0.22em] text-[#1b765d]'>09 · Gallery</p>
            <h2 className='mt-4 max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl'>
              Moments of
              <br />
              <span className='text-[#1b765d]'>community service.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className='flex max-w-sm items-start gap-3'>
              <div className='grid size-10 shrink-0 place-items-center rounded-xl bg-[#071b18] text-[#b7e36b]'>
                <Images size={19} />
              </div>
              <p className='text-sm leading-6 text-[#071b18]/50'>
                Photographs from the society's welfare activities, community
                initiatives, education support, and moments of collective
                service.
              </p>
            </div>
          </Reveal>
        </div>

        <div className='gallery-scroll relative mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-4 sm:mt-14 sm:gap-5'>
          {galleryItems.map((item, i) => (
            <article key={i} className='group relative h-[220px] w-[260px] shrink-0 snap-start overflow-hidden rounded-[24px] bg-[#071b18] sm:h-[250px] sm:w-[290px] md:h-[320px] md:w-[390px] lg:h-[340px] lg:w-[420px]'>
              <button type='button' onClick={() => setSelectedIndex(i)} className='absolute inset-0 z-10 cursor-zoom-in' aria-label={`View ${item.title}`} />
              <img src={item.image} alt={item.alt} loading={i < 2 ? 'eager' : 'lazy'} className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />

              <div className='absolute inset-0 bg-gradient-to-t from-[#071b18]/85 via-[#071b18]/10 to-transparent opacity-80 transition group-hover:opacity-100' />

              <div className='pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6'>
                <div>
                  <span className='text-[10px] font-bold uppercase tracking-[0.18em] text-[#b7e36b]'>{item.category}</span>
                  <h3 className='mt-1 text-base font-bold text-white sm:text-lg'>{item.title}</h3>
                </div>
                <div className='grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition group-hover:bg-[#b7e36b] group-hover:text-[#071b18]'>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className='mt-8 rounded-2xl border border-[#071b18]/10 bg-white/50 px-5 py-4'>
            <p className='text-sm leading-6 text-[#071b18]/50'>
              Moments of service, learning, and community — captured across
              Namli Maira.
            </p>
          </div>
        </Reveal>
      </div>

      {selectedItem && <ImageLightbox item={selectedItem} onClose={() => setSelectedIndex(null)} onPrevious={showPrevious} onNext={showNext} ariaLabel={selectedItem.title} subtitle={selectedItem.category} />}
    </section>
  )
}

export default Gallery