import React from 'react';
import Modal from '../share/Modal';

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  errorMessage: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ open, onClose, errorMessage }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="font-bold border p-4 rounded-xl text-[#ff0000] whitespace-pre-wrap">
        {errorMessage}
      </div>
    </Modal>
  );
};

export default ErrorModal;
