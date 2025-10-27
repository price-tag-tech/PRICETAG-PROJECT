import React, { useState } from 'react';
import { IconCamera, IconEdit, IconUpload, IconX, IconCheck, IconPlus,  IconChevronRight, IconBuildingStore } from '@tabler/icons-react';


const StoreProfile = () => {
  const [currentView, setCurrentView] = useState('select'); // 'select' or 'edit'
  const [selectedStore, setSelectedStore] = useState(null);
  const [storeName, setStoreName] = useState('');
  const [storeDescription, setStoreDescription] = useState('');
  const [storeEmail, setStoreEmail] = useState('');
  const [storePhone, setStorePhone] = useState('');
  const [storeAddress, setStoreAddress] = useState('');
  const [bannerPreview, setBannerPreview] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  // Mock user plan - change to 'Basic' to see single store view
  const userPlan = 'Pro';
  const maxStores = userPlan === 'Pro' ? 5 : 1;

  // Mock stores data
  const stores = [
    {
      id: 1,
      name: 'PG Store',
      description: 'Your one-stop shop for quality tech products and accessories',
      email: 'pgstore@email.com',
      phone: '+234 801 234 5678',
      address: '123 Market Street, Port Harcourt, Rivers State',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=PG',
      banner: null,
      plan: 'Starter Spark Plan'
    },
    {
      id: 2,
      name: 'Tech Haven Store',
      description: 'Premium electronics and gadgets',
      email: 'techhaven@email.com',
      phone: '+234 802 345 6789',
      address: '456 Tech Avenue, Lagos, Nigeria',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=TH',
      banner: null,
      plan: 'Pro Plan'
    }
  ];

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
    setStoreName(store.name);
    setStoreDescription(store.description);
    setStoreEmail(store.email);
    setStorePhone(store.phone);
    setStoreAddress(store.address);
    setBannerPreview(store.banner);
    setLogoPreview(store.logo);
    setCurrentView('edit');
  };

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

  const handleSave = () => {
    alert('Store profile updated successfully!');
  };

  const handleBackToStores = () => {
    setCurrentView('select');
    setSelectedStore(null);
  };

  // If user has Basic plan or only one store, go directly to edit view
  if (userPlan === 'Basic' || stores.length === 1) {
    if (currentView === 'select') {
      handleStoreSelect(stores[0]);
    }
  }

  // Store Selection View
  if (currentView === 'select' && userPlan === 'Pro') {
    return (
      <div className="ptf-profile-container">
        <div className="ptf-profile-wrapper">
          {/* Header */}
          <div className="ptf-profile-header">
            <h1 className="ptf-profile-title">Select Store to Edit</h1>
            <p className="ptf-profile-subtitle">Choose which store you want to manage</p>
          </div>

          {/* Store Grid */}
          <div className="ptf-stores-grid">
            {stores.map((store) => (
              <div 
                key={store.id} 
                className="ptf-store-card"
                onClick={() => handleStoreSelect(store)}
              >
                <div className="ptf-store-card-header">
                  <div className="ptf-store-card-logo">
                    <img src={store.logo} alt={store.name} />
                  </div>
                  <div className="ptf-store-card-arrow">
                    <IconChevronRight size={20} />
                  </div>
                </div>
                <h3 className="ptf-store-card-name">{store.name}</h3>
                <p className="ptf-store-card-description">{store.description}</p>
                <div className="ptf-store-card-plan">{store.plan}</div>
              </div>
            ))}

            {/* Add New Store Card */}
            {stores.length < maxStores && (
              <div className="ptf-store-card ptf-add-store-card">
                <div className="ptf-add-store-icon">
                  <IconPlus size={48} />
                </div>
                <h3 className="ptf-add-store-title">Add New Store</h3>
                <p className="ptf-add-store-description">
                  Create another store to expand your business
                </p>
                <div className="ptf-add-store-count">
                  {stores.length} of {maxStores} stores
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Store Edit View
  return (
    <div className="ptf-profile-container">
      <div className="ptf-profile-wrapper">
        {/* Back Button (only for Pro users with multiple stores) */}
        {userPlan === 'Pro' && stores.length > 1 && (
          <button className="ptf-back-btn" onClick={handleBackToStores}>
            ← Back to Stores
          </button>
        )}

        {/* Header */}
        <div className="ptf-profile-header">
          <h1 className="ptf-profile-title">Store Profile - {storeName}</h1>
          <p className="ptf-profile-subtitle">Manage your store information and appearance</p>
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

        {/* Store Preview Card */}
        <div className="ptf-preview-card">
          <h2 className="ptf-section-title">Store Preview</h2>
          <div className="ptf-preview-content">
            {/* Banner Preview */}
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
            {/* Logo Preview */}
            <div className="ptf-preview-logo">
              {logoPreview ? (
                <img src={logoPreview} alt="Store logo" />
              ) : (
                <div className="ptf-preview-logo-placeholder">
                  <IconBuildingStore size={32} />
                </div>
              )}
            </div>
            {/* Store Info Preview */}
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

        {/* Action Buttons */}
        <div className="ptf-actions">
          <button className="ptf-cancel-btn">Cancel</button>
          <button className="ptf-save-btn" onClick={handleSave}>
            <IconCheck size={20} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreProfile;