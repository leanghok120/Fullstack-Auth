import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Create() {
  return (
    <div className="w-2/5 h-screen mx-auto bg-base-300 p-2">
      <Header />
      <div className="mt-12 px-8">
        <h1 className="font-black text-4xl">Add Something To Drink</h1>
        <h2 className="font-bold text-2xl mt-6">What's your favorite drink?</h2>
        <form
          className="flex flex-col gap-4 mt-6"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Your drink"
            className="input input-bordered"
          />
          <button class="btn btn-primary text-2xl rounded-full">Create</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
