import { tableBody } from "../../constants/tableBody";
import { useRef, useState } from "react";
import useTable from "../../hooks/usePages";

// import CircularProgressIndicator from "../circular-progress-indicator/circular-progress-indicator";
import FilterTab from "./filter-tab";
import SearchInput from "./search-input";
import TablePagination from "./table-pagination";
import PerPage from "./per-page";
import {
  getFirstKeyValuePair,
  objectsToArrayOfArrays,
} from "../../constants/easy";
// import StatusButton from "../buttons/status-button";
// import CSVExport from "../csv-export/csv-export";

const SortTable = ({
  headings, //List of table headings
  data, //List of table data
  loading, //Loading state
  action = true, //Action buttons required
  type, //Data type to map on table body
  searchType, //Data type to search by
  sn = -1,
  title = "",
  customStatus = "",
  sortObject = {},
  handleView,
  showCsv = true,
  dataToExport = null,
  headingsToExport = null,
  csvName = null,
}) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortValue, setSortValue] = useState("");
  const [searchBy, setSearchBy] = useState(
    searchType || getFirstKeyValuePair(sortObject)?.value
  );
  const rowsRef = useRef();
  const searchRef = useRef();

  const pageNumbers = [10, 15, 20, 25, 50];

  const { slice, range, baseIndex } = useTable(
    data,
    page,
    rowsPerPage,
    sortOrder,
    sortValue
  );

  const handleChange = () => {
    const { value } = searchRef.current;
    if (value !== "") {
      setPage(1);
      if (rowsRef?.current?.value) rowsRef.current.value = data?.length;
      setRowsPerPage(data?.length);
    } else {
      if (rowsRef?.current?.value) rowsRef.current.value = 10;
      setRowsPerPage(10);
    }
    setSearch(value.toLowerCase());
  };

  return (
    <>
      <div
        className={`h-full shadow bg-white 
           border rounded-md my-2`}
      >
        {title && (
          <h1 className="text-xl font-semibold text-blue-900 p-5">{title}</h1>
        )}
        <hr />
        <div className="flex ">
          <div className="w-full rounded-t-lg bg-white py-5 flex flex-col space-y-5 ">
            <div className="flex justify-between sm:items-center flex-col sm:flex-row">
              <div className="flex items-center  ">
                <div className=" flex md:flex-row flex-col md:space-x-5 md:items-center px-5 space-y-5 md:space-y-0">
                  <SearchInput
                    searchRef={searchRef}
                    handleChange={handleChange}
                    searchType={searchType}
                    sortObject={sortObject}
                    searchBy={searchBy}
                    setSearchBy={setSearchBy}
                  />
                </div>

                <FilterTab
                  sortObject={sortObject}
                  sortValue={sortValue}
                  setSortValue={setSortValue}
                  setSortOrder={setSortOrder}
                  sortOrder={sortOrder}
                />
              </div>

              {/* CSV DATA SHOULD BE AN ARRAY OF ARRAY */}
              {/* {showCsv && headings?.length && (
                <CSVExport
                  csvData={dataToExport || objectsToArrayOfArrays(data)}
                  headings={headingsToExport || headings}
                  fileName={csvName}
                />
              )} */}
            </div>
          </div>
        </div>
        <div className="">
          <div className="overflow-x-auto rounded-b-lg relative bg-white">
            <table className="overflow-x-scroll table-auto w-full">
              <thead className="text-left uppercase bg-gray-50">
                <tr>
                  <th
                    className="px-3 py-3 border-b border-gray-200 text-left text-xs  text-blue-900"
                    scope="col"
                  >
                    #
                  </th>
                  {headings?.map((item, index) => {
                    return (
                      <th
                        key={index}
                        className="px-3 py-3 border-b border-gray-200 text-left text-xs  text-blue-900"
                        scope="col"
                      >
                        {item}
                      </th>
                    );
                  })}
                  {action && (
                    <th
                      className="px-3 py-3 border-b  text-left text-xs  text-blue-900 tracking-wider"
                      scope="col"
                    >
                      Action
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="9" className="my-100 border-spacing-y-7">
                      <div className="w-full my-4 bg-opacity-60 flex justify-center items-center">
                        {/* <CircularProgressIndicator size="lg" /> */}
                      </div>
                    </td>
                  </tr>
                ) : slice?.length === 0 ? (
                  <tr>
                    <td
                      colSpan="12"
                      className="text-center text-sm font-sm font-arial-rounded text-blue-900 py-2 h-40"
                    >
                      There are no records to show
                    </td>
                  </tr>
                ) : (
                  slice
                    ?.filter((item) => {
                      if (search !== "") {
                        return item[searchBy]
                          ?.toLowerCase()

                          ?.includes(search.toLowerCase());
                      } else {
                        return item;
                      }
                    })
                    ?.map((item, index) => {
                      return (
                        <tr key={index} className="border-b">
                          <td className="px-3 py-3 text-sm text-gray-700">
                            {(sn === -1 && baseIndex + index + 1) || index + 1}
                          </td>
                          {tableBody[type]?.map((bodyType, index) => {
                            if (
                              bodyType?.toLowerCase() === "status" ||
                              customStatus
                            ) {
                              return (
                                <td
                                  key={index}
                                  className="px-3 py-3 text-sm text-gray-700"
                                >
                                  {/* <StatusButton status={item[bodyType]} /> */}
                                </td>
                              );
                            }

                            return (
                              <td
                                key={index}
                                className="px-3 py-3 text-sm text-gray-700"
                              >
                                {item[bodyType]}
                              </td>
                            );
                          })}

                          {action && (
                            <td className="flex px-3 py-3 text-sm text-gray-700 space-x-2">
                              {type === "organizations" ||
                                ("requests" && (
                                  <button
                                    onClick={() => handleView(item)}
                                    className="cursor-pointer text-[#162899] border-[#162899] border py-1 px-2 rounded-md hover:text-white hover:bg-[#162899] transition-all duration-300"
                                  >
                                    <span>View</span>
                                  </button>
                                ))}
                            </td>
                          )}
                        </tr>
                      );
                    })
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan="9"
                    className="text-left md:text-right justify-between items-center md:p3"
                  >
                    <div className="flex justify-between">
                      <PerPage
                        pageNumbers={pageNumbers}
                        setPage={setPage}
                        setRowsPerPage={setRowsPerPage}
                        rowsRef={rowsRef}
                        data={data}
                      />
                      <TablePagination
                        slice={slice}
                        page={page}
                        setPage={setPage}
                        range={range}
                      />
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortTable;
