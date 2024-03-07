import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import { useRouteData } from '@/hooks/hooks';
import Modal from '../share/Modal';
import { StudentFormData } from '@/interface/interface';
import ErrorModal from '../share/errorModal';

interface StudentFormProps {
  id: number | null;
  onCloseModal: () => void;
  onUpdateSuccess: () => void;
};

const StudentForm: React.FC<StudentFormProps> = ({ id, onCloseModal, onUpdateSuccess }) => {
  const { register, handleSubmit, setValue, formState: { errors }, setError } = useForm<StudentFormData>();
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const token = useRouteData("parameter") as string;
  const validToken: string = token || '';
  const isNum = (value: string) => /^\d+$/.test(value);

  useEffect(() => {
    const fetchStudentData = async () => {
      if (!id) {
        return;
      }
      try {
        const response = await axios.get(`${URL()}/show/student/${id}`, tokenConfig(validToken));
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
          setDataLoaded(true);
      } catch (error) {
        handleFetchError(error);
      }
    };
    fetchStudentData();
  }, [setValue, id, token, validToken]);

  const handleFetchError = (error: any) => {
    console.error('Error al cargar datos del estudiante:', error);
    if (axios.isAxiosError(error) && error.response) {
      console.error('Respuesta del servidor:', error.response.data);
      setErrorMessage('Error al cargar datos del estudiante:' + error.response.data);
    } else {
      setErrorMessage('Error al cargar datos del estudiante');
    }
    setErrorModalOpen(true);
  };

  const onSubmit: SubmitHandler<StudentFormData> = async (data) => {
    try {
      setIsLoading(true);
      if (!isNum(data.documentNumber) || data.documentNumber.length !== 8) {
        setError('documentNumber', {
          type: 'manual',
          message: 'El DNI debe contener solo números y exactamente 8 digitos',
        });
        return;
      };

      if (!isNum(data.code) || data.code. length !== 8 && data.code.length !== 9) {
        setError('code', {
          type: 'manual',
          message: 'El codigo debe contener solo números y exactamente 9 digitos',
        });
        return;
      };


      if (!isNum(data.hour)) {
        setError('hour', {
          type: 'manual',
          message: 'La hora debe contener solo números',
        });
        return;
      };
      if (id) {
      await axios.put(`${URL()}/student/${id}`, data, tokenConfig(validToken));
      setModalOpen(true);
      onUpdateSuccess();
    };
    } catch (error) {
      console.error('Error al actualizar estudiante:', error);
      setErrorMessage('Error al actualizar estudiante. Por favor inténtelo de');
      setErrorModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };
  const closeModal = () => {
    setError('documentNumber', {});
    setErrorModalOpen(false);
    setModalOpen(false);
    onCloseModal();
  };

  return (
    <Modal open={dataLoaded} onClose={onCloseModal}>
    <div className="max-w-screen-lg mx-auto border p-4 rounded-xl">
      <h1 className='text-md font-bold bg-[#006eb0] text-gray-100 border p-2 rounded-lg mb-4 uppercase'>Actualizar estudiante</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 uppercase md:grid-cols-2 gap-2">
      <div  className='flex justify-between col-span-2 whitespace-pre-wrap'>
        <div className="mb-4">
          <label className="text-xs font-bold">DNI: </label>
          <input {...register('documentNumber', { required: true })}
            className={`border rounded-lg p-1.5 lg:w-36 w-24 ${errors?.documentNumber ? 'border-red-500' : ''}`}
          />
            {errors?.documentNumber && (
              <span className="text-left text-xs font-mono block text-red-400">{errors.documentNumber.message}</span>
            )}
        </div>
        <div className="mb-4">
          <label className="text-xs font-bold">Código: </label>
          <input {...register('code', { required: true })}
          className={`border rounded-lg p-1.5 lg:w-32 w-28 ${errors?.code ? 'border-red-500' : ''}`}
          />
          {errors?.code && (
            <span className="text-left lg:ml-4 text-xs font-mono block text-red-400">{errors.code.message}</span>
          )}
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
        <div  className='flex justify-between col-span-2 whitespace-pre-wrap'>
        <div className="mb-4">
          <label className="text-xs font-bold">Hora/Créditos: </label>
          <input {...register('hour')}
          className={`border rounded-lg p-2 lg:w-32 w-24 ${errors?.hour?.message ? 'border-red-500' : ''}`} />
          {errors?.hour && (
            <span className="text-left text-xs font-mono block text-red-400">{errors.hour.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="text-xs font-bold ">Fecha: </label>
          <input {...register('date')} className="border rounded-lg p-2 lg:w-32 w-28" />
        </div>
      </div>
        <div className="mb-4 text-xs col-span-full md:col-span-2">
          <label className="block font-bold">Imagen: </label>
          <input {...register('imageCertificate')} className="border rounded-lg p-2 w-full" />
        </div>
        <div className="col-span-full flex justify-center">
          <button type="submit" className="w-auto uppercase text-sm font-bold sm:w-auto bg-[#006eb0] text-white rounded-lg px-4 py-2 hover:bg-blue-700">
            Actualizar
          </button>
        </div>
      </form>
      {modalOpen && (
        <Modal open={modalOpen} onClose={closeModal}>
        <div className='font-bold border p-4 rounded-xl text-[#006eb0]'>
          Actualización exitosa.
        </div>
        </Modal>
      )}
      {errorModalOpen && (
          <ErrorModal
            open={errorModalOpen}
            onClose={() => setErrorModalOpen(false)}
            errorMessage={errorMessage}
          />
        )}
    </div>
    </Modal>
  );
};

export default StudentForm;