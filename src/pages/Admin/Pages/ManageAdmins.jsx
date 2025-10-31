import { IconPlus, IconShield, IconUser, IconSettings } from '@tabler/icons-react';
import React, { useState } from 'react';

const ManageAdmins = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const admins = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.j@admin.com',
      role: 'Super Admin',
      permissions: 'Full Access',
      status: 'Active',
      lastLogin: '2 hours ago',
      created: 'Jan 10, 2024'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.s@admin.com',
      role: 'User Registration',
      permissions: 'KYC, Verification',
      status: 'Active',
      lastLogin: '5 hours ago',
      created: 'Feb 15, 2024'
    },
    {
      id: 3,
      name: 'Carol White',
      email: 'carol.w@admin.com',
      role: 'Support',
      permissions: 'Tickets, Chat, Reviews',
      status: 'Active',
      lastLogin: '1 day ago',
      created: 'Mar 20, 2024'
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david.b@admin.com',
      role: 'Finance',
      permissions: 'Payouts, Revenue',
      status: 'Inactive',
      lastLogin: '1 week ago',
      created: 'Apr 5, 2024'
    }
  ];

  const roleStats = [
    { role: 'Super Admin', count: 1, colorClass: 'admin-role-super' },
    { role: 'User Registration', count: 3, colorClass: 'admin-role-registration' },
    { role: 'Support', count: 5, colorClass: 'admin-role-support' },
    { role: 'Finance', count: 2, colorClass: 'admin-role-finance' }
  ];

  return (
    <div className="overview-container-ovr">
      {/* Header */}
      <div className="store-welcome">
        <div>
          <h1 className="store-welcome-title">Manage Admins</h1>
          <span className="store-member-since">Total Admins: {admins.length} | Active: {admins.filter(a => a.status === 'Active').length}</span>
        </div>
        <div className="store-actions">
          <button 
            className="store-upload-btn admin-add-btn"
            onClick={() => setShowAddModal(true)}
          >
            <IconPlus size={18} />
            <span>Add New Admin</span>
          </button>
        </div>
      </div>

      {/* Role Distribution */}
      <div className="admin-stats-grid">
        {roleStats.map((stat) => (
          <div key={stat.role} className="store-stat-card">
            <div className={`store-stat-number admin-role-number ${stat.colorClass}`}>
              {stat.count}
            </div>
            <div className="store-stat-info">
              <h3>{stat.role}</h3>
              <p>Active administrators</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="admin-quick-actions">
        <button className="store-add-service-btn">
          <IconShield size={20} />
          <span>Role Permissions</span>
        </button>
        <button className="store-add-service-btn">
          <IconUser size={20} />
          <span>Access Logs</span>
        </button>
        <button className="store-add-service-btn">
          <IconSettings size={20} />
          <span>Security Settings</span>
        </button>
      </div>

      {/* Admins Table */}
      <div className="store-orders-card">
        <div className="store-orders-header">
          <h2>All Administrators</h2>
          <div className="admin-header-actions">
            <select className="store-customize-btn admin-select-btn">
              <option>All Roles</option>
              <option>Super Admin</option>
              <option>User Registration</option>
              <option>Support</option>
              <option>Finance</option>
            </select>
          </div>
        </div>

        <div className="store-orders-table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>PERMISSIONS</th>
                <th>STATUS</th>
                <th>LAST LOGIN</th>
                <th>CREATED</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={admin.id}>
                  <td data-label="S/N">{index + 1}</td>
                  <td data-label="Name">
                    <div className="admin-name-cell">
                      <div className="admin-avatar">
                        {admin.name.charAt(0)}
                      </div>
                      {admin.name}
                    </div>
                  </td>
                  <td data-label="Email">{admin.email}</td>
                  <td data-label="Role">
                    <span className={admin.role === 'Super Admin' ? 'admin-role-badge-super' : 'admin-role-badge-regular'}>
                      {admin.role}
                    </span>
                  </td>
                  <td data-label="Permissions">{admin.permissions}</td>
                  <td data-label="Status">
                    <span className={`store-status-${admin.status.toLowerCase()}`}>
                      {admin.status}
                    </span>
                  </td>
                  <td data-label="Last Login">{admin.lastLogin}</td>
                  <td data-label="Created">{admin.created}</td>
                  <td data-label="Actions">
                    <div className="admin-action-buttons">
                      <button className="store-customize-btn admin-table-btn">
                        Edit
                      </button>
                      {admin.role !== 'Super Admin' && (
                        <button className="store-customize-btn admin-table-btn-danger">
                          Remove
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

      {/* Add Admin Modal */}
      {showAddModal && (
        <div className="admin-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="admin-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="admin-modal-title">Add New Administrator</h2>
            
            <div className="admin-modal-form">
              <div className="admin-form-group">
                <label className="admin-form-label">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter full name"
                  className="admin-form-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Email Address</label>
                <input 
                  type="email" 
                  placeholder="admin@example.com"
                  className="admin-form-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Admin Role</label>
                <select className="admin-form-select">
                  <option>Select a role</option>
                  <option>User Registration</option>
                  <option>Support</option>
                  <option>Finance</option>
                </select>
              </div>

              <div className="admin-modal-actions">
                <button 
                  className="store-customize-btn admin-modal-cancel"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button className="store-upload-btn admin-modal-submit">
                  Add Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAdmins;
