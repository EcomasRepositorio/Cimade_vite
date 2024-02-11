import React, { useState } from 'react';
import './Styles.css'; 



const ContactForm = () => {
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

 
    event.target.submit();

    
    setIsSubmitted(true);
  };
  

  return (
    <div className=' flex items-center justify-center ' style={{ background: 'white', backgroundPosition: 'center top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '30vh' }}>
   
        <div className="container my-24 px-6 mx-auto ">
          <section className=" text-gray-800">
            <div className=" container text-gray-800 px-4 md:px-20 ">
            <div className=" rounded-3xl shadow-lg py-2 md:py-8 px-2 md:px-20 mt-4  backdrop-filter  " style={{ background: 'linear-gradient(0deg, #006eb0, #002e79)',maxWidth: '100%' }}>
           
              <h2 className="text-5xl text-center font-black leading-10 pb-5"style={{ color: 'white' }}>

                Contáctanos
              </h2>
                {!isSubmitted ? (
                  <form action="https://formsubmit.co/5443fc3929171a45094405b63b894a5b" method="POST" onSubmit={handleSubmit}>
                    <div className="form-group mb-6">
                      <p className='font-semibold mb-2 text-slate-300'>Nombres y Apellidos:</p>
                      <input
                        name="name"
                        type="text"
                        className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primaryrosa focus:outline-none"
                        id="exampleInput7"
                        placeholder="Ingrese su nombre"
                        required 
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <p className='font-semibold mb-2 text-slate-300'>Correo Electrónico:</p>
                      <input
                        name="email"
                        type="email"
                        className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primaryrosa  focus:outline-none"
                        id="exampleInput8"
                        placeholder="Ingrese su correo"
                        required // para campos obligatorios
                        autoComplete="off"
                      />
                    </div>
 
                    <div className="form-group mb-6">
                      <p className='font-semibold mb-2 text-slate-300'>Celular:</p>
                      <input
                        type="" // Cambiado a type="tel" para números de teléfono
                        name="number"
                        className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primaryrosa  focus:outline-none"
                        id="exampleInput9" // Cambiado el id para que sea único
                        placeholder="Ingrese celular"
                        required 
                        autoComplete="off"
                      />
                    </div>

                    <div className="form-group mb-6">
                      <input
                        type="comments"
                        name="commets"
                        className="max-h-[90px] min-h-[100px] form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primaryrosa  focus:outline-none"
                        id="exampleFormControlTextarea13"
                        rows={3}
                        placeholder="Ingrese su mensaje"
                        required // Campo obligatorio
                        autoComplete="off"
                      />
                    </div>
                    {/* ... (resto del formulario) ... */}
                    <button
                      type="submit"
                      class="bottonContact"
                    >
                      Enviar
                    </button>
                    <input type="hidden" name="_next" value="http://localhost:3000/" />
                    <input type="hidden" name="_captcha" value="false" />
                  </form>
                ) : (
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-500 mb-4">¡Datos enviados con éxito!</p>
                    {/* Puedes agregar aquí la animación o mensaje que desees */}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
     
    </div>
  );
}

export default ContactForm;
