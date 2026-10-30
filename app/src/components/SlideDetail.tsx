import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { SlideData } from '@/types/slide'
import { ScaledSlide } from '@/components/SlideCanvas'
import type { T } from '@/lib/i18n'

interface SlideDetailProps {
  slides: SlideData[] /* ya traducidas para vista */
  index: number
  onIndex: (i: number) => void
  onClose: () => void
  t: T
}

export function SlideDetail({ slides, index, onIndex, onClose, t }: SlideDetailProps) {
  const [width, setWidth] = useState(() => fitWidth())
  const closeRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const onResize = () => setWidth(fitWidth())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight' && index < slides.length - 1) onIndex(index + 1)
      else if (e.key === 'ArrowLeft' && index > 0) onIndex(index - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, slides.length, onIndex, onClose])

  /* Accesibilidad: enfocar el botón cerrar al abrir y devolver el foco al salir */
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    return () => prev?.focus?.()
  }, [])

  return (
    <div
      className="detail-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${slides[index].headlineA} ${slides[index].headlineB}`.trim()}
    >
      <button ref={closeRef} className="detail-close" onClick={onClose} title={`${t.close} (Esc)`} aria-label={t.close}>
        <X size={18} />
      </button>
      {index > 0 && (
        <button
          className="detail-nav prev"
          onClick={(e) => {
            e.stopPropagation()
            onIndex(index - 1)
          }}
          title={t.prev}
          aria-label={t.prev}
        >
          <ChevronLeft size={22} />
        </button>
      )}
      <div className="detail-slide" onClick={(e) => e.stopPropagation()}>
        <ScaledSlide slide={slides[index]} index={index} total={slides.length} width={width} />
      </div>
      {index < slides.length - 1 && (
        <button
          className="detail-nav next"
          onClick={(e) => {
            e.stopPropagation()
            onIndex(index + 1)
          }}
          title={t.next}
          aria-label={t.next}
        >
          <ChevronRight size={22} />
        </button>
      )}
    </div>
  )
}

function fitWidth(): number {
  return Math.round(Math.min(window.innerWidth * 0.92, window.innerHeight * 0.9 * (1080 / 1350)))
}
