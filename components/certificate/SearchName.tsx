import React, { useState, FormEvent } from "react";
import { URL } from "@/components/utils/format/tokenConfig";
import axios from "axios";
import { SearchNameProps, Student } from "@/interface/interface";
import Modal from "../share/Modal";
import { Button, Spinner } from "@nextui-org/react";
import Image from "next/image";

interface StudentCode extends Student {
  hour: string;
  institute: string;
}

const SearchName: React.FC<SearchNameProps> = ({ onSearchName }) => {
  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>("");
  const [searchType, setSearchType] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState<Student[]>();
  const [closeTable, setCloseTable] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isNameIncomplete, setIsNameIncomplete] = useState(false);
  const [selectedStudentData, setSelectedStudentData] =
    useState<StudentCode | null>(null);
  const [openModals, setOpenModals] = useState<boolean[]>(
    Array(selectedStudentData ? 1 : 0).fill(false)
  );

  const openStudentModal = (selectedStudent: StudentCode, index: number) => {
    setSelectedStudentData(selectedStudent);
    const updatedOpenModals = [...openModals];
    updatedOpenModals[index] = true;
    setOpenModals(updatedOpenModals);
  };
  const closeStudentModal = (index: number) => {
    const updatedOpenModals = [...openModals];
    updatedOpenModals[index] = false;
    setOpenModals(updatedOpenModals);
  };

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
    setCloseTable(false);
    setSearchType(queryValue);
  };

  const openErrorModal = () => {
    setModalOpen(true);
  };
  const closeErrorModal = () => {
    setModalOpen(false);
  };

  const searchName = async (event: FormEvent) => {
    event.preventDefault();

    if (queryValue.trim()) {
      setLoading(true);
    }
    try {
      const value = queryValue.trim();
      if (value.split(" ").length <= 2) {
        setIsNameIncomplete(true);
        setLoading(false);
        return;
      }
      const res = await axios.get(
        `${URL()}/student/name/${value.trim()}/type/${searchType}`
      );
      if (res.data.length > 0) {
      } else {
        setIsNameIncomplete(true);
        setLoading(false);
        return;
      }
      const filteredData = res.data.filter((student: Student) => {
        const normalizedInput = value.trim().toLowerCase();
        const normalizedName = student.name.trim().toLowerCase();
        const isMatch = normalizedName === normalizedInput;
        return isMatch;
      });
      console.log(filteredData);
      console.log(res.data);
      setStudentData(filteredData);
      onSearchName(filteredData);
      setCloseTable(true);
    } catch (error) {
      console.error("Error: Nombre invalido", error);
      openErrorModal();
    } finally {
      setLoading(false);
    }
  };
  // Función para dividir el texto según palabras clave o cantidad de palabras
  const splitText = (text: string): string[] => {
    // Elimina espacios innecesarios
    const cleanText = text.trim();

    // Identificamos las posiciones de las palabras clave dentro del texto
    const indexCorporacion = cleanText.indexOf("CIMADE Educación");
    const indexFundenorp = cleanText.indexOf("FUNDENORP");
    const indexEscuela = cleanText.indexOf("Escuela de Posgrado");
    const indexUniversidad = cleanText.indexOf(
      "Colegio de Ingenieros del Perú - CD Tacna"
    );

    // Caso especial para "CIMADE Educación Continua" y "Colegio de Ingenieros del Perú - CD Tacna"
    const indexCIMADE = cleanText.indexOf("CIMADE Educación Continua");
    const indexCIPTacna = cleanText.indexOf(
      "Colegio de Ingenieros del Perú - CD Tacna"
    );

    if (indexCIMADE !== -1 && indexCIPTacna !== -1) {
      const cimade = cleanText.substring(indexCIMADE, indexCIPTacna).trim(); // Desde "CIMADE Educación Continua" hasta "Colegio de Ingenieros del Perú - CD Tacna"
      const cipTacna = cleanText.substring(indexCIPTacna).trim(); // Desde "Colegio de Ingenieros del Perú - CD Tacna" hasta el final

      return [cimade, cipTacna];
    }

    // Si contiene "Escuela de Posgrado"
    if (
      indexCorporacion !== -1 &&
      indexFundenorp !== -1 &&
      indexEscuela !== -1
    ) {
      const corporacion = cleanText
        .substring(indexCorporacion, indexEscuela)
        .trim(); // Desde "CIMADE Educación" hasta "Escuela de Posgrado"
      const escuela = cleanText.substring(indexEscuela, indexFundenorp).trim(); // Desde "Escuela de Posgrado" hasta "FUNDENORP"
      const fundenorp = cleanText.substring(indexFundenorp).trim(); // Desde "FUNDENORP" hasta el final

      return [corporacion, escuela, fundenorp];
    }

    // Si contiene "Colegio de Ingenieros del Perú - CD Tacna"
    if (
      indexCorporacion !== -1 &&
      indexFundenorp !== -1 &&
      indexUniversidad !== -1
    ) {
      const corporacion = cleanText
        .substring(indexCorporacion, indexUniversidad)
        .trim(); // Desde "CIMADE Educación" hasta "Colegio de Ingenieros del Perú - CD Tacna"
      const universidad = cleanText
        .substring(indexUniversidad, indexFundenorp)
        .trim(); // Desde "Colegio de Ingenieros del Perú - CD Tacna" hasta "FUNDENORP"
      const fundenorp = cleanText.substring(indexFundenorp).trim(); // Desde "FUNDENORP" hasta el final

      return [corporacion, universidad, fundenorp];
    }

    // Si no encuentra las palabras clave, devuelve el texto dividido en palabras
    const words = cleanText.split(" ");
    const firstLine = words.slice(0, 9).join(" "); // Primeras 9 palabras
    const secondLine = words.slice(9, 10).join(" "); // Palabra 10
    const thirdLine = words.slice(10).join(" "); // Resto de las palabras
    return [firstLine, secondLine, thirdLine].filter((line) => line.length > 0);
  };

  const tableRows = [
    {
      imgSrc: "/icons/organizadopor.svg",
      label: "Organizado por:",
      value: selectedStudentData?.institute,
    },
    {
      imgSrc: "/icons/otorgado.svg",
      label: "Otorgado a:",
      value: selectedStudentData?.name,
    },
    {
      imgSrc: "/icons/nom_evento.svg",
      label: "Nombre del evento:",
      value: selectedStudentData?.activityAcademy,
    },
    {
      imgSrc: "/icons/creditos_horas.svg",
      label: "Creditos/Horas:",
      value: selectedStudentData?.hour,
    },
    {
      imgSrc: "/icons/fecha_emision.svg",
      label: "Fecha de emisión:",
      value: selectedStudentData?.date,
    },
  ];

  return (
    <div className="">
      <form onSubmit={searchName} className="w-full ">
        <div className="flex items-center ">
          <div className=" flex-1">
            <input
              type="search"
              id="default-search"
              className=" font-normal text-sm text-gray-900 border-1 border-gray-300 rounded-lg bg-white  focus:border-primaryblue  m-0"
              placeholder={`Ingrese sus nombres y apellidos ${
                searchType === "name" ? "nombre" : ""
              }`}
              required
              onClick={toggleIsActive}
              onChange={onChange}
              value={queryValue}
            />
          </div>
          <div className=" ml-2 h-full">
            <Button
              type="submit"
              className="bg-primaryblue text-white border border-white/50 rounded-lg"
            >
              Buscar
            </Button>
          </div>
        </div>
      </form>
      {loading && <Spinner />}
      {isNameIncomplete && (
        <Modal
          open={isNameIncomplete}
          onClose={() => setIsNameIncomplete(false)}
        >
          <div className=" p-2 rounded-lg">
            <h2 className="text-md font-bold text-red-500 mb-4">
              Nombres y apellidos incorrectos.
            </h2>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-100">
              Los nombres y apellidos que ingresaste no se encuentran en nuestra
              base de datos.
            </h3>
          </div>
        </Modal>
      )}
      {closeTable && studentData && (
        <div className="relative overflow-x-auto shadow-xl rounded-xl mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 font-semibold">
            <thead className="text-xm text-center text-gray-600 uppercase bg-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Actividad academica
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                  Accción
                </th>
              </tr>
            </thead>
            <tbody>
              {studentData?.map((student, index) => (
                <tr
                  key={index}
                  className="bg-white border-b text-center hover:bg-gray-100"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap w-12"
                  >
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {index + 1}
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 truncate max-w-lg">
                    {/* Truncate long text */}
                    <span title={student.activityAcademy}>
                      {student.activityAcademy}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.date}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        openStudentModal(student as StudentCode, index)
                      }
                      className="font-medium text-primaryblue dark:text-primaryblue hover:underline"
                    >
                      Ver
                    </button>
                  </td>
                  {selectedStudentData && (
                    <Modal
                      open={openModals.findIndex(Boolean) !== -1}
                      onClose={() =>
                        closeStudentModal(openModals.findIndex(Boolean))
                      }
                    >
                      <div className="flex justify-center items-center mb-4 gap-2">
                        <Image
                          src={"/certificate/UNP.png"}
                          alt="cimade"
                          className="w-16 md:w-20 lg:w-24 object-contain mt-2"
                          width={200}
                          height={200}
                          priority={true}
                        />
                        <Image
                          src={"/certificate/logo_cimadee.png"}
                          alt="cimade"
                          className="w-12 md:w-16 lg:w-16 object-contain mt-2"
                          width={50} // ajusta este valor según el tamaño deseado
                          height={100} // ajusta este valor según el tamaño deseado
                          priority={true}
                        />
                        <Image
                          src={"/certificate/funde.png"}
                          alt="cimade"
                          className="w-16 md:w-20 lg:w-20 object-contain mt-2"
                          width={200}
                          height={200}
                          priority={true}
                        />
                        <Image
                          src={"/certificate/colegio.png"}
                          alt="cimade"
                          className="w-16 md:w-20 lg:w-24 object-contain mt-2"
                          width={200}
                          height={200}
                          priority={true}
                        />
                      </div>
                      <div className="max-w-md text-center mx-auto">
                        {tableRows.map((row, index) => (
                          <div key={index} className="mb-4">
                            <div className="inline-flex items-center text-white text-sm p-1 w-72 rounded-lg bg-slate-600 font-semibold">
                              {row.imgSrc && (
                                <Image
                                  src={row.imgSrc}
                                  alt={row.label}
                                  className="w-5 h-5 object-contain ml-1"
                                  width={200}
                                  height={200}
                                />
                              )}
                              <div className="flex-1 text-center">
                                {row.label}
                              </div>
                            </div>
                            <div className="text-gray-300 mt-3 mb-5 text-sm font-semibold">
                              {row.label === "Organizado por:" && row.value
                                ? splitText(row.value).map((line, index) => (
                                    <p key={index}>{line}</p>
                                  ))
                                : row.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Modal>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Modal open={modalOpen} onClose={closeErrorModal}>
        <div className="border-2 p-2 rounded-lg">
          <h2 className="text-md font-bold text-red-600 mb-4">
            Nombre incorrecto
          </h2>
          <h3 className="text-sm font-semibold text-white">
            El nombre que ingresaste no se encuentra en nuestra base de datos.
          </h3>
        </div>
      </Modal>
    </div>
  );
};

export default SearchName;
