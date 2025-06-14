"use client";
import Image from "next/image";
import CountdownTimer from "./components/CountdownTimer";
import Header from "./components/Header";
import { motion } from "framer-motion";
import AOSInitializer from "./components/AOSInitializer";
import PremiosCarousel from "./components/PremiosCarousel";
import { useEffect, useState } from "react";

export default function Home() {
  // Fecha objetivo para el sorteo (aproximadamente un mes en el futuro)
  const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

  const [sold, setSold] = useState(0);
  const [total, setTotal] = useState(1000);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const s = localStorage.getItem("ticketsSold");
      setSold(s ? Number(s) : 0);
      const t = localStorage.getItem("totalTickets");
      setTotal(t ? Number(t) : 1000);
    }
  }, []);

  const percent = total > 0 ? Math.min(100, (sold / total) * 100) : 0;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <AOSInitializer />
      <Header logoSrc="/WhatsApp_Image_2025-06-12_at_13.16.59_405f9a84-removebg-preview.png" />
      {/* Hero Section */}
      <section id="inicio" className="relative flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-12 bg-gradient-to-b from-black via-[#1a0900] to-black overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-30 bg-[url('/bandera-cuadros.png')] bg-center bg-cover pointer-events-none" />
        {/* Logo grande */}
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-6 drop-shadow-2xl" data-aos="zoom-in">
            <Image src="/WhatsApp_Image_2025-06-12_at_13.16.59_405f9a84-removebg-preview.png" alt="Gastromotor Sorteos" width={400} height={200} className="object-contain" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl mb-4 font-montserrat tracking-tight leading-tight" data-aos="fade-up" style={{textShadow: '0 4px 24px #000a'}}>¡Gana el auto de tus sueños!</h1>
          <p className="text-xl md:text-2xl text-white text-center mb-8 max-w-2xl" data-aos="fade-up" data-aos-delay="200">Participa en el sorteo de una Toyota Fortuner 4x4, una Yamaha MT03 y premios en efectivo. ¡No dejes pasar tu oportunidad!</p>
          <motion.a
            href="#premios"
            className="btn-primary font-bold py-4 px-10 rounded-full text-2xl shadow-xl hover:scale-105 transition-transform"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Ver Sorteo Actual
          </motion.a>
        </motion.div>
      </section>

      {/* Premios Destacados */}
      <section id="premios" className="container mx-auto py-16 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12 font-montserrat" data-aos="fade-up">Premios Destacados</h2>
        <PremiosCarousel />
      </section>

      {/* Barra de progreso de boletas vendidas */}
      <section className="container mx-auto py-12 px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold text-center mb-4 font-montserrat">¡CANTIDADES LIMITADAS!</h2>
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative w-full bg-gray-200 rounded-xl overflow-hidden h-10 mb-2 shadow-lg">
            {/* Barra llena con gradiente animado y borde rojo */}
            <div
              className="absolute left-0 top-0 h-full rounded-xl border-2 border-red-600 shadow-lg transition-all duration-1000 ease-in-out"
              style={{
                width: `${percent}%`,
                background: 'linear-gradient(90deg, #e50000 0%, #a30000 60%, #181818 100%)',
                boxShadow: '0 4px 24px 0 rgba(229,0,0,0.18)'
              }}
            ></div>
            {/* Texto centrado */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white font-bold text-lg drop-shadow-lg">
                Números Vendidos: {sold} de {total} ({percent.toFixed(2)}%)
              </span>
            </div>
          </div>
          <p className="text-center text-gray-300 mt-2 max-w-2xl mx-auto">El auto y las motos se jugarán una vez vendida la totalidad de los números, es decir, cuando la barra de progreso llegue al 100%. Se hará tomando los 5 números de la primera, segunda y tercera suerte de la suertuda (programa de la lot nacional).</p>
        </div>
      </section>

      {/* Cómo Participar */}
      <section id="como-participar" className="container mx-auto py-16 px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10 text-white font-montserrat">¿Cómo participar?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Paso 1 */}
          <motion.div className="flex flex-col items-center bg-black bg-opacity-80 p-6 rounded-xl border-2 border-red-600 w-full md:w-1/3" whileHover={{ scale: 1.05, boxShadow: "0 0 24px 0 #ff8a00aa" }} data-aos="fade-up">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-black">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Selecciona tu número</h3>
            <p className="text-white text-center">Escoge tu número de la suerte entre los disponibles.</p>
          </motion.div>
          {/* Flecha */}
          <div className="hidden md:block text-5xl text-white">→</div>
          {/* Paso 2 */}
          <motion.div className="flex flex-col items-center bg-black bg-opacity-80 p-6 rounded-xl border-2 border-red-600 w-full md:w-1/3" whileHover={{ scale: 1.05, boxShadow: "0 0 24px 0 #ff8a00aa" }} data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-black">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Realiza el pago</h3>
            <p className="text-white text-center">Paga de forma segura mediante nuestras opciones disponibles.</p>
          </motion.div>
          {/* Flecha */}
          <div className="hidden md:block text-5xl text-white">→</div>
          {/* Paso 3 */}
          <motion.div className="flex flex-col items-center bg-black bg-opacity-80 p-6 rounded-xl border-2 border-red-600 w-full md:w-1/3" whileHover={{ scale: 1.05, boxShadow: "0 0 24px 0 #ff8a00aa" }} data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-black">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Espera el sorteo</h3>
            <p className="text-white text-center">Sigue el sorteo en vivo y comprueba si eres el ganador.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-8 border-t-2 border-red-600 mt-12" data-aos="fade-up">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Image src="/WhatsApp_Image_2025-06-12_at_13.16.59_405f9a84-removebg-preview.png" alt="Gastromotor Sorteos" width={100} height={50} className="object-contain" />
            <span className="text-lg font-bold logo-text">Gastromotor Sorteos</span>
          </div>
          <div className="flex gap-6 text-2xl">
            <a href="#" className="text-red-400 hover:text-red-600 transition-colors"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-red-400 hover:text-red-600 transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-red-400 hover:text-red-600 transition-colors"><i className="fab fa-whatsapp"></i></a>
          </div>
          <div className="text-white text-center md:text-right">
            © 2024 Gastromotor Sorteos. Todos los derechos reservados.<br />
            <span className="text-xs text-gray-500">Sitio web profesional de rifas</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
