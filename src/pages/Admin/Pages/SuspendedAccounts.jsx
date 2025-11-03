import { IconUserOff, IconSearch, IconFilter, IconDownload, IconEye, IconUserCheck, IconClock, IconAlertTriangle, IconShieldOff } from '@tabler/icons-react';
import React, { useState } from 'react';

const SuspendedAccounts = () => {
  const [filterReason, setFilterReason] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const suspendedUsers = [
    {
      id: 1,
      name: 'Robert Martinez',
      email: 'robert.m@example.com',
      suspendedDate: 'Oct 28, 2024',
      suspendedBy: 'Admin John',
      reason: 'Fraudulent Activity',
      duration: 'Permanent',
      violations: 3,
      lastActivity: 'Oct 27, 2024',
      accountAge: '8 months',
      totalTransactions: 45
    },
    {
      id: 2,
      name: 'Patricia Lee',
      email: 'patricia@example.com',
      suspendedDate: 'Oct 30, 2024',
      suspendedBy: 'Admin Sarah',
      reason: 'Policy Violation',
      duration: '30 days',
      violations: 2,
      lastActivity: 'Oct 29, 2024',
      accountAge: '5 months',
      totalTransactions: 28
    },
    {
      id: 3,
      name: 'James Wilson',
      email: 'james.w@example.com',
      suspendedDate: 'Oct 25, 2024',
      suspendedBy: 'Admin Mike',
      reason: 'Spam Activity',
      duration: '14 days',
      violations: 1,
      lastActivity: 'Oct 24, 2024',
      accountAge: '3 months',
      totalTransactions: 12
    },
    {
      id: 4,
      name: 'Maria Garcia',
      email: 'maria.g@example.com',
      suspendedDate: 'Oct 20, 2024',
      suspendedBy: 'Admin David',
      reason: 'Payment Dispute',
      duration: '60 days',
      violations: 2,
      lastActivity: 'Oct 19, 2024',
      accountAge: '1 year',
      totalTransactions: 89
    },
    {
      id: 5,
      name: 'Kevin Brown',
      email: 'kevin.b@example.com',
      suspendedDate: 'Nov 01, 2024',
      suspendedBy: 'Admin Lisa',
      reason: 'Terms of Service',
      duration: 'Permanent',
      violations: 4,
      lastActivity: 'Oct 31, 2024',
      accountAge: '6 months',
      totalTransactions: 34
    },
    {
      id: 6,
      name: 'Jennifer Adams',
      email: 'jennifer.a@example.com',
      suspendedDate: 'Oct 15, 2024',
      suspendedBy: 'Admin Emma',
      reason: 'Suspicious Activity',
      duration: '90 days',
      violations: 2,
      lastActivity: 'Oct 14, 2024',
      accountAge: '2 years',
      totalTransactions: 156
    }
  ];

  const filteredUsers = filterReason === 'All' 
    ? suspendedUsers 
    : suspendedUsers.filter(user => user.reason === filterReason);

  const searchedUsers = searchQuery 
    ? filteredUsers.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredUsers;

  const totalStats = {
    totalSuspended: suspendedUsers.length,
    permanentBans: suspendedUsers.filter(u => u.duration === 'Permanent').length,
    temporaryBans: suspendedUsers.filter(u => u.duration !== 'Permanent').length,
    totalViolations: suspendedUsers.reduce((sum, u) => sum + u.violations, 0)
  };

  const handleViewDetails = (id) => {
    console.log('View user details:', id);
  };

  const handleReactivate = (id) => {
    console.log('Reactivate account:', id);
  };

  const reasonCategories = ['Fraudulent Activity', 'Policy Violation', 'Spam Activity', 'Payment Dispute', 'Terms of Service', 'Suspicious Activity'];

  return (
    <div className="container-sa">
      {/* Header */}
      <div className="header-sa">
        <div>
          <h1 className="title-sa">Suspended Accounts</h1>
          <p className="subtitle-sa">View and manage blocked users</p>
        </div>
        <div className="actions-sa">
          <button className="btn-secondary-sa">
            <IconDownload size={18} />
            Export Report
          </button>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="stats-grid-sa">
        <div className="stat-card-sa">
          <div className="stat-icon-sa stat-icon-total-sa">
            <IconUserOff size={24} />
          </div>
          <div>
            <h3 className="stat-label-sa">Total Suspended</h3>
            <p className="stat-value-sa">{totalStats.totalSuspended}</p>
            <p className="stat-description-sa">Blocked accounts</p>
          </div>
        </div>

        <div className="stat-card-sa">
          <div className="stat-icon-sa stat-icon-permanent-sa">
            <IconShieldOff size={24} />
          </div>
          <div>
            <h3 className="stat-label-sa">Permanent Bans</h3>
            <p className="stat-value-sa">{totalStats.permanentBans}</p>
            <p className="stat-description-sa">Indefinite suspension</p>
          </div>
        </div>

        <div className="stat-card-sa">
          <div className="stat-icon-sa stat-icon-temporary-sa">
            <IconClock size={24} />
          </div>
          <div>
            <h3 className="stat-label-sa">Temporary Bans</h3>
            <p className="stat-value-sa">{totalStats.temporaryBans}</p>
            <p className="stat-description-sa">Time-limited suspension</p>
          </div>
        </div>

       
      </div>

      {/* Search and Filter */}
      <div className="search-card-sa">
        <div className="search-wrapper-sa">
          <div className="search-input-wrapper-sa">
            <IconSearch size={20} className="search-icon-sa" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-sa"
            />
          </div>
          <button className="btn-secondary-sa">
            <IconFilter size={18} />
            Advanced Filter
          </button>
        </div>
      </div>

      {/* Suspended Accounts Table */}
      <div className="table-card-sa">
        <div className="table-header-sa">
          <h2 className="table-title-sa">All Suspended Accounts</h2>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons-sa">
          <button 
            className={`filter-btn-sa ${filterReason === 'All' ? 'filter-btn-active-sa' : ''}`}
            onClick={() => setFilterReason('All')}
          >
            All Reasons
          </button>
          {reasonCategories.map(reason => (
            <button 
              key={reason}
              className={`filter-btn-sa ${filterReason === reason ? 'filter-btn-active-sa' : ''}`}
              onClick={() => setFilterReason(reason)}
            >
              {reason}
            </button>
          ))}
        </div>

        <div className="table-wrapper-sa">
          <table className="table-sa">
            <thead>
              <tr>
                <th>USER</th>
                <th>SUSPENDED DATE</th>
                <th>SUSPENDED BY</th>
                <th>REASON</th>
                <th>DURATION</th>
                
                <th>ACCOUNT AGE</th>
                
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {searchedUsers.map((user) => (
                <tr key={user.id}>
                  <td data-label="User">
                    <div className="user-cell-sa">
                      <div className="user-avatar-sa">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <span className="user-name-sa">{user.name}</span>
                        <span className="user-email-sa">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td data-label="Suspended Date">{user.suspendedDate}</td>
                  <td data-label="Suspended By">{user.suspendedBy}</td>
                  <td data-label="Reason">
                    <span className="reason-badge-sa">{user.reason}</span>
                  </td>
                  <td data-label="Duration">
                    <span className={`duration-badge-sa ${user.duration === 'Permanent' ? 'duration-permanent-sa' : 'duration-temporary-sa'}`}>
                      {user.duration}
                    </span>
                  </td>
                 
                  <td data-label="Account Age">{user.accountAge}</td>
                 
                  <td data-label="Actions">
                    <div className="action-buttons-sa">
                    
                      <button 
                        onClick={() => handleReactivate(user.id)}
                        className="btn-reactivate-sa"
                      >
                        <IconUserCheck size={14} />
                        Reactivate
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
    </div>
  );
};

export default SuspendedAccounts;