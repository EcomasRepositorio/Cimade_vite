import React from 'react';
import Counter from "./Counter";
import Footer from "./Footer";






const HomeContend = () => {
  return (
    
    <>
    
    <div className="animate__animated animate__backInLeft">
    </div>
  
    {/* Container with Title and Text */}
    <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 container mx-auto">
      <div className="border-0">
        <div>
          <h1 className='flex-1 font-semibold font-montserrat text-4xl sm:text-6xl lg:text-9xl text-[#002e79] sm:leading-76 md:leading-100 leading-75 text-center sm:text-left'>
            ¿Porqué? <br className='sm:block hidden' />
            <span className='bg-gradient-to-r from-[#002e79] to-[#ff00d4] text-transparent bg-clip-text'>CIMADE</span>
          </h1>
        </div>
        <div className="mt-4 text-gray-600 text-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl animate__animated animate__backInLeft">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center my-10 relative animate-fade-in-delayed">
        <img
          src="/image/robot.png"
          alt="billing"
          className="w-full h-full relative z-5 animate-fade-in-delayed animate-bounce"
        />
        <div className='absolute z-0 w-40 h-35 top-0 pink__gradient'/>
        <div className='absolute z-1 w-80 h-85 bottom-40 rounded-full white__gradient'/>
        <div className='absolute z-0 w-50 h-50 right-20 blue__gradient' />
      </div>
    </div>
  
    {/* DIPLOMADOS - INFORMACION */}
    <div className="p-5" style={{ backgroundImage: "linear-gradient(to right, #002e79, #006eb0)" }}>
      <div className='text-center font-semibold font-poppins'>
        <p style={{ color: 'white', padding: '40px', fontSize: '50px' }}>Nuestros Diplomados </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la primera tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de red.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
  
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la segunda tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de red.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
  
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la tercera tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de red.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
      </div>
    </div>
  
    {/* Segunda sección con Cards */}
    <div className="p-5" style={{ backgroundImage: "linear-gradient(to right, #002e79, #006eb0)" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center mb-16">
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la cuarta tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de red.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
  
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la quinta tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de red.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
  
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la sexta tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de reddddd.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
      </div>
    </div>
  
    {/* Contador de egresados y Diplomados */}
    
    <>
      <div className="pb-20" style={{ backgroundImage: 'url("/image/free3.jpg")' }}>
        <div className="mx-auto bg-gradient-to-l from-opacity-0 to-opacity-0 h-96 w-3/4 rounded-xl bg-cover bg-center" >
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
             <div className="mt-20">
              <h1 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white text-center">
              Cimade: Tu Socio en el Éxito Profesional.
             </h1>
             </div>
            <div className="mt-6 mx-2 md:mx-0 text-center">
                <p className="lg:text-xl md:text-lg leading-6 text-sm text-white subtitulo">
                ¡Únete a nosotros y marca la diferencia en tu trayectoria profesional!  <br />
                  
               </p>
            </div>
          </div>
        </div>
     </div>
 

        {/* TARJETAS DE CONTEO */}
       
        <Counter/>
        
      </div>
    </>

       
     {/* CURSOS-INFORMACION */}
    <div className="p-5" style={{ backgroundImage: "linear-gradient(to right, #002e79, #006eb0)" }}>
      <div className='text-center font-semibold font-poppins'>
        <p style={{ color: 'white', padding: '40px', fontSize: '50px' }}>Nuestros Cursos </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la primera tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de red.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
  
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la segunda tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de red.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
  
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la tercera tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de red.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
      </div>
    </div>
      

      {/* 3 ULTIMO RECUADROS */}
     
      <div className="p-5 mb-32" style={{ backgroundImage: "linear-gradient(to right, #002e79, #006eb0)" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center mb-16">
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la cuarta tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de red.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
  
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la quinta tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de red.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
  
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          {/* ... Contenido de la sexta tarjeta ... */}
          <img src="/image/test.png" alt="Instalación de Mikrotik" className="w-full h-48 object-cover" />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Instalación de Mikrotik</h2>
          <p className="text-gray-600">Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de reddddd.</p>
          <a
            href="https://api.whatsapp.com/send?phone=51900102090"
            target="_blank"
            className="inline-flex items-center p-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
           
          </a>
           </div>
        </div>
      </div>
      
    </div>
     <Footer/>

  </>
  
  
   

  )
}

export default HomeContend;