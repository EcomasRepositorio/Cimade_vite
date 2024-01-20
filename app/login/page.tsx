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
  token: string;
};

const dataForm = {
  email: '',
  password: '',
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

  const onSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/login', form);
        console.log(response.data);
      if (response.data.token) {
        window.location.href = 'certificate';
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
      background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
    };

  return (
  <section className="flex justify-center gradient-form h-full bg-neutral-600">
    <div className="container h-full p-10">
      <div
        className="g-6 flex h-full flex-wrap items-center justify-center text-white">
        <div className="w-full">
          <div
            className="block rounded-3xl bg-neutral-800 shadow-lg">
            <div className="g-0 lg:flex lg:flex-wrap">

              <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">

                  <div className="text-center">
                    <img
                      className="mx-auto w-48"
                      src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      alt="logo" />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      CIMADE
                    </h4>
                  </div>

                  <form>
                    <p className="flex justify-center mb-8 font-semibold text-xl">Iniciar sesión</p>
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

                    <div className="flex items-center justify-center pb-6">
                      <button
                        type="button"
                        className="inline-block rounded-lg border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Register
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
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
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