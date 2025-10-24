import React, { useState } from 'react';
import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  KeyIcon,
  BellIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  GlobeAltIcon,
  CameraIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';


export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  // Profile form state
  const [profileData, setProfileData] = useState({
    firstName: 'Emeka',
    lastName: 'Okoro',
    email: 'emeka.okoro@email.com',
    phone: '+234 812 345 6789',
    address: '123 Marina Street',
    city: 'Lagos',
    state: 'Lagos State',
    country: 'Nigeria',
    zipCode: '100001'
  });

  // Password form state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Notification settings
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newsletter: false,
    securityAlerts: true,
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true
  });

  // Privacy settings
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'private',
    showEmail: false,
    showPhone: false,
    dataSharing: false,
    twoFactorAuth: false
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: UserCircleIcon },
    { id: 'security', label: 'Security', icon: KeyIcon },
    { id: 'notifications', label: 'Notifications', icon: BellIcon },
    { id: 'privacy', label: 'Privacy', icon: ShieldCheckIcon },
    { id: 'payment', label: 'Payment Methods', icon: CreditCardIcon }
  ];

  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationToggle = (field) => {
    setNotifications(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handlePrivacyToggle = (field) => {
    setPrivacy(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = () => {
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 3000);
  };

  return (
    <div className="settings-container-opp">
      {showSaveNotification && (
        <div className="save-notification-opp">
          <CheckCircleIcon className="notification-icon-check-opp" />
          <span>Settings saved successfully!</span>
        </div>
      )}

      <div className="header-card-opp">
        <div className="header-content-opp">
          <div className="header-left-opp">
            <h1 className="header-title-opp">Settings</h1>
            <p className="header-subtitle-opp">Manage your account settings and preferences</p>
          </div>
        </div>
      </div>

      <div className="settings-layout-opp">
        {/* Sidebar Tabs */}
        <div className="sidebar-opp">
          <div className="tabs-container-opp">
            {tabs.map(tab => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`tab-btn-opp ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <IconComponent className="tab-icon-opp" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area-opp">
          {activeTab === 'profile' && (
            <div className="settings-section-opp">
              <div className="section-header-opp">
                <h2 className="section-title-opp">Profile Information</h2>
                <p className="section-subtitle-opp">Update your personal details</p>
              </div>

              <div className="profile-photo-section-opp">
                <div className="photo-wrapper-opp">
                  <div className="avatar-large-opp">
                    <UserCircleIcon className="avatar-icon-opp" />
                  </div>
                  <button className="change-photo-btn-opp">
                    <CameraIcon className="camera-icon-opp" />
                  </button>
                </div>
                <div className="photo-info-opp">
                  <h3 className="photo-title-opp">Profile Photo</h3>
                  <p className="photo-subtitle-opp">PNG, JPG up to 5MB</p>
                  <button className="upload-btn-opp">Upload new photo</button>
                </div>
              </div>

              <div className="form-grid-opp">
                <div className="form-group-opp">
                  <label className="form-label-opp">First Name</label>
                  <input
                    type="text"
                    className="form-input-opp"
                    value={profileData.firstName}
                    onChange={(e) => handleProfileChange('firstName', e.target.value)}
                  />
                </div>
                <div className="form-group-opp">
                  <label className="form-label-opp">Last Name</label>
                  <input
                    type="text"
                    className="form-input-opp"
                    value={profileData.lastName}
                    onChange={(e) => handleProfileChange('lastName', e.target.value)}
                  />
                </div>
                <div className="form-group-opp form-group-full-opp">
                  <label className="form-label-opp">Email Address</label>
                  <div className="input-with-icon-opp">
                    <EnvelopeIcon className="input-icon-opp" />
                    <input
                      type="email"
                      className="form-input-opp"
                      value={profileData.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group-opp form-group-full-opp">
                  <label className="form-label-opp">Phone Number</label>
                  <div className="input-with-icon-opp">
                    <PhoneIcon className="input-icon-opp" />
                    <input
                      type="tel"
                      className="form-input-opp"
                      value={profileData.phone}
                      onChange={(e) => handleProfileChange('phone', e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group-opp form-group-full-opp">
                  <label className="form-label-opp">Address</label>
                  <input
                    type="text"
                    className="form-input-opp"
                    value={profileData.address}
                    onChange={(e) => handleProfileChange('address', e.target.value)}
                  />
                </div>
                <div className="form-group-opp">
                  <label className="form-label-opp">City</label>
                  <input
                    type="text"
                    className="form-input-opp"
                    value={profileData.city}
                    onChange={(e) => handleProfileChange('city', e.target.value)}
                  />
                </div>
                <div className="form-group-opp">
                  <label className="form-label-opp">State</label>
                  <input
                    type="text"
                    className="form-input-opp"
                    value={profileData.state}
                    onChange={(e) => handleProfileChange('state', e.target.value)}
                  />
                </div>
                <div className="form-group-opp">
                  <label className="form-label-opp">Country</label>
                  <input
                    type="text"
                    className="form-input-opp"
                    value={profileData.country}
                    onChange={(e) => handleProfileChange('country', e.target.value)}
                  />
                </div>
                <div className="form-group-opp">
                  <label className="form-label-opp">Zip Code</label>
                  <input
                    type="text"
                    className="form-input-opp"
                    value={profileData.zipCode}
                    onChange={(e) => handleProfileChange('zipCode', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-actions-opp">
                <button className="cancel-btn-opp">Cancel</button>
                <button className="save-btn-opp" onClick={handleSave}>Save Changes</button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="settings-section-opp">
              <div className="section-header-opp">
                <h2 className="section-title-opp">Security Settings</h2>
                <p className="section-subtitle-opp">Manage your password and security preferences</p>
              </div>

              <div className="security-card-opp">
                <h3 className="card-title-opp">Change Password</h3>
                <div className="form-grid-opp">
                  <div className="form-group-opp form-group-full-opp">
                    <label className="form-label-opp">Current Password</label>
                    <input
                      type="password"
                      className="form-input-opp"
                      value={passwordData.currentPassword}
                      onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                      placeholder="Enter current password"
                    />
                  </div>
                  <div className="form-group-opp form-group-full-opp">
                    <label className="form-label-opp">New Password</label>
                    <input
                      type="password"
                      className="form-input-opp"
                      value={passwordData.newPassword}
                      onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="form-group-opp form-group-full-opp">
                    <label className="form-label-opp">Confirm New Password</label>
                    <input
                      type="password"
                      className="form-input-opp"
                      value={passwordData.confirmPassword}
                      onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
                <div className="password-requirements-opp">
                  <p className="requirements-title-opp">Password must contain:</p>
                  <ul className="requirements-list-opp">
                    <li>At least 8 characters</li>
                    <li>One uppercase letter</li>
                    <li>One lowercase letter</li>
                    <li>One number</li>
                    <li>One special character</li>
                  </ul>
                </div>
              </div>

              <div className="security-card-opp">
                <h3 className="card-title-opp">Two-Factor Authentication</h3>
                <p className="card-subtitle-opp">Add an extra layer of security to your account</p>
                <div className="toggle-row-opp">
                  <div className="toggle-info-opp">
                    <span className="toggle-label-opp">Enable 2FA</span>
                    <span className="toggle-description-opp">Require a code in addition to your password</span>
                  </div>
                  <label className="toggle-switch-opp">
                    <input
                      type="checkbox"
                      checked={privacy.twoFactorAuth}
                      onChange={() => handlePrivacyToggle('twoFactorAuth')}
                    />
                    <span className="toggle-slider-opp"></span>
                  </label>
                </div>
              </div>

              <div className="security-card-opp">
                <h3 className="card-title-opp">Active Sessions</h3>
                <div className="session-item-opp">
                  <div className="session-info-opp">
                    <GlobeAltIcon className="session-icon-opp" />
                    <div>
                      <p className="session-device-opp">Chrome on Windows</p>
                      <p className="session-location-opp">Lagos, Nigeria • Active now</p>
                    </div>
                  </div>
                  <button className="revoke-btn-opp">Revoke</button>
                </div>
                <div className="session-item-opp">
                  <div className="session-info-opp">
                    <GlobeAltIcon className="session-icon-opp" />
                    <div>
                      <p className="session-device-opp">Safari on iPhone</p>
                      <p className="session-location-opp">Lagos, Nigeria • 2 hours ago</p>
                    </div>
                  </div>
                  <button className="revoke-btn-opp">Revoke</button>
                </div>
              </div>

              <div className="form-actions-opp">
                <button className="cancel-btn-opp">Cancel</button>
                <button className="save-btn-opp" onClick={handleSave}>Update Password</button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settings-section-opp">
              <div className="section-header-opp">
                <h2 className="section-title-opp">Notification Preferences</h2>
                <p className="section-subtitle-opp">Choose what notifications you want to receive</p>
              </div>

              <div className="notification-card-opp">
                <h3 className="card-title-opp">Order Updates</h3>
                <div className="toggle-row-opp">
                  <div className="toggle-info-opp">
                    <span className="toggle-label-opp">Order Status Updates</span>
                    <span className="toggle-description-opp">Get notified about order status changes</span>
                  </div>
                  <label className="toggle-switch-opp">
                    <input
                      type="checkbox"
                      checked={notifications.orderUpdates}
                      onChange={() => handleNotificationToggle('orderUpdates')}
                    />
                    <span className="toggle-slider-opp"></span>
                  </label>
                </div>
                <div className="toggle-row-opp">
                  <div className="toggle-info-opp">
                    <span className="toggle-label-opp">Promotions & Offers</span>
                    <span className="toggle-description-opp">Receive special offers and promotions</span>
                  </div>
                  <label className="toggle-switch-opp">
                    <input
                      type="checkbox"
                      checked={notifications.promotions}
                      onChange={() => handleNotificationToggle('promotions')}
                    />
                    <span className="toggle-slider-opp"></span>
                  </label>
                </div>
                <div className="toggle-row-opp">
                  <div className="toggle-info-opp">
                    <span className="toggle-label-opp">Newsletter</span>
                    <span className="toggle-description-opp">Get our weekly newsletter</span>
                  </div>
                  <label className="toggle-switch-opp">
                    <input
                      type="checkbox"
                      checked={notifications.newsletter}
                      onChange={() => handleNotificationToggle('newsletter')}
                    />
                    <span className="toggle-slider-opp"></span>
                  </label>
                </div>
                <div className="toggle-row-opp">
                  <div className="toggle-info-opp">
                    <span className="toggle-label-opp">Security Alerts</span>
                    <span className="toggle-description-opp">Important security notifications</span>
                  </div>
                  <label className="toggle-switch-opp">
                    <input
                      type="checkbox"
                      checked={notifications.securityAlerts}
                      onChange={() => handleNotificationToggle('securityAlerts')}
                    />
                    <span className="toggle-slider-opp"></span>
                  </label>
                </div>
              </div>

              <div className="notification-card-opp">
                <h3 className="card-title-opp">Notification Channels</h3>
                <div className="toggle-row-opp">
                  <div className="toggle-info-opp">
                    <span className="toggle-label-opp">Email Notifications</span>
                    <span className="toggle-description-opp">Receive notifications via email</span>
                  </div>
                  <label className="toggle-switch-opp">
                    <input
                      type="checkbox"
                      checked={notifications.emailNotifications}
                      onChange={() => handleNotificationToggle('emailNotifications')}
                    />
                    <span className="toggle-slider-opp"></span>
                  </label>
                </div>
                <div className="toggle-row-opp">
                  <div className="toggle-info-opp">
                    <span className="toggle-label-opp">SMS Notifications</span>
                    <span className="toggle-description-opp">Receive notifications via SMS</span>
                  </div>
                  <label className="toggle-switch-opp">
                    <input
                      type="checkbox"
                      checked={notifications.smsNotifications}
                      onChange={() => handleNotificationToggle('smsNotifications')}
                    />
                    <span className="toggle-slider-opp"></span>
                  </label>
                </div>
                <div className="toggle-row-opp">
                  <div className="toggle-info-opp">
                    <span className="toggle-label-opp">Push Notifications</span>
                    <span className="toggle-description-opp">Receive push notifications in browser</span>
                  </div>
                  <label className="toggle-switch-opp">
                    <input
                      type="checkbox"
                      checked={notifications.pushNotifications}
                      onChange={() => handleNotificationToggle('pushNotifications')}
                    />
                    <span className="toggle-slider-opp"></span>
                  </label>
                </div>
              </div>

              <div className="form-actions-opp">
                <button className="cancel-btn-opp">Cancel</button>
                <button className="save-btn-opp" onClick={handleSave}>Save Preferences</button>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="settings-section-opp">
              <div className="section-header-opp">
                <h2 className="section-title-opp">Privacy Settings</h2>
                <p className="section-subtitle-opp">Control your privacy and data sharing preferences</p>
              </div>

              <div className="privacy-card-opp">
                <h3 className="card-title-opp">Profile Visibility</h3>
                <div className="radio-group-opp">
                  <label className="radio-label-opp">
                    <input
                      type="radio"
                      name="visibility"
                      checked={privacy.profileVisibility === 'public'}
                      onChange={() => setPrivacy(prev => ({ ...prev, profileVisibility: 'public' }))}
                    />
                    <div className="radio-content-opp">
                      <span className="radio-title-opp">Public</span>
                      <span className="radio-description-opp">Anyone can see your profile</span>
                    </div>
                  </label>
                  <label className="radio-label-opp">
                    <input
                      type="radio"
                      name="visibility"
                      checked={privacy.profileVisibility === 'private'}
                      onChange={() => setPrivacy(prev => ({ ...prev, profileVisibility: 'private' }))}
                    />
                    <div className="radio-content-opp">
                      <span className="radio-title-opp">Private</span>
                      <span className="radio-description-opp">Only you can see your profile</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="privacy-card-opp">
                <h3 className="card-title-opp">Contact Information</h3>
                <div className="toggle-row-opp">
                  <div className="toggle-info-opp">
                    <span className="toggle-label-opp">Show Email Address</span>
                    <span className="toggle-description-opp">Display email on your profile</span>
                  </div>
                  <label className="toggle-switch-opp">
                    <input
                      type="checkbox"
                      checked={privacy.showEmail}
                      onChange={() => handlePrivacyToggle('showEmail')}
                    />
                    <span className="toggle-slider-opp"></span>
                  </label>
                </div>
                <div className="toggle-row-opp">
                  <div className="toggle-info-opp">
                    <span className="toggle-label-opp">Show Phone Number</span>
                    <span className="toggle-description-opp">Display phone on your profile</span>
                  </div>
                  <label className="toggle-switch-opp">
                    <input
                      type="checkbox"
                      checked={privacy.showPhone}
                      onChange={() => handlePrivacyToggle('showPhone')}
                    />
                    <span className="toggle-slider-opp"></span>
                  </label>
                </div>
              </div>

              <div className="privacy-card-opp">
                <h3 className="card-title-opp">Data & Analytics</h3>
                <div className="toggle-row-opp">
                  <div className="toggle-info-opp">
                    <span className="toggle-label-opp">Share Usage Data</span>
                    <span className="toggle-description-opp">Help us improve by sharing anonymous usage data</span>
                  </div>
                  <label className="toggle-switch-opp">
                    <input
                      type="checkbox"
                      checked={privacy.dataSharing}
                      onChange={() => handlePrivacyToggle('dataSharing')}
                    />
                    <span className="toggle-slider-opp"></span>
                  </label>
                </div>
              </div>

              <div className="danger-zone-opp">
                <h3 className="danger-title-opp">Danger Zone</h3>
                <div className="danger-actions-opp">
                  <button className="danger-btn-opp">Download My Data</button>
                  <button className="danger-btn-opp delete-opp">Delete Account</button>
                </div>
              </div>

              <div className="form-actions-opp">
                <button className="cancel-btn-opp">Cancel</button>
                <button className="save-btn-opp" onClick={handleSave}>Save Settings</button>
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="settings-section-opp">
              <div className="section-header-opp">
                <h2 className="section-title-opp">Payment Methods</h2>
                <p className="section-subtitle-opp">Manage your payment methods and billing information</p>
              </div>

              <div className="payment-cards-opp">
                <div className="payment-card-item-opp">
                  <div className="card-brand-opp">
                    <CreditCardIcon className="card-icon-opp" />
                    <div>
                      <p className="card-number-opp">•••• •••• •••• 4242</p>
                      <p className="card-expiry-opp">Expires 12/25</p>
                    </div>
                  </div>
                  <div className="card-actions-opp">
                    <span className="default-badge-opp">Default</span>
                    <button className="card-action-btn-opp">Edit</button>
                    <button className="card-action-btn-opp delete-opp">Remove</button>
                  </div>
                </div>

                <div className="payment-card-item-opp">
                  <div className="card-brand-opp">
                    <CreditCardIcon className="card-icon-opp" />
                    <div>
                      <p className="card-number-opp">•••• •••• •••• 8888</p>
                      <p className="card-expiry-opp">Expires 06/26</p>
                    </div>
                  </div>
                  <div className="card-actions-opp">
                    <button className="card-action-btn-opp">Set as Default</button>
                    <button className="card-action-btn-opp">Edit</button>
                    <button className="card-action-btn-opp delete-opp">Remove</button>
                  </div>
                </div>
              </div>

              <button className="add-payment-btn-opp">
                + Add New Payment Method
              </button>

              <div className="billing-info-opp">
                <h3 className="card-title-opp">Billing Address</h3>
                <p className="billing-address-opp">
                  123 Marina Street<br />
                  Lagos, Lagos State 100001<br />
                  Nigeria
                </p>
                <button className="edit-billing-btn-opp">Edit Billing Address</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}