import { useEffect, useState } from 'react'

const Counter = ({ value, duration = 1600, prefix = '', suffix = '', separator = true }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (hasStarted) return

    setHasStarted(true)

    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(value * easedProgress)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animate)
  }, [duration, hasStarted, value])

  const formattedValue = separator ? count.toLocaleString('en-US') : count

  return (
    <>
      {prefix}
      {formattedValue}
      {suffix}
    </>
  )
}

export default Counter