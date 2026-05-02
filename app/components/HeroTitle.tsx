'use client'
import { m } from 'motion/react'
import type { ReactNode } from 'react'

interface Word {
  text: string
  italic?: boolean
  accent?: boolean
}

export function HeroTitle({ words, className, suffix }: { words: Word[]; className?: string; suffix?: ReactNode }) {
  const plain = words.map(w => w.text).join(' ')
  return (
    <h1 className={className} aria-label={plain}>
      {words.map((w, i) => (
        <m.span
          key={i}
          aria-hidden
          initial={{ opacity: 0, y: '0.35em' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 + i * 0.06, ease: [0.23, 1, 0.32, 1] }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          className={w.italic ? 'italic font-display' : ''}
        >
          <span className={w.accent ? 'text-accent' : ''}>{w.text}</span>
        </m.span>
      ))}
      {suffix}
    </h1>
  )
}
