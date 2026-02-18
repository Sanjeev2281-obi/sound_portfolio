import { useEffect, useState } from "react"

import p3 from "../assets/p3.jpeg"
import p4 from "../assets/p4.jpeg"
import p5 from "../assets/p5.jpeg"
import p6 from "../assets/p6.jpeg"
import p7 from "../assets/p7.jpeg"
import p8 from "../assets/p8.jpeg"
import p9 from "../assets/p9.jpeg"
import p10 from "../assets/p10.jpeg"

const images = [p3, p4, p5, p6, p7, p8, p9, p10]

export default function Projects() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 1500)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Our Works
      </h2>

      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-full h-85 md:h-140 shadow-lg flex items-center justify-center"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-black scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
