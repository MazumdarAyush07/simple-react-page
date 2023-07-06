import React from "react";
import logo from "../assets/react.svg";
import "../App.css";

function Navbar() {
  return (
    <nav className="bg-slate-900 m-0 flex justify-between">
      <div className="flex p-4">
        <img src={logo} alt="React Logo" />
        <h2 className="text-cyan-400 p-4">React Facts</h2>
      </div>
      <div className="p-8">
        <h2 className="text-white font-sans">React - Project 1</h2>
      </div>
    </nav>
  );
}

export default Navbar;
