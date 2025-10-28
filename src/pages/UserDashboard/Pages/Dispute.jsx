// DisputesPage.jsx
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
  IconEye
} from '@tabler/icons-react';


const DisputesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock disputes data
  const disputes = [
    {
      id: 'PTD-00123',
      transactionId: 'TXN-001',
      storeName: 'Tech Haven Store',
      type: 'Product Not Delivered',
      status: 'pending',
      date: '2024-01-15',
      lastUpdated: '2024-01-15',
      priority: 'high',
      description: 'Order was placed 2 weeks ago but item has not been delivered yet.',
      userRole: 'customer',
      messages: [
        {
          id: 1,
          sender: 'customer',
          message: 'I have not received my order yet.',
          timestamp: '2024-01-15 10:30 AM'
        }
      ]
    },
    {
      id: 'PTD-00124',
      transactionId: 'TXN-002',
      storeName: 'Fashion Boutique',
      type: 'Wrong Item Received',
      status: 'store_responded',
      date: '2024-01-14',
      lastUpdated: '2024-01-15',
      priority: 'medium',
      description: 'Received a different size than what was ordered.',
      userRole: 'customer',
      messages: [
        {
          id: 1,
          sender: 'customer',
          message: 'I received size M instead of size L.',
          timestamp: '2024-01-14 02:15 PM'
        },
        {
          id: 2,
          sender: 'store',
          message: 'We apologize for the error. We can arrange for exchange.',
          timestamp: '2024-01-15 09:30 AM'
        }
      ]
    }
  ];

  const statusConfig = {
    pending: { label: 'Pending Response', color: 'por-status-badge--pending', icon: IconClock },
    store_responded: { label: 'Store Responded', color: 'por-status-badge--responded', icon: IconMessage },
    under_review: { label: 'Under Review', color: 'por-status-badge--review', icon: IconAlertCircle },
    resolved: { label: 'Resolved', color: 'por-status-badge--resolved', icon: IconCheck },
    closed: { label: 'Closed', color: 'por-status-badge--closed', icon: IconX }
  };

  const priorityConfig = {
    high: { label: 'High', color: 'por-priority-badge--high' },
    medium: { label: 'Medium', color: 'por-priority-badge--medium' },
    low: { label: 'Low', color: 'por-priority-badge--low' }
  };

  const filteredDisputes = disputes.filter(dispute => {
    const matchesSearch = dispute.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dispute.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dispute.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'all' || dispute.status === activeTab;
    
    return matchesSearch && matchesTab;
  });

  const getStatusInfo = (status) => statusConfig[status] || statusConfig.pending;
  const getPriorityInfo = (priority) => priorityConfig[priority] || priorityConfig.medium;

  return (
    <div className="por-page">
      <div className="por-container">
        {/* Header */}
        <div className="por-header">
          <div className="por-header__content">
            <div className="por-header__info">
              <h1 className="por-header__title">Dispute Resolution</h1>
              <p className="por-header__subtitle">Manage and track your dispute cases</p>
            </div>
           
          </div>

          {/* Stats Cards */}
          <div className="por-stats">
            <div className="por-stats__grid">
              <div className="por-stats__card">
                <div className="por-stats__content">
                  <div className="por-stats__info">
                    <p className="por-stats__label">Total Disputes</p>
                    <p className="por-stats__value">{disputes.length}</p>
                  </div>
                  <div className="por-stats__icon por-stats__icon--blue">
                    <IconAlertCircle className="por-stats__icon-svg" size={24} />
                  </div>
                </div>
              </div>

              <div className="por-stats__card">
                <div className="por-stats__content">
                  <div className="por-stats__info">
                    <p className="por-stats__label">Pending Response</p>
                    <p className="por-stats__value">
                      {disputes.filter(d => d.status === 'pending').length}
                    </p>
                  </div>
                  <div className="por-stats__icon por-stats__icon--yellow">
                    <IconClock className="por-stats__icon-svg" size={24} />
                  </div>
                </div>
              </div>

              <div className="por-stats__card">
                <div className="por-stats__content">
                  <div className="por-stats__info">
                    <p className="por-stats__label">Under Review</p>
                    <p className="por-stats__value">
                      {disputes.filter(d => d.status === 'under_review').length}
                    </p>
                  </div>
                  <div className="por-stats__icon por-stats__icon--purple">
                    <IconAlertCircle className="por-stats__icon-svg" size={24} />
                  </div>
                </div>
              </div>

              <div className="por-stats__card">
                <div className="por-stats__content">
                  <div className="por-stats__info">
                    <p className="por-stats__label">Resolved</p>
                    <p className="por-stats__value">
                      {disputes.filter(d => d.status === 'resolved').length}
                    </p>
                  </div>
                  <div className="por-stats__icon por-stats__icon--green">
                    <IconCheck className="por-stats__icon-svg" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="por-filters">
          <div className="por-filters__content">
            <div className="por-filters__layout">
              {/* Search */}
              <div className="por-search">
                <div className="por-search__wrapper">
                  <IconSearch className="por-search__icon" size={20} />
                  <input
                    type="text"
                    placeholder="Search disputes by ID, store, or type..."
                    className="por-search__input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Tabs */}
              <div className="por-tabs">
                <div className="por-tabs__container">
                  {[
                    { key: 'all', label: 'All Disputes' },
                    { key: 'pending', label: 'Pending' },
                    { key: 'store_responded', label: 'Needs Reply' },
                    { key: 'under_review', label: 'Under Review' },
                    { key: 'resolved', label: 'Resolved' }
                  ].map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`por-tabs__button ${
                        activeTab === tab.key ? 'por-tabs__button--active' : ''
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disputes List */}
        <div className="por-disputes-list">
          {filteredDisputes.length === 0 ? (
            <div className="por-empty-state">
              <IconAlertCircle className="por-empty-state__icon" size={48} />
              <h3 className="por-empty-state__title">No disputes found</h3>
              <p className="por-empty-state__message">
                {searchTerm ? 'Try adjusting your search terms' : 'You have no disputes in this category'}
              </p>
              <Link
                to="user-dashboard/disputes/create"
                className="por-button por-button--primary por-button--empty-state"
              >
                <IconPlus size={20} />
                <span>Raise Your First Dispute</span>
              </Link>
            </div>
          ) : (
            <div className="por-disputes-list__content">
              {filteredDisputes.map((dispute) => {
                const StatusIcon = getStatusInfo(dispute.status).icon;
                return (
                  <div key={dispute.id} className="por-dispute-card">
                    <div className="por-dispute-card__content">
                      <div className="por-dispute-card__main">
                        <div className="por-dispute-card__header">
                          <h3 className="por-dispute-card__title">{dispute.id}</h3>
                          <div className="por-dispute-card__badges">
                            <span className={`por-status-badge ${getStatusInfo(dispute.status).color}`}>
                              <StatusIcon size={14} className="por-status-badge__icon" />
                              {getStatusInfo(dispute.status).label}
                            </span>
                            <span className={`por-priority-badge ${getPriorityInfo(dispute.priority).color}`}>
                              {getPriorityInfo(dispute.priority).label}
                            </span>
                          </div>
                        </div>
                        
                        <div className="por-dispute-card__details">
                          <div className="por-dispute-card__detail">
                            <span className="por-dispute-card__detail-label">Store:</span>
                            <span className="por-dispute-card__detail-value">{dispute.storeName}</span>
                          </div>
                          <div className="por-dispute-card__detail">
                            <span className="por-dispute-card__detail-label">Type:</span>
                            <span className="por-dispute-card__detail-value">{dispute.type}</span>
                          </div>
                          <div className="por-dispute-card__detail">
                            <span className="por-dispute-card__detail-label">Created:</span>
                            <span className="por-dispute-card__detail-value">{dispute.date}</span>
                          </div>
                          <div className="por-dispute-card__detail">
                            <span className="por-dispute-card__detail-label">Last Updated:</span>
                            <span className="por-dispute-card__detail-value">{dispute.lastUpdated}</span>
                          </div>
                        </div>

                        <p className="por-dispute-card__description">{dispute.description}</p>
                      </div>

                      <div className="por-dispute-card__actions">
                        <Link
                          to={`/user-dashboard/disputes/${dispute.id}`}
                          className="por-button por-button--secondary por-button--view"
                        >
                          <IconEye size={16} />
                          <span>View Details</span>
                        </Link>
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

export default DisputesPage;