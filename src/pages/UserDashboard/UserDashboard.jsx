import { Router, Routes, Route } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import "./Styles/style.css";
import SideNavbar from "./Components/SideNavbar";
import TopNavbar from "./Components/TopNavbar";


const UserDashboard = () => {

  useDocumentTitle("Dashboard");

  return (
    <div className="dashboard-body">
      <div className="dashboard-grid">
        <SideNavbar/>
        <div className="main-dashboard">
          <TopNavbar />
          <div className="body-dash">
            <Routes>


            </Routes>
          </div>

        </div>


      </div>
     



    </div>
  );
};

export default UserDashboard;
