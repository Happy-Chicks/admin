import React from "react";
import {
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
  HiChevronRight,
  HiChevronLeft,
} from "react-icons/hi";

const TablePagination = ({ page, setPage, slice, range }) => {
  return (
    <div className="items-center space-y-2 text-sm justify-end sm:space-y-0 text-blue-900 sm:space-x-3 sm:flex my-[10px] mx-5 ">
      <span className="block">
        Page {page} of {range.length}
      </span>
      <div className="space-x-1">
        <button
          onClick={() => {
            if (page > 1) {
              setPage(1);
            }
          }}
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow hover:bg-gray-50 active:scale-[90%] "
        >
          <HiChevronDoubleLeft />
        </button>
        <button
          title="previous"
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow hover:bg-gray-50 active:scale-[90%] "
        >
          <HiChevronLeft />
        </button>

        <button
          title="next"
          type="button"
          onClick={() => {
            if (page < range?.length) {
              setPage(page + 1);
            }
          }}
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow hover:bg-gray-50 active:scale-[90%] "
        >
          <HiChevronRight />
        </button>
        <button
          onClick={() => {
            if (page < range?.length) {
              setPage(range.length);
            }
          }}
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow hover:bg-gray-50 active:scale-[90%] "
        >
          <HiChevronDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;

{
  /* <div className="flex justify-start -p-10 items-center md:flex md:justify-start md:items-center mt-[20px]">
<div className="ml-5 flex">
  <BsChevronDoubleLeft
    onClick={() => {
      if (page > 1) {
        setPage(1);
      }
    }}
    className="mx-2 w-2 h-2 font-bold hover:text-gray-500 rounded-full text-gray-700 cursor-pointer"
  />
  <BsChevronLeft
    onClick={() => {
      if (page > 1) {
        setPage(page - 1);
      }
    }}
    className="mx-2 w-2 h-2 font-bold hover:text-gray-500 rounded-full text-gray-700 cursor-pointer"
  />
  <p className="bg-[#F1F2F9] px-2 py-1 relative top-[-10px] text-blue-800">
    {slice?.length ? page : 0}
  </p>
  <BsChevronRight
    onClick={() => {
      if (page < range?.length) {
        setPage(page + 1);
      }
    }}
    className="mx-2 w-2 h-2 font-bold hover:text-gray-500 rounded-full text-gray-700 cursor-pointer"
  />
  <BsChevronDoubleRight
    onClick={() => {
      if (page < range?.length) {
        setPage(range.length);
      }
    }}
    className="mx-2 w-2 h-2 font-bold hover:text-gray-500 rounded-full text-gray-700 cursor-pointer"
  />
</div>
</div> */
}

/////////second one //////////

{
  /* <div className="items-center space-y-2 text-sm justify-end sm:space-y-0 sm:space-x-3 sm:flex my-[10px] mx-5 ">
<span className="block">Page 2 of 4</span>
<div className="space-x-1">
  <button
    title="previous"
    type="button"
    className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
  >
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
  <button
    title="next"
    type="button"
    className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
  >
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>
</div>
</div> */
}

// THREE
{
  /* <nav className="inline-flex -space-x-px rounded-md shadow-sm my-2">
<button
  type="button"
  onClick={() => {
    if (page > 1) {
      setPage(1);
    }
  }}
  className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
</button>
{pageNumbers.map((pageNumber) => {
  return (
    <button
      key={pageNumber}
      type="button"
      aria-current="page"
      className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-300 "
    >
      {pageNumber}
    </button>
  );
})}

<button
  type="button"
  className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md "
  onClick={() => {
    if (page < range?.length) {
      setPage(range.length);
    }
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
</button>
</nav> */
}
