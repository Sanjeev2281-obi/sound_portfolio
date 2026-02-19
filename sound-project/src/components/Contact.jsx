import { Instagram, Mail, Phone, ShieldCheck } from "lucide-react"
export default function Contact() {
  return (
   <section className="py-20 px-6 sm:px-10 bg-gray-50">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12">
    Contact Us
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
    {/* FORM */}
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
      <h1 className="text-2xl md:text-3xl font-semibold text-black mb-4">
        Get in Touch
      </h1>
      <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base">
        Tell us about your idea — we’ll bring it to life.
      </p>

      {/* NAME */}
      <div className="mb-4">
        <input
          placeholder="Full Name"
          className="w-full md:w-[95%] lg:w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition text-sm md:text-base"
        />
      </div>

      {/* EMAIL */}
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full md:w-[95%] lg:w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition text-sm md:text-base"
        />
      </div>

      {/* MESSAGE */}
      <div className="mb-6">
        <textarea
          placeholder="Your Message / Custom Request"
          className="w-full md:w-[95%] lg:w-full p-4 rounded-xl border border-gray-200 h-32 md:h-40 lg:h-48 resize-none focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition text-sm md:text-base"
        />
      </div>

      {/* BUTTON */}
      <button className="w-full md:w-auto px-8 py-4 bg-black text-white rounded-full font-medium tracking-wide hover:bg-gray-900 transition text-sm md:text-base">
        Send Message
      </button>

      {/* TRUST LINE */}
      <p className="text-center text-sm md:text-base text-gray-400 mt-4">
        We usually respond within 24 hours
      </p>
    </div>

    {/* INFO */}
    <div className="space-y-6 md:space-y-8">
      {/* MADE IN INDIA CARD */}
      <div className="bg-black text-white p-6 md:p-8 rounded-3xl shadow-xl animate-[float_4s_ease-in-out_infinite]">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">Made in India 🇮🇳</h3>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Handcrafted with love, patience, and traditional artistry. Every creation carries warmth and meaning.
        </p>
        <div className="mt-3 flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full w-fit text-sm md:text-base">
          <ShieldCheck size={16} className="text-green-400" />
          <span>Response within 24 hrs</span>
        </div>
      </div>

      {/* SOCIAL LINKS */}
      <a
        href="https://instagram.com/soukoclaystudio"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-5 md:p-6 rounded-2xl shadow flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <Instagram className="text-pink-600" />
        <div>
          <p className="text-sm md:text-base text-gray-500">Instagram</p>
          <p className="font-semibold text-sm md:text-base">@soukoclaystudio</p>
        </div>
      </a>

      <a
        href="mailto:claywork@gmail.com"
        className="bg-white p-5 md:p-6 rounded-2xl shadow flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <Mail className="text-blue-600" />
        <div>
          <p className="text-sm md:text-base text-gray-500">Email</p>
          <p className="font-semibold text-sm md:text-base">claywork@gmail.com</p>
        </div>
      </a>

      <a
        href="https://wa.me/917010191968"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-5 md:p-6 rounded-2xl shadow flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <Phone className="text-green-600" />
        <div>
          <p className="text-sm md:text-base text-gray-500">Custom Orders & Workshops</p>
          <p className="font-semibold text-sm md:text-base">+91 7010191968</p>
        </div>
      </a>
    </div>
  </div>
</section>

  )
}
