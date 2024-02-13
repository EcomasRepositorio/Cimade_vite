"use client"
import React, { useState } from 'react';
import axios from 'axios';

type ResErrors = {
  message: string;
  errorContent: string;
};

type Auth = {
  email: string;
  password: string;
  role: boolean;
  token: string;
};

const dataForm = {
  email: '',
  password: '',
  role: true,
  token:'',
};

const Login: React.FC = () => {
  const [resErrors, setResErrors] = useState<ResErrors | null>(null);
  const [form, setForm] = useState<Auth>(dataForm);

  const handleFormData = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    textField: string
  ) => {
    const { value } = target;
    setForm({ ...form, [textField]: value });
  };

  const saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post('http://159.223.198.174:8000/api/v1/user/login', form);
      if (response.data.token) {
        const token = response.data.token;
        saveToken(token);
        window.location.href = 'student';
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { data } = error.response;

        if (data.error === 'invalid_password') {
          setResErrors({ message: 'Contraseña incorrecta', errorContent: data.errorContent });
        } else if (data.error === 'user_not_found') {
          setResErrors({ message: 'Email no encontrado', errorContent: data.errorContent });
        } else {
          setResErrors({ message: 'Datos incorrectos', errorContent: '' });
        }
      } else {
        setResErrors({ message: 'Error en el servidor', errorContent: '' });
      }
    }
  };
  const buttonStyle = {
      background: "linear-gradient(to right, #002e79, #006eb0)",
    };
  return (
  <section className="flex justify-center gradient-form h-full bg-neutral-100">
    <div className="container h-full p-10 mb-2 lg:mb-24 lg:mt-16 mt-0">
      <div
        className="g-6 flex h-full flex-wrap items-center justify-center text-gray-600">
        <div className="w-full">
          <div
            className="block rounded-3xl bg-neutral-200 shadow-lg">
            <div className="g-0 lg:flex lg:flex-wrap">

              <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">

                  <div className="text-center">
                    <img
                      className="mx-auto w-48"
                      src="/image/logo_cimade.png"
                      alt="logo" />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    </h4>
                  </div>
                  <form>
                    <p className="flex justify-center text-gray-600 mb-8 font-semibold text-xl">Iniciar sesión</p>
                      {resErrors?.message && (
                        <span className="text-error text-sm">{resErrors.message}</span>
                      )}

                    <div className="flex justify-center relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] lg:w-96 w-full rounded-lg border-2 border-gray-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none "
                        id="exampleFormControlInput1"
                        placeholder="Email"
                        onChange={(event) => handleFormData(event, "email")}/>
                      <label
                        htmlFor="exampleFormControlInput1"
                        className=""
                        >
                      </label>
                    </div>

                    <div className="flex justify-center relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="password"
                        className="peer block min-h-[auto] lg:w-96 w-full rounded-lg border-2 border-gray-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none"
                        id="exampleFormControlInput11"
                        placeholder="Password"
                        autoComplete="on"
                        onChange={(event) => handleFormData(event, "password")}/>
                      <label
                        htmlFor="exampleFormControlInput11"
                        className=""
                        >
                      </label>
                    </div>
                    <div className="mb-12 pb-1 pt-1 text-center">
                      <button
                        className="mb-3 inline-block w-36 rounded-lg px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style={buttonStyle}
                        value="login"
                        onClick={() => onSubmit()}>
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div
                className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-3xl lg:rounded-bl-none"
                style={buttonStyle}>
                <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold">
                    We are more than just a company
                  </h4>
                  <p className="text-lg font-semibold">

                    Cimade Con una sólida trayectoria de 4 años, nuestra institución se destaca por su compromiso en la formación y desarrollo de profesionales.
                    Ofrecemos cursos y diplomados de alta calidad que impulsan el crecimiento y la capacitación en áreas clave. Nuestra dedicación a la excelencia
                    educativa y la adaptabilidad a las demandas del mercado nos permiten marcar una diferencia significativa en la formación de profesionales.

                  Cimade con una sólida trayectoria de 4 años, nuestra institución se destaca por su compromiso en la formación y desarrollo de profesionales.
                  Ofrecemos cursos y diplomados de alta calidad que impulsan el crecimiento y la capacitación en áreas clave. Nuestra dedicación a la excelencia
                  educativa y la adaptabilidad a las demandas del mercado nos permiten marcar una diferencia significativa en la formación de profesionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login;