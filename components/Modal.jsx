"use client";

import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isOpen) return null;

  if (!mounted) {
    return null;
  }

  return (
    <section className="modal_backdrop bg-white/2">
      <div className="modal_light">
        {children}
        {/* close btn */}
        <div className="modal_close-btn" onClick={onClose}>
          <MdOutlineClose className="text-sm text-gray-900" />
        </div>
      </div>
    </section>
  );
};

export default Modal;
