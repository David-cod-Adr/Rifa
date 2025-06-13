"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header({ logoSrc = "/logo-placeholder.png" }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/80 shadow-lg border-b-4 border-b-gradient-to-r from-red-700 via-red-500 to-red-700 animate-fade-in-down transition-all duration-500">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo + Texto */}
        <div className="flex items-center space-x-4 min-w-0 h-full">
          <div className="flex items-center h-full">
            <Image src={logoSrc} alt="Gastromotor Sorteos" width={48} height={48} className="object-contain drop-shadow-md" style={{maxHeight: 48}} />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-wide text-white whitespace-nowrap logo-text-simple flex items-center h-full" style={{lineHeight: '48px'}}>Gastromotor Sorteos</span>
        </div>
        {/* Menú Desktop */}
        <nav className="hidden md:flex flex-1 justify-end h-full items-center">
          <ul className="flex space-x-10 text-lg font-semibold items-center h-full">
            {[
              { href: "#inicio", label: "Inicio" },
              { href: "#premios", label: "Premios" },
              { href: "#como-participar", label: "Cómo Participar" },
              { href: "#ganadores", label: "Ganadores" },
              { href: "#contacto", label: "Contacto" },
            ].map((item) => (
              <li key={item.href} className="flex items-center h-full">
                <a
                  href={item.href}
                  className="relative text-white transition-colors duration-300 px-2 py-1 after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-red-500 after:to-red-700 after:transition-all after:duration-300 hover:after:w-full hover:text-red-400"
                  style={{lineHeight: '48px'}}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Menú móvil */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 group ml-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span className={`block h-1 w-8 my-1 rounded-full bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-1 w-8 my-1 rounded-full bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-8 my-1 rounded-full bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {/* Drawer menú móvil */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-black/95 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          >
            ×
          </button>
          <ul className="flex flex-col mt-20 space-y-8 text-2xl font-semibold items-center">
            {[
              { href: "#inicio", label: "Inicio" },
              { href: "#premios", label: "Premios" },
              { href: "#como-participar", label: "Cómo Participar" },
              { href: "#ganadores", label: "Ganadores" },
              { href: "#contacto", label: "Contacto" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white hover:text-red-400 transition-colors text-center block py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Overlay para cerrar menú */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-40 animate-fade-in"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      <style jsx global>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.7s cubic-bezier(.4,2,.3,1); }
        .border-b-gradient-to-r {
          border-image: linear-gradient(to right, #a30000, #e50000, #a30000) 1;
        }
        .logo-text-simple {
          background: none !important;
          color: #fff !important;
          text-shadow: 1px 1px 4px #000a;
        }
      `}</style>
    </header>
  );
} 