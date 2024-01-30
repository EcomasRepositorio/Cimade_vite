// components/UserDelete.tsx
import React, { useState } from 'react';
import axios from 'axios';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import { useRouteData } from '@/hooks/hooks';
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from '../share/Modal';
import { CustomToolDelete } from '../share/button';

interface UserDeleteProps {
  userId: number | null;
  onDeleteSuccess: () => void;
}

const UserDelete: React.FC<UserDeleteProps> = ({ userId, onDeleteSuccess }) => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  //const [successModalOpen, setSuccessModalOpen] = useState(false);

  const token = useRouteData("parameter") as string;
  const validToken: string = token || '';

  const handleDelete = async () => {
    try {
      if (userId) {
        await axios.delete(`${URL()}/user/${userId}`, tokenConfig(validToken));
        //setConfirmationModalOpen(true); // Llamamos a la función de éxito de eliminación
        onDeleteSuccess();
    }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    } finally {
        setConfirmationModalOpen(false);
    }
  };

  const closeModal = () => {
    setConfirmationModalOpen(false);
  };

  return (
    <>
      <div>
        <button
          onClick={() => setConfirmationModalOpen(true)}
          className='border-2 border-red-500 p-0.5 rounded-md text-red-500 transition ease-in-out delay-300 hover:scale-125'
        >
          <div className="text-xl text-danger cursor-pointer active:opacity-50">
            <RiDeleteBin5Line />
          </div>
        </button>
      </div>
      {/* Modal de Confirmación */}
      {confirmationModalOpen && (
        <Modal open={confirmationModalOpen} onClose={closeModal}>
          <div className='border p-5 rounded-lg'>
            <p className='flex justify-center whitespace-pre-wrap text-center'>¿Estás seguro de que deseas eliminar a este usuario?</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600"
              >
                Sí, eliminar
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UserDelete;
