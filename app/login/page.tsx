"use client"
import React, { useState } from 'react'
import { redirect, json } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { loginUser, getUser } from '@/components/utils/auth.server';
import axios from 'axios';

type ResErrors = {
  message: string;
  errorContent: string;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  if (typeof email !== "string" || typeof password !== "string") {
    return json({ error: "Invalid Form Data" }, { status: 400 });
  }
  const user = await loginUser({ email, password });
  return user;
};

export const loader: LoaderFunction = async ({ request }) => {
  const token = await getUser(request);
  return token ? redirect("/") : null;
};

const dataForm = {
  email: "",
  password: "",
};

const Login = () => {
  const [resErrors, setResErrors] = useState<ResErrors | null>(null);
  const [form, setForm] = useState(dataForm);

  const handleFormData = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    textField: string
  ) => {
    const { value } = target;
    setForm({ ...form, [textField]: value });
  };

  const onSubmit = () => {
    axios
      .post(`https://localhost:8000/api/v1/auth/login`, form)
      .catch((error) => {
        setResErrors(error.response.data);
      });
  };

  const buttonStyle = {
      background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
    };
  return (
  <section className="flex justify-center gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
    <div className="container h-full p-10">
      <div
        className="g-6 flex h-full flex-wrap items-center justify-center text-white">
        <div className="w-full">
          <div
            className="block rounded-3xl bg-white shadow-lg dark:bg-neutral-800">
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
                    <p className="flex justify-center mb-4 font-semibold text-xl">Iniciar sesión</p>
                      {resErrors?.message && (
                        <span className="text-error text-sm">{resErrors.message}</span>
                      )}
                    <div className="flex justify-center relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] lg:w-96 w-full rounded-lg border-2 border-gray-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="email"
                        onChange={(event) => handleFormData(event, "email")}/>
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="pointer-events-none absolute lg:left-28 left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                        >Email
                      </label>
                    </div>

                    <div className="flex justify-center relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="password"
                        className="peer block min-h-[auto] lg:w-96 w-full rounded-lg border-2 border-gray-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput11"
                        placeholder="Password"
                        autoComplete="on"
                        onChange={(event) => handleFormData(event, "password")}/>
                      <label
                        htmlFor="exampleFormControlInput11"
                        className="pointer-events-none absolute lg:left-28 left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                        >Password
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
                        Login
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

export default Login