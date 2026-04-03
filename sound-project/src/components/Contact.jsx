import { useState, useRef, useEffect } from "react"
import { Instagram, Mail, Phone, ShieldCheck } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .ct-section {
          padding: 7rem 2rem;
          background: #fff;
          font-family: 'DM Sans', sans-serif;
        }

        .ct-header {
          max-width: 1200px;
          margin: 0 auto 4rem;
          text-align: center;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }

        .ct-header.vis { opacity: 1; transform: translateY(0); }

        .ct-eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #888;
          margin: 0 0 0.75rem;
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .ct-eyebrow::before, .ct-eyebrow::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #bbb;
        }

        .ct-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 500;
          color: #0a0a0a;
          margin: 0;
          line-height: 1.15;
        }

        .ct-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 5rem;
          align-items: start;
        }

        .ct-form-wrap {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s;
        }

        .ct-form-wrap.vis { opacity: 1; transform: translateY(0); }

        .ct-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .ct-label {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
          font-weight: 400;
        }

        .ct-input, .ct-textarea {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9375rem;
          font-weight: 300;
          color: #0a0a0a;
          background: #fafaf8;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 12px;
          padding: 0.875rem 1.125rem;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.3s, background 0.3s;
        }

        .ct-input:focus, .ct-textarea:focus {
          border-color: #0a0a0a;
          background: #fff;
        }

        .ct-input::placeholder, .ct-textarea::placeholder {
          color: #bbb;
        }

        .ct-textarea {
          min-height: 140px;
          resize: none;
        }

        .ct-submit-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: 1.75rem;
          flex-wrap: wrap;
        }

        .ct-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.9375rem 2.25rem;
          background: #0a0a0a;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ct-btn:hover {
          background: #2a2a2a;
          transform: translateY(-2px);
          gap: 12px;
        }

        .ct-btn:active { transform: translateY(0); }

        .ct-trust {
          font-size: 0.8125rem;
          color: #aaa;
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ct-success {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: #22c55e;
          font-weight: 400;
          padding: 0.75rem 1.25rem;
          background: rgba(34,197,94,0.08);
          border-radius: 100px;
          border: 1px solid rgba(34,197,94,0.2);
          opacity: 0;
          transform: scale(0.96);
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }

        .ct-success.show { opacity: 1; transform: scale(1); }

        .ct-info-wrap {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s;
        }

        .ct-info-wrap.vis { opacity: 1; transform: translateY(0); }

        .ct-card-black {
          background: #0a0a0a;
          color: #fff;
          border-radius: 20px;
          padding: 1.75rem;
          margin-bottom: 0;
        }

        .ct-card-black h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 500;
          margin: 0 0 0.75rem;
          color: #fff;
        }

        .ct-card-black p {
          font-size: 0.9375rem;
          color: #888;
          line-height: 1.65;
          font-weight: 300;
          margin: 0 0 1.25rem;
        }

        .ct-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #22c55e;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.2);
          padding: 0.4rem 0.875rem;
          border-radius: 100px;
          font-weight: 400;
          letter-spacing: 0.04em;
        }

        .ct-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: #fafaf8;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          text-decoration: none;
          color: #0a0a0a;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
        }

        .ct-link:hover {
          background: #fff;
          border-color: rgba(0,0,0,0.15);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        .ct-link-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ct-link-label {
          font-size: 0.75rem;
          color: #888;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 2px;
        }

        .ct-link-value {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #0a0a0a;
          letter-spacing: -0.01em;
        }

        .ct-link-arrow {
          margin-left: auto;
          color: #ccc;
          font-size: 1rem;
          transition: transform 0.3s;
        }

        .ct-link:hover .ct-link-arrow { transform: translateX(4px); color: #888; }

        @media (max-width: 900px) {
          .ct-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .ct-form-row { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .ct-section { padding: 5rem 1.25rem; }
        }
      `}</style>

      <section className="ct-section" id="contact" ref={sectionRef}>
        <div className={`ct-header${visible ? " vis" : ""}`}>
          <p className="ct-eyebrow">Say Hello</p>
          <h2 className="ct-heading">
            Get in Touch
          </h2>
        </div>

        <div className="ct-inner">
          {/* FORM */}
          <div className={`ct-form-wrap${visible ? " vis" : ""}`}>
            <form onSubmit={handleSubmit}>
              <div className="ct-form-row">
                <div className="ct-field">
                  <label className="ct-label">Full Name</label>
                  <input
                    className="ct-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label">Email Address</label>
                  <input
                    type="email"
                    className="ct-input"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="ct-field">
                <label className="ct-label">Your Message</label>
                <textarea
                  className="ct-textarea"
                  placeholder="Tell us about your idea, custom order, or workshop enquiry..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <div className="ct-submit-row">
                <button type="submit" className="ct-btn">
                  Send Message →
                </button>

                <span className={`ct-success${sent ? " show" : ""}`}>
                  ✓ Message sent!
                </span>

                {!sent && (
                  <span className="ct-trust">
                    <ShieldCheck size={14} /> Usually within 24 hours
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* INFO */}
          <div className={`ct-info-wrap${visible ? " vis" : ""}`}>
            <div className="ct-card-black">
              <h3>Made in India 🇮🇳</h3>
              <p>
                Handcrafted with love, patience, and traditional artistry.
                Every creation carries warmth and meaning.
              </p>
              <span className="ct-badge">
                <ShieldCheck size={12} /> Response within 24 hrs
              </span>
            </div>

            <a
              href="https://instagram.com/soukoclaystudio"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-link"
            >
              <div className="ct-link-icon" style={{ background: "rgba(236,72,153,0.08)" }}>
                <Instagram size={18} color="#db2777" />
              </div>
              <div>
                <span className="ct-link-label">Instagram</span>
                <span className="ct-link-value">@soukoclaystudio</span>
              </div>
              <span className="ct-link-arrow">›</span>
            </a>

            <a href="mailto:claywork@gmail.com" className="ct-link">
              <div className="ct-link-icon" style={{ background: "rgba(37,99,235,0.08)" }}>
                <Mail size={18} color="#2563eb" />
              </div>
              <div>
                <span className="ct-link-label">Email</span>
                <span className="ct-link-value">claywork@gmail.com</span>
              </div>
              <span className="ct-link-arrow">›</span>
            </a>

            <a
              href="https://wa.me/917010191968"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-link"
            >
              <div className="ct-link-icon" style={{ background: "rgba(22,163,74,0.08)" }}>
                <Phone size={18} color="#16a34a" />
              </div>
              <div>
                <span className="ct-link-label">WhatsApp — Orders &amp; Workshops</span>
                <span className="ct-link-value">+91 70101 91968</span>
              </div>
              <span className="ct-link-arrow">›</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}