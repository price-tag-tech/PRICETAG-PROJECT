import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconHome, IconPackage, IconShoppingCart, IconChartBar, IconUsers, IconMessage, IconUser, IconCopy } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom'; 
import Logo from "../../../assets/images/logo.png"
const StoreSidebar = () => {
  const menuItems = [
    { path: '/store', icon: IconHome, label: 'Dashboard' },
    { path: '/store/products', icon: IconPackage, label: 'Products/Services' },
    { path: '/store/orders', icon: IconShoppingCart, label: 'Orders' },
    { path: '/store/inventory', icon: IconChartBar, label: 'Inventory' },
    { path: '/store/customers', icon: IconUsers, label: 'Customers' },
    { path: '/store/messages', icon: IconMessage, label: 'Messages' },
  ];

  const handleCopyReferral = () => {
    navigator.clipboard.writeText('https://pricetag.ng/pgstore');
  };

  return (
    <div className="emk-sidebar">
      {/* Store Header */}
     <div className="emk-logo-header">
        <Link to="/user-dashboard" className="emk-logo-icon">
          <img src={Logo} alt="" />
        </Link>
      </div>

      {/* Store Info */}
      <div className="store-info-card">
        <div className="store-avatar">
          <span className="store-avatar-text">PG</span>
        </div>
        <div className="store-details">
          <h3 className="store-name">PG Store</h3>
          <span className="store-plan">Starter Spark Plan</span>
        </div>
        <button className="store-notification-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 6.5L10 11.5L5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Referral Link */}
      <div className="store-referral">
        <span className="store-referral-label">Referral Link</span>
        <div className="store-referral-input">
          <span className="store-referral-text">https://pricetag.n...</span>
          <button onClick={handleCopyReferral} className="store-copy-btn">
            <IconCopy size={16} />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="store-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `store-nav-item ${isActive ? 'store-nav-item-active' : ''}`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Profile Section */}
      <div className="store-profile">
        
        <div className="store-profile-user">
          <div className="store-profile-avatar">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Prince" alt="Prince Godson" />
          </div>
          <div className="store-profile-info">
            <h4 className="store-profile-name">Prince Godson</h4>
            <p className="store-profile-tenure">8 Years Selling on Pricetag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSidebar;