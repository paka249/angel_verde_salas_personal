import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState, type FocusEvent, type KeyboardEvent, type ReactNode } from 'react'

export interface CarouselSlide {
  id: string
  media: ReactNode
  caption?: ReactNode
}

interface CarouselProps {
  slides: CarouselSlide[]
  ariaLabel?: string
  autoAdvance?: boolean
}

const AUTO_ADVANCE_MS = 5000

const slideVariants = {
  enter: (direction: number) => ({ x: direction * 32, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction * -32, opacity: 0 }),
}

function Carousel({ slides, ariaLabel = 'Carousel', autoAdvance = true }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isHovering, setIsHovering] = useState(false)
  const [isFocusedWithin, setIsFocusedWithin] = useState(false)

  const goTo = (target: number) => {
    setDirection(target > index ? 1 : -1)
    setIndex((target + slides.length) % slides.length)
  }

  useEffect(() => {
    if (!autoAdvance || slides.length <= 1 || isHovering || isFocusedWithin) return

    const timer = setInterval(() => {
      setDirection(1)
      setIndex((current) => (current + 1) % slides.length)
    }, AUTO_ADVANCE_MS)

    return () => clearInterval(timer)
  }, [autoAdvance, slides.length, isHovering, isFocusedWithin, index])

  if (slides.length === 0) return null

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(index - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + 1)
    }
  }

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setIsFocusedWithin(false)
    }
  }

  const current = slides[index]

  return (
    <div
      className="w-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocusedWithin(true)}
      onBlur={handleBlur}
    >
      <div className="overflow-hidden rounded-lg border border-muted/20 bg-surface">
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {current.media}
            </motion.div>
          </AnimatePresence>

          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-lg text-text transition-colors hover:bg-accent hover:text-bg"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-lg text-text transition-colors hover:bg-accent hover:text-bg"
                aria-label="Next slide"
              >
                ›
              </button>
            </>
          )}
        </div>

        {current.caption && <div className="p-6">{current.caption}</div>}
      </div>

      {slides.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? 'bg-accent' : 'bg-muted/40 hover:bg-muted'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
