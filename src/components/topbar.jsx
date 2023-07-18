import React from "react";
import Image from "next/image";

function TopBar() {
  return (
    <div className="w-[full] h-full bg-[#DDD9D8] px-20 flex items-center">
      {/* profile image container */}
      <div className="w-[60px] h-[60px] rounded-full bg-black"></div>
      <div className="flex flex-col ml-5 justify-center">
        <p className="capitalize font-bold text-[32px]">admin</p>
        <p className="text-[#838383]">welcome back, boss.</p>
      </div>
    </div>
  );
}

export default TopBar;
