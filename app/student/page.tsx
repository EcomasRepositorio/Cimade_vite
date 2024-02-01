"use client";
import React, {useEffect, useMemo, useState} from 'react'
import axios from 'axios';
import { useRouteData } from '@/hooks/hooks';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import { FaRegEdit } from "react-icons/fa";
import { StudentData } from '@/interface/interface';
import { CustomLogout, CustomRegister } from '@/components/share/button';
import Modal from '@/components/share/Modal';
import StudentForm from '@/components/student/StudentForm';
import { RiFileExcel2Line } from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import StudentDelete from '@/components/student/StudentDelete';
import CreateStudentForm from '@/components/student/StudentAdd';
import CreateStudentExcel from '@/components/student/StudentsAll';
import SearchStudent from '@/components/student/SearchStudent';

const Student = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [queryValue, setQueryValue] = useState<string>('');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [studentData, setStudentData] = useState<StudentData[]>();
  const [dataLoading, setDataLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const [createStudentExcel, setCreateStudentExcel] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setQueryValue(event.target.value);
  };
  const token = useRouteData("parameter");
  const validToken = typeof token === "string" ? token: '';

  const onSubmit = async () => {
    try {
      const url = `${URL()}/students`;
      const response = await axios.get(url, tokenConfig(validToken)
      );
      console.log(response)
      setStudentData(response.data);
      setDataLoading(true);
    } catch (error: any) {
      if (error && typeof error === 'object' && 'response' in error) {
        console.log(error.response.data);
      } else if (error instanceof Error) {
        console.log("Error desconocido", error.message)
      } else {
        console.log("Error:")
      }
    }
  };

 /*  useEffect(() => {
    onSubmit();
  }, []); */
  console.log('hola', createStudentExcel)

  //CreateStudents
  const handleCreateSuccess = async (createStudentId: number) => {
    try {
      const url = `${URL()}/students`;
      const response = await axios.get(url, tokenConfig(validToken));
      setStudentData(response.data);
      setDataLoading(true);
    } catch (error) {
      console.error('Error al obtener la lista de usuarios después de crear uno nuevo:', error);
    }
  }
  const handleOpenCreateForm = () => {
    setIsCreateFormOpen(true);
  };
  const handleCloseCreateForm = () => {
    setIsCreateFormOpen(false);
  };

  //ImportExcel
  const handleCreateStudentExcel = () => {
    console.log('Antes de setCreateStudentExcel(true):', createStudentExcel);
    setCreateStudentExcel(true);
    console.log('Después de setCreateStudentExcel(true):', createStudentExcel);
  };
  const handleCloseCreateExcel = () => {
    setCreateStudentExcel(false);
  };
  const handleCreateExcelSuccess = () => {}

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
    try {
      const url = `${URL()}/students`;
      const response = await axios.get(url, tokenConfig(validToken));
      setStudentData(response.data);
      setDataLoading(true);
    } catch (error) {
      console.error('Error al obtener la lista de usuarios después de actualizar uno existente:', error);
    }
  }

  //DeleteStudent
  const handleDeleteSuccess = () => {
    onSubmit();
  };

  //SearchStudents
  const handleSearchStudent = async (query: string, queryValue: string) => {
    try {
      setLoading(true);
      console.log('Valor de query:', query);
      setQueryValue(queryValue);
      if (queryValue === 'documentNumber') {
      const url = `${URL()}/student/dni/${(queryValue)}/type/${query}`; // Reemplaza 'someType' con el tipo adecuado
      console.log('Hola url: ',url)
      const response = await axios.get(url);
      setStudentData(response.data);
      setIsSearchActive(true)
      } else {
        setIsSearchActive(false)
        console.error("Error al realizar la búsqueda");
      }
    } catch (error) {
      console.error("Error al realizar la búsqueda por DNI", error);
      openErrorModal();
    } finally {
      setLoading(false);
    }
  };
  const openErrorModal = () => {  // Agregado
    setErrorModalOpen(true);
  };
  const closeErrorModal = () => {  // Agregado
    setErrorModalOpen(false);
  };

  useEffect(() => {
    onSubmit();
  }, []);

  const memoryData = useMemo(() => studentData, [studentData]);

  return (
    <section className="p-2">
  <div className="text-center text-gray-600 p-6 text-3xl font-semibold">
    <h1>ADMINISTRAR ESTUDIANTES</h1>
  </div>
  <div className="flex flex-col sm:flex-row border-2 rounded-xl items-center lg:ml-10 lg:mr-10 justify-between p-2 bg-white">
  <div className="relative m-[2px] mb-2 sm:mb-0">
    <SearchStudent onSearchDNI={(query: string, queryValue: string) => handleSearchStudent(query, queryValue)} />
  </div>

  <div className="mt-2 sm:mb-0">
  <button
  type="button"
  className="text-[#006eb0] uppercase hover:text-white border-2 border-[#006eb0] hover:bg-[#006eb0] focus:ring-4 focus:outline-none font-semibold rounded-lg text-xs px-3 py-2 text-center me-2 mb-1 dark:hover:text-white dark:focus:ring-[#BFE9FB] inline-flex items-center"
  onClick={handleOpenCreateForm}>
    <FaRegAddressBook className='mr-1 text-lg' />
    Agregar
  </button>
  {isCreateFormOpen && (
    <CreateStudentForm onCreateSuccess={handleCreateSuccess} onCloseModal={handleCloseCreateForm}/>
  )}
  <button
    type="button"
    className="text-green-600 uppercase hover:text-white border-2 border-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-xs px-3 py-2 text-center me-2 mb-1  dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-200 inline-flex items-center"
    onClick={handleCreateStudentExcel}>
      <RiFileExcel2Line className='mr-1 text-lg' /> Importar
  </button>
    {createStudentExcel && (
      <CreateStudentExcel
      onCreateSuccess={handleCreateExcelSuccess}
      onCloseModal={handleCloseCreateExcel}
      />
  )}
  <CustomRegister text="Registrar">
  <button type="button" className="text-yellow-500 hover:text-white border-2 border-yellow-400 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg text-xs px-2 py-2 text-center me-2 mb-1 dark:hover:text-white dark:focus:ring-yellow-200">
    <FiUserPlus  className='text-lg' />
  </button>
  </CustomRegister>
  <CustomLogout text="Salir">
  <button type="button" className="text-red-500 hover:text-white border-2 border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-xs px-2 py-2 text-center mb-1 dark:hover:text-white dark:focus:ring-red-200">
    <FiLogOut className='text-lg' />
  </button>
  </CustomLogout>
  </div>

</div>
{loading && <p>Cargando...</p>}
{dataLoading && memoryData && (
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

  <nav className="mt-5 flex items-center justify-between text-sm" aria-label="Page navigation example">
    <p>Showing <strong>1-5</strong> of <strong>10</strong></p>
    <ul className="list-style-none flex">
      <li>
        <a className="block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!">Previous</a>
      </li>
      <li>
        <a className="block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!">1</a>
      </li>
      <li aria-current="page">
        <a className="block rounded bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700 transition-all duration-300"
          href="#!">2
          <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
            (current)
          </span>
        </a>
      </li>
      <li>
        <a className=" block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#">Next</a>
      </li>
    </ul>
  </nav>
</div>
)}
</section>
  )
};
export default Student;
