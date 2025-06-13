"use client";
import Image from "next/image";
import CountdownTimer from "./components/CountdownTimer";
import Header from "./components/Header";
import { motion } from "framer-motion";
import AOSInitializer from "./components/AOSInitializer";

export default function Home() {
  // Fecha objetivo para el sorteo (aproximadamente un mes en el futuro)
  const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

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
            Ver Premios
          </motion.a>
        </motion.div>
      </section>

      {/* Premios Destacados */}
      <section id="premios" className="container mx-auto py-16 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-center logo-text mb-12" data-aos="fade-up">Premios Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Premio 1 */}
          <motion.div
            className="card-gastromotor p-6 rounded-xl flex flex-col items-center"
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px 0 #ffc40055" }}
            data-aos="zoom-in"
          >
            <div className="w-full flex justify-center mb-4">
              <Image src="/premio-auto.png" alt="Toyota Fortuner" width={220} height={120} className="rounded-lg shadow-lg object-contain bg-black" />
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-2">Toyota Fortuner 4x4</h3>
            <span className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white font-bold px-3 py-1 rounded-full mb-2 text-sm">Gran Premio</span>
            <p className="text-center text-gray-200">Vehículo 0 km, completamente equipado y listo para ti.</p>
          </motion.div>
          {/* Premio 2 */}
          <motion.div
            className="card-gastromotor p-6 rounded-xl flex flex-col items-center"
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px 0 #ffc40055" }}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="w-full flex justify-center mb-4">
              <Image src="/premio-moto.png" alt="Yamaha MT03" width={220} height={120} className="rounded-lg shadow-lg object-contain bg-black" />
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-2">Yamaha MT03</h3>
            <span className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white font-bold px-3 py-1 rounded-full mb-2 text-sm">Segundo Premio</span>
            <p className="text-center text-gray-200">Motocicleta 0 km, última generación, lista para la aventura.</p>
          </motion.div>
          {/* Premio 3 */}
          <motion.div
            className="card-gastromotor p-6 rounded-xl flex flex-col items-center"
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px 0 #ffc40055" }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="w-full flex justify-center mb-4">
              <Image src="/premio-efectivo.png" alt="Premios en efectivo" width={220} height={120} className="rounded-lg shadow-lg object-contain bg-black" />
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-2">Premios en Efectivo</h3>
            <span className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white font-bold px-3 py-1 rounded-full mb-2 text-sm">Adicionales</span>
            <p className="text-center text-gray-200">Varios premios en efectivo para los afortunados ganadores.</p>
          </motion.div>
        </div>
      </section>

      {/* Contador de Sorteo */}
      <section className="container mx-auto py-12 px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 logo-text">Tiempo restante para el sorteo</h2>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <CountdownTimer targetDate={targetDate} />
        </motion.div>
        <p className="mt-6 text-lg text-white animate-pulse">¡No pierdas tu oportunidad de ganar!</p>
      </section>

      {/* Cómo Participar */}
      <section id="como-participar" className="container mx-auto py-16 px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-500">¿Cómo participar?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Paso 1 */}
          <motion.div className="flex flex-col items-center bg-black bg-opacity-80 p-6 rounded-xl border-2 border-red-600 w-full md:w-1/3" whileHover={{ scale: 1.05, boxShadow: "0 0 24px 0 #ff8a00aa" }} data-aos="fade-up">
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-red-400">Selecciona tu número</h3>
            <p className="text-white text-center">Escoge tu número de la suerte entre los disponibles.</p>
          </motion.div>
          {/* Flecha */}
          <div className="hidden md:block text-5xl text-red-600">→</div>
          {/* Paso 2 */}
          <motion.div className="flex flex-col items-center bg-black bg-opacity-80 p-6 rounded-xl border-2 border-red-600 w-full md:w-1/3" whileHover={{ scale: 1.05, boxShadow: "0 0 24px 0 #ff8a00aa" }} data-aos="fade-up" data-aos-delay="100">
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-red-400">Realiza el pago</h3>
            <p className="text-white text-center">Paga de forma segura mediante nuestras opciones disponibles.</p>
          </motion.div>
          {/* Flecha */}
          <div className="hidden md:block text-5xl text-red-600">→</div>
          {/* Paso 3 */}
          <motion.div className="flex flex-col items-center bg-black bg-opacity-80 p-6 rounded-xl border-2 border-red-600 w-full md:w-1/3" whileHover={{ scale: 1.05, boxShadow: "0 0 24px 0 #ff8a00aa" }} data-aos="fade-up" data-aos-delay="200">
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-red-400">Espera el sorteo</h3>
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
