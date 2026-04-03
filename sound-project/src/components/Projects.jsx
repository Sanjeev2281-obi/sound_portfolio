import { useEffect, useRef, useState } from "react"

import p3 from "../assets/p3.jpeg"
import p4 from "../assets/p4.jpeg"
import p5 from "../assets/p5.jpeg"
import p6 from "../assets/p6.jpeg"
import p7 from "../assets/p7.jpeg"
import p8 from "../assets/p8.jpeg"
import p9 from "../assets/p9.jpeg"
import p10 from "../assets/p10.jpeg"

const images = [p3, p4, p5, p6, p7, p8, p9, p10]

const labels = [
  "Clay Figurines",
  "Wall Decor",
  "Custom Keychains",
  "Miniatures",
  "Festive Pieces",
  "Portrait Work",
  "Gift Sets",
  "Workshop Creations",
]

export default function Projects() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setIndex((p) => (p + 1) % images.length)
    }, 2200)
    return () => clearInterval(intervalRef.current)
  }, [paused])

  const goTo = (i) => {
    setIndex(i)
    setPaused(true)
    setTimeout(() => setPaused(false), 5000)
  }

  const prev = () => goTo((index - 1 + images.length) % images.length)
  const next = () => goTo((index + 1) % images.length)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .proj-section {
          padding: 7rem 2rem;
          background: #fafaf8;
          font-family: 'DM Sans', sans-serif;
        }

        .proj-header {
          max-width: 1200px;
          margin: 0 auto 3.5rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }

        .proj-header.visible { opacity: 1; transform: translateY(0); }

        .proj-eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #888;
          margin: 0 0 0.75rem;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .proj-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #bbb;
        }

        .proj-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 500;
          color: #0a0a0a;
          margin: 0;
          line-height: 1.15;
        }

        .proj-counter {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          color: #aaa;
          font-weight: 400;
          white-space: nowrap;
          padding-bottom: 0.5rem;
        }

        .proj-counter strong {
          color: #0a0a0a;
          font-size: 1.25rem;
        }

        .proj-stage {
          max-width: 1200px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s;
        }

        .proj-stage.visible { opacity: 1; transform: translateY(0); }

        .proj-track-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #f0ede8;
        }

        .proj-track {
          display: flex;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .proj-slide {
          min-width: 100%;
          aspect-ratio: 16/9;
        }

        @media (max-width: 600px) {
          .proj-slide { aspect-ratio: 4/5; }
        }

        .proj-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .proj-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%);
          pointer-events: none;
        }

        .proj-label {
          position: absolute;
          bottom: 1.75rem;
          left: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 500;
          color: #fff;
          letter-spacing: 0.01em;
          pointer-events: none;
        }

        .proj-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 0.75rem;
        }

        .proj-nav-left { left: 1.25rem; }
        .proj-nav-right { right: 1.25rem; }

        .proj-nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .proj-nav-btn:hover {
          background: rgba(255,255,255,0.3);
          transform: scale(1.05);
        }

        .proj-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 1.75rem;
        }

        .proj-dot {
          height: 2px;
          border-radius: 2px;
          background: #ccc;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          padding: 0;
        }

        .proj-dot.active {
          background: #0a0a0a;
          width: 28px !important;
        }

        .proj-thumbnails {
          display: flex;
          gap: 10px;
          margin-top: 1.25rem;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 4px;
        }

        .proj-thumbnails::-webkit-scrollbar { display: none; }

        .proj-thumb {
          min-width: 72px;
          height: 52px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.3s;
          flex-shrink: 0;
          opacity: 0.5;
        }

        .proj-thumb:hover { opacity: 0.8; }
        .proj-thumb.active { border-color: #0a0a0a; opacity: 1; }

        .proj-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <section className="proj-section" id="projects" ref={sectionRef}>
        <div className={`proj-header${visible ? " visible" : ""}`}>
          <div>
            <p className="proj-eyebrow">Portfolio</p>
            <h2 className="proj-title">Our Works</h2>
          </div>
          <p className="proj-counter">
            <strong>{String(index + 1).padStart(2, "0")}</strong> / {String(images.length).padStart(2, "0")}
          </p>
        </div>

        <div className={`proj-stage${visible ? " visible" : ""}`}>
          <div className="proj-track-wrap">
            <div
              className="proj-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <div className="proj-slide" key={i}>
                  <img src={img} alt={labels[i]} loading="lazy" />
                </div>
              ))}
            </div>

            <div className="proj-overlay" />
            <p className="proj-label">{labels[index]}</p>

            <div className="proj-nav proj-nav-left">
              <button className="proj-nav-btn" onClick={prev} aria-label="Previous">‹</button>
            </div>
            <div className="proj-nav proj-nav-right">
              <button className="proj-nav-btn" onClick={next} aria-label="Next">›</button>
            </div>
          </div>

          <div className="proj-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`proj-dot${index === i ? " active" : ""}`}
                style={{ width: index === i ? 28 : 12 }}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          
        </div>
      </section>
    </>
  )
}