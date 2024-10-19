import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="w-2/5 h-screen mx-auto bg-base-200 p-2">
      <Header />
      <div className="mt-6 px-8">
        <h1 className="font-black text-4xl">Home</h1>
      </div>
    </div>
  );
}
