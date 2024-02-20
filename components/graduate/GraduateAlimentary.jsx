import Link from "next/link";
import React, { useState, useEffect } from "react";
import { lista13 } from "@/components/utils/courses";


const GraduateAlimentary = () => {
    const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
    const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);
   
    useEffect(() => {}, []);

  const toggleAccordion1 = () => {
    setIsAccordionOpen1(!isAccordionOpen1);
    setIsAccordionOpen2(false); // Cierra el otro elemento si está abierto
  };



  return (
    <div>
       <div className="py-12 md:px-20 sm:px-14 px-6 flex flex-col sm:flex-row justify-center">
          <div className="sm:w-96 mb-4 sm:mb-0">
            <img
              className="bg-cover h-96 w-96 sm:h-auto rounded-3xl"
              src="/graduate/inocuidad.png"
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
              GESTIÓN DE LA CALIDAD E INOCUIDAD ALIMENTARIA
            </div>
            <div className="text-gray-700 mb-2 md:mb-6 font-montserrat text-2xl">
              <div className="flex items-center mb-2">
                <img src="/icons/calendar.webp" alt="logo" />
                <p className="font-semibold ml-1">Inicio 25 de febrero</p>
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
                <p className="font-semibold">420 horas académicas (<span className="credits">26 créditos</span>)</p>
              </div>
            </div>



            <div className="flex flex-col items-start">
              <Link
                className="border bg-primaryrosa flex items-center justify-center h mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full hover:bg-primaryceleste "
                href="https://api.whatsapp.com/send?phone=51900102090"
                target="_blank"
              >
               <h1 className="transition-transform transform hover:scale-110">Mas información</h1>
              </Link>
              <button
                onClick={toggleAccordion1}
                className="p-3 border bg-primaryceleste flex items-center justify-between mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full "
              >
               <h1 className="transition-transform transform hover:scale-110">Lista de Módulos</h1>

                <img className=" ml-8 transition-transform transform hover:scale-125 " src="/icons/modulo.webp" alt="op" />
              </button>
            </div>
            {isAccordionOpen1 && (
              <div className="bg-white rounded-lg">
                <div className="text-textblue text-left lg:text-xl text-sm py-4 font-sans font-semibold ml-4 ">
                <ul>
                  {lista13.map((item, index) => (
                    <li
                      className="lg:p-2 p-2 mb-3 border rounded-md bg-slate-50 border-primaryceleste mr-4"
                      key={index}
                    >
                      <a
                        href={`https://wa.me/51900102090/?text=${encodeURIComponent(
                          item
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item}
                      </a>
                    </li>
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

export default GraduateAlimentary 
