import { SubmitHandler, useForm, UseFormSetValue } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import Modal from '../share/Modal';
import React, { useEffect, useState } from 'react';
import { useRouteData } from '@/hooks/hooks';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import { UserUpdateData } from '@/interface/interface';
import PasswordInput from '../utils/format/passwordHash';

interface UpdateUserModal {
  onCloseModal: () => void;
  onUpdateSuccess: () => void;
  userId: number | null;
}

const UserUpdate: React.FC<UpdateUserModal> = ({ onCloseModal, onUpdateSuccess, userId }) => {

  const { register, handleSubmit, setValue } = useForm<UserUpdateData>();
  const [dataLoaded, setDataLoaded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const token = useRouteData("parameter");
  const validToken = typeof token === "string" ? token : '';

  const handleError = (error: AxiosError) => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ errorContent: string }>;
      const errorContent = axiosError.response?.data?.errorContent;
      setErrorModalOpen(true);
      setError(errorContent || 'Error al actualizar el usuario. Por favor, intenta nuevamente.');
    } else {
      setError('Error al actualizar el usuario. Por favor, intenta nuevamente.');
      setErrorModalOpen(true);
    }
  };

  useEffect(() => {
    // Aquí debes hacer una petición GET para obtener los datos del usuario y prellenar el formulario
    const fetchData = async () => {
      try {
        const url = `${URL()}/user/${userId}`;
        const response = await axios.get(url, tokenConfig(validToken));
        const userData = response.data; // Ajusta según la estructura de tu respuesta
        // Prensa los campos del formulario con los datos existentes
        setValue('email', userData.email);
        setValue('firstName', userData.firstName);
        setValue('lastName', userData.lastName);
        setValue('phone', userData.phone);
        setValue('role', userData.role);
        // ... Ajusta según la estructura de tu respuesta
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        if (axios.isAxiosError(error) && error.response) {
          console.error('Respuesta del servidor:', error.response.data);
        }
      }
    };
    fetchData();
  }, [setValue, userId]);

  const onSubmit: SubmitHandler<UserUpdateData> = async (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      if (!data || !data.role) {
        console.error('El objeto data no contiene la propiedad "role" o es undefined.');
        return;
      }
      const url = `${URL()}/user/${userId}`;
      await axios.put(url, data, tokenConfig(validToken));
      console.log();
      onUpdateSuccess();
      setDataLoaded(true);
      setUpdateModalOpen(true);
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      setError('Error al actualizar el usuario. Por favor, intenta nuevamente.');
      handleError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setErrorModalOpen(false);
    setIsModalOpen(false);
    setUpdateModalOpen(false);
    onCloseModal();
  };

  return (
    <Modal open={dataLoaded} onClose={onCloseModal}>
      <div className="max-w-screen-lg mx-auto border p-4 rounded-xl">
        <h1 className='text-md text-center font-bold bg-[#006eb0] text-gray-200 border p-2 rounded-lg mb-4 uppercase'>
          Actualizar usuario
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 uppercase text-gray-500 font-bold md:grid-cols-2 gap-2">
          {/* Campos del formulario */}
          <div className="mb-4 text-xs col-span-full md:col-span-2 lg:col-span-3">
            <label>Email:</label>
            <input {...register('email', { required: true })} className="border rounded-lg p-2 w-full"/>
          </div>
          <div className="mb-4 text-xs col-span-full md:col-span-2 lg:col-span-3">
            <label>Nombres:</label>
            <input {...register('firstName', { required: true })} className="border rounded-lg p-2 w-full"/>
          </div>
          <div className="mb-4 text-xs col-span-full md:col-span-2 lg:col-span-3">
            <label>Apellidos:</label>
            <input {...register('lastName', { required: true })} className="border rounded-lg p-2 w-full"/>
          </div>
          <div className='flex justify-between col-span-2 whitespace-pre-wrap'>
        <div className="mb-4 text-xs col-span-full md:col-span-2 lg:col-span-3">
          <label>Teléfono:</label>
          <input {...register('phone')} className="border rounded-lg p-2 lg:w-32 w-28"/>
        </div>
        <div className="text-xs col-span-full md:col-span-2 lg:col-span-3">
          <label className=''>Rol:</label>
          <select {...register('role')} className='border p-2 rounded-lg ml-2'>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
      </div>
          <div className="col-span-full flex justify-center">
            <button
              type="submit"
              className="w-auto uppercase text-sm font-bold sm:w-auto bg-[#006eb0] text-white rounded-lg px-4 py-2 hover:bg-blue-700">
              Actualizar
            </button>
          </div>
        </form>
        {updateModalOpen && (
        <Modal open={updateModalOpen} onClose={closeModal}>
          <div className='font-bold border text-center p-4 rounded-xl text-[#006eb0]'>
            Usuario actualizado correctamente.
          </div>
        </Modal>
        )}
        {errorModalOpen && (
          <Modal open={errorModalOpen} onClose={closeModal}>
            <div className='font-bold border text-center p-4 rounded-xl text-[#ff0000]'>
              {error}
            </div>
          </Modal>
        )}
      </div>
    </Modal>
  );
};

export default UserUpdate;
