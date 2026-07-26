import { useEffect, useState, type FocusEvent, type KeyboardEvent } from 'react'

interface CarouselImage {
  src: string
  alt: string
}

interface CarouselProps {
  images: CarouselImage[]
}

const AUTO_ADVANCE_MS = 5000

function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isFocusedWithin, setIsFocusedWithin] = useState(false)

  const goTo = (target: number) => setIndex((target + images.length) % images.length)

  useEffect(() => {
    if (images.length <= 1 || isHovering || isFocusedWithin) return

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, AUTO_ADVANCE_MS)

    return () => clearInterval(timer)
  }, [images.length, isHovering, isFocusedWithin, index])

  if (images.length === 0) return null

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

  return (
    <div
      className="w-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Photo carousel"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocusedWithin(true)}
      onBlur={handleBlur}
    >
      <div className="relative overflow-hidden rounded-lg border border-muted/20 bg-surface">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="aspect-video w-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-lg text-text transition-colors hover:bg-accent hover:text-bg"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-lg text-text transition-colors hover:bg-accent hover:text-bg"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
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
