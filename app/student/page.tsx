import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const Student = () => {
  return (
<section>
  <div className="text-center p-6 text-5xl font-semibold">
    <h1>ADMINISTRAR ESTUDIANTES</h1>
  </div>
<div className="overflow-x-auto p-6 bg-white dark:bg-neutral-700">
  <div className="relative m-[2px] mb-6 mr-5 float-left">
    <label htmlFor="inputSearch" className="sr-only">Search </label>
    <input id="inputSearch" type="text" placeholder="Buscar..." className="block lg:w-96 w-80 rounded-lg border dark:border-none dark:bg-neutral-600 py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400" />
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 text-neutral-500 dark:text-neutral-200">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </span>
  </div>

  <div className="relative m-[2px] mb-6 float-right hidden sm:block">
    <label htmlFor="inputFilter" className="sr-only">Filter</label>
    <select id="inputFilter" className="block w-40 rounded-lg border dark:border-none dark:bg-neutral-600 p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400">
      <option value="1" selected>Last week</option>
      <option value="2">Last month</option>
      <option value="3">Yesterday</option>
      <option value="4">Last 7 days</option>
      <option value="5">Last 30 days</option>
    </select>
  </div>

  <table className="min-w-full text-left text-sm whitespace-nowrap rounded-3xl shadow-2xl">

    <thead className="uppercase text-center tracking-wider bg-neutral-300 dark:bg-neutral-800">
      <tr className="text-gray-700 ">
        <th scope="col" className="px-6 py-4">#</th>
        <th scope="col" className="px-6 py-4">Nombre</th>
        <th scope="col" className="px-6 py-4">DNI</th>
        <th scope="col" className="px-6 py-4">Actividad academica</th>
        <th scope="col" className="px-6 py-4">Participacion</th>
        <th scope="col" className="px-6 py-4">Instituto</th>
        <th scope="col" className="px-6 py-4">Hora</th>
        <th scope="col" className="px-6 py-4">Fecha</th>
        <th scope="col" className="px-6 py-4">Certificado</th>
        <th scope="col" className="px-6 py-4">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center text-gray-500 font-semibold hover:bg-gray-100">
        <th scope="row" className="px-6 py-4">
          1
        </th>
        <td className="px-6 py-4">$129.99</td>
        <td className="px-6 py-4">30</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="flex justify-center px-6 py-4">
        <div className="flex items-center gap-6">
        <div content="Edit user" className='border-spacing-2'>
              <span className="text-xl text-default-400 cursor-pointer active:opacity-50">
                <FaRegEdit />
              </span>
            </div>
            <div color="danger" content="Delete user">
              <span className="text-xl text-danger cursor-pointer active:opacity-50">
                <RiDeleteBin5Line />
              </span>
            </div>
            </div>
        </td>
      </tr>

      <tr className=" bg-neutral-200 dark:bg-neutral-800 text-center hover:bg-gray-100">
        <th scope="row" className="px-6 py-4">
          2
        </th>
        <td className="px-6 py-4">$89.50</td>
        <td className="px-6 py-4">25</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
      </tr>

      <tr className="text-center hover:bg-gray-100">
        <th scope="row" className="px-6 py-4">
          3
        </th>
        <td className="px-6 py-4">$69.99</td>
        <td className="px-6 py-4">40</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
      </tr>

      <tr className=" bg-neutral-200 dark:bg-neutral-800 text-center hover:bg-gray-100">
        <th scope="row" className="px-6 py-4">
          4
        </th>
        <td className="px-6 py-4">$449.99</td>
        <td className="px-6 py-4">5</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
      </tr>

      <tr className="text-center hover:bg-gray-100">
        <th scope="row" className="px-6 py-4">
          5
        </th>
        <td className="px-6 py-4">$24.95</td>
        <td className="px-6 py-4">50</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
        <td className="px-6 py-4">In Stock</td>
      </tr>

    </tbody>

  </table>

  <nav className="mt-5 flex items-center justify-between text-sm" aria-label="Page navigation example">
    <p>
      Showing <strong>1-5</strong> of <strong>10</strong>
    </p>

    <ul className="list-style-none flex">
      <li>
        <a
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!"
        >
          Previous
        </a>
      </li>
      <li>
        <a
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!"
        >
          1
        </a>
      </li>
      <li aria-current="page">
        <a
          className="relative block rounded bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700 transition-all duration-300"
          href="#!"
        >
          2
          <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
            (current)
          </span>
        </a>
      </li>
      <li>
        <a
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!"
        >
          Next
        </a>
      </li>
    </ul>
  </nav>

</div>
</section>
  )
}

export default Student;
/* "use client";
import React, { useCallback } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue} from "@nextui-org/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { columns, users } from "@/components/data/data"

const statusColorMap: Record<string, ChipProps["color"]>  = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

type User = typeof users[0];

const Student: React.FC = () => {
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <div content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FiEye />
              </span>
            </div>
            <div content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaRegEdit />
              </span>
            </div>
            <div color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <RiDeleteBin5Line />
              </span>
            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);


  return (
  <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default Student; */