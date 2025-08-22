import React from "react";
import logo from "../assets/logo.webp";

function Header() {
  return (
    <div className="px-6 md:px-12 py-6 md:py-9 flex justify-start">
      <img
        src={logo}
        className="w-30 md:w-40 lg:w-52 object-contain"
        alt="Logo"
      />
    </div>
  );
}

export default Header;
