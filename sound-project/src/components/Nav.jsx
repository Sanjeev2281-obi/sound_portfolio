import { useState, useEffect } from "react"
import logo from "../assets/logo.jpeg"
 
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
 
  const menu = [
    { name: "Home", link: "#home" },
    { name: "Works", link: "#projects" },
    { name: "Workshop", link: "#workshop" },
    { name: "Class", link: "#class" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ]
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');
 
        .nav-root {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'DM Sans', sans-serif;
        }
 
        .nav-root.scrolled {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
 
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
 
        .nav-logo-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
 
        .nav-logo-img {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid rgba(0,0,0,0.08);
        }
 
        .nav-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #0a0a0a;
          letter-spacing: 0.01em;
        }
 
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
 
        .nav-links a {
          font-size: 0.8125rem;
          font-weight: 400;
          color: #3a3a3a;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.3s ease;
        }
 
        .nav-links a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: #0a0a0a;
          transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
 
        .nav-links a:hover { color: #0a0a0a; }
        .nav-links a:hover::after { width: 100%; }
 
        .nav-cta {
          font-size: 0.8125rem;
          font-weight: 500;
          color: #fff;
          background: #0a0a0a;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: background 0.3s ease, transform 0.2s ease;
        }
 
        .nav-cta:hover {
          background: #2a2a2a;
          transform: translateY(-1px);
        }
 
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
 
        .nav-hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: #0a0a0a;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }
 
        .nav-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
 
        .nav-mobile {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding: 2rem;
          transform: translateY(-110%);
          opacity: 0;
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 99;
        }
 
        .nav-mobile.open {
          transform: translateY(0);
          opacity: 1;
        }
 
        .nav-mobile ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
 
        .nav-mobile a {
          font-size: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          color: #0a0a0a;
          text-decoration: none;
          letter-spacing: 0.01em;
          display: block;
          transition: opacity 0.2s;
        }
 
        .nav-mobile a:hover { opacity: 0.5; }
 
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>
 
      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo-wrap">
            <img src={logo} alt="Souko Clay Studio" className="nav-logo-img" />
            <span className="nav-brand">Souko</span>
          </a>
 
          <ul className="nav-links">
            {menu.slice(0, -1).map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
 
          <a href="#contact" className="nav-cta">Get in Touch</a>
 
          <button
            className={`nav-hamburger${open ? " open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
 
      <div className={`nav-mobile${open ? " open" : ""}`}>
        <ul>
          {menu.map((item) => (
            <li key={item.name}>
              <a href={item.link} onClick={() => setOpen(false)}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}