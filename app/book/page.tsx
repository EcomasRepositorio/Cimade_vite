"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import { BiWorld } from "react-icons/bi";
import { HiIdentification } from "react-icons/hi2";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import {
  BsFillHouseUpFill,
  BsBank2,
  BsFillEnvelopeAtFill,
  BsBuildingsFill,
  BsFillPersonBadgeFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import Image from "next/image";

const Book = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [sending, setSending] = useState(false);

  const [reclamoChecked, setReclamoChecked] = useState(false);
  const [sugerenciaChecked, setSugerenciaChecked] = useState(false);

  const handleReclamoChange = () => {
    setReclamoChecked(!reclamoChecked);
    setSugerenciaChecked(false);
  };

  const handleSugerenciaChange = () => {
    setSugerenciaChecked(!sugerenciaChecked);
    setReclamoChecked(false);
  };

  const refForm = useRef<HTMLFormElement>(null);
  const onSubmit: SubmitHandler<any> = async (data, event) => {
    event?.preventDefault();
    console.log(data);
    setSending(true);
    const serviceID = "service_vk0vmdj";
    const templateID = "template_bnlqta6";
    const apiKey = "GBbrzuJEvLa14UXNL";
    if (refForm.current) {
      try {
        await emailjs.sendForm(serviceID, templateID, refForm.current, apiKey);
        alert("¡Mensaje Enviado!");
      } catch (err) {
        alert(JSON.stringify(err));
      } finally {
        setSending(false);
      }
    }
  };

  const validateCheckbox = () => {
    if (!reclamoChecked && !sugerenciaChecked) {
      return "Selecciona al menos una opción";
    }
    return true;
  };

  return (
    <section
      id="contacto"
      className="bg-[#002F7A] p-8 straight-xl min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto mt-40">
        <Image
          src="/image/loghorizontblank.png"
          alt="logo_inalta"
          width={600}
          height={600}
          className="flex justify-center mx-auto mb-1 pt-12 p-2"
          priority={true}
        />

        <div className="p-2 mt-20">
          <h1 className="uppercase text-customPurple300 text-center md:text-3xl text-2xl font-extrabold text-white">
            Hoja de Reclamación
          </h1>
          <p className="text-center mb-2 text-customOrange font-semibold text-white">
            CIMADE Educacion Continua
          </p>
          <h2 className="bg-blue-500 p-3 text-lg font-semibold text-gray-50 rounded-xl mt-5">
            Identificación del consumidor
          </h2>
        </div>

        {/* Formulario con transparencia */}
        <form
          ref={refForm}
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-white/50 backdrop-blur-lg rounded-xl shadow-md"
        >
          <div className="text-black md:mt-4">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              Apellido paterno:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <FaUserPlus />
              </div>
              <input
                type="text"
                {...register("lastName", { required: true })}
                id="apellidoPaterno"
                name="lastName"
                className="bg-transparent border-2 mt-6 border-gray-300 text-black text-sm rounded-lg block w-full ps-8 p-2.5"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-black md:mt-4">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              Apellido materno:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <FaUserPlus />
              </div>
              <input
                type="text"
                {...register("firstName", { required: true })}
                id="apellidoMaterno"
                name="firstName"
                className="bg-gray-100 border-2 mt-6 border-gray-300 text-black text-sm rounded-lg block w-full ps-8 p-2.5"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-black">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              Nombres:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <BsFillPersonBadgeFill />
              </div>
              <input
                type="text"
                {...register("name", { required: true })}
                id="nombres"
                name="name"
                className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-black">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              Teléfono:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <BsFillTelephoneFill />
              </div>
              <input
                type="text"
                {...register("phone", { required: true })}
                id="telefono"
                name="phone"
                className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-black">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              Tipo de documento:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <PiIdentificationBadgeFill />
              </div>
              <select
                {...register("typeDocument", { required: true })}
                name="typeDocument"
                className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
              >
                <option value="dni">DNI</option>
                <option value="ce">Carnet de extranjeria</option>
                <option value="pass">Pasaporte</option>
              </select>
            </div>
          </div>

          <div className="text-black">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              N° de documento:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <HiIdentification />
              </div>
              <input
                type="text"
                {...register("numberDocument", { required: true })}
                id="numeroDocumentoInput"
                name="numberDocument"
                className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-black">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              Departamento:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <SiHomeassistantcommunitystore />
              </div>
              <input
                type="text"
                {...register("department", { required: true })}
                id="departamento"
                name="department"
                className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-black">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              Provincia:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <BsBank2 />
              </div>
              <input
                type="text"
                {...register("province", { required: true })}
                id="provincia"
                name="province"
                className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-black">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              Distrito:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <BsBuildingsFill />
              </div>
              <input
                type="text"
                {...register("district", { required: true })}
                id="distrito"
                name="district"
                className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-black">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              Dirección:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <BsFillHouseUpFill />
              </div>
              <input
                type="text"
                {...register("address", { required: true })}
                id="direccion"
                name="address"
                className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-black">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              Email:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <BsFillEnvelopeAtFill />
              </div>
              <input
                type="text"
                {...register("email", { required: true })}
                id="email"
                name="email"
                className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-black mb-6">
            <label className="font-bold absolute text-lg duration-500 scale-75 origin-[0]">
              País:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <BiWorld />
              </div>
              <select
                {...register("country", { required: true })}
                name="country"
                className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
              >
                <option value="Peru">Perú</option>
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Colombia">Colombia</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Chile">Chile</option>
                <option value="España">España</option>
                <option value="Mexico">Mexico</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="bg-blue-500 p-3 text-lg font-semibold text-gray-50 rounded-xl">
              Detalle de la reclamación y pedido del consumidor
            </h2>

            <div className="grid grid-cols-2 gap-4 mt-8 mb-6 p-3">
              <div className="flex items-center me-4">
                <input
                  id="purple-checkbox-reclamo"
                  type="checkbox"
                  {...register("reclamo", { validate: validateCheckbox })}
                  name="reclamo"
                  checked={reclamoChecked}
                  onChange={handleReclamoChange}
                  className="w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="purple-checkbox-reclamo"
                  className="ms-2 font-bold text-black"
                >
                  Reclamo
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="purple-checkbox-sugerencia"
                  type="checkbox"
                  {...register("sugerencia", { validate: validateCheckbox })}
                  name="sugerencia"
                  checked={sugerenciaChecked}
                  onChange={handleSugerenciaChange}
                  className="w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="purple-checkbox-sugerencia"
                  className="ms-2 font-bold text-black"
                >
                  Sugerencia
                </label>
              </div>
            </div>

            <label className="font-bold absolute text-black text-lg duration-500 scale-75 origin-[0]">
              Mensaje:
            </label>
            <div className="relative">
              <textarea
                id="mensaje"
                rows={10}
                {...register("message", { required: true })}
                name="message"
                className="block mt-12 p-2.5 w-full text-gray-900 bg-[#4b79c4] rounded-lg border-2 border-gray-300"
                placeholder={
                  reclamoChecked
                    ? "Mensaje de reclamo"
                    : sugerenciaChecked
                    ? "Mensaje de sugerencia"
                    : "Mensaje"
                }
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value={sending ? "Enviando..." : "Enviar"}
            className="border-2 p-2 mb-6 rounded-xl bg-customOrange text-gray-200 text-xl font-bold cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
};

export default Book;