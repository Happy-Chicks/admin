import React from "react";
import egg from "../assets/images/eggs.png";
import Image from "next/image";
import chicken from "../assets/images/chicken.png";
import boom from "../assets/images/boomerang.png";

const StatsContainer = () => {
  return (
    <div className="w-full flex flex-col ">
      {/* navigation container */}
      <div className="w-full flex  justify-center">
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

      {/*  */}
      <div className="flex flex-col">
        <div className="flex flex-row m-5 justify-between ">
          <div className=" bg-ShedBackground w-72 h-40 px-5">
            <div className="flex flex-row justify-between">
              <p className="text-white text-base font-semibold space-x-6 pt-5">
                {" "}
                Sheds in Total
              </p>
              <Image src={egg} alt="eggs" width={85.727} height={58.142} />
            </div>
            <div className="flex space-x-6 ">
              <p className="text-white text-6xl font-bold flex flex-col">
                40<span className="text-sm">sheds</span>
              </p>
              <div className="pt-5">
                <p className="text-xs font-medium text-white ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                  dicta.
                </p>
              </div>
            </div>
          </div>
          {/* rate card  */}
          <div className="w-72 h-40  flex justify-between">
            <div className=" flex flex-col">
              <p className=" text-Text text-3xl w-10 font-semibold">
                Mortality Rates
              </p>
              <div className="flex space-x-2 ">
                <div className="w-14 h-14 rounded-full bg-ShedBackground flex flex-col justify-center items-center ">
                  <p className="text-center text-xs font-bold text-deathColor ">
                    50
                  </p>
                  <div className="text-center text-xs font-bold text-deathColor">
                    deaths
                  </div>
                </div>
                <div className="w-14 h-14 rounded-full bg-deathColor flex flex-col justify-center items-center ">
                  <p className="text-center text-xs font-bold text-ShedBackground ">
                    50
                  </p>
                  <div className="text-center text-xs font-bold text-ShedBackground">
                    deaths
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-bl-[50%] overflow-hidden">
              <Image
                src={chicken}
                alt="chicken"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="w-72 h-40 px-5 bg-reportBackground flex justify-between">
            <div className="flex flex-col m-2 space-y-3">
              <p className="text-sm font-semibold text-white">Reported By</p>
              <div className="w-20 h-20 rounded-full bg-[#D9D9D9]  border-4 border-white"></div>
              <p className="text-sm text-white font-semibold">Adams Martey</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <ul className="list-disc p-4">
                <li className="text-xs text-white">15% of all reports</li>
                <li className="text-xs text-white">15% of all reports</li>
              </ul>
              <div>
                <Image src={boom} alt="boomerang" sizes="20" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 px-5">
          {[1, 2, 3, 4, 5, 6]?.map((i, index) => (
            <div
              className={`bg-reportBackground flex flex-col w-32 h-32 px-4 py-2 mt-5 justify-between ${
                index === 4 || index === 5 ? "ml-auto" : ""
              }`}
            >
              <p className="text-white text-xs font-bold">Shed {index}</p>
              <p className="text-center text-white text-4xl font-bold">40%</p>
              <p className="text-white text-xs">34 deaths reported</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;
