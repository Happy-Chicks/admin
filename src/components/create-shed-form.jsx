import React from "react";

const ShedForm = () => {
  return (
    <div>
      <div className="bg-white p-8 rounded border border-gray-200">
        <h1 className="font-medium text-3xl">Add Shed</h1>
        <form>
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
                name="name"
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
                name="name"
                id="name"
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
                name="email"
                id="email"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter Daily Feed Quantity"
              />
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
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

export default ShedForm;