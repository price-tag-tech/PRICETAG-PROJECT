import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon, PlusIcon, XMarkIcon, MinusIcon, ShareIcon, FlagIcon} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ServicesReviewSec = () => {
  const rating = 3.7;
  const totalReviews = 200;

  const ratingData = [
    { label: "5 Star", percent: 5, count: Math.round(totalReviews * 0.05) },
    { label: "4 Star", percent: 60, count: Math.round(totalReviews * 0.6) },
    { label: "3 Star", percent: 35, count: Math.round(totalReviews * 0.35) },
    { label: "2 Star", percent: 0, count: 0 },
    { label: "1 Star", percent: 0, count: 0 },
  ];

  // Reviews data - Updated comments to reflect reviews for a service (e.g., a professional consulting or repair service)
  const [reviews, setReviews] = useState([
    {
      firstName: "Olamide",
      lastName: "Adebayo",
      date: "September 10, 2021",
      stars: 5,
      comment: "This service exceeded my expectations! The team was professional, efficient, and delivered results that transformed our workflow. Highly recommend for anyone seeking reliable consulting.",
    },
    {
      firstName: "Peter",
      lastName: "Wilson",
      date: "December 1, 2021",
      stars: 4,
      comment: "Exactly as hoped—top-notch quality and prompt response times. The service was tailored to our needs, and the follow-up was excellent. Will definitely book again soon!",
    },
    {
      firstName: "Evelyn",
      lastName: "Carter",
      date: "October 11, 2021",
      stars: 5,
      comment: "I absolutely adore this repair service! It brought so much reliability back to our systems, turning potential downtime into seamless operations. A go-to for all maintenance needs.",
    },
    {
      firstName: "Maryam",
      lastName: "Khan",
      date: "December 15, 2022",
      stars: 5,
      comment: "Fantastic value for money—comprehensive coverage that lasts longer than expected. The team nailed it with their expertise; it's become my go-to for quick, effective solutions.",
    },
    {
      firstName: "Alex",
      lastName: "Thompson",
      date: "October 27, 2025",
      stars: 5,
      comment: "Wow, what an incredible service provider! Your passion for delivering tailored, high-quality solutions truly shines through—every interaction feels like a collaborative success. The personal touch you add makes all the difference, and I can't wait to engage again. Thank you for making service experiences an absolute joy!",
    },
  ]);

  // Modal states
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewComment, setReviewComment] = useState('');
  const [selectedStars, setSelectedStars] = useState(0);

  // Share modal states
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareLink = window.location.href;
  const modalRef = useRef(null);

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCloseShareModal = () => {
    setShowShareModal(false);
  };

  // ⭐ Graph data for 0–5 Star ratings
  const chartData = [
    { name: "0 Star", value: 10 },
    { name: "1 Star", value: 25 },
    { name: "2 Star", value: 45 },
    { name: "3 Star", value: 65 },
    { name: "4 Star", value: 75 },
    { name: "5 Star", value: 100 },
  ];

  return (
    <div className="ServicesReviewSec space-y-6">
      <div className="ServicesReviewSec-TOp">
        <h3>
          Reviews <span>{totalReviews} Reviews</span>
        </h3>

        <div className="cart-pro-rating-sec HYHs-OOPPros">
          <div className="s-cart-pro-rating">
            {ratingData.map((item, index) => (
              <div
                key={index}
                className={`rating-barSec ${
                  item.percent > 0 ? "Onprogress" : ""
                } flex items-center gap-2`}
              >
                <span className="w-16">{item.label}</span>
                <div className="progress flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="progress-main h-full rounded-full"
                    style={{ backgroundColor: "#10b981" }}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percent}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  ></motion.div>
                </div>
                <span className="w-8 text-right">{item.count}</span>
              </div>
            ))}
          </div>

          <h2 className="tot-Rev mt-4 flex flex-col items-start">
            <b className="flex items-center gap-1 text-lg">
              <StarOutlineIcon />{" "}
              {rating}
            </b>
            <span className="text-sm">
              Reviews: {totalReviews}
            </span>
          </h2>
        </div>

        <div className="Maiin-Revs">
          <div className="comments-sec">
            <div className="comments-sec-head">
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

        {/* ⭐ Review Statistics Graph */}
        <div className="Statis-Sec">
          <h3>
            Reviews Statistics
          </h3>
          <div className="dass-Rev-COnats">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                {/* ✅ Grid */}
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                <XAxis
                  dataKey="name"
                  tick={{ fill: "#666", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#666", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="url(#colorValue)"
                  dot={{
                    r: 4,
                    fill: "#10b981",
                    strokeWidth: 2,
                    stroke: "#fff",
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

            <div className="Rafs-BABst">
                <h3>Safety tips</h3>

                <ul>
                      <li>
                        <MinusIcon />
                        <span>Always verify the service provider’s identity and profile before booking.</span>
                      </li>
                      <li>
                        <MinusIcon />
                        <span>Check reviews and ratings from previous clients to confirm reliability.</span>
                      </li>
                      <li>
                        <MinusIcon />
                        <span>Discuss job details and pricing clearly before confirming the booking.</span>
                      </li>
                      <li>
                        <MinusIcon />
                        <span>Avoid sharing sensitive personal or financial information directly.</span>
                      </li>
                      <li>
                        <MinusIcon />
                        <span>Schedule meetings or services in safe, public, or well-monitored places.</span>
                      </li>
                      <li>
                        <MinusIcon />
                        <span>Do not make full payment upfront; pay only through our secure payment system.</span>
                      </li>
                      <li>
                        <MinusIcon />
                        <span>Ensure both parties agree on terms, scope of work, and refund policy.</span>
                      </li>
                      <li>
                        <MinusIcon />
                        <span>Trust your instincts — if something feels off, cancel the booking.</span>
                      </li>
                      <li>
                        <MinusIcon />
                        <span>Report any fraudulent, rude, or unsafe behavior immediately.</span>
                      </li>
                    </ul>
                </div>


                
                <div className="OOks-Btns">
                    <button 
                      className="share-Btn custom-btn-radius" 
                      onClick={() => setShowShareModal(true)}
                    >
                        <ShareIcon /> Share 
                   </button>
                  <a href="#" className="report-Btn custom-btn-radius"><FlagIcon /> Report Abuse</a>
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

      {/* Share Modal */}
      {showShareModal && (
        <>
          <div 
            className="modal-backdrop" 
            onClick={handleCloseShareModal}
          />
          <div 
            className="cities-modal" 
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Share Service</h3>
              <button 
                onClick={handleCloseShareModal}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}       
              >
                <XMarkIcon />
              </button>
            </div>
            <div className="modal-body custom-scroll-bar">
              <div className="review-input-group">
                <label htmlFor="share-link">Service Link</label>
                <input
                  id="share-link"
                  type="text"
                  value={shareLink}
                  readOnly
                  placeholder="Service link will appear here"
                />
              </div>
              <button 
                type="button" 
                className="custom-btn-background custom-btn-radius ssuba-btn"
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesReviewSec;