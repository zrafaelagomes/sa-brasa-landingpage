import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Sobre from "./components/sections/Sobre";
import Cardapio from "./components/sections/Cardapio";
import Reserva from "./components/sections/Reserva";

import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Cardapio />
      <Reserva />
      <Footer />
    </>
  );
}

export default App;