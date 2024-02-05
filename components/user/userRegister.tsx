import { SubmitHandler, useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import Modal from '../share/Modal';
import React, { useEffect, useState } from 'react';
import { useRouteData } from '@/hooks/hooks';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import { UserData } from '@/interface/interface';
import PasswordInput from '../utils/format/passwordHash';

interface CreateUserModal {
    onCloseModal: () => void;
    onCreateSuccess: (createdUserId: number) => void;
  }

const UserRegister: React.FC<CreateUserModal> = ({ onCloseModal, onCreateSuccess}) => {
  const { register, handleSubmit } = useForm<UserData>();
  const [dataLoaded, setDataLoaded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [isUserRegisteredModalOpen, setIsUserRegisteredModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const token = useRouteData("parameter");
  const validToken = typeof token === "string" ? token : '';

  const handleError = (error: AxiosError) => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ errorContent: string }>;
      const errorContent = axiosError.response?.data?.errorContent;
      setErrorModalOpen(true);
      setError(errorContent || 'Email duplicado. Por favor, intenta con otro nuevamente.');
    } else {
      setError('Email duplicado. Por favor, intenta nuevamente.');
      setErrorModalOpen(true);
    }
  };

  useEffect(() => {
    register('email', {
      required: true,
      pattern: {
        value: /^[a-zA-Z0-9._-]+@gmail\.com$/,
        message: 'Ingresa un correo electrónico válido.',
      },
    });
    register('password', {
      required: true,
    });
  }, [register]);

  const onSubmit: SubmitHandler<UserData> = async (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      if (data && data.role) {
      const url = `${URL()}/user/register`;
      const response = await axios.post(url, data, tokenConfig(validToken));
      console.log(response)
      const createdUserId = response.data.id;
      onCreateSuccess(createdUserId);
      setDataLoaded(true);
      setIsUserRegisteredModalOpen(true);
      } else {
        console.error('El objeto data no contiene la propiedad "role" o es undefined.')
      }
    } catch (error) {
        console.error('Error al agregar un nuevo usuario:', error);
        setError('Hubo un error al registrar el usuario. Por favor, intenta nuevamente.');
        handleError(error as AxiosError);
      } finally {
        setIsLoading(false);
    }
  };

  const closeModal = () => {
    setErrorModalOpen(false);
    setIsModalOpen(false);
    setIsUserRegisteredModalOpen(false);
    onCloseModal();
  };

  return (
      <Modal open={dataLoaded} onClose={onCloseModal}>
        <div className="max-w-screen-lg mx-auto border p-4 rounded-xl">
         <h1 className='text-md text-center font-bold bg-[#006eb0] text-gray-200 border p-2 rounded-lg mb-4 uppercase'>
        Registrar usuario.
      </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 uppercase text-gray-500 font-bold md:grid-cols-2 gap-2">
        <div className="mb-4 text-xs col-span-full md:col-span-2 lg:col-span-3">
          <label>Email:</label>
          <input {...register('email', { required: true })} className="border rounded-lg p-2 w-full"/>
        </div>
        <div className="mb-4 text-xs col-span-full md:col-span-2 lg:col-span-3">
        <PasswordInput name="password" label="Contraseña" register={register} />
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
            Registrar
          </button>
        </div>
        </form>
       {isUserRegisteredModalOpen && (
        <Modal open={isUserRegisteredModalOpen} onClose={closeModal}>
          <div className='font-bold border text-center p-4 rounded-xl text-[#006eb0]'>
            Usuario registrado correctamente.
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

export default UserRegister;
