import React from 'react';
import Social from "./Social";

export const Footer = () => {
  return (
    
    <footer className="px-4 py-20 text-white" style={{ backgroundColor: '#030A2B' }}>
    <div className="mx-auto max-w-7xl">
   
      <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-3">
        <a  title="Go to Kutty Home Page" className="col-span-2 mb-12 md:col-span-1 text-white">
        <img className="w-auto h-12 mx-auto mb-8" src="/icons/logo.svg" alt="Tu logo" />
        <p className="text-center text-xl mb-3 text-balance font-bold tracking-wider text-gray-500 uppercase">Acerca de nosotros </p>
        <p className='text-center mb-6'>Corporación Cimade, calidad y profesionalismo dedicada a brindar una educación online de excelencia.</p>
        <div className='justify-items-center ml-16 '>
        <Social/>
        </div>
        
        </a>
        <nav className="mb-8 ml-8">
          <p className="mb-3 text-xl font-bold tracking-wider text-gray-500 uppercase">Nuestra Empresa</p>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Inicio</a>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Diplomados</a>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Certificados</a>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Nosotros</a>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Blog</a>
        </nav>
        <nav className="mb-8 ml-8">
          <p className="mb-3 text-x1 font-bold tracking-wider text-gray-500 uppercase">Contáctanos</p>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">
          <img src="/icons/iconsFooter/testing.png" alt="Phone Icon" className="mr-2" /> {/* Ruta del icono */}
          967 212 323
          </a>






          <a href="#" className="flex mb-3  text-lg font-medium transition md:mb-2 hover:text-primary">
          <img src="/icons/iconsFooter/" alt="Phone Icon" className="mr-2" />
            informes.multimarca@gmail.com</a>

          <a href="#" className="flex mb-3  text-lg font-medium transition md:mb-2 hover:text-primary">
          <img src="/icons/iconsFooter/" alt="Phone Icon" className="mr-2" />
            HORARIO: 9:00 AM – 6:00 PM</a>
          <a href="#" className="flex mb-3  text-lg font-medium transition md:mb-2 hover:text-primary">Blog</a>
        </nav>
        <nav className="mb-8 ml-10">
          <p className="text-center mb-3 text-x1 font-bold tracking-wider text-gray-500 uppercase"></p>
            {/* ...  */}
        </nav>
      
      </div>
      <p className="text-sm font-medium text-left text-white md:text-center">© Copyright 2024 Skcript Inc. All Rights Reserved.</p>
    </div>
  </footer>
  


  )
}

export default Footer;