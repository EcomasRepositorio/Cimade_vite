"use client";
import React, {useEffect, useState} from 'react'
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

const Student = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [queryValue, setQueryValue] = useState<string>('');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [studentData, setStudentData] = useState<StudentData[]>();
  const [deleteSearch, setDeleteSearch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);

  const handleCreateSuccess = (createStudentId: number) => {}
  const handleCloseCreateForm = () => {
    setIsCreateFormOpen(false);
  };
  const handleOpenCreateForm = () => {
    setIsCreateFormOpen(true);
  };

  const handleOpenModal = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setSelectedId(null);
    setIsModalOpen(false);
  };

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
  };

  const handleUpdateSuccess = () => {}
  const handleDeleteSuccess = () => {}

  const token = useRouteData("parameter");

  const onSubmit = async () => {
    const validToken = typeof token === "string" ? token: '';
    try {
      const url = `${URL()}/students`;
      const response = await axios.get(url, tokenConfig(validToken)
      );
      console.log(response)
      setStudentData(response.data);
      setDeleteSearch(true);
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

  useEffect(() => {
    onSubmit();
  }, []);

  return (
  <section className="p-2">
  <div className="text-center text-gray-600 p-6 text-3xl font-semibold">
    <h1>ADMINISTRAR ESTUDIANTES</h1>
  </div>
  <div className="flex flex-col sm:flex-row border-2 rounded-xl items-center lg:ml-10 lg:mr-10 justify-between p-2 bg-white">
  <div className="relative m-[2px] mb-2 sm:mb-0">
    <label htmlFor="inputSearch" className="sr-only">Search</label>
    <input id="inputSearch"
    type="text"
    placeholder="Buscar por DNI o nombre..."
    className="block lg:w-96 w-80 rounded-lg border-4 py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
    onClick={toggleIsActive}
    onChange={onChange}
    value={queryValue}/>
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 text-neutral-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </span>
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
  <button type="button" className="text-green-600 uppercase hover:text-white border-2 border-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-xs px-3 py-2 text-center me-2 mb-1  dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-200 inline-flex items-center">
    <RiFileExcel2Line className='mr-1 text-lg' /> Importar
  </button>
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
{deleteSearch && studentData && (
<div className="overflow-x-auto bg-white p-2 mt-4">

  <table className="min-w-full text-sm whitespace-nowrap shadow-2xl">

    <thead className="uppercase text-center tracking-wider bg-neutral-300">
      <tr className="text-gray-700 ">
        <th scope="col" className="px-6 py-4">#</th>
        <th scope="col" className="px-6 py-4">Nombre</th>
        <th scope="col" className="px-6 py-4">DNI</th>
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
      {studentData.map((student, index) => (
      <tr className="text-center text-gray-500 border-b font-semibold hover:bg-gray-100">
        <th scope="row" className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.id}</span>
        </th>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.name}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.documentNumber}</span>
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
        onClick={() => handleOpenModal(student.id)}
        className='border-2 border-green-500 p-0.5 rounded-md text-green-500 transition ease-in-out delay-300 hover:scale-125'>
          <div className="text-xl text-default-400 cursor-pointer active:opacity-50">
            <FaRegEdit />
          </div>
        </button>
          <Modal open={isModalOpen} onClose={handleCloseModal}>
              <StudentForm id={selectedId} onCloseModal={handleCloseModal} onUpdateSuccess={handleUpdateSuccess}/>
          </Modal>
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
          href="#!">Next</a>
      </li>
    </ul>
  </nav>
</div>
)}
</section>
  )
};
export default Student;
