import { HeartHandshake } from 'lucide-react'
import { founderMembers } from '../data/data'
import Reveal from './Reveal'

const FounderMembers = () => {
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
            <Reveal key={i} delay={i * 0.03}>
              <article className='group overflow-hidden rounded-[22px] bg-white p-2.5 transition duration-300 hover:-translate-y-1.5 sm:rounded-[24px] sm:p-3'>
                <div className='aspect-square overflow-hidden rounded-[17px] bg-[#0d3b35] sm:rounded-[19px]'>
                  <img
                    src={person.image}
                    alt={person.name}
                    loading={i < 6 ? 'eager' : 'lazy'}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                    style={{ objectPosition: person.position || 'center' }}
                  />
                </div>

                <h3 className='px-1 pb-1 pt-3 text-sm font-bold leading-5 tracking-tight sm:px-1 sm:pt-4 sm:text-base'>
                  {person.name}
                </h3>

                <p className='px-1 pt-1 text-xs font-semibold text-[#1b765d] sm:text-sm'>
                  {person.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className='mt-8 flex items-center gap-3 border-t border-[#071b18]/10 pt-6'>
            <div className='grid size-9 shrink-0 place-items-center rounded-xl bg-[#071b18] text-[#b7e36b]'>
              <HeartHandshake size={17} />
            </div>

            <p className='text-xs leading-5 text-[#071b18]/45 sm:text-sm'>
              Remembering the members who helped lay the foundation of the society.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FounderMembers