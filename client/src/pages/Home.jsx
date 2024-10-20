import React from "react";
import Drink from "../components/Drink";
import Header from "../components/Header";

export default function Home() {
  const drinks = [
    { name: "Milk Tea", drinks: 2 },
    { name: "Lemon Tea", drinks: 0 },
    { name: "Espresso", drinks: 1 },
  ];

  return (
    <div className="w-2/5 h-screen mx-auto bg-base-300 p-2">
      <Header />
      <div className="mt-12 px-8">
        <h1 className="font-black text-4xl">Find Something To Drink</h1>
        <h2 className="font-bold text-2xl mt-6">Other's Drinks</h2>
        <div className="flex flex-col gap-4 mt-2">
          {drinks.map((drink) => (
            <Drink name={drink.name} drinks={drink.drinks} />
          ))}
        </div>
      </div>
    </div>
  );
}
