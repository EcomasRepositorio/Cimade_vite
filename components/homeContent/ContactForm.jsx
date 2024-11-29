import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Styles.css";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Configura EmailJS
    emailjs
      .sendForm(
        "service_75xca9c", // Reemplaza con tu Service ID
        "template_v7emz47", // Reemplaza con tu Template ID
        event.target,
        "GBbrzuJEvLa14UXNL" // Reemplaza con tu Public Key
      )
      .then(
        (result) => {
          console.log("Mensaje enviado con éxito:", result.text);
          setIsSubmitted(true); // Cambia el estado al enviar correctamente
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error.text);
        }
      );
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{
        background: "white",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "30vh",
      }}
    >
      <div className="container my-10 px- mx-auto">
        <section className="text-gray-800">
          <div className="container text-gray-800 px-4 md:px-20">
            <div
              className="rounded-3xl shadow-lg py-2 md:py-8 px-2 md:px-20 mt-4 backdrop-filter"
              style={{
                background: "linear-gradient(0deg, #006eb0, #002e79)",
                maxWidth: "100%",
              }}
            >
              <h2
                className="lg:text-5xl text-3xl text-center font-black leading-10 pb-5 mt-4"
                style={{ color: "white" }}
              >
                Contáctanos
              </h2>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-6">
                    <p className="font-semibold mb-2 text-slate-300">
                      Nombres y Apellidos:
                    </p>
                    <input
                      name="name"
                      type="text"
                      className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primaryrosa focus:outline-none"
                      placeholder="Ingrese su nombre"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <p className="font-semibold mb-2 text-slate-300">
                      Correo Electrónico:
                    </p>
                    <input
                      name="email"
                      type="email"
                      className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primaryrosa  focus:outline-none"
                      placeholder="Ingrese su correo"
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group mb-6">
                    <p className="font-semibold mb-2 text-slate-300">
                      Celular:
                    </p>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primaryrosa  focus:outline-none"
                      placeholder="Ingrese celular"
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group mb-6">
                    <textarea
                      name="message"
                      className="max-h-[90px] min-h-[100px] form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primaryrosa  focus:outline-none"
                      rows={3}
                      placeholder="Ingrese su mensaje"
                      required
                      autoComplete="off"
                    ></textarea>
                  </div>

                  <button type="submit" className="bottonContact mb-4">
                    Enviar
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-500 mb-4">
                    ¡Datos enviados con éxito!
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
