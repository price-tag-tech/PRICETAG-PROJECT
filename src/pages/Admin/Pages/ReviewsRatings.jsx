import React, { useState } from 'react';
import { 
  IconStar, 
  IconStarFilled, 
  IconSearch, 
  IconFilter, 
  IconCheck, 
  IconX, 
  IconEye, 
  IconEyeOff,
  IconMessage,
  IconUser,
  IconCalendar,
  IconThumbUp,
  IconThumbDown,
  IconDotsVertical,
  IconRefresh,
  IconPhoto,
  IconChevronDown,
  IconChevronUp
} from '@tabler/icons-react';

const ReviewsRatings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterRating, setFilterRating] = useState('all');
  const [selectedReviews, setSelectedReviews] = useState([]);
  const [expandedReview, setExpandedReview] = useState(null);

  const reviews = [
    {
      id: 1,
      customer: {
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com',
        avatar: 'SJ',
        joinDate: '2023-05-15'
      },
      product: {
        name: 'Wireless Bluetooth Headphones Pro',
        category: 'Electronics',
        price: '$129.99',
        image: '/api/placeholder/80/80'
      },
      rating: 5,
      title: 'Excellent sound quality!',
      comment: 'These headphones have amazing sound quality and the battery life is incredible. Very comfortable for long listening sessions. The noise cancellation works perfectly in noisy environments.',
      fullComment: `These headphones have amazing sound quality and the battery life is incredible. Very comfortable for long listening sessions. The noise cancellation works perfectly in noisy environments.

I've been using them for my daily commute and the battery easily lasts through the week. The build quality feels premium and they're very durable. The carrying case is compact and protects them well when traveling.

The only minor issue is that the touch controls can be a bit sensitive, but you get used to it quickly. Overall, highly recommended!`,
      date: '2024-11-15',
      time: '14:30',
      status: 'approved',
      verifiedPurchase: true,
      helpful: 12,
      unhelpful: 2,
      images: ['/api/placeholder/100/100', '/api/placeholder/100/100'],
      replies: [
        {
          id: 1,
          author: 'Store Manager',
          comment: 'Thank you for your wonderful feedback, Sarah! We are delighted to hear you are enjoying the headphones. We appreciate you mentioning the touch controls sensitivity - our team is working on improving this in the next firmware update.',
          date: '2024-11-16',
          time: '09:15'
        }
      ],
      tags: ['Sound Quality', 'Battery Life', 'Comfortable']
    },
    {
      id: 2,
      customer: {
        name: 'Mike Chen',
        email: 'mike.chen@example.com',
        avatar: 'MC',
        joinDate: '2024-01-20'
      },
      product: {
        name: 'Stainless Steel Water Bottle 1L',
        category: 'Kitchen & Dining',
        price: '$24.99',
        image: '/api/placeholder/80/80'
      },
      rating: 3,
      title: 'Good but could be better',
      comment: 'The bottle keeps drinks cold but the lid is hard to open. Design is nice but functionality needs improvement...',
      fullComment: `The bottle keeps drinks cold but the lid is hard to open. Design is nice but functionality needs improvement. The carrying handle feels cheap and I'm concerned it might break with regular use.

On the positive side, the insulation works very well - ice stayed frozen for over 24 hours. The size is perfect for daily use and it fits in car cup holders. The powder coating provides a good grip and doesn't show fingerprints.

I wish the lid mechanism was better designed. It requires significant force to open and close, which can be frustrating when you're on the go.`,
      date: '2024-11-14',
      time: '09:15',
      status: 'pending',
      verifiedPurchase: true,
      helpful: 3,
      unhelpful: 1,
      images: [],
      replies: [],
      tags: ['Design', 'Functionality']
    },
    {
      id: 3,
      customer: {
        name: 'Emma Davis',
        email: 'emma.davis@example.com',
        avatar: 'ED',
        joinDate: '2022-11-08'
      },
      product: {
        name: 'Yoga Mat Premium - Extra Thick',
        category: 'Sports & Fitness',
        price: '$45.99',
        image: '/api/placeholder/80/80'
      },
      rating: 1,
      title: 'Poor quality, very disappointed',
      comment: 'The mat started peeling after just two weeks of use. Not worth the money at all. Would not recommend...',
      fullComment: `The mat started peeling after just two weeks of use. Not worth the money at all. Would not recommend. Customer service was unhelpful when I tried to return it.

I purchased this mat for my daily yoga practice, and within two weeks, the surface began peeling off in multiple areas. The peeling creates an uneven surface that makes certain poses uncomfortable and potentially unsafe.

When I contacted customer service, they claimed it was "normal wear and tear" and refused to honor the warranty. Very disappointing experience overall. I've had cheaper mats that lasted years without any issues.`,
      date: '2024-11-13',
      time: '16:45',
      status: 'reported',
      verifiedPurchase: true,
      helpful: 8,
      unhelpful: 0,
      images: ['/api/placeholder/100/100'],
      replies: [],
      tags: ['Quality', 'Durability']
    }
  ];

  const stats = {
    total: reviews.length,
    pending: reviews.filter(r => r.status === 'pending').length,
    approved: reviews.filter(r => r.status === 'approved').length,
    reported: reviews.filter(r => r.status === 'reported').length,
    averageRating: (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
  };

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = 
      review.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || review.status === filterStatus;
    const matchesRating = filterRating === 'all' || review.rating === parseInt(filterRating);
    
    return matchesSearch && matchesStatus && matchesRating;
  });

  const handleApprove = (id) => {
    console.log('Approve review:', id);
  };

  const handleHide = (id) => {
    console.log('Hide review:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete review:', id);
  };

  const handleReply = (id) => {
    console.log('Reply to review:', id);
  };

  const toggleSelectReview = (id) => {
    setSelectedReviews(prev =>
      prev.includes(id)
        ? prev.filter(reviewId => reviewId !== id)
        : [...prev, id]
    );
  };

  const toggleExpandReview = (id) => {
    setExpandedReview(expandedReview === id ? null : id);
  };

  const renderStars = (rating) => {
    return (
      <div className="stars-container-star">
        {[1, 2, 3, 4, 5].map((star) => (
          star <= rating ? 
            <IconStarFilled key={star} size={18} className="star-filled-star" /> : 
            <IconStar key={star} size={18} className="star-empty-star" />
        ))}
        <span className="rating-text-star">{rating}.0</span>
      </div>
    );
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      approved: { color: '#10b981', bgColor: '#dcfce7', label: 'Approved', icon: IconCheck },
      pending: { color: '#f59e0b', bgColor: '#fef3c7', label: 'Pending', icon: IconCalendar },
      reported: { color: '#ef4444', bgColor: '#fee2e2', label: 'Reported', icon: IconThumbDown },
      hidden: { color: '#6b7280', bgColor: '#f3f4f6', label: 'Hidden', icon: IconEyeOff }
    };
    
    const config = statusConfig[status];
    const IconComponent = config.icon;
    
    return (
      <span className={`status-badge-star status-${status}-star`}>
        <IconComponent size={14} />
        {config.label}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const shouldShowExpandButton = (review) => {
    return review.fullComment && review.fullComment.length > 200;
  };

  return (
    <div className="container-star">
      {/* Header */}
      <div className="header-star">
        <div>
          <h1 className="title-star">Reviews & Ratings</h1>
          <p className="subtitle-star">Moderate customer reviews and ratings</p>
        </div>
        <div className="actions-star">
          <button className="btn-secondary-star">
            <IconRefresh size={18} />
            Refresh
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid-star">
        <div className="stat-card-star">
          <div className="stat-icon-star stat-icon-total-star">
            <IconStarFilled size={24} />
          </div>
          <div>
            <h3 className="stat-label-star">Total Reviews</h3>
            <p className="stat-value-star">{stats.total}</p>
            <p className="stat-description-star">Average: {stats.averageRating}/5</p>
          </div>
        </div>

        <div className="stat-card-star">
          <div className="stat-icon-star stat-icon-pending-star">
            <IconCalendar size={24} />
          </div>
          <div>
            <h3 className="stat-label-star">Pending Review</h3>
            <p className="stat-value-star">{stats.pending}</p>
            <p className="stat-description-star">Awaiting moderation</p>
          </div>
        </div>

        <div className="stat-card-star">
          <div className="stat-icon-star stat-icon-approved-star">
            <IconThumbUp size={24} />
          </div>
          <div>
            <h3 className="stat-label-star">Approved</h3>
            <p className="stat-value-star">{stats.approved}</p>
            <p className="stat-description-star">Visible to customers</p>
          </div>
        </div>

        <div className="stat-card-star">
          <div className="stat-icon-star stat-icon-reported-star">
            <IconThumbDown size={24} />
          </div>
          <div>
            <h3 className="stat-label-star">Reported</h3>
            <p className="stat-value-star">{stats.reported}</p>
            <p className="stat-description-star">Flagged for review</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="search-card-star">
        <div className="search-wrapper-star">
          <div className="search-input-wrapper-star">
            <IconSearch size={20} className="search-icon-star" />
            <input
              type="text"
              placeholder="Search reviews, customers, or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-star"
            />
          </div>
          
          <div className="filter-group-star">
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select-star"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="reported">Reported</option>
              <option value="hidden">Hidden</option>
            </select>

            <select 
              value={filterRating} 
              onChange={(e) => setFilterRating(e.target.value)}
              className="filter-select-star"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>

            <button className="btn-secondary-star">
              <IconFilter size={18} />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="reviews-grid-star">
        {filteredReviews.map((review) => (
          <div key={review.id} className={`review-card-star ${expandedReview === review.id ? 'expanded-star' : ''}`}>
            {/* Header */}
            <div className="review-header-star">
              <div className="customer-info-star">
                <div className="customer-avatar-star">
                  {review.customer.avatar}
                </div>
                <div className="customer-details-star">
                  <div className="customer-name-star">
                    {review.customer.name}
                    {review.verifiedPurchase && (
                      <span className="verified-badge-star">
                        <IconCheck size={12} />
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <div className="customer-meta-star">
                    {formatDate(review.date)} • {review.time}
                  </div>
                </div>
              </div>
              <div className="review-actions-star">
                <input
                  type="checkbox"
                  checked={selectedReviews.includes(review.id)}
                  onChange={() => toggleSelectReview(review.id)}
                  className="checkbox-star"
                />
                {getStatusBadge(review.status)}
              </div>
            </div>

            {/* Rating and Product */}
            <div className="rating-product-star">
              <div className="rating-section-star">
                {renderStars(review.rating)}
                <h3 className="review-title-star">{review.title}</h3>
              </div>
              <div className="product-info-star">
                <div className="product-image-star">
                  <IconPhoto size={32} />
                </div>
                <div className="product-details-star">
                  <div className="product-name-star">{review.product.name}</div>
                  <div className="product-category-star">{review.product.category}</div>
                  <div className="product-price-star">{review.product.price}</div>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="review-content-star">
              <p className="review-comment-star">
                {expandedReview === review.id ? review.fullComment : review.comment}
              </p>
              
              {/* Show expand button only when there's more content */}
              {shouldShowExpandButton(review) && (
                <button 
                  onClick={() => toggleExpandReview(review.id)}
                  className="btn-expand-text-star"
                >
                  {expandedReview === review.id ? 'Show less' : 'Read more'}
                  {expandedReview === review.id ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
                </button>
              )}
              
              {/* Tags */}
              {review.tags && review.tags.length > 0 && (
                <div className="tags-container-star">
                  {review.tags.map((tag, index) => (
                    <span key={index} className="tag-star">{tag}</span>
                  ))}
                </div>
              )}

              {/* Images */}
              {review.images.length > 0 && (
                <div className="images-container-star">
                  {review.images.map((image, index) => (
                    <div key={index} className="image-thumbnail-star">
                      <IconPhoto size={20} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Engagement Metrics */}
            <div className="engagement-metrics-star">
              <div className="metric-star">
                <IconThumbUp size={16} />
                <span>{review.helpful} helpful</span>
              </div>
              {review.unhelpful > 0 && (
                <div className="metric-star">
                  <IconThumbDown size={16} />
                  <span>{review.unhelpful} unhelpful</span>
                </div>
              )}
              {review.images.length > 0 && (
                <div className="metric-star">
                  <IconPhoto size={16} />
                  <span>{review.images.length} photo{review.images.length > 1 ? 's' : ''}</span>
                </div>
              )}
            </div>

            {/* Replies - Only show in expanded view if there are replies */}
            {(expandedReview === review.id || review.replies.length > 0) && review.replies.length > 0 && (
              <div className="replies-section-star">
                <div className="replies-header-star">Store Response</div>
                {review.replies.map((reply) => (
                  <div key={reply.id} className="reply-card-star">
                    <div className="reply-header-star">
                      <strong>{reply.author}</strong>
                      <span>{formatDate(reply.date)} • {reply.time}</span>
                    </div>
                    <p className="reply-comment-star">{reply.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="action-buttons-star">
              <div className="primary-actions-star">
                {review.status !== 'approved' && (
                  <button 
                    onClick={() => handleApprove(review.id)}
                    className="btn-approve-star"
                  >
                    <IconCheck size={16} />
                    Approve
                  </button>
                )}
                {review.status !== 'hidden' && (
                  <button 
                    onClick={() => handleHide(review.id)}
                    className="btn-hide-star"
                  >
                    <IconEyeOff size={16} />
                    Hide
                  </button>
                )}
                <button 
                  onClick={() => handleReply(review.id)}
                  className="btn-reply-star"
                >
                  <IconMessage size={16} />
                  Reply
                </button>
              </div>
              <div className="secondary-actions-star">
                <button 
                  onClick={() => handleDelete(review.id)}
                  className="btn-delete-star"
                >
                  <IconX size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="empty-state-star">
          <IconStar size={48} className="empty-icon-star" />
          <h3>No reviews found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}

      <style jsx>{`
        .container-star {
          padding: 24px;
          background: #f9fafb;
          min-height: 100vh;
        }

        .header-star {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .title-star {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .subtitle-star {
          color: #6b7280;
          font-size: 14px;
          margin: 0;
        }

        .actions-star {
          display: flex;
          gap: 12px;
        }

        .btn-secondary-star {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary-star:hover {
          background: #f9fafb;
          border-color: #d1d5db;
        }

        .stats-grid-star {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card-star {
          background: white;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          padding: 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .stat-icon-star {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon-total-star {
          background: #dcfce7;
          color: #16a34a;
        }

        .stat-icon-pending-star {
          background: #fef3c7;
          color: #d97706;
        }

        .stat-icon-approved-star {
          background: #dbeafe;
          color: #2563eb;
        }

        .stat-icon-reported-star {
          background: #fee2e2;
          color: #dc2626;
        }

        .stat-label-star {
          font-size: 13px;
          color: #6b7280;
          margin: 0 0 4px 0;
        }

        .stat-value-star {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 4px 0;
        }

        .stat-description-star {
          font-size: 12px;
          color: #6b7280;
          margin: 0;
        }

        .search-card-star {
          background: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          margin-bottom: 24px;
        }

        .search-wrapper-star {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .search-input-wrapper-star {
          flex: 1;
          min-width: 300px;
          position: relative;
        }

        .search-icon-star {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
        }

        .search-input-star {
          width: 100%;
          padding: 10px 12px 10px 40px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
        }

        .filter-group-star {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filter-select-star {
          padding: 10px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          color: #374151;
        }

        .reviews-grid-star {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-card-star {
          background: white;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          padding: 24px;
          transition: all 0.2s;
        }

        .review-card-star:hover {
          border-color: #d1d5db;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }

        .review-card-star.expanded-star {
          border-color: #3b82f6;
          box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1);
        }

        .review-header-star {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .customer-info-star {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .customer-avatar-star {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #16a34a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          flex-shrink: 0;
        }

        .customer-details-star {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .customer-name-star {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .verified-badge-star {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #16a34a;
          background: #dcfce7;
          padding: 2px 8px;
          border-radius: 12px;
        }

        .customer-meta-star {
          font-size: 13px;
          color: #6b7280;
        }

        .review-actions-star {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .checkbox-star {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .status-badge-star {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        .status-approved-star {
          background: #dcfce7;
          color: #16a34a;
        }

        .status-pending-star {
          background: #fef3c7;
          color: #d97706;
        }

        .status-reported-star {
          background: #fee2e2;
          color: #dc2626;
        }

        .status-hidden-star {
          background: #f3f4f6;
          color: #6b7280;
        }

        .rating-product-star {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          gap: 24px;
        }

        .rating-section-star {
          flex: 1;
        }

        .stars-container-star {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .star-filled-star {
          color: #f59e0b;
        }

        .star-empty-star {
          color: #d1d5db;
        }

        .rating-text-star {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .review-title-star {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.4;
        }

        .product-info-star {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f8fafc;
          border-radius: 8px;
          min-width: 200px;
        }

        .product-image-star {
          width: 40px;
          height: 40px;
          background: #e2e8f0;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
        }

        .product-details-star {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .product-name-star {
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
        }

        .product-category-star {
          font-size: 12px;
          color: #6b7280;
        }

        .product-price-star {
          font-size: 13px;
          font-weight: 600;
          color: #16a34a;
        }

        .review-content-star {
          margin-bottom: 16px;
        }

        .review-comment-star {
          color: #4b5563;
          line-height: 1.6;
          margin: 0 0 12px 0;
          white-space: pre-line;
        }

        .btn-expand-text-star {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          color: #3b82f6;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          padding: 4px 0;
          margin-bottom: 12px;
          transition: color 0.2s;
        }

        .btn-expand-text-star:hover {
          color: #2563eb;
        }

        .tags-container-star {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 12px;
        }

        .tag-star {
          padding: 4px 8px;
          background: #f3f4f6;
          color: #6b7280;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
        }

        .images-container-star {
          display: flex;
          gap: 8px;
        }

        .image-thumbnail-star {
          width: 60px;
          height: 60px;
          background: #f3f4f6;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .image-thumbnail-star:hover {
          background: #e5e7eb;
        }

        .engagement-metrics-star {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
          padding-top: 16px;
          border-top: 1px solid #f3f4f6;
        }

        .metric-star {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #6b7280;
        }

        .replies-section-star {
          margin-bottom: 16px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #dbeafe;
        }

        .replies-header-star {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .reply-card-star {
          background: white;
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }

        .reply-header-star {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
          font-size: 13px;
        }

        .reply-comment-star {
          margin: 0;
          color: #4b5563;
          font-size: 14px;
          line-height: 1.5;
        }

        .action-buttons-star {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid #f3f4f6;
        }

        .primary-actions-star {
          display: flex;
          gap: 8px;
        }

        .secondary-actions-star {
          display: flex;
          gap: 8px;
        }

        .btn-approve-star,
        .btn-hide-star,
        .btn-reply-star {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid;
          transition: all 0.2s;
        }

        .btn-approve-star {
          background: #dcfce7;
          color: #16a34a;
          border-color: #16a34a;
        }

        .btn-approve-star:hover {
          background: #bbf7d0;
        }

        .btn-hide-star {
          background: #fef3c7;
          color: #d97706;
          border-color: #d97706;
        }

        .btn-hide-star:hover {
          background: #fde68a;
        }

        .btn-reply-star {
          background: #dbeafe;
          color: #2563eb;
          border-color: #2563eb;
        }

        .btn-reply-star:hover {
          background: #bfdbfe;
        }

        .btn-delete-star {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          cursor: pointer;
          border: 1px solid #e5e7eb;
          background: white;
          color: #6b7280;
          transition: all 0.2s;
        }

        .btn-delete-star:hover {
          background: #f9fafb;
          border-color: #d1d5db;
          color: #dc2626;
          border-color: #fecaca;
        }

        .empty-state-star {
          padding: 60px 20px;
          text-align: center;
          color: #6b7280;
          background: white;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
        }

        .empty-icon-star {
          color: #d1d5db;
          margin-bottom: 16px;
        }

        .empty-state-star h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: #374151;
        }

        .empty-state-star p {
          margin: 0;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .container-star {
            padding: 16px;
          }

          .header-star {
            flex-direction: column;
          }

          .stats-grid-star {
            grid-template-columns: 1fr;
          }

          .search-wrapper-star {
            flex-direction: column;
          }

          .search-input-wrapper-star {
            min-width: 100%;
          }

          .filter-group-star {
            width: 100%;
          }

          .filter-select-star {
            flex: 1;
          }

          .rating-product-star {
            flex-direction: column;
          }

          .product-info-star {
            width: 100%;
          }

          .review-header-star {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .review-actions-star {
            width: 100%;
            justify-content: space-between;
          }

          .action-buttons-star {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }

          .primary-actions-star {
            justify-content: stretch;
          }

          .btn-approve-star,
          .btn-hide-star,
          .btn-reply-star {
            flex: 1;
            justify-content: center;
          }

          .secondary-actions-star {
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default ReviewsRatings;