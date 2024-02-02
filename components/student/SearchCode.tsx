import React, { useEffect, useMemo, useState } from 'react';
import ModalTable from '../share/modalTable';
import StudentDelete from './StudentDelete';
import StudentForm from './StudentForm';
import { FaRegEdit } from 'react-icons/fa';
import { StudentData } from '@/interface/interface';
import Modal from '../share/Modal';

interface DuplicatedCodesDetectorProps {
  studentData: StudentData[];
  isOpen: boolean;
  onClose: () => void;
}

const DuplicatedCode: React.FC<DuplicatedCodesDetectorProps> = ({ studentData, isOpen, onClose }) => {
  const [duplicatedStudents, setDuplicatedStudents] = useState<StudentData[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [studentCode, setStudentCode] = useState<StudentData[]>([]);
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [duplicates, setDuplicates] = useState<StudentData[]>([]);

  useEffect(() => {
    if (isOpen) {
      detectDuplicates();
    }
  }, [isOpen, studentData]);

  const detectDuplicates = () => {
    const codeCountMap: Record<string, StudentData[]> = {};
    studentData.forEach((student) => {
      if (!codeCountMap[student.code]) {
        codeCountMap[student.code] = [];
      }
      codeCountMap[student.code].push(student);
    });
    const duplicateEntries = Object.values(codeCountMap).filter((entries) => entries.length > 1);
    const duplicates: StudentData[] = duplicateEntries.reduce(
      (acc, entries) => [...acc, ...entries],
      []
    );
    setDuplicates(duplicates);
    setIsModalOpen(duplicates.length > 0);
    //setIsTableModalOpen(true);
  };

  const handleTableModalClose = () => {
    setIsTableModalOpen(false);
    onClose();
  };

  //UpdateStudent
  const handleUpdateOpenModal = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };
  const handleUpdateCloseModal = () => {
    setSelectedId(null);
    setIsModalOpen(false);
  };
  const handleUpdateSuccess = async (updateUserId: number) => {
      //setStudentData(response.data);
      //setDataLoading(true);
  }

  //deleteStudent
  const handleDeleteSuccess = () => {
    //searchDNI();
  };

  const memoryData = useMemo(() => duplicatedStudents || [], [studentData]);

  return (
 <div>
  {isTableModalOpen ? (
        <Modal open={isTableModalOpen} onClose={handleTableModalClose}>
          <div className="p-4">
            <p>No hay códigos duplicados</p>
          </div>
        </Modal>
      ) : (
  <ModalTable open={isModalOpen} onClose={handleTableModalClose}>
   <div className="overflow-x-auto bg-white p-2 mt-4">
    <table className="min-w-full text-sm whitespace-nowrap shadow-2xl">

    <thead className="uppercase text-center tracking-wider bg-neutral-300">
      <tr className="text-gray-700 ">
        <th scope="col" className="px-6 py-4">#</th>
        <th scope="col" className="px-6 py-4">DNI</th>
        <th scope="col" className="px-6 py-4">Nombre</th>
        <th scope="col" className="px-6 py-4">Código</th>
        <th scope="col" className="px-6 py-4">Actividad academica</th>
        <th scope="col" className="px-6 py-4">Participación</th>
        <th scope="col" className="px-6 py-4">Instituto</th>
        <th scope="col" className="px-6 py-4">Hora</th>
        <th scope="col" className="px-6 py-4">Fecha</th>
        <th scope="col" className="px-6 py-4">Certificado</th>
        <th scope="col" className="px-6 py-4">Acción</th>
      </tr>
    </thead>
    <tbody>
      {duplicates.map((student, index) => (
      <tr key={index} className="text-center text-gray-500 border-b font-semibold hover:bg-gray-100">
        <th scope="row" className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.id}</span>
        </th>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.documentNumber}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.name}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.code}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.activityAcademy}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.participation}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.institute}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.hour}</span>
        </td>
        <td className="px-6 py-4">
        <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.date}</span>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Ver
            <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.certificate}</span>
          </a>
        </td>
        <td className="flex justify-center px-6 py-3 ">
        <div className="flex items-center gap-6">
      <div>
        <button
        onClick={() => handleUpdateOpenModal(student.id)}
        className='border-2 border-green-500 p-0.5 rounded-md text-green-500 transition ease-in-out delay-300 hover:scale-125'>
          <div className="text-xl text-default-400 cursor-pointer active:opacity-50">
            <FaRegEdit />
          </div>
        </button>
          {isModalOpen && (
            <StudentForm id={selectedId}
            onUpdateSuccess={() => handleUpdateSuccess(student.id)}
            onCloseModal={handleUpdateCloseModal}/>
          )}
      </div>
        <StudentDelete id={student.id} onDeleteSuccess={handleDeleteSuccess} />
    </div>
    </td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
</ModalTable>
 )}
  </div>
  );
};

export default DuplicatedCode;
