import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mt-12">
      <p>
        Made by{" "}
        <a
          href="https://github.com/leanghok120"
          target="_blank"
          className="underline"
        >
          Leanghok Oeng
        </a>{" "}
        to learn fullstack development
      </p>
      <p className="italic mt-2">
        Inspired by{" "}
        <a className="underline" href="https://findsomethingtodo.netlify.app/">
          Find something todo
        </a>
      </p>
    </footer>
  );
}
