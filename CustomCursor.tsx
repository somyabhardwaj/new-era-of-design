'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const speed = 0.15 // lower = smoother

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * speed
      currentY += (mouseY - currentY) * speed

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    animate()

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-[9999]"
      style={{
        transform: 'translate3d(0,0,0)',
      }}
    />
  )
}
