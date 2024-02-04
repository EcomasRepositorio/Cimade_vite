import React, { useState, FormEvent, useMemo} from 'react'
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import axios from 'axios'
import { useRouteData } from '@/hooks/hooks';
import { SearchStudentDNIProps, Student, StudentData } from '@/interface/interface';
import Modal from '../share/Modal';
import { FaRegEdit } from 'react-icons/fa';
import StudentForm from './StudentForm';
import StudentDelete from './StudentDelete';
import ModalTable from '../share/modalTable';
import SearchDNI from '@/components/certificate/SearchDNI';


const SearchName:React.FC<SearchStudentDNIProps> = ({ onSearchDNI }) => {

  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [searchType, setSearchType] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [closeModalTable, setCloseModalTable] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentData, setStudentData] = useState<StudentData[]>();
  const [modalTable, setModalTable] = useState(false);
  const [ modalOpen, setModalOpen] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  /* const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, 'onChange ejecutado');
    console.log('Nuevo valor de queryValue:', event.target.value);
    setQueryValue(event.target.value);
    //setCloseTable(false);
    setSearchType(queryValue);
    }; */
    const token = useRouteData("parameter");
  const validToken = typeof token === "string" ? token: '';
  
  const searchDNI = async () => {
    if (queryValue.trim()) {
      setLoading(true);
      //setDataLoading(true);
    }
    try {
      const value = queryValue.trim();
      //const currentSearchType = searchType || 'documentNumber';
      const res = await axios
        .get(`${URL()}/student/dni/${value.trim()}/type/${searchType}`,
        );
        console.log(res)
        setStudentData(res.data);
        setCloseModalTable(false);
        //setCloseTable(true);
      } catch(error) {
        console.error("Error: DNI invalido", error);
        openErrorModal();
      } finally {
        //setLoading(false);
        setCloseModalTable(true)
    }
  };

  const openErrorModal = () => {
    setModalOpen(true);
  };
  const closeErrorModal = () => {
    setModalOpen(false);
  };

  const closeTableModal = () => {
    setModalTable(false);
    setQueryValue('');
    setStudentData([]);
  };

  //UpdateStudent
  const handleUpdateOpenModal = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };
  const handleUpdateCloseModal = () => {
    setSelectedId(null);
    setIsModalOpen(false);
  };
  const handleUpdateSuccess = async (updateUserId: number) => {
  }

   //DeleteStudent
   const handleDeleteSuccess = () => {
    //searchDNI();
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
  };
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    searchDNI();
  };

  const memoryData = useMemo(() => studentData, [studentData]);
  return (
    <div className="max-w-screen-xl mx-auto text-center p-1">
      <form onSubmit={handleFormSubmit} className="w-full lg:w-full">
    <label htmlFor="default-search" className="mb-2 text-sm font-medium "></label>
    <div className="relative lg:mx-auto w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          placeholder={`Buscar por DNI ${searchType === 'documentNumber' ? 'DNI' : ''}`}
          required
          //onClick={openTableModal}
          onChange={handleInput}
          value={queryValue}
          />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
    </div>
  </form>
  {memoryData !== undefined && (
    <ModalTable open={memoryData.length > 0} onClose={closeTableModal}>
   <div className="overflow-x-auto bg-white p-2 mt-4">
    <table className="min-w-full text-sm whitespace-nowrap shadow-2xl">

    <thead className="uppercase text-center tracking-wider bg-neutral-300">
      <tr className="text-gray-700 ">
        <th scope="col" className="px-6 py-4">#</th>
        <th scope="col" className="px-6 py-4">DNI</th>
        <th scope="col" className="px-6 py-4">Nombre</th>
        <th scope="col" className="px-6 py-4">Código</th>
        <th scope="col" className="px-6 py-4">Actividad academica</th>
        <th scope="col" className="px-6 py-4">Participación</th>
        <th scope="col" className="px-6 py-4">Instituto</th>
        <th scope="col" className="px-6 py-4">Hora</th>
        <th scope="col" className="px-6 py-4">Fecha</th>
        <th scope="col" className="px-6 py-4">Certificado</th>
        <th scope="col" className="px-6 py-4">Acción</th>
      </tr>
    </thead>
    <tbody>
      {memoryData.map((student, index) => (
      <tr key={index} className="text-center text-gray-500 border-b font-semibold hover:bg-gray-100">
        <th scope="row" className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.id}</span>
        </th>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.documentNumber}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.name}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.code}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.activityAcademy}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.participation}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.institute}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.hour}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.date}</span>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Ver
            <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.certificate}</span>
          </a>
        </td>
        <td className="flex justify-center px-6 py-3 ">
        <div className="flex items-center gap-6">
      <div>
        <button
        onClick={() => handleUpdateOpenModal(student.id)}
        className='border-2 border-green-500 p-0.5 rounded-md text-green-500 transition ease-in-out delay-300 hover:scale-125'>
          <div className="text-xl text-default-400 cursor-pointer active:opacity-50">
            <FaRegEdit />
          </div>
        </button>
          {isModalOpen && (
            <StudentForm id={selectedId}
            onUpdateSuccess={() => handleUpdateSuccess(student.id)}
            onCloseModal={handleUpdateCloseModal}/>
          )}
      </div>
        <StudentDelete id={student.id} onDeleteSuccess={handleDeleteSuccess} />
    </div>
    </td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
</ModalTable>
)}
  <Modal open={modalOpen} onClose={closeErrorModal}>
      <div className="border-2 p-2 rounded-lg">
        <h2 className="text-md font-bold text-red-600 mb-4">DNI incorrecto</h2>
        <h3 className="text-sm font-semibold text-gray-600">El DNI que ingresaste no se encuentra en la base de datos.</h3>
      </div>
    </Modal>

    </div>
  )
}

export default SearchName;