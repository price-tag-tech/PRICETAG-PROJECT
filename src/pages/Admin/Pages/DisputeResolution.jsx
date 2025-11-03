// AdminDisputeResolution.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Store/css/style.css';
import {
  IconSearch,
  IconFilter,
  IconClock,
  IconMessage,
  IconCheck,
  IconX,
  IconAlertCircle,
  IconEye,
  IconArrowRight,
  IconCalendar,
  IconUser,
  IconBuildingStore,
  IconShield,
  IconPaperclip,
  IconSend,
  IconRefresh
} from '@tabler/icons-react';

const DisputeResolution = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock disputes data from admin perspective
  const disputes = [
    {
      id: 'PTD-00123',
      transactionId: 'TXN-001',
      storeName: 'Tech Haven Store',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      type: 'Product Not Delivered',
      status: 'under_review',
      date: '2024-01-15',
      lastUpdated: '2024-01-16',
      priority: 'high',
      description: 'Order was placed 2 weeks ago but item has not been delivered yet.',
      responseDeadline: '2024-01-17',
      messages: [
        {
          id: 1,
          sender: 'customer',
          senderName: 'John Doe',
          message: 'I have not received my order yet. The tracking shows no updates.',
          timestamp: '2024-01-15 10:30 AM'
        },
        {
          id: 2,
          sender: 'store',
          senderName: 'Tech Haven Support',
          message: 'We apologize for the delay. We are investigating with our shipping partner.',
          timestamp: '2024-01-15 02:15 PM'
        },
        {
          id: 3,
          sender: 'admin',
          senderName: 'Admin Team',
          message: 'This dispute is now under admin review.',
          timestamp: '2024-01-16 09:00 AM'
        }
      ],
      orderDetails: {
        orderNumber: '#ORD-001',
        product: 'Wireless Headphones',
        amount: '₦99,999',
        orderDate: '2024-01-01'
      }
    },
    {
      id: 'PTD-00124',
      transactionId: 'TXN-002',
      storeName: 'Fashion Boutique',
      customerName: 'Sarah Wilson',
      customerEmail: 'sarah@example.com',
      type: 'Wrong Item Received',
      status: 'responded',
      date: '2024-01-14',
      lastUpdated: '2024-01-15',
      priority: 'medium',
      description: 'Customer received size M instead of size L.',
      responseDeadline: '2024-01-16',
      messages: [
        {
          id: 1,
          sender: 'customer',
          senderName: 'Sarah Wilson',
          message: 'I received size M instead of size L that I ordered.',
          timestamp: '2024-01-14 02:15 PM'
        },
        {
          id: 2,
          sender: 'store',
          senderName: 'Fashion Boutique',
          message: 'We apologize for the error. We can arrange for exchange.',
          timestamp: '2024-01-15 09:30 AM'
        }
      ],
      orderDetails: {
        orderNumber: '#ORD-002',
        product: 'Cotton T-Shirt',
        amount: '₦29,999',
        orderDate: '2024-01-10'
      }
    },
    {
      id: 'PTD-00125',
      transactionId: 'TXN-003',
      storeName: 'Electronics Hub',
      customerName: 'Mike Johnson',
      customerEmail: 'mike@example.com',
      type: 'Damaged Product',
      status: 'pending',
      date: '2024-01-13',
      lastUpdated: '2024-01-13',
      priority: 'high',
      description: 'Product arrived with visible damage and does not work properly.',
      responseDeadline: '2024-01-15',
      messages: [
        {
          id: 1,
          sender: 'customer',
          senderName: 'Mike Johnson',
          message: 'The product screen is cracked and won\'t turn on.',
          timestamp: '2024-01-13 11:20 AM'
        }
      ],
      orderDetails: {
        orderNumber: '#ORD-003',
        product: 'Smartphone',
        amount: '₦599,999',
        orderDate: '2024-01-05'
      }
    },
    {
      id: 'PTD-00126',
      transactionId: 'TXN-004',
      storeName: 'Home & Living',
      customerName: 'Emily Davis',
      customerEmail: 'emily@example.com',
      type: 'Payment Issue',
      status: 'resolved',
      date: '2024-01-10',
      lastUpdated: '2024-01-12',
      priority: 'low',
      description: 'Double charged for the same order.',
      responseDeadline: '2024-01-12',
      messages: [
        {
          id: 1,
          sender: 'customer',
          senderName: 'Emily Davis',
          message: 'I was charged twice for order #12345.',
          timestamp: '2024-01-10 09:30 AM'
        },
        {
          id: 2,
          sender: 'store',
          senderName: 'Home & Living',
          message: 'We see the duplicate charge. Processing refund.',
          timestamp: '2024-01-11 11:15 AM'
        },
        {
          id: 3,
          sender: 'admin',
          senderName: 'Admin Team',
          message: 'Dispute resolved. Refund completed.',
          timestamp: '2024-01-12 02:30 PM'
        }
      ],
      orderDetails: {
        orderNumber: '#ORD-004',
        product: 'Coffee Maker',
        amount: '₦89,999',
        orderDate: '2024-01-08'
      }
    }
  ];

  const statusConfig = {
    pending: { 
      label: 'Pending Response', 
      color: 'sdp-status-badge--pending', 
      icon: IconClock,
      description: 'Waiting for store response'
    },
    responded: { 
      label: 'Store Responded', 
      color: 'sdp-status-badge--responded', 
      icon: IconMessage,
      description: 'Store has responded'
    },
    under_review: { 
      label: 'Under Admin Review', 
      color: 'sdp-status-badge--review', 
      icon: IconShield,
      description: 'Currently under admin review'
    },
    resolved: { 
      label: 'Resolved', 
      color: 'sdp-status-badge--resolved', 
      icon: IconCheck,
      description: 'Dispute has been resolved'
    },
    closed: { 
      label: 'Closed', 
      color: 'sdp-status-badge--closed', 
      icon: IconX,
      description: 'Dispute has been closed'
    }
  };

  const priorityConfig = {
    high: { label: 'High', color: 'sdp-priority-badge--high' },
    medium: { label: 'Medium', color: 'sdp-priority-badge--medium' },
    low: { label: 'Low', color: 'sdp-priority-badge--low' }
  };

  const filteredDisputes = disputes.filter(dispute => {
    const matchesSearch = dispute.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dispute.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dispute.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dispute.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dispute.orderDetails.orderNumber.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'all' || dispute.status === activeTab;
    
    return matchesSearch && matchesTab;
  });

  const getStatusInfo = (status) => statusConfig[status] || statusConfig.pending;
  const getPriorityInfo = (priority) => priorityConfig[priority] || priorityConfig.medium;

  const getUrgentDisputes = () => {
    return disputes.filter(dispute => 
      (dispute.status === 'pending' || dispute.status === 'under_review') && dispute.priority === 'high'
    );
  };

  const getResponseTime = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { text: 'Overdue', color: 'sdp-deadline--overdue' };
    if (diffDays === 0) return { text: 'Due today', color: 'sdp-deadline--urgent' };
    if (diffDays === 1) return { text: 'Due tomorrow', color: 'sdp-deadline--urgent' };
    return { text: `Due in ${diffDays} days`, color: 'sdp-deadline--normal' };
  };

  const urgentDisputes = getUrgentDisputes();

  return (
    <div className="sdp-page">
      <div className="sdp-container">
        {/* Header */}
        <div className="sdp-header">
          <div className="sdp-header__content">
            <div className="sdp-header__info">
              <h1 className="sdp-header__title">Dispute Resolution</h1>
              <p className="sdp-header__subtitle">Manage and resolve disputes between customers and stores</p>
            </div>
            
            {/* Quick Stats */}
            <div className="sdp-quick-stats">
              <div className="sdp-quick-stat">
                <span className="sdp-quick-stat__number">{disputes.length}</span>
                <span className="sdp-quick-stat__label">Total Disputes</span>
              </div>
              <div className="sdp-quick-stat">
                <span className="sdp-quick-stat__number">
                  {disputes.filter(d => d.status === 'under_review').length}
                </span>
                <span className="sdp-quick-stat__label">Under Review</span>
              </div>
              <div className="sdp-quick-stat">
                <span className="sdp-quick-stat__number">{urgentDisputes.length}</span>
                <span className="sdp-quick-stat__label">Urgent</span>
              </div>
              <div className="sdp-quick-stat">
                <span className="sdp-quick-stat__number">
                  {disputes.filter(d => d.status === 'resolved').length}
                </span>
                <span className="sdp-quick-stat__label">Resolved</span>
              </div>
            </div>
          </div>

          {/* Urgent Alert */}
          {urgentDisputes.length > 0 && (
            <div className="sdp-urgent-alert">
              <IconAlertCircle size={20} />
              <div className="sdp-urgent-alert__content">
                <strong>{urgentDisputes.length} urgent dispute(s) require admin attention</strong>
                <span> - Review and resolve within 24-48 hours</span>
              </div>
            </div>
          )}
        </div>

        {/* Filters and Search */}
        <div className="sdp-filters">
          <div className="sdp-filters__content">
            <div className="sdp-filters__layout">
              {/* Search */}
              <div className="sdp-search">
                <div className="sdp-search__wrapper">
                  <IconSearch className="sdp-search__icon" size={20} />
                  <input
                    type="text"
                    placeholder="Search disputes by ID, store, customer, or order number..."
                    className="sdp-search__input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Tabs */}
              <div className="sdp-tabs">
                <div className="sdp-tabs__container">
                  {[
                    { key: 'all', label: 'All Disputes', count: disputes.length },
                    { key: 'pending', label: 'Pending Response', count: disputes.filter(d => d.status === 'pending').length },
                    { key: 'responded', label: 'Store Responded', count: disputes.filter(d => d.status === 'responded').length },
                    { key: 'under_review', label: 'Under Review', count: disputes.filter(d => d.status === 'under_review').length },
                    { key: 'resolved', label: 'Resolved', count: disputes.filter(d => d.status === 'resolved').length }
                  ].map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`sdp-tabs__button ${
                        activeTab === tab.key ? 'sdp-tabs__button--active' : ''
                      }`}
                    >
                      <span>{tab.label}</span>
                      {tab.count > 0 && (
                        <span className="sdp-tabs__badge">{tab.count}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disputes List */}
        <div className="sdp-disputes-list">
          {filteredDisputes.length === 0 ? (
            <div className="sdp-empty-state">
              <IconAlertCircle className="sdp-empty-state__icon" size={48} />
              <h3 className="sdp-empty-state__title">No disputes found</h3>
              <p className="sdp-empty-state__message">
                {searchTerm ? 'Try adjusting your search terms' : 'No disputes in this category'}
              </p>
            </div>
          ) : (
            <div className="sdp-disputes-list__content">
              {filteredDisputes.map((dispute) => {
                const StatusIcon = getStatusInfo(dispute.status).icon;
                const deadlineInfo = dispute.status === 'pending' ? getResponseTime(dispute.responseDeadline) : null;
                
                return (
                  <div key={dispute.id} className="sdp-dispute-card">
                    <div className="sdp-dispute-card__content">
                      <div className="sdp-dispute-card__main">
                        <div className="sdp-dispute-card__header">
                          <div className="sdp-dispute-card__title-section">
                            <h3 className="sdp-dispute-card__title">{dispute.id}</h3>
                            <div className="sdp-dispute-card__badges">
                              <span className={`sdp-status-badge ${getStatusInfo(dispute.status).color}`}>
                                <StatusIcon size={14} className="sdp-status-badge__icon" />
                                {getStatusInfo(dispute.status).label}
                              </span>
                              <span className={`sdp-priority-badge ${getPriorityInfo(dispute.priority).color}`}>
                                {getPriorityInfo(dispute.priority).label}
                              </span>
                            </div>
                          </div>
                          
                          {deadlineInfo && (
                            <div className={`sdp-deadline ${deadlineInfo.color}`}>
                              <IconCalendar size={14} />
                              <span>{deadlineInfo.text}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="sdp-dispute-card__customer">
                          <div className="sdp-customer-info">
                            <span className="sdp-customer-name">
                              <IconUser size={14} style={{marginRight: '4px'}} />
                              {dispute.customerName}
                            </span>
                            <span className="sdp-customer-email">{dispute.customerEmail}</span>
                          </div>
                          <div className="sdp-order-info">
                            <span className="sdp-order-number">
                              <IconBuildingStore size={14} style={{marginRight: '4px'}} />
                              {dispute.storeName}
                            </span>
                            <span className="sdp-order-product">{dispute.orderDetails.orderNumber}</span>
                          </div>
                        </div>

                        <p className="sdp-dispute-card__description">{dispute.description}</p>

                        <div className="sdp-dispute-card__meta">
                          <div className="sdp-meta-item">
                            <span className="sdp-meta-label">Type:</span>
                            <span className="sdp-meta-value">{dispute.type}</span>
                          </div>
                          <div className="sdp-meta-item">
                            <span className="sdp-meta-label">Created:</span>
                            <span className="sdp-meta-value">{dispute.date}</span>
                          </div>
                          <div className="sdp-meta-item">
                            <span className="sdp-meta-label">Last Updated:</span>
                            <span className="sdp-meta-value">{dispute.lastUpdated}</span>
                          </div>
                          <div className="sdp-meta-item">
                            <span className="sdp-meta-label">Amount:</span>
                            <span className="sdp-meta-value" style={{fontWeight: '600', color: '#16a34a'}}>
                              {dispute.orderDetails.amount}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="sdp-dispute-card__actions">
                        <Link
                          to={`/admin/disputes/${dispute.id}`} 
                          className="sdp-button sdp-button--primary sdp-button--respond"
                        >
                          {dispute.status === 'under_review' || dispute.status === 'pending' ? (
                            <>
                              <IconShield size={16} />
                              <span>Review & Resolve</span>
                            </>
                          ) : (
                            <>
                              <IconEye size={16} />
                              <span>View Details</span>
                            </>
                          )}
                        </Link>
                        
                        {dispute.status === 'under_review' && (
                          <div className="sdp-response-info">
                            <IconShield size={14} />
                            <span>Admin review in progress</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisputeResolution;
