import React from 'react';
import { IconSearch, IconLogout, IconDots } from '@tabler/icons-react';

const StoreTopBar = () => {
  return (
    <div className="emk-topnav">
      {/* Search Bar */}
      <div className="store-search-container">
        <IconSearch size={20} className="store-search-icon" />
        <input 
          type="text" 
          placeholder="Search for Products and Services" 
          className="store-search-input"
        />
      </div>

      {/* Right Section */}
      <div className="store-topbar-right">
        {/* Reviews */}
        <div className="store-reviews">
          <span className="store-reviews-label">Customers Reviews</span>
          <div className="store-reviews-rating">
            <span className="store-rating-number">4.3</span>
            <div className="store-stars">
              <span className="store-star store-star-filled">★</span>
              <span className="store-star store-star-filled">★</span>
              <span className="store-star store-star-filled">★</span>
              <span className="store-star">★</span>
              <span className="store-star">★</span>
            </div>
            <span className="store-review-count">(10 Reviews)</span>
          </div>
        </div>

        {/* Manage Reviews Button */}
        <button className="store-manage-btn">Manage Reviews</button>

        {/* Logout Button */}
        <button className="store-logout-btn">
          <IconLogout size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default StoreTopBar;