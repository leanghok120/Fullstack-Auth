import React from "react";

export default function Drink({ name, drinks }) {
  return (
    <div className="px-5 py-6 bg-base-200 rounded-2xl shadow-xl">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">{name}</h2>
        <button className="btn btn-primary rounded-full">I drank this</button>
      </div>
      <p className="italic mt-6 text-lg">Drunk {drinks} times</p>
    </div>
  );
}
