import Link from "next/link";
import React, { useState, useEffect } from "react";
import { lista10 } from "@/components/utils/courses";
import { lista11 } from "@/components/utils/courses";



const GraduateAgronomy = () => {

    const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
    const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);
   

    
    useEffect(() => {}, []);

  const toggleAccordion1 = () => {
    setIsAccordionOpen1(!isAccordionOpen1);
    setIsAccordionOpen2(false); // Cierra el otro elemento si está abierto
  };

  const toggleAccordion2 = () => {
    setIsAccordionOpen2(!isAccordionOpen2);
    setIsAccordionOpen1(false); // Cierra el otro elemento si está abierto
  };  


  return (
    <div>
      <div className="py-12 md:px-20 sm:px-14 px-6 flex flex-col sm:flex-row justify-center">
          <div className="sm:w-96 mb-4 sm:mb-0">
            <img
              className="bg-cover w-full h-64 sm:h-auto rounded-3xl"
              src="/image/ing_small.jpg"
              alt="icon"
            />
          </div>

          <div className="sm:w-1/2 md:px-20 sm:px-5">
            <div
              className="text-black font-bold font-poppins lg:text-5xl text-5xl my-2 mb-6"
              style={{
                background: `linear-gradient(to right, #002e79, #006eb0)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ASISTENTE TÉCNICO EN OBRAS
            </div>
            <div className="text-gray-700 mb-2 md:mb-6 font-montserrat text-2xl">
              <div className="flex items-center mb-2">
                <img src="/icons/calendar.webp" alt="logo" />
                <p className="font-semibold ml-1">Inicio 17 de febrero</p>
              </div>

              <div className="flex items-center mb-2">
                <img src="/icons/arrow.webp" alt="" className="mr-2" />
                <p className="font-semibold">Modalidad online</p>
              </div>

              <div className="flex items-center mb-2">
                <img src="/icons/arrow.webp" alt="" className="mr-2" />
                <p className="font-semibold">4 meses</p>
              </div>

              <div className="flex items-center mb-2">
                <img src="/icons/arrow.webp" alt="" className="mr-2" />
                <p className="font-semibold">192 horas académicas</p>
              </div>
            </div>



            <div className="flex flex-col items-start">
              <Link
                className="border bg-primaryrosa flex items-center justify-center mb-4 text-white font-bold rounded-full h-16 w-6/12  "
                href="https://api.whatsapp.com/send?phone=51900102090"
                target="_blank"
              >
                Mas información
              </Link>
              <button
                onClick={toggleAccordion1}
                className="border bg-primaryceleste flex items-center justify-center mb-4 text-white font-bold rounded-full h-16 w-6/12"
              >
                Lista de Módulo
                <img className=" ml-8" src="/icons/modulo.webp" alt="op" />
              </button>
            </div>
            {isAccordionOpen1 && (
              <div className="bg-slate-200 rounded-lg">
                <div className="text-textblue text-left py-4 font-sans font-semibold ml-8">
                  <ul>
                    {lista10.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="py-12 md:px-20 sm:px-14 px-6 flex flex-col sm:flex-row justify-center">
          <div className="sm:w-96 mb-4 sm:mb-0">
            <img
              className="bg-cover w-full h-64 sm:h-auto rounded-3xl"
              src="/image/ing_small.jpg"
              alt="icon"
            />
          </div>

          <div className="sm:w-1/2 md:px-20 sm:px-5">
            <div
              className="text-black font-bold font-poppins lg:text-5xl text-5xl my-2 mb-6"
              style={{
                background: `linear-gradient(to right, #002e79, #006eb0)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ASISTENTE TÉCNICO EN OBRAS
            </div>
            <div className="text-gray-700 mb-2 md:mb-6 font-montserrat text-2xl">
              <div className="flex items-center mb-2">
                <img src="/icons/calendar.webp" alt="logo" />
                <p className="font-semibold ml-1">Inicio 17 de febrero</p>
              </div>

              <div className="flex items-center mb-2">
                <img src="/icons/arrow.webp" alt="" className="mr-2" />
                <p className="font-semibold">Modalidad online</p>
              </div>

              <div className="flex items-center mb-2">
                <img src="/icons/arrow.webp" alt="" className="mr-2" />
                <p className="font-semibold">4 meses</p>
              </div>

              <div className="flex items-center mb-2">
                <img src="/icons/arrow.webp" alt="" className="mr-2" />
                <p className="font-semibold">192 horas académicas</p>
              </div>
            </div>



            <div className="flex flex-col items-start">
              <Link
                className="border bg-primaryrosa flex items-center justify-center mb-4 text-white font-bold rounded-full h-16 w-6/12  "
                href="https://api.whatsapp.com/send?phone=51900102090"
                target="_blank"
              >
                Mas información
              </Link>
              <button
                onClick={toggleAccordion2}
                className="border bg-primaryceleste flex items-center justify-center mb-4 text-white font-bold rounded-full h-16 w-6/12"
              >
                Lista de Módulo
                <img className=" ml-8" src="/icons/modulo.webp" alt="op" />
              </button>
            </div>
            {isAccordionOpen2 && (
              <div className="bg-slate-200 rounded-lg">
                <div className="text-textblue text-left py-4 font-sans font-semibold ml-8">
                  <ul>
                    {lista11.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default GraduateAgronomy
