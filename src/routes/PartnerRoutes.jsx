// src/routes/PartnerRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PartnerDashboard from '../Pages/partner/dashboard/PartnerDashBoard';
import BasicInfo from '../components/partner/basicInfo';
import Services from '../components/partner/Services';
import TeamSize from '../components/partner/TeamSize';
import Location from '../components/partner/Location';
import VerifyData from '../components/partner/VerifyData'

const PartnerRoutes = () => {
  return (
    <Routes>
      <Route path="/partner/dashboard/*" element={<PartnerDashboard />} />
      <Route path="/partner-details" element={<BasicInfo />} />
      <Route path="/services" element={<Services />} />
      <Route path='/teamSize' element={<TeamSize />} />
      <Route path='/location' element={<Location />} />
      <Route path='/verify-page' element={<VerifyData />} />
    </Routes>
  );
};

export default PartnerRoutes;
