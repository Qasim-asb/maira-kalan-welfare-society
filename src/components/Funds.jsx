import { useCallback, useState } from 'react'
import { ArrowUpRight, Banknote, WalletCards } from 'lucide-react'
import { expenditureImages, fundDetails } from '../data/data'
import Counter from './Counter'
import Reveal from './Reveal'
import ImageLightbox from './ImageLightbox'

const Funds = () => {
  const [selectedExpenditure, setSelectedExpenditure] = useState(null)

  const showPreviousExpenditure = useCallback(() => {
    setSelectedExpenditure(current => current === 0 ? expenditureImages.length - 1 : current - 1)
  }, [])

  const showNextExpenditure = useCallback(() => {
    setSelectedExpenditure(current => current === expenditureImages.length - 1 ? 0 : current + 1)
  }, [])

  return (
    <section id='funds' className='bg-[#f4f7f5] px-5 py-20 text-[#071b18] sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16'>
          <Reveal>
            <p className='text-sm font-bold uppercase tracking-[0.25em] text-emerald-700'>03 · Financial Transparency</p>
            <h2 className='mt-3 max-w-lg text-4xl font-extrabold leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-6xl'>
              Every contribution
              <span className='text-emerald-700'> has a purpose.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className='max-w-2xl text-base leading-7 text-[#071b18]/55 sm:text-lg sm:leading-8'>
              A summary of the society's recorded funds and expenditures from
              September 2022 to July 2026.
            </p>
          </Reveal>
        </div>

        <div className='mt-12 grid gap-4 lg:grid-cols-3 lg:mt-16'>
          <Reveal>
            <div className='h-full rounded-[2rem] bg-[#071b18] p-7 text-white sm:p-8'>
              <Banknote size={25} className='text-[#b7e36b]' />
              <p className='mt-8 text-xs font-bold uppercase tracking-[0.18em] text-white/35'>Total Funds</p>
              <p className='mt-2 text-xs font-semibold text-[#b7e36b]/70'>September 2022 — July 2026</p>
              <p className='mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                <Counter value={15932419} suffix='PKR' />
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className='h-full rounded-[2rem] border border-[#071b18]/10 bg-white p-7 sm:p-8'>
              <WalletCards size={25} className='text-emerald-700' />
              <p className='mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#071b18]/35'>Total Expenditures</p>
              <p className='mt-2 text-xs font-semibold text-[#1b765d]/70'>September 2022 — July 2026</p>
              <p className='mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                <Counter value={15300795} suffix='PKR' />
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className='h-full rounded-[2rem] border border-[#071b18]/10 bg-[#dfead8] p-7 sm:p-8'>
              <p className='text-xs font-bold uppercase tracking-[0.18em] text-[#071b18]/45'>Closing Balance</p>
              <p className='mt-2 text-xs font-semibold text-[#1b765d]/70'>September 2022 — July 2026</p>
              <p className='mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                <Counter value={631624} suffix='PKR' />
              </p>
              <p className='mt-3 text-sm leading-6 text-[#071b18]/50'>Remaining balance after the recorded expenditures.</p>
            </div>
          </Reveal>
        </div>

        <div className='mt-5 grid gap-5 lg:grid-cols-2'>
          <Reveal>
            <div className='rounded-[2rem] bg-white p-6 sm:p-8'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <p className='text-xs font-bold uppercase tracking-[0.18em] text-emerald-700'>Funds Collected</p>
                  <h3 className='mt-2 text-2xl font-extrabold tracking-tight'>Yearly record</h3>
                </div>
                <div className='grid size-10 place-items-center rounded-xl bg-[#071b18] text-[#b7e36b]'>
                  <Banknote size={19} />
                </div>
              </div>
              <div className='mt-7 space-y-3'>
                {fundDetails.map(item => (
                  <div key={item.year} className='flex flex-col gap-3 rounded-2xl bg-[#f4f7f5] px-4 py-3.5 sm:flex-row sm:items-center sm:gap-4'>
                    <div className='flex min-w-0 items-center gap-3'>
                      <div className='grid size-11 shrink-0 place-items-center rounded-xl bg-[#071b18] text-sm font-extrabold text-[#b7e36b]'>{item.year}</div>
                      <div className='min-w-0'>
                        <p className='text-sm font-bold'>{item.year} Financial Record</p>
                        <p className='mt-0.5 text-xs text-[#071b18]/40'>Funds collected during {item.year}</p>
                      </div>
                    </div>
                    <span className='border-t border-[#071b18]/10 pt-3 text-sm font-extrabold sm:ml-auto sm:border-0 sm:pt-0'>{item.amount}</span>
                  </div>
                ))}
              </div>
              <div className='mt-6 flex items-center justify-between border-t border-[#071b18]/10 pt-5'>
                <span className='text-sm font-bold'>Total Funds</span>
                <span className='text-lg font-extrabold'>
                  <Counter value={15932419} prefix='Rs. ' />
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className='rounded-[2rem] bg-[#071b18] p-6 text-white sm:p-8'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <p className='text-xs font-bold uppercase tracking-[0.18em] text-[#b7e36b]'>Expenditures</p>
                  <h3 className='mt-2 text-2xl font-extrabold tracking-tight'>Where funds went</h3>
                </div>
                <div className='grid size-10 place-items-center rounded-xl bg-white/10 text-[#b7e36b]'>
                  <ArrowUpRight size={19} />
                </div>
              </div>
              <div className='mt-7 grid grid-cols-3 gap-3 sm:grid-cols-4'>
                {expenditureImages.map((image, i) => (
                  <button key={i} type='button' onClick={() => setSelectedExpenditure(i)} aria-label={`View expenditure photo ${i + 1}`} className='group relative overflow-hidden rounded-2xl'>
                    <img src={image} alt={`Expenditure activity ${i + 1}`} loading={i < 3 ? 'eager' : 'lazy'} className='h-24 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-28' />
                    <div className='absolute inset-0 bg-[#071b18]/0 transition group-hover:bg-[#071b18]/20' />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className='mt-8 border-l-2 border-emerald-700/30 pl-5'>
            <p className='max-w-3xl text-sm leading-7 text-[#071b18]/50 sm:text-base'>
              These figures represent the society's recorded financial activity from
              2022 through 2026. The records are presented for transparency and may
              be updated as new financial information becomes available.
            </p>
          </div>
        </Reveal>
      </div>

      {selectedExpenditure !== null && (
        <ImageLightbox
          item={{
            image: expenditureImages[selectedExpenditure],
            title: `Expenditure Photo ${selectedExpenditure + 1}`,
            category: 'Expenditure',
            alt: `Expenditure activity ${selectedExpenditure + 1}`
          }}
          onClose={() => setSelectedExpenditure(null)}
          onPrevious={showPreviousExpenditure}
          onNext={showNextExpenditure}
          ariaLabel={`Expenditure photo ${selectedExpenditure + 1}`}
          subtitle='Expenditure'
        />
      )}
    </section>
  )
}

export default Funds