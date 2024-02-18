"use client";
import React from "react";
import GraduateCivil from "./GraduateCivil";
import GraduateAmbiental from "./GraduateAmbiental";
import GraduateAgronomy from "./GraduateAgronomy";
import GraduateGenerally from "./GraduateGenerally";
import GraduateAlimentary from "./GraduateAlimentary";
import GraduateEtc from "./GraduateEtc";



const Page = () => {
  
  return (
    <div id="/graduate">
      <div className=" p-5 flex flex-col ">
        <div
          className="text text-center text-4xl  lg:text-6xl xl:text-6xl mb-4 font-bold font-poppins "
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADOS EN INGENIERIA CIVIL
        </div>

        <GraduateCivil/>

       
      </div>

      <div className=" p-5 flex flex-col ">
        <div
           className="text text-center text-4xl  lg:text-6xl xl:text-6xl mb-4 font-bold font-poppins "
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADOS EN INGENIERIA AMBIENTAL
        </div>

        <GraduateAmbiental/>

       
      </div>

      <div className=" p-5 flex flex-col ">
        <div
          className="text text-center text-4xl  lg:text-6xl xl:text-6xl mb-4 font-bold font-poppins "
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADOS EN INGENIERÍA AGRÓNOMA
        </div>

        <GraduateAgronomy/>

       
      </div>

      <div className=" p-5 flex flex-col ">
        <div
          className="text text-center text-4xl  lg:text-6xl xl:text-6xl mb-4 font-bold font-poppins "
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADO PARA PROFESIONALES EN GENERAL 
        </div>

        <GraduateGenerally/>

       
      </div>
      
      <div className=" p-5 flex flex-col ">
        <div
          className="text text-center text-4xl  lg:text-6xl xl:text-6xl mb-4 font-bold font-poppins "
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADO EN INGENIERÍA ALIMENTARIA 
        </div>

        <GraduateAlimentary/>

       
      </div>

      <div className=" p-5 flex flex-col ">
        <div
          className="flex text-center text-3xl  lg:text-5xl xl:text-5xl lg:w-3/4 mb-4 font-bold font-poppins lg:ml-72 "
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADO DIRIGIDOS PARA PSICOLOGÍA, MEDICINA, TECNOLOGÍA MÉDICA, ABOGADOS, EFECTIVOS DE LAS FUERZAS ARMADAS Y LA POLICÍA NACIONAL DEL PERÚ
        </div>

       <GraduateEtc/>

       
      </div>

    </div>
  );
};

export default Page;
