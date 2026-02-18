'use client'

import { useEffect, useRef } from 'react'

export default function AdvancedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current!
    const mediaContainer = mediaRef.current!

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const speed = 0.18

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

    const handleEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      const type = target.dataset.cursor
      const src = target.dataset.src

      cursor.style.width = '150px'
      cursor.style.height = '150px'

      mediaContainer.innerHTML = ''

      if (type === 'video' && src) {
        const video = document.createElement('video')
        video.src = src
        video.autoplay = true
        video.loop = true
        video.muted = true
        video.playsInline = true
        video.style.width = '100%'
        video.style.height = '100%'
        video.style.objectFit = 'cover'
        mediaContainer.appendChild(video)
      }

      if (type === 'image' && src) {
        const img = document.createElement('img')
        img.src = src
        img.style.width = '100%'
        img.style.height = '100%'
        img.style.objectFit = 'cover'
        mediaContainer.appendChild(img)
      }
    }

    const handleLeave = () => {
      cursor.style.width = '16px'
      cursor.style.height = '16px'
      mediaContainer.innerHTML = ''
    }

    const elements = document.querySelectorAll('[data-cursor]')

    elements.forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    window.addEventListener('mousemove', move)
    animate()

    return () => {
      window.removeEventListener('mousemove', move)
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '16px',
        height: '16px',
        background: 'black',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate3d(0,0,0)',
        willChange: 'transform',
        overflow: 'hidden',
      }}
    >
      <div ref={mediaRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
