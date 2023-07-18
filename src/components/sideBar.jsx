import React from "react";
import { navLinks } from "../constants";

function SideBar() {
  return (
    <div className="w-[294px] h-full py-20 px-10 flex justify-center bg-gradient-to-b from-[#D6C1BC] to-[#A27C73]">
      {/* container in the sidebar */}
      <div className="w-full h-full flex flex-col justify-between">
        {/* container for farm name and logo */}
        <div className="h-[10%]">
          <p className="text-white capitalize">happy chicks</p>
        </div>

        {/* container for navlinks */}
        <div className="px-5 w-full h-full">
          {navLinks?.map(({ name, link }) => (
            <div
              key={name}
              className="py-3 px-1 hover:border hover:border-black"
            >
              <a href={link}>
                <p className="text-white capitalize">{name}</p>
              </a>
            </div>
          ))}
        </div>

        {/* container for logout button */}
        <div className="h-[10%] hover:border hover:border-black py-3 px-1">
          <p className="text-white capitalize">logout</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
