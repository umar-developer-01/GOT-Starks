// components/Signup.tsx
"use client"; // Mark this component as a client component

import { signup } from "@/app/actions/user";

import { ChangeEventHandler, useState } from "react";

export function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="h-screen flex justify-center flex-col">
       <input value={username} onChange={(e)=>setUsername(e.target.value)}/>
       <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button
        onClick={async () => {
          const response = await signup(username, password);
          
        }}
        type="button"
        className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Sign up
      </button>
    </div>
  );
}