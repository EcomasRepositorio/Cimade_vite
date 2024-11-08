const Modal: React.FC<{
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ open, onClose, children }) => {
  const overlayClass = open ? 'visible  backdrop-blur-sm bg-opacity-20' : 'invisible';
  const modalClass = open ? 'scale-100 opacity-100 z-100' : 'scale-110 opacity-0';

  return (
    <div
      className={`fixed inset-0 p-4 z-50  flex justify-center items-center transition-colors ${overlayClass}`}
      onClick={onClose}>
      <div
        className={`bg-slate-800 rounded-2xl shadow p-5 transition-all max-w-md sm:w-full w-full ${modalClass}`}
        onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-white bg-red-800 hover:bg-red-600  hover:text-gray-400"
          onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;