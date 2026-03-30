export default function Sobre() {
  const nums: { val: string; label: string }[] = [
    { val: "15+", label: "anos de história" },
    { val: "40k", label: "pratos servidos" },
    { val: "4.9★", label: "avaliação média" },
  ];

  return (
    <section id="sobre" className="grid md:grid-cols-2 min-h-[65vh]">
      
      <div className="bg-gradient-to-br from-ink-600 to-ink-700 flex items-center justify-center relative overflow-hidden min-h-[280px]">
        <div className="absolute inset-5 border border-gold/15 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,98,42,0.12),transparent_65%)]" />

        
        <svg
          viewBox="0 0 320 320"
          className="w-56 h-56 md:w-72 md:h-72 relative z-10"
          fill="none"
        >
          <ellipse cx="160" cy="230" rx="120" ry="18" fill="#1a0a04" opacity="0.6"/>
          <ellipse cx="160" cy="220" rx="112" ry="14" fill="#3b1f0e" opacity="0.8"/>
          <ellipse cx="160" cy="216" rx="108" ry="12" fill="#2a1208"/>

          <ellipse cx="160" cy="195" rx="88" ry="42" fill="#5c1f0f"/>
          <ellipse cx="160" cy="190" rx="82" ry="38" fill="#7a2810"/>

          <path d="M100 175 Q130 168 160 172 Q190 168 220 175" stroke="#9b3515" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
          <path d="M95 185 Q127 178 160 182 Q193 178 225 185" stroke="#9b3515" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>

          <ellipse cx="160" cy="175" rx="78" ry="28" fill="#c9954a" opacity="0.25"/>

          <ellipse cx="128" cy="168" rx="10" ry="5" fill="#2d6a2a" opacity="0.9" transform="rotate(-20 128 168)"/>
          <ellipse cx="192" cy="170" rx="8" ry="4" fill="#2d6a2a" opacity="0.9" transform="rotate(15 192 170)"/>

          <circle cx="145" cy="167" r="2" fill="white" opacity="0.6"/>
          <circle cx="172" cy="165" r="1.5" fill="white" opacity="0.5"/>
        </svg>

        {/* LABEL */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          <div className="w-8 h-px bg-gold/50" />
          <span className="text-gold/60 text-[10px] tracking-[3px] uppercase">
            Carne na Brasa
          </span>
          <div className="w-8 h-px bg-gold/50" />
        </div>
      </div>

      {/* LADO TEXTO */}
      <div className="bg-ink-800 px-8 md:px-14 py-16 md:py-20 flex flex-col justify-center">
        <p className="reveal text-ember text-xs tracking-[3px] uppercase mb-5">
          Nossa história
        </p>

        <h2 className="reveal font-display text-3xl md:text-4xl text-sand leading-tight mb-6">
          Tradição e fogo <em className="text-gold italic">vivo</em> desde 2009
        </h2>

        <p className="reveal text-sand/50 font-light text-sm leading-relaxed mb-4">
          O Brasa & Sal nasceu da paixão de dois irmãos por cozinha de brasa
          autêntica. Em mais de 15 anos, construímos um espaço onde cada prato é
          preparado na hora, com cortes nobres e temperos da nossa terra.
        </p>

        <p className="reveal text-sand/50 font-light text-sm leading-relaxed">
          Nosso chef traz técnicas da cozinha contemporânea para valorizar
          o melhor da culinária nordestina e internacional.
        </p>

        {/* STATS */}
        <div className="reveal mt-10 pt-10 border-t border-white/10 grid grid-cols-3 gap-4">
          {nums.map((item) => (
            <div key={item.val}>
              <strong className="block font-display text-2xl md:text-3xl text-ember">
                {item.val}
              </strong>
              <span className="text-sand/35 text-xs uppercase tracking-wider mt-1 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}