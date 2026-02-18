import aboutImg from "../assets/p2.jpeg"; // adjust path if needed

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-gray-50 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT SIDE - IMAGE */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Handcrafted Clay Art"
            className="rounded-3xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div>
          {/* HEADER */}
          <h2 className="text-4xl md:text-5xl font-semibold text-black">
            About Us
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We create handcrafted clay art using traditional techniques,
            blending creativity with nature. Every piece is made with care,
            patience, and attention to detail.
          </p>

          {/* CARDS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                100% Handmade
              </h3>
              <p className="text-gray-600">
                Made from natural clay, shaped fully by hand with love and skill.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Fully Customizable
              </h3>
              <p className="text-gray-600">
                Personalized clay toys, wall decor, and gifts made your way.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition sm:col-span-2">
              <h3 className="text-xl font-semibold mb-3">
                Toys, Decor & Keychains
              </h3>
              <p className="text-gray-600">
                Perfect for gifts, home decor, and memorable keepsakes.
              </p>
            </div>

          </div>

          {/* BOTTOM TEXT */}
          <p className="mt-8 text-gray-700 text-lg">
            Each product tells a story — crafted slowly, inspired by nature,
            and designed to bring warmth into your space.
          </p>
        </div>
      </div>
    </section>
  );
}
