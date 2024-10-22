// components/CreateStudentForm.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import Modal from '../share/ModalAdmin';
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
  const { register, handleSubmit, setError, formState: { errors } } = useForm<StudentFormData>();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const token = useRouteData("parameter") as string;
  const validToken: string = token || '';
  const Num = (value: string) => /^\d+$/.test(value);

  const onSubmit: SubmitHandler<StudentFormData> = async (data) => {
    try {
      setIsLoading(true);
      if (!Num(data.documentNumber) || data.documentNumber.length !== 8) {
        setError('documentNumber', {
          type: 'manual',
          message: 'El DNI debe contener solo números y exactamente 8 dígitos',
        });
        return;
      }
      if (!Num(data.code) || (data.code.length !== 8 && data.code.length !== 9)) {
        setError('code', {
          type: 'manual',
          message: 'El codigo debe contener solo números y exactamente 8 y 9 digitos',
        });
        return;
      }
     /*  if (!Num(data.hour)) {
        setError('hour', {
          type: 'manual',
          message: 'La hora debe contener solo números',
        });
        return;
      } */
      const response = await axios.post(`${URL()}/student`, data, tokenConfig(validToken));
      const createdStudentId = response.data.id;
      onCreateSuccess(createdStudentId);
      setIsCreateModalOpen(true);
      setModalOpen(true);
    } catch (error) {
      console.error('Error al crear estudiante:', error);
    } finally {
      setIsLoading(false)
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    onCloseModal();
  };

  return (
    <Modal open={isCreateModalOpen} onClose={onCloseModal}>
    <div className="max-w-screen-lg mx-auto border p-4 rounded-xl">
      <h1 className='text-md text-center font-bold bg-[#006eb0] text-gray-200 border p-2 rounded-lg mb-4 uppercase'>
        Agregar estudiante
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 uppercase text-gray-600 md:grid-cols-2 gap-2">
    <div  className='flex justify-between col-span-2 whitespace-pre-wrap'>
      <div className="mb-4">
          <label className="text-xs font-bold">DNI: </label>
          <input {...register('documentNumber', {required: true})}
          className={`border rounded-lg p-1 lg:w-36 w-24 ${errors?.documentNumber ? 'border-red-500' : ''}`} />
            {errors?.documentNumber && (
              <span className="text-xs font-mono block text-red-400">{errors.documentNumber.message}</span>
            )}
        </div>
        <div className="mb-4">
          <label className="text-xs font-bold">Código: </label>
          <input {...register('code', {required: true})}
          className={`border rounded-lg p-1 lg:w-32 w-28 ${errors?.code ? 'border-red-500' : ''}`} />
          {errors?.code && (
            <span className="text-xs lg:ml-4 font-mono block text-red-400">{errors.code.message}</span>
          )}
        </div>
    </div>
        <div className="mb-4 text-xs col-span-full md:col-span-2 lg:col-span-3">
          <label className="block font-bold">Nombres: </label>
          <input {...register('name', {required: true})} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4 col-span-full text-xs md:col-span-2 lg:col-span-3">
          <label className="block font-bold">Actividad Académica: </label>
          <input {...register('activityAcademy', {required: true})} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4 col-span-full text-xs md:col-span-2 lg:col-span-3">
          <label className="block font-bold">Participación: </label>
          <input {...register('participation')} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4 col-span-full text-xs md:col-span-2 lg:col-span-3">
          <label className="block font-bold">Instituto: </label>
          <input {...register('institute', {required: true})} className="border rounded-lg p-2 w-full" />
        </div>
    <div className='flex justify-between col-span-2 whitespace-pre-wrap'>
        <div className="mb-4">
          <label className="text-xs font-bold">Hora/Creditos: </label>
          <input {...register('hour', {required: true})}
          className={`border rounded-lg p-1 lg:w-36 w-36 ${errors?.hour ? 'border-red-500' : ''}`} />
          {errors?.hour && (
            <span className="text-xs font-mono block text-red-400">{errors.hour.message}</span>
          )}
        </div>
        <div className="mb-4 lg:ml-3">
          <label className="text-xs font-bold ">Fecha: </label>
          <input {...register('date', {required: true})} className="border rounded-lg p-1 lg:w-44 w-36" />
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
            Registro de estudiante correctamente.
          </div>
        </Modal>
      )}
    </div>
    </Modal>
  );
};

export default CreateStudentForm;
