import { ArrowDownRight, CalendarDays, UsersRound } from 'lucide-react'
import { timeline } from '../data/data'
import Reveal from './Reveal'

const Introduction = () => {
  return (
    <section id='introduction' className='relative overflow-hidden bg-[#f4f7f5] px-5 py-20 text-[#071b18] sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='pointer-events-none absolute -right-32 top-20 size-80 rounded-full border border-[#071b18]/5 sm:size-[420px]' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
          <Reveal>
            <p className='text-sm font-bold uppercase tracking-[0.25em] text-emerald-700'>Our Story</p>
            <h2 className='mt-3 max-w-lg text-4xl font-extrabold leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-6xl'>
              From a conversation
              <span className='text-emerald-700'>
                {' '}
                to a community effort.
              </span>
            </h2>
            <p className='mt-6 max-w-md text-base leading-7 text-[#071b18]/60 sm:text-lg sm:leading-8'>
              The society began with people coming together to discuss the
              needs of their community and find practical ways to help.
            </p>
            <a href='#programs' className='group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#071b18]'>
              Explore our work
              <span className='grid size-9 place-items-center rounded-full bg-[#071b18] text-white transition group-hover:translate-x-1'>
                <ArrowDownRight size={16} />
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className='rounded-[2rem] bg-white p-6 shadow-sm sm:p-8 lg:p-10'>
              <div className='flex items-center gap-3'>
                <div className='grid size-11 place-items-center rounded-2xl bg-[#071b18] text-white'>
                  <UsersRound size={21} />
                </div>
                <div>
                  <p className='text-xs font-bold uppercase tracking-[0.2em] text-emerald-700'>Introduction</p>
                  <p className='mt-1 text-sm font-semibold text-[#071b18]/50'>Maira Kalan Welfare Society (Namli Maira)</p>
                </div>
              </div>
              <div className='mt-8 space-y-5 text-sm leading-7 text-[#071b18]/65 sm:text-base sm:leading-8'>
                <p>
                  The Maira Kalan Welfare Society (Namli Maira) was established
                  on <strong className='text-[#071b18]'>27 August 2022</strong>{' '}
                  through the WhatsApp group VC2 Namli Maira Unity.
                </p>
                <p>
                  During discussions in the group, members raised various
                  community issues and tried to find solutions. It was also
                  proposed to create a welfare trust to provide financial
                  assistance to the poorest members of the village.
                </p>
                <p>
                  Following this proposal, Maira Kalan Welfare Society was
                  formed, and people from the area were invited to become
                  members.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className='mt-16 border-t border-[#071b18]/10 pt-10 sm:mt-20 sm:pt-12'>
          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className='relative h-full rounded-3xl border border-[#071b18]/10 bg-white p-6'>
                  <div className='flex items-center justify-between gap-3'>
                    <div className='grid size-10 place-items-center rounded-xl bg-[#071b18]/5 text-emerald-700'>
                      <CalendarDays size={18} />
                    </div>
                    <span className='text-xs font-bold text-[#071b18]/20'>0{i + 1}</span>
                  </div>
                  <p className='mt-6 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700'>{item.date}</p>
                  <h3 className='mt-2 text-xl font-bold tracking-tight'>{item.title}</h3>
                  <p className='mt-3 text-sm leading-7 text-[#071b18]/55'>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction