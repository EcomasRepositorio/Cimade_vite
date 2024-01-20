import React from 'react'




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
            <span className='bg-gradient-to-r from-[#002e79] to-[#ff00d4] text-transparent bg-clip-text'>Cimade</span>
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
     
    {/* Section with Cards */}
    <div className="p-5" style={{ backgroundImage: "linear-gradient(to right, #002e79, #ff00d4)" }}>
      {/* Cards Section */}
      <p>locwñoushvcoihuwoidvhucwouedvhpud</p>
      <p>wsdikchnñoswdhincouwshdoushdcñohu</p>
      <p>dicjñojisdcohidscihusdihchusdcuhd</p>
    </div>

    {/* Section with Text and Image */}
    <div className="p-5" style={{ backgroundImage: "linear-gradient(to right, #002e79, #ff00d4)" }}>
      {/* Section with text and image */}
    </div>

    {/* Another Section with Text and Image */}
    <div className="p-5" style={{ backgroundImage: "linear-gradient(to right, #002e79, #ff00d4)" }}>
      {/* Another section with text and image */}
    </div>
  </>
  
  
   

  )
}

export default HomeContend;