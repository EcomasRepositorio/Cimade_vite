import React from 'react';
import Social from "./Social";
import './Styles.css'; 


export const Footer = () => {
  return (
    <footer className="px-4 py-20 text-white" style={{ background: 'linear-gradient(0deg, #006eb0, #002e79)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-3">
          <div title="Go to Kutty Home Page" className="col-span-2 mb-12 md:col-span-1 text-white">
            <img className="w-auto h-12 mx-auto mb-8" src="/icons/logo.svg" alt="Tu logo" />
            <nav className="mb-8 ml-8">
              <p className="mb-3 text-x1 font-bold tracking-wider text-gray-50 uppercase">Contáctanos</p>
              <a href="https://api.whatsapp.com/send?phone=51900102090" target='_blank' className="flex mb-3 text-lg font-medium transition md:mb-2">
                <img src="/icons/iconsFooter/footer_whatsapp.svg" alt="Phone Icon" className="w-6 h-6 mr-2" />
                <button className=" a text">900 102 090</button>
              </a>




              
              
              <a href="mailto:capacitaciones@cimade.edu.pe" className="flex mb-3 text-lg font-medium transition md:mb-2">
              <img src="/icons/iconsFooter/footer_correo.svg" alt="Correo Icono" className="w-6 h-6 mr-2" />
                <button className="a text">capacitaciones@cimade.edu.pe</button>
              </a>

              <a href="" className="flex mb-3 text-lg font-medium transition md:mb-2">
                <img src="/icons/iconsFooter/footer_reloj.svg" alt="Phone Icon" className="w-6 h-6 mr-2" />
                HORARIO: 9:00 AM – 6:00 PM
              </a>
            </nav>
            <div className='justify-items-center ml-16 '>
              <Social />
            </div>
          </div>
          <nav className="mb-8 ml-8">
            <p className="text-center mb-3 text-xl font-bold tracking-wider text-gray-50 uppercase">Nuestra Empresa</p>
            <div className="flex flex-col items-center">
              <a href="#">
                <button className="a text mb-3">Inicio</button>
              </a>

              <a href="#">
                <button className="a text mb-3">Diplomados</button>
              </a>

              <a href="#">
                <button className="a text mb-3">Certificados</button>
              </a>

              <a href="#">
                <button className="a text mb-3">Nosotros</button>
              </a>

              <a href="#">
                <button className=" a text">Blog</button>
              </a>
            </div>
          </nav>
          <nav className="mb-8 ml-8">
            {/* INFORMACION DEL FOOTER */}
            <p className="text-center text-1 font-bold tracking-wider text-gray-50 uppercase mb-4 mr-8">Acerca de nosotros </p>
            <p className="hidden md:block text-center mr-8">Corporación Cimade se rige como una destacada institución dedicada con firmeza a la excelencia, calidad y profesionalismo, orientada a ofrecer una educación online de primer nivel, marcando un estándar insuperable en el ámbito educativo.</p>
            <p className="md:hidden text-center mr-8">Corporación Cimade, calidad y profesionalismo dedicada a brindar una educación online de excelencia. </p>
          </nav>
        </div>
        <p className="text-sm font-medium text-left text-white md:text-center">© Copyright 2024 Cimade Emp. All Rights Reserved.</p>
      </div>
    
    </footer>
  );
}

export default Footer;
