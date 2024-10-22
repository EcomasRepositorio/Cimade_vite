import React, { useState, FormEvent } from "react";
import { URL } from "@/components/utils/format/tokenConfig";
import axios from "axios";
import { SearchCodeProps, StudentCode } from "../../interface/interface";
import Modal from "../share/Modal";
import { Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";

const SearchName: React.FC<SearchCodeProps> = ({ onSearchCode }) => {
  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>("");
  const [searchType, setSearchType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState<StudentCode>();
  const [open, setOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, "onChange ejecutado");
    setQueryValue(event.target.value);
    setSearchType(event.target.value);
  };

  const openErrorModal = () => {
    setModalOpen(true);
  };
  const closeErrorModal = () => {
    setModalOpen(false);
  };

  const searchCode = async (event: FormEvent) => {
    event.preventDefault();

    if (queryValue.trim()) {
      setLoading(true);
    }
    try {
      const value = queryValue.trim();
      const apiUrl = `${URL()}/student/code/${value}/type/${searchType}`;
      console.log(apiUrl);
      const res = await axios.get(
        `${URL()}/student/code/${value.trim()}/type/${searchType}`
      );
      console.log(res);
      setStudentData(res.data);
      onSearchCode(res.data);
      if (queryValue.trim() !== "") {
        setOpen(true);
      }
    } catch (error) {
      console.error("Error: Codigo invalido", error);
      openErrorModal();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };
  const tableRows = [
    {
      imgSrc: "/icons/organizadopor.svg",
      label: "Organizado por:",
      value: studentData?.institute,
    },
    {
      imgSrc: "/icons/otorgado.svg",
      label: "Otorgado a:",
      value: studentData?.name,
    },
    {
      imgSrc: "/icons/nom_evento.svg",
      label: "Nombre del evento:",
      value: studentData?.activityAcademy,
    },
    {
      imgSrc: "/icons/creditos_horas.svg",
      label: "Creditos/Horas:",
      value: studentData?.hour,
    },
    {
      imgSrc: "/icons/fecha_emision.svg",
      label: "Fecha de emisión:",
      value: studentData?.date,
    },
  ];

  const splitText = (text: string): string[] => {
    // Elimina espacios innecesarios
    const cleanText = text.trim();
  
    // Identificamos las posiciones de las palabras clave dentro del texto
    const indexCorporacion = cleanText.indexOf("CIMADE Educación");
    const indexFundenorp = cleanText.indexOf("FUNDENORP");
    const indexEscuela = cleanText.indexOf("Escuela de Posgrado");
    const indexUniversidad = cleanText.indexOf("Colegio de Ingenieros del Perú - CD Tacna");
  
    // Caso especial para "CIMADE Educación Continua" y "Colegio de Ingenieros del Perú - CD Tacna"
    const indexCIMADE = cleanText.indexOf("CIMADE Educación Continua");
    const indexCIPTacna = cleanText.indexOf("Colegio de Ingenieros del Perú - CD Tacna");
  
    if (indexCIMADE !== -1 && indexCIPTacna !== -1) {
      const cimade = cleanText
        .substring(indexCIMADE, indexCIPTacna)
        .trim(); // Desde "CIMADE Educación Continua" hasta "Colegio de Ingenieros del Perú - CD Tacna"
      const cipTacna = cleanText
        .substring(indexCIPTacna)
        .trim(); // Desde "Colegio de Ingenieros del Perú - CD Tacna" hasta el final
  
      return [cimade, cipTacna];
    }
  
    // Si contiene "Escuela de Posgrado"
    if (indexCorporacion !== -1 && indexFundenorp !== -1 && indexEscuela !== -1) {
      const corporacion = cleanText
        .substring(indexCorporacion, indexEscuela)
        .trim(); // Desde "CIMADE Educación" hasta "Escuela de Posgrado"
      const escuela = cleanText
        .substring(indexEscuela, indexFundenorp)
        .trim(); // Desde "Escuela de Posgrado" hasta "FUNDENORP"
      const fundenorp = cleanText.substring(indexFundenorp).trim(); // Desde "FUNDENORP" hasta el final
  
      return [corporacion, escuela, fundenorp];
    }
  
    // Si contiene "Colegio de Ingenieros del Perú - CD Tacna"
    if (indexCorporacion !== -1 && indexFundenorp !== -1 && indexUniversidad !== -1) {
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

 

  return (
    <div className="">
      <form onSubmit={searchCode} className="w-full ">
        <div className="flex items-center  justify-center">
          <div className=" flex-1">
            <input
              type="search"
              id="default-search"
              className=" font-normal text-sm text-gray-900 border-1 border-gray-300 rounded-lg bg-white  focus:border-primaryblue  m-0"
              placeholder={`Ingrese su código ${
                searchType === "code" ? "código" : ""
              }`}
              required
              onClick={toggleIsActive}
              onChange={onChange}
              value={queryValue}
            />
          </div>
          <div className=" ml-2 h-full">
            <Button
              color="primary"
              type="submit"
              className="bg-primaryblue text-white border border-white/50 rounded-lg"
            >
              Buscar
            </Button>
          </div>
        </div>
      </form>

      {loading && <Spinner color="primary" />}
      {studentData && (
        <Modal open={open} onClose={() => setOpen(false)}>
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
          <div className=" max-w-md text-center  rounded-md mx-auto">
            {tableRows.map((row, index) => (
              <div key={index} className="mb-4">
                <div className="inline-flex items-center text-white  text-sm p-1 md:w-80 w-72 rounded-lg bg-slate-600 font-semibold">
                  {row.imgSrc && (
                    <Image
                      src={row.imgSrc}
                      alt={row.label}
                      className="flex lg:w-5 lg:h-5 w-5 h-5 object-contain ml-1"
                      width={800}
                      height={800}
                    />
                  )}
                  <div className="flex-1 text-center">{row.label}</div>
                </div>

                <div className="text-gray-300 mt-3 mb-5 text-sm font-semibold">
                  {row.value === studentData?.institute &&
                    row.value &&
                    splitText(row.value).map((line, index) => (
                      <p key={index} className="mb-1">
                        {line}
                      </p>
                    ))}
                  {row.value !== studentData?.institute && row.value}
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}
      <Modal open={modalOpen} onClose={closeErrorModal}>
        <div className="p-2 rounded-lg">
          <h2 className="text-md font-bold text-red-500 mb-4">
            Código incorrecto
          </h2>
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-100">
            El código que ingresaste no se encuentra en nuestra base de datos.
          </h3>
        </div>
      </Modal>
    </div>
  );
};

export default SearchName;
