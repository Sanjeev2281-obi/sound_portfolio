import { useEffect, useRef, useState } from "react"
import aboutImg from "../assets/p2.jpeg"

const values = [
  {
    title: "100% Handmade",
    body: "Shaped entirely by hand from natural clay with traditional techniques.",
    icon: "✦",
  },
  {
    title: "Fully Customizable",
    body: "Personalized pieces tailored to your vision — gifts, decor, and more.",
    icon: "◈",
  },
  {
    title: "Toys, Decor & Keychains",
    body: "Perfect for home, gifting, or keeping as a treasured keepsake.",
    icon: "◇",
  },
]

export default function About() {
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .about-section {
          padding: 7rem 2rem;
          background: #fafaf8;
          font-family: 'DM Sans', sans-serif;
        }

        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7rem;
          align-items: center;
        }

        .about-left {
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }

        .about-left.vis { opacity: 1; transform: translateX(0); }

        .about-img-wrap {
          position: relative;
        }

        .about-img {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          border-radius: 20px;
          display: block;
        }

        .about-img-accent {
          position: absolute;
          bottom: -1.5rem;
          right: -1.5rem;
          width: 60%;
          aspect-ratio: 1;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 16px;
          pointer-events: none;
          z-index: -1;
        }

        .about-img-tag {
          position: absolute;
          top: 1.5rem;
          right: -1rem;
          background: #0a0a0a;
          color: #fff;
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 500;
          writing-mode: vertical-rl;
          letter-spacing: 0.12em;
        }

        .about-right {
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s;
        }

        .about-right.vis { opacity: 1; transform: translateX(0); }

        .about-eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #888;
          margin: 0 0 0.75rem;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 400;
        }

        .about-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #bbb;
        }

        .about-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 500;
          color: #0a0a0a;
          line-height: 1.15;
          margin: 0 0 1.5rem;
        }

        .about-lead {
          font-size: 1.0625rem;
          line-height: 1.75;
          color: #555;
          font-weight: 300;
          margin: 0 0 2.5rem;
        }

        .about-values {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 0 0 2.5rem;
        }

        .about-val {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }

        .about-val:first-child { border-top: 1px solid rgba(0,0,0,0.07); }
        .about-val.vis { opacity: 1; transform: translateY(0); }

        .about-val-icon {
          font-size: 1rem;
          color: #bbb;
          margin-top: 3px;
          flex-shrink: 0;
          width: 1.5rem;
        }

        .about-val-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.125rem;
          font-weight: 500;
          color: #0a0a0a;
          margin: 0 0 0.35rem;
        }

        .about-val-body {
          font-size: 0.9375rem;
          color: #777;
          line-height: 1.65;
          font-weight: 300;
          margin: 0;
        }

        .about-close {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.125rem;
          font-style: italic;
          color: #0a0a0a;
          line-height: 1.6;
          padding-left: 1.5rem;
          border-left: 2px solid #0a0a0a;
          margin: 0;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.45s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.45s;
        }

        .about-close.vis { opacity: 1; transform: translateY(0); }

        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .about-left { transform: translateY(20px); }
          .about-left.vis { transform: translateY(0); }
          .about-right { transform: translateY(20px); }
          .about-right.vis { transform: translateY(0); }
          .about-img { aspect-ratio: 4/3; }
          .about-img-tag { display: none; }
        }

        @media (max-width: 480px) {
          .about-section { padding: 5rem 1.25rem; }
        }
      `}</style>

      <section className="about-section" id="about" ref={sectionRef}>
        <div className="about-inner">
          <div className={`about-left${visible ? " vis" : ""}`}>
            <div className="about-img-wrap">
              <img src={aboutImg} alt="Handcrafted Clay Art" className="about-img" />
              <div className="about-img-accent" />
              <div className="about-img-tag">Made in India 🇮🇳</div>
            </div>
          </div>

          <div className={`about-right${visible ? " vis" : ""}`}>
            <p className="about-eyebrow">Our Story</p>
            <h2 className="about-heading">
              Art shaped<br />
              <em style={{ fontStyle: "italic", color: "#777" }}>by hand &amp; heart</em>
            </h2>

            <p className="about-lead">
              We create clay art using traditional techniques, blending creativity
              with nature. Every piece is made with care, patience, and full
              attention to detail — no two are ever exactly the same.
            </p>

            <div className="about-values">
              {values.map((v, i) => (
                <div
                  key={i}
                  className={`about-val${visible ? " vis" : ""}`}
                  style={{ transitionDelay: visible ? `${0.25 + i * 0.1}s` : "0s" }}
                >
                  <span className="about-val-icon">{v.icon}</span>
                  <div>
                    <h3 className="about-val-title">{v.title}</h3>
                    <p className="about-val-body">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className={`about-close${visible ? " vis" : ""}`}>
              Each product tells a story — crafted slowly, inspired by nature,
              designed to bring warmth into your space.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}