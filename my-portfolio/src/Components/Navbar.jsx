import React from "react";

function Navbar() {
  return (
    <div className="absolute w-full z-10 pt-[16px] bg-gray-500">
      <div>
        <div className="flex justify-between items-center px-4">
          <div className="flex ml-[350px] gap-10 font-medium pt-2">
            <a href="" className="text-white">
              Home
            </a>
            <a href="" className="text-white">
              About
            </a>
            <a href="" className="text-white">
              Projects
            </a>
            <a href="" className="text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
