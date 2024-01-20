"use client";
import React, { useState, FormEvent} from 'react';
import axios from 'axios';
import { useRouteData } from '@/components/hooks/hooks';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';

const page = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState<any[]>();
  const token = useRouteData("root");

  const toogleIsActive = () => {
    setIsActive(!isActive);
  };
  const onSubmit = async ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    if (value.length !== 0) {
      setLoading(true);
      const res = await axios
        .get(`${URL()}/student/?search=${value}`, tokenConfig(token))
        .then((_res) => {
          setQuery(_res.data);
          return _res.data;
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
      return res;
    } else {
      setQuery([]);
    }
  };

  return (
    <div id="/certificate" className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
      <div className="mb-4 lg:mt-0 justify-center text-5xl font-extrabold tracking-tight text-gray-900">
        LOGO
      </div>
        <div className="">
          <h2
            className="mb-4 mt-36 lg:mt-36 text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Certificados
          </h2>
          <p
            className="font-light text-gray-500 sm:text-xl dark:text-gray-400"
          >
            En este módulo podrá realizar la búsqueda de certificados de los diferentes eventos ofrecidos por CIMADE.
          </p>
          <p
            className="mb-6 mt-6 lg:mt-10 text-xl tracking-tight text-gray-900"
          >
            Buscar por:
          </p>
          <div className='lg:flex flex-wrap justify-center items-center p-4 text-center lg:gap-16'>
            <button
            //onClick={(e) => handleSearch(e)}
            className="mb-6 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Buscar por DNI
            </button>
            <button
            className="mb-6 ml-6 mr-6 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Buscar por nombre
            </button>
            <button
            className="mb-6 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Buscar por código
            </button>
          </div>

        </div>
        <form>
    <label htmlFor="default-search" className="mb-2 text-sm font-medium "></label>
    <div className="relative lg:mx-auto mr-4 ml-4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black"
          placeholder="Buscar..."
          required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
    </div>
</form>
    </div>
  )
}

export default page