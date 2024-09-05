"use client";

import React from "react";
import sidebarStyles from "./sidebar.module.css";
import { useAppContext } from "@/appContext/index";

export function SidebarComponent() {
  const { isOpen } = useAppContext();
  return (
    <>
      <div
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
