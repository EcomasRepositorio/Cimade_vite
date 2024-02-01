"use client";
<<<<<<< HEAD
import React from 'react';
import Banners from './Banners'


const Home = () => {
    return (
      <div>
 
        <Banners />
        {/* Otros componentes o contenido de la aplicación */}
      </div>
    );
  };
=======
import Banners from "./Banners";

 // Corregido: El nombre del componente debe comenzar con mayúscula
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
   <Banners/>
    </div>
   
    
  );
};
>>>>>>> 777689514b493e14a3365ec4a428b7c104596f28

export default Home;
