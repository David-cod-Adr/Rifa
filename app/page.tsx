import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Cabecera con logo */}
      <header className="bg-black p-4 shadow-md border-b border-red-600">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-full flex justify-center">
            <div className="h-32 flex items-center justify-center relative">
              {/* Llamas decorativas a los lados */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full flex justify-center">
                <div className="flex items-center space-x-4">
                  <h1 className="text-4xl md:text-5xl font-bold logo-text relative z-10 px-4">
                    GASTROMOTOR
                    <span className="block text-center text-white text-3xl md:text-4xl mt-1">SORTEOS</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-grow container mx-auto p-4">
        {/* Sección de premio principal */}
        <section className="text-center mb-12 header-flame p-8 rounded-lg shadow-lg">
          <div className="py-6">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">TOYOTA FORTUNER 4X4</h1>
            <h2 className="text-3xl font-bold mb-6 text-white">YAMAHA MT03 Y PREMIOS EN EFECTIVO</h2>
            <p className="text-xl mb-8 italic text-yellow-100">SI NO ARRIESGAS NUNCA SABRÁS SI PUDO HABER SIDO TU TURNO</p>
          </div>
          <div className="my-6 bg-black bg-opacity-30 h-64 flex items-center justify-center rounded-lg border border-yellow-500">
            <p className="text-2xl text-yellow-200">[Imagen de Toyota Fortuner]</p>
          </div>
          <button className="btn-primary font-bold py-4 px-8 rounded-full text-xl mt-8 transition-colors shadow-xl">
            ¡COMPRA TU BOLETO AHORA!
          </button>
        </section>

        {/* Sección de Premios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 logo-text">NUESTROS PREMIOS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Premio 1 */}
            <div className="card-gastromotor p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-4 text-yellow-500">PREMIO PRINCIPAL</h3>
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-black bg-opacity-50 h-40 flex items-center justify-center rounded-md border border-yellow-600">
                <p className="text-yellow-100">[Toyota Fortuner]</p>
              </div>
              <h4 className="text-xl font-bold text-center text-red-500">Toyota Fortuner 4x4</h4>
              <p className="text-center mt-2 text-gray-300">Vehículo 0 km, completamente equipado</p>
            </div>

            {/* Premio 2 */}
            <div className="card-gastromotor p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-4 text-yellow-500">SEGUNDO PREMIO</h3>
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-black bg-opacity-50 h-40 flex items-center justify-center rounded-md border border-yellow-600">
                <p className="text-yellow-100">[Yamaha MT03]</p>
              </div>
              <h4 className="text-xl font-bold text-center text-red-500">Yamaha MT03</h4>
              <p className="text-center mt-2 text-gray-300">Motocicleta 0 km, última generación</p>
            </div>

            {/* Premio 3 */}
            <div className="card-gastromotor p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-4 text-yellow-500">PREMIOS ADICIONALES</h3>
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-black bg-opacity-50 h-40 flex items-center justify-center rounded-md border border-yellow-600">
                <p className="text-yellow-100">[Premios en efectivo]</p>
              </div>
              <h4 className="text-xl font-bold text-center text-red-500">Premios en Efectivo</h4>
              <p className="text-center mt-2 text-gray-300">Varios premios en efectivo para los afortunados</p>
            </div>
          </div>
        </section>

        {/* Contador */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 logo-text">TIEMPO RESTANTE PARA EL SORTEO</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="card-gastromotor px-6 py-4 rounded-lg w-24">
              <div className="text-4xl font-bold text-yellow-500">15</div>
              <div className="text-orange-500">Días</div>
            </div>
            <div className="card-gastromotor px-6 py-4 rounded-lg w-24">
              <div className="text-4xl font-bold text-yellow-500">08</div>
              <div className="text-orange-500">Horas</div>
            </div>
            <div className="card-gastromotor px-6 py-4 rounded-lg w-24">
              <div className="text-4xl font-bold text-yellow-500">45</div>
              <div className="text-orange-500">Minutos</div>
            </div>
            <div className="card-gastromotor px-6 py-4 rounded-lg w-24">
              <div className="text-4xl font-bold text-yellow-500">30</div>
              <div className="text-orange-500">Segundos</div>
            </div>
          </div>
        </section>
        
        {/* Sección de información */}
        <section className="mb-16 bg-black p-8 rounded-lg border-2 border-red-500 header-flame bg-opacity-50">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-500">CÓMO PARTICIPAR</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-black bg-opacity-70 p-6 rounded-lg border border-orange-500">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-500">Selecciona tu número</h3>
              <p className="text-yellow-100">Escoge tu número de la suerte entre los disponibles</p>
            </div>
            
            <div className="text-center bg-black bg-opacity-70 p-6 rounded-lg border border-orange-500">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-500">Realiza el pago</h3>
              <p className="text-yellow-100">Paga de forma segura mediante nuestras opciones disponibles</p>
            </div>
            
            <div className="text-center bg-black bg-opacity-70 p-6 rounded-lg border border-orange-500">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-500">Espera el sorteo</h3>
              <p className="text-yellow-100">Sigue el sorteo en vivo y comprueba si eres el ganador</p>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de Página */}
      <footer className="bg-black text-white p-6 border-t-2 border-red-600">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2 logo-text">Gastromotor Sorteos</h3>
              <p className="text-yellow-100">Tu sueño a través de un sorteo</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-500 hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.35c0 .732.593 1.325 1.325 1.325h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.325v-21.35c0-.732-.592-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
            <div>
              <p className="text-yellow-100">© 2024 Gastromotor Sorteos. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
