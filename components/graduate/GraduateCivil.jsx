import Link from "next/link";
import React, { useState, useEffect } from "react";
import { lista1 } from "@/components/utils/courses";
import { lista2 } from "@/components/utils/courses";
import { lista3 } from "@/components/utils/courses";
import { lista4 } from "@/components/utils/courses";
import { lista5 } from "@/components/utils/courses";

const GraduateCivil = () => {
  const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
  const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);
  const [isAccordionOpen3, setIsAccordionOpen3] = useState(false);
  const [isAccordionOpen4, setIsAccordionOpen4] = useState(false);
  const [isAccordionOpen5, setIsAccordionOpen5] = useState(false);

  useEffect(() => {}, []);

  const toggleAccordion1 = () => {
    setIsAccordionOpen1(!isAccordionOpen1);
    setIsAccordionOpen2(false); // Cierra el otro elemento si está abierto
  };

  const toggleAccordion2 = () => {
    setIsAccordionOpen2(!isAccordionOpen2);
    setIsAccordionOpen1(false); // Cierra el otro elemento si está abierto
  };

  const toggleAccordion3 = () => {
    setIsAccordionOpen3(!isAccordionOpen3);
    setIsAccordionOpen2(false); // Cierra el otro elemento si está abierto
  };

  const toggleAccordion4 = () => {
    setIsAccordionOpen4(!isAccordionOpen4);
    setIsAccordionOpen3(false); // Cierra el otro elemento si está abierto
  };

  const toggleAccordion5 = () => {
    setIsAccordionOpen5(!isAccordionOpen5);
    setIsAccordionOpen4(false); // Cierra el otro elemento si está abierto
  };

  return (
    <div>
      <div className="py-12 md:px-20 sm:px-14 px-6 flex flex-col sm:flex-row justify-center">
        <div className="sm:w-96 mb-4 sm:mb-0">
          <img
            className="bg-cover h-96 w-96 sm:h-auto rounded-3xl  transform hover:-translate-y-1 transition duration-600"
            src="/graduate/tecnico_obras.png"
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
            ASISTENTE TÉCNICO EN OBRAS
          </div>
          <div className="text-gray-700 mb-2 md:mb-6 font-montserrat text-2xl">
            <div className="flex items-center mb-2">
              <img src="/icons/calendar.webp" alt="logo" />
              <p className="font-semibold ml-1">Inicio 18 de febrero</p>
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
                420 horas académicas (
                <span className="credits">26 créditos</span>)
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <Link
              className="border bg-primaryrosa flex items-center justify-center h mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full hover:bg-primaryceleste "
              href="https://api.whatsapp.com/send?phone=51900102090"
              target="_blank"
            >
              <h1 className="transition-transform transform hover:scale-110">
                Mas información
              </h1>
            </Link>
            <button
              onClick={toggleAccordion1}
              className="p-3 border bg-primaryceleste flex items-center justify-between mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full "
            >
              <h1 className="transition-transform transform hover:scale-110">
                Lista de Módulos
              </h1>

              <img
                className=" ml-8 transition-transform transform hover:scale-125 "
                src="/icons/modulo.webp"
                alt="op"
              />
            </button>
          </div>
          {isAccordionOpen1 && (
            <div className="bg-white rounded-lg">
              <div className="text-textblue text-left lg:text-xl text-sm py-4 font-sans font-semibold ml-4 ">
                <ul>
                  {lista1.map((item, index) => (
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

      <div className="py-12 md:px-20 sm:px-14 px-6 flex flex-col sm:flex-row justify-center">
        <div className="sm:w-96 mb-4 sm:mb-0">
          <img
            className="bg-cover h-96 w-96 sm:h-auto rounded-3xl  transform hover:-translate-y-1 transition duration-600"
            src="/graduate/inge_vial.png"
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
            INGENIERÍA VIAL
          </div>
          <div className="text-gray-700 mb-2 md:mb-6 font-montserrat text-2xl">
            <div className="flex items-center mb-2">
              <img src="/icons/calendar.webp" alt="logo" />
              <p className="font-semibold ml-1">Inicio 16 de marzo</p>
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
                420 horas académicas (
                <span className="credits">26 créditos</span>)
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <Link
              className="border bg-primaryrosa flex items-center justify-center h mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full hover:bg-primaryceleste "
              href="https://api.whatsapp.com/send?phone=51900102090"
              target="_blank"
            >
              <h1 className="transition-transform transform hover:scale-110">
                Mas información
              </h1>
            </Link>
            <button
              onClick={toggleAccordion2}
              className="p-3 border bg-primaryceleste flex items-center justify-between mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full "
            >
              <h1 className="transition-transform transform hover:scale-110">
                Lista de Módulos
              </h1>

              <img
                className=" ml-8 transition-transform transform hover:scale-125 "
                src="/icons/modulo.webp"
                alt="op"
              />
            </button>
          </div>
          {isAccordionOpen2 && (
            <div className="bg-white rounded-lg">
              <div className="text-textblue text-left lg:text-xl text-sm py-4 font-sans font-semibold ml-4 ">
              <ul>
                  {lista2.map((item, index) => (
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

      <div className="py-12 md:px-20 sm:px-14 px-6 flex flex-col sm:flex-row justify-center">
        <div className="sm:w-96 mb-4 sm:mb-0">
          <img
            className="bg-cover h-96 w-96 sm:h-auto rounded-3xl  transform hover:-translate-y-1 transition duration-600"
            src="/graduate/inge_puentes.png"
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
            INGENIERÍA DE PUENTES
          </div>
          <div className="text-gray-700 mb-2 md:mb-6 font-montserrat text-2xl">
            <div className="flex items-center mb-2">
              <img src="/icons/calendar.webp" alt="logo" />
              <p className="font-semibold ml-1">Inicio 06 de abril</p>
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
                420 horas académicas (
                <span className="credits">26 créditos</span>)
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <Link
              className="border bg-primaryrosa flex items-center justify-center h mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full hover:bg-primaryceleste "
              href="https://api.whatsapp.com/send?phone=51900102090"
              target="_blank"
            >
              <h1 className="transition-transform transform hover:scale-110">
                Mas información
              </h1>
            </Link>
            <button
              onClick={toggleAccordion3}
              className="p-3 border bg-primaryceleste flex items-center justify-between mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full "
            >
              <h1 className="transition-transform transform hover:scale-110">
                Lista de Módulos
              </h1>

              <img
                className=" ml-8 transition-transform transform hover:scale-125 "
                src="/icons/modulo.webp"
                alt="op"
              />
            </button>
          </div>
          {isAccordionOpen3 && (
            <div className="bg-white rounded-lg">
              <div className="text-textblue text-left lg:text-xl text-sm py-4 font-sans font-semibold ml-4 ">
              <ul>
                  {lista3.map((item, index) => (
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

      <div className="py-12 md:px-20 sm:px-14 px-6 flex flex-col sm:flex-row justify-center">
        <div className="sm:w-96 mb-4 sm:mb-0">
          <img
            className="bg-cover h-96 w-96 sm:h-auto rounded-3xl  transform hover:-translate-y-1 transition duration-600"
            src="/graduate/inge_estructuras.png"
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
            INGENIERÍA ESTRUCTURAL
          </div>
          <div className="text-gray-700 mb-2 md:mb-6 font-montserrat text-2xl">
            <div className="flex items-center mb-2">
              <img src="/icons/calendar.webp" alt="logo" />
              <p className="font-semibold ml-1">Inicio 05 de mayo</p>
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
                420 horas académicas (
                <span className="credits">26 créditos</span>)
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <Link
              className="border bg-primaryrosa flex items-center justify-center h mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full hover:bg-primaryceleste "
              href="https://api.whatsapp.com/send?phone=51900102090"
              target="_blank"
            >
              <h1 className="transition-transform transform hover:scale-110">
                Mas información
              </h1>
            </Link>
            <button
              onClick={toggleAccordion4}
              className="p-3 border bg-primaryceleste flex items-center justify-between mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full "
            >
              <h1 className="transition-transform transform hover:scale-110">
                Lista de Módulos
              </h1>

              <img
                className=" ml-8 transition-transform transform hover:scale-125 "
                src="/icons/modulo.webp"
                alt="op"
              />
            </button>
          </div>
          {isAccordionOpen4 && (
            <div className="bg-white rounded-lg">
              <div className="text-textblue text-left lg:text-xl text-sm py-4 font-sans font-semibold ml-4 ">
              <ul>
                  {lista4.map((item, index) => (
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

      <div className="py-12 md:px-20 sm:px-14 px-6 flex flex-col sm:flex-row justify-center">
        <div className="sm:w-96 mb-4 sm:mb-0">
          <img
            className="bg-cover h-96 w-96 sm:h-auto rounded-3xl  transform hover:-translate-y-1 transition duration-600"
            src="/graduate/residencia_supervision.png"
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
            RESIDENCIA Y SUPERVISIÓN DE OBRAS
          </div>
          <div className="text-gray-700 mb-2 md:mb-6 font-montserrat text-2xl">
            <div className="flex items-center mb-2">
              <img src="/icons/calendar.webp" alt="logo" />
              <p className="font-semibold ml-1">Inicio 06 de abril</p>
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
                420 horas académicas (
                <span className="credits">26 créditos</span>)
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <Link
              className="border bg-primaryrosa flex items-center justify-center h mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full hover:bg-primaryceleste "
              href="https://api.whatsapp.com/send?phone=51900102090"
              target="_blank"
            >
              <h1 className="transition-transform transform hover:scale-110">
                Mas información
              </h1>
            </Link>
            <button
              onClick={toggleAccordion5}
              className="p-3 border bg-primaryceleste flex items-center justify-between mb-4 text-white font-bold rounded-xl h-16 lg:w-6/12 w-full "
            >
              <h1 className="transition-transform transform hover:scale-110">
                Lista de Módulos
              </h1>

              <img
                className=" ml-8 transition-transform transform hover:scale-125 "
                src="/icons/modulo.webp"
                alt="op"
              />
            </button>
          </div>
          {isAccordionOpen5 && (
            <div className="bg-white rounded-lg">
              <div className="text-textblue text-left lg:text-xl text-sm py-4 font-sans font-semibold ml-4 ">
              <ul>
                  {lista5.map((item, index) => (
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
  );
};

export default GraduateCivil;
