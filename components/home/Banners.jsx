"use client";
import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

// Datos del componente
const images = [
  "/image/bannerTree.png",
  "/image/supra2.png",
  "/image/bannerOne.png",
];
const texts = [
  "Enviamos tus certificados directamente a tu ciudad.",
  "Descubre Diplomados y Cursos virtuales de excelencia.",
  "Inicia un programa 100% online y certifícate.",
];

const buttons = [
  { text: "CONOCE MÁS", link: "https://api.whatsapp.com/send?phone=51900102090" },
  { text: "CONOCE MÁS", link: "https://api.whatsapp.com/send?phone=51900102090" },
  { text: "INSCRÍBETE AHORA", link: "https://api.whatsapp.com/send?phone=51900102090" },
];

const tittles = [
  {
    title: "Programas de Certificación Directos",
    color: "text-white",
  },
  {
    title: "Excelencia en Educación Virtual",
    color: "text-white",
  },
  {
    title: "Formación 100% Online",
    color: "text-white",
  },
];

// Definición de los íconos sociales
const socialLinks = [
  {
    href: "https://www.facebook.com/CimadeEC",
    icon: FaFacebookF,
  },
  { href: "https://www.instagram.com/cimade_ec/", icon: FaInstagram },
  { href: "https://www.instagram.com/cimade_ec/", icon: FaTiktok, disabled: false },
  { href: "https://api.whatsapp.com/send?phone=51900102090", icon: FaWhatsapp, disabled: false }, 
  { href: "https://www.youtube.com/@cimadeec", icon: FaYoutube, disabled: false },
];

// Componente memoizado para los íconos de redes sociales
const SocialLinks = memo(() => {
  const [showMessage, setShowMessage] = useState(false); // Estado para mostrar mensaje

  return (
    <>
      {/* Contenedor principal */}
      <div className="text-gray-100 lg:text-4xl text-x1 inline-flex lg:gap-6 gap-4">
        {socialLinks.map(({ href, icon: Icon, disabled }, idx) => (
          <div key={idx} className="relative">
            <Link
              href={disabled ? "#" : href} // Previene la navegación si está deshabilitado
              target={disabled ? undefined : "_blank"}
              className={`p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={disabled ? (e) => e.preventDefault() : undefined} // Previene la acción si está deshabilitado
              onMouseEnter={() => disabled && setShowMessage(true)} // Muestra mensaje al pasar el cursor
              onMouseLeave={() => disabled && setShowMessage(false)} // Oculta mensaje al quitar el cursor
            >
              <Icon />
            </Link>
            {/* Mensaje de indisponibilidad */}
            {disabled && showMessage && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-red-500 text-sm">
                Aún no disponible
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
});

// Componente Principal
function PrincipalHome() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div
      className="z-0 block md:flex bg-white"
      style={{
        backgroundImage: `url('/image/bannerD.jpg')`, // Usa url() para definir la imagen correctamente
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "100px", // Añadimos padding superior
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col md:flex-row max-w-screen-xl mx-auto items-center justify-between w-full px-4 md:px-12"
        style={{ minHeight: "600px" }}
      >
        {/* Sección de texto dentro de un "card" */}
        <div className="mb-10 lg:mb-0 p-4 md:mt-0 w-full md:w-2/2 order-2 md:order-1 flex justify-center items-center">
          <div
            className="shadow-lg rounded-3xl p-8 w-full h-auto flex flex-col items-center md:items-start relative overflow-visible bg-gradient-to-t from-sky-800"
            style={{
              border: "none", // Borde con transparencia
            }}
          >
            {/* Iconos de Redes Sociales */}
            <div className="py-1 lg:text-left text-center px-1 flex justify-center md:justify-start">
              <SocialLinks />
            </div>

            {/* Títulos con ajuste de tamaño */}
            <div className="lg:leading-tight leading-tight min-h-[120px] md:min-h-[160px] flex items-center justify-center md:justify-start">
              {tittles[index] && (
                <h1
                  className={`mt-6 lg:text-[50px] text-[50px] font-extrabold text-center md:text-left ${tittles[index].color}`}
                >
                  {tittles[index].title}
                </h1>
              )}
            </div>

            {/* Texto adicional */}
            <p className="lg:text-2xl text-md text-white text-center md:text-left mb-8">
              {texts[index]}
            </p>

            {/* Botón de acción */}
            <div className="w-full flex justify-center md:justify-start mt-6">
              <Link
                href={buttons[index].link}
                className="inline-block text-center py-2 px-8 border-2 border-white-500 text-white rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
              >
                {buttons[index].text}
              </Link>
            </div>
          </div>
        </div>

        {/* Sección de Imagen principal a la derecha */}
        <div className="lg:text-3xl text-white mb-4 md:mb-10 w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 relative">
          <div className="relative w-[60%] h-[250px] md:h-[500px] flex items-center justify-center">
            <Image
              src={images[index]}
              alt="slider-image"
              fill
              sizes="(max-width: 608px) 100vw, (min-width: 600px) 50vw, 33vw"
              priority={index === 0}
              className="object-contain md:object-cover rounded-lg overflow-visible"
            />
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-center md:justify-start gap-4 mt-4 md:mt-6 md:absolute md:ml-52 md:bottom-4 bottom-0">
          <button
            onClick={prevSlide}
            className="py-2 px-4 text-black rounded-lg border border-blue-400"
          >
            {"<"}
          </button>
          <button
            onClick={nextSlide}
            className="py-2 px-4 text-black rounded-lg border border-blue-400"
          >
            {">"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default memo(PrincipalHome);
