import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from '../Pages/admin/AdminDashBoard';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      {/* Add more admin routes here */}
    </Routes>
  );
};

export default AdminRoutes;
