import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroVid from '../../../../assets/vid/hero-video.mp4';
import LayerParts from '../../../../assets/images/layerparts.png';
import RatedStoresSlider from './RatedStoresSlider';

const Header = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <header className="pg-home-header">
      <div className="pg-home-Hero-Sec">
        <div className="custom-container">
          <div className="pg-home-Hero-Main">
            <h1 className="large-text">
              Shop Big.<br /> Sell Fast.
            </h1>
            <p>
              Create e-stores, be seen, sell, grow, compare prices, shop, and earn on Price Tag!
            </p>

            <div className="pg-home-Hero-Btns">
              <Link to="/open-store" className="custom-btn-background custom-btn-radius">Open a Store</Link>
              <Link to="/products" className="custom-btn-border-color custom-btn-radius custom-btn-white-hover">
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pg-header-banner">
        <div className="pg-header-banner-Anim">
          {/* AnimatePresence handles smooth entry/exit of the loader */}
          <AnimatePresence>
            {!isVideoLoaded && (
              <motion.div
                className="video-loader"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <motion.div
                  className="loader-circle"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Loading video...
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.video
            src={HeroVid}
            autoPlay
            loop
            muted
            onLoadedData={() => setIsVideoLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />

          <div className="pg-header-banner-Anim-layer">
            <img src={LayerParts} alt="Layer" />
          </div>
        </div>

        <RatedStoresSlider />
      </div>
    </header>
  );
};

export default Header;