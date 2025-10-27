import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  IconCamera, 
  IconCheck, 
  IconX, 
  IconBuildingStore, 
  IconCreditCard,
  IconShield,
  IconBell,
  IconReceipt,
  IconUser,
  IconArrowLeft,
  IconDownload
} from '@tabler/icons-react';

const StoreProfile = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('general');
  const [storeName, setStoreName] = useState('');
  const [storeDescription, setStoreDescription] = useState('');
  const [storeEmail, setStoreEmail] = useState('');
  const [storePhone, setStorePhone] = useState('');
  const [storeAddress, setStoreAddress] = useState('');
  const [bannerPreview, setBannerPreview] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  // Billing State
  const [billingPlan, setBillingPlan] = useState('Pro');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/25');
  const [cardCVC, setCardCVC] = useState('123');

  // Security State
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState(60);

  // Notifications State
  const [emailNotifications, setEmailNotifications] = useState({
    orders: true,
    payments: true,
    inventory: false,
    promotions: true
  });
  const [pushNotifications, setPushNotifications] = useState({
    orders: true,
    messages: true,
    updates: false
  });

  // Invoice Settings
  const [invoiceSettings, setInvoiceSettings] = useState({
    companyName: '',
    taxId: '',
    address: '',
    currency: 'NGN',
    terms: 'Due upon receipt'
  });

  const userPlan = 'Pro';

  useEffect(() => {
    const fetchStoreData = async () => {
      setLoading(true);
      try {
        const mockStoreData = {
          1: {
            name: 'PG Store',
            description: 'Your one-stop shop for quality tech products and accessories',
            email: 'pgstore@email.com',
            phone: '+234 801 234 5678',
            address: '123 Market Street, Port Harcourt, Rivers State',
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=PG',
            banner: null
          },
          2: {
            name: 'Tech Haven Store',
            description: 'Premium electronics and gadgets',
            email: 'techhaven@email.com',
            phone: '+234 802 345 6789',
            address: '456 Tech Avenue, Lagos, Nigeria',
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=TH',
            banner: null
          }
        };

        const storeData = mockStoreData[storeId];
        if (storeData) {
          setStoreName(storeData.name);
          setStoreDescription(storeData.description);
          setStoreEmail(storeData.email);
          setStorePhone(storeData.phone);
          setStoreAddress(storeData.address);
          setLogoPreview(storeData.logo);
          setBannerPreview(storeData.banner);
        }
      } catch (error) {
        console.error('Error fetching store data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (storeId) {
      fetchStoreData();
    }
  }, [storeId]);

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      // Save logic here
      alert('Settings updated successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Failed to update settings');
    }
  };

  const handleDownloadInvoice = () => {
    // Invoice download logic
    alert('Invoice downloaded successfully!');
  };

  const tabs = [
    { id: 'general', label: 'General', icon: IconBuildingStore },
    { id: 'billing', label: 'Billing & Plans', icon: IconCreditCard },
    { id: 'security', label: 'Security', icon: IconShield },
    { id: 'notifications', label: 'Notifications', icon: IconBell },
    { id: 'invoices', label: 'Invoice Settings', icon: IconReceipt }
  ];

  if (loading) {
    return (
      <div className="ptf-profile-container">
        <div className="ptf-profile-wrapper">
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <p>Loading store data...</p>
          </div>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <>
            {/* Store Preview Card */}
            <div className="ptf-preview-card">
              <h2 className="ptf-section-title">Store Preview</h2>
              <div className="ptf-preview-content">
                <div className="ptf-preview-banner">
                  {bannerPreview ? (
                    <img src={bannerPreview} alt="Store banner" />
                  ) : (
                    <div className="ptf-preview-banner-placeholder">
                      <IconBuildingStore size={48} />
                      <span>No banner uploaded</span>
                    </div>
                  )}
                </div>
                <div className="ptf-preview-logo">
                  {logoPreview ? (
                    <img src={logoPreview} alt="Store logo" />
                  ) : (
                    <div className="ptf-preview-logo-placeholder">
                      <IconBuildingStore size={32} />
                    </div>
                  )}
                </div>
                <div className="ptf-preview-info">
                  <h3>{storeName || 'Store Name'}</h3>
                  <p>{storeDescription || 'Store description will appear here'}</p>
                </div>
              </div>
            </div>

            {/* Store Banner */}
            <div className="ptf-section-card">
              <div className="ptf-section-header">
                <h2 className="ptf-section-title">Store Banner</h2>
                <p className="ptf-section-description">Upload a banner image for your store (Recommended: 1200x400px)</p>
              </div>
              
              <div className="ptf-banner-upload">
                {bannerPreview ? (
                  <div className="ptf-banner-preview">
                    <img src={bannerPreview} alt="Banner preview" className="ptf-banner-image" />
                    <button 
                      className="ptf-remove-image-btn"
                      onClick={() => setBannerPreview(null)}
                    >
                      <IconX size={20} />
                    </button>
                  </div>
                ) : (
                  <label className="ptf-upload-area">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleBannerChange}
                      className="ptf-file-input"
                    />
                    <IconCamera size={48} className="ptf-upload-icon" />
                    <span className="ptf-upload-text">Click to upload banner image</span>
                    <span className="ptf-upload-hint">JPG, PNG or GIF (MAX. 5MB)</span>
                  </label>
                )}
              </div>
            </div>

            {/* Store Logo */}
            <div className="ptf-section-card">
              <div className="ptf-section-header">
                <h2 className="ptf-section-title">Store Logo</h2>
                <p className="ptf-section-description">Upload your store logo (Recommended: 200x200px)</p>
              </div>
              
              <div className="ptf-logo-upload">
                {logoPreview ? (
                  <div className="ptf-logo-preview">
                    <img src={logoPreview} alt="Logo preview" className="ptf-logo-image" />
                    <button 
                      className="ptf-remove-logo-btn"
                      onClick={() => setLogoPreview(null)}
                    >
                      <IconX size={16} />
                    </button>
                  </div>
                ) : (
                  <label className="ptf-logo-upload-area">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleLogoChange}
                      className="ptf-file-input"
                    />
                    <IconCamera size={32} className="ptf-logo-upload-icon" />
                    <span className="ptf-logo-upload-text">Upload Logo</span>
                  </label>
                )}
              </div>
            </div>

            {/* Store Information */}
            <div className="ptf-section-card">
              <div className="ptf-section-header">
                <h2 className="ptf-section-title">Store Information</h2>
                <p className="ptf-section-description">Update your store details</p>
              </div>
              
              <div className="ptf-form-grid">
                <div className="ptf-form-group ptf-full-width">
                  <label className="ptf-form-label">Store Name</label>
                  <input 
                    type="text" 
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="ptf-form-input"
                    placeholder="Enter store name"
                  />
                </div>

                <div className="ptf-form-group ptf-full-width">
                  <label className="ptf-form-label">Store Description</label>
                  <textarea 
                    value={storeDescription}
                    onChange={(e) => setStoreDescription(e.target.value)}
                    className="ptf-form-textarea"
                    placeholder="Describe your store"
                    rows="4"
                  />
                </div>

                <div className="ptf-form-group">
                  <label className="ptf-form-label">Email Address</label>
                  <input 
                    type="email" 
                    value={storeEmail}
                    onChange={(e) => setStoreEmail(e.target.value)}
                    className="ptf-form-input"
                    placeholder="store@email.com"
                  />
                </div>

                <div className="ptf-form-group">
                  <label className="ptf-form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    value={storePhone}
                    onChange={(e) => setStorePhone(e.target.value)}
                    className="ptf-form-input"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div className="ptf-form-group ptf-full-width">
                  <label className="ptf-form-label">Store Address</label>
                  <input 
                    type="text" 
                    value={storeAddress}
                    onChange={(e) => setStoreAddress(e.target.value)}
                    className="ptf-form-input"
                    placeholder="Enter your store address"
                  />
                </div>
              </div>
            </div>
          </>
        );

      case 'billing':
        return (
          <>
            {/* Current Plan */}
            <div className="ptf-section-card">
              <h2 className="ptf-section-title">Current Plan</h2>
              <div className="ptf-plan-display">
                <div className="ptf-plan-badge-large">
                  <IconCheck size={20} />
                  {billingPlan} Plan
                </div>
                <div className="ptf-plan-features">
                  <div className="ptf-plan-feature">
                    <IconCheck size={16} />
                    <span>Up to 5 stores</span>
                  </div>
                  <div className="ptf-plan-feature">
                    <IconCheck size={16} />
                    <span>Advanced analytics</span>
                  </div>
                  <div className="ptf-plan-feature">
                    <IconCheck size={16} />
                    <span>Priority support</span>
                  </div>
                </div>
                <div className="ptf-billing-cycle">
                  <button 
                    className={`ptf-cycle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
                    onClick={() => setBillingCycle('monthly')}
                  >
                    Monthly - ₦15,000
                  </button>
                  <button 
                    className={`ptf-cycle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
                    onClick={() => setBillingCycle('yearly')}
                  >
                    Yearly - ₦150,000 (Save 20%)
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="ptf-section-card">
              <h2 className="ptf-section-title">Payment Method</h2>
              <div className="ptf-payment-methods">
                <div className="ptf-payment-method">
                  <input 
                    type="radio" 
                    id="card" 
                    name="payment" 
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <label htmlFor="card">Credit/Debit Card</label>
                </div>
                <div className="ptf-payment-method">
                  <input 
                    type="radio" 
                    id="bank" 
                    name="payment" 
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                  />
                  <label htmlFor="bank">Bank Transfer</label>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="ptf-card-form">
                  <div className="ptf-form-group">
                    <label className="ptf-form-label">Card Number</label>
                    <input 
                      type="text" 
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="ptf-form-input"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="ptf-form-row">
                    <div className="ptf-form-group">
                      <label className="ptf-form-label">Expiry Date</label>
                      <input 
                        type="text" 
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="ptf-form-input"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="ptf-form-group">
                      <label className="ptf-form-label">CVC</label>
                      <input 
                        type="text" 
                        value={cardCVC}
                        onChange={(e) => setCardCVC(e.target.value)}
                        className="ptf-form-input"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Billing History */}
            <div className="ptf-section-card">
              <h2 className="ptf-section-title">Billing History</h2>
              <div className="ptf-billing-history">
                <div className="ptf-billing-item">
                  <div className="ptf-billing-info">
                    <span className="ptf-billing-date">Nov 15, 2023</span>
                    <span className="ptf-billing-description">Pro Plan - Monthly</span>
                  </div>
                  <div className="ptf-billing-amount">₦15,000</div>
                  <button className="ptf-download-btn" onClick={handleDownloadInvoice}>
                    <IconDownload size={16} />
                    Invoice
                  </button>
                </div>
                <div className="ptf-billing-item">
                  <div className="ptf-billing-info">
                    <span className="ptf-billing-date">Oct 15, 2023</span>
                    <span className="ptf-billing-description">Pro Plan - Monthly</span>
                  </div>
                  <div className="ptf-billing-amount">₦15,000</div>
                  <button className="ptf-download-btn" onClick={handleDownloadInvoice}>
                    <IconDownload size={16} />
                    Invoice
                  </button>
                </div>
              </div>
            </div>
          </>
        );

      case 'security':
        return (
          <>
            <div className="ptf-section-card">
              <h2 className="ptf-section-title">Security Settings</h2>
              
              <div className="ptf-security-item">
                <div className="ptf-security-info">
                  <h3>Two-Factor Authentication</h3>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <label className="ptf-toggle">
                  <input 
                    type="checkbox" 
                    checked={twoFactorAuth}
                    onChange={(e) => setTwoFactorAuth(e.target.checked)}
                  />
                  <span className="ptf-toggle-slider"></span>
                </label>
              </div>

              <div className="ptf-security-item">
                <div className="ptf-security-info">
                  <h3>Login Alerts</h3>
                  <p>Get notified of new sign-ins from unknown devices</p>
                </div>
                <label className="ptf-toggle">
                  <input 
                    type="checkbox" 
                    checked={loginAlerts}
                    onChange={(e) => setLoginAlerts(e.target.checked)}
                  />
                  <span className="ptf-toggle-slider"></span>
                </label>
              </div>

              <div className="ptf-security-item">
                <div className="ptf-security-info">
                  <h3>Session Timeout</h3>
                  <p>Automatically log out after period of inactivity</p>
                </div>
                <select 
                  value={sessionTimeout}
                  onChange={(e) => setSessionTimeout(e.target.value)}
                  className="ptf-form-select"
                >
                  <option value={30}>30 minutes</option>
                  <option value={60}>1 hour</option>
                  <option value={120}>2 hours</option>
                  <option value={240}>4 hours</option>
                </select>
              </div>
            </div>
          </>
        );

      case 'notifications':
        return (
          <>
            <div className="ptf-section-card">
              <h2 className="ptf-section-title">Email Notifications</h2>
              
              {Object.entries(emailNotifications).map(([key, value]) => (
                <div key={key} className="ptf-notification-item">
                  <div className="ptf-notification-info">
                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                    <p>Receive email notifications for {key}</p>
                  </div>
                  <label className="ptf-toggle">
                    <input 
                      type="checkbox" 
                      checked={value}
                      onChange={(e) => setEmailNotifications(prev => ({
                        ...prev,
                        [key]: e.target.checked
                      }))}
                    />
                    <span className="ptf-toggle-slider"></span>
                  </label>
                </div>
              ))}
            </div>

            <div className="ptf-section-card">
              <h2 className="ptf-section-title">Push Notifications</h2>
              
              {Object.entries(pushNotifications).map(([key, value]) => (
                <div key={key} className="ptf-notification-item">
                  <div className="ptf-notification-info">
                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                    <p>Receive push notifications for {key}</p>
                  </div>
                  <label className="ptf-toggle">
                    <input 
                      type="checkbox" 
                      checked={value}
                      onChange={(e) => setPushNotifications(prev => ({
                        ...prev,
                        [key]: e.target.checked
                      }))}
                    />
                    <span className="ptf-toggle-slider"></span>
                  </label>
                </div>
              ))}
            </div>
          </>
        );

      case 'invoices':
        return (
          <>
            <div className="ptf-section-card">
              <h2 className="ptf-section-title">Invoice Settings</h2>
              
              <div className="ptf-form-grid">
                <div className="ptf-form-group">
                  <label className="ptf-form-label">Company Name</label>
                  <input 
                    type="text" 
                    value={invoiceSettings.companyName}
                    onChange={(e) => setInvoiceSettings(prev => ({
                      ...prev,
                      companyName: e.target.value
                    }))}
                    className="ptf-form-input"
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="ptf-form-group">
                  <label className="ptf-form-label">Tax ID</label>
                  <input 
                    type="text" 
                    value={invoiceSettings.taxId}
                    onChange={(e) => setInvoiceSettings(prev => ({
                      ...prev,
                      taxId: e.target.value
                    }))}
                    className="ptf-form-input"
                    placeholder="Tax Identification Number"
                  />
                </div>

                <div className="ptf-form-group ptf-full-width">
                  <label className="ptf-form-label">Business Address</label>
                  <textarea 
                    value={invoiceSettings.address}
                    onChange={(e) => setInvoiceSettings(prev => ({
                      ...prev,
                      address: e.target.value
                    }))}
                    className="ptf-form-textarea"
                    placeholder="Your business address for invoices"
                    rows="3"
                  />
                </div>

                <div className="ptf-form-group">
                  <label className="ptf-form-label">Currency</label>
                  <select 
                    value={invoiceSettings.currency}
                    onChange={(e) => setInvoiceSettings(prev => ({
                      ...prev,
                      currency: e.target.value
                    }))}
                    className="ptf-form-select"
                  >
                    <option value="NGN">NGN - Nigerian Naira</option>
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                  </select>
                </div>

                <div className="ptf-form-group">
                  <label className="ptf-form-label">Payment Terms</label>
                  <select 
                    value={invoiceSettings.terms}
                    onChange={(e) => setInvoiceSettings(prev => ({
                      ...prev,
                      terms: e.target.value
                    }))}
                    className="ptf-form-select"
                  >
                    <option value="Due upon receipt">Due upon receipt</option>
                    <option value="Net 15">Net 15</option>
                    <option value="Net 30">Net 30</option>
                    <option value="Net 60">Net 60</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="ptf-profile-container">
      <div className="ptf-profile-wrapper">
        {/* Header */}
        <div className="ptf-profile-header">
          <button 
            className="ptf-back-btn"
            onClick={() => navigate(-1)}
          >
            <IconArrowLeft size={20} />
            Back
          </button>
          <h1 className="ptf-profile-title">Store Settings - {storeName}</h1>
          <p className="ptf-profile-subtitle">Manage your store settings and preferences</p>
        </div>

        {/* Current Plan Badge */}
        <div className="ptf-plan-card">
          <div className="ptf-plan-content">
            <div className="ptf-plan-left">
              <div className="ptf-plan-badge">
                <IconCheck size={18} />
                {userPlan} Plan
              </div>
              <div className="ptf-member-since">
                Member since May 3, 2015
              </div>
            </div>
            <button className="ptf-upgrade-btn">
              Upgrade Plan
            </button>
          </div>
        </div>

        {/* Settings Tabs */}
        <div className="ptf-settings-layout">
          {/* Sidebar Tabs */}
          <div className="ptf-settings-sidebar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`ptf-tab-btn ${activeTab === tab.id ? 'ptf-tab-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="ptf-settings-content">
            {renderTabContent()}

            {/* Save Button */}
            <div className="ptf-actions">
              <button className="ptf-cancel-btn">Cancel</button>
              <button className="ptf-save-btn" onClick={handleSave}>
                <IconCheck size={20} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreProfile;