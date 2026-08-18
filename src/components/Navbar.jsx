import { useEffect, useRef, useState } from 'react'
import { ChevronDown, HeartHandshake, Menu, X } from 'lucide-react'
import { navLinks } from '../data/data'

const goHome = (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  window.history.replaceState(null, '', import.meta.env.BASE_URL)
}

const Logo = () => {
  return (
    <a href={import.meta.env.BASE_URL} onClick={goHome} className='flex min-w-0 shrink-0 items-center gap-3' aria-label='Maira Kalan Welfare Society - Home'>
      <div className='grid size-11 shrink-0 place-items-center rounded-2xl bg-[#b7e36b] text-[#071b18] shadow-[0_10px_30px_rgba(183,227,107,.2)]'>
        <HeartHandshake size={23} strokeWidth={2.4} />
      </div>
      <div className='min-w-0 leading-none'>
        <div className='truncate text-[15px] font-extrabold tracking-tight sm:text-base'>Maira Kalan</div>
        <div className='mt-1 truncate text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-[10px] sm:tracking-[0.22em]'>
          Welfare Society ® Namli Maira
        </div>
      </div>
    </a>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [teamOpen, setTeamOpen] = useState(false)
  const teamMenuRef = useRef(null)

  const closeMenu = () => {
    setOpen(false)
    setTeamOpen(false)
  }

  const handleTeamKeyDown = e => {
    const items = teamMenuRef.current?.querySelectorAll('a')

    if (!items?.length) return

    const currentIndex = [...items].indexOf(document.activeElement)

    if (e.key === 'ArrowDown') {
      e.preventDefault()

      if (!teamOpen) {
        setTeamOpen(true)
        requestAnimationFrame(() => items[0]?.focus())
        return
      }

      items[(currentIndex + 1) % items.length]?.focus()
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()

      if (!teamOpen) {
        setTeamOpen(true)
        requestAnimationFrame(() => items[items.length - 1]?.focus())
        return
      }

      items[(currentIndex - 1 + items.length) % items.length]?.focus()
    }

    if (e.key === 'Escape') {
      e.preventDefault()
      setTeamOpen(false)
      document.activeElement?.blur()
    }
  }

  useEffect(() => {
    const sections = [
      'home',
      ...navLinks.filter(item => item.href.startsWith('#')).map(item => item.href.slice(1)),
      'general-body',
      'founder-members',
      'former-members',
      'support'
    ]

    const observer = new IntersectionObserver(
      entries => {
        const visibleSection = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
      }
    )

    sections.forEach(id => {
      const section = document.getElementById(id)

      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
        setTeamOpen(false)
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
              {navLinks.map(item => (
                item.children ? (
                  <div key={item.label} onMouseEnter={() => setTeamOpen(true)} onMouseLeave={() => setTeamOpen(false)} onBlur={e => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setTeamOpen(false)
                    }
                  }} onKeyDown={handleTeamKeyDown} className='relative'>
                    <button type='button' onClick={() => setTeamOpen(current => !current)} onFocus={() => setTeamOpen(true)} aria-expanded={teamOpen} aria-haspopup='menu' className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium transition ${['team', 'general-body', 'founder-members', 'former-members'].includes(activeSection) ? 'text-[#b7e36b]' : 'text-white/65 hover:text-white'}`}>
                      Team
                      <ChevronDown size={15} className={`transition-transform ${teamOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {teamOpen && (
                      <div className='absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3'>
                        <div ref={teamMenuRef} role='menu' className='overflow-hidden rounded-2xl border border-white/10 bg-[#071b18]/95 p-2 shadow-2xl backdrop-blur-xl space-y-1.5'>
                          {item.children.map(child => (
                            <a key={child.label} href={child.href} onClick={() => setTeamOpen(false)} role='menuitem' className={`block rounded-xl px-3 py-2.5 text-sm transition ${activeSection === child.href.replace('#', '') ? 'bg-white/10 text-[#b7e36b]' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a key={item.label} href={item.href} onClick={item.label === 'Home' ? goHome : undefined} className={`whitespace-nowrap text-sm font-medium transition ${activeSection === item.href.replace('#', '') ? 'text-[#b7e36b]' : 'text-white/65 hover:text-white'}`}>
                    {item.label}
                  </a>
                )
              ))}

              <a href='#support' className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition ${activeSection === 'support' ? 'bg-white text-[#071b18]' : 'bg-[#b7e36b] text-[#071b18] hover:-translate-y-0.5 hover:bg-[#c4ed82]'}`}>
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
                {navLinks.map(item => (
                  item.children ? (
                    <div key={item.label}>
                      <button type='button' onClick={() => setTeamOpen(current => !current)} aria-expanded={teamOpen} aria-haspopup='menu' className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${['team', 'general-body', 'founder-members', 'former-members'].includes(activeSection) ? 'bg-white/10 text-[#b7e36b]' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}>
                        <span>Team</span>
                        <ChevronDown size={17} className={`transition-transform ${teamOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {teamOpen && (
                        <div className='ml-3 mt-1 grid gap-1 border-l border-white/10 pl-2'>
                          {item.children.map(child => (
                            <a key={child.label} href={child.href} onClick={closeMenu} className={`rounded-xl px-3 py-2.5 text-sm transition ${activeSection === child.href.replace('#', '') ? 'text-[#b7e36b]' : 'text-white/60 hover:bg-white/10 hover:text-white'}`}>
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a key={item.label} href={item.href}
                      onClick={e => {
                        if (item.label === 'Home') {
                          goHome(e)
                        }
                        closeMenu()
                      }}
                      className={`rounded-xl px-3 py-3 text-sm font-medium transition ${activeSection === item.href.replace('#', '') ? 'bg-white/10 text-[#b7e36b]' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}>
                      {item.label}
                    </a>
                  )
                ))}

                <a href='#support' onClick={closeMenu} className={`mt-1 rounded-xl px-3 py-3 text-center text-sm font-bold transition ${activeSection === 'support' ? 'bg-white text-[#071b18]' : 'bg-[#b7e36b] text-[#071b18] hover:bg-[#c4ed82]'}`}>
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