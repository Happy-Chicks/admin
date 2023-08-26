import { useState, useEffect } from "react";

const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data?.length / rowsPerPage);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data, page, rowsPerPage) => {
  return data?.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data, page, rowsPerPage, sortOrder, sortValue) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);
  const [baseIndex, setBaseIndex] = useState(0);

  function sortArrayByObjectKey(array, key = "", isDescending = false) {
    if (!key) {
      return array;
    }

    const orderFactor = isDescending ? -1 : 1;

    return array.slice().sort((a, b) => {
      const valueA = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
      const valueB = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];

      // Handle undefined or null values
      if (valueA === undefined || valueA === null) {
        return 1 * orderFactor;
      }
      if (valueB === undefined || valueB === null) {
        return -1 * orderFactor;
      }

      if (valueA < valueB) {
        return -1 * orderFactor;
      }
      if (valueA > valueB) {
        return 1 * orderFactor;
      }
      return 0;
    });
  }

  useEffect(() => {
    const sortedData = sortArrayByObjectKey(
      data,
      sortValue,
      sortOrder === "asc" ? false : true
    );
    const range = calculateRange(sortedData, rowsPerPage);
    setTableRange([...range]);
    setBaseIndex((page - 1) * rowsPerPage);

    const slice = sliceData(sortedData, page, rowsPerPage);
    slice && setSlice([...slice]);
  }, [data, setTableRange, page, setSlice, rowsPerPage, sortOrder, sortValue]);

  return { slice, range: tableRange, baseIndex };
};

export default useTable;
