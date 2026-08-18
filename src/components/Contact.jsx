import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import Reveal from './Reveal'

const PHONE_NUMBERS = [
  { display: '0347-7174477', link: '+923477174477' },
  { display: '0303-9636125', link: '+923039636125' }
]
const EMAIL = 'mkwsociety2022@gmail.com'

const Contact = () => {
  return (
    <section id='contact' className='bg-[#f4f7f5] px-5 py-20 text-[#071b18] sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20'>
          <Reveal>
            <p className='text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700'>11 · Contact</p>
            <h2 className='mt-4 max-w-xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl'>
              Stay connected
              <span className='text-emerald-700'>
                {' '}
                with the community.
              </span>
            </h2>
            <p className='mt-6 max-w-lg text-base leading-7 text-[#071b18]/55 sm:text-lg sm:leading-8'>
              For information about the society, its activities, membership,
              or community welfare initiatives, you can reach out using the
              available contact details.
            </p>
          </Reveal>
          <div className='grid gap-3 sm:grid-cols-2'>
            <Reveal delay={0.1}>
              <div className='group h-full rounded-[2rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-7'>
                <div className='flex items-start justify-between'>
                  <div className='grid size-11 place-items-center rounded-2xl bg-[#071b18] text-[#b7e36b]'>
                    <Phone size={20} aria-hidden='true' />
                  </div>
                  <ArrowUpRight size={18} aria-hidden='true' className='text-[#071b18]/25 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-700' />
                </div>
                <p className='mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#071b18]/35'>Phone</p>
                <div className='mt-2 space-y-1'>
                  {PHONE_NUMBERS.map(phone => (
                    <a key={phone.link} href={`tel:${phone.link}`} aria-label={`Call ${phone.display}`} className='block text-lg font-bold transition hover:text-emerald-700'>
                      {phone.display}
                    </a>
                  ))}
                </div>
                <p className='mt-2 text-sm text-[#071b18]/45'>Tap a number to call</p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <a href={`mailto:${EMAIL}`} className='group block h-full rounded-[2rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-7'>
                <div className='flex items-start justify-between'>
                  <div className='grid size-11 place-items-center rounded-2xl bg-[#071b18] text-[#b7e36b]'>
                    <Mail size={20} aria-hidden='true' />
                  </div>
                  <ArrowUpRight size={18} aria-hidden='true' className='text-[#071b18]/25 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-700' />
                </div>
                <p className='mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#071b18]/35'>Email</p>
                <p className='mt-2 break-all text-base font-bold transition group-hover:text-emerald-700'>{EMAIL}</p>
                <p className='mt-2 text-sm text-[#071b18]/45'>Send an email</p>
              </a>
            </Reveal>
            <Reveal delay={0.22}>
              <div className='group h-full rounded-[2rem] bg-[#071b18] p-6 text-white sm:col-span-2 sm:p-7'>
                <div className='flex items-start justify-between'>
                  <div className='grid size-11 place-items-center rounded-2xl bg-[#b7e36b] text-[#071b18]'>
                    <MapPin size={20} aria-hidden='true' />
                  </div>
                </div>
                <p className='mt-8 text-xs font-bold uppercase tracking-[0.18em] text-white/35'>Community</p>
                <p className='mt-2 text-xl font-bold'>Namli Maira</p>
                <p className='mt-2 text-sm leading-6 text-white/45'>
                  Maira Kalan Welfare Society · Serving the local community
                  through collective effort.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact