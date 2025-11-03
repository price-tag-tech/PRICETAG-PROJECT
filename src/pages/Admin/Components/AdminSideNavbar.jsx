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
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { IconX, IconUsers, IconFileText, IconAlertCircle, IconBuildingStore } from '@tabler/icons-react';
import Logo from "../../../assets/images/logo.png";

// Define menu categories and items
const getMenuCategories = (adminRole) => {
  const allCategories = {
    superAdmin: [
      {
        id: 'main',
        title: 'Main Administration',
        icon: ShieldCheckIcon,
        items: [
          { id: 'dashboard', label: 'Dashboard', icon: HomeIcon, path: '/admin/dashboard' },
          { id: 'manage-users', label: 'Manage Users', icon: UserGroupIcon, path: '/admin/manage-users' },
          { id: 'manage-business', label: 'Manage Business', icon: IconBuildingStore, path: '/admin/manage-business' },
          { id: 'manage-admins', label: 'Manage Admins', icon: ShieldCheckIcon, path: '/admin/manage-admins' },
          { id: 'platform-settings', label: 'Platform Settings', icon: Cog6ToothIcon, path: '/admin/platform-settings' },
           { id: 'activity-logs', label: 'Activity Logs', icon: DocumentTextIcon, path: '/admin/activity-logs' },
        ]
      },
      {
        id: 'user-management',
        title: 'User Management',
        icon: UserGroupIcon,
        items: [
          // { id: 'new-requests', label: 'New User Requests', icon: ClipboardDocumentCheckIcon, path: '/admin/new-user-requests' },
          { id: 'kyc-reviews', label: 'KYC Reviews', icon: DocumentTextIcon, path: '/admin/kyc-reviews' },
          { id: 'suspended', label: 'Suspended Accounts', icon: IconAlertCircle, path: '/admin/suspended-accounts' },
         
        ]
      },
      {
        id: 'support',
        title: 'Support ',
        icon: ChatBubbleLeftRightIcon,
        items: [
         
          { id: 'live-chat', label: 'Live Chat Monitor', icon: ChatBubbleLeftRightIcon, path: '/admin/live-chat' },
          { id: 'disputes', label: 'Dispute Resolution', icon: IconAlertCircle, path: '/admin/disputes' },
          { id: 'reviews', label: 'Reviews & Ratings', icon: StarIcon, path: '/admin/reviews-ratings' },
         
          { id: 'broadcast', label: 'Broadcast Center', icon: BellIcon, path: '/admin/broadcast' },
        ]
      },
      {
        id: 'finance',
        title: 'Finance & Analytics',
        icon: CurrencyDollarIcon,
        items: [
          { id: 'revenue', label: 'Revenue Overview', icon: CurrencyDollarIcon, path: '/admin/revenue-overview' },
          { id: 'payout-requests', label: 'Payout Requests', icon: WalletIcon, path: '/admin/payout-requests' },
          { id: 'affiliate-management', label: 'Affiliate Management', icon: ArrowTrendingUpIcon, path: '/admin/affiliate-management' },
          { id: 'reports', label: 'Reports & Analytics', icon: ChartBarIcon, path: '/admin/reports' },
         
        ]
      },
      {
        id: 'settings',
        title: 'System Settings',
        icon: Cog6ToothIcon,
        items: [
          { id: 'settings', label: 'Settings', icon: Cog6ToothIcon, path: '/admin/settings' },
        ]
      }
    ],
    userRegistration: [
      {
        id: 'user-registration',
        title: 'User Registration',
        icon: UserGroupIcon,
        items: [
          { id: 'new-requests', label: 'New User Requests', icon: ClipboardDocumentCheckIcon, path: '/admin/new-user-requests' },
          { id: 'kyc-reviews', label: 'KYC Reviews', icon: DocumentTextIcon, path: '/admin/kyc-reviews' },
          { id: 'suspended', label: 'Suspended Accounts', icon: IconAlertCircle, path: '/admin/suspended-accounts' }
        ]
      }
    ],
    support: [
      {
        id: 'support',
        title: 'Support Management',
        icon: ChatBubbleLeftRightIcon,
        items: [
          { id: 'support-tickets', label: 'Support Tickets', icon: TicketIcon, path: '/admin/support-tickets' },
          { id: 'live-chat', label: 'Live Chat Monitor', icon: ChatBubbleLeftRightIcon, path: '/admin/live-chat' },
          { id: 'reviews', label: 'Reviews & Ratings', icon: StarIcon, path: '/admin/reviews-ratings' },
          { id: 'feedback', label: 'Customer Feedback', icon: DocumentTextIcon, path: '/admin/customer-feedback' },
          
        ]
      }
    ],
    finance: [
      {
        id: 'finance',
        title: 'Finance Management',
        icon: CurrencyDollarIcon,
        items: [
          { id: 'payout-requests', label: 'Payout Requests', icon: WalletIcon, path: '/admin/payout-requests' },
          { id: 'affiliate-management', label: 'Affiliate Management', icon: ArrowTrendingUpIcon, path: '/admin/affiliate-management' },
        ]
      }
    ]
  };

  return allCategories[adminRole] || allCategories.superAdmin;
};

export default function AdminSideNavbar({ isOpen, onClose, adminRole = 'superAdmin' }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState('main'); // Only one category can be open
  const profileRef = useRef(null);
  const location = useLocation();
  const menuCategories = getMenuCategories(adminRole);

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

  const toggleCategory = (categoryId) => {
    setOpenCategory(prev => prev === categoryId ? '' : categoryId);
  };

  const isMenuItemActive = (itemPath) => {
    return location.pathname === itemPath || location.pathname.startsWith(itemPath + '/');
  };

  const handleDropdownItemClick = () => {
    setIsProfileOpen(false);
  };

  // Auto-open category containing active menu item
  useEffect(() => {
    menuCategories.forEach(category => {
      const hasActiveItem = category.items.some(item => isMenuItemActive(item.path));
      if (hasActiveItem && openCategory !== category.id) {
        setOpenCategory(category.id);
      }
    });
  }, [location.pathname]);

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
        {menuCategories.map((category) => {
          const CategoryIcon = category.icon;
          const isCategoryOpen = openCategory === category.id;
          
          return (
            <div key={category.id} className="emk-menu-section">
              {/* Category Header */}
              <button 
                className="emk-menu-header"
                onClick={() => toggleCategory(category.id)}
                style={{ 
                  cursor: 'pointer', 
                  width: '100%', 
                  border: 'none', 
                  background: 'none',
                  padding: '0 12px',
                  marginBottom: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CategoryIcon style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                  <span className="emk-menu-title">{category.title}</span>
                </div>
                {isCategoryOpen ? (
                  <ChevronDownIcon style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                ) : (
                  <ChevronRightIcon style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                )}
              </button>
              
              {/* Category Items */}
              {isCategoryOpen && (
                <nav className="emk-menu-nav">
                  {category.items.map((item) => {
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
              )}
            </div>
          );
        })}
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

      <style jsx>{`
        .emk-menu-header {
          transition: all 0.2s ease;
        }
        
        .emk-menu-header:hover {
          background: #f9fafb;
          border-radius: 6px;
        }
        
        .emk-menu-section {
          margin-bottom: 16px;
        }
      `}</style>
    </div>
  );
}