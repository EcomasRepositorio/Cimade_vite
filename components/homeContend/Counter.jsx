import React, { useState, useEffect } from 'react';
import { ItemCard } from "./ItemCard";
import animationEgresados from '/ecomas/cimade/Cimade_vite/public/icons/avatar.json'; 
import animationAlumnos from '/ecomas/cimade/Cimade_vite/public/icons/alumnos.json'; 
import animationDiplomados from '/ecomas/cimade/Cimade_vite/public/icons/diplomados.json';
import animationCursos from '/ecomas/cimade/Cimade_vite/public/icons/cursos.json';

{/* LOGICA DE , INICIAR CUANDO SE VEA EL COMPONENTE*/}
const Counter = () => {
  const [counterAnimated, setCounterAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetPosition = document.getElementById('counter-section').offsetTop;

      if (scrollPosition >= targetPosition && !counterAnimated) {
        setCounterAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [counterAnimated]);


  {/*ICONOS DEL CONTADOR*/}
  return (
    <div id="counter-section">
      <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
          <ItemCard  number={"2597+"} description={"Egresados"} animated={counterAnimated} animation="fade-in-left" />
          <ItemCard number={"6983+"} description={"Alumnos"} animated={counterAnimated} animation="fade-in-right" />
          <ItemCard number={"7"} description={"Diplomados"} animated={counterAnimated} animation="fade-in-up" />
          <ItemCard number={"18"} description={"Cursos"} animated={counterAnimated} animation="" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
