import React from "react";
import Header from "../components/Header";

export default function Home() {
  const drinks = [
    { name: "Milk Tea", drinked: false },
    { name: "Lemon Tea", drinked: false },
    { name: "Espresso", drinked: false },
  ];

  return (
    <div className="w-2/5 h-screen mx-auto bg-base-300 p-2">
      <Header />
      <div className="mt-6 px-8">
        <h1 className="font-black text-4xl">Home</h1>
        <div className="flex flex-col gap-4 mt-6">
          {drinks.map((drink) => (
            <div className="px-5 py-6 bg-base-200 rounded-2xl shadow-xl">
              <h2 className="font-bold text-xl">{drink.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
