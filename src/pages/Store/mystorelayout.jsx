// In pages/Store/mystorelayout.js
import React, { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import StoreDashboard from './pages/StoreDashboard';
import StoreSidebar from './components/sideNavbarStor';
import StoreTopBar from './components/topnavbarStore';
import "./css/style.css"
import ProductsServicesPage from './pages/PoductsAndServices';
import OrdersPage from './pages/Orders';
import InventoryPage from './pages/Inventory';
import CustomersPage from './pages/Customers';
import StoreProfilePage from './pages/StoreProfile';

const StoreLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { storeId } = useParams();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-body">
      <div className="dashboard-grid">
        <StoreSidebar 
          isOpen={sidebarOpen} 
          onClose={closeSidebar} 
          storeId={storeId} // Pass storeId to sidebar
        />
        <div className="main-dashboard">
          <StoreTopBar 
            onMenuClick={toggleSidebar} 
            storeId={storeId} // Pass storeId to topbar
          />
          <div className="body-dash">
            <Routes>
              <Route path="/" element={<StoreDashboard storeId={storeId} />} />
              <Route path="/:storeId" element={<StoreDashboard storeId={storeId} />} />
              <Route path="/products" element={<ProductsServicesPage storeId={storeId} />} />
              <Route path="/orders" element={<OrdersPage storeId={storeId} />} />
              <Route path="/inventory" element={<InventoryPage storeId={storeId} />} />
              <Route path="/customers" element={<CustomersPage storeId={storeId} />} />
              <Route path="/profile" element={<StoreProfilePage storeId={storeId} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLayout;