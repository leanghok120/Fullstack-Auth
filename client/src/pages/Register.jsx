import React from "react";
import Header from "../components/Header";

export default function Register() {
  return (
    <div className="h-screen w-2/5 mx-auto bg-base-300 p-2">
      <Header />
      <div className="mt-12 px-8">
        <h1 className="font-black text-4xl mb-5">Register</h1>
        <form
          className="flex flex-col gap-4 mt-6"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
          />
          <button class="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
}
