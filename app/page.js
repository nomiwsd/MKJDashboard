"use client";
import React from "react";
export default function Home({ children}) {
  return (
      <main className="flex min-h-screen items-start">
          {children}    
      </main>
  );
}
