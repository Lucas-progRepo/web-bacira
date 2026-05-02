'use client'
import { m } from 'motion/react'
import { Fragment, type ReactNode } from 'react'

type Segment = string | { text: string; italic?: boolean; accent?: boolean }

export function HeroTitle({
  segments,
  className,
  ariaLabel
}: {
  segments: Segment[]
  className?: string
  ariaLabel: string
}) {
  const words: { text: string; italic?: boolean; accent?: boolean }[] = []
  segments.forEach((seg) => {
    if (typeof seg === 'string') {
      seg.split(' ').filter(Boolean).forEach((w) => words.push({ text: w }))
    } else {
      seg.text.split(' ').filter(Boolean).forEach((w) => words.push({ text: w, italic: seg.italic, accent: seg.accent }))
    }
  })

  return (
    <h1 className={className} aria-label={ariaLabel}>
      {words.map((w, i) => {
        const style: React.CSSProperties = { display: 'inline-block' }
        let cls = ''
        if (w.italic) cls += ' italic font-display'
        if (w.accent) cls += ' text-accent'
        return (
          <Fragment key={i}>
            <m.span
              aria-hidden
              className={cls}
              style={style}
              initial={{ opacity: 0, y: '0.35em', filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.23, 1, 0.32, 1] }}
            >
              {w.text}
            </m.span>
            {i < words.length - 1 && '\u00A0'}
          </Fragment>
        )
      })}
    </h1>
  )
}
