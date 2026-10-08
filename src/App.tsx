import { useState, type CSSProperties } from 'react'
import './App.css'

const roses = [
  { name: 'Rosa ecuatoriana', note: 'La reina del jardín', tone: 'wine', mark: '01' },
  { name: 'Rosa de jardín', note: 'Romántica y silvestre', tone: 'pink', mark: '02' },
  { name: 'Rosa champán', note: 'Un brindis por ti', tone: 'cream', mark: '03' },
  { name: 'Rosa amarilla', note: 'Alegría que florece', tone: 'gold', mark: '04' },
]

function Flower({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <g className="flower-petals">
        <ellipse cx="50" cy="27" rx="12" ry="23" fill="currentColor" />
        <ellipse cx="50" cy="27" rx="12" ry="23" fill="currentColor" transform="rotate(45 50 50)" />
        <ellipse cx="50" cy="27" rx="12" ry="23" fill="currentColor" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="27" rx="12" ry="23" fill="currentColor" transform="rotate(135 50 50)" />
      </g>
      <circle cx="50" cy="50" r="10" fill="#b88742" />
      <circle cx="50" cy="50" r="4" fill="#f8df9c" />
    </svg>
  )
}

function Rose({ tone }: { tone: string }) {
  return (
    <svg className={`rose-drawing rose-${tone}`} viewBox="0 0 120 150" fill="none" aria-hidden="true">
      <path d="M58 66c0 27-4 50-2 75" stroke="currentColor" strokeWidth="2" />
      <path d="M56 111c-17-15-25-8-31-5 12 14 22 16 31 5ZM57 126c15-17 24-12 31-10-9 15-20 20-31 10Z" fill="#687a52" />
      <path d="M59 24c-8-14-30-7-26 9-16 1-16 24-1 27-1 17 20 21 28 7 11 13 30 5 25-10 16-7 9-27-7-28 0-18-21-20-27-5Z" fill="currentColor" />
      <path d="M58 28c-8-4-17 3-14 11-9 4-7 15 2 17 4 10 15 9 18 1 9 4 17-4 12-12 5-8-3-17-12-13-1-8-9-10-14-4Z" fill="#fff8f0" fillOpacity=".38" />
      <path d="M58 37c-7 3-5 12 2 13 8-3 7-12 0-14" stroke="#fff8f0" strokeOpacity=".65" strokeWidth="2" />
    </svg>
  )
}

