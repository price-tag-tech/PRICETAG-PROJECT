import { IconSearch, IconFilter, IconDownload, IconUserX, IconUserCheck } from '@tabler/icons-react';
import React, { useState } from 'react';

const ManageUsers = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+234 801 234 5678',
      accountType: 'Buyer',
      status: 'Active',
      joined: 'Jan 15, 2024',
      orders: 45,
      spent: '₦2,450,000'
    },
    {
      id: 2,
      name: 'Tech Store NG',
      email: 'contact@techstore.ng',
      phone: '+234 802 345 6789',
      accountType: 'Buisness',
      status: 'Active',
      joined: 'Feb 20, 2024',
      orders: 328,
      spent: '₦15,200,000'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+234 803 456 7890',
      accountType: 'Buyer',
      status: 'Suspended',
      joined: 'Mar 10, 2024',
      orders: 12,
      spent: '₦850,000'
    },
    {
      id: 4,
      name: 'Mike Electronics',
      email: 'info@mikeelec.com',
      phone: '+234 804 567 8901',
      accountType: 'Buisness',
      status: 'Pending',
      joined: 'Oct 25, 2025',
      orders: 0,
      spent: '₦0'
    },
    {
      id: 5,
      name: 'Emma Williams',
      email: 'emma.w@email.com',
      phone: '+234 805 678 9012',
      accountType: 'Buyer',
      status: 'Active',
      joined: 'May 5, 2024',
      orders: 78,
      spent: '₦4,100,000'
    }
  ];

  const filteredUsers = filterStatus === 'All' 
    ? users 
    : users.filter(user => user.status === filterStatus);

  return (
    <div className="overview-container-ovr">
      {/* Header */}
      <div className="store-welcome">
        <div>
          <h1 className="store-welcome-title">Manage Users</h1>
          <span className="store-member-since">Total Users: {users.length} | Active: {users.filter(u => u.status === 'Active').length}</span>
        </div>
        <div className="store-actions">
          <button className="store-customize-btn" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <IconDownload size={18} />
            Export Data
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div style={{background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', marginBottom: '20px'}}>
        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
          <div style={{flex: 1, minWidth: '300px', position: 'relative'}}>
            <IconSearch size={20} style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280'}} />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px 10px 40px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </div>
          <button className="store-customize-btn" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <IconFilter size={18} />
            Advanced Filter
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px'}}>
        <div className="store-stat-card">
          <div className="store-stat-info">
            <h3>Total Users</h3>
            <p style={{fontSize: '28px', fontWeight: '700', color: '#1a1a1a', margin: '8px 0 4px 0'}}>{users.length}</p>
            <p style={{color: '#16a34a', fontSize: '13px'}}>All registered users</p>
          </div>
        </div>

        <div className="store-stat-card">
          <div className="store-stat-info">
            <h3>Active Users</h3>
            <p style={{fontSize: '28px', fontWeight: '700', color: '#16a34a', margin: '8px 0 4px 0'}}>
              {users.filter(u => u.status === 'Active').length}
            </p>
            <p style={{color: '#6b7280', fontSize: '13px'}}>Currently active</p>
          </div>
        </div>

        <div className="store-stat-card">
          <div className="store-stat-info">
            <h3>Suspended</h3>
            <p style={{fontSize: '28px', fontWeight: '700', color: '#dc2626', margin: '8px 0 4px 0'}}>
              {users.filter(u => u.status === 'Suspended').length}
            </p>
            <p style={{color: '#6b7280', fontSize: '13px'}}>Suspended accounts</p>
          </div>
        </div>

        <div className="store-stat-card">
          <div className="store-stat-info">
            <h3>Pending</h3>
            <p style={{fontSize: '28px', fontWeight: '700', color: '#d97706', margin: '8px 0 4px 0'}}>
              {users.filter(u => u.status === 'Pending').length}
            </p>
            <p style={{color: '#6b7280', fontSize: '13px'}}>Awaiting verification</p>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="store-orders-card">
        <div className="store-orders-header">
          <h2>All Users</h2>
        </div>
        
        {/* Filter Buttons */}
        <div className="store-filter-buttons">
          <button 
            className={`store-filter-btn ${filterStatus === 'All' ? 'store-filter-active' : ''}`}
            onClick={() => setFilterStatus('All')}
          >
            All Users
          </button>
          <button 
            className={`store-filter-btn ${filterStatus === 'Active' ? 'store-filter-active' : ''}`}
            onClick={() => setFilterStatus('Active')}
          >
            Active
          </button>
          <button 
            className={`store-filter-btn ${filterStatus === 'Pending' ? 'store-filter-active' : ''}`}
            onClick={() => setFilterStatus('Pending')}
          >
            Pending
          </button>
          <button 
            className={`store-filter-btn ${filterStatus === 'Suspended' ? 'store-filter-active' : ''}`}
            onClick={() => setFilterStatus('Suspended')}
          >
            Suspended
          </button>
        </div>

        <div className="store-orders-table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>NAME</th>
                <th>EMAIL</th>
                
                <th>TYPE</th>
                <th>JOINED</th>
                <th>ORDERS</th>
                <th>TOTAL SPENT</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td data-label="S/N">{index + 1}</td>
                  <td data-label="Name">{user.name}</td>
                  <td data-label="Email">{user.email}</td>
                  
                  <td data-label="Type">
                    <span style={{
                      padding: '4px 8px',
                      background: user.accountType === 'Buisness' ? '#dbeafe' : '#f3f4f6',
                      color: user.accountType === 'Buisness' ? '#2563eb' : '#6b7280',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {user.accountType}
                    </span>
                  </td>
                  <td data-label="Joined">{user.joined}</td>
                  <td data-label="Orders">{user.orders}</td>
                  <td data-label="Total Spent">{user.spent}</td>
                  <td data-label="Status">
                    <span className={`store-status-${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td data-label="Actions">
                    <div style={{display: 'flex', gap: '8px', justifyContent: 'flex-end'}}>
                      
                      {user.status === 'Active' && (
                        <button 
                          className="store-customize-btn"
                          style={{padding: '6px 12px', fontSize: '12px', borderColor: '#dc2626', color: '#dc2626'}}
                        >
                          Suspend
                        </button>
                      )}
                      {user.status === 'Suspended' && (
                        <button 
                          className="store-upload-btn"
                          style={{padding: '6px 12px', fontSize: '12px'}}
                        >
                          Activate
                        </button>
                      )}
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

export default ManageUsers;
