const SERVICES = [
  {
    icon: "🖥️",
    title: "Landing Page & Company Profile",
    desc: "Pembuatan website modern menggunakan React.js — cocok untuk UMKM, portofolio personal, atau bisnis yang ingin hadir secara online.",
    tags: ["React.js", "Tailwind CSS", "Responsive"],
  },
  {
    icon: "🚀",
    title: "Deploy & Hosting Website",
    desc: "Setup deployment ke VPS atau Vercel, konfigurasi domain, SSL, Nginx, dan Cloudflare CDN untuk performa dan keamanan optimal.",
    tags: ["VPS", "Vercel", "Cloudflare", "SSL"],
  },
  {
    icon: "🛠️",
    title: "Kelola & Setup Server VPS",
    desc: "Instalasi, konfigurasi, dan maintenance server Linux. Cocok untuk bisnis yang butuh infrastruktur handal tanpa harus punya IT staff sendiri.",
    tags: ["Linux", "Docker", "Monitoring", "Backup"],
  },
  {
    icon: "🎮",
    title: "Minecraft Server Setup",
    desc: "Setup server Minecraft siap pakai untuk komunitas, content creator, atau event. Termasuk plugin, optimasi performa, dan maintenance.",
    tags: ["Paper/Purpur", "Plugin", "Optimasi", "Support"],
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-blue-400 text-sm font-medium mb-2 tracking-widest uppercase">
          Layanan
        </p>
        <h2 className="text-3xl font-bold text-white mb-12">
          Apa yang Saya Tawarkan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}