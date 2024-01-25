// components/StudentForm.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import { useRouteData } from '@/hooks/hooks';
import Modal from '../share/Modal';

interface StudentFormProps {
  id: string;
  onCloseModal: () => void;
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

const StudentForm: React.FC<StudentFormProps> = ({ id, onCloseModal }) => {
  const { register, handleSubmit, setValue, control } = useForm<StudentFormData>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const token = useRouteData("parameter") as string;
  const validToken: string = token || '';

  useEffect(() => {
    console.log(id);
    console.log("URL:", `${URL()}/show/student/${id}`);
    const fetchStudentData = async () => {
      if (!id) {
        return;
      }
      try {
        const response = await axios.get(`${URL()}/show/student/${id}`, tokenConfig(validToken));
        console.log(response);
        const studentData = response.data;
          setValue('documentNumber', studentData.documentNumber);
          setValue('name', studentData.name);
          setValue('code', studentData.code);
          setValue('activityAcademy', studentData.activityAcademy);
          setValue('participation', studentData.participation);
          setValue('institute', studentData.institute);
          setValue('hour', studentData.hour);
          setValue('date', studentData.date);
          setValue('imageCertificate', studentData.imageCertificate);
      } catch (error) {
        console.error('Error al cargar datos del estudiante:', error);
        if (axios.isAxiosError(error) && error.response) {
          console.error('Respuesta del servidor:', error.response.data);
        }
      }
    };
    fetchStudentData();
  }, [id, setValue]);

  const onSubmit: SubmitHandler<StudentFormData> = async (data) => {
    try {
      await axios.put(`${URL()}/student/${id}`, data, tokenConfig(validToken));
      setIsModalOpen(true);
      setModalOpen(true);
    } catch (error) {
      console.error('Error al actualizar estudiante:', error);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="max-w-screen-lg mx-auto border p-4 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 uppercase md:grid-cols-2 gap-2">
        <div className="mb-4">
          <label className="text-xs font-bold">DNI: </label>
          <input {...register('documentNumber')} className="border rounded-lg p-2 w-36" />
        </div>
        <div className="mb-4">
          <label className="text-xs font-bold">Código: </label>
          <input {...register('code')} className="border rounded-lg p-2 w-32" />
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
        <div className="mb-4">
          <label className="text-xs font-bold">Hora: </label>
          <input {...register('hour')} className="border rounded-lg p-2 w-32" />
        </div>
        <div className="mb-4 lg:ml-3">
          <label className="text-xs font-bold ">Fecha: </label>
          <input {...register('date')} className="border rounded-lg p-2 w-32" />
        </div>
        <div className="mb-4 text-xs col-span-full md:col-span-2">
          <label className="block font-bold">Imagen: </label>
          <input {...register('imageCertificate')} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="col-span-full flex justify-center">
          <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
            Actualizar Estudiante
          </button>
        </div>
      </form>
      {modalOpen && (
        <Modal open={modalOpen} onClose={closeModal}>
         Actualizacion exitosa...!
        </Modal>
      )}
    </div>
  );
};

export default StudentForm;
