import { IconSend, IconMail, IconBell, IconUsers } from '@tabler/icons-react';
import React, { useState } from 'react';

const BroadcastCenter = () => {
  const [broadcastType, setBroadcastType] = useState('email');
  const [targetAudience, setTargetAudience] = useState('all');

  const previousBroadcasts = [
    {
      id: 1,
      title: 'Welcome to New Features',
      type: 'Email',
      audience: 'All Users',
      sent: 'Oct 25, 2025',
      recipients: 45231,
      opened: 32145
    },
    {
      id: 2,
      title: 'Platform Maintenance Notice',
      type: 'Push Notification',
      audience: 'All Users',
      sent: 'Oct 20, 2025',
      recipients: 45100,
      opened: 41230
    },
    {
      id: 3,
      title: 'Seller Commission Update',
      type: 'Email',
      audience: 'Sellers Only',
      sent: 'Oct 15, 2025',
      recipients: 8432,
      opened: 7120
    }
  ];

  return (
    <div className="overview-container-ovr">
      <div className="store-welcome">
        <div>
          <h1 className="store-welcome-title">Broadcast Center</h1>
          <span className="store-member-since">Send notifications to users</span>
        </div>
      </div>

      {/* Broadcast Stats */}
      <div className="admin-stats-grid">
        <div className="store-stat-card">
          <div className="store-stat-info">
            <h3>Total Sent</h3>
            <p className="admin-stat-value">142</p>
            <p className="admin-stat-desc">All time broadcasts</p>
          </div>
        </div>
        <div className="store-stat-card">
          <div className="store-stat-info">
            <h3>Open Rate</h3>
            <p className="admin-stat-value admin-stat-success">72%</p>
            <p className="admin-stat-desc">Average engagement</p>
          </div>
        </div>
        <div className="store-stat-card">
          <div className="store-stat-info">
            <h3>This Month</h3>
            <p className="admin-stat-value admin-stat-primary">12</p>
            <p className="admin-stat-desc">Broadcasts sent</p>
          </div>
        </div>
      </div>

      {/* Create Broadcast */}
      <div className="store-orders-card admin-broadcast-card">
        <div className="store-orders-header">
          <h2>Create New Broadcast</h2>
        </div>
        
        <div className="admin-broadcast-form">
          <div className="admin-form-group">
            <label className="admin-form-label">Broadcast Type</label>
            <div className="admin-broadcast-types">
              <button 
                className={`store-filter-btn admin-broadcast-type-btn ${broadcastType === 'email' ? 'store-filter-active' : ''}`}
                onClick={() => setBroadcastType('email')}
              >
                <IconMail size={16} />
                <span>Email</span>
              </button>
              <button 
                className={`store-filter-btn admin-broadcast-type-btn ${broadcastType === 'push' ? 'store-filter-active' : ''}`}
                onClick={() => setBroadcastType('push')}
              >
                <IconBell size={16} />
                <span>Push Notification</span>
              </button>
              <button 
                className={`store-filter-btn admin-broadcast-type-btn ${broadcastType === 'sms' ? 'store-filter-active' : ''}`}
                onClick={() => setBroadcastType('sms')}
              >
                <IconSend size={16} />
                <span>SMS</span>
              </button>
            </div>
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Target Audience</label>
            <select 
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="admin-form-select"
            >
              <option value="all">All Users (45,231)</option>
              <option value="sellers">Sellers Only (8,432)</option>
              <option value="buyers">Buyers Only (36,799)</option>
              <option value="active">Active Users (42,100)</option>
              <option value="inactive">Inactive Users (3,131)</option>
            </select>
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Subject/Title</label>
            <input 
              type="text"
              placeholder="Enter broadcast subject"
              className="admin-form-input"
            />
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Message</label>
            <textarea 
              placeholder="Enter your message..."
              rows="6"
              className="admin-form-textarea"
            />
          </div>

          <div className="admin-broadcast-actions">
            <button className="store-customize-btn admin-broadcast-draft">Save as Draft</button>
            <button className="store-upload-btn admin-broadcast-send">
              <IconSend size={18} />
              <span>Send Broadcast</span>
            </button>
          </div>
        </div>
      </div>

      {/* Previous Broadcasts */}
      <div className="store-orders-card">
        <div className="store-orders-header">
          <h2>Previous Broadcasts</h2>
        </div>

        <div className="store-orders-table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>TITLE</th>
                <th>TYPE</th>
                <th>AUDIENCE</th>
                <th>SENT DATE</th>
                <th>RECIPIENTS</th>
                <th>OPENED</th>
                <th>OPEN RATE</th>
              </tr>
            </thead>
            <tbody>
              {previousBroadcasts.map((broadcast, index) => (
                <tr key={broadcast.id}>
                  <td data-label="S/N">{index + 1}</td>
                  <td data-label="Title">{broadcast.title}</td>
                  <td data-label="Type">{broadcast.type}</td>
                  <td data-label="Audience">{broadcast.audience}</td>
                  <td data-label="Sent Date">{broadcast.sent}</td>
                  <td data-label="Recipients">{broadcast.recipients.toLocaleString()}</td>
                  <td data-label="Opened">{broadcast.opened.toLocaleString()}</td>
                  <td data-label="Open Rate">
                    <span className="admin-open-rate">
                      {((broadcast.opened / broadcast.recipients) * 100).toFixed(1)}%
                    </span>
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

export default BroadcastCenter;

