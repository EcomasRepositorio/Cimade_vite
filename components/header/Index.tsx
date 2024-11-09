"use client";
import React, { useState } from 'react'; // Agrega la importación de useState
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCog, FaBan } from "react-icons/fa"; // Importa el ícono de bloqueo
import { TfiMenuAlt } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
import { IoPersonAddOutline } from "react-icons/io5";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [isBlocked, setIsBlocked] = useState(true); // Estado para controlar si el curso está bloqueado

  // Función para cambiar el estado de bloqueado a desbloqueado
  const toggleBlock = () => {
    setIsBlocked((prev) => !prev);
  };

  return (
    <>
      <nav className="w-full lg:bg-white md:bg-white bg-white top-0 left-0 right-0 absolute z-50">
        <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-0.5 backdrop-blur-md'>
          {/* Barra superior */}
          <div className='md:text-right text-center font-semibold w-full border-b border-blue-500 py-1'>
            <Link href='/certs' className='hover:underline mr-4 text-blue-500 hover:text-white'>Verificar certificado</Link>
            <Link href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3" target='_blank'
              className='hover:underline mr-3 text-blue-500 hover:text-blue-500'>Aula Virtual</Link>
          </div>
        </div>

        <div className="justify-between px-2 lg:px-0 mx-auto lg:max-w-7xl md:items-center md:flex backdrop-blur-md">
          <div className="flex items-center justify-between py-3 md:py-4 lg:py-4 md:block">
            {/* LOGO */}
            <Link href="/">
              <Image
                src="/image/logo_cimade.webp"
                width={200}   // Ajustamos el ancho para que sea adecuado en dispositivos móviles
                height={50}
                alt="cimade-logo"
                className='w-50 h-8 md:w-50 md:h-50'  // Tamaño ajustado para diferentes resoluciones
                priority={true}
              />
            </Link>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/image/close.svg" width={30} height={30} alt="close menu" priority={true}/>
                ) : (
                  <Image
                    src="/image/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="open menu"
                    className="focus:border-none active:border-none"
                    priority={true}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Menú */}
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}
            >
              <ul className="h-screen md:h-12 lg:text-xl md:text-sm text-2xl items-center justify-center md:flex">
                <li className="font-bold text-blue-500 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center hover:bg-blue-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className="font-bold text-blue-500 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center hover:bg-blue-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/graduate" onClick={() => setNavbar(!navbar)}>
                    Diplomados
                  </Link>
                </li>
                <li className="font-bold text-blue-500 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center hover:bg-blue-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/certs" onClick={() => setNavbar(!navbar)}>
                    Certificados
                  </Link>
                </li>

                {/* Cursos - con mensaje de bloqueo */}
                <li className="font-bold text-blue-500 hover:text-white lg:mb-0 md:mb-0 mb-4 py-1 px-6 text-center hover:bg-blue-800 rounded transition-transform transform hover:scale-125 relative">
                  {isBlocked ? (
                    <div className="flex items-center justify-center gap-2 cursor-not-allowed opacity-50">
                      <FaBan className="text-red-500" /> {/* Ícono de bloqueo */}
                      <span className="text-gray-400">Curso Bloqueado</span>
                    </div>
                  ) : (
                    <Link href="/curs" onClick={() => setNavbar(!navbar)}>
                      Cursos
                    </Link>
                  )}
                </li>

                <li className="font-bold text-blue-500 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center hover:bg-blue-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                
                {/* Botón de login */}
                <li className="lg:pl-40 flex justify-center items-center hover:text-blue-600 md:mt-0 mt-20">
                  <Link href="/login" className="bg-blue-600 py-1 px-4 rounded-xl text-white hover:bg-gray-100 hover:text-blue-600 hover:scale-125 duration-300">
                    <IoPersonAddOutline className='md:text-xl text-4xl'/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
