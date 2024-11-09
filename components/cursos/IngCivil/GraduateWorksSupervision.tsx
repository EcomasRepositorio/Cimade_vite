"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from '@/style/index';

//RESIDENCIA Y SUPERVISIÓN DE OBRAS
//WorksSupervision

const modulesWorksSupervision = [
  { name: "Planeamiento Y Programación de Obras", image: "/cursos_gpt/10planeacion_obras/1.webp" },
  { name: "Informes de obra", image: "/cursos_gpt/10planeacion_obras/2.webp" },
  { name: "Control técnico y calidad en obras", image: "/cursos_gpt/10planeacion_obras/3.webp" },
  { name: "Ampliaciones de plazo, adicionales de obra y penalidades en obra", image: "/cursos_gpt/10planeacion_obras/4.webp" },
  { name: "Recepción - liquidación de obras y medios de controversia", image: "/cursos_gpt/10planeacion_obras/5.webp" },
  { name: "Expediente técnico como herramienta para la ejecución y supervisión de obra", image: "/cursos_gpt/10planeacion_obras/6.webp" },
  { name: "Valorización y liquidación de obras por administración directa", image: "/cursos_gpt/10planeacion_obras/7.webp" },
  { name: "Plan de gestión de seguridad y salud en obra", image: "/cursos_gpt/10planeacion_obras/8.webp" },
  { name: "Contratación y ejecución de obras", image: "/cursos_gpt/10planeacion_obras/9.webp" },
  { name: "Preliminares para inicio de obra", image: "/cursos_gpt/10planeacion_obras/10.webp" },
  { name: "Expediente técnico como herramienta para la ejecución y supervisión de obra", image: "/cursos_gpt/10planeacion_obras/11.webp" },
];


const GraduateWorksSupervisionCarousel = () => {
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
          {modulesWorksSupervision.map((module, idx) => (
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

export default GraduateWorksSupervisionCarousel;