function App() {
  const [letterOpen, setLetterOpen] = useState(false)
  const [rosesBlooming, setRosesBlooming] = useState(false)
  const [photoVisible, setPhotoVisible] = useState(true)

  return (
    <main>
      <div className="announcement"><span>✦</span> Hoy el jardín florece por una razón muy especial <span>✦</span></div>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Yusnecy, inicio"><Flower /> <span>para <i>Yusnecy</i></span></a>
        <nav aria-label="Navegación principal">
          <a href="#dedicatoria">Dedicatoria</a><a href="#rosas">Un jardín para ti</a><a href="#final">Tu día</a>
        </nav>
        <a className="header-heart" href="#final" aria-label="Ir a tu día">♥</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-wash" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> UN DÍA HECHO PARA CELEBRARTE</p>
          <h1>Hoy florece<br />el mundo<br /><em>por ti.</em></h1>
          <p className="hero-subtitle">Feliz cumpleaños, Yusnecy</p>
          <p className="hero-description">Que la vida te regale días tan luminosos, dulces y llenos de amor como el que tú mereces.</p>
          <a className="button button-dark" href="#dedicatoria">Descubre tu sorpresa <span>↓</span></a>
          <button className="bloom-trigger" onClick={() => setRosesBlooming(true)}><span>✿</span> Haz florecer el jardín</button>
          <div className="hero-footnote"><span className="tiny-flower">✿</span> Con cariño, en tu día especial</div>
        </div>

        <div className="hero-art" aria-label="Un ramo de flores para Yusnecy">
          <div className="sun-disc" />
          <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✧</span><span className="art-spark spark-three">✦</span>
          <div className="portrait-frame">
            {photoVisible && <img src="/yusnecy.jpg" alt="Yusnecy" onError={() => setPhotoVisible(false)} />}
            {!photoVisible && <div className="portrait-fallback"><Flower /><span>Y</span><small>Un lugar reservado para tu sonrisa</small></div>}
            <span className="frame-caption">la más bonita de este jardín</span>
          </div>
          <div className="hero-sticker"><span>hecho</span><b>con</b><span>amor</span><i>♥</i></div>
        </div>
        <div className="hero-side-note">UN RAMITO DE BUENOS DESEOS <span>✿</span> PARA TI</div>
      </section>

      <section className="dedication section-shell" id="dedicatoria">
        <div className="section-kicker"><span>01</span><i /> UNA CARTA PARA TI</div>
        <div className="dedication-grid">
          <div className="dedication-title"><span className="mini-label">A la cumpleañera más especial</span><h2>Yusnecy,<br /><em>este día</em> es tuyo.</h2><Flower className="title-flower" /></div>
          <div className="dedication-message"><span className="quote-mark">“</span><p>Hoy celebramos tu vida, tu luz y esa manera tan tuya de hacer más bonito todo lo que te rodea. Que cada deseo que guardas en el corazón encuentre su momento para florecer.</p><p className="message-sign">Con todo mi cariño <span>♥</span></p><button className="text-button" onClick={() => setLetterOpen(true)}>Abrir tu carta especial <span>↗</span></button></div>
        </div>
      </section>

      <section className="garden" id="rosas">
        <div className="garden-top section-shell"><div><div className="section-kicker light"><span>02</span><i /> UNA COLECCIÓN HECHA CON AMOR</div><h2>Un jardín entero<br />para <em>celebrarte.</em></h2></div><p>Cada rosa guarda un deseo bonito.<br />Elige la que más se parezca a ti.</p></div>
        <div className="rose-grid section-shell">{roses.map((rose) => <article className="rose-card" key={rose.name}><div className={`rose-visual ${rose.tone}`}><span className="rose-number">{rose.mark}</span><Rose tone={rose.tone} /><span className="rose-orbit" /></div><h3>{rose.name}</h3><p>{rose.note}</p><span className="rose-card-heart" aria-hidden="true">♡</span></article>)}</div>
        <div className="garden-bottom"><span>UNA ROSA POR CADA SUEÑO</span><i>✿</i><span>Y UN DESEO POR CADA PÉTALO</span></div>
      </section>

      <section className="wishes section-shell" id="final">
        <div className="wishes-flower flower-left"><Flower /></div><div className="wishes-flower flower-right"><Flower /></div>
        <div className="section-kicker"><span>03</span><i /> QUE COMIENCE LA MAGIA</div>
        <p className="wish-intro">Un brindis por tus vueltas al sol</p><h2>Que tu nuevo año<br />venga <em>lleno de flores.</em></h2>
        <p className="wish-copy">De risas que duren horas, abrazos que se sientan como hogar,<br className="desktop-break" /> aventuras inesperadas y muchísimo amor.</p>
        <button className="button button-rose" onClick={() => setLetterOpen(true)}>Un último deseo para ti <span>♥</span></button>
        <div className="birthday-seal"><span>FELIZ</span><b>CUMPLE</b><span>YUSNECY</span><i>✿</i></div>
      </section>

      <footer className="site-footer"><span>Hecho con mucho amor para Yusnecy</span><span>✿</span><span>Que nunca te falten flores</span></footer>

      {letterOpen && <div className="modal-backdrop" role="presentation" onClick={() => setLetterOpen(false)}><section className="letter-modal" role="dialog" aria-modal="true" aria-labelledby="letter-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setLetterOpen(false)} aria-label="Cerrar carta">×</button><Flower className="letter-flower" /><p className="eyebrow">UN MENSAJITO PARA TI</p><h2 id="letter-title">Querida Yusnecy,</h2><p>Que este cumpleaños sea el comienzo de una etapa preciosa. Que nunca te falten motivos para sonreír, personas que te quieran bonito y flores —reales o imaginarias— que te recuerden lo especial que eres.</p><p>Hoy y siempre, mereces todo lo lindo del mundo.</p><span className="letter-sign">Feliz cumpleaños <i>♥</i></span><button className="button button-dark" onClick={() => setLetterOpen(false)}>Guardar en el corazón <span>♡</span></button></section></div>}

      {rosesBlooming && <div className="bloom-overlay" role="dialog" aria-modal="true" aria-label="Lluvia de rosas amarillas"><div className="bloom-message"><span>✿</span><p>Un jardín de buenos deseos<br /><em>solo para ti</em></p><button onClick={() => setRosesBlooming(false)}>Volver al jardín <span>×</span></button></div>{Array.from({ length: 30 }, (_, index) => <div className="floating-rose" key={index} style={{ left: `${(index * 37 + 7) % 96}%`, animationDelay: `${-(index % 12) * 1.7}s`, animationDuration: `${19 + (index % 6) * 2}s`, '--rose-size': `${48 + (index % 4) * 16}px` } as CSSProperties}><Rose tone="gold" /></div>)}</div>}
    </main>
  )
}

export default App
