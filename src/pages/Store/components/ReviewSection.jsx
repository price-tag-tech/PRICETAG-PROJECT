import React, { useState } from 'react';
import { IconStar, IconStarFilled, IconChevronDown } from '@tabler/icons-react';

const StoreReviewsSection = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Mock reviews data
  const allReviews = [
    {
      id: 1,
      customerName: 'Prince Godson',
      customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=PG',
      rating: 5,
      date: '2 days ago',
      review: 'Excellent service! The product quality is outstanding and delivery was faster than expected. Highly recommend this store to everyone.',
      productName: 'Quality Bluetooth Headset'
    },
    {
      id: 2,
      customerName: 'Sarah Johnson',
      customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=SJ',
      rating: 4,
      date: '3 days ago',
      review: 'Great products and good customer service. The only issue was a slight delay in shipping, but overall satisfied with my purchase.',
      productName: 'Wireless Gaming Mouse'
    },
    {
      id: 3,
      customerName: 'Michael Chen',
      customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=MC',
      rating: 5,
      date: '5 days ago',
      review: 'Amazing store! Products are exactly as described and the packaging was very professional. Will definitely shop here again.',
      productName: 'USB-C Fast Charger'
    },
    {
      id: 4,
      customerName: 'Emma Williams',
      customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=EW',
      rating: 3,
      date: '1 week ago',
      review: 'Product is okay but I expected better quality for the price. Customer service was responsive though.',
      productName: 'Laptop Stand Pro'
    },
    {
      id: 5,
      customerName: 'David Brown',
      customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=DB',
      rating: 5,
      date: '1 week ago',
      review: 'Fantastic! This is my third purchase from this store and I\'ve never been disappointed. Top-notch quality and service.',
      productName: 'Mechanical Keyboard'
    },
    {
      id: 6,
      customerName: 'Lisa Anderson',
      customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=LA',
      rating: 4,
      date: '2 weeks ago',
      review: 'Very good experience overall. Product arrived in perfect condition and works great. Would buy from this store again.',
      productName: '4K Webcam'
    }
  ];

  // Calculate rating statistics
  const totalReviews = allReviews.length;
  const averageRating = (allReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1);
  
  const ratingDistribution = [5, 4, 3, 2, 1].map(star => {
    const count = allReviews.filter(r => r.rating === star).length;
    const percentage = (count / totalReviews) * 100;
    return { star, count, percentage };
  });

  const displayedReviews = showAllReviews ? allReviews : allReviews.slice(0, 3);

  const renderStars = (rating, size = 16) => {
    return (
      <div className="stx-star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          star <= rating ? (
            <IconStarFilled key={star} size={size} className="stx-star-filled" />
          ) : (
            <IconStar key={star} size={size} className="stx-star-empty" />
          )
        ))}
      </div>
    );
  };

  return (
    <div className="stx-reviews-section">
      {/* Reviews Header Card */}
      <div className="stx-reviews-header-card">
        <div className="stx-reviews-summary">
          <div className="stx-reviews-rating-badge">
            <div className="stx-reviews-avg-rating">{averageRating}</div>
            <div className="stx-reviews-stars-large">
              {renderStars(Math.round(parseFloat(averageRating)), 20)}
            </div>
            <div className="stx-reviews-total">{totalReviews} Reviews</div>
          </div>

          <div className="stx-reviews-distribution">
            {ratingDistribution.map(({ star, count, percentage }) => (
              <div key={star} className="stx-rating-bar-row">
                <span className="stx-rating-star-label">{star} ⭐</span>
                <div className="stx-rating-bar-container">
                  <div 
                    className="stx-rating-bar-fill" 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="stx-rating-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="stx-reviews-list-card">
        <h2 className="stx-reviews-list-title">Customer Reviews</h2>
        
        <div className="stx-reviews-list">
          {displayedReviews.map((review) => (
            <div key={review.id} className="stx-review-item">
              <div className="stx-review-header">
                <div className="stx-review-customer">
                  <img 
                    src={review.customerAvatar} 
                    alt={review.customerName}
                    className="stx-customer-avatar"
                  />
                  <div className="stx-customer-info">
                    <h4 className="stx-customer-name">{review.customerName}</h4>
                    <span className="stx-review-date">{review.date}</span>
                  </div>
                </div>
                {renderStars(review.rating, 16)}
              </div>
              
              <p className="stx-review-text">{review.review}</p>
              
              <div className="stx-review-product">
                <span className="stx-review-product-label">Product:</span>
                <span className="stx-review-product-name">{review.productName}</span>
              </div>
            </div>
          ))}
        </div>

        {allReviews.length > 3 && (
          <button 
            className="stx-show-more-reviews-btn"
            onClick={() => setShowAllReviews(!showAllReviews)}
          >
            <span>{showAllReviews ? 'Show Less' : `Show All ${totalReviews} Reviews`}</span>
            <IconChevronDown 
              size={18} 
              style={{ 
                transform: showAllReviews ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s'
              }} 
            />
          </button>
        )}
      </div>

      <style>{`
        .stx-reviews-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
        }

        .stx-reviews-header-card {
          background: white;
          padding: 28px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
        }

        .stx-reviews-summary {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          align-items: center;
        }

        .stx-reviews-rating-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px;
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border-radius: 16px;
          border: 2px solid #bbf7d0;
        }

        .stx-reviews-avg-rating {
          font-size: 56px;
          font-weight: 700;
          color: #16a34a;
          line-height: 1;
          margin-bottom: 12px;
        }

        .stx-reviews-stars-large {
          margin-bottom: 12px;
        }

        .stx-reviews-total {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        .stx-reviews-distribution {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .stx-rating-bar-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .stx-rating-star-label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          min-width: 50px;
        }

        .stx-rating-bar-container {
          flex: 1;
          height: 10px;
          background: #e5e7eb;
          border-radius: 5px;
          overflow: hidden;
        }

        .stx-rating-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #16a34a 0%, #22c55e 100%);
          border-radius: 5px;
          transition: width 0.3s ease;
        }

        .stx-rating-count {
          font-size: 13px;
          color: #6b7280;
          font-weight: 500;
          min-width: 30px;
          text-align: right;
        }

        .stx-reviews-list-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
        }

        .stx-reviews-list-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 24px 0;
        }

        .stx-reviews-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .stx-review-item {
          padding: 20px;
          background: #f9fafb;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          transition: all 0.2s;
        }

        .stx-review-item:hover {
          border-color: #d1d5db;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .stx-review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .stx-review-customer {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .stx-customer-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid #e5e7eb;
          background: white;
        }

        .stx-customer-info {
          display: flex;
          flex-direction: column;
        }

        .stx-customer-name {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .stx-review-date {
          font-size: 12px;
          color: #9ca3af;
        }

        .stx-star-rating {
          display: flex;
          gap: 2px;
        }

        .stx-star-filled {
          color: #fbbf24;
        }

        .stx-star-empty {
          color: #d1d5db;
        }

        .stx-review-text {
          font-size: 14px;
          color: #374151;
          line-height: 1.6;
          margin: 0 0 12px 0;
        }

        .stx-review-product {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-top: 12px;
          border-top: 1px solid #e5e7eb;
        }

        .stx-review-product-label {
          font-size: 12px;
          color: #9ca3af;
          font-weight: 500;
        }

        .stx-review-product-name {
          font-size: 13px;
          color: #16a34a;
          font-weight: 600;
        }

        .stx-show-more-reviews-btn {
          width: 100%;
          margin-top: 16px;
          padding: 12px 20px;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s;
        }

        .stx-show-more-reviews-btn:hover {
          background: #f9fafb;
          border-color: #d1d5db;
        }

        @media (max-width: 1024px) {
          .stx-reviews-summary {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .stx-reviews-rating-badge {
            max-width: 280px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .stx-reviews-header-card {
            padding: 20px;
          }

          .stx-reviews-list-card {
            padding: 20px;
          }

          .stx-reviews-avg-rating {
            font-size: 48px;
          }

          .stx-review-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .stx-review-item {
            padding: 16px;
          }

          .stx-rating-star-label {
            min-width: 45px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .stx-customer-avatar {
            width: 36px;
            height: 36px;
          }

          .stx-customer-name {
            font-size: 14px;
          }

          .stx-review-text {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default StoreReviewsSection;