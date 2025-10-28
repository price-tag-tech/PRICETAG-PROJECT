import React, { useState } from 'react';
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  BellIcon,
  ShoppingCartIcon,
  UserIcon,
  CheckCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { IconBuildingStore, IconClipboardSmile, IconCopy, IconMenu3, IconMenu4 } from '@tabler/icons-react';
import StoreSelectionModal from './StoreSelectionModal';
import { useNavigate } from 'react-router-dom';

export default function TopNavbar({ onToggleSidebar, isSidebarOpen }) {
  const [searchFocus, setSearchFocus] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleStoreSelect = (storeId) => {
    if (storeId === 'create') {
      // Navigate to create store page
      navigate('/store-dashboard/create');
    } else {
      // Navigate to the selected store's dashboard
      navigate(`/store-dashboard/${storeId}`);
    }
    setStoreModalOpen(false);
  };

  const notifications = [
    {
      id: 1,
      type: 'order',
      title: 'New Order Received',
      message: 'Order #12345 has been placed',
      time: '5 minutes ago',
      unread: true,
      icon: ShoppingCartIcon
    },
    {
      id: 2,
      type: 'user',
      title: 'New Customer Registration',
      message: 'John Doe just created an account',
      time: '1 hour ago',
      unread: true,
      icon: UserIcon
    },
    {
      id: 3,
      type: 'success',
      title: 'Payment Confirmed',
      message: 'Payment for order #12340 received',
      time: '2 hours ago',
      unread: false,
      icon: CheckCircleIcon
    },
    {
      id: 4,
      type: 'order',
      title: 'Order Shipped',
      message: 'Order #12338 is on its way',
      time: '5 hours ago',
      unread: false,
      icon: ShoppingCartIcon
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <>
      <div className="emk-topnav">
        {/* Left Section */}
        <div className="emk-topnav-left">
          <div 
            className="close-btn-emk" 
            onClick={onToggleSidebar}
          >
            {isSidebarOpen ? <IconMenu4 size={20} /> : <IconMenu3 size={20} />}
          </div>
          <div className="emk-referla-link">
            <button className="emk-referal-btn">
              Referal Link
            </button>
            <input type="text" disabled className='emk-referal-input' value="https://pricetag.ng/c/67d859bc-b2b4..." />
            <div className="emk-copy-icon">
              <IconClipboardSmile size={20} />
            </div>
          </div>
        </div>

        <div className="emk-topnav-right">
          <button
            className='custom-btn-border-color emk-shop-btn'
            aria-label="My Shop"
            onClick={() => setStoreModalOpen(true)}
          >
            <IconBuildingStore className="emk-shop-icon" />
            My Store
          </button>

          <div className="emk-notification-wrapper">
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
                {notifications.map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <div
                      key={notification.id}
                      className={`emk-notification-item ${notification.unread ? 'emk-notification-item-unread' : ''}`}
                    >
                      <div className="emk-notification-icon-wrapper">
                        <Icon className="emk-notification-icon" />
                      </div>
                      <div className="emk-notification-content">
                        <p className="emk-notification-item-title">{notification.title}</p>
                        <p className="emk-notification-item-message">{notification.message}</p>
                        <span className="emk-notification-item-time">{notification.time}</span>
                      </div>
                      <button className="emk-notification-close">
                        <XMarkIcon className="emk-notification-close-icon" />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="emk-notification-footer">
                <button className="emk-view-all">View All Notifications</button>
              </div>
            </div>
          </div>

          <button className="emk-profile-button">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Profile"
              className="emk-profile-image"
            />
          </button>
        </div>
      </div>

      {/* Store Selection Modal */}
      <StoreSelectionModal
        isOpen={storeModalOpen}
        onClose={() => setStoreModalOpen(false)}
        onSelectStore={handleStoreSelect}
      />
    </>
  );
}