import React from "react";
import Header from "../components/Header";

export default function Create() {
  return (
    <div className="w-2/5 h-screen mx-auto bg-base-300 p-2">
      <Header />
      <div className="mt-12 px-8">
        <h1 className="font-black text-4xl">Create</h1>
      </div>
    </div>
  );
}
