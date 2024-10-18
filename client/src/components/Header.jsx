import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-2xl font-bold" to={"/"}>
          Boba Bliss
        </Link>
      </div>
      <ul className="menu menu-horizontal px-1">
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