import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/data'
import Reveal from './Reveal'

const Projects = () => {
  return (
    <section id='projects' className='bg-[#071b18] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <Reveal>
          <p className='text-xs font-extrabold uppercase tracking-[0.22em] text-[#b7e36b]'>08 · Community Work</p>
          <div className='mt-4 flex flex-col justify-between gap-7 md:flex-row md:items-end'>
            <h2 className='max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl'>
              Turning collective effort
              <br />
              into <span className='text-[#b7e36b]'>real support.</span>
            </h2>
            <p className='max-w-sm text-sm leading-6 text-white/50'>
              A look at some of the welfare and education-support activities
              carried out by Maira Kalan Welfare Society.
            </p>
          </div>
        </Reveal>

        <div className='mt-12 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4'>
          {projects.map((project, i) => {
            const Icon = project.icon

            return (
              <Reveal key={project.title} delay={i * 0.06}>
                <article className='group relative min-h-[300px] h-full overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1.5 hover:bg-white/[0.065]'>

                  <div className='absolute -right-8 -top-8 size-32 rounded-full bg-[#b7e36b]/10 blur-2xl transition group-hover:bg-[#b7e36b]/20' />

                  <div className='relative flex items-center justify-between'>
                    <div className='grid size-11 place-items-center rounded-2xl bg-[#b7e36b] text-[#071b18]'>
                      <Icon size={21} />
                    </div>
                    <span className='rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/50'>{project.category}</span>
                  </div>

                  <div className='relative mt-16'>
                    <span className='text-xs font-bold text-white/20'>0{i + 1}</span>
                    <h3 className='mt-2 text-xl font-bold tracking-tight'>{project.title}</h3>
                    <p className='mt-3 text-sm leading-6 text-white/45'>{project.description}</p>
                  </div>

                  <div className='relative mt-6 flex justify-end text-white/30 transition group-hover:text-[#b7e36b]'>
                    <ArrowUpRight size={18} />
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

export default Projects