import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Images, X } from 'lucide-react'
import { galleryItems } from '../data/data'
import Reveal from './Reveal'

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const selectedItem = selectedIndex !== null ? galleryItems[selectedIndex] : null

  const showPrevious = () => { setSelectedIndex(current => current === 0 ? galleryItems.length - 1 : current - 1) }

  const showNext = () => { setSelectedIndex(current => current === galleryItems.length - 1 ? 0 : current + 1) }

  return (
    <section id='gallery' className='bg-[#e9e2cf] px-5 py-20 text-[#071b18] sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col justify-between gap-7 md:flex-row md:items-end'>
          <Reveal>
            <p className='text-xs font-extrabold uppercase tracking-[0.22em] text-[#1b765d]'>07 · Gallery</p>
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
            <article key={i} className='group relative h-[280px] w-[320px] shrink-0 snap-start overflow-hidden rounded-[24px] bg-[#071b18] sm:h-[340px] sm:w-[420px]'>
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

      {selectedItem && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-[#071b18]/95 p-5 backdrop-blur-sm sm:p-8' role='dialog' aria-modal='true' aria-label={selectedItem.title} onClick={() => setSelectedIndex(null)}>
          <button type='button' onClick={() => setSelectedIndex(null)} className='absolute right-5 top-5 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18]' aria-label='Close gallery'>
            <X size={21} />
          </button>
          <button type='button'
            onClick={event => {
              event.stopPropagation()
              showPrevious()
            }}
            className='absolute left-4 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18] sm:left-8' aria-label='Previous photo'>
            <ArrowLeft size={20} />
          </button>

          <div className='relative flex max-h-[90vh] max-w-6xl flex-col items-center' onClick={event => event.stopPropagation()}>
            <img src={selectedItem.image} alt={selectedItem.alt} className='max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl' />
            <div className='mt-4 text-center'>
              <p className='text-[10px] font-bold uppercase tracking-[0.18em] text-[#b7e36b]'>{selectedItem.category}</p>
              <h3 className='mt-1 text-lg font-bold text-white sm:text-xl'>{selectedItem.title}</h3>
            </div>
          </div>
          <button type='button'
            onClick={event => {
              event.stopPropagation()
              showNext()
            }}
            className='absolute right-4 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18] sm:right-8' aria-label='Next photo'>
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery