import React from "react";

function Search() {
  return (
    <div className="">
      <div className="w-2/3 mx-auto  p-16 gap-3 sm:grid grid-cols-5">
       
        <div className="col-span-2">
          <select
            id="gender"
            name="gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="0">Location </option>
            <option value="1">Bangalore</option>
            <option value="2">HSR Layout</option>
            <option value="3">Other</option>
          </select>
        </div>

        <div className="col-span-2 sm:col-span-2 text-right">
          <input
            type="text"
            placeholder="Search Restaurents."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="name"
            name="name"
          />
        </div>
        <div className="col-span-1 text-center flex justify-end ">
          <button className="bg-blue-500 p-2 px-10 text-white font-bold rounded-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
