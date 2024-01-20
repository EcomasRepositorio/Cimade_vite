import React from 'react'

const HomeContend = () => {
  return (
    <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
    {/* Sección de letras */}
    <div className="text-gray-600 body-font md:w-1/2">
  <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:pr-4 md:text-left mb-16 md:mb-0 items-center text-center w-full lg:w-3/4 xl:w-2/3 mx-auto lg:mx-0">
      <h1 className="title-font sm:text-2xl md:text-3xl lg:text-4xl mb-4 font-medium text-gray-900 lg:ml-0 sm:ml-0 md:ml-2 lg:ml-32 font-montserrat" style={{ backgroundClip: 'text', backgroundImage: 'linear-gradient(to right, #002e79, #006eb0)', color: 'transparent' }} >
        ¿POR QUÉ ESTUDIAR CON NOSOTROS? 
        <hr className="mt-2 w-64 border-t-4 border-pink-500 mx-auto lg:ml-0" />
      </h1>
      <p className="mb-8 leading-relaxed md:text-3x1 lg:ml-0 sm:ml-0 md:ml-2 lg:ml-32"  >
        Aquí formamos líderes excepcionales con un propósito social. Nuestro compromiso es desarrollar profesionales íntegros y competentes capaces de generar cambios significativos a nivel local e internacional. Nos enfocamos en la excelencia académica, la innovación y la conciencia social. Prepárate para una educación integral y globalizada. ¡Únete a nosotros y marca la diferencia en el mundo!
      </p>
    </div>
  </div>
</div>

  
    {/* Sección de imágenes */}
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full md:w-1/2 mx-auto my-auto">
      <img className="object-cover object-center rounded" alt="hero" src="/image/TAMAÑO-DE-PRUEBA.png" />
    </div>
  </div>
  
  )
}

export default HomeContend;