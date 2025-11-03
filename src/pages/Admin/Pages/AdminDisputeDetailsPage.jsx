// AdminDisputeDetailPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  IconArrowLeft,
  IconClock,
  IconMessage,
  IconCheck,
  IconAlertCircle,
  IconPaperclip,
  IconSend,
  IconUser,
  IconBuildingStore,
  IconShield,
  IconCurrencyDollar,
  IconRefresh,
  IconPackage,
  IconDiscount,
  IconMail,
  IconFileText,
  IconDownload,
  IconExternalLink
} from '@tabler/icons-react';

const AdminDisputeDetailPage = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeAction, setActiveAction] = useState(null);
  const messagesEndRef = useRef(null);

  // Mock dispute data from admin perspective
  const dispute = {
    id: 'PTD-00123',
    transactionId: 'TXN-001',
    storeName: 'Tech Haven Store',
    storeId: 'STORE-001',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    type: 'Product Not Delivered',
    status: 'under_review',
    date: '2024-01-15',
    lastUpdated: '2024-01-16',
    priority: 'high',
    description: 'Order was placed 2 weeks ago but item has not been delivered yet. Tracking shows no updates for 10 days.',
    responseDeadline: '2024-01-17',
    evidence: [
      { id: 1, name: 'order_confirmation.pdf', type: 'pdf', size: '2.1 MB', uploadedBy: 'customer' },
      { id: 2, name: 'tracking_screenshot.png', type: 'image', size: '1.5 MB', uploadedBy: 'customer' },
      { id: 3, name: 'shipping_proof.pdf', type: 'pdf', size: '1.8 MB', uploadedBy: 'store' },
      { id: 4, name: 'store_response.txt', type: 'text', size: '0.2 MB', uploadedBy: 'store' }
    ],
    orderDetails: {
      orderNumber: '#ORD-001',
      product: 'Wireless Headphones Pro X',
      quantity: 1,
      amount: '₦99,999',
      orderDate: '2024-01-01',
      shippingAddress: '123 Main St, City, State 12345',
      paymentMethod: 'Credit Card',
      customerPhone: '+234 801 234 5678'
    },
    storeDetails: {
      name: 'Tech Haven Store',
      email: 'support@techhaven.com',
      phone: '+234 802 345 6789',
      address: '456 Business Ave, Lagos, Nigeria'
    },
    messages: [
      {
        id: 1,
        sender: 'customer',
        senderName: 'John Doe',
        message: 'I placed this order 2 weeks ago and it still hasn\'t arrived. The tracking information hasn\'t been updated in 10 days. This is very frustrating.',
        timestamp: '2024-01-15 10:30 AM',
        type: 'text'
      },
      {
        id: 2,
        sender: 'store',
        senderName: 'Tech Haven Support',
        message: 'We apologize for the delay. Let me check with our shipping partner and get back to you within 24 hours. We value your business and will resolve this promptly.',
        timestamp: '2024-01-15 02:15 PM',
        type: 'text'
      },
      {
        id: 3,
        sender: 'admin',
        senderName: 'Admin Team',
        message: 'This dispute is now under admin review. We will work with both parties to reach a fair resolution.',
        timestamp: '2024-01-16 09:00 AM',
        type: 'text'
      }
    ],
    timeline: [
      { id: 1, event: 'Dispute Opened', date: '2024-01-15', status: 'completed' },
      { id: 2, event: 'Store Responded', date: '2024-01-15', status: 'completed' },
      { id: 3, event: 'Admin Review Started', date: '2024-01-16', status: 'current' },
      { id: 4, event: 'Resolution Decision', date: 'Pending', status: 'pending' },
      { id: 5, event: 'Dispute Closed', date: 'Pending', status: 'pending' }
    ]
  };

  const statusConfig = {
    pending: {
      label: 'Response Required',
      color: 'sddp-status-badge--pending',
      icon: IconClock,
      description: 'Waiting for store response'
    },
    responded: {
      label: 'Store Responded',
      color: 'sddp-status-badge--responded',
      icon: IconMessage,
      description: 'Store has responded'
    },
    under_review: {
      label: 'Under Admin Review',
      color: 'sddp-status-badge--review',
      icon: IconShield,
      description: 'Admin is reviewing the case'
    },
    resolved: {
      label: 'Resolved',
      color: 'sddp-status-badge--resolved',
      icon: IconCheck,
      description: 'Dispute has been resolved'
    }
  };

  // Admin-specific response templates
  const responseTemplates = [
    {
      id: 1,
      title: 'Request Additional Info',
      message: 'To help us resolve this dispute effectively, could you please provide additional information about...'
    },
    {
      id: 2,
      title: 'Resolution Proposal',
      message: 'After reviewing the evidence, we propose the following resolution to this dispute...'
    },
    {
      id: 3,
      title: 'Escalation Notice',
      message: 'This dispute requires further investigation. We are escalating it to our senior support team for review.'
    },
    {
      id: 4,
      title: 'Final Decision',
      message: 'Based on our review of all available evidence, we have reached the following decision...'
    }
  ];

  // Admin resolution actions
  const resolutionActions = [
    {
      id: 'refund',
      title: 'Full Refund',
      description: 'Issue full refund to customer',
      icon: IconCurrencyDollar,
      color: 'sddp-quick-action--refund'
    },
    {
      id: 'partial',
      title: 'Partial Refund',
      description: 'Issue partial refund to customer',
      icon: IconDiscount,
      color: 'sddp-quick-action--partial'
    },
    {
      id: 'replace',
      title: 'Replace Product',
      description: 'Arrange product replacement',
      icon: IconPackage,
      color: 'sddp-quick-action--replace'
    },
    {
      id: 'contact',
      title: 'Contact Parties',
      description: 'Contact customer and store',
      icon: IconMail,
      color: 'sddp-quick-action--contact'
    }
  ];

  const getStatusInfo = (status) => statusConfig[status] || statusConfig.pending;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [dispute.messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // In real app, this would be an API call to send message
      console.log('Sending admin message:', message);
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    // Handle file upload logic here
    console.log('Admin files to upload:', files);
  };

  const useTemplate = (template) => {
    setMessage(template.message);
  };

  const handleResolutionAction = (actionId) => {
    setActiveAction(actionId);
    // In real app, this would trigger the specific resolution workflow
    console.log('Admin resolution action:', actionId);
  };

  const getSenderIcon = (sender) => {
    switch (sender) {
      case 'customer':
        return <IconUser size={16} className="sddp-message__icon" />;
      case 'store':
        return <IconBuildingStore size={16} className="sddp-message__icon" />;
      case 'admin':
        return <IconShield size={16} className="sddp-message__icon" />;
      default:
        return <IconUser size={16} className="sddp-message__icon" />;
    }
  };

  const getMessageClass = (sender) => {
    switch (sender) {
      case 'customer':
        return 'sddp-message--customer';
      case 'store':
        return 'sddp-message--store';
      case 'admin':
        return 'sddp-message--admin';
      default:
        return 'sddp-message--customer';
    }
  };

  const StatusIcon = getStatusInfo(dispute.status).icon;

  return (
    <div className="sddp-page">
      <div className="sddp-container">
        {/* Header */}
        <div className="sddp-header">
          <div className="sddp-header__main">
            <Link to="/admin/disputes" className="sddp-back-button">
              <IconArrowLeft size={20} />
              <span>Back to All Disputes</span>
            </Link>

            <div className="sddp-header__info">
              <div className="sddp-header__title-section">
                <div>
                  <h1 className="sddp-header__title">{dispute.id}</h1>
                  <p className="sddp-header__customer">
                    Customer: {dispute.customerName} • Store: {dispute.storeName}
                  </p>
                </div>
                <div className="sddp-header__badges">
                  <span className={`sddp-status-badge ${getStatusInfo(dispute.status).color}`}>
                    <StatusIcon size={14} className="sddp-status-badge__icon" />
                    {getStatusInfo(dispute.status).label}
                  </span>
                  <span className="sddp-priority-badge sddp-priority-badge--high">
                    High Priority
                  </span>
                </div>
              </div>

              <p className="sddp-header__description">{dispute.description}</p>
            </div>
          </div>
        </div>

        <div className="sddp-layout">
          {/* Main Content - Conversation */}
          <div className="sddp-main">
            <div className="sddp-conversation">
              <div className="sddp-conversation__header">
                <h2 className="sddp-conversation__title">Dispute Conversation</h2>
                <div className="sddp-conversation__info">
                  <span className="sddp-conversation__customer">{dispute.customerName}</span>
                  <span className="sddp-conversation__type">Type: {dispute.type}</span>
                  <span className="sddp-conversation__order">Order: {dispute.orderDetails.orderNumber}</span>
                </div>
              </div>

              {/* Admin Response Templates */}
              <div className="sddp-templates">
                <h3 className="sddp-templates__title">Admin Response Templates</h3>
                <div className="sddp-templates__grid">
                  {responseTemplates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => useTemplate(template)}
                      className="sddp-template__button"
                    >
                      <span className="sddp-template__title">{template.title}</span>
                      <span className="sddp-template__preview">{template.message}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages Thread */}
              <div className="sddp-conversation__messages">
                {dispute.messages.map((msg) => (
                  <div key={msg.id} className={`sddp-message ${getMessageClass(msg.sender)}`}>
                    <div className="sddp-message__avatar">
                      {getSenderIcon(msg.sender)}
                    </div>
                    <div className="sddp-message__content">
                      <div className="sddp-message__header">
                        <span className="sddp-message__sender">{msg.senderName}</span>
                        <span className="sddp-message__timestamp">{msg.timestamp}</span>
                      </div>
                      <div className="sddp-message__text">
                        {msg.message}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Admin Reply Form */}
              <form onSubmit={handleSendMessage} className="sddp-reply-form">
                <div className="sddp-reply-form__header">
                  <h3 className="sddp-reply-form__title">Admin Response</h3>
                  <div className="sddp-reply-form__actions">
                    <label className="sddp-file-upload-button">
                      <IconPaperclip size={18} />
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="sddp-file-upload-button__input"
                        accept="image/*,.pdf,.doc,.docx"
                      />
                    </label>
                  </div>
                </div>

                <div className="sddp-reply-form__content">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your response to both parties... Your message will be visible to both customer and store."
                    className="sddp-reply-form__textarea"
                    rows="4"
                  />

                  <div className="sddp-reply-form__footer">
                    <div className="sddp-reply-form__hint">
                      Your response will be visible to both customer and store.
                    </div>
                    <button
                      type="submit"
                      disabled={!message.trim() || isSubmitting}
                      className="sddp-button sddp-button--primary sddp-reply-form__submit"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="sddp-spinner"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <IconSend size={18} />
                          <span>Send Admin Response</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar - Admin Actions & Info */}
          <div className="sddp-sidebar">
            <div className="sddp-dispute-info">
              <h3 className="sddp-dispute-info__title">Admin Controls</h3>

             

              {/* Order Details */}
              <div className="sddp-dispute-info__section">
                <h4 className="sddp-dispute-info__section-title">Order Details</h4>
                <div className="sddp-dispute-info__items">
                  <div className="sddp-dispute-info__item">
                    <span className="sddp-dispute-info__label">Order Number:</span>
                    <span className="sddp-dispute-info__value">
                      <Link to={`/admin/orders/${dispute.orderDetails.orderNumber}`} className="sddp-link">
                        {dispute.orderDetails.orderNumber}
                        <IconExternalLink size={12} style={{marginLeft: '4px'}} />
                      </Link>
                    </span>
                  </div>
                  <div className="sddp-dispute-info__item">
                    <span className="sddp-dispute-info__label">Product:</span>
                    <span className="sddp-dispute-info__value">{dispute.orderDetails.product}</span>
                  </div>
                  <div className="sddp-dispute-info__item">
                    <span className="sddp-dispute-info__label">Amount:</span>
                    <span className="sddp-dispute-info__value" style={{fontWeight: '600', color: '#16a34a'}}>
                      {dispute.orderDetails.amount}
                    </span>
                  </div>
                  <div className="sddp-dispute-info__item">
                    <span className="sddp-dispute-info__label">Order Date:</span>
                    <span className="sddp-dispute-info__value">{dispute.orderDetails.orderDate}</span>
                  </div>
                  <div className="sddp-dispute-info__item">
                    <span className="sddp-dispute-info__label">Shipping Address:</span>
                    <span className="sddp-dispute-info__value sddp-dispute-info__value--address">
                      {dispute.orderDetails.shippingAddress}
                    </span>
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="sddp-dispute-info__section">
                <h4 className="sddp-dispute-info__section-title">Customer Information</h4>
                <div className="sddp-dispute-info__items">
                  <div className="sddp-dispute-info__item">
                    <span className="sddp-dispute-info__label">Name:</span>
                    <span className="sddp-dispute-info__value">{dispute.customerName}</span>
                  </div>
                  <div className="sddp-dispute-info__item">
                    <span className="sddp-dispute-info__label">Email:</span>
                    <span className="sddp-dispute-info__value">{dispute.customerEmail}</span>
                  </div>
                  <div className="sddp-dispute-info__item">
                    <span className="sddp-dispute-info__label">Phone:</span>
                    <span className="sddp-dispute-info__value">{dispute.orderDetails.customerPhone}</span>
                  </div>
                </div>
              </div>

              {/* Store Information */}
              <div className="sddp-dispute-info__section">
                <h4 className="sddp-dispute-info__section-title">Store Information</h4>
                <div className="sddp-dispute-info__items">
                  <div className="sddp-dispute-info__item">
                    <span className="sddp-dispute-info__label">Store Name:</span>
                    <span className="sddp-dispute-info__value">
                      <Link to={`/admin/stores/${dispute.storeId}`} className="sddp-link">
                        {dispute.storeName}
                        <IconExternalLink size={12} style={{marginLeft: '4px'}} />
                      </Link>
                    </span>
                  </div>
                  <div className="sddp-dispute-info__item">
                    <span className="sddp-dispute-info__label">Email:</span>
                    <span className="sddp-dispute-info__value">{dispute.storeDetails.email}</span>
                  </div>
                  <div className="sddp-dispute-info__item">
                    <span className="sddp-dispute-info__label">Phone:</span>
                    <span className="sddp-dispute-info__value">{dispute.storeDetails.phone}</span>
                  </div>
                </div>
              </div>

              {/* Evidence Section */}
              <div className="sddp-dispute-info__section">
                <h4 className="sddp-dispute-info__section-title">Evidence Files</h4>
                <div className="sddp-evidence-list">
                  {dispute.evidence.map((file) => (
                    <div key={file.id} className="sddp-evidence-item">
                      <div className="sddp-evidence-item__icon">
                        {file.type === 'pdf' ? '📄' : file.type === 'image' ? '🖼️' : '📝'}
                      </div>
                      <div className="sddp-evidence-item__info">
                        <span className="sddp-evidence-item__name">
                          {file.name.length > 14 ? `${file.name.slice(0, 14)}…` : file.name}
                        </span>
                        <span className="sddp-evidence-item__meta">
                          {file.size} • {file.uploadedBy}
                        </span>
                      </div>
                      <button className="sddp-evidence-item__download">
                        <IconDownload size={14} />
                      </button>
                    </div>
                  ))}
                </div>
               
              </div>

              {/* Admin Resolution Actions */}
              <div className="sddp-dispute-info__section">
                <h4 className="sddp-dispute-info__section-title">Final Resolution</h4>
                <div className="sddp-resolution-actions">
                  <button className="sddp-button sddp-button--primary sddp-button--full">
                    <IconCheck size={16} />
                    <span>Close Dispute</span>
                  </button>
                  <button className="sddp-button sddp-button--secondary sddp-button--full">
                    <IconRefresh size={16} />
                    <span>Request More Info</span>
                  </button>
                </div>
              </div>

              {/* Admin Timeline */}
              <div className="sddp-dispute-info__section">
                <h4 className="sddp-dispute-info__section-title">Admin Timeline</h4>
                <div className="sddp-timeline">
                  {dispute.timeline.map((item) => (
                    <div key={item.id} className={`sddp-timeline__item sddp-timeline__item--${item.status}`}>
                      <div className="sddp-timeline__dot"></div>
                      <div className="sddp-timeline__content">
                        <span className="sddp-timeline__title">{item.event}</span>
                        <span className="sddp-timeline__date">{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDisputeDetailPage;