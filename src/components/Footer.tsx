'use client'

import { useState, useEffect, useRef } from 'react'

export default function Footer() {
  const [views, setViews] = useState<number | null>(null)
  const didIncrement = useRef(false)

  useEffect(() => {
    if (didIncrement.current) return
    didIncrement.current = true

    fetch('/api/views', { method: 'POST' })
      .then(res => res.json())
      .then(data => setViews(typeof data.views === 'number' ? data.views : null))
      .catch(() => setViews(null))
  }, [])

  return (
    <footer className="py-6 px-4" style={{ background: 'var(--background)' }}>
      <div
        className="container mx-auto max-w-4xl flex items-center justify-between"
        style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}
      >
        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
          © 2026 Srini Vankadari
        </span>

        <span className="text-sm flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
          👁
          {typeof views === 'number'
            ? <>{views.toLocaleString()} views</>
            : <span style={{ opacity: 0.4 }}>— views</span>
          }
        </span>
      </div>
    </footer>
  )
}
