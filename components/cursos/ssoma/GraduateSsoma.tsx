"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from '@/style/index';

//SEGURIDAD, SALUD OCUPACIONAL Y MEDIO AMBIENTE
//Ssoma

const modulesSsoma = [
  { name: "Elaboración de matriz IPERC - mapa de riesgos", image: "/cursos_gpt/12ssoma/1.webp" },
  { name: "Comité de seguridad y salud en el trabajo", image: "/cursos_gpt/12ssoma/2.webp" },
  { name: "Seguridad en trabajo de alto riesgo", image: "/cursos_gpt/12ssoma/3.webp" },
  { name: "Investigación y reporte de accidentes laborales", image: "/cursos_gpt/12ssoma/4.webp" },
  { name: "Prevención de riesgos laborales", image: "/cursos_gpt/12ssoma/5.webp" },
  { name: "Fiscalización y auditorias de SSO - SUNAFIL", image: "/cursos_gpt/12ssoma/6.webp" },
  { name: "Fiscalización ambiental", image: "/cursos_gpt/12ssoma/7.webp" },
  { name: "Supervisor SSOMA", image: "/cursos_gpt/12ssoma/8.webp" },
  { name: "Auditor Interno SSOMA", image: "/cursos_gpt/12ssoma/9.webp" },
  { name: "Gestión ambiental - ISO 14001", image: "/cursos_gpt/12ssoma/10.webp" },
  { name: "Implementación de sistema de gestión de SST", image: "/cursos_gpt/12ssoma/11.webp" },
];

const GraduateSsomaCarousel = () => {
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
          {modulesSsoma.map((module, idx) => (
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

export default GraduateSsomaCarousel;
