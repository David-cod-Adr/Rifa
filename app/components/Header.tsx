"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header({ logoSrc = "/logo-placeholder.png" }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/80 shadow-lg animate-fade-in-down transition-all duration-500">
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
                  style={{lineHeight: '48px'}}>
                  {item.label}
                </a>
              </li>
            ))}
            {/* Botón de login */}
            <li className="flex items-center h-full ml-4">
              <button
                onClick={() => router.push("/login")}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-red-600 transition-colors shadow-md border border-red-700"
                title="Iniciar sesión"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black group-hover:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
                </svg>
              </button>
            </li>
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
            {/* Botón de login móvil */}
            <li className="flex items-center h-full mt-8">
              <button
                onClick={() => { setOpen(false); router.push("/login"); }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-red-600 transition-colors shadow-md border border-red-700"
                title="Iniciar sesión"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-black group-hover:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
                </svg>
              </button>
            </li>
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
    </header>
  );
}
