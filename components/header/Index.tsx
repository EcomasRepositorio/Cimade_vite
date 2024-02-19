"use client";
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }
  return (
  <>
    <div id="/" className="bg-[#002e79] border-gray-200">
    <div className="flex lg:justify-between justify-center mx-auto max-w-screen-2xl p-2 ">
      <div className="hidden lg:flex">
      <Link href="#" className="text-lg text-gray-50 hover:underline font-semibold"></Link>
      </div>
        <div className="flex space-x-6 rtl:space-x-reverse">
            <Link href="#" className="text-lg text-gray-50 hover:underline font-semibold">Verificar certificado</Link>
            <Link href="#" className="text-lg text-gray-50 hover:underline font-semibold">Aula virtual</Link>
        </div>
    </div>
</div>
<div className="bg-white">
    <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
               
               <img src="/image/logo_main.webp" className="h-8 mx-2" alt="Logo" />
                  
                <div onClick={handleMenu} className="flex lg:hidden justify-end p-4">
                  {menu?
                  ( <AiOutlineClose size={25} className="flex justify-end"/> )
                  :
                  ( <AiOutlineMenu size={25} className="flex justify-end"/> )
                }
                </div>

            <ul className="hidden lg:flex flex-wrap font-medium p-4 mx-auto space-x-8 rtl:space-x-reverse text-lg">
                <li>
                    <Link href="/" className="text-gray-900 hover:underline" aria-current="page">Inicio</Link>
                </li>
                <li>
                    <Link href="/graduate" className="text-gray-900 hover:underline">Diplomados</Link>
                </li>
                <li>
                    <Link href="/certificate" className="text-gray-900 hover:underline">Certificados</Link>
                </li>
                <li>
                    <Link href="/about" className="text-gray-900 hover:underline">Nosotros</Link>
                </li>
                <li>
                    <Link href="/shipments" className="text-gray-900 hover:underline">Envios</Link>
                </li>
                <li>
                </li>
            </ul>
            <div className="hidden lg:flex flex-wrap justify-end max-w-screen-2xl space-x-6">
                  <Link href="tel:5541251234" className="text-lg  text-gray-500 hover:underline">(555) 412-1234</Link>
                  <Link href="/login" className="text-lg  text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                </div>
        </div>
    </div>
</div>

  <div className={menu ?
    'lg:hidden top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300 fixed z-10'
    :
    'lg:hidden absolute top-[100px] right-0 left-[-1000px] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300'
  }>
      <div className="w-full mt-[-310px]">
        <ul className="uppercase font-mono font-bold text-xl">
          <li onClick={handleMenu} className='py-5'>
            <Link href={'/'}>LOGO</Link>
          </li>
          <li onClick={handleMenu} className="py-5 hover:text-warning-800 cursor-pointer">
            <Link href='/'>Inicio</Link>
          </li>
          <li onClick={handleMenu} className="py-5 hover:text-warning-800 cursor-pointer">
            <Link href='/graduate'>Diplomados</Link>
          </li>
          <li onClick={handleMenu} className="py-5 hover:text-warning-800 cursor-pointer">
            <Link href='/certificate'>Certificados</Link>
          </li>
          <li onClick={handleMenu} className="py-5 hover:text-warning-800 cursor-pointer">
            <Link href='/about'>Nosotros</Link>
          </li>
          <li onClick={handleMenu} className="py-5 hover:text-warning-800 cursor-pointer">
            <Link href='/shipments'>Envios</Link>
          </li>
        </ul>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="/login" onClick={handleMenu}>
            <button className="bg-white text-slate-800 rounded-full uppercase font-bold py-3 w-[250px] mb-5">LOGIN</button>
          </Link>
          <Link href="/login" onClick={handleMenu}>
            <button className="bg-white text-slate-800 rounded-full uppercase font-bold py-3 w-[250px] mb-5">LOGIN</button>
          </Link>
        </div>
      </div>
  </div>
</>
  )
}

export default Header