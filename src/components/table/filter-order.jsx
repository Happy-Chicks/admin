import React from "react";

const FilterOrder = ({ sortValue, setSortOrder, sortOrder }) => {
  return (
    <>
      {/* <h6 className="mb-3 text-sm font-medium text-gray-900 ">Choose Order</h6> */}
      <ul className=" flex text-sm space-x-2">
        <li className="flex items-center">
          <input
            id="asc"
            type="radio"
            disabled={!sortValue}
            onChange={(e) => {
              setSortOrder("asc");
            }}
            name="order"
            checked={sortOrder === "asc" || sortOrder === ""}
            value={sortOrder}
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 "
          />
          <label
            htmlFor="asc"
            className={
              !sortValue
                ? "ml-2 text-sm font-medium text-gray-400 "
                : "ml-2 text-sm font-medium text-gray-900 "
            }
          >
            Asc
          </label>
        </li>
        <li className="flex items-center">
          <input
            id="desc"
            type="radio"
            name="order"
            onChange={(e) => {
              setSortOrder("desc");
            }}
            value={sortOrder}
            disabled={!sortValue}
            checked={sortOrder === "desc"}
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500   focus:ring-2 "
          />
          <label
            htmlFor="desc"
            className={
              !sortValue
                ? "ml-2 text-sm font-medium text-gray-400 "
                : "ml-2 text-sm font-medium text-gray-900 "
            }
          >
            Desc
          </label>
        </li>
      </ul>
    </>
  );
};

export default FilterOrder;
