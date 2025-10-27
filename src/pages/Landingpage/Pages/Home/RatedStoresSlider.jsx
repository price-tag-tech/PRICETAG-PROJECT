import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/outline';

import StoreOwner1 from '../../../../assets/images/Store/Owners/1.jpg';
import StoreOwner2 from '../../../../assets/images/Store/Owners/2.jpg';
import StoreOwner3 from '../../../../assets/images/Store/Owners/3.jpg';
import StoreOwner4 from '../../../../assets/images/Store/Owners/4.jpg';
import StoreOwner5 from '../../../../assets/images/Store/Owners/5.jpg';

// 🛍️ Store data (each with unique link) - updated to match main stores list
const stores = [
  { id: 1, name: 'MJ Ventures', owner: 'Mary Jane', img: StoreOwner1, link: '/store/1' },
  { id: 2, name: 'TechCraft Hub', owner: 'Samuel Bright', img: StoreOwner2, link: '/store/2' },
  { id: 3, name: 'Bella Beauty Store', owner: 'Isabella Cruz', img: StoreOwner3, link: '/store/3' },
  { id: 4, name: 'GreenLeaf Organics', owner: 'David Green', img: StoreOwner4, link: '/store/4' },
  { id: 5, name: 'HomeEssence', owner: 'Sophia Turner', img: StoreOwner5, link: '/store/5' },
];

// 🎞️ Animation settings
const slideVariants = {
  enter: { opacity: 0, x: 10 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
};

const RatedStoresSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stores.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentStore = stores[currentIndex];

  return (
    <div className="RatedStoresSlider">
      <h2>
        <span>
          <StarIcon className="icon" />
          <span>Top Rated Stores</span>
        </span>
        <b>2k+</b>
      </h2>

      <div className="rateD-Stores-Slide">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStore.id}
            className="motion-wrapper"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <Link to={currentStore.link} className="rateD-Store">
              <div className="rateD-Store-1">
                <span>
                  <img src={currentStore.img} alt={currentStore.name} />
                </span>
              </div>
              <div className="rateD-Store-2">
                <div className="rateD-Store-2-Dlt">
                  <h4>{currentStore.name}</h4>
                  <p>{currentStore.owner}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RatedStoresSlider;