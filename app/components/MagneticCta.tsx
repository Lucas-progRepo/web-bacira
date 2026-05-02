'use client'
import { m } from 'motion/react'
import type { ReactNode } from 'react'

interface MagneticCtaProps {
  href: string
  children: ReactNode
  className?: string
  ariaLabel?: string
}

export function MagneticCta({ href, children, className, ariaLabel }: MagneticCtaProps) {
  return (
    <m.a
      href={href}
      className={className}
      aria-label={ariaLabel}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      {children}
    </m.a>
  )
}
