import { useState } from 'react'
import { ArrowLeft, ArrowRight, HeartHandshake, X } from 'lucide-react'
import { founderMembers } from '../data/data'
import Reveal from './Reveal'

const FounderMembers = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const selectedMember = selectedIndex !== null ? founderMembers[selectedIndex] : null

  const showPrevious = () => {
    setSelectedIndex(current => current === 0 ? founderMembers.length - 1 : current - 1)
  }

  const showNext = () => {
    setSelectedIndex(current => current === founderMembers.length - 1 ? 0 : current + 1)
  }

  return (
    <section id='founder-members' className='bg-[#e9e2cf] px-5 py-20 text-[#071b18] sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <Reveal>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
            <div>
              <p className='text-xs font-extrabold uppercase tracking-[0.22em] text-[#1b765d]'>06 · Founder Members</p>
              <h2 className='mt-4 max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl'>
                The people who
                <br />
                <span className='text-[#1b765d]'>started the journey.</span>
              </h2>
            </div>

            <p className='max-w-sm text-sm leading-6 text-[#071b18]/55'>
              Founder members who played an important role in establishing
              Maira Kalan Welfare Society and shaping its early foundation.
            </p>
          </div>
        </Reveal>

        <div className='mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5'>
          {founderMembers.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.03}>
              <article className='group overflow-hidden rounded-[22px] bg-white p-2.5 transition duration-300 hover:-translate-y-1.5 sm:rounded-[24px] sm:p-3'>
                <div className='relative aspect-square overflow-hidden rounded-[17px] bg-[#0d3b35] sm:rounded-[19px]'>
                  <button type='button' onClick={() => setSelectedIndex(i)} aria-label={`View ${person.name}`} className='absolute inset-0 z-10 cursor-zoom-in' />
                  <img src={person.image} alt={person.name} loading={i < 6 ? 'eager' : 'lazy'} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' style={{ objectPosition: person.position || 'center' }} />
                </div>
                <h3 className='px-1 pb-1 pt-3 text-sm font-bold leading-5 tracking-tight sm:px-1 sm:pt-4 sm:text-base'>{person.name}</h3>
                <p className='px-1 pt-1 text-xs font-semibold text-[#1b765d] sm:text-sm'>{person.role}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className='mt-8 flex items-center gap-3 border-t border-[#071b18]/10 pt-6'>
            <div className='grid size-9 shrink-0 place-items-center rounded-xl bg-[#071b18] text-[#b7e36b]'>
              <HeartHandshake size={17} />
            </div>
            <p className='text-xs leading-5 text-[#071b18]/45 sm:text-sm'>Remembering the members who helped lay the foundation of the society.</p>
          </div>
        </Reveal>
      </div>

      {selectedMember && (
        <div onClick={() => setSelectedIndex(null)} role='dialog' aria-modal='true' aria-label={selectedMember.name} className='fixed inset-0 z-50 flex items-center justify-center bg-[#071b18]/95 p-5 backdrop-blur-sm sm:p-8'>
          <button type='button' onClick={() => setSelectedIndex(null)} aria-label='Close photo' className='absolute right-5 top-5 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18]'>
            <X size={21} />
          </button>
          <button type='button' onClick={event => {
            event.stopPropagation()
            showPrevious()
          }} aria-label='Previous member' className='absolute left-4 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18] sm:left-8'>
            <ArrowLeft size={20} />
          </button>
          <div onClick={event => event.stopPropagation()} className='relative flex max-h-[90vh] max-w-6xl flex-col items-center'>
            <img src={selectedMember.image} alt={selectedMember.name} className='max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl' style={{ objectPosition: selectedMember.position || 'center' }} />
            <div className='mt-4 text-center'>
              <p className='text-[10px] font-bold uppercase tracking-[0.18em] text-[#b7e36b]'>{selectedMember.role}</p>
              <h3 className='mt-1 text-lg font-bold text-white sm:text-xl'>{selectedMember.name}</h3>
            </div>
          </div>
          <button type='button' onClick={event => {
            event.stopPropagation()
            showNext()
          }} aria-label='Next member' className='absolute right-4 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18] sm:right-8'>
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </section>
  )
}

export default FounderMembers