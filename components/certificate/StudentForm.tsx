// components/StudentForm.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import { useRouteData } from '@/hooks/hooks';
import  Modal  from '@/components/share/Modal'

interface StudentFormProps {
  id: string;
  onCloseModal: () => void;
}

type StudentFormData = {
  name: string;
  code: string;
  documentNumber: string;
  // ... otros campos
};

const StudentForm: React.FC<StudentFormProps> = ({ id, onCloseModal }) => {
  const { register, handleSubmit, setValue } = useForm<StudentFormData>();
  const [isModalOpen, setModalOpen] = useState(false);

  const token = useRouteData("parameter") as string;
  const validToken: string = token || '';

  useEffect(() => {
    // Cargar datos del estudiante al montar el componente
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`${URL}/api/v1/student/${id}`, tokenConfig(validToken));
        const studentData = response.data;

        // Asignar valores al formulario
        setValue('name', studentData.name);
        setValue('code', studentData.code);
        setValue('documentNumber', studentData.documentNumber);
        // ... otros campos
      } catch (error) {
        console.error('Error al cargar datos del estudiante:', error);
      }
    };

    fetchStudentData();
  }, [id, setValue]);

  const onSubmit: SubmitHandler<StudentFormData> = async (data) => {
    try {
      await axios.put(`${URL}/api/v1/student/${id}`, data, tokenConfig(validToken));
      setModalOpen(true); // Mostrar modal de éxito
    } catch (error) {
      console.error('Error al actualizar estudiante:', error);
      // Puedes manejar el error de alguna manera (mostrar un mensaje, etc.)
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre: </label>
        <input {...register('name')} />
        <button type="submit">Actualizar Estudiante</button>
      </form>
    </div>
  );
};

export default StudentForm;
