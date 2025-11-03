import { Routes, Route, useLocation } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useState } from "react";
import "../UserDashboard/Styles/style.css";
import "./Styles/admin.css";
import AdminSideNavbar from "./Components/AdminSideNavbar";
import AdminTopNavbar from "./Components/AdminTopNavbar";

// Super Admin Pages
import Dashboard from "./Pages/Dashboard";
import ManageUsers from "./Pages/ManageUsers";
import ManageStores from "./Pages/ManageBusiness";
import ManageAdmins from "./Pages/ManageAdmins";
import DisputeResolution from "./Pages/DisputeResolution";
import PlatformSettings from "./Pages/PlatformSettings";
import BroadcastCenter from "./Pages/BroadcastCenter";
import ActivityLogs from "./Pages/ActivityLogs";
import Reports from "./Pages/Reports";
import AdminSettings from "./Pages/AdminSettings";

// User Registration Admin Pages
import NewUserRequests from "./Pages/NewUserRequests";
import KYCReviews from "./Pages/KYCReviews";
import BusinessVerification from "./Pages/BusinessVerification";

import SuspendedAccounts from "./Pages/SuspendedAccounts";

// Support Admin Pages
import SupportTickets from "./Pages/SupportTickets";
import LiveChat from "./Pages/LiveChat";
import ReviewsRatings from "./Pages/ReviewsRatings";
import CustomerFeedback from "./Pages/CustomerFeedback";
import SatisfactionReports from "./Pages/SatisfactionReports";

// Finance Admin Pages
import PayoutRequests from "./Pages/PayoutRequests";
import AffiliateManagement from "./Pages/AffiliateManagement";
import RevenueOverview from "./Pages/RevenueOverview";
import Expenses from "./Pages/Expenses";
import PaymentGateways from "./Pages/PaymentGateways";
import ManageBusiness from "./Pages/ManageBusiness";
import BusinessDetails from "./Pages/BuisnessDetails";
import AdminDisputeDetailPage from "./Pages/AdminDisputeDetailsPage";

const Admin = () => {
  useDocumentTitle("Admin Dashboard");
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // TODO: Get admin role from authentication context
  // For now, defaulting to superAdmin
  const adminRole = 'superAdmin'; // Can be: 'superAdmin', 'userRegistration', 'support', 'finance'

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="dashboard-body">
      <div className="dashboard-grid">
        <AdminSideNavbar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          adminRole={adminRole}
        />

        <div className="main-dashboard">
          <AdminTopNavbar
            onToggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div className="body-dash">
            <Routes>
              {/* Super Admin Routes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manage-users" element={<ManageUsers />} />
              <Route path="/manage-Business" element={<ManageBusiness />} />
              <Route path="/manage-Business/:id" element={<BusinessDetails />} />

              <Route path="/manage-admins" element={<ManageAdmins />} />
              <Route path="/disputes" element={<DisputeResolution />} />
              <Route path="/disputes/:id" element={<AdminDisputeDetailPage />} />
              <Route path="/platform-settings" element={<PlatformSettings />} />
              <Route path="/broadcast" element={<BroadcastCenter />} />
              <Route path="/activity-logs" element={<ActivityLogs />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<AdminSettings />} />

              {/* User Registration Admin Routes */}
              <Route path="/new-user-requests" element={<NewUserRequests />} />
              <Route path="/kyc-reviews" element={<KYCReviews />} />
              <Route path="/business-verification" element={<BusinessVerification />} />

              <Route path="/suspended-accounts" element={<SuspendedAccounts />} />

              {/* Support Admin Routes */}
              <Route path="/support-tickets" element={<SupportTickets />} />
              <Route path="/live-chat" element={<LiveChat />} />
              <Route path="/reviews-ratings" element={<ReviewsRatings />} />
              <Route path="/customer-feedback" element={<CustomerFeedback />} />
              <Route path="/satisfaction-reports" element={<SatisfactionReports />} />

              {/* Finance Admin Routes */}
              <Route path="/payout-requests" element={<PayoutRequests />} />
              <Route path="/affiliate-management" element={<AffiliateManagement />} />
              <Route path="/revenue-overview" element={<RevenueOverview />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/payment-gateways" element={<PaymentGateways />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
