import { useState } from "react";

// Daftar menu — kalau mau tambah/kurangi menu, edit di sini saja
const NAV_LINKS = [ "Keahlian", "Layanan", "Portofolio", "Kontak"];

export default function Navbar() {
  // State untuk buka/tutup menu mobile (hamburger)
  const [menuOpen, setMenuOpen] = useState(false);

  // Fungsi scroll halus ke setiap section
  // id = nama section yang dituju, misal "tentang", "keahlian"
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // tutup menu setelah klik
  };

  return (
    // fixed        → navbar nempel di atas saat scroll
    // top-0 left-0 right-0 → posisi full width di atas
    // z-50         → layer paling depan (tidak ketutup elemen lain)
    // backdrop-blur → efek blur background
    // border-b     → garis bawah tipis
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">

      {/* Baris utama navbar */}
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo / nama */}
        <span className="font-bold text-white text-lg">
          Destaria<span className="text-blue-400">Dev</span>
        </span>

        {/* Menu desktop — hidden di mobile, flex di md ke atas */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Tombol hamburger — hanya muncul di mobile */}
        <button
          className="md:hidden text-gray-400 hover:text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Menu mobile — muncul saat hamburger diklik */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="text-sm text-gray-400 hover:text-white text-left transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}

    </nav>
  );
}