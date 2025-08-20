import React from "react";

function Footer() {
  return (
    <div className="footer px-6 py-8 flex flex-col md:flex-row justify-between items-center text-base md:text-xl gap-4 md:gap-0">
      <p className="text-center md:text-left">
        © 2025 Journalyst. All rights reserved.
      </p>
      <div className="policy flex flex-col md:flex-row gap-4 md:gap-10 text-center md:text-right">
        <p className="cursor-pointer hover:underline">Privacy Policy</p>
        <p className="cursor-pointer hover:underline">Terms of Use</p>
      </div>
    </div>
  );
}

export default Footer;
