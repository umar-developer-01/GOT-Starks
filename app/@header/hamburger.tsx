"use client";


import { useState } from "react";
import headerStyles from "./header.module.css";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div  className={`${headerStyles.hamburgerContainer} ${isOpen ? headerStyles.open : ""}`}  onClick={toggleMenu}>
        <div className={headerStyles.hamburger}></div>
        <div className={headerStyles.hamburger}></div>
        <div className={headerStyles.hamburger}></div>
      </div>
    </>
  );
}
