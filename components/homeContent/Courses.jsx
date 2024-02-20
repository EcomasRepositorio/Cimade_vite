import React from "react";

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
          <p style={{ color: "white", fontSize: "60px" }}>
            Nuestros Cursos{" "}
          </p>
        </div>

        <section className="bg-gray-2 dark:bg-dark pt-20 pb-10 lg:pt-[40px] lg:pb-20">
          <div className="container mx-auto lg:p-20">
            <div className="flex flex-wrap">
              <div className="w-auto px-4 md:w-1/3 lg:w-1/3 h-full transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3  dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/graduate/topografia.png"
                    alt="topografia"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-8">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Topografía, Diseño Geométrico, Señalización y Seguridad Vial
                      </a>
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 leading-relaxed text-body-color dark:text-dark-6 mb-7">
                    Curso integral de topografía, diseño geométrico, señalización y seguridad vial que abarca de manera exhaustiva los fundamentos esenciales para la planificación, diseño y mantenimiento eficiente y seguro de infraestructuras viales. Este programa proporciona a los participantes una sólida base de conocimientos. 
                    </p>
                    <a
                      href={`https://wa.me/51900102090/?text=${encodeURIComponent(
                       
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      Mas Información
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 xl:w-1/3 h-full transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/graduate/sistema_riego.png"
                    alt="sitema riego"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-8">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Sistemas de Riego Tecnificado por Goteo
                      </a>
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 leading-relaxed text-body-color dark:text-dark-6 mb-7">
                     Sistema de Riego por Goteo: Curso sobre implementación y gestión de sistemas agrícolas de riego con enfoque en la técnica de goteo. Los participantes adquirirán conocimientos prácticos en diseño, instalación y mantenimiento, optimizando recursos y mejorando la productividad agrícola en cualquier sector.

                    </p>
                    <a
                      href={`https://wa.me/51900102090/?text=${encodeURIComponent(
                       
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      Mas Información
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 xl:w-1/3 transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/graduate/valorizacion_residuos.png"
                    alt="valoraciones residuos"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-6">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                       Valorización de Residuos Sólidos
                      </a>
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 leading-relaxed text-body-color dark:text-dark-6 mb-7">
                    Curso sobre Valorización de Residuos Sólidos: Explora estrategias sostenibles para gestionar residuos sólidos. Se enseñan métodos eficientes de identificación, clasificación y aprovechamiento, promoviendo reciclaje, reutilización y conversión en recursos para reducir impactos ambientales y fomentar la economía circular y mejorar de manera significativa nuestro medio ambiente.
                    </p>
                    <a
                      href={`https://wa.me/51900102090/?text=${encodeURIComponent(
                       
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      Mas Información
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 xl:w-1/3 transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/graduate/calidad_alimentaria.png"
                    alt="calidad alimentaria"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-8">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                       Calidad e Inocuidad Alimentaria
                      </a>
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 leading-relaxed text-body-color dark:text-dark-6 mb-7">
                    Curso sobre Calidad e Inocuidad Alimentaria: Explora los principios y prácticas esenciales para garantizar la seguridad y calidad de los alimentos desde su producción hasta el consumo. Este programa aborda estándares internacionales,
                     controles de calidad, buenas prácticas de manufactura y sistemas de gestión que aseguran la inocuidad alimentaria, cumpliendo con regulaciones y contribuyendo a la protección de la salud pública.
                    </p>
                    <a
                      href={`https://wa.me/51900102090/?text=${encodeURIComponent(
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      Mas Información
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 xl:w-1/3 transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/graduate/elaboracion_matriz.png"
                    alt="matriz"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 lg:p-[32px]">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Elaboración de Matriz IPERC - Mapa de Riesgos
                      </a>
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 leading-relaxed text-body-color dark:text-dark-6 mb-7">
                    Curso de Elaboración de Matriz IPERC y Mapa de Riesgos: Enfocado en capacitar a los participantes en la identificación, evaluación y gestión de riesgos laborales mediante la elaboración de la Matriz IPERC
                     y la creación de Mapas de Riesgos. Este programa proporciona herramientas prácticas para fortalecer la seguridad en el entorno laboral y cumplir con los estándares de prevención.
                    </p>
                    <a
                      href={`https://wa.me/51900102090/?text=${encodeURIComponent(
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      Mas Información
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 xl:w-1/3 transform hover:-translate-y-1 transition duration-600">
                <div className="mb-10 overflow-hidden duration-300 bg-white rounded-2xl dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="/graduate/monitoreo_ocupacionales.png"
                    alt="monitoreo"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-6">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-textblue hover:text-primaryceleste mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Monitoreo de Agentes Ocupacionales
                      </a>
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 leading-relaxed text-body-color dark:text-dark-6 mb-7">
                    Curso de Monitoreo de Agentes Ocupacionales: Brinda conocimientos especializados en técnicas y estrategias para llevar a cabo el monitoreo efectivo de agentes ocupacionales en diversos entornos laborales. Los participantes aprenderán a identificar, evaluar y controlar los riesgos relacionados con sustancias químicas,
                     físicas o biológicas, contribuyendo así a crear ambientes laborales seguros y saludables para sus trabajadores.
                    </p>
                    <a
                      href={`https://wa.me/51900102090/?text=${encodeURIComponent(
                       
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2 text-base font-medium transition border-primaryrosa border rounded-full text-primaryblue hover:border-primaryrosa hover:bg-primaryrosa border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      Mas Información
                    </a>

                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
