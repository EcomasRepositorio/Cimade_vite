import React from "react";
import Whatsapp from '@/components/whatsapp/Index'
// En tu archivo CSS o Sass

const page = () => {
  return (
    <div id="/graduate">
      <div className=" p-5 flex flex-col ">
        <div className="text text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 font-bold text-primaryblue ">
          DIPLOMADOS 2024
        </div>
        <main className="py-12 md:px-20 sm:px-14 px-6 flex flex-col sm:flex-row justify-center">
          <div className="sm:w-96 mb-4 sm:mb-0">
            <img
              className="bg-cover w-full h-64 sm:h-auto rounded-3xl"
              src="/image/ing_civil.jpg"
              alt=""
            />
          </div>
          <div className="sm:w-1/2 md:px-20 sm:px-5">
            <div className="text-gray-800 font-bold text-5xl my-2">
              Seguridad Industrial Salud Ocupacional & Formación de Auditor
              Interno ISO 45001
            </div>
            <div className="text-gray-700 mb-2 md:mb-6">
              <p>Inicio 17 de febrero</p>
              <p>modalidad online</p>
              <p>4 meses</p>
              <p>192 horas académicas</p>
            </div>
            <div className="flex justify-left mb-2">
              <button className="border bg-primaryblue flex items-center justify-center sm:inline-block hidden mb-4 text-white font-bold rounded-full h-16 w-36 ml-8">
                Mas información
              </button>
              <button className="border bg-primaryblue flex items-center justify-center sm:inline-block hidden mb-4 text-white font-bold rounded-full h-16 w-36 ml- ">
                Cursos
              </button>
            </div>
          </div>
        </main>
      </div>
      <Whatsapp />
    </div>
  );
};

export default page;
