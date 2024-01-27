import React from 'react';
import Icon from '../../public/icons/icono_facebook.svg'; 


const ContactForm = () => {
  return (
    <>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="container text-gray-800 px-4 md:px-12">
            <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6 -mt-[100px] backdrop-blur-[30px] bg-white">
              <h2 className="text-5xl text-center font-black leading-10 pb-5 text-gray-700 ">
                Contáctanos
              </h2>
              <div className="flex flex-wrap p-10">
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                  <form>
                    <div className="form-group mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="Ingrese su nombre completo"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <input
                        type="email"
                        className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Ingrese su correo electrónico"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <textarea
                        className="max-h-[90px] min-h-[70px] form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                        id="exampleFormControlTextarea13"
                        rows={3}
                        placeholder="Ingrese su mensaje"
                        defaultValue={""}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-indigo-600 text-white font-bold text-md leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Enviar
                    </button>
                  </form>
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                  <div className="flex flex-wrap">
                    {/* Soporte técnico */}
                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="p-4 bg-indigo-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <img src={Icon} alt='' className='' />
                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1">titulo</p>
                          <p className="text-gray-500">email</p>
                          <p className="text-gray-500">number</p>
                        </div>
                      </div>
                    </div>
             
                    {/* ... (repite la estructura para los demás bloques) */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactForm;
