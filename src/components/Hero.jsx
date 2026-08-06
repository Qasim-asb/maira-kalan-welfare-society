import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import namliMairaImage from '../assets/images/namli-maira.jpeg'

const Hero = () => {
  return (
    <section id='home' className='relative isolate min-h-[780px] overflow-hidden bg-[#071b18] text-white sm:min-h-[850px]'>
      <div className='absolute inset-0'>
        <img src={namliMairaImage} alt='Namli Maira' className='h-full w-full object-cover object-center' />
      </div>

      <div className='absolute inset-0 bg-[#071b18]/55' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(183,227,107,.22),transparent_30%),linear-gradient(90deg,#071b18_0%,rgba(7,27,24,.9)_38%,rgba(7,27,24,.3)_100%)]' />
      <div className='absolute inset-0 bg-gradient-to-t from-[#071b18] via-transparent to-[#071b18]/25' />

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} className='absolute -right-48 top-32 size-[520px] rounded-full border border-[#b7e36b]/10 sm:-right-40 sm:size-[600px]' />

      <motion.div animate={{ y: [0, -12, 0], opacity: [0.35, 0.55, 0.35] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className='absolute right-12 top-44 size-40 rounded-full bg-[#b7e36b]/10 blur-3xl sm:right-24 sm:top-64' />

      <div className='relative mx-auto flex min-h-[780px] max-w-7xl items-end px-5 pb-20 pt-32 sm:min-h-[850px] sm:px-8 sm:pb-24 lg:px-10 lg:pb-28'>
        <div className='max-w-4xl'>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur-md'>
            <span className='size-1.5 rounded-full bg-[#b7e36b]' />
            Maira Kalan Welfare Society
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className='max-w-4xl text-balance text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[88px]'>
            Serving
            <br />
            <span className='text-[#b7e36b]'>Namli Maira.</span>
            <br />
            Building together.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }} className='mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg'>
            Maira Kalan Welfare Society (Namli Maira) works through collective
            effort to support education, provide welfare assistance, and serve
            deserving members of the community.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }} className='mt-9 flex flex-wrap gap-3'>
            <a href='#introduction' className='group inline-flex items-center gap-2 rounded-full bg-[#b7e36b] px-6 py-3.5 text-sm font-extrabold text-[#071b18] transition hover:-translate-y-1 hover:bg-[#c4ed82]'>
              Discover our story
              <ArrowRight size={17} className='transition group-hover:translate-x-1' />
            </a>
            <a href='#support' className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15'>
              Support the society
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.32 }} className='mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-7 sm:mt-16 sm:grid-cols-4 sm:gap-8'>
            <div>
              <div className='text-base font-extrabold tracking-tight sm:text-xl'>2022</div>
              <div className='mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/45'>Established</div>
            </div>
            <div>
              <div className='text-base font-extrabold tracking-tight sm:text-xl'>Whole Namli Maira</div>
              <div className='mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/45'>Community</div>
            </div>
            <div>
              <div className='text-base font-extrabold tracking-tight sm:text-xl'>Welfare</div>
              <div className='mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/45'>Our purpose</div>
            </div>
            <div>
              <div className='text-base font-extrabold tracking-tight sm:text-xl'>Unity</div>
              <div className='mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/45'>Our strength</div>
            </div>
          </motion.div>
        </div>
      </div>

      <a href='#introduction' className='absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45 transition hover:text-white/70 sm:flex'>
        Scroll to explore
        <ArrowDownRight size={15} />
      </a>
    </section>
  )
}

export default Hero