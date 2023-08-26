import React, { useRef, useState } from "react";
import FilterOrder from "./filter-order";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { BiSolidSortAlt } from "react-icons/bi";
import { useClickOutside } from "../../hooks/useClickOutside";

const FilterTab = ({
  sortObject,
  sortValue,
  setSortOrder,
  sortOrder,
  setSortValue,
}) => {
  const [showList, setShowList] = useState(false);
  const [sortText, setSortText] = useState("");
  const dropdownRef = useRef(null);
  const hideList = () => {
    setShowList(false);
  };
  useClickOutside(dropdownRef, hideList);

  return (
    <div className="hidden sm:block relative">
      <button
        className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200    "
        type="button"
        onClick={() => setShowList(!showList)}
      >
        <BiSolidSortAlt className="mr-2 text-gray-400" />

        {sortText || "Sort By"}
        <svg
          className="-mr-1 ml-1.5 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          />
        </svg>
      </button>
      {showList && (
        <div
          ref={dropdownRef}
          className="z-10 my-2     absolute w-48 p-3 bg-white rounded-lg shadow "
        >
          <FilterOrder
            sortValue={sortValue}
            setSortOrder={setSortOrder}
            sortOrder={sortOrder}
          />
          <hr className="mt-2" />
          <ul className="py-1 text-sm  text-gray-700 ">
            <li
              onClick={() => {
                setSortValue("");
                setSortText("");
                setShowList(false);
              }}
              className="cursor-pointer flex justify-between items-center hover:bg-gray-100"
            >
              <span href="#" className="block py-2 px-4  ">
                Default
              </span>
              {sortValue === "" && (
                <IoCheckmarkDoneCircleOutline className="mx-2 text-primary text-xl" />
              )}
            </li>
            {sortObject &&
              Object.entries(sortObject)?.map(([key, value]) => {
                return (
                  <li
                    key={key}
                    onClick={() => {
                      setSortValue(value);
                      setSortText(
                        key
                          .replace(/_/g, " ")
                          .replace(/\b\w/g, (match) => match.toUpperCase())
                      );
                      setShowList(false);
                    }}
                    className="cursor-pointer flex justify-between items-center hover:bg-gray-100"
                  >
                    <span href="#" className="block py-2 px-4   ">
                      {key
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (match) => match.toUpperCase())}
                    </span>
                    {sortValue === value && (
                      <IoCheckmarkDoneCircleOutline className="mx-2 text-primary text-xl" />
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterTab;

{
  /* <div className="hidden md:block space-y-2 w-full">
                <div className="w-full flex flex-col md:flex-row md:space-x-5 md:items-center px-5 space-y-5 md:space-y-0">
                  <h1 className=" text-blue-900 text-sm ">Sort</h1>
                  <div className="flex space-x-2 w-full">
                    <select
                      value={sortValue}
                      onChange={(e) => {
                        setSortValue(e.target.value);
                      }}
                      className="text-xs py-3  focus:shadow-sm focus:outline-none  force-rounded input w-full "
                    >
                      <option
                        value={""}
                        className="input text-sm w-full rounded-r-none"
                      >
                        Default
                      </option>

                      {sortObject &&
                        Object.entries(sortObject)?.map(([key, value]) => {
                          return (
                            <option
                              key={key}
                              value={value}
                              className="input text-sm w-full"
                            >
                              {key
                                .replace(/_/g, " ")
                                .replace(/\b\w/g, (match) =>
                                  match.toUpperCase()
                                )}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <select
                    className={`${
                      sortValue ? "bg-white" : "bg-[#F0F2F4]"
                    } flex force-margin focus:shadow-sm focus:outline-none  border-l-transparent space-between py-[12px] px-2 force-margin rounded-r-lg border border-gray-300  text-xs `}
                    value={sortOrder}
                    disabled={!sortValue}
                    onChange={(e) => {
                      setSortOrder(e.target.value);
                    }}
                  >
                    <option value={"asc"}>Asc</option>
                    <option value={"desc"}>Des</option>
                  </select>
                </div>
              </div> */
}
