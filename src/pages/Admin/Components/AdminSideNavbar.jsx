import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  BellIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  TicketIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  WalletIcon,
  ArrowTrendingUpIcon,
  ArrowLeftIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { IconX, IconUsers, IconFileText, IconAlertCircle, IconBuildingStore } from '@tabler/icons-react';
import Logo from "../../../assets/images/logo.png";

// Define menu items based on admin role
const getMenuItems = (adminRole) => {
  const allMenus = {
    superAdmin: [
      { id: 'dashboard', label: 'Dashboard', icon: HomeIcon, path: '/admin/dashboard' },
      { id: 'manage-users', label: 'Manage Users', icon: UserGroupIcon, path: '/admin/manage-users' },
      { id: 'manage-business', label: 'Manage Business', icon: IconBuildingStore, path: '/admin/manage-business' },
      { id: 'manage-admins', label: 'Manage Admins', icon: ShieldCheckIcon, path: '/admin/manage-admins' },
      { id: 'disputes', label: 'Dispute Resolution', icon: IconAlertCircle, path: '/admin/disputes' },
      { id: 'platform-settings', label: 'Platform Settings', icon: Cog6ToothIcon, path: '/admin/platform-settings' },
      { id: 'broadcast', label: 'Broadcast Center', icon: BellIcon, path: '/admin/broadcast' },
      { id: 'activity-logs', label: 'Activity Logs', icon: DocumentTextIcon, path: '/admin/activity-logs' },
      { id: 'reports', label: 'Reports & Analytics', icon: ChartBarIcon, path: '/admin/reports' },
      { id: 'settings', label: 'Settings', icon: Cog6ToothIcon, path: '/admin/settings' }
    ],
    userRegistration: [
      { id: 'new-requests', label: 'New User Requests', icon: ClipboardDocumentCheckIcon, path: '/admin/new-user-requests' },
      { id: 'kyc-reviews', label: 'KYC Reviews', icon: DocumentTextIcon, path: '/admin/kyc-reviews' },
      { id: 'business-verification', label: 'Business Verification', icon: IconUsers, path: '/admin/business-verification' },
      { id: 'reminders', label: 'Reminders & Emails', icon: BellIcon, path: '/admin/reminders' },
      { id: 'suspended', label: 'Suspended Accounts', icon: IconAlertCircle, path: '/admin/suspended-accounts' }
    ],
    support: [
      { id: 'support-tickets', label: 'Support Tickets', icon: TicketIcon, path: '/admin/support-tickets' },
      { id: 'live-chat', label: 'Live Chat Monitor', icon: ChatBubbleLeftRightIcon, path: '/admin/live-chat' },
      { id: 'reviews', label: 'Reviews & Ratings', icon: StarIcon, path: '/admin/reviews-ratings' },
      { id: 'feedback', label: 'Customer Feedback', icon: DocumentTextIcon, path: '/admin/customer-feedback' },
      { id: 'satisfaction', label: 'Satisfaction Reports', icon: ChartBarIcon, path: '/admin/satisfaction-reports' }
    ],
    finance: [
      { id: 'payout-requests', label: 'Payout Requests', icon: WalletIcon, path: '/admin/payout-requests' },
      { id: 'affiliate-management', label: 'Affiliate Management', icon: ArrowTrendingUpIcon, path: '/admin/affiliate-management' },
      { id: 'revenue', label: 'Revenue Overview', icon: CurrencyDollarIcon, path: '/admin/revenue-overview' },
      { id: 'expenses', label: 'Expenses Manager', icon: ChartBarIcon, path: '/admin/expenses' },
      { id: 'payment-gateways', label: 'Payment Gateways', icon: WalletIcon, path: '/admin/payment-gateways' }
    ]
  };

  // For now, default to superAdmin - this will come from authentication context
  return allMenus[adminRole] || allMenus.superAdmin;
};

export default function AdminSideNavbar({ isOpen, onClose, adminRole = 'userRegistration' }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const location = useLocation();
  const menuItems = getMenuItems(adminRole);

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

  const isMenuItemActive = (itemPath) => {
    return location.pathname === itemPath || location.pathname.startsWith(itemPath + '/');
  };

  const handleDropdownItemClick = () => {
    setIsProfileOpen(false);
  };

  return (
    <div className={`emk-sidebar ${isOpen ? 'open' : ''}`}>
      {/* Logo Header */}
      <div className="emk-logo-header">
        <Link to="/admin/dashboard" className="emk-logo-icon">
          <img src={Logo} alt="PriceTag Admin" />
        </Link>
        <div className="close-btn-emk" onClick={onClose}>
          <IconX size={20} /> 
        </div>
      </div>

      {/* Role Badge */}
      <div style={{ padding: '12px 24px', borderBottom: '1px solid #eee' }}>
        <div style={{ 
          display: 'inline-block',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '11px',
          fontWeight: '600',
          textTransform: 'uppercase',
          background: '#d5ffe9',
          color: '#222325'
        }}>
          {adminRole === 'superAdmin' && 'Super Admin'}
          {adminRole === 'userRegistration' && 'User Registration Admin'}
          {adminRole === 'support' && 'Support Admin'}
          {adminRole === 'finance' && 'Finance & Affiliate Admin'}
        </div>
      </div>

      {/* Menu Content */}
      <div className="emk-menu-content">
        <div className="emk-menu-section">
          <div className="emk-menu-header">
            <span className="emk-menu-title">Admin Menu</span>
            <ChevronDownIcon style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
          </div>
          
          <nav className="emk-menu-nav">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = isMenuItemActive(item.path);
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`emk-menu-item ${isActive ? 'emk-menu-item-active' : ''}`}
                  onClick={onClose}
                >
                  <Icon className="emk-menu-icon" />
                  <span className="emk-menu-label">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Profile Section */}
      <div className="emk-profile-section" ref={profileRef}>
        <div className={`emk-profile-dropdown ${isProfileOpen ? 'emk-profile-dropdown-open' : ''}`}>
          <Link 
            to="/admin/settings" 
            className="emk-dropdown-item" 
            onClick={() => {
              handleDropdownItemClick();
              onClose();
            }}
          >
            <Cog6ToothIcon className="emk-dropdown-icon" />
            <span>Account Settings</span>
          </Link>
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
          <div className="emk-profile-avatar">AD</div>
          <div className="emk-profile-info">
            <p className="emk-profile-name">Admin User</p>
            <p className="emk-profile-email">admin@pricetag.ng</p>
          </div>
          <ChevronDownIcon 
            className={`emk-profile-chevron ${isProfileOpen ? 'emk-profile-chevron-open' : ''}`}
          />
        </button>
      </div>
    </div>
  );
}

