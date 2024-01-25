import React from 'react'


export const Footer = () => {
  return (
    
    <footer className="px-4 py-20 text-white" style={{ backgroundColor: '#1D2c59' }}>
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-4">
        <a href="/" title="Go to Kutty Home Page" className="col-span-2 mb-12 md:col-span-1 text-white">
        <img className="w-auto h-12 mb-8" src="/icons/logo.svg" alt="Tu logo" />
        <p className="text-center mb-3 text-balance font-bold tracking-wider text-gray-500 uppercase">Acerca de nosotros </p>
        <p className='text-center'>Sabemos que deseas estudiar y nosotros queremos que estudies la mejor alternativa de formación profesional. Por ello, te ofrecemos los mejores programas avalados por la mejor universidad del país.</p>
        </a>
        <nav className="mb-8 ml-10">
          <p className="mb-3 text-xl font-bold tracking-wider text-gray-500 uppercase">Enlaces</p>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Features</a>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Integrations</a>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Documentation</a>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">FAQs</a>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Pricing</a>
        </nav>
        <nav className="mb-8 ml-10">
          <p className="mb-3 text-x1 font-bold tracking-wider text-gray-500 uppercase">Contactanos</p>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Press-Kit</a>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Company</a>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Privacy</a>
          <a href="#" className="flex mb-3 text-lg font-medium transition md:mb-2 hover:text-primary">Blog</a>
        </nav>
        <nav className="mb-8 ml-10">
          <p className="mb-3 text-x1 font-bold tracking-wider text-gray-500 uppercase">Redes Sociales</p>
            {/* ... Agregar Social Media */}
        </nav>
       
      </div>
      <p className="text-sm font-medium text-left text-white md:text-center">© Copyright 2024 Skcript Inc. All Rights Reserved.</p>
    </div>
  </footer>
  

  )
}

export default Footer;