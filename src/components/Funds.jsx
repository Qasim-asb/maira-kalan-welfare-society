import { ArrowUpRight, CircleDollarSign, WalletCards } from 'lucide-react'
import { expenditureDetails, fundDetails } from '../data/data'
import Counter from './Counter'
import Reveal from './Reveal'

const Funds = () => {
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
              A summary of the society's recorded funds and expenditures during
              its initial months of welfare activities.
            </p>
          </Reveal>
        </div>

        <div className='mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16'>
          <Reveal>
            <div className='h-full rounded-[2rem] bg-[#071b18] p-7 text-white sm:p-8'>
              <CircleDollarSign size={25} className='text-[#b7e36b]' />
              <p className='mt-8 text-xs font-bold uppercase tracking-[0.18em] text-white/35'>Total Funds</p>
              <p className='mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                <Counter value={382850} prefix='Rs. ' />
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className='h-full rounded-[2rem] border border-[#071b18]/10 bg-white p-7 sm:p-8'>
              <WalletCards size={25} className='text-emerald-700' />
              <p className='mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#071b18]/35'>Total Expenditures</p>
              <p className='mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                <Counter value={273850} prefix='Rs. ' />
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className='h-full rounded-[2rem] border border-[#071b18]/10 bg-[#dfead8] p-7 sm:p-8'>
              <p className='text-xs font-bold uppercase tracking-[0.18em] text-[#071b18]/45'>Closing Balance</p>
              <p className='mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                <Counter value={109000} prefix='Rs. ' />
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
                  <h3 className='mt-2 text-2xl font-extrabold tracking-tight'>Monthly record</h3>
                </div>
                <div className='grid size-10 place-items-center rounded-xl bg-[#071b18] text-[#b7e36b]'>
                  <CircleDollarSign size={19} />
                </div>
              </div>
              <div className='mt-7 divide-y divide-[#071b18]/10'>
                {fundDetails.map((item, i) => (
                  <div key={i} className='flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0'>
                    <span className='text-sm font-semibold text-[#071b18]/55'>{item.month}</span>
                    <span className='text-sm font-bold'>{item.amount}</span>
                  </div>
                ))}
              </div>
              <div className='mt-6 flex items-center justify-between border-t border-[#071b18]/10 pt-5'>
                <span className='text-sm font-bold'>Total Funds</span>
                <span className='text-lg font-extrabold'>
                  <Counter value={382850} prefix='Rs. ' />
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
              <div className='mt-7 divide-y divide-white/10'>
                {expenditureDetails.map((item, i) => (
                  <div key={i} className='flex items-center justify-between gap-5 py-4 first:pt-0 last:pb-0'>
                    <span className='max-w-[65%] text-sm leading-6 text-white/55'>{item.title}</span>
                    <span className='shrink-0 text-sm font-bold'>{item.amount}</span>
                  </div>
                ))}
              </div>
              <div className='mt-6 flex items-center justify-between border-t border-white/10 pt-5'>
                <span className='text-sm font-bold text-white/60'>Total Expenditures</span>
                <span className='text-lg font-extrabold'>
                  <Counter value={273850} prefix='Rs. ' />
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className='mt-8 border-l-2 border-emerald-700/30 pl-5'>
            <p className='max-w-3xl text-sm leading-7 text-[#071b18]/50 sm:text-base'>
              These figures reflect the financial details provided for the
              society's initial recorded activities. The Funds section is
              currently included for transparency and may be revised as the
              website develops.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Funds