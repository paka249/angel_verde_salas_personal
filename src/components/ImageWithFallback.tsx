import { motion, type HTMLMotionProps } from 'framer-motion'
import { useState } from 'react'

interface ImageWithFallbackProps extends HTMLMotionProps<'div'> {
  src: string
  alt: string
  wrapperClassName?: string
}

function ImageWithFallback({ src, alt, wrapperClassName, ...motionProps }: ImageWithFallbackProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  return (
    <motion.div
      className={`relative overflow-hidden bg-surface ${wrapperClassName ?? ''}`}
      {...motionProps}
    >
      {status === 'loading' && <div className="absolute inset-0 animate-pulse bg-muted/15" />}

      {status === 'error' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 16l5-5 4 4 5-6 4 4" />
            <line x1="4" y1="4" x2="20" y2="20" />
          </svg>
          <span className="font-caption text-xs">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </motion.div>
  )
}

export default ImageWithFallback
