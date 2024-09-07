"use client";

import React, { ReactNode } from "react";
import { useModal } from "./context";
import modalStyles from "./index.module.css";
import { X } from "lucide-react";
import utilityStyles from "@/app/utility.module.css";

type ModalProps = {
  id: string;
  title: string;
  buttonName: string;
  children: ReactNode;
  click: (arg: Record<string, any>) => Record<string, any>;
};

const Modal: React.FC<ModalProps> = ({
  id,
  title,
  buttonName,
  click,
  children,
}) => {
  const { modals, closeModal } = useModal();

  if (!modals[id]) return null;

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
          <div className={modalStyles.children}>{children}</div>
        </div>
        <div className={modalStyles.buttonPlacement}>
        <button
          className={utilityStyles.buttonPrimary}
          onClick={() => click({ result: true })}
        >
          {buttonName}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// type InputType = {
//   // Define the structure of the input object here
//   name: string;
//   email: string;
// };

// type OutputType = {
//   // Define the structure of the output object here
//   success: boolean;
//   message: string;
// };

// type ModalProps = {
//   id: string;
//   title: string;
//   buttonName: string;
//   children: ReactNode;
//   click: (arg: InputType) => OutputType;
// };

// In TypeScript, Record<K, T> is a utility type that allows you to create an object type where the keys (K) are of a specific type and the values (T) are of another specific type.

// Record<K, T>

// const scores: Record<string, number> = {
//   Alice: 10,
//   Bob: 15,
//   Charlie: 8,
// };
