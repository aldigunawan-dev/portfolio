import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold text-white">
            Aldi<span className="text-blue-400">.</span>
          </span>
          <p className="text-gray-600 text-sm">
            © 2025 M. Aldi Gunawan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}