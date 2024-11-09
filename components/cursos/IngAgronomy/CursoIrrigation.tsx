"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";

// Riego y fertirriego
const modulesirrigation = [
  { name: "Nutrición vegetal y principios de fertirriego", image: "/cursos_gpt/5riegoyferti/1.webp" },
  { name: "Riego tecnificado por aspersión", image: "/cursos_gpt/5riegoyferti/2.webp" },
  { name: "Riego tecnificado por goteo", image: "/cursos_gpt/5riegoyferti/3.webp" },
  { name: "Fertirrigación", image: "/cursos_gpt/5riegoyferti/4.webp" },
  { name: "Fertirriego de cultivos y monitoreo", image: "/CURSOS/fertirriego.webp" },
];

const GraduateIrrigationCarousel = () => {
  const handleCardClick = (moduleName: string) => {
    const whatsappUrl = `https://wa.me/51984040264?text=${encodeURIComponent(
      `Hola, estoy interesado en el curso "${moduleName}" y me gustaría recibir más información.`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white px-6">
      <div className="relative z-10 max-w-[1400px] mx-auto py-10">
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
          {modulesirrigation.map((module, idx) => (
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

export default GraduateIrrigationCarousel;
