export default function Class() {
  const classes = [
    {
      title: "Beginner Clay Class",
      desc: "Learn basic clay handling, shaping, and simple handmade toys.",
      duration: "2 Weeks",
      level: "Beginner",
    },
    {
      title: "Clay Toys Workshop",
      desc: "Create cute clay toys and collectible figurines by hand.",
      duration: "3 Weeks",
      level: "Intermediate",
    },
    {
      title: "Keychain Making",
      desc: "Design and customize clay keychains with colors and textures.",
      duration: "1 Week",
      level: "All Levels",
    },
    {
      title: "Advanced Sculpting",
      desc: "Detailed sculpting techniques for premium clay artworks.",
      duration: "4 Weeks",
      level: "Advanced",
    },
  ]

  return (
    <section className="py-28 px-6 bg-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Clay Classes
        </h2>
        <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
          We conduct hands-on clay classes where you learn to create toys,
          keychains, and custom handmade artworks from scratch.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {classes.map((item, index) => (
          <div
            key={index}
            className={`
              relative p-10 bg-gray-50 
              rounded-[3rem]
              shadow-lg
              transition-all duration-500
              hover:-translate-y-3 hover:shadow-2xl
              ${index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}
            `}
          >
            {/* Clay blob decoration */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-black/5 rounded-full"></div>

            <h3 className="text-2xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              {item.desc}
            </p>

            <div className="flex gap-6 text-sm text-gray-700">
              <span className="px-4 py-1 rounded-full bg-white shadow">
                ⏱ {item.duration}
              </span>
              <span className="px-4 py-1 rounded-full bg-white shadow">
                🎯 {item.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
