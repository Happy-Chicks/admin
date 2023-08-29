import React from "react";
import Head from "next/head";
import TopBar from "../topbar";
import SortTable from "./sort-table";
import { tableHeadings } from "../../constants/tableHeadings";

const RecordTable = ({ data }) => {
  return (
    <>
      <div className="w-full h-[87%] overflow-y-scroll mt-[1.5%]">
        <div className="h-full">
          <SortTable
            headings={tableHeadings.recordHeadings}
            data={data}
            type={"recordBody"}
          />
        </div>
      </div>
    </>
  );
};

export default RecordTable;
