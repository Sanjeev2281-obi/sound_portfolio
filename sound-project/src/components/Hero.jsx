import { useEffect, useRef } from "react"
import main from "../assets/profile.jpeg"

export default function Hero() {
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const nameRef = useRef(null)
  const btnRef = useRef(null)
  const imgRef = useRef(null)
  const tagRef = useRef(null)

  useEffect(() => {
    const els = [headingRef, tagRef, subRef, nameRef, btnRef, imgRef]
    els.forEach((ref, i) => {
      if (!ref.current) return
      ref.current.style.opacity = "0"
      ref.current.style.transform = i < 5 ? "translateY(28px)" : "translateY(20px) scale(0.98)"
      setTimeout(() => {
        if (!ref.current) return
        ref.current.style.transition = "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)"
        ref.current.style.opacity = "1"
        ref.current.style.transform = "translateY(0) scale(1)"
      }, 120 + i * 100)
    })
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 2rem;
          padding-top: 80px;
          background: #fafaf8;
          font-family: 'DM Sans', sans-serif;
        }

        .hero-inner {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .hero-left { order: 1; }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 1.75rem;
          font-weight: 400;
        }

        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #bbb;
        }

        .hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 500;
          line-height: 1.1;
          color: #0a0a0a;
          letter-spacing: -0.01em;
          margin: 0 0 1.75rem;
        }

        .hero-heading em {
          font-style: italic;
          color: #555;
        }

        .hero-body {
          font-size: 1.0625rem;
          line-height: 1.75;
          color: #555;
          font-weight: 300;
          max-width: 420px;
          margin: 0 0 2rem;
        }

        .hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.0625rem;
          font-weight: 500;
          color: #0a0a0a;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hero-name::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #0a0a0a;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.875rem 2rem;
          background: #0a0a0a;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 100px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-btn-primary:hover {
          background: #2a2a2a;
          transform: translateY(-2px);
          gap: 12px;
        }

        .hero-btn-secondary {
          font-size: 0.875rem;
          color: #555;
          text-decoration: none;
          letter-spacing: 0.04em;
          font-weight: 400;
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
          transition: all 0.3s;
        }

        .hero-btn-secondary:hover {
          color: #0a0a0a;
          border-color: #0a0a0a;
        }

        .hero-right {
          order: 2;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .hero-img-wrap {
          position: relative;
          width: min(420px, 100%);
        }

        .hero-img-wrap::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 20px;
          right: -20px;
          bottom: -20px;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 20px;
          pointer-events: none;
        }

        .hero-img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 16px;
          display: block;
          position: relative;
          z-index: 1;
        }

        .hero-img-badge {
          position: absolute;
          bottom: -1.5rem;
          left: -1.5rem;
          z-index: 2;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 14px;
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .badge-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8125rem;
          color: #0a0a0a;
          font-weight: 400;
          line-height: 1.3;
        }

        .badge-text span {
          display: block;
          font-size: 0.6875rem;
          color: #888;
          font-weight: 300;
        }

        @media (max-width: 900px) {
          .hero-section { padding: 6rem 1.5rem 3rem; }
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-left { order: 2; text-align: center; }
          .hero-right { order: 1; justify-content: center; }
          .hero-body { margin-left: auto; margin-right: auto; }
          .hero-name { justify-content: center; }
          .hero-actions { justify-content: center; }
          .hero-img-wrap { width: min(340px, 90vw); }
          .hero-img-badge { left: 0; bottom: -1rem; }
          .hero-heading { text-align: center; }
          .hero-eyebrow { justify-content: center; }
        }

        @media (max-width: 480px) {
          .hero-heading { font-size: 2.4rem; }
        }
      `}</style>

      <section className="hero-section" id="home">
        <div className="hero-inner">
          <div className="hero-left">
            <p className="hero-eyebrow" ref={tagRef}>Handcrafted Clay Art</p>

            <h1 className="hero-heading" ref={headingRef}>
              Made with<br />
              <em>love &amp; patience</em>
            </h1>

            <p className="hero-body" ref={subRef}>
              Each piece is carefully shaped by hand using traditional techniques.
              Slight variations make every creation truly one of a kind.
            </p>

            <p className="hero-name" ref={nameRef}>Soundhariya Arumugam</p>

            <div className="hero-actions" ref={btnRef}>
              <a href="#projects" className="hero-btn-primary">
                View Works →
              </a>
              <a href="#contact" className="hero-btn-secondary">Enquire</a>
            </div>
          </div>

          <div className="hero-right" ref={imgRef}>
            <div className="hero-img-wrap">
              <img src={main} alt="Soundhariya — Clay Artist" className="hero-img" />
              <div className="hero-img-badge">
                <div className="badge-dot" />
                <div className="badge-text">
                  Open for Orders
                  <span>Ships across India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}