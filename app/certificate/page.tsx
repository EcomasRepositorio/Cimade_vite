"use client";
import React, { useState, FormEvent} from 'react';
import axios from 'axios';
import { URL } from '@/components/utils/format/tokenConfig';
import SearchCode from '@/components/certificate/SearchCode';
import SearchDNI from '@/components/certificate/SearchDNI';
import SearchName from '@/components/certificate/SearchName';

const Certificate: React.FC = () => {

  const [isActive, setIsActive] = useState(false);
  //const [loading, setLoading] = useState(false);
  //const [query, setQuery] = useState<string[]>();
  const [queryValue, setQueryValue] = useState<string>('');
  const [searchType, setSearchType] = useState<string | null>(null);
  const [studentData, setStudentData] = useState<any | null>(null);
  //const token = useRouteData("parameter");
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const handleButton = (type: string) => {
    setSearchType(type);
    setIsActive(true);
    setQueryValue('');
    setStudentData(null);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
  };

  const handleSearch = (data: any) => {
    console.log(data);
  };

  return (
    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
      <div className="mb-4 lg:mt-0 justify-center text-5xl font-extrabold tracking-tight text-gray-900">
        LOGO
      </div>
        <div className="">
          <h2 className="mb-4 mt-36 lg:mt-36 text-5xl font-extrabold tracking-tight text-gray-900">
            Certificados
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
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
          {searchType === 'documentNumber' && <SearchDNI onSearchDNI={handleSearch} />}
          {searchType === 'name' && <SearchName onSearchName={handleSearch} />}
          {searchType === 'code' && <SearchCode onSearchCode={handleSearch} />}
        </div>
      )}
        </div>
    </div>
  )
}

export default Certificate;