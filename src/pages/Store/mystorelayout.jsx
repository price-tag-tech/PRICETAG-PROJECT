import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StoreDashboard from './pages/StoreDashboard';
import StoreSidebar from './components/sideNavbarStor';
import StoreTopBar from './components/topnavbarStore';
import "./css/style.css"

const StoreLayout = () => {
  return (
    <div className="dashboard-body">
      <div className="dashboard-grid">
        <StoreSidebar />
        <div className="main-dashboard">
          <StoreTopBar />
          <div className="body-dash">
            <Routes>
              <Route path="/" element={<StoreDashboard />} />
              <Route path="/products" element={<div>Products Page</div>} />
              <Route path="/orders" element={<div>Orders Page</div>} />
              <Route path="/inventory" element={<div>Inventory Page</div>} />
              <Route path="/customers" element={<div>Customers Page</div>} />
              <Route path="/messages" element={<div>Messages Page</div>} />
              <Route path="/profile" element={<div>Profile Page</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};


export default StoreLayout;