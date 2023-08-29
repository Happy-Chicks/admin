import { useState } from "react";
import RecordTable from "./table/record-table";
const ShedRecordsModal = ({ setShowModal, data }) => {
  return (
    <div
      id="container"
      onClick={(e) => {
        if (e.target.id === "container") setShowModal(false);
      }}
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center "
    >
      <div className="bg-white flex flex-col justify-center items-center py-20 px-10 gap-5 z-20">
        <RecordTable data={data} />
      </div>
    </div>
  );
};

export default ShedRecordsModal;
