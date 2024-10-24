import React from 'react';
import Social from "../content/Social";
import { SlBookOpen } from "react-icons/sl";
import './Styles.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className=''>
    <div className='flex-grow'>
    <footer className="px-4 py-20 text-white" style={{ background: 'linear-gradient(0deg, #006eb0, #002e79)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-3">
          <div title="Go to Kutty Home Page" className="col-span-2 mb-6 md:col-span-1 text-white">
            <img className="w-auto h-12 mx-auto mb-8" src="/footer/logo.svg" alt="Tu logo" />
            <nav className="mb-2 ml-8">
              <p className="mb-5 text-x1 font-bold tracking-wider text-gray-50 uppercase">Contáctanos</p>
              <a href="https://api.whatsapp.com/send?phone=51900102090" className="flex mb-3 text-lg font-medium transition md:mb-2">
                <img src="/footer/footer_whatsapp.svg" alt="Phone Icon" className="w-6 h-6 mr-2" />
                <p className="hover:text-primaryrosa hover:scale-100 duration-300 text">900 102 090</p>
              </a>
              <a href="mailto:capacitaciones@cimade.edu.pe" className="flex mb-3 text-lg font-medium transition md:mb-2">
              <img src="/footer/footer_correo.svg" alt="Correo Icono" className="w-6 h-6 mr-2" />
                <p className="hover:text-primaryrosa hover:scale-100 duration-300 text">capacitaciones@cimade.edu.pe</p>
              </a>

              <a className="flex mb-3 text-lg font-medium transition md:mb-2">
                <img src="/footer/footer_reloj.svg" alt="Phone Icon" className="w-6 h-6 mr-2" />
                HORARIO: 9:00 AM – 6:00 PM
              </a>
            </nav>
            <div className='justify-items-center ml-12'>
            <div className="flex justify-self-start">
              <Link href="https://www.facebook.com/CimadeEC" target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2">
                <FaFacebookF className='text-2xl' />
              </Link>
              <Link href="https://www.instagram.com/cimade_ec/" target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2">
                <FaInstagram className='text-2xl' />
              </Link>
              <Link href="https://www.tiktok.com/@consorciocimade?lang=es" target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2">
                <FaTiktok className='text-2xl' />
              </Link>
              <Link href="https://wa.me/51900102090?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados" target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2">
                <FaWhatsapp className='text-2xl' />
              </Link>
              <Link href="https://www.youtube.com/@cimadeec" target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2">
                <FaYoutube className='text-2xl' />
              </Link>
            </div>
            </div>
          </div>
          <nav className="mb-4 ml-8">
            <p className="text-center mb-3 text-xl font-bold tracking-wider text-gray-50 uppercase">Nuestra Empresa</p>
            <div className="flex flex-col items-center">
              <a href="/">
                <button className="hover:text-primaryrosa hover:scale-100 duration-300 text mb-3 buttonFooter">Inicio</button>
              </a>

              <a href="/graduate">
                <button className="hover:text-primaryrosa hover:scale-100 duration-300 text mb-3 buttonFooter">Diplomados</button>
              </a>

              <a href="/certs">
                <button className="hover:text-primaryrosa hover:scale-100 duration-300 text mb-3">Certificados</button>
              </a>

              <a href="/about">
                <button className="hover:text-primaryrosa hover:scale-100 duration-300 text mb-3">Nosotros</button>
              </a>

              <a href="#">
                <button className="hover:text-primaryrosa hover:scale-100 duration-300 text">Blog</button>
              </a>
            </div>
          </nav>
          <nav className="mb-4 ml-8">
            {/* INFORMACION DEL FOOTER */}
            <p className="text-center text-1 font-bold tracking-wider text-gray-50 uppercase mb-4 mr-8">Acerca de nosotros </p>
            <p className="hidden md:block text-center mr-8">Corporación Cimade se rige como una destacada institución dedicada con firmeza a la excelencia, calidad y profesionalismo, orientada a ofrecer una educación online de primer nivel, marcando un estándar insuperable en el ámbito educativo.</p>
            <p className="md:hidden text-center mr-8">Corporación Cimade, calidad y profesionalismo dedicada a brindar una educación online de excelencia. </p>
            <Link href="#" className='flex items-center justify-center mt-6 font-bold text-xl'>
            <SlBookOpen className='mr-2'/>
              <p className='mr-8 text-gray-100'>Libro de Reclamaciones</p>
            </Link>
          </nav>
        </div>
        <p className="text-sm font-medium text-left text-white md:text-center">© Copyright 2024 Cimade Emp. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
    </div>
  );
}

export default Footer;