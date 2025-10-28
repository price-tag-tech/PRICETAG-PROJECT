// DisputeDetailPage.jsx
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
    IconDownload
} from '@tabler/icons-react';


const DisputeDetailPage = () => {
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const messagesEndRef = useRef(null);

    // Mock dispute data
    const dispute = {
        id: 'PTD-00123',
        transactionId: 'TXN-001',
        storeName: 'Tech Haven Store',
        type: 'Product Not Delivered',
        status: 'store_responded',
        date: '2024-01-15',
        lastUpdated: '2024-01-16',
        priority: 'high',
        description: 'Order was placed 2 weeks ago but item has not been delivered yet. Tracking shows no updates for 10 days.',
        userRole: 'customer',
        evidence: [
            { id: 1, name: 'order_confirmation.pdf', type: 'pdf', size: '2.1 MB' },
            { id: 2, name: 'tracking_screenshot.png', type: 'image', size: '1.5 MB' }
        ],
        messages: [
            {
                id: 1,
                sender: 'customer',
                senderName: 'You',
                message: 'I placed this order 2 weeks ago and it still hasn\'t arrived. The tracking information hasn\'t been updated in 10 days.',
                timestamp: '2024-01-15 10:30 AM',
                type: 'text'
            },
            {
                id: 2,
                sender: 'store',
                senderName: 'Tech Haven Support',
                message: 'We apologize for the delay. Let me check with our shipping partner and get back to you within 24 hours.',
                timestamp: '2024-01-15 02:15 PM',
                type: 'text'
            },
            {
                id: 3,
                sender: 'store',
                senderName: 'Tech Haven Support',
                message: 'We\'ve confirmed there was a shipping error. We\'re dispatching a replacement order today with expedited shipping at no extra cost.',
                timestamp: '2024-01-16 09:30 AM',
                type: 'text'
            },
            {
                id: 4,
                sender: 'admin',
                senderName: 'PriceTag Support',
                message: 'This dispute is under review. We recommend the store provide the new tracking number once available.',
                timestamp: '2024-01-16 11:45 AM',
                type: 'admin'
            }
        ]
    };

    const statusConfig = {
        pending: { label: 'Pending Response', color: 'por-status-badge--pending', icon: IconClock },
        store_responded: { label: 'Store Responded', color: 'por-status-badge--responded', icon: IconMessage },
        under_review: { label: 'Under Review', color: 'por-status-badge--review', icon: IconAlertCircle },
        resolved: { label: 'Resolved', color: 'por-status-badge--resolved', icon: IconCheck }
    };

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
            // In real app, this would be an API call
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

    const getSenderIcon = (sender) => {
        switch (sender) {
            case 'customer':
                return <IconUser size={16} className="por-message__icon" />;
            case 'store':
                return <IconBuildingStore size={16} className="por-message__icon" />;
            case 'admin':
                return <IconShield size={16} className="por-message__icon" />;
            default:
                return <IconUser size={16} className="por-message__icon" />;
        }
    };

    const getMessageClass = (sender) => {
        switch (sender) {
            case 'customer':
                return 'por-message--customer';
            case 'store':
                return 'por-message--store';
            case 'admin':
                return 'por-message--admin';
            default:
                return 'por-message--customer';
        }
    };

    const StatusIcon = getStatusInfo(dispute.status).icon;

    return (
        <div className="por-page">
            <div className="por-container">
                {/* Header */}
                <div className="por-detail-header">
                    <div className="por-detail-header__main">
                        <Link to="/user-dashboard/disputes" className="por-back-button">
                            <IconArrowLeft size={20} />
                            <span>Back to Disputes</span>
                        </Link>

                        <div className="por-detail-header__info">
                            <div className="por-detail-header__title-section">
                                <h1 className="por-detail-header__title">{dispute.id}</h1>
                                <div className="por-detail-header__badges">
                                    <span className={`por-status-badge ${getStatusInfo(dispute.status).color}`}>
                                        <StatusIcon size={14} className="por-status-badge__icon" />
                                        {getStatusInfo(dispute.status).label}
                                    </span>
                                    <span className="por-priority-badge por-priority-badge--high">
                                        High Priority
                                    </span>
                                </div>
                            </div>

                            <p className="por-detail-header__description">{dispute.description}</p>
                        </div>
                    </div>
                </div>

                <div className="por-detail-layout">
                    {/* Main Content - Conversation */}
                    <div className="por-detail-main">
                        <div className="por-conversation">
                            <div className="por-conversation__header">
                                <h2 className="por-conversation__title">Conversation</h2>
                                <div className="por-conversation__info">
                                    <span className="por-conversation__store">Store: {dispute.storeName}</span>
                                    <span className="por-conversation__type">Type: {dispute.type}</span>
                                </div>
                            </div>

                            {/* Messages Thread */}
                            <div className="por-conversation__messages">
                                {dispute.messages.map((msg) => (
                                    <div key={msg.id} className={`por-message ${getMessageClass(msg.sender)}`}>
                                        <div className="por-message__avatar">
                                            {getSenderIcon(msg.sender)}
                                        </div>
                                        <div className="por-message__content">
                                            <div className="por-message__header">
                                                <span className="por-message__sender">{msg.senderName}</span>
                                                <span className="por-message__timestamp">{msg.timestamp}</span>
                                            </div>
                                            <div className="por-message__text">
                                                {msg.message}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Reply Form */}
                            <form onSubmit={handleSendMessage} className="por-reply-form">
                                <div className="por-reply-form__header">
                                    <h3 className="por-reply-form__title">Add Your Response</h3>
                                    <div className="por-reply-form__actions">
                                        <label className="por-file-upload-button">
                                            <IconPaperclip size={18} />
                                            <input
                                                type="file"
                                                multiple
                                                onChange={handleFileUpload}
                                                className="por-file-upload-button__input"
                                                accept="image/*,.pdf,.doc,.docx"
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="por-reply-form__content">
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your response here... Be clear and provide any additional information that might help resolve this dispute."
                                        className="por-reply-form__textarea"
                                        rows="4"
                                    />

                                    <div className="por-reply-form__footer">
                                        <div className="por-reply-form__hint">
                                            Your response will be visible to the store and admin team.
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={!message.trim() || isSubmitting}
                                            className="por-button por-button--primary por-reply-form__submit"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="por-spinner"></div>
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

                    {/* Sidebar - Dispute Info */}
                    <div className="por-detail-sidebar">
                        <div className="por-dispute-info">
                            <h3 className="por-dispute-info__title">Dispute Information</h3>

                            <div className="por-dispute-info__section">
                                <h4 className="por-dispute-info__section-title">Details</h4>
                                <div className="por-dispute-info__items">
                                    <div className="por-dispute-info__item">
                                        <span className="por-dispute-info__label">Transaction ID:</span>
                                        <span className="por-dispute-info__value">{dispute.transactionId}</span>
                                    </div>
                                    <div className="por-dispute-info__item">
                                        <span className="por-dispute-info__label">Store:</span>
                                        <span className="por-dispute-info__value">{dispute.storeName}</span>
                                    </div>
                                    <div className="por-dispute-info__item">
                                        <span className="por-dispute-info__label">Type:</span>
                                        <span className="por-dispute-info__value">{dispute.type}</span>
                                    </div>
                                    <div className="por-dispute-info__item">
                                        <span className="por-dispute-info__label">Created:</span>
                                        <span className="por-dispute-info__value">{dispute.date}</span>
                                    </div>
                                    <div className="por-dispute-info__item">
                                        <span className="por-dispute-info__label">Last Updated:</span>
                                        <span className="por-dispute-info__value">{dispute.lastUpdated}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Evidence Section */}
                            <div className="por-dispute-info__section">
                                <h4 className="por-dispute-info__section-title">Evidence Files</h4>
                                <div className="por-evidence-list">
                                    {dispute.evidence.map((file) => {
                                        const displayName = file.name.length > 15 ? `${file.name.slice(0, 15)}...` : file.name;
                                        return (
                                            <div key={file.id} className="por-evidence-item">
                                                <div className="por-evidence-item__icon">
                                                    {file.type === 'pdf' ? '📄' : '🖼️'}
                                                </div>
                                                <div className="por-evidence-item__info">
                                                    <span className="por-evidence-item__name">{displayName}</span>
                                                    <span className="por-evidence-item__size">{file.size}</span>
                                                </div>
                                                <button className="por-evidence-item__download">
                                                    <IconDownload size={16} />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Actions Section */}
                            <div className="por-dispute-info__section">
                                <h4 className="por-dispute-info__section-title">Actions</h4>
                                <div className="por-dispute-actions">
                                    <button className="por-button por-button--outline por-button--full">
                                        Request Admin Review
                                    </button>
                                    <button className="por-button por-button--outline por-button--full">
                                        Mark as Resolved
                                    </button>
                                    <button className="por-button por-button--outline por-button--full">
                                        Close Dispute
                                    </button>
                                </div>
                            </div>

                            {/* Timeline Section */}
                            <div className="por-dispute-info__section">
                                <h4 className="por-dispute-info__section-title">Status Timeline</h4>
                                <div className="por-timeline">
                                    <div className="por-timeline__item por-timeline__item--completed">
                                        <div className="por-timeline__dot"></div>
                                        <div className="por-timeline__content">
                                            <span className="por-timeline__title">Dispute Raised</span>
                                            <span className="por-timeline__date">Jan 15, 2024</span>
                                        </div>
                                    </div>
                                    <div className="por-timeline__item por-timeline__item--completed">
                                        <div className="por-timeline__dot"></div>
                                        <div className="por-timeline__content">
                                            <span className="por-timeline__title">Store Responded</span>
                                            <span className="por-timeline__date">Jan 16, 2024</span>
                                        </div>
                                    </div>
                                    <div className="por-timeline__item por-timeline__item--current">
                                        <div className="por-timeline__dot"></div>
                                        <div className="por-timeline__content">
                                            <span className="por-timeline__title">Under Review</span>
                                            <span className="por-timeline__date">In Progress</span>
                                        </div>
                                    </div>
                                    <div className="por-timeline__item">
                                        <div className="por-timeline__dot"></div>
                                        <div className="por-timeline__content">
                                            <span className="por-timeline__title">Resolved</span>
                                            <span className="por-timeline__date">Pending</span>
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

export default DisputeDetailPage;