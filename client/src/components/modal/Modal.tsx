import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "./useOutsideClick";
import { FaX } from "react-icons/fa6";
interface ModalContextType {
  openName: string;
  close: () => void;
  open: React.Dispatch<React.SetStateAction<string>>;
}
const initialValue = {
  openName: "",
  close: () => null,
  open: () => "",
};

const ModalContext = createContext<ModalContextType>(initialValue);

function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opens: opensWindowName,
}: {
  children: React.ReactElement;
  opens: string;
}) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({
  children,
  name,
}: {
  children: React.ReactElement;
  name: string;
}) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className=" h-svh fixed left-0 top-0 z-50 w-full text-slate-50 backdrop-blur-md transition-all duration-500">
      {/* overlay*/}
      {/* StyledModal*/}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-4 border-slate-900 bg-slate-900 px-6 py-4 shadow-lg shadow-slate-700 "
        ref={ref}
      >
        <button
          className="absolute right-2 top-2 bg-none p-2 text-lg transition-all duration-200 hover:text-slate-100"
          onClick={close}
        >
          <FaX />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
