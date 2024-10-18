import React from "react";

export default function Register() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl mb-5">Register</h1>
      <form
        className="flex flex-col gap-2"
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
  );
}
