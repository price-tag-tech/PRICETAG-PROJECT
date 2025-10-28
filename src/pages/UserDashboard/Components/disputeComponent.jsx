import React, { useState } from 'react';
import { IconX, IconUpload, IconCheck, IconAlertCircle, IconFileText, IconTrash, IconFlag } from '@tabler/icons-react';

const DisputeResolution = ({ transactionData = null, buttonStyle = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [disputeId, setDisputeId] = useState('');

  const [formData, setFormData] = useState({
    transactionId: transactionData?.id || '',
    storeName: transactionData?.storeName || '',
    disputeType: '',
    description: '',
    evidence: []
  });

  const [errors, setErrors] = useState({});

  // Mock transaction data for dropdown
  const mockTransactions = [
    { id: 'TXN-001', storeName: 'Tech Haven Store', orderNumber: '#020192', date: '2024-01-15' },
    { id: 'TXN-002', storeName: 'Fashion Boutique', orderNumber: '#020193', date: '2024-01-14' },
    { id: 'TXN-003', storeName: 'Electronics Hub', orderNumber: '#020194', date: '2024-01-13' }
  ];

  const disputeTypes = [
    { value: 'not-delivered', label: 'Product Not Delivered' },
    { value: 'wrong-item', label: 'Wrong Item Received' },
    { value: 'payment-issue', label: 'Payment Issue' },
    { value: 'poor-service', label: 'Poor Service' },
    { value: 'damaged-product', label: 'Damaged Product' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          evidence: 'Each file must be less than 5MB'
        }));
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      const newFiles = validFiles.map(file => ({
        file,
        name: file.name,
        size: file.size,
        preview: URL.createObjectURL(file)
      }));

      setFormData(prev => ({
        ...prev,
        evidence: [...prev.evidence, ...newFiles].slice(0, 5)
      }));

      if (errors.evidence) {
        setErrors(prev => ({
          ...prev,
          evidence: ''
        }));
      }
    }
  };

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      evidence: prev.evidence.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.transactionId) {
      newErrors.transactionId = 'Please select a transaction';
    }

    if (!formData.disputeType) {
      newErrors.disputeType = 'Please select a dispute type';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your issue';
    } else if (formData.description.length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `PTD-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
      setDisputeId(generatedId);
      setIsSubmitting(false);
      setShowSuccess(true);

      setTimeout(() => {
        handleClose();
      }, 3000);
    }, 1500);
  };

  const handleClose = () => {
    setFormData({
      transactionId: transactionData?.id || '',
      storeName: transactionData?.storeName || '',
      disputeType: '',
      description: '',
      evidence: []
    });
    setErrors({});
    setShowSuccess(false);
    setDisputeId('');
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  // Button style variants
  const getButtonClass = () => {
    switch (buttonStyle) {
      case 'primary':
        return 'dsp-trigger-btn dsp-btn-primary';
      case 'danger':
        return 'dsp-trigger-btn dsp-btn-danger';
      case 'outline':
        return 'dsp-trigger-btn dsp-btn-outline';
      case 'link':
        return 'dsp-trigger-btn dsp-btn-link';
      default:
        return 'dsp-trigger-btn dsp-btn-default';
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button className={getButtonClass()} onClick={handleOpen}>
        <IconFlag size={18} />
        <span>Raise Dispute</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          <div className="dsp-modal-backdrop" onClick={handleClose} />

          <div className="dsp-modal">
            {!showSuccess ? (
              <>
                {/* Header */}
                <div className="dsp-modal-header">
                  <div>
                    <h2 className="dsp-modal-title">Raise a Dispute</h2>
                    <p className="dsp-modal-subtitle">
                      We'll help you resolve your issue. Typically resolved within 5 business days.
                    </p>
                  </div>
                  <button className="dsp-close-btn" onClick={handleClose}>
                    <IconX size={24} />
                  </button>
                </div>

                {/* Progress Steps */}
                <div className="dsp-progress-container">
                  <div className="dsp-progress-steps">
                    <div className="dsp-progress-step dsp-step-active">
                      <div className="dsp-step-circle">1</div>
                      <span className="dsp-step-label">Raise Dispute</span>
                    </div>
                    <div className="dsp-progress-line" />
                    <div className="dsp-progress-step">
                      <div className="dsp-step-circle">2</div>
                      <span className="dsp-step-label">Store Response</span>
                    </div>
                    <div className="dsp-progress-line" />
                    <div className="dsp-progress-step">
                      <div className="dsp-step-circle">3</div>
                      <span className="dsp-step-label">Admin Review</span>
                    </div>
                    <div className="dsp-progress-line" />
                    <div className="dsp-progress-step">
                      <div className="dsp-step-circle">4</div>
                      <span className="dsp-step-label">Resolved</span>
                    </div>
                  </div>
                </div>

                {/* Form Content */}
                <div className="dsp-modal-content">
                  {/* Transaction Selection */}
                  <div className="dsp-form-group">
                    <label className="dsp-form-label" htmlFor="transactionId">
                      Select Transaction <span className="dsp-required">*</span>
                    </label>
                    <select
                      id="transactionId"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleInputChange}
                      className={`dsp-form-select ${errors.transactionId ? 'dsp-error' : ''}`}
                      disabled={!!transactionData}
                    >
                      <option value="">Choose a transaction...</option>
                      {mockTransactions.map((txn) => (
                        <option key={txn.id} value={txn.id}>
                          {txn.storeName} - {txn.orderNumber} ({txn.date})
                        </option>
                      ))}
                    </select>
                    {errors.transactionId && (
                      <span className="dsp-form-error">
                        <IconAlertCircle size={14} />
                        {errors.transactionId}
                      </span>
                    )}
                  </div>

                  {/* Dispute Type */}
                  <div className="dsp-form-group">
                    <label className="dsp-form-label" htmlFor="disputeType">
                      Dispute Type <span className="dsp-required">*</span>
                    </label>
                    <select
                      id="disputeType"
                      name="disputeType"
                      value={formData.disputeType}
                      onChange={handleInputChange}
                      className={`dsp-form-select ${errors.disputeType ? 'dsp-error' : ''}`}
                    >
                      <option value="">Select dispute type...</option>
                      {disputeTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.disputeType && (
                      <span className="dsp-form-error">
                        <IconAlertCircle size={14} />
                        {errors.disputeType}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <div className="dsp-form-group">
                    <label className="dsp-form-label" htmlFor="description">
                      Describe Your Issue <span className="dsp-required">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Please provide detailed information about your issue..."
                      rows="5"
                      className={`dsp-form-textarea ${errors.description ? 'dsp-error' : ''}`}
                    />
                    <div className="dsp-character-count">
                      {formData.description.length} characters
                    </div>
                    {errors.description && (
                      <span className="dsp-form-error">
                        <IconAlertCircle size={14} />
                        {errors.description}
                      </span>
                    )}
                  </div>

                  {/* Evidence Upload */}
                  <div className="dsp-form-group">
                    <label className="dsp-form-label">
                      Upload Evidence (Optional)
                    </label>
                    <p className="dsp-form-hint">
                      Upload images or documents to support your claim (Max 5 files, 5MB each)
                    </p>

                    <label className="dsp-upload-area">
                      <input
                        type="file"
                        accept="image/*,.pdf,.doc,.docx"
                        multiple
                        onChange={handleFileUpload}
                        className="dsp-upload-input"
                        disabled={formData.evidence.length >= 5}
                      />
                      <div className="dsp-upload-content">
                        <IconUpload size={32} />
                        <p className="dsp-upload-text">Click to upload files</p>
                        <p className="dsp-upload-subtext">Images, PDF, Word documents</p>
                      </div>
                    </label>

                    {errors.evidence && (
                      <span className="dsp-form-error">
                        <IconAlertCircle size={14} />
                        {errors.evidence}
                      </span>
                    )}

                    {/* Uploaded Files */}
                    {formData.evidence.length > 0 && (
                      <div className="dsp-files-list">
                        {formData.evidence.map((file, index) => (
                          <div key={index} className="dsp-file-item">
                            <IconFileText size={20} className="dsp-file-icon" />
                            <div className="dsp-file-info">
                              <span className="dsp-file-name">{file.name}</span>
                              <span className="dsp-file-size">
                                {(file.size / 1024).toFixed(1)} KB
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="dsp-file-remove"
                            >
                              <IconTrash size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Info Box */}
                  <div className="dsp-info-box">
                    <IconAlertCircle size={20} />
                    <div>
                      <p className="dsp-info-title">What happens next?</p>
                      <p className="dsp-info-text">
                        Once submitted, the store owner will be notified and has 48 hours to respond. 
                        Our admin team will review both sides and make a fair decision within 5 business days.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="dsp-form-actions">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="dsp-btn-secondary"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="dsp-btn-primary-action"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="dsp-spinner"></span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <IconCheck size={20} />
                          Submit Dispute
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="dsp-success-container">
                <div className="dsp-success-icon">
                  <IconCheck size={48} />
                </div>
                <h2 className="dsp-success-title">Dispute Submitted Successfully!</h2>
                <p className="dsp-success-message">
                  Your dispute has been submitted and assigned reference ID:
                </p>
                <div className="dsp-dispute-id">#{disputeId}</div>
                <p className="dsp-success-info">
                  You and the store owner will receive notifications. You can track the progress 
                  in your dashboard under "My Disputes".
                </p>
                <button onClick={handleClose} className="dsp-btn-primary-action">
                  Close
                </button>
              </div>
            )}
          </div>
        </>
      )}

 
    </>
  );
};

export default DisputeResolution;