import React, { useState, FormEvent} from 'react'
import { URL } from '@/components/utils/format/tokenConfig';
import axios from 'axios'
import { SearchDNIProps } from '../data/Interface/interface';


const SearchName:React.FC<SearchDNIProps> = ({ onSearchDNI }) => {

    const [isActive, setIsActive] = useState(false);
    const [queryValue, setQueryValue] = useState<string>('');
    const [searchType, setSearchType] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [studentData, setStudentData] = useState<any | null>(null);

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
            const apiUrl = `${URL()}/student/dni/${value}/type/${searchType}`
            console.log(apiUrl)
          const res = await axios
            .get(`${URL()}/student/dni/${value.trim()}/type/${searchType}`,
            );
            console.log(res)
              setStudentData(res.data);
              onSearchDNI(res.data);
          } catch(error) {
              console.error("Error: DNI invalido", error);
          } finally {
            setLoading(false);
          }
    };
  return (
    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
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
          placeholder={`Buscar por DNI ${searchType === 'documentNumber' ? 'DNI' : ''}`}
          required
          onClick={toggleIsActive}
          onChange={onChange}
          value={queryValue}
          />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
    </div>
  </form>

      {loading && <p>Cargando...</p>}

      {studentData && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Datos del estudiante</h3>
          <form>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" value={studentData.name} readOnly />
            </div>
            {/* Repite esto para los demás campos */}
          </form>
        </div>
      )}
    </div>
  )
}

export default SearchName;