import React from 'react';
import Slider from './Slider';
import Image from 'next/image';

const slides: string[] = [
  "/imagen02.png",
  "/imagen03.png",
  "/imagen04.png",
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