import { IoMdCloseCircle } from "react-icons/io";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          {/* Blurred Background Overlay */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-md bg-white p-6 rounded-lg shadow-lg m-4">
              <div className="flex justify-end">
                <IoMdCloseCircle
                  onClick={onClose}
                  className="text-2xl cursor-pointer"
                />
              </div>
              <div className="mt-4">{children}</div>
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
