import React, { useState } from 'react'
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import axios from 'axios'
import { useRouteData } from '@/hooks/hooks';
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from '@/components/share/Modal';

const DeleteAllStudent = () => {
  const [deleteOpen, setDeleteOpen] = useState(false);

  const token = useRouteData("parameter") as string;
  const validToken: string = token || '';

  const handleOpenDelete = () => {
    setDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setDeleteOpen(false);
  };

  const handleDeleteAllData = async () => {
    try {
      await axios.delete(`${URL()}/delete/students/many`, tokenConfig(validToken));
      handleCloseDelete();
      window.location.reload();
    } catch (error) {
      console.error('Error deleting all students:', error);
    }
  };

  return (
    <section className="p-2">
      <button
        type="button"
        className="text-red-500 uppercase font-bold hover:text-white border-2 border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg  px-4 py-2 text-center mb-1 dark:hover:text-white dark:focus:ring-red-200 hover:scale-110 duration-300"
        onClick={handleOpenDelete}>
        <RiDeleteBin5Line className="text-2xl mr-1 inline-flex" />
          <p className="text-sm inline-flex">Eliminar todo</p>
      </button>

      <Modal
        open={deleteOpen}
        onClose={handleCloseDelete}>
        <div className="border-2 border-red-500 p-4 rounded-xl">
          <p className='mb-5 text-center font-bold text-lg'>¿Estás seguro de que deseas eliminar todos los datos?</p>
          <div className="flex justify-between">
            <button
              onClick={handleDeleteAllData}
              className='uppercase font-bold border border-red-500 px-6 py-2 rounded-lg text-red-500 hover:text-white hover:bg-red-500 hover:scale-110 duration-300'>
                Eliminar
            </button>
            <button
              onClick={handleCloseDelete}
              className='uppercase font-bold border border-[#006eb0] px-6 py-2 rounded-lg text-[#006eb0] hover:text-white hover:bg-[#006eb0] hover:scale-110 duration-300'>
                Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default DeleteAllStudent;
