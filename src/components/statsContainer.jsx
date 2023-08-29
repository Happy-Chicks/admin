import React, { useState } from "react";
import egg from "../assets/images/eggs.png";
import Image from "next/image";
import chicken from "../assets/images/chicken.png";
import boom from "../assets/images/boomerang.png";
import Mortality from "./mortality";
import EggProduction from "./eggProduction";
import FeedConsumption from "./feedConsumption";

const StatsContainer = () => {
  const [renderComponent, setRenderComponent] = useState("mortality");
  return (
    <div className="w-full flex flex-col ">
      {/* navigation container */}
      <div className="w-full flex  justify-center">
        <div className="flex text-Text font-semibold text-sm border rounded-md bg-Background p-2 space-x-2">
          <div
            onClick={() => {
              setRenderComponent("mortality");
            }}
            className={`p-2 ${
              renderComponent === "mortality" ? "bg-SideBar  text-white" : ""
            } rounded-md cursor-pointer`}
          >
            <p>Mortality Rate</p>
          </div>
          <div
            onClick={() => {
              setRenderComponent("egg");
            }}
            className={`p-2 rounded-md ${
              renderComponent === "egg" ? "bg-SideBar  text-white" : ""
            } cursor-pointer`}
          >
            <p>Egg Production</p>
          </div>
          <div
            onClick={() => {
              setRenderComponent("feed");
            }}
            className={`p-2 rounded-md ${
              renderComponent === "feed" ? "bg-SideBar  text-white" : ""
            } cursor-pointer`}
          >
            <p>Feed Consumption</p>
          </div>
        </div>
      </div>

      {renderComponent === "mortality" ? (
        <Mortality />
      ) : renderComponent === "egg" ? (
        <EggProduction />
      ) : renderComponent === "feed" ? (
        <FeedConsumption />
      ) : null}
    </div>
  );
};

export default StatsContainer;
