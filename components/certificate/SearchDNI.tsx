import React, { useState, FormEvent} from 'react'
import { URL } from '@/components/utils/format/tokenConfig';
import axios from 'axios'
import { SearchDNIProps, Student } from '@/interface/interface';
import Modal from '../share/Modal';

interface StudentCode extends Student {
  hour: string;
  institute: string;
};

const SearchName:React.FC<SearchDNIProps> = ({ onSearchDNI }) => {

  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>('');
  const [searchType, setSearchType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState<Student[]>();
  const [closeTable, setCloseTable] = useState(false);
  const [ modalOpen, setModalOpen] = useState(false);
  const [selectedStudentData, setSelectedStudentData] = useState<StudentCode | null>(null);
  const [openModals, setOpenModals] = useState<boolean[]>(Array(selectedStudentData ? 1 : 0).fill(false));

  const openStudentModal = (selectedStudent: StudentCode, index: number) => {
    setSelectedStudentData(selectedStudent);
    const updatedOpenModals = [...openModals];
    updatedOpenModals[index] = true;
    setOpenModals(updatedOpenModals);
  };
  const closeStudentModal = (index: number) => {
    const updatedOpenModals = [...openModals];
    updatedOpenModals[index] = false;
    setOpenModals(updatedOpenModals);
  };

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    /* console.log(event.target.value, 'onChange ejecutado');
    const valuee = event.target.value; */
    setQueryValue(event.target.value);
    setCloseTable(false);
    //setSearchType(valuee.trim() ? queryValue : null);
    };
  const openErrorModal = () => {
    setModalOpen(true);
  };
  const closeErrorModal = () => {
    setModalOpen(false);
  };

  const searchDNI = async (event: FormEvent) => {
    event.preventDefault();

    if (queryValue.trim()) {
      setLoading(true);
    }

    //const validToken = typeof token === "string" ? token: '';
    try {
      const value = queryValue.trim();
      const res = await axios
        .get(`${URL()}/student/dni/${value.trim()}/type/${searchType}`,
        );
        console.log(res)
        setStudentData(res.data);
        onSearchDNI(res.data);
        setCloseTable(true);
      } catch(error) {
        console.error("Error: DNI invalido", error);
        openErrorModal();
      } finally {
        setLoading(false);
    }
  };
  const tableRows = [
    { imgSrc:'/image/organizadopor.svg', label: 'Organizado por:', value: selectedStudentData?.institute },
    { imgSrc:'/image/otorgado.svg', label: 'Otorgado a:', value: selectedStudentData?.name },
    { imgSrc:'/image/nom_evento.svg', label: 'Nombre del evento:', value: selectedStudentData?.activityAcademy },
    { imgSrc:'/image/creditos_horas.svg', label: 'Creditos/Horas:', value: selectedStudentData?.hour },
    { imgSrc:'/image/fecha_emision.svg', label: 'Fecha de emisión:', value: selectedStudentData?.date },
  ];

  return (
    <div className="max-w-screen-xl mx-auto mb-8 text-center lg:mb-12">
      <form onSubmit={searchDNI} className="w-full md:w-2/3 lg:w-full xl:w-2/3 mx-auto">
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
    {closeTable && studentData && (
  <div className="relative overflow-x-auto shadow-xl sm:rounded-xl mt-8">
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
          {studentData?.map((student: Student, index:number) =>(
            <tr key={index} className="bg-white border-b text-center hover:bg-gray-100">
                <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap w-12">
                <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.id}</span>
                </th>
                <td className="px-6 py-4">
                <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.name}</span>
                </td>
                <td className="px-6 py-4">
                <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.activityAcademy}</span>
                </td>
                <td className="px-6 py-4">
                <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.date}</span>
                </td>
                <td className="px-6 py-4">
                  <button type='button' onClick={() => openStudentModal(student as StudentCode, index)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver</button>
                </td>
                {selectedStudentData && (
                  <Modal open={openModals[index]} onClose={() => closeStudentModal(index)}>
                    <div className='flex justify-center mb-4'>
                      <img src={'/image/logo_cip_tacna.png'}className="lg:w-32 lg:h-32 w-28 h-28 object-contain "/>
                      <img src={'/image/logo_cimade.png'} className="lg:w-32 lg:h-32 w-28 h-28 object-contain"/>
                      <img src={'/image/logo_unp.png'} className="lg:w-32 lg:h-32 w-28 h-28 object-contain"/>
                    </div>
                    <div className="max-w-md mx-auto p-6 bg-white rounded-md">
                      {tableRows.map((row, index) => (
                        <div key={index} className="mb-4">
                        <div className="flex items-center text-gray-100 text-sm p-1 lg:ml-5 ml-0 lg:w-80 w-full rounded-lg bg-slate-600 font-semibold">
                          {row.imgSrc && <img src={row.imgSrc} alt={row.label} className="flex lg:w-5 lg:h-5 w-5 h-5 object-contain ml-1" />}
                          <div className='flex-1 text-center'>
                          {row.label}
                          </div>
                        </div>
                          <div className="text-gray-600 mt-3 mb-5 text-sm font-semibold">{row.value}</div>
                        </div>
                      ))}
                    </div>
                  </Modal>
                )}
            </tr>
            ))}
        </tbody>
    </table>
  </div>
  )}
  <Modal open={modalOpen} onClose={closeErrorModal}>
      <div className="border-2 p-2 rounded-lg">
        <h2 className="text-md font-bold text-red-600 mb-4">DNI incorrecto</h2>
        <h3 className="text-sm font-semibold text-gray-600">El DNI que ingresaste no se encuentra en nuestra base de datos.</h3>
      </div>
    </Modal>
    </div>
  )
}

export default SearchName;