import React from "react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ENDPOINTS } from "../constants/endpoints";
import { authAxios } from "../tools/libraries/axios";

const FarmManagerForm = ({ close }) => {
  const { data: session } = useSession();
  const [form, setForm] = useState({
    lastName: "",
    otherNames: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
  });

  const token = session?.user?.accessToken;
  console.log(token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  };

  const createFarmManager = () => {
    console.log(form);
    authAxios
      .post(ENDPOINTS.CREATE_FARM_MANAGER, form, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        console.log(result.data);

        close();
        // setFarmers(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="p-8 bg-white rounded border border-gray-200">
        <h1 className="font-medium text-3xl">Add Farm Manager</h1>
        <div>
          <div className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="name"
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter farmer last name"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Other Names
              </label>
              <input
                type="text"
                name="otherNames"
                onChange={handleChange}
                id="name"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter farmer other names"
              />
            </div>
            <div>
              <label
                for="email"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Email Adress
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="farmer@gmail.com"
              />
            </div>
            <div>
              <label
                for="job"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label
                for="address"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Address"
              />
            </div>
            <div>
              <label
                for="password"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="password"
              />
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              onClick={() => {
                createFarmManager();
              }}
              type="submit"
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

export default FarmManagerForm;
