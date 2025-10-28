import React, { useState } from 'react';
import { IconArrowLeft, IconUpload, IconX, IconCheck, IconAlertCircle, IconPlus, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const CreateStorePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    storeName: '',
    storeDescription: '',
    storeUrl: '',
    categories: [],
    offerServices: false,
    logo: null,
    banner: null
  });

  const [errors, setErrors] = useState({});
  const [logoPreview, setLogoPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);

  const availableCategories = [
    'Fashion & Apparel',
    'Electronics & Gadgets',
    'Home & Garden',
    'Beauty & Cosmetics',
    'Sports & Outdoors',
    'Books & Stationery',
    'Food & Beverages',
    'Toys & Games',
    'Jewelry & Accessories',
    'Health & Wellness',
    'Art & Crafts',
    'Automotive',
    'Pet Supplies',
    'Office Supplies',
    'Baby & Kids',
    'Music & Instruments',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCategoryToggle = (category) => {
    setFormData(prev => {
      const categories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories };
    });
    // Clear category error
    if (errors.categories) {
      setErrors(prev => ({
        ...prev,
        categories: ''
      }));
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          logo: 'File size must be less than 5MB'
        }));
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({
          ...prev,
          logo: 'Please upload an image file'
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        logo: file
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Clear logo error
      if (errors.logo) {
        setErrors(prev => ({
          ...prev,
          logo: ''
        }));
      }
    }
  };

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          banner: 'File size must be less than 10MB'
        }));
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({
          ...prev,
          banner: 'Please upload an image file'
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        banner: file
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Clear banner error
      if (errors.banner) {
        setErrors(prev => ({
          ...prev,
          banner: ''
        }));
      }
    }
  };

  const removeLogo = () => {
    setFormData(prev => ({
      ...prev,
      logo: null
    }));
    setLogoPreview(null);
  };

  const removeBanner = () => {
    setFormData(prev => ({
      ...prev,
      banner: null
    }));
    setBannerPreview(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.storeName.trim()) {
      newErrors.storeName = 'Store name is required';
    } else if (formData.storeName.length < 3) {
      newErrors.storeName = 'Store name must be at least 3 characters';
    }

    if (!formData.storeDescription.trim()) {
      newErrors.storeDescription = 'Store description is required';
    } else if (formData.storeDescription.length < 20) {
      newErrors.storeDescription = 'Description must be at least 20 characters';
    }

    if (!formData.storeUrl.trim()) {
      newErrors.storeUrl = 'Store URL is required';
    } else if (!/^[a-z0-9-]+$/.test(formData.storeUrl)) {
      newErrors.storeUrl = 'URL can only contain lowercase letters, numbers, and hyphens';
    }

    if (formData.categories.length === 0) {
      newErrors.categories = 'Please select at least one category';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Redirect after success
      setTimeout(() => {
        navigate('/store-dashboard');
      }, 2000);
    }, 1500);
  };

  const handleBack = () => {
    navigate('/store-dashboard');
  };

  return (
    <div className="stx-create-store-page">
      <div className="stx-create-store-container">
        {/* Header */}
        <div className="stx-create-store-header">
          <button className="stx-back-btn" onClick={handleBack}>
            <IconArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="stx-create-store-content">
          <div className="stx-create-store-form-wrapper">
            <div className="stx-create-store-title-section">
              <h1 className="stx-create-store-title">Create Your Store</h1>
              <p className="stx-create-store-subtitle">
                Set up your new store in minutes. Fill in the details below to get started.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="stx-create-store-form">
              {/* Store Images Section */}
              <div className="stx-section">
                <h2 className="stx-section-title">Store Images</h2>
                
                {/* Store Logo */}
                <div className="stx-form-group">
                  <label className="stx-form-label">Store Logo <span className="stx-required">*</span></label>
                  <p className="stx-form-hint">Upload your store logo (recommended: 500x500px, max 5MB)</p>
                  
                  {!logoPreview ? (
                    <label className="stx-logo-upload-area">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="stx-logo-upload-input"
                      />
                      <div className="stx-logo-upload-content">
                        <div className="stx-logo-upload-icon">
                          <IconUpload size={32} />
                        </div>
                        <p className="stx-logo-upload-text">Click to upload logo</p>
                        <p className="stx-logo-upload-subtext">PNG, JPG, GIF up to 5MB</p>
                      </div>
                    </label>
                  ) : (
                    <div className="stx-logo-preview-container">
                      <img src={logoPreview} alt="Logo preview" className="stx-logo-preview" />
                      <button type="button" onClick={removeLogo} className="stx-logo-remove-btn">
                        <IconX size={18} />
                      </button>
                    </div>
                  )}
                  {errors.logo && <span className="stx-form-error">{errors.logo}</span>}
                </div>

                {/* Store Banner */}
                <div className="stx-form-group">
                  <label className="stx-form-label">Store Banner</label>
                  <p className="stx-form-hint">Upload a banner for your store (recommended: 1920x400px, max 10MB)</p>
                  
                  {!bannerPreview ? (
                    <label className="stx-banner-upload-area">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleBannerUpload}
                        className="stx-banner-upload-input"
                      />
                      <div className="stx-banner-upload-content">
                        <div className="stx-banner-upload-icon">
                          <IconUpload size={32} />
                        </div>
                        <p className="stx-banner-upload-text">Click to upload banner</p>
                        <p className="stx-banner-upload-subtext">PNG, JPG up to 10MB</p>
                      </div>
                    </label>
                  ) : (
                    <div className="stx-banner-preview-container">
                      <img src={bannerPreview} alt="Banner preview" className="stx-banner-preview" />
                      <button type="button" onClick={removeBanner} className="stx-banner-remove-btn">
                        <IconX size={18} />
                      </button>
                    </div>
                  )}
                  {errors.banner && <span className="stx-form-error">{errors.banner}</span>}
                </div>
              </div>

              {/* Store Details Section */}
              <div className="stx-section">
                <h2 className="stx-section-title">Store Details</h2>
                
                {/* Store Name */}
                <div className="stx-form-group">
                  <label className="stx-form-label" htmlFor="storeName">
                    Store Name <span className="stx-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="storeName"
                    name="storeName"
                    value={formData.storeName}
                    onChange={handleInputChange}
                    placeholder="e.g., Tech Haven Store"
                    className={`stx-form-input ${errors.storeName ? 'stx-error' : ''}`}
                  />
                  {errors.storeName && <span className="stx-form-error">{errors.storeName}</span>}
                </div>

                {/* Store URL */}
                <div className="stx-form-group">
                  <label className="stx-form-label" htmlFor="storeUrl">
                    Store URL <span className="stx-required">*</span>
                  </label>
                  <div className="stx-url-input-wrapper">
                    <span className="stx-url-prefix">yourstore.com/</span>
                    <input
                      type="text"
                      id="storeUrl"
                      name="storeUrl"
                      value={formData.storeUrl}
                      onChange={handleInputChange}
                      placeholder="my-store"
                      className={`stx-form-input stx-url-input ${errors.storeUrl ? 'stx-error' : ''}`}
                    />
                  </div>
                  {errors.storeUrl && <span className="stx-form-error">{errors.storeUrl}</span>}
                </div>

                {/* Store Description */}
                <div className="stx-form-group">
                  <label className="stx-form-label" htmlFor="storeDescription">
                    Store Description <span className="stx-required">*</span>
                  </label>
                  <textarea
                    id="storeDescription"
                    name="storeDescription"
                    value={formData.storeDescription}
                    onChange={handleInputChange}
                    placeholder="Tell customers about your store..."
                    rows="4"
                    className={`stx-form-textarea ${errors.storeDescription ? 'stx-error' : ''}`}
                  />
                  <div className="stx-character-count">
                    {formData.storeDescription.length} characters
                  </div>
                  {errors.storeDescription && <span className="stx-form-error">{errors.storeDescription}</span>}
                </div>
              </div>

              {/* Store Categories Section */}
              <div className="stx-section">
                <h2 className="stx-section-title">Store Categories</h2>
                <p className="stx-section-subtitle">Select all categories that apply to your store</p>
                
                <div className="stx-form-group">
                  <div className="stx-categories-grid">
                    {availableCategories.map((category) => (
                      <label key={category} className="stx-category-checkbox">
                        <input
                          type="checkbox"
                          checked={formData.categories.includes(category)}
                          onChange={() => handleCategoryToggle(category)}
                          className="stx-checkbox-input"
                        />
                        <span className="stx-checkbox-custom">
                          <IconCheck size={14} />
                        </span>
                        <span className="stx-category-label">{category}</span>
                      </label>
                    ))}
                  </div>
                  {errors.categories && <span className="stx-form-error">{errors.categories}</span>}
                  {formData.categories.length > 0 && (
                    <div className="stx-selected-count">
                      {formData.categories.length} {formData.categories.length === 1 ? 'category' : 'categories'} selected
                    </div>
                  )}
                </div>
              </div>

              {/* Services Section */}
              <div className="stx-section">
                <h2 className="stx-section-title">Service Offerings</h2>
                
                <div className="stx-form-group">
                  <label className="stx-service-checkbox">
                    <input
                      type="checkbox"
                      name="offerServices"
                      checked={formData.offerServices}
                      onChange={handleInputChange}
                      className="stx-checkbox-input"
                    />
                    <span className="stx-checkbox-custom stx-checkbox-large">
                      <IconCheck size={16} />
                    </span>
                    <div className="stx-service-checkbox-content">
                      <span className="stx-service-checkbox-title">I want to list services on my store</span>
                      <span className="stx-service-checkbox-description">
                        Enable this if you offer services in addition to or instead of physical products
                      </span>
                    </div>
                  </label>
                </div>

                {formData.offerServices && (
                  <div className="stx-service-info-box">
                    <IconAlertCircle size={20} />
                    <div>
                      <p className="stx-service-info-title">Services Enabled</p>
                      <p className="stx-service-info-text">
                        You'll be able to add service listings after creating your store. Services can include consultations, repairs, installations, and more.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="stx-form-actions">
                <button
                  type="button"
                  onClick={handleBack}
                  className="stx-btn-secondary"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="stx-btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="stx-spinner"></span>
                      Creating Store...
                    </>
                  ) : (
                    <>
                      <IconCheck size={20} />
                      Create Store
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Info Card */}
          <div className="stx-info-card">
            <div className="stx-info-icon">
              <IconAlertCircle size={24} />
            </div>
            <h3 className="stx-info-title">Getting Started</h3>
            <ul className="stx-info-list">
              <li>Upload a professional logo and banner to build brand identity</li>
              <li>Choose a unique and memorable store name</li>
              <li>Your store URL will be used in your store link</li>
              <li>Select all relevant categories for better discoverability</li>
              <li>Enable services if you offer them alongside products</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <>
          <div className="stx-modal-backdrop" />
          <div className="stx-success-modal">
            <div className="stx-success-icon">
              <IconCheck size={48} />
            </div>
            <h2 className="stx-success-title">Store Created Successfully!</h2>
            <p className="stx-success-message">
              Your store has been created. Redirecting to dashboard...
            </p>
          </div>
        </>
      )}

   
    </div>
  );
};

export default CreateStorePage;