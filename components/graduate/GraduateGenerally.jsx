"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { lista12 } from "@/components/utils/courses";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";

// Función para generar el enlace a WhatsApp con el curso y módulo
const generarEnlaceWhatsapp = (curso, modulo) => {
  return `https://wa.me/51900102090/?text=${encodeURIComponent(
    `Estoy interesado en el módulo ${modulo} del curso ${curso}`
  )}`;
};

// Función para convertir números a romanos (para el número de módulo)
const toRoman = (num) => {
  const lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let roman = "";
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
};

const GraduateGenerally = () => {
  const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false); // Estado para simular deshabilitar

  const toggleAccordion1 = () => {
    setIsAccordionOpen1(!isAccordionOpen1);
  };

  return (
    <div>
      <div className="py-12 md:px-20 sm:px-14 px-6 flex flex-col sm:flex-row justify-center">
        <div className="sm:w-96 mb-4 sm:mb-0">
          <img
            className="bg-cover h-96 w-96 sm:h-auto rounded-3xl border border-blue-500"
            src="/dip/7.webp"
            alt="icon"
          />
        </div>

        <div className="sm:w-1/2 md:px-20 sm:px-5">
          <div
            className="text-black font-bold font-poppins lg:text-4xl text-4xl my-2 mb-6"
            style={{
              background: `linear-gradient(to right, #002e79, #006eb0)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            SEGURIDAD, SALUD OCUPACIONAL Y MEDIO AMBIENTE
          </div>

          <div className="text-gray-700 mb-2 md:mb-6 font-montserrat text-2xl">
            <div className="flex items-center mb-2">
              <img src="/icons/calendar.webp" alt="logo" />
              <p className="font-semibold ml-1">Inicio 03 de marzo</p>
            </div>

            <div className="flex items-center mb-2">
              <img src="/icons/arrow.webp" alt="" className="mr-2" />
              <p className="font-semibold">Modalidad Online via Zoom</p>
            </div>

            <div className="flex items-center mb-2">
              <img src="/icons/arrow.webp" alt="" className="mr-2" />
              <p className="font-semibold">4 meses</p>
            </div>

            <div className="flex items-center mb-2">
              <img src="/icons/arrow.webp" alt="" className="mr-2" />
              <p className="font-semibold">
                420 horas académicas (<span className="credits">26 créditos</span>)
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <Link
              className="border bg-primaryrosa flex items-center justify-center mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full hover:bg-primaryceleste"
              href="https://api.whatsapp.com/send?phone=51900102090"
              target="_blank"
            >
              <h1 className="transition-transform transform hover:scale-110">
                Más información
              </h1>
            </Link>

            <button
              onClick={toggleAccordion1}
              className="p-3 border bg-primaryceleste flex items-center justify-between mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full"
            >
              <h1 className="transition-transform transform hover:scale-110">
                Lista de Módulos
              </h1>
              <FaChevronDown className="ml-2 text-gray-600 w-6 h-6" />
            </button>
          </div>

          {/* Acordeón de Módulos */}
          {isAccordionOpen1 && (
            <div className="bg-white rounded-lg">
              <ul className="space-y-4">
                {lista12.map((modulo, moduloIndex) => (
                  <li
                    key={moduloIndex}
                    className={`flex items-center justify-between border-2 border-blue-400 rounded-lg py-2 px-4 text-gray-800 ${
                      isDisabled ? "cursor-not-allowed opacity-50" : ""
                    }`}
                  >
                    <Link
                      href={
                        isDisabled
                          ? "#"
                          : generarEnlaceWhatsapp(
                              "SEGURIDAD, SALUD OCUPACIONAL Y MEDIO AMBIENTE",
                              modulo
                            )
                      } // Previene la navegación si está deshabilitado
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 w-full ${
                        isDisabled ? "pointer-events-none" : ""
                      }`}
                    >
                      <FaWhatsapp className="text-green-500 w-5 h-5" />
                      <span className="text-lg font-semibold">
                        MÓDULO {toRoman(moduloIndex + 1)}:
                      </span>
                      <span className="text-md">{modulo}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GraduateGenerally;
