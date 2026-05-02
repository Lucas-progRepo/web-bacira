'use client'
import { m } from 'motion/react'

export function HeroTitle({ text, className, italicWord }: { text: string; className?: string; italicWord?: string }) {
  const words = text.split(' ')
  return (
    <h1 className={className} aria-label={text}>
      {words.map((w, i) => {
        const isItalic = italicWord && w.toLowerCase().includes(italicWord.toLowerCase())
        return (
          <m.span
            key={i}
            aria-hidden
            initial={{ opacity: 0, y: '0.4em', filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: [0.23, 1, 0.32, 1] }}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
            className={isItalic ? 'italic text-accent' : ''}
          >
            {w}
          </m.span>
        )
      })}
    </h1>
  )
}
