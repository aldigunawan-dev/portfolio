// Data skill dipisah di luar komponen
// Kalau mau tambah kategori atau skill, edit di sini saja
const SKILLS = [
  { category: "Frontend", items: ["React.js", "JavaScript", "HTML & CSS", "Tailwind CSS"] },
  { category: "Infrastructure", items: ["Linux (Ubuntu)", "Nginx", "Docker", "Cloudflare"] },
  { category: "DevOps & Cloud", items: ["Oracle Cloud", "CI/CD Pipeline", "Kubernetes", "OpenShift"] },
  { category: "Tools", items: ["Git & GitHub", "SSL/TLS", "DNS Management", "Automated Backup"] },
];

export default function Skills() {
  return (
    // id="keahlian" → target scroll dari navbar
    // border-t      → garis pemisah dari section sebelumnya
    <section id="keahlian" className="py-24 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        {/* Label kecil — sama polanya seperti di Hero */}
        <p className="text-blue-400 text-sm font-medium mb-2 tracking-widest uppercase">
          Keahlian
        </p>

        {/* Heading section */}
        <h2 className="text-3xl font-bold text-white mb-12">
          Tech Stack
        </h2>

        {/* Grid 4 kolom — 1 kolom di mobile, 2 di tablet, 4 di desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((group) => (

            // Card per kategori
            <div
              key={group.category}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5"
            >
              {/* Judul kategori */}
              <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-4">
                {group.category}
              </p>

              {/* List skill — flex column, gap antar item */}
              <div className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-gray-200 text-sm">
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Card sertifikasi — di luar grid, full width */}
        <div className="mt-8 p-5 bg-gray-900 border border-gray-800 rounded-xl">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-3">
            Sertifikasi
          </p>
          <p className="text-gray-200 text-sm">
            IBM Applied DevOps Engineering Professional Certificate
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Docker · Kubernetes · CI/CD · OpenShift · Monitoring & Observability
          </p>
        </div>

      </div>
    </section>
  );
}