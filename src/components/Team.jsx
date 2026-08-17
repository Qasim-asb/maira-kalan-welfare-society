import { useState } from 'react'
import { ArrowLeft, ArrowRight, HeartHandshake, X } from 'lucide-react'
import { team } from '../data/data'
import Reveal from './Reveal'

const Team = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const selectedPerson = selectedIndex !== null ? team[selectedIndex] : null

  const showPrevious = () => {
    setSelectedIndex(current => current === 0 ? team.length - 1 : current - 1)
  }

  const showNext = () => {
    setSelectedIndex(current => current === team.length - 1 ? 0 : current + 1)
  }

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

      {selectedPerson && (
        <div onClick={() => setSelectedIndex(null)} role='dialog' aria-modal='true' aria-label={selectedPerson.name} className='fixed inset-0 z-50 flex items-center justify-center bg-[#071b18]/95 p-5 backdrop-blur-sm sm:p-8'>
          <button type='button' onClick={() => setSelectedIndex(null)} aria-label='Close team member photo' className='absolute right-5 top-5 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18]'>
            <X size={21} />
          </button>
          <button type='button' onClick={event => {
            event.stopPropagation()
            showPrevious()
          }} aria-label='Previous team member' className='absolute left-4 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18] sm:left-8'>
            <ArrowLeft size={20} />
          </button>
          <div onClick={event => event.stopPropagation()} className='relative flex max-h-[90vh] max-w-6xl flex-col items-center'>
            <img src={selectedPerson.image} alt={`${selectedPerson.name} - ${selectedPerson.role}`} className='max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl' style={{ objectPosition: selectedPerson.position || 'center' }} />
            <div className='mt-4 text-center'>
              <p className='text-[10px] font-bold uppercase tracking-[0.18em] text-[#b7e36b]'>{selectedPerson.role}</p>
              <h3 className='mt-1 text-lg font-bold text-white sm:text-xl'>{selectedPerson.name}</h3>
            </div>
          </div>
          <button type='button' onClick={event => {
            event.stopPropagation()
            showNext()
          }} aria-label='Next team member' className='absolute right-4 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18] sm:right-8'>
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </section>
  )
}

export default Team