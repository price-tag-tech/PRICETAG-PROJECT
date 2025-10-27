import React from 'react';
import { IconSearch, IconLogout, IconDots, IconX, IconMenu2 } from '@tabler/icons-react';

const StoreTopBar = ({ onMenuClick }) => {
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
        {/* Logout Button */}
        <button className="store-logout-btn">
          <IconLogout size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default StoreTopBar;