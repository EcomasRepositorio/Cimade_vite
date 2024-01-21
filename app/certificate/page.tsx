"use client";
import React, { useState, FormEvent} from 'react';
import axios from 'axios';
import { URL } from '@/components/utils/format/tokenConfig';

const SearchName = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState<string[]>();
  const [queryValue, setQueryValue] = useState<string>('');
  const [searchType, setSearchType] = useState<string | null>(null);
  const [studentData, setStudentData] = useState<any | null>(null);
  //const token = useRouteData("parameter");
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const handleSearch = (type: string) => {
    setSearchType(type);
    setIsActive(true);
    setQueryValue('');
    setStudentData(null);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
  };
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (queryValue !== undefined && queryValue !== null) {
    const value = queryValue?.toString().trim();
    if (searchType && value !== '') {
      setLoading(true);
    //const validToken = typeof token === "string" ? token: '';
    try {
        const apiUrl = `${URL()}/student/name/${value}/type/${searchType}`
        console.log(apiUrl)
      const res = await axios
        .get(`${URL()}/student/name/${queryValue.trim()}/type/${searchType}`,
        );
        console.log(res)
          setStudentData(res.data);
      } catch(error) {
          console.error("Error: Nombre invalido", error);
      } finally {
        setLoading(false);
      }
    }
  }
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
            onClick={() => handleSearch('documentNumber')}
            className={`mb-6 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center
              ${searchType === 'documentNumber' && 'bg-indigo-700'}`}>
              Buscar por DNI
            </button>
            <button
            onClick={() => handleSearch('name')}
            className={`mb-6 ml-6 mr-6 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center
              ${searchType === 'name' && 'bg-indigo-700'}`}>
              Buscar por nombre
            </button>
            <button
            onClick={() => handleSearch('code')}
            className={`mb-6 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center
            ${searchType === 'code' && 'bg-indigo-700'}`}>
              Buscar por código
            </button>
          </div>

        </div>
        <form onSubmit={onSubmit}>
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
          placeholder={`Buscar por ${searchType === 'name' ? 'nombre' : searchType === 'documentNumber' ? 'DNI' : searchType === 'code' ? 'codigo' : ''}`}
          required
          onClick={toggleIsActive}
          onChange={onChange} />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
    </div>
</form>

{studentData && (
  <div className="mt-8">
    <h3 className="text-2xl font-bold mb-4">Datos del estudiante</h3>
    <form>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={studentData.id} readOnly />
      </div>
      <div>
        <label htmlFor="documentNumber">Número de Documento:</label>
        <input type="text" id="documentNumber" value={studentData.documentNumber} readOnly />
      </div>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={studentData.name} readOnly />
      </div>
      <div>
        <label htmlFor="code">Código:</label>
        <input type="text" id="code" value={studentData.code} readOnly />
      </div>
      <div>
        <label htmlFor="activityAcademy">Actividad Académica:</label>
        <input type="text" id="activityAcademy" value={studentData.activityAcademy} readOnly />
      </div>
      <div>
        <label htmlFor="participation">Participación:</label>
        <input type="text" id="participation" value={studentData.participation} readOnly />
      </div>
      <div>
        <label htmlFor="institute">Instituto:</label>
        <input type="text" id="institute" value={studentData.institute} readOnly />
      </div>
      <div>
        <label htmlFor="hour">Hora:</label>
        <input type="text" id="hour" value={studentData.hour} readOnly />
      </div>
      <div>
        <label htmlFor="date">Fecha:</label>
        <input type="text" id="date" value={studentData.date} readOnly />
      </div>
      <div>
        <label htmlFor="imageCertificate">Certificado de Imagen:</label>
        <input type="text" id="imageCertificate" value={studentData.imageCertificate} readOnly />
      </div>
    </form>
  </div>
)}

    </div>
  )
}

export default SearchName;