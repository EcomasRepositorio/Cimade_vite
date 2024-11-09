"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from '@/style/index';


//sistema de riego tecnificado 


const modulesTechnicalIrrigation = [
  { name: "Sistemas de riego tecnificado por goteo", image: "/cursos_gpt/6riego-tec/1.webp" },
  { name: "Fertiirrigación", image: "/cursos_gpt/6riego-tec/2.webp" },
  { name: "Análisis de suelo, agua y foliar", image: "/cursos_gpt/6riego-tec/3.webp" },
  { name: "Importancia del suelo en la agricultura", image: "/cursos_gpt/6riego-tec/4.webp" },
  { name: "Costos y Presupuestos con S10", image: "/CURSOS/costos.webp" },//esta cambiado img
  //{ name: "Hidráulica de tuberías", image: "/cursos_gpt/6riego-tec/5.webp" },
  //{ name: "Descarga de data y parámetros geomorfológicos de la cuenca", image: "/cursos_gpt/6riego-tec/6.webp" },
  //{ name: "Calidad del agua para riego", image: "/CURSOS/14.webp" },
  //{ name: "Oferta y demanda hídrica en cultivos", image: "/CURSOS/15.webp" },
  //{ name: "Sistemas de riego tecnificado por aspersión", image: "/CURSOS/16.webp" },
];

const GraduateTechnicalIrrigationCarousel = () => {

  const handleCardClick = (moduleName: string) => {
    const whatsappUrl = `https://wa.me/51984040264?text=${encodeURIComponent(
      `Hola, estoy interesado en el curso "${moduleName}" y me gustaría recibir más información.`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  
  return (
    <section className="bg-white px-6 mb-20">
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
          {modulesTechnicalIrrigation.map((module, idx) => (
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

export default GraduateTechnicalIrrigationCarousel;
