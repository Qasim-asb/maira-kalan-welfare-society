import { UsersRound } from 'lucide-react'
import { formerMembers } from '../data/data'
import Reveal from './Reveal'

const FormerMembers = () => {
  return (
    <section id='former-members' className='bg-[#071b18] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <Reveal>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
            <div>
              <p className='text-xs font-extrabold uppercase tracking-[0.22em] text-[#b7e36b]'>07 · Former Members</p>
              <h2 className='mt-4 max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl'>
                Those who
                <br />
                <span className='text-[#b7e36b]'>served before.</span>
              </h2>
            </div>

            <p className='max-w-sm text-sm leading-6 text-white/50'>
              Former Supreme Council members who have contributed their time,
              experience, and service to Maira Kalan Welfare Society.
            </p>
          </div>
        </Reveal>

        <div className='mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5'>
          {formerMembers.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.03}>
              <article className='group overflow-hidden rounded-[22px] bg-white/5 p-2.5 transition duration-300 hover:-translate-y-1.5 hover:bg-white/10 sm:rounded-[24px] sm:p-3'>
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

                <p className='px-1 pt-1 text-xs font-semibold text-[#b7e36b] sm:text-sm'>
                  {person.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className='mt-8 flex items-center gap-3 border-t border-white/10 pt-6'>
            <div className='grid size-9 shrink-0 place-items-center rounded-xl bg-[#b7e36b] text-[#071b18]'>
              <UsersRound size={17} />
            </div>

            <p className='text-xs leading-5 text-white/45 sm:text-sm'>
              Honouring those who have served the society and its community.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FormerMembers