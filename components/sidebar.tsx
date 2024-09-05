"use client";

import React, { useEffect, useRef } from "react";
import sidebarStyles from "./sidebar.module.css";
import { useAppContext } from "@/appContext/index";

export function SidebarComponent() {
  const { isOpen, toggleMenu,closeButtonRef } = useAppContext();
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
        <h2>Sidebar Menu</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}
