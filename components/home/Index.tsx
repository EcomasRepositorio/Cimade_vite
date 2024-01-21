"use client";
import React from 'react';
import Slider from './Slider';
import Image from 'next/image';

const slides: { src: string; width: number; height: number }[] = [
  { src: "/image/1.webp", width: 2500, height: 2000 },
  { src: "/image/2.webp", width: 2500, height: 2000 },
  { src: "/image/3.webp", width: 2500, height: 2000 },
  
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-cool">
      {/* Contenido principal */}
      <div className="flex-1">
        <Slider autoSlide={true} autoSlideInterval={5000}>
          {slides.map((s, index) => (
            <Image key={index} src={s} alt={`Slide ${index}`} />
          ))}
        </Slider>
      </div>

    
    </div>
    
  );
};

export default Home;