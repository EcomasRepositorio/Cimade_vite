"use client";
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useRouteData } from '@/hooks/hooks';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { StudentData } from '@/interface/interface';
import { CustomToolEdit, CustomToolDelete } from '@/components/share/button';
import Modal from '@/components/share/Modal';
import StudentForm from '@/components/certificate/StudentForm';

const Student = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState<any[]>();
  const [queryValue, setQueryValue] = useState<string>('');
  const [searchType, setSearchType] = useState<string | null>(null);
  const [studentData, setStudentData] = useState<StudentData[]>();
  const [deleteSearch, setDeleteSearch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const token = useRouteData("parameter");

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
  };

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
  <div className="flex flex-col sm:flex-row border-2 rounded-xl items-center lg:ml-64 lg:mr-64 justify-between p-2 bg-white">
  <div className="relative m-[2px] mb-2 sm:mb-0">
    <label htmlFor="inputSearch" className="sr-only">Search</label>
    <input id="inputSearch"
    type="text"
    placeholder="Buscar..."
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
  <button type="button" className="text-red-700 uppercase hover:text-white border-4 border-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-xs px-5 py-2 text-center me-5 mb-1 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-200">
    Agregar
  </button>
  <button type="button" className="text-green-700 uppercase hover:text-white border-4 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-xs px-5 py-2 text-center mb-1 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-200">
    Importar
  </button>
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
      <CustomToolEdit text="Editar">
        <button
        onClick={handleOpenModal}
        className='border-2 border-green-500 p-0.5 rounded-md text-green-500 transition ease-in-out delay-300 hover:scale-125'>
          <span className="text-xl text-default-400 cursor-pointer active:opacity-50">
            <FaRegEdit />
          </span>
        </button>
          <Modal open={isModalOpen} onClose={handleCloseModal}>
            <StudentForm id="123" onCloseModal={handleCloseModal}/>
          </Modal>
      </CustomToolEdit>
      <CustomToolDelete text="Eliminar">
        <button className='border-2 border-red-500 p-0.5 rounded-md text-red-500 transition ease-in-out delay-300 hover:scale-125'>
          <span className="text-xl text-danger cursor-pointer active:opacity-50">
            <RiDeleteBin5Line />
          </span>
        </button>
      </CustomToolDelete>
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
        <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!">Previous</a>
      </li>
      <li>
        <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!">1</a>
      </li>
      <li aria-current="page">
        <a className="relative block rounded bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700 transition-all duration-300"
          href="#!">2
          <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
            (current)
          </span>
        </a>
      </li>
      <li>
        <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
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
