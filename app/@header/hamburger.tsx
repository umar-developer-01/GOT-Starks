"use client";
import { useAppContext } from "@/appContext/index";
import headerStyles from "./header.module.css";

export default function Hamburger() {
  const { isOpen, toggleMenu ,closeButtonRef} = useAppContext();

  
  return (
    <>
      <div
        className={`${headerStyles.hamburgerContainer} ${
          isOpen ? headerStyles.open : ""
        }`}
        ref={closeButtonRef}
        onClick={toggleMenu}
      >
        <div className={headerStyles.hamburger}></div>
        <div className={headerStyles.hamburger}></div>
        <div className={headerStyles.hamburger}></div>
      </div>
    </>
  );
}
