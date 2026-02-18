import { Clock } from "lucide-react"

export default function Class() {
  return (
    <section className="py-28 px-6 bg-white">
      
      <div className="max-w-4xl mx-auto text-center">
        
        {/* ICON */}
        <div className="mx-auto mb-8 w-20 h-20 rounded-full bg-black/5 
          flex items-center justify-center
          animate-[float_4s_ease-in-out_infinite]
        ">
          <Clock size={36} className="text-gray-700" />
        </div>

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Clay Classes
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          We are currently working on curating hands-on clay classes and
          workshops. Stay tuned — something beautiful is coming soon.
        </p>

        {/* BADGE */}
        <div className="mt-10 inline-block px-6 py-3 rounded-full 
          bg-black text-white text-sm tracking-wide
        ">
          Currently Not Available
        </div>

      </div>
    </section>
  )
}
