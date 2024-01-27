// components/CreateStudentForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import Modal from '../share/Modal';
import { useRouteData } from '@/hooks/hooks';

interface CreateStudentFormProps {
  onCloseModal: () => void;
  onCreateSuccess: () => void;
}

type StudentFormData = {
  excelFile: FileList;
};

const CreateStudentExcel: React.FC<CreateStudentFormProps> = ({ onCloseModal, onCreateSuccess }) => {
  const { register, handleSubmit } = useForm<StudentFormData>();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const token = useRouteData("parameter") as string;
  const validToken: string = token || '';

  const onSubmit: SubmitHandler<StudentFormData> = async (data) => {
    try {
      const formData = new FormData();
      formData.append('excelFile', data.excelFile[0]);

      const response = await axios.post(`${URL()}/students/many`, formData, tokenConfig(validToken));
      console.log(response.data);
      setIsModalOpen(true);
      setModalOpen(true);
      onCloseModal();
      onCreateSuccess();
    } catch (error) {
      console.error('Error al crear estudiantes:', error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    onCloseModal();
  };

  return (
    <Modal open={isModalOpen} onClose={onCloseModal}>
      <div className="max-w-screen-lg mx-auto border p-4 rounded-xl">
        <h1 className='text-sm text-center font-bold bg-[#006eb0] text-gray-200 border p-2 rounded-lg mb-4 uppercase'>
          Agregar estudiantes desde Excel
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="grid grid-cols-2 uppercase text-gray-600 md:grid-cols-2 gap-2">
          <div className="mb-4 text-xs col-span-full md:col-span-2">
            <label className="block font-bold">Archivo Excel: </label>
            <input {...register('excelFile')} type="file" accept=".xls, .xlsx" className="border rounded-lg p-3 w-full" />
          </div>
          <div className="col-span-full flex justify-center">
            <button
              type="submit"
              className="w-auto uppercase text-sm font-bold sm:w-auto bg-[#006eb0] text-white rounded-lg px-4 py-2 hover:bg-blue-700">
              Agregar
            </button>
          </div>
        </form>
        {modalOpen && (
          <Modal open={modalOpen} onClose={closeModal}>
            <div className='font-bold border p-4 rounded-xl text-[#006eb0]'>
              Creación exitosa.
            </div>
          </Modal>
        )}
      </div>
    </Modal>
  );
};

export default CreateStudentExcel;
