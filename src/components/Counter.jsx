import { useEffect, useState } from 'react'

const Counter = ({ value, duration = 1600, prefix = '', suffix = '', separator = true }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = performance.now()
    let animationFrame

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(value * easedProgress)

      setCount(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [duration, value])

  const formattedValue = separator ? count.toLocaleString('en-US') : count

  return (
    <>
      {prefix}
      {formattedValue}
      {suffix && <span className='ml-2 text-[0.65em] font-bold opacity-60'>{suffix}</span>}
    </>
  )
}

export default Counter