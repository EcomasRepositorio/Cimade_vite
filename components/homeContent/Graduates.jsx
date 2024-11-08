"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

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






  /* 
  {
    img: "/image/ing_civil.png",
    title: "ASISTENTE TÉCNICO EN OBRAS",
  },
  {
    img: "/image/ing_agricola.png",
    title: "INGENIERÍA VIAL",
  },
  {
    img: "/image/ing_ambiental.png",
    title: "GESTIÓN Y MANEJO INTEGRAL DE RESIDUOS SÓLIDOS",
  },
  {
    img: "/image/ing_alimentarias.png",
    title: "MONITOREO Y EVALUACIÓN DE LA CALIDAD AMBIENTAL",
  },
  {
    img: "/image/ing_vial.png",
    title: "RIEGO Y FERTIRRIEGO",
  },
  {
    img: "/image/ing_riego.png",
    title: "SISTEMAS DE RIEGO TECNIFICADO",
  },
  {
    img: "/image/ing_civil.png",
    title: "SEGURIDAD, SALUD OCUPACIONAL Y MEDIO AMBIENTE",
  },
  {
    img: "/image/ing_agricola.png",
    title: "GESTIÓN DE LA CALIDAD E INOCUIDAD ALIMENTARIA",
  },
  {
    img: "/image/ing_ambiental.png",
    title: "PERITO FORENSE Y CRIMINALÍSTICO",
  },
   */
  
];

const DiplomaCard = ({ img, title }) => (
  <div className="group flex flex-col gap-5 rounded-lg p-5 shadow-md text-gray transform hover:scale-105 transition duration-300">
    <div
      style={{ height: "400px", width: "320px" }}
      className="group relative justify-center flex rounded-lg ring-gray-900/5"
    >
      <div className="z-10 h-full w-full overflow-hidden rounded-lg border border-gray-200 opacity-80 transition duration-200 ease-in-out group-hover:opacity-100">
        <img
          src={img}
          className="block h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
          alt={title}
        />
      </div>
      <div className="p-3 absolute bottom-0 z-20 m-0 pb-4 ps-4 w-full flex justify-center">
        <div className="border-white border rounded-lg text-lg font-bold text-white px-4 py-4 bg-opacity-70 backdrop-blur-sm">
          Más Información
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

        {/* Carrusel para todos los tamaños de pantalla */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="w-full mx-auto max-w-[1400px]"
        >
          {diplomasData.map((diploma, index) => {
            const whatsappLink = `https://api.whatsapp.com/send?phone=51900102090&text=Hola, podría darme información sobre el diplomado de ${encodeURIComponent(diploma.title)}`;

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