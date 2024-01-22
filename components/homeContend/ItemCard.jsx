import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationEgresados from '/ecomas/cimade/Cimade_vite/public/icons/avatar.json'; 
import animationAlumnos from '/ecomas/cimade/Cimade_vite/public/icons/alumnos.json'; 
import animationDiplomados from '/ecomas/cimade/Cimade_vite/public/icons/diplomados.json';
import animationCursos from '/ecomas/cimade/Cimade_vite/public/icons/cursos.json';

export const ItemCard = ({ number, description, animated, animation }) => {
  const [count, setCount] = useState(0);

  {/* ICONOS DEL CONTADOR */}
  const lottieOptions = {
    loop: false,
    autoplay: false,
    animationData: animation === 'fade-in-left'
      ? animationEgresados
      : animation === 'fade-in-right'
        ? animationAlumnos
        : animation === 'fade-in-up'
          ? animationDiplomados
          : animationCursos,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };


  {/* LOGICA DEL CONTADOR  */}
  useEffect(() => {
    let interval;
    if (animated) {
      interval = setInterval(() => {
        setCount((prevCount) => (prevCount < parseInt(number, 10) ? prevCount + 100 : parseInt(number, 10)));
      }, 25); // Ajusta la velocidad del contador según tus preferencias
    }
    return () => clearInterval(interval);
  }, [animated, number]);

  return (
    <div className={`flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow-md rounded-2xl ${animated ? `animate-${animation}` : ''}`}>
      {animated && <Lottie options={lottieOptions} height={120} width={120} speed={0.5} />}
      <h3 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
        {count}
      </h3>
      <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600 font-bold ">
        {description}
      </p>
    </div>
  );
};
