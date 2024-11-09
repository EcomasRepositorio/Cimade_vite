"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";

// Ingeniería de Puentes - módulos
const modulesIngBridge = [
  { name: "Diseño sísmico en puentes AASHTO-LRFD", image: "/cursos_gpt/9ing_puentes/1.webp" },
  { name: "Mantenimiento y conservación de puentes", image: "/cursos_gpt/9ing_puentes/2.webp" },
  { name: "Inspección, evaluación de puentes bajo la metodología SCAP", image: "/cursos_gpt/9ing_puentes/3.webp" },
  { name: "Diseño de puentes, pontones", image: "/cursos_gpt/9ing_puentes/4.webp" },
  { name: "Estudios de Hidrología e hidráulica en puentes", image: "/cursos_gpt/9ing_puentes/5.webp" },
  { name: "Estudios Geológicos y geotécnicos en puentes", image: "/cursos_gpt/9ing_puentes/6.webp" },
  { name: "Diseño y modalamiento de puentes con SAP 2000", image: "/cursos_gpt/9ing_puentes/7.webp" },
  { name: "Diseño y modelamiento de puentes con CSi BRIDGE", image: "/cursos_gpt/9ing_puentes/8.webp" },
  { name: "Modelamiento y análisis estructural de puentes", image: "/cursos_gpt/9ing_puentes/9.webp" },
];

const GraduateIngBridgeCarousel = () => {
  // Función para abrir WhatsApp con un mensaje personalizado
  const handleCardClick = (moduleName: string) => {
    const whatsappUrl = `https://wa.me/51984040264?text=${encodeURIComponent(
      `Hola, estoy interesado en el curso "${moduleName}" y me gustaría recibir más información.`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white px-6">
      <div className="py-10 relative z-10 max-w-[1400px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides
          autoplay={{ delay: 3000 }}
          grabCursor
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            940: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {modulesIngBridge.map((module, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative w-full h-[300px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] flex items-center justify-center cursor-pointer rounded-xl overflow-hidden"
                onClick={() => handleCardClick(module.name)}
              >
                {/* Título oculto para accesibilidad y SEO */}
                <h3 className="sr-only">{module.name}</h3>
                <Image
                  src={module.image}
                  alt={module.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  priority={true}
                  unoptimized={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GraduateIngBridgeCarousel;
