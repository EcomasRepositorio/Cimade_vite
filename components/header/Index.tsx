"use client";
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsWhatsapp } from "react-icons/bs";

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
            <Link href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3"
              className="text-lg text-gray-50 hover:underline font-semibold">
              Aula virtual
            </Link>
        </div>
    </div>
</div>
<div className="bg-white border shadow-2xl">
    <div className="max-w-screen-2xl mx-auto p-2">
        <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/image/logo_cimade.webp" className="h-8 mx-2" alt="cimade Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap "></span>
            </Link>

            <div onClick={handleMenu} className="flex lg:hidden justify-end p-4">
              {menu?
              ( <AiOutlineClose size={30} className="flex justify-end"/> )
              :
              ( <AiOutlineMenu size={30} className="flex justify-end"/> )
            }
            </div>

            <ul className="hidden uppercase font-semibold lg:flex text-[#006eb0] flex-wrap p-3 mx-auto space-x-8 rtl:space-x-reverse text-xm">
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
                  <Link href='https://api.whatsapp.com/send?phone=51900102090' target='_blank'
                    className="text-lg font-semibold text-green-600 hover:text-green-500">

                    <BsWhatsapp className='inline-block align-middle mr-1'/>
                    +51 900102090</Link>
                  <Link href="/login" className="uppercase text-xs p-1.5 font-semibold px-6 text-blue-600 hover:text-white border-2 border-[#006eb0] rounded-lg hover:bg-pink-500">
                    Login
                  </Link>
                </div>
        </div>
    </div>
</div>

  <div className={menu ?
    'lg:hidden top-[125px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#002e79] text-white text-center ease-in duration-300 fixed z-10'
    :
    'lg:hidden absolute top-[100px] right-0 left-[-1000px] flex justify-center items-center w-full h-screen bg-[#002e79] text-white text-center ease-in duration-300'
  }>
      <div className="w-full mt-[-310px]">
        <ul className="uppercase font-mono font-bold text-xl">
          <li onClick={handleMenu} className='py-5'>
            <Link href={'/'}></Link>
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
            <button className="bg-white text-[#006eb0] rounded-full uppercase font-bold py-3 w-[250px] mb-5">
              LOGIN
            </button>
          </Link>
          <Link href='https://api.whatsapp.com/send?phone=51900102090' target='_blank'>
            <button className="bg-white text-green-500 rounded-full uppercase font-bold py-3 w-[250px] mb-5">
            <BsWhatsapp className='inline-block mr-1'/>
              +51 900102090
            </button>
          </Link>
        </div>
      </div>
  </div>
</>
  )
}

export default Header