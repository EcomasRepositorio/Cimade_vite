"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { lista1 } from "@/components/utils/courses";
import { lista2 } from "@/components/utils/courses";
import { lista3 } from "@/components/utils/courses";
import { lista4 } from "@/components/utils/courses";
import { lista5 } from "@/components/utils/courses";

const Page = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {}, []);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div id="/graduate">
      <div className=" p-5 flex flex-col ">
        <div className="text text-center text-4xl md:text-5xl lg:text-4xl xl:text-7xl mb-4 font-bold font-poppins text-black">
          DIPLOMADOS - INGENIERIA CIVIL
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
            <div className="text-black font-bold font-poppins lg:text-5xl text-5xl my-2">
              ASISTENTE TÉCNICO EN OBRAS
            </div>
            <div className="text-gray-700 mb-2 md:mb-6 font-mono text-2xl">
              <div className="flex items-center">
                <img src="/icons/calendar.png" alt="" className="mr-2" />
                <p className="font-semibold">Inicio 17 de febrero</p>
              </div>

              <div className="flex items-center">
                <img src="/icons/check.png" alt="" className="mr-2" />
                <p className="font-semibold">Modalidad online</p>
              </div>

              <div className="flex items-center">
                <img src="/icons/check.png" alt="" className="mr-2" />
                <p className="font-semibold">4 meses</p>
              </div>

              <div className="flex items-center">
                <img src="/icons/check.png" alt="" className="mr-2" />
                <p className="font-semibold">192 horas académicas</p>
              </div>
            </div>

            <div></div>

            <div className="flex flex-col items-center">
              <Link
                className="border bg-primaryceleste flex items-center justify-center mb-4 text-white font-bold rounded-full h-16 w-full "
                href="https://api.whatsapp.com/send?phone=51900102090"
                target="_blank"
              >
                Mas información
              </Link>
              <button
                onClick={toggleAccordion}
                className="border bg-primaryceleste flex items-center justify-center mb-4 text-white font-bold rounded-full h-16 w-full"
              >
                Cursos
                <img className=" ml-8" src="/icons/flecha.png" alt="op" />
              </button>
            </div>
            {isAccordionOpen && (
              <div className="bg-slate-200 rounded-lg">
                <div className="text-textblue text-left py-4 font-sans font-semibold ml-8">
                  <ul>
                    {lista1.map((item, index) => (
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
            <div className="text-black font-bold font-poppins lg:text-5xl text-5xl my-2">
              ASISTENTE TÉCNICO EN OBRAS
            </div>
            <div className="text-gray-700 mb-2 md:mb-6 font-mono text-2xl">
              <div className="flex items-center">
                <img src="/icons/calendar.png" alt="" className="mr-2" />
                <p className="font-semibold">Inicio 17 de febrero</p>
              </div>

              <div className="flex items-center">
                <img src="/icons/check.png" alt="" className="mr-2" />
                <p className="font-semibold">Modalidad online</p>
              </div>

              <div className="flex items-center">
                <img src="/icons/check.png" alt="" className="mr-2" />
                <p className="font-semibold">4 meses</p>
              </div>

              <div className="flex items-center">
                <img src="/icons/check.png" alt="" className="mr-2" />
                <p className="font-semibold">192 horas académicas</p>
              </div>
            </div>

            <div></div>

            <div className="flex flex-col items-center">
              <Link
                className="border bg-primaryceleste flex items-center justify-center mb-4 text-white font-bold rounded-full h-16 w-full "
                href="https://api.whatsapp.com/send?phone=51900102090"
                target="_blank"
              >
                Mas información
              </Link>
              <button
                onClick={toggleAccordion}
                className="border bg-primaryceleste flex items-center justify-center mb-4 text-white font-bold rounded-full h-16 w-full"
              >
                Cursos
                <img className=" ml-8" src="/icons/flecha.png" alt="op" />
              </button>
            </div>
            {isAccordionOpen && (
              <div className="bg-slate-200 rounded-lg">
                <div className="text-textblue text-left py-4 font-sans font-semibold ml-8">
                  <ul>
                    {lista2.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
