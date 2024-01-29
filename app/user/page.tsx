
"use client";
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaRegAddressBook } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteData } from '@/hooks/hooks';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import { UserData } from '@/interface/interface';
import UserRegister from '@/components/user/userRegister';

const User = () => {
  const [userData, setUserData] = useState<UserData[]>();
  const [deleteSearch, setDeleteSearch] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const token = useRouteData("parameter");

  const validToken = typeof token === "string" ? token : '';
  const onSubmit = async () => {
    try {
      const url = `${URL()}/users`;
      const response = await axios.get(url, tokenConfig(validToken));
      console.log(response);

      setUserData(response.data);
      setDeleteSearch(true);
    } catch (error: any) {
      if (error && typeof error === 'object' && 'response' in error) {
        console.log(error.response.data);
      } else if (error instanceof Error) {
        console.log("Error desconocido", error.message);
      } else {
        console.log("Error:", error);
      }
    }
  };

  useEffect(() => {
    onSubmit();
  }, []);

  const handleRegisterSuccess = async (createdUserId: number) => {
    try {
      // Llamas a la API para obtener la lista actualizada de usuarios después de crear uno nuevo
      const url = `${URL()}/users`;
      const response = await axios.get(url, tokenConfig(validToken));

      setUserData(response.data);
      setDeleteSearch(true);
    } catch (error) {
      console.error('Error al obtener la lista de usuarios después de crear uno nuevo:', error);
    }
  }
  const handleCloseCreateForm = () => {
    setModalOpen(false);
  };
  const handleOpenCreateForm = () => {
    setModalOpen(true);
  };
  
  return (
      <div>
        <h1 className="uppercase text-center text-2xl font-bold text-gray-700 p-5">Registro de usuarios</h1>
        <div className='flex justify-end'>
        <button
          type="button"
          className="text-[#006eb0] uppercase hover:text-white border-2 border-[#006eb0] hover:bg-[#006eb0] focus:ring-4 focus:outline-none font-semibold rounded-lg text-xs px-3 py-2 text-center me-4 mb- dark:hover:text-white dark:focus:ring-[#BFE9FB] inline-flex items-center"
          onClick={handleOpenCreateForm}
          >
            <FaRegAddressBook className='mr-1 text-lg' />
            Registrar
        </button>
        </div>
        {modalOpen && (
        <UserRegister onCreateSuccess={handleRegisterSuccess} onCloseModal={handleCloseCreateForm} />
        )}
        {deleteSearch && userData && (
          <div className="overflow-x-auto bg-white p-2 mt- shadow-2xl">
            <table className="w-full text-sm text-center rtl:text-right text-gray-400">
              <thead className="text-xs text-gray-500 uppercase bg-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Apellidos
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Teléfono
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rol
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr key={index} className="bg-white text-gray-400 font-semibold border-b hover:bg-gray-200">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      {user.id}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      {user.email}
                    </th>
                    <td className="px-6 py-4">
                      {user.firstName}
                    </td>
                    <td className="px-6 py-4">
                      {user.lastName}
                    </td>
                    <td className="px-6 py-4">
                      {user.phone}
                    </td>
                    <td className="px-6 py-4">
                      {user.role}
                    </td>
                    <td>
                      <div className='px-6 py-4 flex justify-center gap-5'>
                        <button
                          className='border-2 border-green-500 p-0.5 rounded-md text-green-500 transition ease-in-out delay-300 hover:scale-125'>
                          <div className="text-xl text-default-400 cursor-pointer active:opacity-50">
                            <FaRegEdit />
                          </div>
                        </button>
                        <button
                          className='border-2 border-red-500 p-0.5 rounded-md text-red-500 transition ease-in-out delay-300 hover:scale-125'>
                          <div className="text-xl text-danger cursor-pointer active:opacity-50">
                            <RiDeleteBin5Line />
                          </div>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
  )
}

export default User;