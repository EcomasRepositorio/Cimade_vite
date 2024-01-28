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
    <div className='' style={{ backgroundImage: 'url("/image/morado2.jpg")', backgroundPosition: 'center top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className=''>
        <div className="container my-24 px-6 mx-auto  ">
          <section className="text-gray-800">
            <div className="container text-gray-800 px-4 md:px-12 ">
              <div className="block rounded-lg shadow-lg py-6 md:py-8 px-2 md:px-60 mt-4 bg-transparent backdrop-filter backdrop-blur-2xl border-fuchsia-700">
           
              <h2 className="text-5xl text-center font-black leading-10 pb-5"style={{ color: '#002e79' }}>

                Contáctanos
              </h2>
                {!isSubmitted ? (
                  <form action="https://formsubmit.co/5443fc3929171a45094405b63b894a5b" method="POST" onSubmit={handleSubmit}>
                    <div className="form-group mb-6">
                      <p className='font-semibold mb-2'>Nombres y Apellidos:</p>
                      <input
                        name="name"
                        type="text"
                        className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="Ingrese su nombre"
                        required 
                      />
                    </div>
                    <div className="form-group mb-6">
                      <p className='font-semibold mb-2'>Correo Electrónico:</p>
                      <input
                        name="email"
                        type="email"
                        className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Ingrese su correo"
                        required // para campos obligatorios
                      />
                    </div>
 
                    <div className="form-group mb-6">
                      <p className='font-semibold mb-2'>Celular:</p>
                      <input
                        type="number" // Cambiado a type="tel" para números de teléfono
                        name="number"
                        className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                        id="exampleInput9" // Cambiado el id para que sea único
                        placeholder="Ingrese celular"
                        required 
                      />
                    </div>

                    <div className="form-group mb-6">
                      <input
                        type="comments"
                        name="commets"
                        className="max-h-[90px] min-h-[70px] form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                        id="exampleFormControlTextarea13"
                        rows={3}
                        placeholder="Ingrese su mensaje"
                        required // Campo obligatorio
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
    </div>
  );
}

export default ContactForm;
