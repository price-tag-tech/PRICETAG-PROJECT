import React, { useState, useRef, useEffect } from 'react';
import { 
  HomeIcon, 
  ShoppingCartIcon, 
  ChatBubbleLeftIcon, 
  CubeIcon, 
  ChartBarIcon, 
  ShoppingBagIcon, 
  ArrowTrendingUpIcon, 
  BellIcon, 
  Cog6ToothIcon,
  ChevronDownIcon,
 
  UserIcon,
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import Logo from "../../../assets/images/logo.png"

export default function SideNavbar() {
  const [activeMenuItem, setActiveMenuItem] = useState('overview');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileOpen && profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileOpen]);

  const mainMenuItems = [
    { id: 'overview', label: 'Overview', icon: HomeIcon },
    { id: 'orders', label: 'Orders and Purchases', icon: ShoppingCartIcon },
    { id: 'messages', label: 'Messages', icon: ChatBubbleLeftIcon, badge: 20 },
    { id: 'products', label: 'Products', icon: CubeIcon },
   
   
    { id: 'affiliate', label: 'Affiliate Earnings', icon: ArrowTrendingUpIcon },
    { id: 'notifications', label: 'Notifications', icon: BellIcon },
    { id: 'settings', label: 'Profile Settings', icon: Cog6ToothIcon },
  ];

  const handleDropdownItemClick = () => {
    setIsProfileOpen(false);
  };

  return (
    <>
     

      <div className="emk-sidebar">
        {/* Logo Header */}
        <div className="emk-logo-header">
          <Link to="/user-dashboard" className="emk-logo-icon">
              <img src={Logo} alt="" />
          </Link>
        </div>

        {/* Menu Content */}
        <div className="emk-menu-content">
          <div className="emk-menu-section">
            <div className="emk-menu-header">
              <span className="emk-menu-title">Main Menu</span>
              <ChevronDownIcon style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
            </div>
            
            <nav className="emk-menu-nav">
              {mainMenuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeMenuItem === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenuItem(item.id)}
                    className={`emk-menu-item ${isActive ? 'emk-menu-item-active' : ''}`}
                  >
                    <Icon className="emk-menu-icon" />
                    <span className="emk-menu-label">{item.label}</span>
                    {item.badge && (
                      <span className="emk-menu-badge">{item.badge}</span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Profile Section */}
        <div className="emk-profile-section" ref={profileRef}>
          <div className={`emk-profile-dropdown ${isProfileOpen ? 'emk-profile-dropdown-open' : ''}`}>
            <button className="emk-dropdown-item" onClick={handleDropdownItemClick}>
              <UserIcon className="emk-dropdown-icon" />
              <span>My Profile</span>
            </button>
            <button className="emk-dropdown-item" onClick={handleDropdownItemClick}>
              <Cog6ToothIcon className="emk-dropdown-icon" />
              <span>Account Settings</span>
            </button>
            <div className="emk-dropdown-divider" />
            <button className="emk-dropdown-item emk-dropdown-item-danger" onClick={handleDropdownItemClick}>
              <ArrowLeftIcon className="emk-dropdown-icon" />
              <span>Logout</span>
            </button>
          </div>

          <button 
            className="emk-profile-button-op"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="emk-profile-avatar">EM</div>
            <div className="emk-profile-info">
              <p className="emk-profile-name">Emeka</p>
              <p className="emk-profile-email">Test@Gmail.com</p>
            </div>
            <ChevronDownIcon 
              className={`emk-profile-chevron ${isProfileOpen ? 'emk-profile-chevron-open' : ''}`}
            />
          </button>
        </div>
      </div>
    </>
  );
}