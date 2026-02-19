import { useEffect, useRef, useState } from "react"
import workshop from "../assets/workshop.jpeg"

export default function Workshop() {
  const sectionRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="workshop"
      ref={sectionRef}
      className="py-28 px-6 bg-white scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="relative pl-12">

          {/* LIGHT GRAY LINE */}
          <span className="absolute left-3 top-0 h-full w-0.5 bg-gray-300"></span>

          <h2 className="text-4xl font-semibold mb-12">
            Workshops
          </h2>

          {/* CARD 1 */}
          <div
            className={`mb-8 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-700
            ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            hover:shadow-xl hover:-translate-y-1`}
          >
            <h3 className="text-xl font-semibold mb-2">
              Clay Art Basics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn the fundamentals of natural clay — shaping, detailing,
              and finishing everything by hand.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className={`mb-8 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-700 delay-150
            ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            hover:shadow-xl hover:-translate-y-1`}
          >
            <h3 className="text-xl font-semibold mb-2">
              Hands-on Experience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Participants create their own clay toys, wall decor,
              or keychains during the session.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-700 delay-300
            ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            hover:shadow-xl hover:-translate-y-1`}
          >
            <h3 className="text-xl font-semibold mb-2">
              Custom Themes
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Workshops are customizable for schools, corporate events,
              and private groups.
            </p>
           </div>
          <div
            className={`mb-8 bg-white border border-gray-200 rounded-2xl p-6 mt-5 shadow-sm transition-all duration-700 delay-150
            ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            hover:shadow-xl hover:-translate-y-1`}
          >
            <h3 className="text-xl font-semibold mb-2">
              Hands-on Experience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Participants create their own clay toys, wall decor,
              or keychains during the session.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`sticky top-32 transition-all duration-1000
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <img
            src={workshop}
            alt="Clay workshop"
            className="w-full h-105 object-cover rounded-3xl shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}