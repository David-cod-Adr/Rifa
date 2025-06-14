"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      router.replace("/admin");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative">
      {/* Botón volver */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 flex items-center gap-2 bg-[#181818] border-2 border-red-700 text-white px-4 py-2 rounded-full shadow hover:bg-red-700 hover:text-white transition font-bold z-10"
        title="Volver a la página principal"
      >
        <span className="text-2xl">←</span>
        <span className="hidden sm:inline">Volver</span>
      </button>
      <div className="bg-[#181818] p-12 rounded-2xl shadow-2xl border-2 border-red-700 w-full max-w-md flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold font-montserrat mb-2 text-center">Iniciar Sesión</h1>
        <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="admin"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="p-3 rounded bg-gray-100 text-black font-bold text-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            autoFocus
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="p-3 rounded bg-gray-100 text-black font-bold text-lg focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          {error && <div className="text-red-500 text-center font-bold">{error}</div>}
          <button type="submit" className="btn-primary font-bold py-3 rounded text-lg mt-2">Entrar</button>
        </form>
      </div>
    </div>
  );
} 