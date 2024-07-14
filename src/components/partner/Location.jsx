import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLocation } from '../../Redux/slices/partnerSlice';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const dispatch = useDispatch();
  const [locationString, setLocationString] = useState('');

  const navigate = useNavigate();

  const handleLocationChange = (e) => {
    setLocationString(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setLocation(locationString));
    alert('Location submitted!'); // Replace with actual logic

    setTimeout(() => {
      navigate('/verify-page')
    }, 2000);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Location</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter Location
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="e.g., hsr, bangalore"
            value={locationString}
            onChange={handleLocationChange}
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit Location
        </button>
      </div>
    </div>
  );
};

export default Location;
