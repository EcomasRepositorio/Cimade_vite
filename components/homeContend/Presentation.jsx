import React from 'react'

const Presentation = () => {
  return (
    <div className='bg-white'>  <br/> <br/><br/> 
  <div className="my-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 container mx-auto">
    <div className="border-0 flex flex-col justify-center items-center">
      <div>
      <h1 class='font-bold font-montserrat text-2xl sm:text-4xl lg:text-6xl text-[#002e79] leading-75 text-center sm:text-left'>
        ¿Por qué?<br class='sm:block hidden' />
      </h1>

        <p className='font-semibold bg-gradient-to-r lg:text-9xl text-6xl from-[#002e79] to-[#ff00d4] text-transparent bg-clip-text'>CIMADE</p>
      </div>
      <div className="mt-4 text-neutral-500 text-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl animate__animated animate__backInLeft">
        En Cimade, nos comprometemos a ofrecer servicios de la más alta calidad. Nuestra filosofía se basa en la excelencia en cada aspecto de nuestras operaciones, desde la selección de talento hasta la entrega de soluciones efectivas.
        </p>
      </div>
    </div>
    <div className="flex-1 flex items-center my-15 relative animate-fade-in-delayed">
      <img
        src="/image/image10.png"
        alt="billing"
        className="w-full h-full relative z-5 animate-fade-in-delayed "
      />
      <div className='absolute z-0 w-40 h-35 top-0 pink__gradient'/>
      <div className='absolute z-1 w-80 h-85 bottom-40 rounded-full white__gradient'/>
      <div className='absolute z-0 w-50 h-50 right-20 blue__gradient' />
    </div>
  </div>
</div>

  )
}

export default Presentation