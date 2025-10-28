import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";

const ReviewSec = ({ store }) => {
  const rating = store ? store.rating : 3.7;
  const totalReviews = store ? store.reviews : 410;

  // Rating distribution data - consistent with total reviews and avg rating
  const ratingData = [
    { label: "5 Star", percent: 5, count: Math.round((totalReviews * 0.05)) },
    { label: "4 Star", percent: 60, count: Math.round((totalReviews * 0.6)) },
    { label: "3 Star", percent: 35, count: Math.round((totalReviews * 0.35)) },
    { label: "2 Star", percent: 0, count: 0 },
    { label: "1 Star", percent: 0, count: 0 },
  ];

  // Reviews data
  const [reviews, setReviews] = useState([
    {
      firstName: "Olamide",
      lastName: "Adebayo",
      date: "September 10, 2021",
      stars: 5,
      comment: "This product exceeded my expectations! The flavor is spot-on and it made my family dinner a hit. Highly recommend for anyone who loves authentic taste.",
    },
    {
      firstName: "Peter",
      lastName: "Wilson",
      date: "December 1, 2021",
      stars: 4,
      comment: "Exactly as I hoped—great quality and fast delivery. The packaging was secure, and the item arrived fresh. Will order again soon!",
    },
    {
      firstName: "Evelyn",
      lastName: "Carter",
      date: "October 11, 2021",
      stars: 5,
      comment: "I absolutely adore this Maggi chicken seasoning! It brings so much depth to my recipes, turning ordinary meals into gourmet delights. A pantry staple for sure.",
    },
    {
      firstName: "Maryam",
      lastName: "Khan",
      date: "December 15, 2022",
      stars: 5,
      comment: "Fantastic value for money—generous portions that last longer than expected. Unilever has nailed it with this one; it's become my go-to for quick, flavorful cooking.",
    },
    {
      firstName: "Alex",
      lastName: "Thompson",
      date: "October 27, 2025",
      stars: 5,
      comment: "Wow, what an incredible store! Your passion for curating such unique, high-quality items truly shines through—every visit feels like a delightful adventure. The personal touch you add makes all the difference, and I can't wait to come back for more. Thank you for making shopping an absolute joy!",
    },
  ]);

  // Modal states
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewComment, setReviewComment] = useState('');
  const [selectedStars, setSelectedStars] = useState(0);

  const handleAddReview = () => {
    setShowReviewModal(true);
  };

  const handleCloseModal = () => {
    setShowReviewModal(false);
    setReviewComment('');
    setSelectedStars(0);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (reviewComment.trim() && selectedStars > 0) {
      const newReview = {
        firstName: "User", // Placeholder; in real app, fetch from user
        lastName: "Review", // Placeholder
        date: new Date().toLocaleDateString(), // Current date
        stars: selectedStars,
        comment: reviewComment,
      };
      setReviews(prev => [...prev, newReview]);
      handleCloseModal();
      // In real app, send to API
      console.log('New review submitted:', newReview);
    }
  };

  return (
    <div className="ReviewSec">
      <div className="ReviewSec-Part">
        <div className="comments-sec">
          <div className="comments-sec-head">
            <h3 className="big-text">Reviews</h3>
            <button className="custom-btn-border-color custom-btn-radius" onClick={handleAddReview}>
              <PlusIcon /> Add a Review
            </button>
          </div>
          <div className="comments-sec-main">
            {reviews.map((review, index) => {
              const initial = review.firstName.charAt(0) + review.lastName.charAt(0);
              const fullName = `${review.firstName} ${review.lastName}`;
              const reviewRating = `${review.stars}.0`;
              return (
                <div key={index} className="comments-sec-box">
                  <div className="s-comment">
                    <div className="s-comment-1">
                      <div className="s-comment-1-flex">
                        <div className="s-comment-10">
                          <span>{initial}</span>
                        </div>
                        <div className="s-comment-11">
                          <span>{fullName}</span>
                          <p>{review.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="s-comment-2">
                      <h4 className="CComs-HGa">
                        <b>{reviewRating}</b>
                        <span>
                          {Array.from({ length: 5 }).map((_, i) => (
                            i < review.stars ? (
                              <StarIcon
                                key={i}
                                className="w-4 h-4 inline text-yellow-400 star-on"
                              />
                            ) : (
                              <StarOutlineIcon
                                key={i}
                                className="w-4 h-4 inline text-gray-300 star-off"
                              />
                            )
                          ))}
                        </span>
                      </h4>
                      <p>{review.comment}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="ReviewSec-rating">
        <div className="cart-pro-rating-sec">
          <div className="t-cart-pro-rating">
            <span className="Prof-Sppan">
              <img src={store ? store.ownerImg : StoreOwner1} alt={store ? store.owner : 'Owner'} />
            </span>
            <p>{store ? store.owner : 'Prince Godson'} <span className="VVef-Badge verified">Verified</span></p>
            <p>Member since {store ? store.memberSince : '1st May, 2023'}</p>
            <h2><b><StarOutlineIcon /> {rating}</b><span>Reviews: {totalReviews}</span></h2>
          </div>

          <div className="s-cart-pro-rating">
            {ratingData.map((item, index) => (
              <div
                key={index}
                className={`rating-barSec ${
                  item.percent > 0 ? "Onprogress" : ""
                }`}
              >
                <span>{item.label}</span>

                <div className="progress">
                  <motion.div
                    className="progress-main bg-yellow-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percent}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  ></motion.div>
                </div>

                <span>{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Review Modal */}
      {showReviewModal && (
        <>
          <div 
            className="modal-backdrop" 
            onClick={handleCloseModal}
          />
          <div 
            className="cities-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Add a Review</h3>
              <button 
                onClick={handleCloseModal}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}       
              >
                <XMarkIcon />
              </button>
            </div>
            <form className="modal-body custom-scroll-bar" onSubmit={handleSubmitReview}>
              <div className="review-input-group">
                <label>Rating</label>
                <select
                  value={selectedStars}
                  onChange={(e) => setSelectedStars(parseInt(e.target.value))}
                  required
                >
                  <option value={0}>Select your rating</option>
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
                <p>Select your rating (required)</p>
              </div>
              <div className="review-input-group">
                <label htmlFor="review-comment">Review</label>
                <textarea
                  id="review-comment"
                  placeholder="Write your review here..."
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  rows={5}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="custom-btn-background custom-btn-radius ssuba-btn"
                disabled={!reviewComment.trim() || selectedStars === 0}
              >
                Submit Review
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewSec;