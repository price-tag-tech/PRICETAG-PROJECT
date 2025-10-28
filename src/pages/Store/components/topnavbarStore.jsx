import React from 'react';
import { IconSearch, IconLogout, IconDots, IconX, IconMenu2, IconGrid4x4 } from '@tabler/icons-react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const StoreTopBar = ({ onMenuClick }) => {

  const navigate = useNavigate();
  return (
    <div className="emk-topnav">
      {/* Menu Button for Mobile */}
      <div className="close-btn-emk" onClick={onMenuClick}>
        <IconMenu2 size={20} /> 
      </div>

      {/* Search Bar */}
      <div className="store-search-container">
        <IconSearch size={20} className="store-search-icon" />
        <input 
          type="text" 
          placeholder="Search for Products and Services" 
          className="store-search-input"
        />
      </div>

      {/* Right Section */}
      <div className="store-topbar-right">

        {/* Dashboard Button */}
       <Link to="/user-dashboard" className="store-dashboard-btn">
          <IconGrid4x4 size={18} />
          <span>Dashboard</span>
        </Link>
        <button className="store-logout-btn">
          <IconLogout size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default StoreTopBar;