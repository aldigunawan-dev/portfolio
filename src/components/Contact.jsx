const CONTACTS = [
  {
    label: "WhatsApp",
    value: "+62818141001",
    href: "https://wa.me/62818141001",
    icon: "💬",
  },
  {
    label: "Telegram",
    value: "+62818141001",
    href: "https://t.me/+62818141001",
    icon: "📨",
  },
  {
    label: "Email",
    value: "didinawan003@gmail.com",
    href: "mailto:didinawan003@gmail.com",
    icon: "📧",
  },
  {
    label: "LinkedIn",
    value: "didinawan",
    href: "https://linkedin.com/in/didinawan",
    icon: "💼",
  },
];

export default function Contact() {
  return (
    <section id="kontak" className="py-24 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-blue-400 text-sm font-medium mb-2 tracking-widest uppercase">
          Kontak
        </p>
        <h2 className="text-3xl font-bold text-white mb-4">
          Mari Bekerja Sama
        </h2>
        <p className="text-gray-400 mb-12 max-w-lg">
          Punya project atau butuh bantuan teknis? Jangan ragu untuk
          menghubungi saya melalui salah satu channel di bawah.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-900 border border-gray-800 hover:border-gray-600 rounded-xl p-5 transition-colors group"
            >
              <span className="text-2xl">{c.icon}</span>
              <div>
                <p className="text-gray-400 text-xs mb-1">{c.label}</p>
                <p className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}