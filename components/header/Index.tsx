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
    <div className="bg-[#006eb0] border-gray-200">
    <div className="flex lg:justify-between justify-center mx-auto max-w-screen-2xl p-2 ">
      <div className="hidden lg:flex">
      <Link href="/certificate" className="text-lg text-gray-50 hover:underline font-semibold">Verificar certificado</Link>
      </div>
        <div className="flex space-x-6 rtl:space-x-reverse">
            <Link href="/certificate" className="text-lg text-gray-50 hover:underline font-semibold">Verificar certificado</Link>
            <Link href="#" className="text-lg text-gray-50 hover:underline font-semibold">Aula virtual</Link>
        </div>
    </div>
</div>
<div className="bg-white">
    <div className="max-w-screen-2xl mx-auto p-2">
        <div className="flex items-center justify-between">
                <Link href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mx-2" alt="Flowbite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap ">Flowbite</span>
                </Link>

                <div onClick={handleMenu} className="flex lg:hidden justify-end p-4">
                  {menu?
                  ( <AiOutlineClose size={25} className="flex justify-end"/> )
                  :
                  ( <AiOutlineMenu size={25} className="flex justify-end"/> )
                }
                </div>

            <ul className="hidden uppercase font-semibold lg:flex text-gray-600 flex-wrap p-3 mx-auto space-x-8 rtl:space-x-reverse text-xm">
                <li>
                    <Link href="/" className="hover:text-pink-500" aria-current="page">Inicio</Link>
                </li>
                <li>
                    <Link href="#" className="hover:text-pink-500">Diplomados</Link>
                </li>
                <li>
                    <Link href="/certificate" className="hover:text-pink-500">Certificados</Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-pink-500">Nosotros</Link>
                </li>
                <li>
                    <Link href="#" className="hover:text-pink-500">Blog</Link>
                </li>
                <li>
                </li>
            </ul>
            <div className="hidden lg:flex flex-wrap justify-end max-w-screen-2xl space-x-9">
                  <Link href="tel:5541251234" className="text-lg font-semibold text-gray-600 hover:text-green-500">(555) 412-1234</Link>
                  <Link href="/login" className="uppercase text-xs p-1.5 font-semibold px-6 text-blue-600 hover:text-white border-4 border-pink-500 rounded-lg hover:bg-pink-500">Login</Link>
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
            <Link href='/'>Diplomados</Link>
          </li>
          <li onClick={handleMenu} className="py-5 hover:text-warning-800 cursor-pointer">
            <Link href='/certificate'>Certificados</Link>
          </li>
          <li onClick={handleMenu} className="py-5 hover:text-warning-800 cursor-pointer">
            <Link href='/about'>Nosotros</Link>
          </li>
          <li onClick={handleMenu} className="py-5 hover:text-warning-800 cursor-pointer">
            <Link href='/'>Blog</Link>
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