'use client'
import { m } from 'motion/react'
import type { ComponentProps } from 'react'

export function MagneticCta({ children, className, href, ...rest }: ComponentProps<'a'>) {
  return (
    <m.a
      href={href}
      className={className}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      {...rest}
    >
      {children}
    </m.a>
  )
}
