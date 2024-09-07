"use client";

import React, { ReactNode } from "react";
import { useModal } from "./context";
import modalStyles from "./index.module.css";
import { X } from "lucide-react";

type ModalProps = {
  id: string;
  children: ReactNode;
  title: string;
};

const Modal: React.FC<ModalProps> = ({ id, title, children }) => {
  const { modals, closeModal } = useModal();

  if (!modals[id]) return null;

  console.log("this is the title", title);

  return (
    <div className={modalStyles.modalOverlay} onClick={() => closeModal(id)}>
      <div
        className={modalStyles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={modalStyles.content}>
          <div className={modalStyles.titleAndClose}>
            <div className={modalStyles.title}>{title}</div>
            <div
              className={modalStyles.closeButton}
              onClick={() => closeModal(id)}
            >
              <X />
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
