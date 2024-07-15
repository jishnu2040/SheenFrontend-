// PartnerListView.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PartnerListView = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/partner/list-partner/');
        setPartners(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold mb-4">List of Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {partners.map(partner => (
          <div key={partner.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{partner.business_name}</h3>
            <p className="text-gray-600 mb-2">{partner.website}</p>
            <p className="text-gray-700 mb-2">Team Size: {partner.team_size}</p>
            <p className="text-gray-700 mb-2">Location: {partner.location}</p>
            <div className="flex flex-wrap">
              {partner.service_type.map(service => (
                <span key={service.id} className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-2 mb-2">
                  {service.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerListView;
