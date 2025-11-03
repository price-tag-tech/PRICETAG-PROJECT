import { IconSettings, IconBell, IconMail, IconShield } from '@tabler/icons-react';
import React, { useState } from 'react';

const PlatformSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'YourPlatform',
    siteUrl: 'https://yourplatform.com',
    maintenanceMode: false,
    registrationEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
    commissionRate: 5,
    minWithdrawal: 5000
  });

  const settingsSections = [
    {
      title: 'General Settings',
      icon: IconSettings,
      fields: [
        { label: 'Site Name', value: settings.siteName, key: 'siteName', type: 'text' },
        { label: 'Site URL', value: settings.siteUrl, key: 'siteUrl', type: 'text' },
        { label: 'Maintenance Mode', value: settings.maintenanceMode, key: 'maintenanceMode', type: 'toggle' },
        { label: 'User Registration', value: settings.registrationEnabled, key: 'registrationEnabled', type: 'toggle' }
      ]
    },
    {
      title: 'Notification Settings',
      icon: IconBell,
      fields: [
        { label: 'Email Notifications', value: settings.emailNotifications, key: 'emailNotifications', type: 'toggle' },
        { label: 'SMS Notifications', value: settings.smsNotifications, key: 'smsNotifications', type: 'toggle' }
      ]
    },
    {
      title: 'Financial Settings',
      icon: IconShield,
      fields: [
        { label: 'Commission Rate (%)', value: settings.commissionRate, key: 'commissionRate', type: 'number' },
        { label: 'Minimum Withdrawal (₦)', value: settings.minWithdrawal, key: 'minWithdrawal', type: 'number' }
      ]
    }
  ];

  return (
    <div className="overview-container-ovr">
      <div className="store-welcome">
        <div>
          <h1 className="store-welcome-title">Platform Settings</h1>
          <span className="store-member-since">Configure platform-wide settings</span>
        </div>
        <div className="store-actions">
          <button className="store-upload-btn">Save All Changes</button>
        </div>
      </div>

      {settingsSections.map((section, idx) => (
        <div key={idx} className="store-orders-card admin-settings-card">
          <div className="store-orders-header">
            <div className="admin-settings-header">
              <section.icon size={24} />
              <h2>{section.title}</h2>
            </div>
          </div>
          
          <div className="admin-settings-content">
            {section.fields.map((field) => (
              <div key={field.key} className="admin-settings-row">
                <label className="admin-settings-label">{field.label}</label>
                {field.type === 'toggle' ? (
                  <label className="admin-toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={field.value}
                      onChange={(e) => setSettings({...settings, [field.key]: e.target.checked})}
                      className="admin-toggle-input"
                    />
                    <span className={`admin-toggle-slider ${field.value ? 'admin-toggle-active' : ''}`}>
                      <span className="admin-toggle-circle" />
                    </span>
                  </label>
                ) : (
                  <input 
                    type={field.type}
                    value={field.value}
                    onChange={(e) => setSettings({...settings, [field.key]: e.target.value})}
                    className="admin-settings-input"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformSettings;

