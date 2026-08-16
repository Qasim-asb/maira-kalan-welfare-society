import { useState } from 'react'
import { Check, Copy, HeartHandshake, Smartphone } from 'lucide-react'
import Reveal from './Reveal'

const PAYMENT_NUMBERS = [
  { name: 'EasyPaisa', display: '0347-7174477', value: '03477174477' },
  { name: 'JazzCash', display: '0303-9636125', value: '03039636125' }
]

const Support = () => {
  const [copied, setCopied] = useState(null)

  const copyNumber = async (number, name) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(number)
      } else {
        const textArea = document.createElement('textarea')

        textArea.value = number
        textArea.style.position = 'fixed'
        textArea.style.opacity = '0'

        document.body.appendChild(textArea)

        textArea.focus()
        textArea.select()

        document.execCommand('copy')

        textArea.remove()
      }

      setCopied(name)

      setTimeout(() => {
        setCopied(null)
      }, 2000)
    } catch (error) {
      console.error(`Failed to copy ${name} number:`, error)
    }
  }

  return (
    <section id='support' className='relative overflow-hidden bg-[#071b18] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28'>

      <div className='pointer-events-none absolute -right-32 top-1/2 size-96 -translate-y-1/2 rounded-full border border-[#b7e36b]/10' />
      <div className='pointer-events-none absolute -left-40 bottom-0 size-80 rounded-full bg-[#b7e36b]/5 blur-3xl' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:gap-8'>
          <Reveal>
            <div className='rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:p-12'>
              <div className='grid size-12 place-items-center rounded-2xl bg-[#b7e36b] text-[#071b18]'>
                <HeartHandshake size={23} />
              </div>
              <p className='mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#b7e36b]'>10 · Support</p>
              <h2 className='mt-3 max-w-2xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl'>
                Help us continue
                <span className='text-[#b7e36b]'>
                  {' '}
                  serving the community.
                </span>
              </h2>
              <p className='mt-6 max-w-xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8'>
                Those who wish to support the welfare activities of Maira Kalan
                Welfare Society can contribute through the EasyPaisa account
                below.
              </p>
              <p className='mt-5 max-w-xl text-sm leading-6 text-white/30'>
                Every contribution can help support education, welfare,
                humanitarian assistance, and other community-focused
                activities.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className='flex h-full flex-col rounded-[2rem] bg-[#b7e36b] p-7 text-[#071b18] sm:p-10'>
              <div className='flex items-center justify-between gap-4'>
                <div className='grid size-11 place-items-center rounded-2xl bg-[#071b18] text-[#b7e36b]'>
                  <Smartphone size={21} />
                </div>
                <span className='rounded-full bg-[#071b18]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em]'>Contributions</span>
              </div>
              <p className='mt-10 text-xs font-extrabold uppercase tracking-[0.2em] text-[#071b18]/45'>Contribution Accounts</p>
              <div className='mt-6 space-y-4'>
                {PAYMENT_NUMBERS.map(payment => (
                  <div key={payment.name} className='rounded-2xl bg-white/30 p-4'>
                    <p className='text-xs font-extrabold uppercase tracking-[0.16em] text-[#071b18]/50'>{payment.name}</p>
                    <p className='mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl'>{payment.display}</p>
                    <button type='button' onClick={() => copyNumber(payment.value, payment.name)} className='mt-3 flex items-center gap-2 rounded-xl bg-[#071b18] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0d302b] active:scale-[0.98]'>
                      {copied === payment.name ? (
                        <>
                          <Check size={16} />
                          Number copied
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          Copy number
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className='mt-6 text-center text-xs leading-5 text-white/25'>
            Please verify the account details before making any contribution.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Support