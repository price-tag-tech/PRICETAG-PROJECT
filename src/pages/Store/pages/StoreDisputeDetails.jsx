// StoreDisputeDetailPage.jsx
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
    IconMail
} from '@tabler/icons-react';


const StoreDisputeDetailPage = () => {
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeAction, setActiveAction] = useState(null);
    const messagesEndRef = useRef(null);

    // Mock dispute data from store perspective
    const dispute = {
        id: 'PTD-00123',
        transactionId: 'TXN-001',
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        type: 'Product Not Delivered',
        status: 'pending',
        date: '2024-01-15',
        lastUpdated: '2024-01-16',
        priority: 'high',
        description: 'Order was placed 2 weeks ago but item has not been delivered yet. Tracking shows no updates for 10 days.',
        userRole: 'store',
        responseDeadline: '2024-01-17',
        evidence: [
            { id: 1, name: 'order_confirmation.pdf', type: 'pdf', size: '2.1 MB', uploadedBy: 'customer' },
            { id: 2, name: 'tracking_screenshot.png', type: 'image', size: '1.5 MB', uploadedBy: 'customer' },
            { id: 3, name: 'shipping_proof.pdf', type: 'pdf', size: '1.8 MB', uploadedBy: 'store' }
        ],
        orderDetails: {
            orderNumber: '#ORD-001',
            product: 'Wireless Headphones Pro X',
            quantity: 1,
            amount: '$99.99',
            orderDate: '2024-01-01',
            shippingAddress: '123 Main St, City, State 12345',
            paymentMethod: 'Credit Card'
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
            }
        ]
    };

    const statusConfig = {
        pending: {
            label: 'Response Required',
            color: 'sddp-status-badge--pending',
            icon: IconClock,
            description: 'Waiting for your response'
        },
        responded: {
            label: 'Responded',
            color: 'sddp-status-badge--responded',
            icon: IconMessage,
            description: 'You have responded'
        },
        under_review: {
            label: 'Under Admin Review',
            color: 'sddp-status-badge--review',
            icon: IconAlertCircle,
            description: 'Admin is reviewing the case'
        },
        resolved: {
            label: 'Resolved',
            color: 'sddp-status-badge--resolved',
            icon: IconCheck,
            description: 'Dispute has been resolved'
        }
    };

    // Store-specific response templates
    const responseTemplates = [
        {
            id: 1,
            title: 'Apology & Investigation',
            message: 'We sincerely apologize for the inconvenience. Our team is currently investigating this issue and we will provide you with an update within 24 hours.'
        },
        {
            id: 2,
            title: 'Shipping Issue',
            message: 'We\'ve identified a shipping delay. We\'re working with our carrier to locate your package and will provide expedited shipping for the replacement.'
        },
        {
            id: 3,
            title: 'Refund Offer',
            message: 'We understand your frustration. We can process a full refund immediately, or if you prefer, we can send a replacement with expedited shipping.'
        },
        {
            id: 4,
            title: 'Partial Refund',
            message: 'We apologize for the issue. We can offer a 50% refund as compensation while you keep the product, or a full refund upon return.'
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
            console.log('Sending message:', message);
            setMessage('');
            setIsSubmitting(false);
        }, 1000);
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        // Handle file upload logic here
        console.log('Files to upload:', files);
    };

    const handleQuickAction = (action) => {
        setActiveAction(action);
        // Implement quick action logic based on the action type
        console.log('Quick action:', action);
    };

    const useTemplate = (template) => {
        setMessage(template.message);
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

    const getResponseTime = (deadline) => {
        const today = new Date();
        const deadlineDate = new Date(deadline);
        const diffTime = deadlineDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return { text: 'Response Overdue', color: 'sddp-deadline--overdue' };
        if (diffDays === 0) return { text: 'Due today', color: 'sddp-deadline--urgent' };
        if (diffDays === 1) return { text: 'Due tomorrow', color: 'sddp-deadline--urgent' };
        return { text: `Due in ${diffDays} days`, color: 'sddp-deadline--normal' };
    };

    const StatusIcon = getStatusInfo(dispute.status).icon;
    const deadlineInfo = getResponseTime(dispute.responseDeadline);
    const { storeId } = useParams();
    // Function to generate navigation links with storeId
    const getStoreLink = (path) => {
        if (storeId) {
            return `/store-dashboard/${storeId}${path}`;
        }
        return `/store-dashboard${path}`;
    };
    return (
        <div className="sddp-page">
            <div className="sddp-container">
                {/* Header */}
                <div className="sddp-header">
                    <div className="sddp-header__main">
                        <Link to={getStoreLink("/disputes")} className="sddp-back-button">
                            <IconArrowLeft size={20} />
                            <span>Back to Disputes</span>
                        </Link>

                        <div className="sddp-header__info">
                            <div className="sddp-header__title-section">
                                <div>
                                    <h1 className="sddp-header__title">{dispute.id}</h1>
                                    <p className="sddp-header__customer">Customer: {dispute.customerName}</p>
                                </div>
                                <div className="sddp-header__badges">
                                    <span className={`sddp-status-badge ${getStatusInfo(dispute.status).color}`}>
                                        <StatusIcon size={14} className="sddp-status-badge__icon" />
                                        {getStatusInfo(dispute.status).label}
                                    </span>
                                    <span className="sddp-priority-badge sddp-priority-badge--high">
                                        High Priority
                                    </span>
                                    {dispute.status === 'pending' && (
                                        <div className={`sddp-deadline ${deadlineInfo.color}`}>
                                            <IconClock size={14} />
                                            <span>{deadlineInfo.text}</span>
                                        </div>
                                    )}
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

                            {/* Response Templates */}
                            {dispute.status === 'pending' && (
                                <div className="sddp-templates">
                                    <h3 className="sddp-templates__title">Quick Response Templates</h3>
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
                            )}

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

                            {/* Reply Form */}
                            <form onSubmit={handleSendMessage} className="sddp-reply-form">
                                <div className="sddp-reply-form__header">
                                    <h3 className="sddp-reply-form__title">
                                        {dispute.status === 'pending' ? 'Respond to Customer' : 'Add Response'}
                                    </h3>
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
                                        placeholder="Type your response to the customer... Be professional and provide clear solutions."
                                        className="sddp-reply-form__textarea"
                                        rows="4"
                                    />

                                    <div className="sddp-reply-form__footer">
                                        <div className="sddp-reply-form__hint">
                                            Your response will be visible to the customer and admin team.
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
                                                    <span>Send Response</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Sidebar - Store Actions & Info */}
                    <div className="sddp-sidebar">
                        <div className="sddp-dispute-info">
                            <h3 className="sddp-dispute-info__title">Dispute Management</h3>

                            {/* Quick Actions for Store */}
                            {dispute.status === 'pending' && (
                                <div className="sddp-dispute-info__section">
                                    <h4 className="sddp-dispute-info__section-title">Quick Actions</h4>
                                    <div className="sddp-quick-actions">
                                        <button
                                            onClick={() => handleQuickAction('full_refund')}
                                            className="sddp-quick-action sddp-quick-action--refund"
                                        >
                                            <IconCurrencyDollar size={20} />
                                            <span>Offer Full Refund</span>
                                        </button>
                                        <button
                                            onClick={() => handleQuickAction('replacement')}
                                            className="sddp-quick-action sddp-quick-action--replace"
                                        >
                                            <IconPackage size={20} />
                                            <span>Send Replacement</span>
                                        </button>
                                        <button
                                            onClick={() => handleQuickAction('partial_refund')}
                                            className="sddp-quick-action sddp-quick-action--partial"
                                        >
                                            <IconDiscount size={20} />
                                            <span>Partial Refund</span>
                                        </button>
                                        <button
                                            onClick={() => handleQuickAction('contact_customer')}
                                            className="sddp-quick-action sddp-quick-action--contact"
                                        >
                                            <IconMail size={20} />
                                            <span>Contact Customer</span>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Order Details */}
                            <div className="sddp-dispute-info__section">
                                <h4 className="sddp-dispute-info__section-title">Order Details</h4>
                                <div className="sddp-dispute-info__items">
                                    <div className="sddp-dispute-info__item">
                                        <span className="sddp-dispute-info__label">Order Number:</span>
                                        <span className="sddp-dispute-info__value">{dispute.orderDetails.orderNumber}</span>
                                    </div>
                                    <div className="sddp-dispute-info__item">
                                        <span className="sddp-dispute-info__label">Product:</span>
                                        <span className="sddp-dispute-info__value">{dispute.orderDetails.product}</span>
                                    </div>
                                    <div className="sddp-dispute-info__item">
                                        <span className="sddp-dispute-info__label">Amount:</span>
                                        <span className="sddp-dispute-info__value">{dispute.orderDetails.amount}</span>
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
                                </div>
                            </div>

                            {/* Evidence Section */}
                            <div className="sddp-dispute-info__section">
                                <h4 className="sddp-dispute-info__section-title">Evidence Files</h4>
                                <div className="sddp-evidence-list">
                                    {dispute.evidence.map((file) => (
                                        <div key={file.id} className="sddp-evidence-item">
                                            <div className="sddp-evidence-item__icon">
                                                {file.type === 'pdf' ? '📄' : '🖼️'}
                                            </div>
                                            <div className="sddp-evidence-item__info">
                                                <span className="sddp-evidence-item__name">
                                                    {(file.name && file.name.length > 14) ? `${file.name.slice(0, 14)}…` : file.name}
                                                </span>
                                                <span className="sddp-evidence-item__meta">
                                                    {file.size} • {file.uploadedBy}
                                                </span>
                                            </div>
                                            <button className="sddp-evidence-item__download">
                                                View
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <button className="sddp-button sddp-button--outline sddp-button--full">
                                    <IconPaperclip size={16} />
                                    <span>Upload Store Evidence</span>
                                </button>
                            </div>

                            {/* Resolution Actions */}
                            <div className="sddp-dispute-info__section">
                                <h4 className="sddp-dispute-info__section-title">Resolution</h4>
                                <div className="sddp-resolution-actions">
                                    <button className="sddp-button sddp-button--secondary sddp-button--full">
                                        <IconCheck size={16} />
                                        <span>Mark as Resolved</span>
                                    </button>
                                    <button className="sddp-button sddp-button--outline sddp-button--full">
                                        <IconRefresh size={16} />
                                        <span>Escalate to Admin</span>
                                    </button>
                                </div>
                            </div>

                            {/* Response Timeline */}
                            <div className="sddp-dispute-info__section">
                                <h4 className="sddp-dispute-info__section-title">Response Timeline</h4>
                                <div className="sddp-timeline">
                                    <div className="sddp-timeline__item sddp-timeline__item--completed">
                                        <div className="sddp-timeline__dot"></div>
                                        <div className="sddp-timeline__content">
                                            <span className="sddp-timeline__title">Dispute Opened</span>
                                            <span className="sddp-timeline__date">Jan 15, 2024</span>
                                        </div>
                                    </div>
                                    <div className="sddp-timeline__item sddp-timeline__item--current">
                                        <div className="sddp-timeline__dot"></div>
                                        <div className="sddp-timeline__content">
                                            <span className="sddp-timeline__title">Store Response Required</span>
                                            <span className="sddp-timeline__date">Due: Jan 17, 2024</span>
                                        </div>
                                    </div>
                                    <div className="sddp-timeline__item">
                                        <div className="sddp-timeline__dot"></div>
                                        <div className="sddp-timeline__content">
                                            <span className="sddp-timeline__title">Admin Review</span>
                                            <span className="sddp-timeline__date">If escalated</span>
                                        </div>
                                    </div>
                                    <div className="sddp-timeline__item">
                                        <div className="sddp-timeline__dot"></div>
                                        <div className="sddp-timeline__content">
                                            <span className="sddp-timeline__title">Resolved</span>
                                            <span className="sddp-timeline__date">Pending</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreDisputeDetailPage;