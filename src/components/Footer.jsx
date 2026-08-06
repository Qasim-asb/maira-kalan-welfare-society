import { ArrowUp, HeartHandshake } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth', })
  }

  return (
    <footer className='bg-[#061512] px-5 pb-7 pt-14 text-white sm:px-8 sm:pt-16 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_0.8fr] md:items-start'>
          <div>
            <div className='flex items-center gap-3'>
              <div className='grid size-11 place-items-center rounded-2xl bg-[#b7e36b] text-[#071b18]'>
                <HeartHandshake size={21} />
              </div>
              <div>
                <p className='text-sm font-extrabold tracking-tight'>
                  Maira Kalan Welfare Society <span className='text-xs'>®</span>
                </p>
                <p className='text-xs font-medium text-white/35'>Namli Maira</p>
              </div>
            </div>
            <p className='mt-6 max-w-xl text-sm leading-6 text-white/40'>
              Serving the community through welfare, education support,
              humanitarian assistance, and collective effort.
            </p>
          </div>

          <div className='md:justify-self-end'>
            <p className='text-xs font-bold uppercase tracking-[0.2em] text-[#b7e36b]'>Explore</p>
            <nav className='mt-4 grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 md:grid-cols-2'>
              <a href='#home' className='text-sm text-white/45 transition hover:text-white'>Home</a>
              <a href='#introduction' className='text-sm text-white/45 transition hover:text-white'>Introduction</a>
              <a href='#programs' className='text-sm text-white/45 transition hover:text-white'>Programs</a>
              <a href='#funds' className='text-sm text-white/45 transition hover:text-white'>Funds</a>
              <a href='#team' className='text-sm text-white/45 transition hover:text-white'>Team</a>
              <a href='#projects' className='text-sm text-white/45 transition hover:text-white'>Projects</a>
              <a href='#gallery' className='text-sm text-white/45 transition hover:text-white'>Gallery</a>
              <a href='#support' className='text-sm text-white/45 transition hover:text-white'>Support</a>
              <a href='#contact' className='text-sm text-white/45 transition hover:text-white'>Contact</a>
            </nav>
          </div>
        </div>

        <div className='flex flex-col gap-5 pt-7 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <p className='text-xs leading-5 text-white/35'>
              © {new Date().getFullYear()} Maira Kalan Welfare Society ® namli maira. All rights reserved.
            </p>
            <p className='mt-2 text-xs text-white/25'>
              Built with <span className='text-[#b7e36b]'>♥</span> for the community.
            </p>
          </div>

          <button type='button' onClick={scrollToTop} aria-label='Back to top' className='flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-bold text-white/45 transition hover:border-[#b7e36b]/40 hover:text-[#b7e36b]'>
            Back to top
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer