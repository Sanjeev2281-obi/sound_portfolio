import { Instagram, Mail, Phone, ShieldCheck } from "lucide-react"
export default function Contact() {
  return (
    <section className="py-24 bg-gray-50 px-10">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        {/* FORM */}
         {/* FORM */}
<div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
  <h1 className="text-2xl font-semibold text-black mb-2">
    Get in Touch
  </h1>
  <p className="text-gray-500 mb-8">
    Tell us about your idea — we’ll bring it to life.
  </p>

  {/* NAME */}
  <div className="mb-5">
    <input
      placeholder="Full Name"
      className="
        w-full p-4 rounded-xl border border-gray-200
        focus:outline-none focus:ring-2 focus:ring-black/10
        focus:border-black transition
      "
    />
  </div>

  {/* EMAIL */}
  <div className="mb-5">
    <input
      type="email"
      placeholder="Email Address"
      className="
        w-full p-4 rounded-xl border border-gray-200
        focus:outline-none focus:ring-2 focus:ring-black/10
        focus:border-black transition
      "
    />
  </div>

  {/* MESSAGE */}
  <div className="mb-8">
    <textarea
      placeholder="Your Message / Custom Request"
      className="
        w-full p-4 rounded-xl border border-gray-200 h-36
        resize-none
        focus:outline-none focus:ring-2 focus:ring-black/10
        focus:border-black transition
      "
    />
  </div>

  {/* BUTTON */}
  <button
    className="
      w-full py-4 bg-black text-white rounded-full
      font-medium tracking-wide
      hover:bg-gray-900 transition
    "
  >
    Send Message
  </button>

  {/* TRUST LINE */}
  <p className="text-center text-sm text-gray-400 mt-4">
    We usually respond within 24 hours
  </p>
</div>

        {/* INFO */}
<div className="space-y-6">

  {/* MADE IN INDIA CARD */}
  <div className="bg-black text-white p-8 rounded-3xl shadow-xl animate-[float_4s_ease-in-out_infinite]">
    <h3 className="text-2xl font-semibold mb-2">
      Made in India 🇮🇳
    </h3>
    <p className="text-gray-300 leading-relaxed">
      Handcrafted with love, patience, and traditional artistry.
      Every creation carries warmth and meaning.
    </p>

    {/* TRUST BADGE */}
    <div className="mt-4 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full w-fit">
      <ShieldCheck size={18} className="text-green-400" />
      <span className="text-sm">Response within 24 hrs</span>
    </div>
  </div>

  {/* INSTAGRAM */}
  <a
    href="https://instagram.com/soukoclaystudio"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-6 rounded-2xl shadow flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <Instagram className="text-pink-600" />
    <div>
      <p className="text-sm text-gray-500">Instagram</p>
      <p className="font-semibold">@soukoclaystudio</p>
    </div>
  </a>

  {/* EMAIL */}
  <a
    href="mailto:claywork@gmail.com"
    className="bg-white p-6 rounded-2xl shadow flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <Mail className="text-blue-600" />
    <div>
      <p className="text-sm text-gray-500">Email</p>
      <p className="font-semibold">claywork@gmail.com</p>
    </div>
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/917010191968"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-6 rounded-2xl shadow flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <Phone className="text-green-600" />
    <div>
      <p className="text-sm text-gray-500">
        Custom Orders & Workshops
      </p>
      <p className="font-semibold">+91 7010191968</p>
    </div>
  </a>

</div>
      </div>
    </section>
  )
}
