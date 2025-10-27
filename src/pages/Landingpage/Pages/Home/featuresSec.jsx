// Updated featuresSec.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import FeaturesImg1 from '../../../../assets/images/FaeturesImg/1.jpg';
import FeaturesImg2 from '../../../../assets/images/FaeturesImg/2.jpg';
import FeaturesImg3 from '../../../../assets/images/FaeturesImg/3.jpg';
import FollowCursor from '../../Components/FollowCursor/FollowCursor'; 

const FeatureCard = ({ img, text, title, desc, to }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [entryPos, setEntryPos] = useState({ x: 0, y: 0 });
  const [showSpan, setShowSpan] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    setEntryPos({ x: mouseX, y: mouseY });
    setCursorPos({ x: mouseX, y: mouseY });
    setShowSpan(true);
  };

  const handleMouseLeave = () => {
    setShowSpan(false);
  };

  return (
    <Link
      to={to}
      className="featCard"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        position: 'relative',
        cursor: showSpan ? 'none' : 'default',
        textDecoration: 'none'
      }}
    >
      <img src={img} alt={text} />
      <FollowCursor
        cursorPos={cursorPos}
        entryPos={entryPos}
        showSpan={showSpan}
        text={text}
      />

      <div className="featCard-Txt">
        <h4 className='mid-text'>{title}</h4>
        <p>{desc}</p>
      </div>
    </Link>
  );
};

const featuresSec = () => {
  const features = [
    { 
      img: FeaturesImg1, 
      text: 'Open a store',
      title: 'Start Selling Instantly',
      desc: 'Create your online store in minutes and showcase your products to a global audience. ',
      to: '/open-store'
    },
    { 
      img: FeaturesImg2, 
      text: 'Get Started Now',
      title: 'Share and Earn',
      desc: 'Invite others to join the platform and earn rewards for every successful referral.',
      to: '/agent'
    },
    { 
      img: FeaturesImg3, 
      text: 'Start Shopping',
      title: 'Shop with Confidence',
      desc: 'Find the best deals, compare prices across verified stores, and make informed choices.',
      to: '/products'
    },
  ];

  return (
    <div className="GenFitSec">
      <div className="custom-container">
        <div className="Topl-Gen-Head">
          <div className="Topl-Gen-Head-Part">
            <h3 className="big-text">
              Open Your Store. Compare and Shop Smarter. Invite, Earn, and Grow
              Beyond Borders.
            </h3>
          </div>
        </div>

        <div className="features-Grid">
          {features.map((feat, idx) => (
            <FeatureCard key={idx} {...feat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default featuresSec;