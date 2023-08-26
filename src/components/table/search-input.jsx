import { getFirstKeyValuePair, getKeyByValue } from "../../constants/easy";
import { useClickOutside } from "../../hooks/useClickOutside";
import React, { useRef, useState } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const SearchInput = ({
  searchRef,
  handleChange,
  searchType,
  sortObject,
  searchBy,
  setSearchBy,
}) => {
  const [showList, setShowList] = useState(false);
  const [searchText, setSearchText] = useState(
    getKeyByValue(sortObject, searchBy)
      ?.replace(/_/g, " ")
      .replace(/\b\w/g, (match) => match.toUpperCase())
  );
  const dropdownRef = useRef(null);
  const hideList = () => {
    setShowList(false);
  };
  useClickOutside(dropdownRef, hideList);

  return (
    <div className="flex">
      <div className="relative w-full">
        <button
          id="dropdown-button"
          className=" flex-shrink-0 z-10 w-full inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
          type="button"
          onClick={() => setShowList(!showList)}
        >
          Search by
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {showList && (
          <div
            id="dropdown"
            ref={dropdownRef}
            className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow min-w-44 w-max "
          >
            <ul className="py-2 text-sm text-gray-700 ">
              {sortObject &&
                Object.entries(sortObject)?.map(([key, value]) => {
                  return (
                    <li
                      key={key}
                      onClick={() => {
                        setSearchBy(value);
                        setSearchText(
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
                      {searchBy === value && (
                        <IoCheckmarkDoneCircleOutline className="mx-2 text-primary text-xl" />
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>

      <div className="relative w-full">
        <input
          type="search"
          ref={searchRef}
          id="search-field"
          name="search-field"
          onChange={handleChange}
          className="block p-2.5 w-full md:min-w-[250px] z-20 text-sm text-gray-900  rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300  focus:ring-4 focus:outline-none focus:ring-gray-100   "
          placeholder={`Search by ${searchText || "..."}`}
        />
      </div>
    </div>
  );
};

export default SearchInput;

