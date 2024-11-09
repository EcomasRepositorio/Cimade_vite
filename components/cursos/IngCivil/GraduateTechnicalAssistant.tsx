"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from '@/style/index';

//ASISTENTE TECNICO EN OBRAS
//TechnicalAssistant

const modulesTechnicalAssistant = [
  { name: "Planificación y programación de obras", image: "/cursos_gpt/7asistente-obras/1.webp" },
  { name: "Control de obras", image: "/cursos_gpt/7asistente-obras/2.webp" },
  { name: "Metrados en edificaciones", image: "/cursos_gpt/7asistente-obras/3.webp" },
  { name: "Cuaderno de obra físico y digital", image: "/cursos_gpt/7asistente-obras/4.webp" },
  { name: "Valorización de obras", image: "/cursos_gpt/7asistente-obras/6.webp" },
  //{ name: "Liquidación de obras", image: "/CURSOS/14.webp" },
  //{ name: "Formulación y planificación de proyectos con MS Project", image: "/CURSOS/15.webp" },
  //{ name: "Análisis y diseño de instituciones educativas", image: "/CURSOS/16.webp" },
  //{ name: "Seguridad, salud ocupacional y medio ambiente en obras públicas", image: "/CURSOS/17.webp" },
  //{ name: "Expediente técnico en obras", image: "/CURSOS/18.webp" },
  //{ name: "Régimen laboral en construcción civil", image: "/CURSOS/19.webp" },
];

const GraduateTechnicalAssistantCarousel = () => {
  // Function to handle card click and open WhatsApp with a custom message
  const handleCardClick = (moduleName: string) => {
    const whatsappUrl = `https://wa.me/51984040264?text=${encodeURIComponent(
      `Hola, estoy interesado en el curso "${moduleName}" y me gustaría recibir más información.`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  
  return (
    <section className="bg-white px-6">
      <div className={`${styles.paddings} relative z-10 max-w-[1400px] mx-auto`}>
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
          {modulesTechnicalAssistant.map((module, idx) => (
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
                objectFit="cover" // Para asegurar que la imagen cubre toda el área sin deformarse
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

export default GraduateTechnicalAssistantCarousel;
