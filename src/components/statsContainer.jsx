import React from "react";

const StatsContainer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex text-Text font-semibold text-sm border rounded-md bg-Background p-2 space-x-2">
        <div className="p-2 bg-SideBar rounded-md text-white">
          <p>Mortality Rate</p>
        </div>
        <div className="p-2 rounded-md ">
          <p>Egg Production</p>
        </div>
        <div className="p-2 rounded-md">
          <p>Feed Consumption</p>
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;
