import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast for notifications

const VerifyData = () => {
  const {
    userId,
    businessName,
    websiteName,
    serviceType,
    employeeNumber,
    location,
    selectedTeamSize,
  } = useSelector((state) => state.partner);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/partner/create-partner/', {
        user: userId,
        business_name: businessName,
        website: websiteName,
        service_type: serviceType,
        team_size: parseInt(selectedTeamSize), // Ensure team_size is an integer
        location: location,
      });

      if (response.status === 201) {
        toast.success("Account created successfully");
        console.log('Partner creation successful:', response.data);
        alert('Partner data submitted successfully!');
        navigate('/partner/dashboard');
      }
    } catch (error) {
      console.error('Error creating partner:', error.message);
      toast.error('Failed to submit partner data. Please try again later.');
      alert('Failed to submit partner data. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Verify Data</h2>
        <div className="mb-4">
          <p><strong>User ID:</strong> {userId}</p>
          <p><strong>Business Name:</strong> {businessName}</p>
          <p><strong>Website Name:</strong> {websiteName}</p>
          <p><strong>Service Type:</strong> {serviceType.join(', ')}</p>
          <p><strong>Selected Team Size:</strong> {selectedTeamSize}</p>
          <p><strong>Location:</strong> {location}</p>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Verify and Submit Data
        </button>
      </div>
    </div>
  );
};

export default VerifyData;
