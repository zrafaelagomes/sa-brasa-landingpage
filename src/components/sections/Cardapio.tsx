export default function Cardapio() {
  const pratos: {
    emoji: string;
    cat: string;
    nome: string;
    desc: string;
    preco: string;
  }[] = [
    {
      emoji: "🥩",
      cat: "Carnes",
      nome: "Picanha na Brasa",
      desc: "Corte especial, sal grosso e alho negro. Servido com farofa crocante.",
      preco: "R$ 89,90",
    },
    {
      emoji: "🦐",
      cat: "Frutos do Mar",
      nome: "Camarão ao Alho",
      desc: "Camarão GG salteado na manteiga com alho confitado e ervas frescas.",
      preco: "R$ 74,90",
    },
    {
      emoji: "🍷",
      cat: "Harmonização",
      nome: "Seleção de Vinhos",
      desc: "Curadoria de rótulos nacionais e importados para cada prato.",
      preco: "a partir R$ 45",
    },
  ];

  return (
    <section
      id="cardapio"
      className="py-24 md:py-32 px-6 md:px-14 bg-ink-900"
    >
      
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
        <div>
          <p className="reveal text-ember text-xs tracking-[3px] uppercase mb-3">
            Destaques do cardápio
          </p>

          <h2 className="reveal font-display text-4xl md:text-5xl text-sand">
            Escolhas do <em className="text-gold italic">Chef</em>
          </h2>
        </div>

        <a
          href="#"
          className="reveal text-sand/40 text-xs tracking-widest uppercase border-b border-sand/20 pb-1 hover:text-ember hover:border-ember transition-all self-start md:self-auto"
        >
          Ver cardápio completo →
        </a>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
        {pratos.map((item, i) => (
          <div
            key={item.nome}
            className={`reveal d${i + 1} bg-ink-800 p-10 relative overflow-hidden group hover:bg-ink-900/50 transition-colors duration-300`}
          >
           
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-ember scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

           
            <div className="text-5xl mb-6">{item.emoji}</div>

            
            <p className="text-ember text-xs tracking-[2px] uppercase mb-2">
              {item.cat}
            </p>

            
            <h3 className="font-display text-2xl text-sand mb-3">
              {item.nome}
            </h3>

           
            <p className="text-sand/40 text-sm font-light leading-relaxed mb-6">
              {item.desc}
            </p>

            
            <div className="font-display text-2xl text-gold">
              {item.preco}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}