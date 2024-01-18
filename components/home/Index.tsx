"use client";
import React from 'react';
import Slider from './Slider';
import Image from 'next/image';

const slides: { src: string; width: number; height: number }[] = [
  { src: "/image/imagen02.png", width: 2500, height: 2000 },
  { src: "/image/imagen03.png", width: 2500, height: 2000 },
  { src: "/image/imagen04.png", width: 2500, height: 2000 },
];

const Home: React.FC = () => {
  return (
    <div>
      <Slider autoSlide={true} autoSlideInterval={5000}>
        {slides.map((s, index) => (
          <Image key={index} src={s} alt={`Slide ${index}`} />
        ))}
      </Slider>
    </div>
  );
};

export default Home;