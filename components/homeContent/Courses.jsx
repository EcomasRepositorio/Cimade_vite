"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

// Datos de los cursos destacados
const coursesData = [
  {
    img: "/graduate/topografia.png",
    title: "Topografía, Diseño Geométrico, Señalización y Seguridad Vial",
    description:
      "Curso integral de topografía, diseño geométrico, señalización y seguridad vial que abarca de manera exhaustiva los fundamentos esenciales para la planificación, diseño y mantenimiento eficiente y seguro de infraestructuras viales.",
  },
  {
    img: "/graduate/sistema_riego.png",
    title: "Sistemas de Riego Tecnificado por Goteo",
    description:
      "Curso sobre implementación y gestión de sistemas agrícolas de riego con enfoque en la técnica de goteo. Los participantes adquirirán conocimientos prácticos en diseño, instalación y mantenimiento, optimizando recursos.",
  },
  {
    img: "/graduate/valorizacion_residuos.png",
    title: "Valorización de Residuos Sólidos",
    description:
      "Curso sobre estrategias sostenibles para gestionar residuos sólidos. Se enseñan métodos eficientes de identificación, clasificación y aprovechamiento, promoviendo reciclaje y reutilización.",
  },
  {
    img: "/graduate/calidad_alimentaria.png",
    title: "Calidad e Inocuidad Alimentaria",
    description:
      "Explora los principios y prácticas esenciales para garantizar la seguridad y calidad de los alimentos desde su producción hasta el consumo.",
  },
  {
    img: "/graduate/elaboracion_matriz.png",
    title: "Elaboración de Matriz IPERC - Mapa de Riesgos",
    description:
      "Enfocado en capacitar a los participantes en la identificación, evaluación y gestión de riesgos laborales mediante la elaboración de la Matriz IPERC y la creación de Mapas de Riesgos.",
  },
  {
    img: "/graduate/monitoreo_ocupacionales.png",
    title: "Monitoreo de Agentes Ocupacionales",
    description:
      "Brinda conocimientos especializados en técnicas y estrategias para llevar a cabo el monitoreo efectivo de agentes ocupacionales en diversos entornos laborales.",
  },


  /* 
  {
    img: "/graduate/valorizacion-obras.png",
    title: "Valorización de Obras por Contrata",
    description: "Curso que aborda los principios y procedimientos para la valorización de obras, centrándose en la correcta medición y justificación de los costos por contrata.",
  },
  {
    img: "/graduate/inspeccion-muestreo.png",
    title: "Inspección y muestreo de alimentos",
    description: "Formación que proporciona las herramientas necesarias para realizar inspecciones y muestreos de alimentos, garantizando la calidad e inocuidad de los productos.",
  },
  {
    img: "/graduate/matriz-iperc.png",
    title: "Elaboración de Matriz IPERC - Mapa de Riesgos",
    description: "Curso que enseña a elaborar una matriz IPERC, permitiendo identificar, evaluar y controlar riesgos en el entorno laboral.",
  },
  {
    img: "/graduate/valorizacion-residuos.png",
    title: "Valorización de Residuos Sólidos",
    description: "Capacitación en la valorización de residuos sólidos, enfocándose en técnicas y metodologías para maximizar el aprovechamiento de los recursos.",
  },
  {
    img: "/graduate/topografia.png",
    title: "Topografía, diseño geométrico, señalización y seguridad vial",
    description: "Curso integral que abarca los fundamentos esenciales de topografía y diseño geométrico, así como la señalización y seguridad en las infraestructuras viales.",
  },
  {
    img: "/graduate/informes-obra.png",
    title: "Informes de Obra",
    description: "Curso que enseña la elaboración de informes de obra, esenciales para el seguimiento y control de proyectos de construcción.",
  },
  {
    img: "/graduate/mapas-estudio-impacto.png",
    title: "Mapas de estudio de impacto ambiental con ArcGIS",
    description: "Formación en el uso de ArcGIS para la creación de mapas que evalúan el impacto ambiental de proyectos, facilitando la toma de decisiones informadas.",
  },
  {
    img: "/graduate/monitoreo-biologico.png",
    title: "Monitoreo Biológico",
    description: "Curso que aborda los métodos y técnicas de monitoreo biológico, esenciales para evaluar la salud de ecosistemas y la biodiversidad.",
  },
  {
    img: "/graduate/saneamiento-ambiental.png",
    title: "Saneamiento ambiental, JASS y Diseño de UBS",
    description: "Capacitación en saneamiento ambiental y el diseño de unidades básicas de saneamiento, así como la gestión y operación de JASS.",
  },
  {
    img: "/graduate/analisis-suelo-agua.png",
    title: "Análisis de suelo, agua y foliar",
    description: "Curso que enseña las técnicas de análisis de suelos, agua y tejido foliar, fundamentales para la agricultura y el manejo ambiental.",
  },
  */
];

// Componente para la tarjeta de curso con altura fija y contenedores limitados
const CourseCard = ({ img, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 flex flex-col justify-between mx-4 h-[500px] w-[320px]"> {/* Altura fija y ancho fijo */}
    <div className="relative w-full h-[250px] flex items-center justify-center"> {/* Altura fija para la imagen */}
      <Image
        src={img}
        alt={title}
        fill
        className="rounded-t-lg object-cover"
        placeholder="blur"
        blurDataURL={img}
      />
    </div>
    <div className="p-4 text-center flex-grow flex flex-col justify-between">
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 line-clamp-3"> {/* Limitar el texto a 3 líneas */}
        {description}
      </p>
      <Link
          href={`https://api.whatsapp.com/send?phone=51900102090&text=Hola, podría darme información sobre el curso de ${encodeURIComponent(
            title
          )}`}
          target="_blank" // Abre en una nueva pestaña
          rel="noopener noreferrer" // Seguridad adicional
          className="uppercase text-xs font-extrabold text-black border p-3 md:mt-2 mt-6 mb-4 w-40 ml-16 rounded-3xl hover:scale-110 duration-200 hover:bg-customPurple"
        >
          Más información
        </Link>
    </div>
  </div>
);

const Courses = () => (
  <section className="bg-blue-900 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-white text-4xl font-extrabold uppercase mb-8">
        Nuestros Cursos
      </h2>

      {/* Carrusel para todos los tamaños de pantalla */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className=" w-full mx-auto max-w-[1400px]"
      >
        {coursesData.map((curso, index) => (
          <SwiperSlide key={index}>
            <CourseCard
              img={curso.img}
              title={curso.title}
              description={curso.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Courses;
