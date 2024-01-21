export const ItemCard = ({ number, description }) => {
    return (
      <>
        <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow-md rounded-2xl">
          <h3 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
            {number}
          </h3>
          <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
            {description}
          </p>
        </div>
      </>
    );
  };
  