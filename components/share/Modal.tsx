const Modal: React.FC<{
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ open, onClose, children }) => {
  const overlayClass = open ? 'visible bg-black/60' : 'invisible';
  const modalClass = open ? 'scale-100 opacity-100' : 'scale-110 opacity-0';

  return (
    <div
      className={`fixed inset-0 p-4 flex justify-center items-center transition-colors ${overlayClass}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-6 transition-all max-w-md ${modalClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
