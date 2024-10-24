import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center bg-base-300 mt-5">
      <div className="flex-1">
        <Link className="btn btn-ghost text-4xl font-black" to={"/"}>
          <img src="/logo.svg" className="w-10" />
          Boba Bliss
        </Link>
      </div>
      <ul className="menu menu-horizontal px-1 text-lg">
        <li>
          <Link className="link-hover font-bold" to={"/create"}>
            Create
          </Link>
        </li>
        <li>
          <Link className="link-hover font-bold" to={"/register"}>
            Register
          </Link>
        </li>
        <li>
          <Link className="link-hover font-bold" to={"/login"}>
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
}
