"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const defaultPremios = [
  {
    src: "/premio-auto.png",
    alt: "Toyota Fortuner 4x4",
    caption: "Toyota Fortuner 4x4"
  },
  {
    src: "/premio-moto.png",
    alt: "Yamaha MT03",
    caption: "Yamaha MT03"
  },
  {
    src: "/premio-efectivo.png",
    alt: "Premios en efectivo",
    caption: "Premios en Efectivo"
  }
];

export default function PremiosCarousel() {
  const [premios, setPremios] = useState<{src: string, alt: string, caption: string}[]>(defaultPremios);
  const [custom, setCustom] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("carouselImages");
      if (stored) {
        const imgs = JSON.parse(stored) as string[];
        if (imgs.length > 0) {
          setPremios(imgs.map((src, i) => ({ src, alt: `Premio ${i + 1}`, caption: `Premio ${i + 1}` })));
          setCustom(true);
        } else {
          setCustom(false);
          setPremios(defaultPremios);
        }
      } else {
        setCustom(false);
        setPremios(defaultPremios);
      }
    }
  }, []);

  if (custom && premios.length === 0) {
    return <div className="text-center text-gray-400 py-12 text-xl">No hay imágenes en el carrusel.</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={premios.length > 1}
        className="rounded-2xl shadow-2xl"
        style={{ minHeight: 480 }}
      >
        {premios.map((premio, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center justify-center">
              <Image
                src={premio.src}
                alt={premio.alt}
                width={800}
                height={400}
                className="rounded-2xl object-contain bg-black"
                style={{ maxHeight: 400, width: '100%', objectFit: 'contain' }}
              />
              <div className="mt-6 text-2xl font-bold text-white text-center drop-shadow-lg font-montserrat">
                {premio.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 