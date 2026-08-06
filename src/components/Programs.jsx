import { ArrowUpRight } from 'lucide-react'
import { programs } from '../data/data'
import Reveal from './Reveal'

const Programs = () => {
  return (
    <section id='programs' className='bg-[#071b18] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16'>
          <Reveal>
            <p className='text-sm font-bold uppercase tracking-[0.25em] text-[#b7e36b]'>What We Do</p>
            <h2 className='mt-3 max-w-lg text-4xl font-extrabold leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-6xl'>
              Practical support.
              <span className='text-[#b7e36b]'> Real community.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className='max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8'>
              Our programs reflect the society’s commitment to education,
              financial assistance, community welfare, and humanitarian support.
              They are shaped around the needs of the people we serve.
            </p>
          </Reveal>
        </div>

        <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4'>
          {programs.map((program, i) => {
            const Icon = program.icon

            return (
              <Reveal key={i} delay={i * 0.08}>
                <article className='group relative flex min-h-[320px] h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065] sm:p-7'>
                  <span className='absolute -right-2 -top-5 text-[100px] font-black leading-none text-white/[0.025]'>{program.number}</span>
                  <div className='relative flex items-center justify-between'>
                    <div className='grid size-12 place-items-center rounded-2xl bg-[#b7e36b] text-[#071b18] transition duration-300 group-hover:scale-105'>
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <span className='text-xs font-bold tracking-[0.15em] text-white/25'>{program.number}</span>
                  </div>
                  <div className='relative mt-auto'>
                    <h3 className='text-xl font-bold tracking-tight sm:text-2xl'>{program.title}</h3>
                    <p className='mt-3 text-sm leading-7 text-white/50'>{program.description}</p>
                    <div className='mt-6 flex items-center justify-between border-t border-white/10 pt-5'>
                      <span className='text-xs font-semibold uppercase tracking-[0.16em] text-white/30'>Community</span>
                      <span className='grid size-9 place-items-center rounded-full border border-white/10 text-white/40 transition group-hover:border-[#b7e36b]/40 group-hover:text-[#b7e36b]'>
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Programs