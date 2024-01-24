"use client";
import React, { useState} from 'react'
import Modal from '@/components/share/Modal';

const About = () => {

  const [open, setOpen] = useState<boolean>(false)
  return (
    <div id="/about">
      <div className="p-10 flex justify-center w-full">
        <button className="border border-neutral-300 rounded-lg py-1.5 px-10 my-2
          bg-blue-500 hover:bg-blue-700 text-white"
            onClick={() => setOpen(true)}>
              Open
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="flex flex-col gap-4"></div>
          <h1 className="text-2xl">MODAL TITLE</h1>
          <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
          cuando un impresor (N. del T. persona que se dedica a la imprenta)
          </p>
          <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
          cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
          galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
          No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
          electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
          creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente
          con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </p>
          <hr className='border-t-solid border-1 border-grey mb-4 mt-2'/>
          <div className="flex flex-row justify-center">
            <button className="border border-neutral-300 rounded-lg py-1.5 px-10
            bg-blue-500 hover:bg-blue-700 text-white"
            onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </Modal>
      </div>
      page Jhosy
    </div>
  )
}

export default About