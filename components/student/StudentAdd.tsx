// components/CreateStudentForm.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import Modal from '../share/Modal';
import { useRouteData } from '@/hooks/hooks';

interface CreateStudentFormProps {
  onCloseModal: () => void;
  onCreateSuccess: (createdStudentId: number) => void;
}

type StudentFormData = {
  documentNumber: string;
  name: string;
  code: string;
  activityAcademy: string;
  participation: string;
  institute: string;
  hour: string;
  date: string;
  imageCertificate?: string;
};

const CreateStudentForm: React.FC<CreateStudentFormProps> = ({ onCloseModal, onCreateSuccess }) => {
  const { register, handleSubmit } = useForm<StudentFormData>();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const token = useRouteData("parameter") as string;
  const validToken: string = token || '';

  const onSubmit: SubmitHandler<StudentFormData> = async (data) => {
    try {
      const response = await axios.post(`${URL()}/student`, data, tokenConfig(validToken));
      const createdStudentId = response.data.id;
      onCreateSuccess(createdStudentId);
      setIsModalOpen(true);
      setModalOpen(true);
    } catch (error) {
      console.error('Error al crear estudiante:', error);
    } finally {
      onCloseModal();
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
      <h1 className='text-md text-center font-bold bg-[#006eb0] text-gray-200 border p-2 rounded-lg mb-4 uppercase'>
        Agregar estudiante
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 uppercase text-gray-600 md:grid-cols-2 gap-2">
    <div  className='flex justify-between col-span-2 whitespace-pre-wrap'>
      <div className="mb-4">
          <label className="text-xs font-bold">DNI: </label>
          <input {...register('documentNumber')} className="border rounded-lg p-1 lg:w-36 w-24" />
        </div>
        <div className="mb-4">
          <label className="text-xs font-bold">Código: </label>
          <input {...register('code')} className="border rounded-lg p-1 lg:w-32 w-28" />
        </div>
    </div>
        <div className="mb-4 text-xs col-span-full md:col-span-2 lg:col-span-3">
          <label className="block font-bold">Nombres: </label>
          <input {...register('name')} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4 col-span-full text-xs md:col-span-2 lg:col-span-3">
          <label className="block font-bold">Actividad Académica: </label>
          <input {...register('activityAcademy')} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4 col-span-full text-xs md:col-span-2 lg:col-span-3">
          <label className="block font-bold">Participación: </label>
          <input {...register('participation')} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4 col-span-full text-xs md:col-span-2 lg:col-span-3">
          <label className="block font-bold">Instituto: </label>
          <input {...register('institute')} className="border rounded-lg p-2 w-full" />
        </div>
    <div className='flex justify-between col-span-2 whitespace-pre-wrap'>
        <div className="mb-4">
          <label className="text-xs font-bold">Hora: </label>
          <input {...register('hour')} className="border rounded-lg p-1 lg:w-32 w-28" />
        </div>
        <div className="mb-4 lg:ml-3">
          <label className="text-xs font-bold ">Fecha: </label>
          <input {...register('date')} className="border rounded-lg p-1 lg:w-32 w-24" />
        </div>
    </div>
        <div className="mb-4 text-xs col-span-full md:col-span-2">
          <label className="block font-bold">Imagen: </label>
          <input {...register('imageCertificate')} className="border rounded-lg p-2 w-full" />
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

export default CreateStudentForm;
