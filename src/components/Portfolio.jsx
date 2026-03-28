const PORTFOLIO = [
  {
  title: "PT Permata Kencana Raya",
  type: "Freelance Project",
  desc: "Pengembangan website company profile berdasarkan desain yang diberikan klien. Membangun komponen responsif dan berkolaborasi dengan tim desain & engineering untuk deployment.",
  tags: ["React.js", "Chakra UI", "Company Profile", "Responsive"],
  bgColor: "bg-sky-950",
  borderColor: "border-sky-800",
  badgeColor: "bg-sky-800 text-sky-200",
  link: null,
  },
  {
    title: "DestariaMC",
    type: "Infrastructure Project",
    desc: "Server Minecraft komunitas dengan 1.400+ member aktif. Dikelola penuh di Oracle Cloud VPS dengan Docker, Nginx, Cloudflare CDN/WAF, SSL, dan automated backup.",
    tags: ["Oracle Cloud", "Docker", "Nginx", "Cloudflare"],
    bgColor: "bg-blue-950",
    borderColor: "border-blue-800",
    badgeColor: "bg-blue-800 text-blue-200",
    link: null,
  },
  {
    title: "GabutSMP",
    type: "Client Project",
    desc: "Server Minecraft komersial berbasis Purpur/Paper fork. Termasuk dokumentasi lengkap: konfigurasi server, 19 datapack, 29 plugin, dan optimasi performa.",
    tags: ["Purpur", "Paper", "Plugin Management", "Dokumentasi"],
    bgColor: "bg-emerald-950",
    borderColor: "border-emerald-800",
    badgeColor: "bg-emerald-800 text-emerald-200",
    link: null,
  },
  {
    title: "Email Secure",
    type: "Collaboration Project",
    desc: "Aplikasi demo pengamanan pesan email menggunakan enkripsi dan steganografi. Kolaborasi untuk tugas akhir, dengan Firebase sebagai backend.",
    tags: ["React.js", "Firebase", "Chakra UI", "Enkripsi"],
    bgColor: "bg-violet-950",
    borderColor: "border-violet-800",
    badgeColor: "bg-violet-800 text-violet-200",
    link: "https://github.com/kokkio/tugas-akhir1",
  },
  {
    title: "Jifoam",
    type: "Collaboration Project",
    desc: "Website informational untuk pengujian foam. Dibuat sebagai kolaborasi proyek tugas akhir dengan tampilan yang clean dan informatif.",
    tags: ["React.js", "Chakra UI", "Informational"],
    bgColor: "bg-orange-950",
    borderColor: "border-orange-800",
    badgeColor: "bg-orange-800 text-orange-200",
    link: "https://github.com/aldigunawan-dev/jifoam",
  },
  {
    title: "HPMU",
    type: "Personal Project",
    desc: "Aplikasi mobile sederhana yang menampilkan data dan informasi smartphone. Dibangun menggunakan React Native dan dapat dikompilasi sebagai APK.",
    tags: ["React Native", "Chakra UI", "Mobile App"],
    bgColor: "bg-rose-950",
    borderColor: "border-rose-800",
    badgeColor: "bg-rose-800 text-rose-200",
    link: null,
  },
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="py-24 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-blue-400 text-sm font-medium mb-2 tracking-widest uppercase">
          Portofolio
        </p>
        <h2 className="text-3xl font-bold text-white mb-12">
          Project yang Pernah Dikerjakan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO.map((p) => (
            <div
              key={p.title}
              className={`border rounded-xl p-6 ${p.bgColor} ${p.borderColor}`}
            >
              {/* Badge tipe project */}
              <span className={`text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block ${p.badgeColor}`}>
                {p.type}
              </span>

              {/* Nama project */}
              <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>

              {/* Deskripsi */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-black/30 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tombol GitHub — hanya muncul kalau ada link */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-3 py-2 rounded-lg transition-colors"
                >
                  GitHub →
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}