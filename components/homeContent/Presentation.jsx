import React from 'react'

const Presentation = () => {
  return (
    <div className='bg-white' style={{backgroundImage: 'url("")'}}>  <br/> <br/>
  <div className="my-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 container mx-auto">
    <div className="border-0 flex flex-col justify-center items-center">
      <div>
      <img className='p-8' src="/icons/logo_presentation.svg" alt="logoPresentation"  style={{width: '550px'}}/>
      </div>
      <div className="mt-4 text-neutral-500 text-center">
        <div className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl animate__animated animate__backInLeft">
         <p className='text-primaryblue lg:text-2xl'>Sssssomos una empresa que brinda un servicio de </p>
         <p className='text-primaryrosa lg:text-2xl'>especializacion para empresas, personas y especialistas.</p>
        </div>
      </div>
    </div>
    <div className="flex-1 flex items-center my-15 relative animate-fade-in-delayed">
      <img
        src="/image/presentation2.png"
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