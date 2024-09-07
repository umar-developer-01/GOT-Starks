"use client";
import React, { useEffect, useRef } from "react";
import sidebarStyles from "./index.module.css";
import Photo from "@/images/photo.png";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/appContext/index";

export function SidebarComponent() {
  const { isOpen, toggleMenu, closeButtonRef } = useAppContext();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        closeButtonRef.current &&
        !closeButtonRef.current.contains(event.target as Node)
      ) {
        if (isOpen) {
          toggleMenu(); // Close the sidebar if it's open and the click is outside
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, toggleMenu]);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`${sidebarStyles.sidebar} ${
          isOpen ? `${sidebarStyles.open}` : ""
        }`}
      >
        <div className={sidebarStyles.innerContainer}>
          <Image src={Photo} className={sidebarStyles.photoImage} alt="photo" />

          <ul className={sidebarStyles.container}>
            <Link href="/"  onClick={toggleMenu} className={sidebarStyles.list}>
              Home
            </Link>
            <Link href="/"  onClick={toggleMenu} className={sidebarStyles.list}>
              About
            </Link>
            <Link href="/"  onClick={toggleMenu} className={sidebarStyles.list}>
              Contact
            </Link>
  
            <Link href="/login" onClick={toggleMenu} className={sidebarStyles.list}>
              Login
            </Link>{" "}
       
            <Link href="/signup" onClick={toggleMenu} className={sidebarStyles.list}>
              Signup
            </Link>{" "}
       
          </ul>
        </div>
      </div>
    </>
  );
}
