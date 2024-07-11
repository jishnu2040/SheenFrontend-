import React, { useState } from 'react';

const Services = () => {
  // Dummy object for service categories
  const serviceCategories = [
    { id: 1, label: 'Haircut & Styling' },
    { id: 2, label: 'Makeup' },
    { id: 3, label: 'Massage' },
    { id: 4, label: 'Tattoo' },
    { id: 5, label: 'Facial & Skincare' },
    { id: 6, label: 'Spa' },
    { id: 7, label: 'Other+' },
  ];

  // State to track selected services
  const [selectedServices, setSelectedServices] = useState([]);

  // Function to handle service selection
  const handleServiceSelect = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  // Function to submit selected services (dummy implementation)
  const handleSubmit = () => {
    const selectedServiceLabels = selectedServices.map(id => serviceCategories.find(service => service.id === id).label);
    console.log('Selected Services:', selectedServiceLabels);
    // Handle submission logic here (e.g., dispatch to Redux, API call)
    alert('Services submitted!'); // Replace with actual logic
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceCategories.map(service => (
            <div key={service.id} className="border p-4 rounded-lg cursor-pointer hover:bg-gray-200">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  checked={selectedServices.includes(service.id)}
                  onChange={() => handleServiceSelect(service.id)}
                />
                <span className="ml-2">{service.label}</span>
              </label>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit Services
        </button>
      </div>
    </div>
  );
};

export default Services;
