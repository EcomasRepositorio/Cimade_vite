"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from '@/style/index';
import { pagination } from "@nextui-org/react";


//MONITOREO Y EVALUACIÓN DE LA CALIDAD AMBIENTAL


const modulesQualityMonitoringAmbientaly = [
  { name: "Monitoreo y evaluación de la calidad de suelo", image: "/cursos_gpt/3calidad-ambiental/1.webp" },
  { name: "Monitoreo y evaluación de radiaciones no ionizantes", image: "/cursos_gpt/3calidad-ambiental/2.webp" },
  { name: "Monitoreo de agentes ocupacionales", image: "/cursos_gpt/3calidad-ambiental/3.webp" },
  { name: "Monitoreo biológico", image: "/cursos_gpt/3calidad-ambiental/4.webp" },
  //{ name: "Calibración de equipos de monitoreo ambiental", image: "/cursos_gpt/3calidad-ambiental/5.webp" },
  //{ name: "Interpretación de informes de laboratorios", image: "/cursos_gpt/3calidad-ambiental/6.webp" },
  { name: "Monitoreo y evaluación de la calidad de agua", image: "/CURSOS/monitoreo.webp" },//esta cambiado img
  //{ name: "Monitoreo y evaluación de la calidad de aire", image: "/CURSOS/15.webp" },
  //{ name: "Monitoreo y evaluación de ruido ambiental", image: "/CURSOS/16.webp" },
];

const GraduateQualityMonitoringAmbientalyCarousel = () => {

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
            870: { slidesPerView: 2, spaceBetween: 20 },
            940: { slidesPerView: 2, spaceBetween: 30 },
            1100: { slidesPerView: 2, spaceBetween: 10 },
            1300: { slidesPerView: 2, spaceBetween: 10 },
            1400: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {modulesQualityMonitoringAmbientaly.map((module, idx) => (
            <SwiperSlide key={idx}>
            <div
              className="relative w-full h-full sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] flex items-center justify-center cursor-pointer rounded-xl overflow-hidden"
              onClick={() => handleCardClick(module.name)}
            >
              
              <h3 className="sr-only">{module.name}</h3>
              <Image
                src={module.image}
                alt={module.name}
                width={500}
                height={500}
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

export default GraduateQualityMonitoringAmbientalyCarousel;
