"use client";
import React from "react";
import "./StyleAbout.css";

const About = () => {
  return (
    <div id="/about">
      <div>
        <div>
          <section className="relative bg-blueGray-50">
            <div className="relative pt-80 pb-80 flex content-center items-center justify-center min-h-screen-75 ">
              <div
                className="absolute top-0 w-full h-full bg-center bg-current"
                style={{ backgroundImage: 'url("/image/about.webp")' }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-75 bg-black"
                ></span>
              </div>
              <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                      <h1 className="text-white font-semibold text-6xl mb-20">
                        Acerca de nosotros
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                style={{ transform: "translateZ(0px)" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-blueGray-200 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </div>
            <section className="pb-10 bg-blueGray-200 -mt-24">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transform hover:-translate-y-1 transition duration-600">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primaryblue">
                          <i className="fas fa-award"></i>
                        </div>
                        <h6 className="text-xl font-semibold">Misión</h6>
                        <p className="mt-2 mb-4 text-blueGray-500">
                          Nuestro propósito es ofrecer servicios especializados
                          a empresas e individuos, destacando la excelencia de
                          nuestros ponentes con tecnología y un equipo
                          comprometido con una educación de primer nivel.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-4/12 px-4 text-center transform hover:-translate-y-1 transition duration-600">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primaryrosa">
                          <i className="fas fa-retweet"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          ¿Quiénes Somos?
                        </h6>
                        <p className="mt-2 mb-4 text-blueGray-500">
                          Nos esforzamos por ser una empresa destacada,
                          innovadora y ampliamente reconocida a nivel nacional,
                          liderando en el ámbito de la capacitación, recursos
                          humanos y consultoría, y manteniendo un compromiso
                          constante con la calidad de nuestros servicios.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 w-full md:w-4/12 px-4 text-center transform hover:-translate-y-1 transition duration-600">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primaryblue">
                          <i className="fas fa-fingerprint"></i>
                        </div>
                        <h6 className="text-xl font-semibold">Visión</h6>
                        <p className="mt-2 mb-4 text-blueGray-500">
                          Ser una empresa líder, innovadora y reconocida a nivel
                          nacional, estableciendo un liderazgo en
                          capacitaciones, recursos humanos y ofrecer servicio de
                          calidad en consultoría.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="relative pt-8 pb-6 mt-1">
                  <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                          <div className="text-textblue font-semibold text-6xl mb-20">
                            Nuestros Valores
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>

                <div className="justify-items-center mx-auto  mt-1 grid max-w-2xl grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:mx-15 lg:max-w-7xl lg:grid-cols-3">
                  <div className="cardss mb-8 ">
                    <div className="logo"></div>
                    <div className="title">COMPROMISO</div>
                    <div className="icons-container"></div>
                    <div className="box box3">
                      <div className="content">
                        <span className="box-title">
                          {" "}
                          Siempre nos vemos comprometidos en ayudar a los
                          participantes, tanto los que se inscriben en los
                          diplomados y en los cursos.
                        </span>
                        <span className="box-text"></span>
                      </div>
                    </div>
                  </div>

                  <div className="cardss mb-8 ">
                    <div className="logo"></div>
                    <div className="title">RESPONSABILIDAD</div>
                    <div className="icons-container"></div>
                    <div className="box box3">
                      <div className="content">
                        <span className="box-title">
                          Los miembros de esta empresa siempre se ponen tareas
                          al inicio de la jornada laboral, tarea la cual se debe
                          de cumplir al final de la jornada, hecho que siempre
                          suele cumplirse con éxito.
                        </span>
                        <span className="box-text"></span>
                      </div>
                    </div>
                  </div>

                  <div className="cardss mb-8 ">
                    <div className="logo"></div>
                    <div className="title">PUNTUALIDAD</div>
                    <div className="icons-container"></div>
                    <div className="box box3">
                      <div className="content">
                        <span className="box-title">
                          Antes de llegar a la hora, debemos llegar antes para
                          poder limpiar nuestras oficinas y dar una mejor imagen
                          de estas a los participantes que quieran recoger sus
                          respectivos certificados.
                        </span>
                        <span className="box-text"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
