"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";

// Gestión de la Calidad e Inocuidad Alimentaria - FoodQuality
const modulesFoodQuality = [
  { name: "Interpretación e implementación de la norma ISO 31000 - Gestión de Riesgos", image: "/cursos_gpt/11gestion_calidad/1.webp" },
  { name: "Programas Pre-requisitos con base en ISO 22002-1 y BRC v.09", image: "/cursos_gpt/11gestion_calidad/2.webp" },
  { name: "Análisis de peligros y puntos críticos de control (HACCP)", image: "/cursos_gpt/11gestion_calidad/3.webp" },
  { name: "Esquema FSSC 22000", image: "/CURSOS/esquema.webp" },
  { name: "Fundamentos e Interpretación de los Sistemas de Gestión de la Calidad ISO 9001", image: "/cursos_gpt/11gestion_calidad/5.webp" },
  { name: "Inspección y muestreo de alimentos", image: "/cursos_gpt/11gestion_calidad/6.webp" },
  { name: "Trazabilidad y etiquetado", image: "/cursos_gpt/11gestion_calidad/7.webp" },
  { name: "Auditoria del Sistema de Gestión de Calidad e Inocuidad Alimentaria en base a la Norma ISO 19011", image: "/cursos_gpt/11gestion_calidad/8.webp" },
  { name: "Calidad e Inocuidad alimentaria", image: "/cursos_gpt/11gestion_calidad/9.webp" },
];

const GraduateFoodQualityCarousel = () => {
  // Function to handle card click and open WhatsApp with a custom message
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
          {modulesFoodQuality.map((module, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative w-full h-[300px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] flex items-center justify-center cursor-pointer rounded-xl overflow-hidden"
                onClick={() => handleCardClick(module.name)}
              >
                {/* Hidden title for accessibility and SEO */}
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

export default GraduateFoodQualityCarousel;
