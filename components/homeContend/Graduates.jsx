import "./Styles.css";

const Graduates = () => {
  return (
    <div>
      <div
        className="p-5 "
        style={{
          backgroundImage: "linear-gradient(to right, #002e79, #006eb0)",
        }}
      >
        <div className="text-center font-semibold font-poppins">
          <p style={{ color: "white", padding: "40px", fontSize: "50px" }}>
            Nuestros Diplomados
          </p>
          </div>
       
        <div className="mx-auto w-full lg:mx-0"></div>
        <ul
          role="list"
          className="justify-items-center mx-auto  mt-1 grid max-w-2xl grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:mx-15 lg:max-w-7xl lg:grid-cols-3 "
        >
          <li>
            <ul role="list" className="mt-3 flex gap-x-3">
              <div className="m-2 space-y-2">
                <div
                  className="group flex flex-col gap-1 rounded-lg p-5 text-gray "
                  tabIndex="1"
                >
                  <div
                    style={{ height: "400px", width: "320px" }}
                    className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
                  >
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-200 ease-in-out group-hover:opacity-100  dark:opacity-90">
                      <img
                        src="/image/ing_civil.jpg"
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt=""
                      />
                    </div>
                    <div
                      style={{ width: "70%" }}
                      className=" p-3 opacity-100 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                    >
                      <div className="bg-primaryblue border-primaryrosa border rounded-xl text-lg font-bold text-white px-6 py-6">
                        Ingeniería Civil
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* Repeat the above structure for each team member */}
          <li>
            <ul role="list" className="mt-3 flex gap-x-3">
              <div className="m-2 space-y-2">
                <div
                  className="group flex flex-col gap-1 rounded-lg p-5 text-gray "
                  tabIndex="1"
                >
                  <div
                    style={{ height: "400px", width: "320px" }}
                    className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
                  >
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-200 ease-in-out group-hover:opacity-100 dark:opacity-90">
                      <img
                        src="/image/ing_agricola.jpg"
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt=""
                      />
                    </div>
                    <div
                      style={{ width: "70%" }}
                      className=" p-3 opacity-100 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                    >
                      <div className="bg-primaryblue border-primaryrosa border rounded-xl text-lg font-bold text-white px-3 py-6">
                        Ingeniería Agrícola
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>

          <li>
            <ul role="list" className="mt-3 flex gap-x-3">
              <div className="m-2 space-y-2">
                <div
                  className="group flex flex-col gap-1 rounded-lg p-5 text-gray "
                  tabIndex="1"
                >
                  <div
                    style={{ height: "400px", width: "320px" }}
                    className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
                  >
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-200 ease-in-out group-hover:opacity-100  dark:opacity-90">
                      <img
                        src="/image/ing_ambiental.jpg"
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt=""
                      />
                    </div>
                    <div
                      style={{ width: "70%" }}
                      className=" p-3 opacity-100 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                    >
                      <div className="bg-primaryblue border-primaryrosa border rounded-xl text-lg font-bold text-white px-1 py-6">
                        Ingeniería Ambiental
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>

          <li>
            <ul role="list" className="mt-3 flex gap-x-3">
              <div className="m-2 space-y-2">
                <div
                  className="group flex flex-col gap-1 rounded-lg p-5 text-gray "
                  tabIndex="1"
                >
                  <div
                    style={{ height: "400px", width: "320px" }}
                    className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
                  >
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-200 ease-in-out group-hover:opacity-100  dark:opacity-90">
                      <img
                        src="/image/ing_alimentarias.jpg"
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt=""
                      />
                    </div>
                    <div
                      style={{ width: "90%" }}
                      className=" p-3 opacity-100 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                    >
                      <div className="bg-primaryblue border-primaryrosa border rounded-xl text-lg font-bold text-white px-5 py-2">
                        Ingeniería de Industrias Alimentarias
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>

          <li>
            <ul role="list" className="mt-3 flex gap-x-3">
              <div className="m-2 space-y-2">
                <div
                  className="group flex flex-col gap-1 rounded-lg p-5 text-gray "
                  tabIndex="1"
                >
                  <div
                    style={{ height: "400px", width: "320px" }}
                    className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
                  >
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-200 ease-in-out group-hover:opacity-100  dark:opacity-90">
                      <img
                        src="/image/ing_vial.jpg"
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt=""
                      />
                    </div>
                    <div
                      style={{ width: "70%" }}
                      className=" p-3 opacity-100 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                    >
                      <div className="bg-primaryblue border-primaryrosa border rounded-xl text-lg font-bold text-white px-6 py-6">
                        Ingeniería Vial
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>

          <li>
            <ul role="list" className="mt-3 flex gap-x-3">
              <div className="m-2 space-y-2">
                <div
                  className="group flex flex-col gap-1 rounded-lg p-5 text-gray "
                  tabIndex="1"
                >
                  <div
                    style={{ height: "400px", width: "320px" }}
                    className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
                  >
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-200 ease-in-out group-hover:opacity-100  dark:opacity-90">
                      <img
                        src="/image/ing_riego.jpg"
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt=""
                      />
                    </div>
                    <div
                      style={{ width: "90%" }}
                      className=" p-3 opacity-100 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                    >
                      <div className="bg-primaryblue border-primaryrosa border rounded-xl text-lg font-bold text-white px-5 py-2">
                        Sistema de Riego Tecnificado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Graduates;
