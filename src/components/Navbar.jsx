import { useEffect, useState } from 'react'
import { HeartHandshake, Menu, X } from 'lucide-react'
import { navLinks } from '../data/data'

const Logo = () => {
  return (
    <a href='#home' className='flex min-w-0 shrink-0 items-center gap-3' aria-label='Maira Kalan Welfare Society - Home'>
      <div className='grid size-11 shrink-0 place-items-center rounded-2xl bg-[#b7e36b] text-[#071b18] shadow-[0_10px_30px_rgba(183,227,107,.2)]'>
        <HeartHandshake size={23} strokeWidth={2.4} />
      </div>
      <div className='min-w-0 leading-none'>
        <div className='truncate text-[15px] font-extrabold tracking-tight sm:text-base'>
          Maira Kalan
        </div>
        <div className='mt-1 truncate text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-[10px] sm:tracking-[0.22em]'>
          Welfare Society ® Namli Maira
        </div>
      </div>
    </a>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className='fixed inset-x-0 top-0 z-50'>
      <div className='mx-auto mt-3 w-full max-w-7xl px-3 sm:mt-4 sm:px-6'>
        <nav className='rounded-[22px] border border-white/10 bg-[#071b18]/90 px-3 py-3 text-white shadow-2xl backdrop-blur-xl sm:rounded-[24px] sm:px-5'>
          <div className='flex min-h-11 items-center justify-between gap-3'>
            <Logo />

            <div className='hidden items-center gap-5 lg:flex xl:gap-7'>
              {navLinks.map((item, i) => (
                <a key={i} href={item.href} className='whitespace-nowrap text-sm font-medium text-white/65 transition hover:text-white'>
                  {item.label}
                </a>
              ))}

              <a href='#support' className='whitespace-nowrap rounded-full bg-[#b7e36b] px-5 py-2.5 text-sm font-bold text-[#071b18] transition hover:-translate-y-0.5 hover:bg-[#c4ed82]'>
                Support
              </a>
            </div>

            <button type='button' onClick={() => setOpen((current) => !current)} className='grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 transition hover:bg-white/15 lg:hidden' aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}>
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {open && (
            <div className='max-h-[calc(100dvh-90px)] overflow-y-auto border-t border-white/10 pb-2 pt-3 lg:hidden'>
              <div className='grid gap-1'>
                {navLinks.map((item, i) => (
                  <a key={i} href={item.href} onClick={closeMenu} className='rounded-xl px-3 py-3 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white'>
                    {item.label}
                  </a>
                ))}

                <a href='#support' onClick={closeMenu} className='mt-1 rounded-xl bg-[#b7e36b] px-3 py-3 text-center text-sm font-bold text-[#071b18] transition hover:bg-[#c4ed82]'>
                  Support
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar