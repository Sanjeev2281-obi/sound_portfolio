import { useEffect, useRef, useState } from "react"
import workshop from "../assets/workshop.jpeg"

const items = [
  {
    num: "01",
    title: "Clay Art Basics",
    body: "Learn the fundamentals of natural clay — shaping, detailing, and hand-finishing every piece from scratch.",
  },
  {
    num: "02",
    title: "Hands-on Experience",
    body: "Participants create their own clay toys, wall decor, or keychains during the session. No prior experience needed.",
  },
  {
    num: "03",
    title: "Custom Themes",
    body: "Workshops are fully customizable for schools, corporate events, birthday parties, and private groups.",
  },
  {
    num: "04",
    title: "Take-home Creations",
    body: "Every participant takes their finished, air-dried piece home as a lasting memory of the experience.",
  },
]

export default function Workshop() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .ws-section {
          padding: 7rem 2rem;
          background: #fff;
          font-family: 'DM Sans', sans-serif;
        }

        .ws-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        .ws-left {}

        .ws-eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #888;
          margin: 0 0 0.75rem;
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }

        .ws-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #bbb;
        }

        .ws-eyebrow.vis { opacity: 1; transform: translateY(0); }

        .ws-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 500;
          color: #0a0a0a;
          line-height: 1.15;
          margin: 0 0 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s;
        }

        .ws-heading.vis { opacity: 1; transform: translateY(0); }

        .ws-items { display: flex; flex-direction: column; gap: 0; }

        .ws-item {
          display: grid;
          grid-template-columns: 3rem 1fr;
          gap: 0 1.25rem;
          padding: 1.75rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
          cursor: default;
        }

        .ws-item:first-child { border-top: 1px solid rgba(0,0,0,0.07); }
        .ws-item.vis { opacity: 1; transform: translateY(0); }

        .ws-item:hover .ws-item-title { color: #555; }

        .ws-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.875rem;
          color: #bbb;
          font-weight: 400;
          padding-top: 3px;
          line-height: 1;
        }

        .ws-item-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: #0a0a0a;
          margin: 0 0 0.5rem;
          letter-spacing: 0.01em;
          transition: color 0.3s;
        }

        .ws-item-body {
          font-size: 0.9375rem;
          color: #777;
          line-height: 1.7;
          font-weight: 300;
          margin: 0;
        }

        .ws-cta-row {
          margin-top: 2.5rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s;
        }

        .ws-cta-row.vis { opacity: 1; transform: translateY(0); }

        .ws-cta {
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

        .ws-cta:hover {
          background: #2a2a2a;
          transform: translateY(-2px);
          gap: 12px;
        }

        .ws-right {
          position: sticky;
          top: 96px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s;
        }

        .ws-right.vis { opacity: 1; transform: translateY(0); }

        .ws-img-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .ws-img-frame::before {
          content: '';
          position: absolute;
          top: -16px;
          right: -16px;
          bottom: 16px;
          left: 16px;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 20px;
          pointer-events: none;
          z-index: 0;
        }

        .ws-img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 20px;
          display: block;
          position: relative;
          z-index: 1;
        }

        .ws-img-stat {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          z-index: 2;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          border-radius: 14px;
          padding: 1rem 1.25rem;
          border: 1px solid rgba(255,255,255,0.6);
        }

        .ws-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #0a0a0a;
          line-height: 1;
          display: block;
        }

        .ws-stat-label {
          font-size: 0.75rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 400;
          display: block;
          margin-top: 4px;
        }

        @media (max-width: 900px) {
          .ws-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .ws-right { position: relative; top: 0; }
          .ws-img { aspect-ratio: 16/10; }
        }

        @media (max-width: 480px) {
          .ws-section { padding: 5rem 1.25rem; }
        }
      `}</style>

      <section className="ws-section" id="workshop" ref={sectionRef}>
        <div className="ws-inner">
          <div className="ws-left">
            <p className={`ws-eyebrow${visible ? " vis" : ""}`}>Learn &amp; Create</p>
            <h2 className={`ws-heading${visible ? " vis" : ""}`}>
              Workshops &amp;<br />
              <em style={{ fontStyle: "italic", color: "#777" }}>Experiences</em>
            </h2>

            <div className="ws-items">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`ws-item${visible ? " vis" : ""}`}
                  style={{
                    transitionDelay: visible ? `${0.2 + i * 0.1}s` : "0s",
                  }}
                >
                  <p className="ws-num">{item.num}</p>
                  <div>
                    <h3 className="ws-item-title">{item.title}</h3>
                    <p className="ws-item-body">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`ws-cta-row${visible ? " vis" : ""}`}>
              <a href="#contact" className="ws-cta">Book a Workshop →</a>
            </div>
          </div>

          <div className={`ws-right${visible ? " vis" : ""}`}>
            <div className="ws-img-frame">
              <img src={workshop} alt="Clay workshop session" className="ws-img" />
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}