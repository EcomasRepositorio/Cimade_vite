import React from "react";

const Courses = () => {
  return (
    <div>
      {/* CURSOS-INFORMACION */}
      <div
        className="p-5"
        style={{
          backgroundImage: "linear-gradient(to right, #002e79, #006eb0)",
        }}
      >
        <div className="text-center font-semibold font-poppins">
          <p style={{ color: "white", padding: "40px", fontSize: "60px" }}>
            Nuestros Cursos{" "}
          </p>
        </div>

        <div
          className="blogs__wrapper py-10 px-20"
          style={{
            backgroundImage: "linear-gradient(to right, #002e79, #006eb0)",
          }}
        >
          <div className="flex flex-wrap justify-center ">
            <div
              className=" blogs bg-white mx-5 my-5"
              style={{ width: "550px" ,borderRadius: "25px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="p-5">
                <h1 className="text-2xl font-bold text-green-800 py-2">
                  Lorem ipsum dolor sit amet
                </h1>
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis vitae qui distinctio ex soluta? Voluptates, ea!
                  Esse, natus. Quas possimus laboriosam consectetur deserunt ea
                  sapiente. Dicta ipsam atque voluptatem provident!
                </p>
                <a
                  href="#"
                  className="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded"
                >
                  Read More
                </a>
              </div>
            </div>

            <div
              className="blogs bg-white mx-5 my-5"
              style={{ width: "350px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="p-5">
                <h1 className="text-2xl font-bold text-green-800 py-2">
                  Lorem ipsum dolor sit amet
                </h1>
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis vitae qui distinctio ex soluta? Voluptates, ea!
                  Esse, natus. Quas possimus laboriosam consectetur deserunt ea
                  sapiente. Dicta ipsam atque voluptatem provident!
                </p>
                <a
                  href="#"
                  className="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded"
                >
                  Read More
                </a>
              </div>
            </div>

            <div
              className="blogs bg-white mx-5 my-5"
              style={{ width: "350px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="p-5">
                <h1 className="text-2xl font-bold text-green-800 py-2">
                  Lorem ipsum dolor sit amet
                </h1>
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis vitae qui distinctio ex soluta? Voluptates, ea!
                  Esse, natus. Quas possimus laboriosam consectetur deserunt ea
                  sapiente. Dicta ipsam atque voluptatem provident!
                </p>
                <a
                  href="#"
                  className="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
