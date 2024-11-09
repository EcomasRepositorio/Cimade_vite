import React from "react";
import CursoAmbientaly from "@/components/cursos/IngAmbientaly/CursoAmbientaly";
import CursoIrrigation from "@/components/cursos/IngAgronomy/CursoIrrigation";
import CursoSolidWaste from "@/components/cursos/IngAmbientaly/CursoSolidWaste";
import CursoTechnicalIrrigation from "@/components/cursos/IngAgronomy/CursoTechnicalIrrigation";
/* import GraduateTechnicalAssistant from "@/components/cursos/IngCivil/GraduateTechnicalAssistant";
import GraduateIngVial from "@/components/cursos/IngCivil/GraduateIngVial";
import GraduateIngBridge from "@/components/cursos/IngCivil/GraduateIngBridge";
import GraduateWorksSupervision from "@/components/cursos/IngCivil/GraduateWorksSupervision";
import GraduateFoodQuality from "@/components/cursos/IngAlimentary/GraduateFoodQuality";
import GraduateSsoma from "@/components/cursos/ssoma/GraduateSsoma"; */
import Whatsapp from "@/components/whatsapp/Index";
import CursoQualityMonitoringAmbientaly from "@/components/cursos/IngAmbientaly/CursoQualityMonitoringAmbientaly";
import CursoManagementAmbientaly from "@/components/cursos/IngAmbientaly/CursoManagementAmbientaly";

const Graduate = () => {
  return (
    <section id="/graduate">
     <div className="">
          {/* <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-gray-800"></span> */}
        <div className="relative mx-auto inset-0 flex flex-col justify-center  items-center text-center text-customDarkPurple px-4">
          <h1 className="font-extrabold text-4xl lg:text-6xl mt-10">
            Nuestros Cursos
          </h1>
          <p className="mt-4 text-lg md:text-2xl mb-30">
            ¡Brindamos un servicio de excelencia para garantizar el éxito en tu
            carrera profesional!
          </p>
        </div>
        {/* <div className="relative mx-auto max-w-screen-xl p-2 text-white">
          <h1 className="font-extrabold text-4xl lg:text-6xl mt-10">
            Nuestros cursos
          </h1>
          <p className="font-semibold text-lg mt-2">
            ¡aqui encontraras nuestros cursos disponibles!
          </p>
        </div> */}
      </div>

      <div className="p-1 flex flex-col">
        <div id="CursoAmbientaly" className="mb-10 lg:mb-[-50px] ">
          <h3 className="">
            {/*CURSOS DE ESTUDIO DE IMPACTO AMBIENTAL  1*/}
          </h3>
          <CursoAmbientaly />
        </div>

        <div id="CursoSolidWaste" className="mb-10 lg:mb-[-50px] ">
          <h3 className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-1 lg:mt-1 font-extrabold border-b-4 p-2">
            {/* GESTIÓN Y MANEJO INTEGRAL DE RESIDUOS SÓLIDOSs 2  */}
          </h3>
          <CursoSolidWaste />
        </div>

        <div
          id="CursoQualityMonitoringAmbientaly"
          className="mb-10 lg:mb-[-50px] "
        >
          <h3 className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-1 lg:mt-1 font-extrabold border-b-4 p-2">
            {/* Monitoreo y Evaluación de la Calidad Ambiental 3*/}
          </h3>
          <CursoQualityMonitoringAmbientaly />
        </div>

        <div id="CursoManagementAmbientaly" className="mb-10 lg:mb-[-50px] ">
          <h3 className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-1 lg:mt-1 font-extrabold border-b-4 p-2">
            {/* GESTION AMBIENTAL MUNICPAL Y REGIONAL4 */}
          </h3>
          <CursoManagementAmbientaly />
        </div>

        <div id="CursoIrrigation" className="mb-10 lg:mb-[-50px] ">
          <h3 className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-1 lg:mt-1 font-extrabold border-b-4 p-2">
            {/* RIEGO Y FERTIRRIEGO 5*/}
          </h3>
          <CursoIrrigation />
        </div>

        <div id="CursoTechnicalIrrigation" className="mb-1 lg:mb-[-50px] ">
          {" "}
          {/* Ajuste de margen superior e inferior */}
          <h3 className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-1 lg:mt-1 font-extrabold border-b-4 p-2">
            {/* SISTEMA DE RIEGO TECNIFICADO    6  */}
          </h3>
          <CursoTechnicalIrrigation />
        </div>









        {/* <div className='mb-20 lg:mb-[-50px]'>
          <h3 className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-1 lg:mt-1 font-extrabold border-b-4 p-2">ASISTENTE TÉCNICO EN OBRAS </h3>
          <GraduateTechnicalAssistant />
        </div>
        
        <div className='mb-20 lg:mb-[-50px]'>
          <h3 className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-1 lg:mt-1 font-extrabold border-b-4 p-2"> Ingeniería Vial</h3>
          <GraduateIngVial />
        </div>
        
        <div className='mb-20 lg:mb-[-50px]'>
          <h3 className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-1 lg:mt-1 font-extrabold border-b-4 p-2"> Ingeniería de Puentes </h3>
          <GraduateIngBridge />
        </div>
        
        <div className='mb-20 lg:mb-[-50px]'>
          <h3 className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-1 lg:mt-1 font-extrabold border-b-4 p-2"> RESIDENCIA Y SUPERVISIÓN DE OBRAS </h3>
          <GraduateWorksSupervision />
        </div>
        
        <div className='mb-20 lg:mb-[-50px]'>
          <h3 className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-1 lg:mt-1 font-extrabold border-b-4 p-2">GESTIÓN DE LA CALIDAD E INOCUIDAD ALIMENTARIA </h3>
          <GraduateFoodQuality />
        </div>
        
        <div className='mb-20 lg:mb-4 mt-10'> Ajuste de margen superior e inferior 
          <h3 className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-1 lg:mt-1 font-extrabold border-b-4 p-2"> SEGURIDAD, SALUD OCUPACIONAL Y MEDIO AMBIENTE (SSOMA) </h3>
          <GraduateSsoma />
        </div> */}
      </div>
      <Whatsapp />
    </section>
  );
};

export default Graduate;
