"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importar CSS de Swiper
import "swiper/css/pagination"; // Importar CSS para paginación
import "swiper/css/navigation"; // Importar CSS para navegación
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Importar los módulos desde 'swiper/modules'

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
];

// Componente para la tarjeta de curso con ancho ajustable en escritorio
const CourseCard = ({ img, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 flex flex-col justify-between mx-4 min-h-[450px] md:w-[96%]"> {/* Ancho ajustado para PC */}
    <div className="relative w-full h-64 flex items-center justify-center">
      <Image
        src={img}
        alt={title}
        fill
        className="rounded-t-lg object-cover"
        placeholder="blur"
        blurDataURL={img}
      />
    </div>
    <div className="p-6 text-center flex-grow flex flex-col justify-between"> {/* Flex para que el contenido y el botón estén distribuidos */}
      <div>
        <h3 className="text-lg font-semibold text-blue-900 mb-2 md:h-auto h-12 md:overflow-visible overflow-hidden">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 md:h-auto h-20 md:overflow-visible overflow-hidden md:line-clamp-none line-clamp-3">
          {description}
        </p>
      </div>
      <Link href="/diplomados" passHref>
        <div className="inline-block mt-auto py-2 px-6 text-sm font-medium text-blue-900 border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-300">
          Más Información
        </div>
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

      {/* Carrusel para Móviles con Swiper */}
      <div className="block md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="space-x-4"
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

      {/* Grilla para Escritorio */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> {/* Ancho ajustado */}
        {coursesData.map((curso, index) => (
          <CourseCard
            key={index}
            img={curso.img}
            title={curso.title}
            description={curso.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
