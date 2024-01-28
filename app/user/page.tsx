
"use client";
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteData } from '@/hooks/hooks';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import { UserData } from '@/interface/interface';

const User = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [queryValue, setQueryValue] = useState('');
  const [userData, setUserData] = useState<UserData[]>();
  const [deleteSearch, setDeleteSearch] = useState(false);

  const token = useRouteData("parameter");

  const onSubmit = async () => {
    const validToken = typeof token === "string" ? token : '';
    try {
      const url = `${URL()}/users`;  // Asegúrate de tener la ruta correcta para obtener usuarios
      const response = await axios.get(url, tokenConfig(validToken));

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
  return (
      <div>
            <h1 className="uppercase text-center text-2xl font-bold text-gray-700 p-5">Registro de usuarios</h1>
        {deleteSearch && userData && (
          <div className="overflow-x-auto bg-white p-2 mt-4">
            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
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
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                    <td className="flex justify-center">
                      <div className=" mt-4">
                        <label htmlFor="inputFilter" className="sr-only">Filter</label>
                        <select id="inputFilter" className="block w-auto rounded-lg border p-1 text-sm focus:outline-none focus:ring-1">
                          <option value="1" selected>USER</option>
                          <option value="2">ADMIN</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div className='px-6 py-4 flex justify-center gap-5'>
                        <button
                          className='border-2 border-green-500 p-0.5 rounded-md text-green-500 transition ease-in-out delay-300 hover:scale-125'>
                          <div className="text-xl text-default-400 cursor-pointer active:opacity-50">
                            {/* Agrega el icono de edición según tu diseño */}
                          </div>
                        </button>
                        <button
                          className='border-2 border-red-500 p-0.5 rounded-md text-red-500 transition ease-in-out delay-300 hover:scale-125'>
                          <div className="text-xl text-danger cursor-pointer active:opacity-50">
                            {/* Agrega el icono de eliminación según tu diseño */}
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