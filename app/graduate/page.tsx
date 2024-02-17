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
          className="text text-center text-4xl md:text-5xl lg:text-4xl xl:text-7xl mb-4 font-bold font-poppins text-black"
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADOS - INGENIERIA CIVIL
        </div>

        <GraduateCivil/>

       
      </div>

      <div className=" p-5 flex flex-col ">
        <div
          className="text text-center text-4xl md:text-5xl lg:text-4xl xl:text-7xl mb-4 font-bold font-poppins text-black"
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADOS - INGENIERIA AMBIENTAL
        </div>

        <GraduateAmbiental/>

       
      </div>

      <div className=" p-5 flex flex-col ">
        <div
          className="text text-center text-4xl md:text-5xl lg:text-4xl xl:text-7xl mb-4 font-bold font-poppins text-black"
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADOS - INGENIERÍA AGRÓNOMA
        </div>

        <GraduateAgronomy/>

       
      </div>

      <div className=" p-5 flex flex-col ">
        <div
          className="text text-center text-4xl md:text-5xl lg:text-4xl xl:text-7xl mb-4 font-bold font-poppins text-black"
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADOS EN GENERAL
        </div>

        <GraduateGenerally/>

       
      </div>
      
      <div className=" p-5 flex flex-col ">
        <div
          className="text text-center text-4xl md:text-5xl lg:text-4xl xl:text-7xl mb-4 font-bold font-poppins text-black"
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADO - INGENIERÍA ALIMENTARIA 
        </div>

        <GraduateAlimentary/>

       
      </div>

      <div className=" p-5 flex flex-col ">
        <div
          className="text text-center text-4xl md:text-5xl lg:text-4xl xl:text-7xl mb-4 font-bold font-poppins text-black"
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADO - PSICOLOGÍA, MEDICINA Y EFECTIVOS DE LAS FUERZAS ARMADAS
        </div>

       <GraduateEtc/>

       
      </div>

    </div>
  );
};

export default Page;
