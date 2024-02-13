"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
 

  useEffect(() => {
    // Any client-side logic can be placed here
    // This effect runs only on the client side
  }, []); // Empty dependency array ensures it runs only once on mount

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div id="/graduate" >
      <div className=" p-5 flex flex-col ">
        <div className="text text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 font-bold text-primaryblue " >
          DIPLOMADOS 2024
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
            <div className="text-gray-800 font-bold lg:text-6xl text-4xl my-2">
              ASISTENTE TÉCNICO EN OBRAS
            </div>
            <div className="text-gray-700 mb-2 md:mb-6 font-mono text-2xl">
              <p>Inicio 17 de febrero</p>
              <p>modalidad online</p>
              <p>4 meses</p>
              <p>192 horas académicas</p>
            </div>
            <div className="flex justify-left mb-2">
              <button className="border bg-primaryblue flex items-center justify-center sm:inline-block  mb-4 text-white font-bold rounded-full h-26 w-26  ">
                Mas información
              </button>
              <button
                onClick={toggleAccordion}
                className="border bg-primaryblue flex items-center justify-center sm:inline-block  mb-4 text-white font-bold rounded-full h-16 w-36 ml-8"
              >
                Cursos
              </button>
            </div>
            {isAccordionOpen && (
              <div className="bg-primaryblue">
                {/* Contenido del acordeón aquí */}
                <p>Contenido del curso ....</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
