import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { ENDPOINTS } from "../constants/endpoints";
import { shedAxios } from "../tools/libraries/axios";

const ShedForm = ({ close }) => {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  console.log(token);

  const [form, setForm] = useState({
    farmerId: "",
    numberOfBirds: "",
    dailyFeedQuantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  };

  const createShed = () => {
    console.log(form);
    shedAxios
      .post(ENDPOINTS.CREATE_SHED, form, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        console.log(result.data);
        close();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="bg-white p-8 rounded border border-gray-200">
        <h1 className="font-medium text-3xl">Add Shed</h1>
        <div>
          <div className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="number"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Farmer ID
              </label>
              <input
                type="text"
                name="farmerId"
                onChange={handleChange}
                id="name"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter farmer ID"
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Number of Birds
              </label>
              <input
                type="text"
                name="numberOfBirds"
                onChange={handleChange}
                id="numberOfBirds"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter number of birds"
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Daily Feed Quantity
              </label>
              <input
                type="text"
                name="dailyFeedQuantity"
                onChange={handleChange}
                id="dailyFeedQuantity"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter Daily Feed Quantity"
              />
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                createShed();
              }}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Save
            </button>
            <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShedForm;
