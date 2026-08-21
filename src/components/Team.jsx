import { useCallback, useState } from 'react'
import { HeartHandshake } from 'lucide-react'
import { team } from '../data/data'
import Reveal from './Reveal'
import ImageLightbox from './ImageLightbox'

const Team = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const selectedPerson = selectedIndex !== null ? team[selectedIndex] : null

  const showPrevious = useCallback(() => {
    setSelectedIndex(current => current === 0 ? team.length - 1 : current - 1)
  }, [])

  const showNext = useCallback(() => {
    setSelectedIndex(current => current === team.length - 1 ? 0 : current + 1)
  }, [])

  return (
    <section id='team' className='bg-[#e9e2cf] px-5 py-20 text-[#071b18] sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <Reveal>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
            <div>
              <p className='text-xs font-extrabold uppercase tracking-[0.22em] text-[#1b765d]'>04 · Leadership</p>
              <h2 className='mt-4 max-w-2xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl'>
                People behind
                <br />
                the mission.
              </h2>
            </div>

            <p className='max-w-sm text-sm leading-6 text-[#071b18]/55'>
              Community leaders and members committed to serving the people of
              Namli Maira through collective effort.
            </p>
          </div>
        </Reveal>

        <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4'>
          {team.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.04}>
              <article className='rounded-[28px] bg-white p-5 transition duration-300 hover:-translate-y-1.5'>
                <div className='relative aspect-square overflow-hidden rounded-[22px] bg-[#0d3b35]'>
                  <button type='button' onClick={() => setSelectedIndex(i)} aria-label={`View ${person.name}`} className='absolute inset-0 z-10 cursor-zoom-in' />
                  <img src={person.image} alt={`${person.name} - ${person.role}`} loading={i < 4 ? 'eager' : 'lazy'} className='h-full w-full object-cover transition-transform duration-500 hover:scale-105' style={{ objectPosition: person.position || 'center' }} />
                </div>
                <h3 className='mt-5 text-lg font-bold tracking-tight'>{person.name}</h3>
                <p className='mt-1 text-sm font-medium text-[#1b765d]'>{person.role}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className='mt-8 flex items-center gap-3 border-t border-[#071b18]/10 pt-6'>
            <div className='grid size-9 shrink-0 place-items-center rounded-xl bg-[#071b18] text-[#b7e36b]'>
              <HeartHandshake size={17} />
            </div>
            <p className='text-xs leading-5 text-[#071b18]/45 sm:text-sm'>Working together in service of the community.</p>
          </div>
        </Reveal>
      </div>

      {selectedPerson && <ImageLightbox item={selectedPerson} onClose={() => setSelectedIndex(null)} onPrevious={showPrevious} onNext={showNext} ariaLabel={selectedPerson.name} subtitle={selectedPerson.role} />}
    </section>
  )
}

export default Team