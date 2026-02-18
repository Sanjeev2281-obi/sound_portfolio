export default function FloatingCards() {
  const cards = [
    {
      title: "Handmade Clay Art",
      desc: "Every product is crafted by hand using natural clay, following traditional techniques with modern design sense.",
    },
    {
      title: "Customizable Designs",
      desc: "We create clay toys, wall decor, and keychains customized to your ideas, themes, and requirements.",
    },
    {
      title: "Workshops & Classes",
      desc: "We conduct hands-on workshops and classes for schools, events, and private groups.",
    },
  ]

  return (
    <section className="py-28 px-6 bg-gray-50">
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-black">
          What We Do
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Crafted with care, creativity, and passion.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              bg-white rounded-3xl p-8
              shadow-sm border border-gray-200
              transition-all duration-500 ease-out
              hover:-translate-y-3 hover:shadow-2xl
            "
          >
            <h3 className="text-xl font-semibold mb-4">
              {card.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
