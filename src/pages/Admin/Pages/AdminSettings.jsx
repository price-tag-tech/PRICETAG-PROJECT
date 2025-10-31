import { IconUser, IconLock, IconBell, IconShield } from '@tabler/icons-react';
import React, { useState } from 'react';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    pushNotifications: true,
    newUserRegistration: true,
    kycSubmissions: false,
    supportTickets: true,
    payoutRequests: true
  });

  return (
    <div className="overview-container-ovr">
      <div className="store-welcome">
        <div>
          <h1 className="store-welcome-title">Admin Settings</h1>
          <span className="store-member-since">Manage your admin account settings</span>
        </div>
      </div>

      {/* Settings Tabs */}
      <div className="store-filter-buttons admin-settings-tabs">
        <button 
          className={`store-filter-btn admin-settings-tab ${activeTab === 'profile' ? 'store-filter-active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <IconUser size={16} />
          <span>Profile</span>
        </button>
        <button 
          className={`store-filter-btn admin-settings-tab ${activeTab === 'security' ? 'store-filter-active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          <IconLock size={16} />
          <span>Security</span>
        </button>
        <button 
          className={`store-filter-btn admin-settings-tab ${activeTab === 'notifications' ? 'store-filter-active' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          <IconBell size={16} />
          <span>Notifications</span>
        </button>
        <button 
          className={`store-filter-btn admin-settings-tab ${activeTab === 'permissions' ? 'store-filter-active' : ''}`}
          onClick={() => setActiveTab('permissions')}
        >
          <IconShield size={16} />
          <span>Permissions</span>
        </button>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="store-orders-card admin-settings-content-card">
          <div className="store-orders-header">
            <h2>Profile Information</h2>
          </div>
          
          <div className="admin-profile-content">
            <div className="admin-profile-avatar-section">
              <div className="admin-profile-avatar-large">
                A
              </div>
              <button className="store-customize-btn admin-change-avatar-btn">
                Change Avatar
              </button>
            </div>

            <div className="admin-profile-form">
              <div className="admin-form-group">
                <label className="admin-form-label">Full Name</label>
                <input 
                  type="text"
                  defaultValue="Alice Johnson"
                  className="admin-form-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Email Address</label>
                <input 
                  type="email"
                  defaultValue="alice.j@admin.com"
                  className="admin-form-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Phone Number</label>
                <input 
                  type="tel"
                  defaultValue="+234 801 234 5678"
                  className="admin-form-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Role</label>
                <input 
                  type="text"
                  value="Super Admin"
                  disabled
                  className="admin-form-input admin-form-input-disabled"
                />
              </div>

              <button className="store-upload-btn admin-save-btn">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="store-orders-card admin-settings-content-card">
          <div className="store-orders-header">
            <h2>Security Settings</h2>
          </div>
          
          <div className="admin-security-content">
            <div className="admin-security-section">
              <h3 className="admin-security-section-title">Change Password</h3>
              <div className="admin-form-group">
                <label className="admin-form-label">Current Password</label>
                <input 
                  type="password"
                  placeholder="Enter current password"
                  className="admin-form-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">New Password</label>
                <input 
                  type="password"
                  placeholder="Enter new password"
                  className="admin-form-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Confirm New Password</label>
                <input 
                  type="password"
                  placeholder="Confirm new password"
                  className="admin-form-input"
                />
              </div>

              <button className="store-upload-btn admin-update-password-btn">
                Update Password
              </button>
            </div>

            <div className="admin-security-divider"></div>

            <div className="admin-security-section">
              <h3 className="admin-security-section-title">Two-Factor Authentication</h3>
              <p className="admin-security-section-desc">Add an extra layer of security to your account</p>
              
              <div className="admin-2fa-status">
                <span className="admin-2fa-label">Status:</span>
                <span className="store-status-cancelled">Disabled</span>
              </div>

              <button className="store-upload-btn admin-enable-2fa-btn">
                Enable 2FA
              </button>
            </div>

            <div className="admin-security-divider"></div>

            <div className="admin-security-section">
              <h3 className="admin-security-section-title">Active Sessions</h3>
              <div className="admin-sessions-list">
                <div className="admin-session-item">
                  <div className="admin-session-info">
                    <p className="admin-session-device">Windows PC - Chrome</p>
                    <p className="admin-session-location">Port Harcourt, Nigeria • 192.168.1.100</p>
                    <p className="admin-session-time">Current session • Active now</p>
                  </div>
                  <button className="store-customize-btn admin-session-btn-current">
                    Current
                  </button>
                </div>
                
                <div className="admin-session-item">
                  <div className="admin-session-info">
                    <p className="admin-session-device">iPhone - Safari</p>
                    <p className="admin-session-location">Lagos, Nigeria • 197.210.x.x</p>
                    <p className="admin-session-time">Last active: 2 hours ago</p>
                  </div>
                  <button className="store-customize-btn admin-session-btn-revoke">
                    Revoke
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="store-orders-card admin-settings-content-card">
          <div className="store-orders-header">
            <h2>Notification Preferences</h2>
          </div>
          
          <div className="admin-notifications-content">
            <div className="admin-notification-section">
              <h3 className="admin-notification-section-title">General Notifications</h3>
              
              <div className="admin-notification-item">
                <div className="admin-notification-item-info">
                  <label className="admin-notification-label">Email Alerts</label>
                  <p className="admin-notification-desc">Receive email notifications for important updates</p>
                </div>
                <label className="admin-toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.emailAlerts}
                    onChange={(e) => setNotifications({...notifications, emailAlerts: e.target.checked})}
                    className="admin-toggle-input"
                  />
                  <span className={`admin-toggle-slider ${notifications.emailAlerts ? 'admin-toggle-active' : ''}`}>
                    <span className="admin-toggle-circle" />
                  </span>
                </label>
              </div>

              <div className="admin-notification-item">
                <div className="admin-notification-item-info">
                  <label className="admin-notification-label">Push Notifications</label>
                  <p className="admin-notification-desc">Receive push notifications in your browser</p>
                </div>
                <label className="admin-toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.pushNotifications}
                    onChange={(e) => setNotifications({...notifications, pushNotifications: e.target.checked})}
                    className="admin-toggle-input"
                  />
                  <span className={`admin-toggle-slider ${notifications.pushNotifications ? 'admin-toggle-active' : ''}`}>
                    <span className="admin-toggle-circle" />
                  </span>
                </label>
              </div>
            </div>

            <div className="admin-notification-divider"></div>

            <div className="admin-notification-section">
              <h3 className="admin-notification-section-title">Activity Notifications</h3>
              
              <div className="admin-notification-item">
                <div className="admin-notification-item-info">
                  <label className="admin-notification-label">New User Registration</label>
                  <p className="admin-notification-desc">Get notified when new users register</p>
                </div>
                <label className="admin-toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.newUserRegistration}
                    onChange={(e) => setNotifications({...notifications, newUserRegistration: e.target.checked})}
                    className="admin-toggle-input"
                  />
                  <span className={`admin-toggle-slider ${notifications.newUserRegistration ? 'admin-toggle-active' : ''}`}>
                    <span className="admin-toggle-circle" />
                  </span>
                </label>
              </div>

              <div className="admin-notification-item">
                <div className="admin-notification-item-info">
                  <label className="admin-notification-label">KYC Submissions</label>
                  <p className="admin-notification-desc">Alerts for new KYC document submissions</p>
                </div>
                <label className="admin-toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.kycSubmissions}
                    onChange={(e) => setNotifications({...notifications, kycSubmissions: e.target.checked})}
                    className="admin-toggle-input"
                  />
                  <span className={`admin-toggle-slider ${notifications.kycSubmissions ? 'admin-toggle-active' : ''}`}>
                    <span className="admin-toggle-circle" />
                  </span>
                </label>
              </div>

              <div className="admin-notification-item">
                <div className="admin-notification-item-info">
                  <label className="admin-notification-label">Support Tickets</label>
                  <p className="admin-notification-desc">Notifications for new support tickets</p>
                </div>
                <label className="admin-toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.supportTickets}
                    onChange={(e) => setNotifications({...notifications, supportTickets: e.target.checked})}
                    className="admin-toggle-input"
                  />
                  <span className={`admin-toggle-slider ${notifications.supportTickets ? 'admin-toggle-active' : ''}`}>
                    <span className="admin-toggle-circle" />
                  </span>
                </label>
              </div>

              <div className="admin-notification-item">
                <div className="admin-notification-item-info">
                  <label className="admin-notification-label">Payout Requests</label>
                  <p className="admin-notification-desc">Alerts for pending payout requests</p>
                </div>
                <label className="admin-toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.payoutRequests}
                    onChange={(e) => setNotifications({...notifications, payoutRequests: e.target.checked})}
                    className="admin-toggle-input"
                  />
                  <span className={`admin-toggle-slider ${notifications.payoutRequests ? 'admin-toggle-active' : ''}`}>
                    <span className="admin-toggle-circle" />
                  </span>
                </label>
              </div>
            </div>

            <button className="store-upload-btn admin-save-notifications-btn">
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* Permissions Tab */}
      {activeTab === 'permissions' && (
        <div className="store-orders-card admin-settings-content-card">
          <div className="store-orders-header">
            <h2>Role & Permissions</h2>
          </div>
          
          <div className="admin-permissions-content">
            <div className="admin-permissions-role-info">
              <div className="admin-permissions-role-badge">Super Admin</div>
              <p className="admin-permissions-role-desc">You have full access to all platform features and settings</p>
            </div>

            <div className="admin-permissions-list">
              <h3 className="admin-permissions-list-title">Your Permissions</h3>
              
              <div className="admin-permission-group">
                <h4 className="admin-permission-group-title">User Management</h4>
                <div className="admin-permission-items">
                  <div className="admin-permission-item admin-permission-granted">
                    <span>View all users</span>
                  </div>
                  <div className="admin-permission-item admin-permission-granted">
                    <span>Edit user accounts</span>
                  </div>
                  <div className="admin-permission-item admin-permission-granted">
                    <span>Suspend/activate users</span>
                  </div>
                </div>
              </div>

              <div className="admin-permission-group">
                <h4 className="admin-permission-group-title">Platform Settings</h4>
                <div className="admin-permission-items">
                  <div className="admin-permission-item admin-permission-granted">
                    <span>Modify platform settings</span>
                  </div>
                  <div className="admin-permission-item admin-permission-granted">
                    <span>Manage admin accounts</span>
                  </div>
                  <div className="admin-permission-item admin-permission-granted">
                    <span>Access activity logs</span>
                  </div>
                </div>
              </div>

              <div className="admin-permission-group">
                <h4 className="admin-permission-group-title">Financial Operations</h4>
                <div className="admin-permission-items">
                  <div className="admin-permission-item admin-permission-granted">
                    <span>Process payouts</span>
                  </div>
                  <div className="admin-permission-item admin-permission-granted">
                    <span>View financial reports</span>
                  </div>
                  <div className="admin-permission-item admin-permission-granted">
                    <span>Manage payment gateways</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSettings;
