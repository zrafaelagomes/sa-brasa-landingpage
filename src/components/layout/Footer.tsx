export default function Footer() {
  const links = ["Instagram", "WhatsApp", "Localização"];

  return (
    <footer className="bg-ink-800 border-t border-white/5 px-6 md:px-14 py-10 flex flex-col md:flex-row justify-between items-center gap-5 text-sand/30 text-xs">
      {/* LOGO */}
      <div className="font-display text-lg text-sand">
        Brasa <em className="text-ember italic">&</em> Sal
      </div>

      {/* COPYRIGHT */}
      <p>© 2025 · Todos os direitos reservados</p>

      {/* LINKS */}
      <div className="flex gap-6">
        {links.map((item) => (
          <a
            key={item}
            href="#"
            className="hover:text-ember transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}