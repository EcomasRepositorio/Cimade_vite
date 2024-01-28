import React from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';

const User = () => {
  return (
    <div className="">
        <h1 className="uppercase text-center text-2xl font-bold text-gray-700 p-5">Registro de usuarios</h1>
    <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg p-6">
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
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
        </tbody>
    </table>
    </div>
</div>
  )
}

export default User;