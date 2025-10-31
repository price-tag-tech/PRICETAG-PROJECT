import React, { useState, useRef, useEffect } from 'react';
import {
  MagnifyingGlassIcon,
  BellIcon,
  UserIcon,
  XMarkIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/24/outline';
import { IconMenu3, IconMenu4 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export default function AdminTopNavbar({ onToggleSidebar, isSidebarOpen }) {
  const [searchFocus, setSearchFocus] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleViewAllNotifications = () => {
    setNotificationOpen(false);
    // Navigate to notifications page if needed
  };

  const notifications = [
    {
      id: 1,
      type: 'ticket',
      title: 'New Support Ticket',
      message: 'Ticket #12345 needs attention',
      time: '5 minutes ago',
      unread: true
    },
    {
      id: 2,
      type: 'verification',
      title: 'Verification Request',
      message: 'New business verification pending',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      type: 'payout',
      title: 'Payout Request',
      message: 'New affiliate payout requested',
      time: '2 hours ago',
      unread: false
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="emk-topnav">
      {/* Left Section */}
      <div className="emk-topnav-left">
        <div 
          className="close-btn-emk" 
          onClick={onToggleSidebar}
        >
          {isSidebarOpen ? <IconMenu4 size={20} /> : <IconMenu3 size={20} />}
        </div>
        
        {/* Search Bar */}
        <div className="emk-search-wrapper">
          <MagnifyingGlassIcon className="emk-search-icon" />
          <input 
            type="text" 
            placeholder="Search users, stores, transactions..."
            className="emk-search-input"
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="emk-topnav-right">
        {/* Theme Toggle */}
        {/* <button
          className="emk-icon-button"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <SunIcon className="emk-icon-button-icon" />
          ) : (
            <MoonIcon className="emk-icon-button-icon" />
          )}
        </button> */}

        {/* Notifications */}
        <div className="emk-notification-wrapper" ref={notificationRef}>
          <button
            className="emk-icon-button"
            onClick={() => setNotificationOpen(!notificationOpen)}
          >
            <BellIcon className="emk-icon-button-icon" />
            {unreadCount > 0 && (
              <span className="emk-notification-badge">{unreadCount}</span>
            )}
          </button>

          <div className={`emk-notification-dropdown ${notificationOpen ? 'emk-notification-dropdown-open' : ''}`}>
            <div className="emk-notification-header">
              <h3 className="emk-notification-title">Notifications</h3>
              <button className="emk-mark-all-read">Mark all read</button>
            </div>

            <div className="emk-notification-list">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`emk-notification-item ${notification.unread ? 'emk-notification-item-unread' : ''}`}
                >
                  <div className="emk-notification-content">
                    <p className="emk-notification-item-title">{notification.title}</p>
                    <p className="emk-notification-item-message">{notification.message}</p>
                    <span className="emk-notification-item-time">{notification.time}</span>
                  </div>
                  <button className="emk-notification-close">
                    <XMarkIcon className="emk-notification-close-icon" />
                  </button>
                </div>
              ))}
            </div>

            <div className="emk-notification-footer">
              <button 
                onClick={handleViewAllNotifications}
                className="emk-view-all"
              >
                View All Notifications
              </button>
            </div>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="emk-profile-wrapper" ref={profileRef}>
          <button 
            className="emk-profile-button"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Profile"
              className="emk-profile-image"
            />
          </button>

          <div className={`emk-profile-dropdown-menu ${profileOpen ? 'emk-profile-dropdown-menu-open' : ''}`}>
            <div className="emk-profile-dropdown-header">
              <p className="emk-profile-dropdown-name">Admin User</p>
              <p className="emk-profile-dropdown-email">admin@pricetag.ng</p>
            </div>
            <div className="emk-dropdown-divider" />
            <button 
              className="emk-dropdown-item"
              onClick={() => {
                navigate('/admin/settings');
                setProfileOpen(false);
              }}
            >
              <UserIcon className="emk-dropdown-icon" />
              <span>Account Info</span>
            </button>
            <button 
              className="emk-dropdown-item"
              onClick={() => {
                setProfileOpen(false);
                // Handle change password
              }}
            >
              <span>Change Password</span>
            </button>
            <div className="emk-dropdown-divider" />
            <button 
              className="emk-dropdown-item emk-dropdown-item-danger"
              onClick={() => {
                setProfileOpen(false);
                // Handle logout
              }}
            >
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


