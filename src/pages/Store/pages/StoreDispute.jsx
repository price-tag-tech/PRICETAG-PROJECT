// StoreDisputesPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconSearch,
  IconFilter,
  IconPlus,
  IconClock,
  IconMessage,
  IconCheck,
  IconX,
  IconAlertCircle,
  IconEye,
  IconArrowRight,
  IconCalendar
} from '@tabler/icons-react';


const StoreDisputesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock disputes data from store perspective
  const disputes = [
    {
      id: 'PTD-00123',
      transactionId: 'TXN-001',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      type: 'Product Not Delivered',
      status: 'pending',
      date: '2024-01-15',
      lastUpdated: '2024-01-15',
      priority: 'high',
      description: 'Order was placed 2 weeks ago but item has not been delivered yet.',
      responseDeadline: '2024-01-17',
      messages: [
        {
          id: 1,
          sender: 'customer',
          message: 'I have not received my order yet. The tracking shows no updates.',
          timestamp: '2024-01-15 10:30 AM'
        }
      ],
      orderDetails: {
        orderNumber: '#ORD-001',
        product: 'Wireless Headphones',
        amount: '$99.99',
        orderDate: '2024-01-01'
      }
    },
    {
      id: 'PTD-00124',
      transactionId: 'TXN-002',
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
          message: 'I received size M instead of size L that I ordered.',
          timestamp: '2024-01-14 02:15 PM'
        },
        {
          id: 2,
          sender: 'store',
          message: 'We apologize for the error. We can arrange for exchange.',
          timestamp: '2024-01-15 09:30 AM'
        }
      ],
      orderDetails: {
        orderNumber: '#ORD-002',
        product: 'Cotton T-Shirt',
        amount: '$29.99',
        orderDate: '2024-01-10'
      }
    },
    {
      id: 'PTD-00125',
      transactionId: 'TXN-003',
      customerName: 'Mike Johnson',
      customerEmail: 'mike@example.com',
      type: 'Damaged Product',
      status: 'under_review',
      date: '2024-01-13',
      lastUpdated: '2024-01-14',
      priority: 'high',
      description: 'Product arrived with visible damage and does not work properly.',
      responseDeadline: '2024-01-15',
      messages: [
        {
          id: 1,
          sender: 'customer',
          message: 'The product screen is cracked and wont turn on.',
          timestamp: '2024-01-13 11:20 AM'
        },
        {
          id: 2,
          sender: 'store',
          message: 'Can you please share photos of the damage?',
          timestamp: '2024-01-13 03:45 PM'
        },
        {
          id: 3,
          sender: 'customer',
          message: 'I have uploaded the photos in the evidence section.',
          timestamp: '2024-01-14 10:15 AM'
        },
        {
          id: 4,
          sender: 'admin',
          message: 'This dispute is now under admin review.',
          timestamp: '2024-01-14 02:30 PM'
        }
      ],
      orderDetails: {
        orderNumber: '#ORD-003',
        product: 'Smartphone',
        amount: '$599.99',
        orderDate: '2024-01-05'
      }
    },
    {
      id: 'PTD-00126',
      transactionId: 'TXN-004',
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
          message: 'I was charged twice for order #12345.',
          timestamp: '2024-01-10 09:30 AM'
        },
        {
          id: 2,
          sender: 'store',
          message: 'We see the duplicate charge. Processing refund.',
          timestamp: '2024-01-11 11:15 AM'
        },
        {
          id: 3,
          sender: 'admin',
          message: 'Dispute resolved. Refund completed.',
          timestamp: '2024-01-12 02:30 PM'
        }
      ],
      orderDetails: {
        orderNumber: '#ORD-004',
        product: 'Coffee Maker',
        amount: '$89.99',
        orderDate: '2024-01-08'
      }
    }
  ];

  const statusConfig = {
    pending: { 
      label: 'Response Required', 
      color: 'sdp-status-badge--pending', 
      icon: IconClock,
      description: 'Waiting for your response'
    },
    responded: { 
      label: 'Responded', 
      color: 'sdp-status-badge--responded', 
      icon: IconMessage,
      description: 'You have responded'
    },
    under_review: { 
      label: 'Under Admin Review', 
      color: 'sdp-status-badge--review', 
      icon: IconAlertCircle,
      description: 'Admin is reviewing the case'
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
      dispute.status === 'pending' && dispute.priority === 'high'
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
              <h1 className="sdp-header__title">Store Disputes</h1>
              <p className="sdp-header__subtitle">Manage and respond to customer disputes</p>
            </div>
            
            {/* Quick Stats */}
            <div className="sdp-quick-stats">
              <div className="sdp-quick-stat">
                <span className="sdp-quick-stat__number">{disputes.length}</span>
                <span className="sdp-quick-stat__label">Total Disputes</span>
              </div>
              <div className="sdp-quick-stat">
                <span className="sdp-quick-stat__number">
                  {disputes.filter(d => d.status === 'pending').length}
                </span>
                <span className="sdp-quick-stat__label">Need Response</span>
              </div>
              <div className="sdp-quick-stat">
                <span className="sdp-quick-stat__number">{urgentDisputes.length}</span>
                <span className="sdp-quick-stat__label">Urgent</span>
              </div>
            </div>
          </div>

          {/* Urgent Alert */}
          {urgentDisputes.length > 0 && (
            <div className="sdp-urgent-alert">
              <IconAlertCircle size={20} />
              <div className="sdp-urgent-alert__content">
                <strong>{urgentDisputes.length} urgent dispute(s) require your attention</strong>
                <span> - Respond within 48 hours to avoid escalation</span>
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
                    placeholder="Search disputes by ID, customer, or order number..."
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
                    { key: 'pending', label: 'Needs Response', count: disputes.filter(d => d.status === 'pending').length },
                    { key: 'responded', label: 'Responded', count: disputes.filter(d => d.status === 'responded').length },
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
                const deadlineInfo = getResponseTime(dispute.responseDeadline);
                
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
                          
                          {dispute.status === 'pending' && (
                            <div className={`sdp-deadline ${deadlineInfo.color}`}>
                              <IconCalendar size={14} />
                              <span>{deadlineInfo.text}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="sdp-dispute-card__customer">
                          <div className="sdp-customer-info">
                            <span className="sdp-customer-name">{dispute.customerName}</span>
                            <span className="sdp-customer-email">{dispute.customerEmail}</span>
                          </div>
                          <div className="sdp-order-info">
                            <span className="sdp-order-number">{dispute.orderDetails.orderNumber}</span>
                            <span className="sdp-order-product">{dispute.orderDetails.product}</span>
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
                            <span className="sdp-meta-label">Last Message:</span>
                            <span className="sdp-meta-value">{dispute.lastUpdated}</span>
                          </div>
                        </div>
                      </div>

                      <div className="sdp-dispute-card__actions">
                        <Link
                          to={`${dispute.id}`} 
                          className="sdp-button sdp-button--primary sdp-button--respond"
                        >
                          {dispute.status === 'pending' ? (
                            <>
                              <IconMessage size={16} />
                              <span>Respond Now</span>
                            </>
                          ) : (
                            <>
                              <IconEye size={16} />
                              <span>View Details</span>
                            </>
                          )}
                        </Link>
                        
                        {dispute.status === 'pending' && (
                          <div className="sdp-response-info">
                            <IconClock size={14} />
                            <span>Response required</span>
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

export default StoreDisputesPage;