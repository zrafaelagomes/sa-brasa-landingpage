export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-28 pt-28 pb-16 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(232,98,42,0.14)_0%,transparent_60%)] pointer-events-none animate-ember-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(201,149,74,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 grain pointer-events-none opacity-60" />

      
      <div className="relative z-10 max-w-3xl">
        
        <div className="flex items-center gap-5 mb-8">
          <div className="w-14 h-px bg-ember" />
          <span className="text-ember text-xs tracking-[4px] uppercase font-light">
            Cozinha ao vivo · Petrolina–PE
          </span>
        </div>

    
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-sand mb-8">
          O sabor que
          <br />
          <span className="italic text-gold font-normal">
            fica na memória
          </span>
        </h1>

    
        <p className="text-sand/55 text-lg font-light leading-relaxed max-w-md mb-12">
          Carnes nobres na brasa, ingredientes selecionados e uma experiência
          gastronômica que vai além do prato. Reserve sua mesa e venha descobrir.
        </p>


        <div className="flex flex-wrap gap-5 items-center">
          <a
            href="#reserva"
            className="bg-ember text-ink-900 px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:-translate-y-0.5 transition-all duration-300"
          >
            Reservar Mesa
          </a>

          <a
            href="#cardapio"
            className="text-sand/60 text-sm tracking-widest uppercase hover:text-sand hover:gap-6 flex items-center gap-4 transition-all duration-300"
          >
            Ver Cardápio <span>→</span>
          </a>
        </div>
      </div>


      <div className="absolute bottom-10 left-6 md:left-20 flex items-center gap-3 text-sand/30 text-xs tracking-[3px] uppercase z-10">
        <div className="w-px h-16 bg-gradient-to-b from-ember to-transparent animate-scroll-pulse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}