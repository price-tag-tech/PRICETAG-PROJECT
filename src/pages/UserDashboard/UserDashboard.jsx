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

const UserDashboard = () => {
  useDocumentTitle("Dashboard");
  const location = useLocation();

  return (
    <div className="dashboard-body">
      <div className="dashboard-grid">
        <SideNavbar />
        <div className="main-dashboard">        
          <TopNavbar />
          <div className="body-dash">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/orders" element={<OrdersAndPurchases />} />
              <Route path="/affiliate" element={<AffiliateEarningsPage />} />
              <Route path="/notifications" element={<Notifications/>} />
              <Route path="/settings" element={<ProfileSettings/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;