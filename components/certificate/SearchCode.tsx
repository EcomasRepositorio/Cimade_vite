import React, { useState, FormEvent} from 'react'
import { URL } from '@/components/utils/format/tokenConfig';
import axios from 'axios'
import { SearchCodeProps, StudentCode } from '../data/Interface/interface';
import Modal from '../modal/Index';

const SearchName:React.FC<SearchCodeProps> = ({ onSearchCode }) => {

  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>('');
  const [searchType, setSearchType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState<StudentCode>();
  const [closeTable, setCloseTable] = useState(false);
  const [open, setOpen] = useState<boolean>(false)

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, 'onChange ejecutado');
    setQueryValue(event.target.value);
    setCloseTable(false);
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
        setCloseTable(true);
    } catch(error) {
        console.error("Error: Codigo invalido", error);
    } finally {
      setLoading(false);
    }
  };
  const tableRows = [
    { label: 'Organizado por:', value: studentData?.institute },
    { label: 'Otorgado a:', value: studentData?.name },
    { label: 'Nombre del evento:', value: studentData?.activityAcademy },
    { label: 'Creditos/Horas:', value: studentData?.hour },
    { label: 'Fecha de emisión:', value: studentData?.date },
  ];
  return (
  <div className="max-w-screen-xl mx-auto mb-8 text-center lg:mb-12">
    <form onSubmit={searchName} className="w-full md:w-2/3 lg:w-full xl:w-2/3 mx-auto">
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
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={() => setOpen(true)}>
            Buscar
        </button>
    </div>
  </form>
  {loading && <p>Cargando...</p>}
  {studentData && (
   <Modal open={open} onClose={() => setOpen(false)}>
   <table className="max-w-md text-sm text-left rtl:text-right text-gray-600 font-semibold">
     <thead className="text-xm text-center text-gray-600 uppercase">
       {tableRows.length > 0 && (
         <tr>
           <th scope="col" className="px-6 py-3">
             LOGO
           </th>
         </tr>
       )}
     </thead>
     <tbody>
      {tableRows.map((row, index) => (
        <React.Fragment key={index}>
          <tr key={index} className="bg-slate-700 text-gray-300 text-center">
           <th scope="row" className="p-1.5 rounded-lg font-medium whitespace-nowrap w-3/4">
             <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{row.label}</span>
           </th>
          </tr>
          <tr key={index + 'value'} className="max-w-md bg-white text-center hover:bg-gray-300">
          <td className="max-w-sm px-6 py-4">
           <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{row.value}</span>
          </td>
          </tr>
        </React.Fragment>
       ))}
     </tbody>
   </table>
 </Modal>
  )}
    {/* {loading && <p>Cargando...</p>}
  {closeTable && studentData && (

  <div className="relative overflow-x-auto shadow-xl sm:rounded-lg mt-8">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 font-semibold">
        <thead className="text-xs text-center text-gray-700 uppercase bg-gray-300">
            <tr>
                <th scope="col" className="px-6 py-3">
                    #
                </th>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Actividad academica
                </th>
                <th scope="col" className="px-6 py-3">
                    Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                    Accción
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b text-center hover:bg-gray-100">
                <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap w-12">
                <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{studentData.id}</span>
                </th>
                <td className="px-6 py-4">
                <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{studentData.name}</span>
                </td>
                <td className="px-6 py-4">
                <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{studentData.activityAcademy}</span>
                </td>
                <td className="px-6 py-4">
                <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{studentData.date}</span>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )} */}
</div>
  )
}

export default SearchName;