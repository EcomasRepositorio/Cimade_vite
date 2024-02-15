import React from "react";
import Link from "next/link";
import { BiArrowFromLeft } from "react-icons/bi";

const Courses = () => {
  return (
    <div>
      {/* CURSOS-INFORMACION */}
      <div
        className="p-5"
        style={{
          backgroundImage: "linear-gradient(to right, #002e79, #006eb0)",
        }}
      >
        <div className="text-center font-semibold font-poppins">
          <p className="font-extrabold text-white text-[60px] mt-10">
            Nuestros Cursos
          </p>
        </div>

        <section className="bg-gray-2 dark:bg-dark pt-20 pb-10 lg:pt-[80px]">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 xl:w-1/3 transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3  dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/image/ing_riego.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Topografía, Diseño Geométrico, Señalización y Seguridad Vial
                      </a>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 xl:w-1/3 transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/image/ing_riego.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Sistemas de Riego Tecnificado por Goteo
                      </a>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 xl:w-1/3 transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/image/ing_alimentarias.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Elaboración de Matriz IPERC - Mapa de Riesgos
                      </a>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 xl:w-1/3 transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/image/ing_alimentarias.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Calidad e Inocuidad Alimentaria
                      </a>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 xl:w-1/3 transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/image/ing_alimentarias.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Valorización de Residuos Sólidos
                      </a>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 xl:w-1/3 transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/image/ing_alimentarias.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Monitoreo de Agentes Ocupacionales
                      </a>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/graduate" className="text-gray-100 font-mono text-2xl">
          <div className="flex justify-between items-center border rounded-3xl lg:ml-40 lg:mr-40 p-3">
            <div className="inline-block">Ver mas cursos...</div>
              <BiArrowFromLeft className="text-5xl"/>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Courses;
