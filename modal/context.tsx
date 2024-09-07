"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
  modals: Record<string, boolean>;
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modals, setModals] = useState<Record<string, boolean>>({});

  const openModal = (id: string) => setModals((prev) => ({ ...prev, [id]: true }));
  const closeModal = (id: string) => setModals((prev) => ({ ...prev, [id]: false }));

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
