export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-gray-50 px-6"
    >
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-black">
          About Us
        </h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          We create handcrafted clay art using traditional techniques,
          blending creativity with nature. Every piece is made with care,
          patience, and attention to detail.
        </p>
      </div>

      {/* CARDS */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* CARD 1 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
          <h3 className="text-xl font-semibold mb-4">
            100% Handmade Clay Art
          </h3>
          <p className="text-gray-600 leading-relaxed">
            All our products are made from natural clay, shaped and crafted
            by hand. No machines — just pure craftsmanship and creativity.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
          <h3 className="text-xl font-semibold mb-4">
            Fully Customizable
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Want a custom design? We personalize clay toys, wall decor,
            and keychains based on your ideas, themes, and preferences.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
          <h3 className="text-xl font-semibold mb-4">
            Toys, Decor & Keychains
          </h3>
          <p className="text-gray-600 leading-relaxed">
            From artistic clay toys to elegant wall decor and cute keychains,
            our creations are perfect for gifts, homes, and personal use.
          </p>
        </div>

      </div>

      {/* BOTTOM TEXT */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg">
          Each product tells a story — crafted slowly, inspired by nature,
          and designed to bring warmth and uniqueness into your space.
        </p>
      </div>
    </section>
  )
}
