export default function Contact() {
  return (
    <section className="py-24 bg-gray-50 px-10">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        {/* FORM */}
       
        <div className="bg-white p-8 rounded-2xl shadow border border-gray-200">
          <h1 className="text-xl text-gray-500 font-medium mb-4">Get in Touch</h1>
          <input
            placeholder="Full Name"
            className="w-full mb-4 p-3 border rounded-lg"
          />
          <input
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="w-full mb-4 p-3 border rounded-lg h-32"
          />
          <button className="w-full py-3 bg-black text-white rounded-full">
            Send Message
          </button>
        </div>

        {/* INFO */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            📧 claywork@gmail.com
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            📞 +91 98765 43210
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            📍 Handmade Clay Studio, India
          </div>
        </div>

      </div>
    </section>
  )
}
