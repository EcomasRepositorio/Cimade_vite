/* import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importa los íconos necesarios

interface PasswordInputProps {
  label: string;
  name: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, name }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <label>{label}:</label>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handleChange}
        name={name}
        className="border rounded-lg p-2 w-full"
      />
      <button
        type="button"
        className="absolute text-lg top-2 right-1 px-3 py-4"
        onClick={toggleShowPassword}
      >
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
 */

import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { UseFormRegister } from 'react-hook-form';

interface PasswordInputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>; // Ajusta el tipo según tu formulario principal
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, name, register }) => {
  return (
    <div className="relative">
      <label>{label}:</label>
      <input
        type="password"
        {...register(name)} // Usa el register de RHF para manejar el campo
        className="border rounded-lg p-2 w-full"
      />
    </div>
  );
};

export default PasswordInput;