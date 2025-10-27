import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IconHome, IconPackage, IconShoppingCart, IconChartBar, IconUsers, IconMessage, IconUser, IconCopy, IconX, IconPlus, IconCheck } from '@tabler/icons-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import Logo from "../../../assets/images/logo.png"

const StoreSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentStore, setCurrentStore] = useState(0); // Index of current store
  const dropdownRef = useRef(null);
  const storeInfoRef = useRef(null);

  // Mock user plan - change to 'Basic' to see single store
  const userPlan = 'Pro';
  const maxStores = userPlan === 'Pro' ? 5 : 1;
  
  // Mock stores data
  const stores = [
    {
      id: 1,
      name: 'PG Store',
      initials: 'PG',
      plan: 'Starter Spark Plan',
      referralLink: 'https://pricetag.ng/pgstore'
    },
    {
      id: 2,
      name: 'Tech Haven Store',
      initials: 'TH',
      plan: 'Pro Plan',
      referralLink: 'https://pricetag.ng/techhaven'
    }
  ];

  const activeStore = stores[currentStore];
  
  const menuItems = [
    { path: '/store-dashboard', icon: IconHome, label: 'Dashboard' },
    { path: '/store-dashboard/products', icon: IconPackage, label: 'Products/Services' },
    { path: '/store-dashboard/orders', icon: IconShoppingCart, label: 'Orders' },
    { path: '/store-dashboard/inventory', icon: IconChartBar, label: 'Inventory' },
    { path: '/store-dashboard/customers', icon: IconUsers, label: 'Customers' },
  ];

  const isActive = (path) => {
    if (path === '/store-dashboard') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(activeStore.referralLink);
    alert('Referral link copied!');
  };

  const handleNavClick = () => {
    if (window.innerWidth <= 1000) {
      onClose();
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStoreSwitch = (index) => {
    setCurrentStore(index);
    setIsDropdownOpen(false);
  };

  const handleAddStore = () => {
    setIsDropdownOpen(false);
    navigate('/store-dashboard/profile');
  };

  const handleEditStore = () => {
    setIsDropdownOpen(false);
    navigate('/store-dashboard/profile');
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both the dropdown and the store info card
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        storeInfoRef.current &&
        !storeInfoRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    //event listener when dropdown is open
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className={`emk-sidebar ${isOpen ? 'open' : ''}`}>
      {/* Store Header */}
      <div className="emk-logo-header">
        <Link to="/user-dashboard" className="emk-logo-icon">
          <img src={Logo} alt="" />
        </Link>
        <div className="close-btn-emk" onClick={onClose}>
          <IconX size={20} /> 
        </div>
      </div>

      {/* Store Info with Dropdown */}
      <div className="store-info-wrapper">
        <div 
          className="store-info-card" 
          onClick={toggleDropdown}
          ref={storeInfoRef}
        >
          <div className="store-avatar">
            <span className="store-avatar-text">{activeStore.initials}</span>
          </div>
          <div className="store-details">
            <h3 className="store-name">{activeStore.name}</h3>
            <span className="store-plan">{activeStore.plan}</span>
          </div>
          <button className="store-notification-btn">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
            >
              <path d="M15 6.5L10 11.5L5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Store Dropdown */}
        {isDropdownOpen && (
          <div className="store-dropdown" ref={dropdownRef}>
            <div className="store-dropdown-list">
              {stores.map((store, index) => (
                <div 
                  key={store.id}
                  className={`store-dropdown-item ${currentStore === index ? 'active' : ''}`}
                  onClick={() => handleStoreSwitch(index)}
                >
                  <div className="store-dropdown-avatar">
                    <span>{store.initials}</span>
                  </div>
                  <div className="store-dropdown-info">
                    <div className="store-dropdown-name">{store.name}</div>
                    <div className="store-dropdown-plan">{store.plan}</div>
                  </div>
                  {currentStore === index && (
                    <div className="store-dropdown-check">
                      <IconCheck size={16} />
                    </div>
                  )}
                </div>
              ))}

              {/* Add New Store Option */}
              {stores.length < maxStores && (
                <div 
                  className="store-dropdown-item store-add-new"
                  onClick={handleAddStore}
                >
                  <div className="store-dropdown-avatar store-add-avatar">
                    <IconPlus size={20} />
                  </div>
                  <div className="store-dropdown-info">
                    <div className="store-dropdown-name">Add New Store</div>
                    <div className="store-dropdown-plan">Create another store</div>
                  </div>
                </div>
              )}
            </div>

            <div className="store-dropdown-footer">
              <Link to={"/store-dashboard/profile"} className="store-manage-btn-ptt" onClick={handleEditStore}>
                Manage Stores
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Referral Link */}
      <div className="store-referral">
        <span className="store-referral-label">Referral Link</span>
        <div className="store-referral-input">
          <span className="store-referral-text">{activeStore.referralLink.substring(0, 20)}...</span>
          <button onClick={handleCopyReferral} className="store-copy-btn">
            <IconCopy size={16} />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="store-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`store-nav-item ${isActive(item.path) ? 'store-nav-item-active' : ''}`}
            onClick={handleNavClick}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
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