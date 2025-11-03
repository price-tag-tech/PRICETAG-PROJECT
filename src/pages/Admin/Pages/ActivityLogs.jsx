import { IconFilter, IconDownload, IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';

const ActivityLogs = () => {
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const logs = [
    {
      id: 1,
      admin: 'Alice Johnson',
      action: 'Approved KYC document',
      target: 'User: John Doe (#12345)',
      type: 'KYC',
      timestamp: 'Oct 29, 2025 - 10:45 AM',
      ipAddress: '192.168.1.100'
    },
    {
      id: 2,
      admin: 'Bob Smith',
      action: 'Processed payout request',
      target: 'Seller: Tech Store NG',
      type: 'Finance',
      timestamp: 'Oct 29, 2025 - 10:30 AM',
      ipAddress: '192.168.1.101'
    },
    {
      id: 3,
      admin: 'Carol White',
      action: 'Closed support ticket',
      target: 'Ticket #5678',
      type: 'Support',
      timestamp: 'Oct 29, 2025 - 09:15 AM',
      ipAddress: '192.168.1.102'
    },
    {
      id: 4,
      admin: 'Alice Johnson',
      action: 'Updated platform settings',
      target: 'Commission rate changed to 5%',
      type: 'Settings',
      timestamp: 'Oct 28, 2025 - 04:20 PM',
      ipAddress: '192.168.1.100'
    },
    {
      id: 5,
      admin: 'Bob Smith',
      action: 'Suspended user account',
      target: 'User: Sarah Johnson (#67890)',
      type: 'User Management',
      timestamp: 'Oct 28, 2025 - 02:10 PM',
      ipAddress: '192.168.1.101'
    }
  ];

  const filteredLogs = filterType === 'All' 
    ? logs 
    : logs.filter(log => log.type === filterType);

  return (
    <div className="overview-container-ovr">
      <div className="store-welcome">
        <div>
          <h1 className="store-welcome-title">Activity Logs</h1>
          <span className="store-member-since">Track all admin actions and system events</span>
        </div>
        <div className="store-actions">
          <button className="store-customize-btn admin-download-btn">
            <IconDownload size={18} />
            <span>Export Logs</span>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="admin-search-card">
        <div className="admin-search-bar-container">
          <div className="admin-search-input-wrapper">
            <IconSearch size={20} className="admin-search-icon" />
            <input
              type="text"
              placeholder="Search logs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="admin-search-input"
            />
          </div>
          <select className="store-customize-btn admin-select-btn admin-date-select">
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Custom Range</option>
          </select>
        </div>

        <div className="store-filter-buttons">
          <button 
            className={`store-filter-btn ${filterType === 'All' ? 'store-filter-active' : ''}`}
            onClick={() => setFilterType('All')}
          >
            All Activities
          </button>
          <button 
            className={`store-filter-btn ${filterType === 'KYC' ? 'store-filter-active' : ''}`}
            onClick={() => setFilterType('KYC')}
          >
            KYC
          </button>
          <button 
            className={`store-filter-btn ${filterType === 'Finance' ? 'store-filter-active' : ''}`}
            onClick={() => setFilterType('Finance')}
          >
            Finance
          </button>
          <button 
            className={`store-filter-btn ${filterType === 'Support' ? 'store-filter-active' : ''}`}
            onClick={() => setFilterType('Support')}
          >
            Support
          </button>
          <button 
            className={`store-filter-btn ${filterType === 'Settings' ? 'store-filter-active' : ''}`}
            onClick={() => setFilterType('Settings')}
          >
            Settings
          </button>
          <button 
            className={`store-filter-btn ${filterType === 'User Management' ? 'store-filter-active' : ''}`}
            onClick={() => setFilterType('User Management')}
          >
            User Management
          </button>
        </div>
      </div>

      {/* Logs Table */}
      <div className="store-orders-card">
        <div className="store-orders-header">
          <h2>System Activity Logs</h2>
          <span className="admin-log-count">Total: {logs.length} entries</span>
        </div>

        <div className="store-orders-table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>ADMIN</th>
                <th>ACTION</th>
                <th>TARGET</th>
                <th>TYPE</th>
                <th>TIMESTAMP</th>
                <th>IP ADDRESS</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log, index) => (
                <tr key={log.id}>
                  <td data-label="S/N">{index + 1}</td>
                  <td data-label="Admin">{log.admin}</td>
                  <td data-label="Action">{log.action}</td>
                  <td data-label="Target">{log.target}</td>
                  <td data-label="Type">
                    <span className="admin-log-type-badge">
                      {log.type}
                    </span>
                  </td>
                  <td data-label="Timestamp">{log.timestamp}</td>
                  <td data-label="IP Address">{log.ipAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;

