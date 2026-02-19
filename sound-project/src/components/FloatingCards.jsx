import aboutImg from "../assets/p2.jpeg" // adjust path if needed

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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE - IMAGE */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Clay Art Gift Box"
            className="w-full max-w-md rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div>
          {/* HEADER */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-black">
              What We Do
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Crafted with care, creativity, and passion.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-3xl p-8
                  shadow-sm 
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
        </div>

      </div>
    </section>
  )
}
