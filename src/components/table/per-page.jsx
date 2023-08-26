import React from "react";

const PerPage = ({ pageNumbers, setPage, setRowsPerPage, rowsRef, data }) => {
  return (
    <div className="flex flex-row space-x-5 items-center px-5">
      <h1 className=" text-blue-900 text-sm min-w-[75px]  ">Per Page</h1>
      <select
        ref={rowsRef}
        onChange={(e) => {
          setPage(1);
          setRowsPerPage(e.target.value);
        }}
        className="text-sm w-full   p-[5px] input focus:ring-4 focus:outline-none focus:ring-gray-100 "
      >
        {pageNumbers?.map((pageNumber, index) => {
          return (
            <option
              key={index}
              value={`${pageNumber}`}
              className="input text-sm w-full"
            >
              {pageNumber}
            </option>
          );
        })}
        <option value={data?.length}>All</option>
      </select>
    </div>
  );
};

export default PerPage;
