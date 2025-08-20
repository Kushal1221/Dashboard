import React from "react";
import logo from "../assets/logo.webp";

function Header() {
  return (
    <div className="px-6 md:px-12 py-6 md:py-9 flex justify-start">
      <img
        src={logo}
        className="w-40 sm:w-48 md:w-60 lg:w-72 object-contain"
        alt="Logo"
      />
    </div>
  );
}

export default Header;
