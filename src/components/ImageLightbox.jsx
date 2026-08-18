import { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'

const ImageLightbox = ({ item, onClose, onPrevious, onNext, ariaLabel = 'Image preview', subtitle }) => {
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (!item) return

    previousFocusRef.current = document.activeElement
    closeButtonRef.current?.focus()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow

      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus()
      }
    }

    // ImageLightbox mounts only when item exists, so this effect intentionally runs once per lightbox instance.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!item) return

    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onPrevious()
        return
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        onNext()
        return
      }

      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll('[data-lightbox-focusable]')

        if (!focusableElements.length) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose, onPrevious, onNext])

  if (!item) return null

  return (
    <div onClick={onClose} role='dialog' aria-modal='true' aria-label={ariaLabel} className='fixed inset-0 z-50 flex items-center justify-center bg-[#071b18]/95 p-5 backdrop-blur-sm sm:p-8'>
      <button ref={closeButtonRef} type='button' onClick={onClose} aria-label='Close photo' data-lightbox-focusable className='absolute right-5 top-5 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18]'>
        <X size={21} aria-hidden='true' />
      </button>
      <button type='button' onClick={e => {
        e.stopPropagation()
        onPrevious()
      }} aria-label='Previous image' data-lightbox-focusable className='absolute left-4 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18] sm:left-8'>
        <ArrowLeft size={20} aria-hidden='true' />
      </button>

      <div onClick={e => e.stopPropagation()} className='relative flex max-h-[90vh] max-w-6xl flex-col items-center'>
        <img src={item.image} alt={item.title || item.name} className='max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl' />
        <div className='mt-4 text-center'>
          <p className='text-[10px] font-bold uppercase tracking-[0.18em] text-[#b7e36b]'>{subtitle}</p>
          <h3 className='mt-1 text-lg font-bold text-white sm:text-xl'>{item.title || item.name}</h3>
        </div>
      </div>
      <button type='button' onClick={e => {
        e.stopPropagation()
        onNext()
      }} aria-label='Next image' data-lightbox-focusable className='absolute right-4 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#b7e36b] hover:text-[#071b18] sm:right-8'>
        <ArrowRight size={20} aria-hidden='true' />
      </button>
    </div>
  )
}

export default ImageLightbox
