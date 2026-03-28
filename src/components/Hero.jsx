// src/components/Hero.jsx

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">
          Available for freelance
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          M. Aldi Gunawan
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-4">
          IT Infrastructure & Frontend Developer
        </p>
        <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
          Saya membantu bisnis hadir secara digital — dari membangun
          website modern dengan React.js hingga mengelola infrastruktur
          server yang handal dan aman.
        </p>
        <div className="flex flex-wrap gap-4">

          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
            Hubungi Saya
          </button>
          <button className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors">
            Lihat Portofolio
          </button>

        </div>
      </div>
    </section>
  );
}