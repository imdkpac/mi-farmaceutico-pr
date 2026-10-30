import type { Block, SlideData } from '@/types/slide'

function headlineClass(s: SlideData): string {
  const len = s.headlineA.length + s.headlineB.length
  if (len <= 18) return 'h-xl'
  if (len <= 36) return 'h-lg'
  if (len <= 56) return 'h-md'
  return 'h-sm'
}

/** *texto* → resaltado rojo dentro de la alerta */
function renderAlertLine(line: string, key: number) {
  const parts = line.split('*')
  return (
    <p key={key}>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <span className="hl" key={i}>
            {p}
          </span>
        ) : (
          p
        ),
      )}
    </p>
  )
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'lead':
      return block.text ? <p className="stc-lead">{block.text}</p> : null

    case 'stats':
      return (
        <div className="stc-stats">
          {(block.items ?? []).map((it, i) => (
            <div className="stc-stat" key={i}>
              <div className={`v${(it.value ?? '').length > 10 ? ' sm' : ''}`}>{it.value}</div>
              <div className="l">{it.label}</div>
            </div>
          ))}
        </div>
      )

    case 'cards': {
      const items = block.items ?? []
      return (
        <div className={`stc-cards${block.dense || items.length > 4 ? ' dense' : ''}`}>
          {items.map((it, i) => (
            <div className="stc-card" key={i}>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      )
    }

    case 'checklist':
      return (
        <ul className="stc-check">
          {(block.items ?? []).map((it, i) => (
            <li key={i}>{it.text}</li>
          ))}
        </ul>
      )

    case 'flags':
      return (
        <ul className="stc-flags">
          {(block.items ?? []).map((it, i) => (
            <li key={i}>{it.text}</li>
          ))}
        </ul>
      )

    case 'feature':
      return (
        <div className="stc-feature">
          {block.title && <h3>{block.title}</h3>}
          {block.text && <p>{block.text}</p>}
          {block.items && block.items.length > 0 && (
            <div className="steps">
              {block.items.map((it, i) => (
                <span key={i}>{it.text}</span>
              ))}
            </div>
          )}
          {block.quote && <blockquote>{block.quote}</blockquote>}
          {block.note && <div className="fnote">{block.note}</div>}
        </div>
      )

    case 'recap':
      return (
        <div className="stc-recap">
          {block.title && <h3>{block.title}</h3>}
          <ul>
            {(block.items ?? []).map((it, i) => (
              <li key={i}>{it.text}</li>
            ))}
          </ul>
        </div>
      )

    case 'bars':
      return (
        <div className="stc-bars">
          {(block.items ?? []).map((it, i) => {
            const pct = Math.max(0, Math.min(100, Number(it.value) || 0))
            return (
              <div className="stc-bar-row" key={i}>
                <div className="stc-bar-label">
                  <span>{it.label}</span>
                </div>
                <div className="stc-bar-track">
                  <div className="stc-bar-fill" style={{ width: `${pct}%` }}>
                    {it.text ?? `${pct}%`}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )
  }
}

export function SlideCanvas({ slide, index, total }: { slide: SlideData; index: number; total: number }) {
  return (
    <div className="stc-canvas">
      <div className="stc-bg-grid" />
      <div className="stc-bg-glow" />
      <div className="stc-bracket tl" />
      <div className="stc-bracket br" />

      <div className="stc-header">
        <span className="stc-brand">Mi Farmacéutico en PR</span>
        <div className="stc-badge">{slide.badge}</div>
      </div>

      <div className="stc-content">
        <div className="stc-eyebrow">{slide.eyebrow}</div>
        <h1 className={`stc-headline ${headlineClass(slide)}`}>
          {slide.headlineA}
          {slide.headlineB && <span className="accent">{slide.headlineB}</span>}
        </h1>

        {slide.blocks.map((b) => (
          <BlockView block={b} key={b.id} />
        ))}

        {slide.alertText && (
          <div className="stc-alert">
            {slide.alertTitle && <h4>{slide.alertTitle}</h4>}
            {slide.alertText.split('\n').map((line, i) => renderAlertLine(line, i))}
          </div>
        )}

        {slide.note && <div className="stc-note">{slide.note}</div>}
      </div>

      <div className="stc-footer">
        <div className="stc-contact">
          <span>@MiFarmaceuticoenPR</span>
          <span>787-667-6560</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {total <= 24 && (
            <div className="stc-dots">
              {Array.from({ length: total }, (_, i) => (
                <i key={i} className={i === index ? 'on' : ''} />
              ))}
            </div>
          )}
          <div className="stc-num">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Diapositiva escalada a un ancho dado (miniaturas, exportar). */
export function ScaledSlide({
  slide,
  index,
  total,
  width,
}: {
  slide: SlideData
  index: number
  total: number
  width: number
}) {
  const scale = width / 1080
  return (
    <div style={{ width, height: 1350 * scale, overflow: 'hidden', position: 'relative' }}>
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: 1080,
          height: 1350,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <SlideCanvas slide={slide} index={index} total={total} />
      </div>
    </div>
  )
}
