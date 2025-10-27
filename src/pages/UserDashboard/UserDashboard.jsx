import { Routes, Route, useLocation } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import "./Styles/style.css";
import SideNavbar from "./Components/SideNavbar";
import TopNavbar from "./Components/TopNavbar";
import Overview from "./Pages/overview";
import OrdersAndPurchases from "./Pages/PurchasesAndOrders";
import AffiliateEarningsPage from "./Pages/AffiliateEarnings";
import Notifications from "./Pages/notification";
import ProfileSettings from "./Pages/ProfileSettings";
import { useState } from "react";
import CreateStorePage from "./Pages/CreateStore";

const UserDashboard = () => {
  useDocumentTitle("Dashboard");
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="dashboard-body">
      <div className="dashboard-grid">
        <SideNavbar 
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />
        
        <div className="main-dashboard">        
          <TopNavbar 
            onToggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div className="body-dash">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/orders" element={<OrdersAndPurchases />} />
              <Route path="/affiliate" element={<AffiliateEarningsPage />} />
              <Route path="/notifications" element={<Notifications/>} />
              <Route path="/settings" element={<ProfileSettings/>} />
              <Route path="/create-store" element={<CreateStorePage/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;