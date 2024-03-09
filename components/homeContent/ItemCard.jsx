import React, { useEffect, useState } from 'react';

export const ItemCard = ({ number, description, animated, animation, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (animated) {
      interval = setInterval(() => {
        setCount((prevCount) => (prevCount < parseInt(number, 10) ? prevCount + 85 : parseInt(number, 10)));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [animated, number]);

  return (
    <div className={`flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white border-primaryrosa border  shadow-md rounded-2xl ${animated ? `animate-${animation}` : ''}`}>
      {icon && <img src={icon} alt="Icono" className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4" />}
      <h3 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
        { "+" + count }
      </h3>
      <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600 font-bold">
        {description}
      </p>
    </div>
  );
};

export default ItemCard;
