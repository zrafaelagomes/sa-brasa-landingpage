import { useState } from "react";
import type { ChangeEvent } from "react";

type FormType = {
  nome: string;
  tel: string;
  data: string;
  pessoas: string;
};

export default function Reserva() {
  const [form, setForm] = useState<FormType>({
    nome: "",
    tel: "",
    data: "",
    pessoas: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!form.nome || !form.tel) {
      alert("Por favor, preencha nome e WhatsApp.");
      return;
    }

    alert(
      `Reserva recebida para ${form.nome}! Entraremos em contato pelo WhatsApp.`
    );
  };

  const inputCls =
    "bg-white/5 border border-white/10 text-sand placeholder-sand/25 px-5 py-4 text-sm w-full focus:outline-none focus:border-ember/60 focus:bg-ember/5 transition-all duration-200";

  return (
    <section
      id="reserva"
      className="py-24 md:py-32 px-6 md:px-14 bg-gradient-to-br from-ink-700 to-ink-600 grid md:grid-cols-2 gap-16 md:gap-24 items-center"
    >
      {/* TEXTO */}
      <div className="reveal">
        <h2 className="font-display text-4xl md:text-5xl text-sand leading-tight mb-6">
          Reserve sua <em className="text-ember italic">mesa</em> agora
        </h2>

        <p className="text-sand/85 font-light text-sm leading-relaxed">
          Atendemos de terça a domingo, das 18h às 23h30. Grupos acima de 8
          pessoas, entre em contato pelo WhatsApp.
        </p>
      </div>

      {/* FORM */}
      <div className="reveal flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className={inputCls}
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
          />

          <input
            className={inputCls}
            name="tel"
            placeholder="WhatsApp"
            value={form.tel}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className={inputCls}
            type="date"
            name="data"
            value={form.data}
            onChange={handleChange}
          />

          <select
            className={inputCls}
            name="pessoas"
            value={form.pessoas}
            onChange={handleChange}
          >
            <option value="" disabled>
              Número de pessoas
            </option>

            {[
              "1–2 pessoas",
              "3–4 pessoas",
              "5–6 pessoas",
              "7–8 pessoas",
            ].map((opt) => (
              <option key={opt} className="bg-ink-900">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-ember text-ink-900 py-5 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:-translate-y-0.5 transition-all duration-300"
        >
          Confirmar Reserva
        </button>
      </div>
    </section>
  );
}