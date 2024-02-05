
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
import UserUpdate from '@/components/user/userUpdate';
import UserDelete from '@/components/user/userDelete';
import { FiLogOut } from 'react-icons/fi';
import { logout } from '@/components/utils/auth.server';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [userData, setUserData] = useState<UserData[]>();
  const [dataLoading, setDataLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenUpdate, setModalOpenUpdate] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [modalOpenDelete, setModalOpenDelete] = useState(false);

  const token = useRouteData("parameter");

  const validToken = typeof token === "string" ? token : '';

  const onSubmit = async () => {
    try {
      const url = `${URL()}/users`;
      const response = await axios.get(url, tokenConfig(validToken));
      console.log(response);

      setUserData(response.data);
      setDataLoading(true);
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

  //UpdateUser
  const handleEditClick = (userId: number) => {
    console.log('selectedUserId before update:', selectedUserId);
    setSelectedUserId(userId);
    console.log('selectedUserId after update:', selectedUserId);
    setModalOpenUpdate(true);
  }
  const handleUpdateSuccess = async (updateUserId: number) => {
    try {
      const url = `${URL()}/users`;
      const response = await axios.get(url, tokenConfig(validToken));
      setUserData(response.data);
      setDataLoading(true);
    } catch (error) {
      console.error('Error al obtener la lista de usuarios después de actualizar uno existente:', error);
    }
    //setModalOpenUpdate(false);
  }
  const handleCloseUpdateForm = () => {
    setModalOpenUpdate(false);
  }

  //CreateUser
  const handleRegisterSuccess = async (createdUserId: number) => {
    try {
      const url = `${URL()}/users`;
      const response = await axios.get(url, tokenConfig(validToken));
      setUserData(response.data);
      setDataLoading(true);
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

  //DeleteUser
  const handleDeleteSuccess = () => {
    onSubmit();
  };

   //Logout
   //const navigate = useNavigate();
   const handleLogout = async () => {
    await logout();
  };

  return (
      <section id="user">
        <div className='flex justify-center mt-8 mb-8'>
        <a className="uppercase border rounded-2xl shadow-2xl text-center text-xl font-bold text-gray-500 p-4">
          Registro de usuarios</a>
        </div>
        <div className='flex justify-end'>
        <button
          type="button"
          className="text-[#006eb0] uppercase hover:text-white border-2 border-[#006eb0] hover:bg-[#006eb0] focus:ring-4 focus:outline-none font-semibold rounded-lg text-xs px-3 py-2 text-center me-2 dark:hover:text-white dark:focus:ring-[#BFE9FB] inline-flex items-center"
          onClick={handleOpenCreateForm}
          >
            <FaRegAddressBook className='mr-1 text-lg' />
            Registrar
        </button>
        <button type="button" onClick={handleLogout}
        className="text-red-500 hover:text-white border-2 border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-xs px-2 py-2 text-center mb-1 me-4 dark:hover:text-white dark:focus:ring-red-200">
          <FiLogOut className='text-lg' />
        </button>
        </div>
        {modalOpen && (
        <UserRegister onCreateSuccess={handleRegisterSuccess} onCloseModal={handleCloseCreateForm} />
        )}
        {dataLoading && userData && (
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
                      {index + 1}
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
                        <div>
                        <button
                          onClick={() => handleEditClick(user.id)}
                          className='border-2 border-green-500 p-0.5 rounded-md text-green-500 transition ease-in-out delay-300 hover:scale-125'>
                          <div className="text-xl text-default-400 cursor-pointer active:opacity-50">
                            <FaRegEdit />
                          </div>
                        </button>
                        {modalOpenUpdate && (
                          <UserUpdate
                            userId={selectedUserId}
                            onUpdateSuccess={() => handleUpdateSuccess(user.id)}
                            onCloseModal={handleCloseUpdateForm}
                          />
                        )}
                        </div>
                        {/* {userData.map((user) => ( */}
                        {/* <div key={user.id}> */}
                          <UserDelete userId={user.id}
                          onDeleteSuccess={handleDeleteSuccess}
                          //onCloseModal={handleCloseDeleteForm}
                          />
                        {/* </div> */}
                        {/* ))} */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
  )
}

export default User;