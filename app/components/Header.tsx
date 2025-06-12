import Image from "next/image";

export default function Header({ logoSrc = "/logo-placeholder.png" }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-95 shadow-lg border-b-2 border-yellow-500">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="h-14 w-32 flex items-center justify-center">
            <Image src={logoSrc} alt="Gastromotor Sorteos" width={120} height={56} className="object-contain" />
          </div>
          <span className="hidden md:block text-2xl font-bold logo-text tracking-wide">Gastromotor Sorteos</span>
        </div>
        {/* Menú */}
        <nav>
          <ul className="flex space-x-6 text-lg font-semibold">
            <li><a href="#inicio" className="hover:text-yellow-400 transition-colors">Inicio</a></li>
            <li><a href="#premios" className="hover:text-yellow-400 transition-colors">Premios</a></li>
            <li><a href="#como-participar" className="hover:text-yellow-400 transition-colors">Cómo Participar</a></li>
            <li><a href="#ganadores" className="hover:text-yellow-400 transition-colors">Ganadores</a></li>
            <li><a href="#contacto" className="hover:text-yellow-400 transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 