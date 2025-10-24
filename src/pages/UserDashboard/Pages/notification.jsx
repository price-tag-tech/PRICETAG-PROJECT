import React, { useState } from 'react';
import {
  BellIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  TruckIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  TrashIcon
} from '@heroicons/react/24/outline';


const notificationsData = [
  {
    id: 1,
    type: 'order',
    title: 'Order Delivered Successfully',
    message: 'Your order #ORD-2024-002 has been delivered successfully.',
    time: '5 minutes ago',
    read: false,
    icon: CheckCircleIcon,
    color: '#10b981'
  },
  {
    id: 2,
    type: 'payment',
    title: 'Payment Confirmed',
    message: 'Payment of ₦280.00 for Lab Test Package has been confirmed.',
    time: '1 hour ago',
    read: false,
    icon: CurrencyDollarIcon,
    color: '#667eea'
  },
  {
    id: 3,
    type: 'shipping',
    title: 'Order Shipped',
    message: 'Your order #ORD-2024-003 is on the way. Track your package.',
    time: '3 hours ago',
    read: true,
    icon: TruckIcon,
    color: '#f59e0b'
  },
  {
    id: 4,
    type: 'order',
    title: 'New Order Placed',
    message: 'Your order #ORD-2024-005 has been placed successfully.',
    time: '1 day ago',
    read: true,
    icon: ShoppingBagIcon,
    color: '#3b82f6'
  },
  {
    id: 5,
    type: 'alert',
    title: 'Order Delayed',
    message: 'Your order #ORD-2024-001 delivery has been delayed by 1 day.',
    time: '2 days ago',
    read: true,
    icon: ExclamationTriangleIcon,
    color: '#ef4444'
  },
  {
    id: 6,
    type: 'order',
    title: 'Order Cancelled',
    message: 'Your order #ORD-2024-006 has been cancelled as per your request.',
    time: '3 days ago',
    read: true,
    icon: XCircleIcon,
    color: '#6b7280'
  },
  {
    id: 7,
    type: 'payment',
    title: 'Refund Processed',
    message: 'Refund of ₦65.00 has been processed to your account.',
    time: '4 days ago',
    read: true,
    icon: CurrencyDollarIcon,
    color: '#10b981'
  },
  {
    id: 8,
    type: 'order',
    title: 'Order Processing',
    message: 'Your order #ORD-2024-004 is now being processed.',
    time: '5 days ago',
    read: true,
    icon: ClockIcon,
    color: '#f59e0b'
  }
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  const filterOptions = ['All', 'Unread', 'Orders', 'Payments', 'Shipping'];

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleDelete = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    setSelectedNotifications(prev => prev.filter(nId => nId !== id));
  };

  const handleDeleteSelected = () => {
    if (window.confirm(`Delete ${selectedNotifications.length} selected notification(s)?`)) {
      setNotifications(prev => prev.filter(n => !selectedNotifications.includes(n.id)));
      setSelectedNotifications([]);
    }
  };

  const handleSelectNotification = (id) => {
    setSelectedNotifications(prev =>
      prev.includes(id) ? prev.filter(nId => nId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedNotifications.length === filteredNotifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(filteredNotifications.map(n => n.id));
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesFilter = true;
    if (filter === 'unread') {
      matchesFilter = !notification.read;
    } else if (filter === 'orders') {
      matchesFilter = notification.type === 'order';
    } else if (filter === 'payments') {
      matchesFilter = notification.type === 'payment';
    } else if (filter === 'shipping') {
      matchesFilter = notification.type === 'shipping';
    }
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="notifications-container-opp">
      <div className="header-card-opp">
        <div className="header-content-opp">
          <div className="header-left-opp">
            <div className="title-row-opp">
              <h1 className="header-title-opp">Notifications</h1>
              {unreadCount > 0 && (
                <span className="unread-badge-opp">{unreadCount}</span>
              )}
            </div>
            <p className="header-subtitle-opp">Stay updated with your latest activities</p>
          </div>
          <div className="header-actions-opp">
            <button className="mark-all-btn-opp" onClick={handleMarkAllAsRead}>
              <CheckCircleIcon className="btn-icon-opp" />
              Mark all as read
            </button>
          </div>
        </div>
      </div>

      <div className="notifications-card-opp">
        <div className="actions-bar-opp">
          {selectedNotifications.length > 0 && (
            <button className="delete-btn-opp" onClick={handleDeleteSelected}>
              <TrashIcon className="btn-icon-opp" />
              Delete ({selectedNotifications.length})
            </button>
          )}
          <div className="search-box-opp">
            <MagnifyingGlassIcon className="search-icon-opp" />
            <input
              type="text"
              placeholder="Search notifications"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-opp"
            />
          </div>
          <div className="dropdown-container-opp">
            <button
              className="filter-btn-opp"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              <FunnelIcon className="btn-icon-opp" />
              {filterOptions.find(f => f.toLowerCase() === filter) || 'All'}
            </button>
            {showFilterDropdown && (
              <div className="dropdown-menu-opp">
                {filterOptions.map(option => (
                  <div
                    key={option}
                    className="dropdown-item-opp"
                    onClick={() => {
                      setFilter(option.toLowerCase());
                      setShowFilterDropdown(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="select-all-bar-opp">
          <label className="select-all-label-opp">
            <input
              type="checkbox"
              className="checkbox-opp"
              checked={selectedNotifications.length === filteredNotifications.length && filteredNotifications.length > 0}
              onChange={handleSelectAll}
            />
            Select all
          </label>
        </div>

        <div className="notifications-list-opp">
          {filteredNotifications.length === 0 ? (
            <div className="empty-state-opp">
              <BellIcon className="empty-icon-opp" />
              <h3 className="empty-title-opp">No notifications found</h3>
              <p className="empty-text-opp">Try adjusting your search or filter</p>
            </div>
          ) : (
            filteredNotifications.map(notification => {
              const IconComponent = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`notification-item-opp ${!notification.read ? 'unread' : ''}`}
                >
                  <input
                    type="checkbox"
                    className="checkbox-opp"
                    checked={selectedNotifications.includes(notification.id)}
                    onChange={() => handleSelectNotification(notification.id)}
                  />
                  <div
                    className="notification-icon-wrapper-opp"
                    style={{
                      background: `${notification.color}15`,
                      color: notification.color
                    }}
                  >
                    <IconComponent className="notification-icon-opp" />
                  </div>
                  <div className="notification-content-opp">
                    <div className="notification-header-opp">
                      <h3 className="notification-title-opp">{notification.title}</h3>
                      <span className="notification-time-opp">{notification.time}</span>
                    </div>
                    <p className="notification-message-opp">{notification.message}</p>
                  </div>
                  {!notification.read && (
                    <button
                      className="mark-read-btn-opp"
                      onClick={() => handleMarkAsRead(notification.id)}
                      title="Mark as read"
                    >
                      <CheckCircleIcon className="mark-read-icon-opp" />
                    </button>
                  )}
                  <button
                    className="delete-single-btn-opp"
                    onClick={() => handleDelete(notification.id)}
                    title="Delete"
                  >
                    <TrashIcon className="delete-icon-opp" />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}