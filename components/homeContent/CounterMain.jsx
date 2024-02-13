import React from 'react'
import Counter from './Counter'

const CounterMain = () => {
  return (
    <div className="pb-20" style={{
      background: "white" }}>
        <div className="mx-auto bg-gradient-to-l from-opacity-0 to-opacity-0 h-96 w-3/4 rounded-xl bg-cover bg-center" >
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
             <div className="mt-20">
              <h1 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-primaryblue text-center">
              Cimade: Tu Socio en el Éxito Profesional.
             </h1>
             </div>
            <div className="mt-6 mx-2 md:mx-0 text-center">
                <p className="lg:text-xl md:text-lg leading-6 text-sm text-neutral-500 subtitulo">
                ¡Únete a nosotros y marca la diferencia en tu trayectoria profesional!  <br />
               </p>
            </div>
          </div>
        </div>
     </div>
        {/* TARJETAS DE CONTEO */}
        <Counter/>
      </div>
  )
}

export default CounterMain