import { ArrowUpRight, Images } from 'lucide-react'
import { galleryItems } from '../data/data'
import Reveal from './Reveal'

const Gallery = () => {
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
                initiatives, and moments of collective service.
              </p>
            </div>
          </Reveal>
        </div>

        <div className='mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 sm:mt-14 sm:auto-rows-[260px] sm:gap-4 lg:auto-rows-[280px] lg:grid-cols-4'>
          {galleryItems.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <article className={`group relative h-full overflow-hidden rounded-[24px] bg-[#071b18] ${i === 0 ? 'col-span-2 row-span-2' : i === 3 ? 'col-span-2' : ''}`}>
                <img src={item.image} alt={`${item.title} - Maira Kalan Welfare Society`} loading={i < 2 ? 'eager' : 'lazy'} className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />

                <div className='absolute inset-0 bg-gradient-to-t from-[#071b18]/85 via-[#071b18]/10 to-transparent opacity-80 transition group-hover:opacity-100' />

                <div className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6'>
                  <div>
                    <span className='text-[10px] font-bold uppercase tracking-[0.18em] text-[#b7e36b]'>{item.category}</span>
                    <h3 className='mt-1 text-base font-bold text-white sm:text-lg'>{item.title}</h3>
                  </div>
                  <div className='grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition group-hover:bg-[#b7e36b] group-hover:text-[#071b18]'>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className='mt-8 rounded-2xl border border-[#071b18]/10 bg-white/50 px-5 py-4'>
            <p className='text-sm leading-6 text-[#071b18]/45'>
              Gallery photographs can be added to the{' '}
              <span className='font-semibold text-[#071b18]/65'>
                public/gallery
              </span>{' '}
              folder as the society's photographs become available.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Gallery