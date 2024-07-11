import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PartnerDashboard from '../Pages/partner/dashboard/PartnerDashBoard';
import BasicInfo from '../components/partner/basicInfo';
import Services from '../components/partner/Services';

const PartnerRoutes = () => {
  return (
    <Routes>
      <Route path="/partner/dashboard" element={<PartnerDashboard />} />
      <Route path="/partner-details" element={<BasicInfo />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default PartnerRoutes;
