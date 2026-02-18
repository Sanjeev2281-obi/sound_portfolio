
import main from "../assets/profile.jpeg"
export default function Hero() {

  return (
    <section className="min-h-screen flex items-center px-6 mt-5 md:px-12 lg:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Souko Clay Studio.<br className="hidden md:block" /> Made with Care  
          </h1>
          <p className="mt-5 text-gray-600 max-w-md mx-auto md:mx-0 text-base md:text-lg">
            Each piece is carefully handcrafted with love and attention to detail. Slight variations make every product unique.
          </p>
          <p className="mt-4 text-gray-800 text-lg md:text-xl font-medium tracking-wide">
            Soundhariya Arumugam
          </p>
          <a href="#projects"><button  className="mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            View Projects →
          </button></a>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-72.5 sm:w-85 md:w-90 lg:w-105 h-90 sm:h-105 md:h-120 lg:h-130 translate-x-2 md:translate-x-6">
            <img
              src={main}
              alt="Artist"
              className="w-full h-full object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
