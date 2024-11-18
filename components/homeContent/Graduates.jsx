"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

const diplomasData = [
  {
    img: "/DILOMADOS/1.webp",
    title: "ASISTENTE TECNICO EN OBRAS",
  },
  {
    img: "/DILOMADOS/2.webp",
    title: "INGENIERIA VIAL",
  },
  {
    img: "/DILOMADOS/3.webp",
    title: "GESTION Y MANEJO INTEGRAL DE RESIDUOS SOLIDOS",
  },
  {
    img: "/DILOMADOS/4.webp",
    title: "MONITOREO Y EVALUACION DE LA CALIDAD AMBIENTAL",
  },
  {
    img: "/DILOMADOS/5.webp",
    title: "RIEGO Y FERTIRRIEGO",
  },
  {
    img: "/DILOMADOS/6.webp",
    title: "SISTEMA DE RIEGO TECNIFICADO",
  },
];

const DiplomaCard = ({ img, title }) => (
  <div className="group flex flex-col items-center gap-5 rounded-lg p-5 shadow-md text-gray transform hover:scale-105 transition duration-300">
    <div
      style={{ width: "100%", maxWidth: "400px" }}
      className="relative flex justify-center rounded-lg lg:max-w-[500px]" // Adjusted for large screens
    >
      <div className="z-10 w-full h-full overflow-hidden rounded-lg border border-gray-200 opacity-90 transition duration-200 ease-in-out group-hover:opacity-100">
        <img
          src={img}
          className="block w-full h-auto max-h-[400px] lg:max-h-[600px] object-contain" // Larger for desktop
          alt={title}
        />
      </div>
    </div>
    {/* Hide title on large screens */}
    <h3 className="text-center text-sm font-medium text-gray-700 lg:hidden">
      {title}
    </h3>
  </div>
);

const Graduates = () => {
  return (
    <div>
      <div
        className="p-5"
        style={{
          backgroundImage: "linear-gradient(to right, #002e79, #006eb0)",
        }}
      >
        <div className="text-center font-semibold font-poppins">
          <p className="font-extrabold text-white text-[40px] md:text-[60px] mt-8 mb-5">
            Nuestros Diplomados
          </p>
        </div>

        {/* Responsive Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="w-full mx-auto lg:max-w-[1600px] md:max-w-[1000px] rounded-3xl"
        >
          {diplomasData.map((diploma, index) => {
            const whatsappLink = `https://api.whatsapp.com/send?phone=51900102090&text=Hola, podría darme información sobre el diplomado de ${encodeURIComponent(
              diploma.title
            )}`;

            return (
              <SwiperSlide key={index}>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <DiplomaCard img={diploma.img} title={diploma.title} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Graduates;
