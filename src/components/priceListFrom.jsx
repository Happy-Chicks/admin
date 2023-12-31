import React from "react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ENDPOINTS } from "../constants/endpoints";
import { priceListAxios } from "../tools/libraries/axios";

const PriceListForm = ({ close }) => {
  const { data: session } = useSession();
  const [size, setSize] = useState();
  const [price, setPrice] = useState();

  const token = session?.user?.accessToken;
  console.log(token);

  //   useEffect(() => {}, []);

  const createPriceList = () => {
    // console.log(size, price);
    priceListAxios
      .post(
        ENDPOINTS.CREATE_PRICE,
        { crateName: size, cratePrice: price },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        console.log(result.data);

        close();
        // setPriceList(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="bg-white p-8 rounded border border-gray-200">
        <h1 className="font-medium text-3xl">Add Crate Price</h1>
        <form>
          <div className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="number"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Crate Size
              </label>
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setSize(e.target.value);
                }}
                type="text"
                name="name"
                id="name"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter size of crate"
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Crate Price
              </label>
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setPrice(e.target.value);
                }}
                type="text"
                name="name"
                id="name"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter the price"
              />
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              onClick={(e) => {
                e.preventDefault();
                createPriceList();
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
        </form>
      </div>
    </div>
  );
};

export default PriceListForm;
