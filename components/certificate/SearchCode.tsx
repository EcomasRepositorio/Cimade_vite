import React, { useState, FormEvent} from 'react'
import { URL } from '@/components/utils/format/tokenConfig';
import axios from 'axios'
import { SearchCodeProps } from '../data/Interface/interface';

const SearchName:React.FC<SearchCodeProps> = ({ onSearchCode }) => {

    const [isActive, setIsActive] = useState(false);
    const [queryValue, setQueryValue] = useState<string>('');
    const [searchType, setSearchType] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [studentData, setStudentData] = useState<any>({});

    const toggleIsActive = () => {
      setIsActive(!isActive);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value, 'onChange ejecutado');
      setQueryValue(event.target.value);
      };

    const searchName = async (event: FormEvent) => {
        event.preventDefault();

        if (queryValue.trim()) {
          setLoading(true);
        }
        //const validToken = typeof token === "string" ? token: '';
        try {
            const value = queryValue.trim();
            const apiUrl = `${URL()}/student/code/${value}/type/${searchType}`
            console.log(apiUrl)
          const res = await axios
            .get(`${URL()}/student/code/${value.trim()}/type/${searchType}`,
            );
            console.log(res)
              setStudentData(res.data);
              onSearchCode(res.data);
          } catch(error) {
              console.error("Error: Codigo invalido", error);
          } finally {
            setLoading(false);
          }
    };
  return (
    <div className="max-w-screen-xl mx-auto mb-8 text-center lg:mb-12">
      <form onSubmit={searchName}>
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
          placeholder={`Buscar por código ${searchType === 'code' ? 'código' : ''}`}
          required
          onClick={toggleIsActive}
          onChange={onChange}
          value={queryValue}
          />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
    </div>
  </form>

      {loading && <p>Cargando...</p>}

  <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    #
                </th>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    DNI
                </th>
                <th scope="col" className="px-6 py-3">
                    Actividad academica
                </th>
                <th scope="col" className="px-6 py-3">
                    institucion
                </th>
                <th scope="col" className="px-6 py-3">
                    participacion
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type="text" id="id" defaultValue={studentData.id || ''} readOnly />
                </th>
                <td className="px-6 py-4">
                <input type="text" id="name" value={studentData.name} readOnly />
                </td>
                <td className="px-6 py-4">
                <input type="text" id="documentNumber" value={studentData.documentNumber} readOnly />
                </td>
                <td className="px-6 py-4">
                <input type="text" id="name" value={studentData.activityAcademy} readOnly />
                </td>
                <td className="px-6 py-4">
                <input type="text" id="name" value={studentData.institute} readOnly />
                </td>
                <td className="px-6 py-4">
                <input type="text" id="name" value={studentData.participation} readOnly />
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

     {/*  {studentData && (
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
)} */}
    </div>
  )
}

export default SearchName;