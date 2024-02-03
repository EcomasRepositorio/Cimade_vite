"use client";
import React, { useState } from 'react';
import SearchCode from '@/components/certificate/SearchCode';
import SearchDNI from '@/components/certificate/SearchDNI';
import SearchName from '@/components/certificate/SearchName';

const Certificate: React.FC = () => {

  const [isActive, setIsActive] = useState(false);
  const [searchType, setSearchType] = useState<string | null>(null);

  const handleButton = (type: string) => {
    setSearchType(type);
    setIsActive(true);
  };

  const handleSearch = (data: string) => {
    console.log(data);
  };

  return (
    <section className='p-2'>
    <div className="max-w-screen-xl mx-auto mb-8 border mt-10 rounded-3xl shadow-2xl text-center lg:mb-12 p-2">
      <div className="mb-4 lg:mt-0 justify-center text-5xl font-extrabold tracking-tight text-gray-500">
      <div className='flex justify-center mb-4 lg:gap-10 mt-12'>
            <img src={'/image/logo_cip_tacna.png'}className="lg:w-44 lg:h-44 w-32 h-32 object-contain "/>
            <img src={'/image/logo_cimade.png'} className="lg:w-44 lg:h-44 w-32 h-32 object-contain"/>
            <img src={'/image/logo_unp.png'} className="lg:w-44 lg:h-44 w-32 h-32 object-contain"/>
          </div>
      </div>
        <div className="">
          <h2 className="mb-4 mt-36 lg:mt-20 text-5xl font-extrabold tracking-tight text-gray-500">
            Certificados
          </h2>
          <p className="font-light text-gray-500 sm:text-xl">
            En este módulo podrá realizar la búsqueda de certificados de los diferentes eventos ofrecidos por CIMADE.
          </p>
          <p className="mb-6 mt-6 lg:mt-10 text-xl tracking-tight text-gray-900">
            Buscar por:
          </p>
          <div className='lg:flex flex-wrap justify-center items-center p-4 text-center lg:gap-16'>
            <button
            onClick={() => handleButton('documentNumber')}
            className={`mb-6 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center
              ${searchType === 'documentNumber' && 'bg-indigo-700'}`}>
              Buscar por DNI
            </button>
            <button
            onClick={() => handleButton('name')}
            className={`mb-6 ml-6 mr-6 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center
              ${searchType === 'name' && 'bg-indigo-700'}`}>
              Buscar por nombre
            </button>
            <button
            onClick={() => handleButton('code')}
            className={`mb-6 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center
            ${searchType === 'code' && 'bg-indigo-700'}`}>
              Buscar por código
            </button>
          </div>

          {isActive && (
        <div>
          {searchType === 'documentNumber' && (<SearchDNI onSearchDNI={handleSearch} />)}
          {searchType === 'name' && (<SearchName onSearchName={handleSearch} />)}
          {searchType === 'code' && (<SearchCode onSearchCode={handleSearch} />)}
        </div>
      )}
        </div>
    </div>
    </section>
  )
}

export default Certificate;