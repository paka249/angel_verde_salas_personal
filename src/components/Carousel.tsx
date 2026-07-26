import { useState } from 'react'

interface CarouselImage {
  src: string
  alt: string
}

interface CarouselProps {
  images: CarouselImage[]
}

function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0)

  if (images.length === 0) return null

  const goTo = (target: number) => setIndex((target + images.length) % images.length)

  return (
    <div className="w-full">
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
