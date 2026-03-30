import { useState } from "react";
import useNavScroll from "../../hooks/useNavScroll";

export default function Navbar() {
  const scrolled = useNavScroll();
  const [open, setOpen] = useState<boolean>(false);

  const links: [string, string][] = [
    ["Nossa História", "#sobre"],
    ["Cardápio", "#cardapio"],
    ["Reservas", "#reserva"],
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-14 flex items-center justify-between ${
        scrolled
          ? "bg-ink-900/95 backdrop-blur-md py-4 border-b border-white/5"
          : "py-7 bg-transparent"
      }`}
    >
      {/* LOGO */}
      <div className="font-display text-xl font-bold text-sand">
        Brasa <span className="text-ember italic">&</span> Sal
      </div>

      {/* MENU DESKTOP */}
      <ul className="hidden md:flex gap-9 list-none text-sand/55 text-xs tracking-widest uppercase">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="hover:text-ember transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#reserva"
            className="border border-ember text-ember px-6 py-2 hover:bg-ember hover:text-ink-900 transition-all duration-300"
          >
            Reservar Mesa
          </a>
        </li>
      </ul>

      {/* BOTÃO MOBILE */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 flex flex-col gap-1.5"
      >
        <span
          className={`block w-6 h-px bg-sand transition-all duration-300 ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block w-6 h-px bg-sand transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-px bg-sand transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* MENU MOBILE */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-ink-900/98 border-t border-white/5 flex flex-col md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-sand/60 text-xs tracking-widest uppercase border-b border-white/5 hover:text-ember hover:bg-white/5 transition-colors"
            >
              {label}
            </a>
          ))}

          <div className="p-4">
            <a
              href="#reserva"
              onClick={() => setOpen(false)}
              className="block w-full text-center border border-ember text-ember py-3 text-xs tracking-widest uppercase hover:bg-ember hover:text-ink-900 transition-all"
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}