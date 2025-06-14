"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const MAX_IMAGES = 6;
const MAX_IMAGE_SIZE = 500 * 1024; // 500 KB

export default function AdminPanel() {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]); // Imágenes actualmente en el carrusel
  const [pendingImages, setPendingImages] = useState<string[]>([]); // Imágenes seleccionadas pero no publicadas
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [showConfirm, setShowConfirm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [ticketsSold, setTicketsSold] = useState<number>(0);
  const [totalTickets, setTotalTickets] = useState<number>(1000);
  const [pendingSold, setPendingSold] = useState<string>("");
  const [pendingTotal, setPendingTotal] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  // Cargar imágenes del carrusel desde localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAdmin = localStorage.getItem("isAdmin");
      if (!isAdmin) {
        router.replace("/login");
      }
      const stored = localStorage.getItem("carouselImages");
      if (stored) setImages(JSON.parse(stored));
    }
  }, [router]);

  // Cargar boletas vendidas y total desde localStorage
  useEffect(() => {
    const sold = localStorage.getItem("ticketsSold");
    if (sold) {
      setTicketsSold(Number(sold));
      setPendingSold(sold);
    }
    const total = localStorage.getItem("totalTickets");
    if (total) {
      setTotalTickets(Number(total));
      setPendingTotal(total);
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("isAdmin");
    router.replace("/login");
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError("");
    const files = e.target.files;
    if (!files) return;
    if (images.length + files.length > MAX_IMAGES) {
      setError(`Solo puedes subir hasta ${MAX_IMAGES} imágenes en total.`);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    const validFiles = Array.from(files).filter(file => file.size <= MAX_IMAGE_SIZE);
    if (validFiles.length !== files.length) {
      setError(`Cada imagen debe pesar menos de 500 KB.`);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    try {
      const readFiles = validFiles.map(file => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (ev) => {
            if (ev.target?.result) resolve(ev.target.result as string);
          };
          reader.readAsDataURL(file);
        });
      });
      const newImages = await Promise.all(readFiles);
      setPendingImages([...images, ...newImages]);
    } catch (err) {
      setError("Ocurrió un error al procesar las imágenes.");
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleRemove(idx: number) {
    const updated = pendingImages.length > 0 ? pendingImages.filter((_, i) => i !== idx) : images.filter((_, i) => i !== idx);
    if (pendingImages.length > 0) {
      setPendingImages(updated);
    } else {
      setImages(updated);
      localStorage.setItem("carouselImages", JSON.stringify(updated));
    }
    if (preview && ((pendingImages.length > 0 ? pendingImages : images)[idx] === preview)) setPreview(null);
  }

  function handlePreview(img: string) {
    setPreview(img);
  }

  function closePreview() {
    setPreview(null);
  }

  function handleUpdateClick() {
    setShowConfirm(true);
  }

  function handleConfirmUpdate() {
    setImages(pendingImages);
    localStorage.setItem("carouselImages", JSON.stringify(pendingImages));
    setPendingImages([]);
    setShowConfirm(false);
  }

  function handleCancelUpdate() {
    setShowConfirm(false);
  }

  function handlePendingSold(e: React.ChangeEvent<HTMLInputElement>) {
    setPendingSold(e.target.value.replace(/[^0-9]/g, ""));
    setSuccessMsg("");
  }

  function handlePendingTotal(e: React.ChangeEvent<HTMLInputElement>) {
    setPendingTotal(e.target.value.replace(/[^0-9]/g, ""));
    setSuccessMsg("");
  }

  function handleConfirmTickets() {
    const sold = Number(pendingSold);
    const total = Number(pendingTotal);
    if (isNaN(sold) || isNaN(total) || sold < 0 || total <= 0 || sold > total) {
      setSuccessMsg("Por favor ingresa valores válidos. Las boletas vendidas no pueden ser mayores al total.");
      return;
    }
    setTicketsSold(sold);
    setTotalTickets(total);
    localStorage.setItem("ticketsSold", sold.toString());
    localStorage.setItem("totalTickets", total.toString());
    setSuccessMsg("¡Cantidad de boletas actualizada correctamente!");
  }

  // Mostrar las imágenes pendientes si existen, si no, las actuales
  const displayImages = pendingImages.length > 0 ? pendingImages : images;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="bg-[#181818] p-12 rounded-2xl shadow-2xl border-2 border-red-700 w-full max-w-3xl flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold font-montserrat mb-2 text-center">Panel Administrativo</h1>
        <p className="text-lg text-center">¡Bienvenido, <span className="font-bold">admin</span>!<br />Aquí podrás gestionar tu sitio de rifas.</p>
        <button onClick={handleLogout} className="btn-primary font-bold py-3 rounded text-lg mt-2 self-center">Cerrar sesión</button>
        <hr className="w-full border-red-700 my-4" />
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-white">Imágenes del Carrusel</h2>
          <form className="flex flex-col md:flex-row gap-4 items-center mb-6" onSubmit={e => e.preventDefault()}>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
              className="block w-full text-white bg-black border border-red-700 rounded p-2"
            />
          </form>
          {error && <div className="text-red-500 text-center mb-4 font-bold">{error}</div>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {displayImages.length === 0 && <div className="col-span-full text-center text-gray-400">No hay imágenes en el carrusel.</div>}
            {displayImages.map((img, idx) => (
              <div key={idx} className="relative group rounded-xl overflow-hidden border-2 border-red-700 bg-black flex flex-col items-center">
                <img
                  src={img}
                  alt={`Premio ${idx + 1}`}
                  className="w-full h-48 object-contain bg-black cursor-pointer transition hover:scale-105"
                  onClick={() => handlePreview(img)}
                  title="Ver grande"
                />
                <button
                  onClick={() => handleRemove(idx)}
                  className="absolute top-2 right-2 bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-80 hover:opacity-100 transition"
                  title="Eliminar"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          {pendingImages.length > 0 && (
            <button
              onClick={handleUpdateClick}
              className="btn-primary font-bold py-3 rounded text-lg mt-8 w-full max-w-xs self-center shadow-lg hover:scale-105 transition"
            >
              Actualizar carrusel
            </button>
          )}
        </div>
        <div className="w-full mt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Boletas Vendidas</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-2">
            <div className="flex-1">
              <label className="block text-white font-semibold mb-1">Vendidas</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={pendingSold}
                onChange={handlePendingSold}
                className="block w-full text-white bg-black border border-red-700 rounded p-2 mb-2"
                placeholder="Cantidad de boletas vendidas"
              />
            </div>
            <div className="flex-1">
              <label className="block text-white font-semibold mb-1">Total</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={pendingTotal}
                onChange={handlePendingTotal}
                className="block w-full text-white bg-black border border-red-700 rounded p-2 mb-2"
                placeholder="Total de boletas"
              />
            </div>
          </div>
          <button
            onClick={handleConfirmTickets}
            className="btn-primary font-bold py-3 rounded text-lg w-full max-w-xs self-center shadow-lg hover:scale-105 transition mb-2"
          >
            Confirmar
          </button>
          {successMsg && <div className={`text-center mt-2 font-bold ${successMsg.startsWith('¡') ? 'text-green-400' : 'text-red-400'}`}>{successMsg}</div>}
          <span className="text-gray-400 text-sm block mt-2">Actualiza aquí la cantidad y el total de boletas.</span>
        </div>
      </div>
      {/* Modal de previsualización */}
      {preview && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closePreview}>
          <div className="relative max-w-2xl w-full p-6" onClick={e => e.stopPropagation()}>
            <img src={preview} alt="Vista previa" className="w-full max-h-[80vh] object-contain rounded-2xl border-4 border-red-700 shadow-2xl" />
            <button onClick={closePreview} className="absolute top-2 right-2 bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-lg hover:scale-110 transition" title="Cerrar">×</button>
          </div>
        </div>
      )}
      {/* Modal de confirmación */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#181818] border-2 border-red-700 rounded-2xl p-8 max-w-md w-full flex flex-col items-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">¿Estás seguro de subir estas fotos al carrusel?</h3>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleConfirmUpdate}
                className="btn-primary font-bold py-2 px-6 rounded text-lg shadow hover:scale-105 transition"
              >Sí, actualizar</button>
              <button
                onClick={handleCancelUpdate}
                className="bg-gray-700 text-white font-bold py-2 px-6 rounded text-lg shadow hover:scale-105 transition border border-gray-500"
              >Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 