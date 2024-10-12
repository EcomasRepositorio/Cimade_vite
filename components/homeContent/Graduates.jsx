"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importar CSS de Swiper
import "swiper/css/pagination"; // Importar CSS para paginación
import "swiper/css/navigation"; // Importar CSS para navegación
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Importar los módulos desde 'swiper/modules'

// Datos de los diplomados destacados
const diplomasData = [
  {
    img: "/image/ing_civil.png",
    title: "Ingeniería Civil",
  },
  {
    img: "/image/ing_agricola.png",
    title: "Ingeniería Agrícola",
  },
  {
    img: "/image/ing_ambiental.png",
    title: "Ingeniería Ambiental",
  },
  {
    img: "/image/ing_alimentarias.png",
    title: "Ingeniería de Industrias Alimentarias",
  },
  {
    img: "/image/ing_vial.png",
    title: "Ingeniería Vial",
  },
  {
    img: "/image/ing_riego.png",
    title: "Sistema de Riego Tecnificado",
  },
];

// Componente para la tarjeta de diplomado
const DiplomaCard = ({ img, title }) => (
  <div className="group flex flex-col gap-5 rounded-lg p-5 shadow-md text-gray transform hover:scale-105 transition duration-300">
    <div
      style={{ height: "400px", width: "320px" }} // Corregido el uso de style
      className="group relative justify-center flex rounded-lg ring-gray-900/5"
    >
      <div className="z-10 h-full w-full overflow-hidden rounded-lg border border-gray-200 opacity-80 transition duration-200 ease-in-out group-hover:opacity-100">
        <img
          src={img} // Usa la variable img pasada como prop
          className="block h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
          alt={title} // Usa la variable title como alt
        />
      </div>
      <div className="p-3 absolute bottom-0 z-20 m-0 pb-4 ps-4 w-full flex justify-center">
        <div className="border-white border rounded-lg text-lg font-bold text-white px-4 py-4 bg-opacity-70 backdrop-blur-sm">
          {title} {/* Usa la variable title pasada como prop */}
        </div>
      </div>
    </div>
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
          <p className="font-extrabold text-white text-[60px] mt-8 mb-5">
            Nuestros Diplomados
          </p>
        </div>

        {/* Carrusel para móviles */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="space-x-4"
          >
            {diplomasData.map((diploma, index) => (
              <SwiperSlide key={index}>
                <DiplomaCard img={diploma.img} title={diploma.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grilla para Escritorio */}
        <div className="hidden md:grid justify-items-center mx-auto mt-1 max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {diplomasData.map((diploma, index) => (
            <Link href="/graduate" key={index}>
              <DiplomaCard img={diploma.img} title={diploma.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graduates;
