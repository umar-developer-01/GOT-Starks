"use client"

import { createContext, useState, ReactNode, useContext, useRef } from 'react';

// Define the shape of the context
interface AppContextType {
  // setUser: (user: string | null) => void;
  isOpen:boolean;
  toggleMenu:()=>void;
  closeButtonRef: any; // Use RefObject instead of HTMLButtonElement
}

// Create context with default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeButtonRef = useRef<any>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppContext.Provider value={{ isOpen, toggleMenu,closeButtonRef }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for accessing context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};