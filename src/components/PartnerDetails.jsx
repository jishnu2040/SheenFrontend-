import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PartnerDetails = () => {
  const [partnerData, setPartnerData] = useState({
    business_name: '',
    website: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPartnerData({
      ...partnerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/auth/partner-details/', partnerData);
      const { message } = response.data;

      if (response.status === 201) {
        toast.success(message);
        setErrors({});
        setTimeout(() => {
          navigate('/verify'); // Redirect to email verification page
        }, 1000);
      }
    } catch (error) {
      console.error('Error adding partner details:', error);
      if (error.response && error.response.data) {
        setErrors(error.response.data);
        toast.error(error.response.data.message || 'An error occurred. Please try again.');
      } else if (error.request) {
        toast.error('No response from the server. Please try again.');
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Partner Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="business_name" className="block text-gray-700 font-medium mb-2">Business Name</label>
            <input
              type="text"
              id="business_name"
              name="business_name"
              value={partnerData.business_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.business_name && <p className="text-red-500 text-sm">{errors.business_name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
            <input
              type="url"
              id="website"
              name="website"
              value={partnerData.website}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit Partner Details
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default PartnerDetails;
