import {
  EllipsisHorizontalIcon,
  EyeIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  StarIcon,
  ChatBubbleBottomCenterTextIcon,
  MinusIcon,
  ShareIcon,
  FlagIcon,
  XMarkIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import StoreOwner1 from "../../../../assets/images/Store/Owners/1.jpg";

import Portfolio1 from '../../../../assets/images/Portfolio/1.jpg';
import Portfolio2 from '../../../../assets/images/Portfolio/2.jpg';
import Portfolio3 from '../../../../assets/images/Portfolio/3.jpg';
import Portfolio4 from '../../../../assets/images/Portfolio/4.jpg';

import ServicesReviewSec from './ServicesReviewSec';

const ServicesDetails = () => {
  const [currentImage, setCurrentImage] = useState(Portfolio1);
  const [showZoom, setShowZoom] = useState(false);
  const [showOwnerZoom, setShowOwnerZoom] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [copiedContact, setCopiedContact] = useState({ first: false, second: false });

  const images = [Portfolio1, Portfolio2, Portfolio3, Portfolio4];
  const contactRef = useRef(null);

  const copyToClipboard = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedContact(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedContact(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCloseZoom = () => {
    setShowZoom(false);
  };

  const handleCloseOwnerZoom = () => {
    setShowOwnerZoom(false);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (showZoom && !e.target.closest('.zoom-modal')) {
        setShowZoom(false);
      }
      if (showOwnerZoom && !e.target.closest('.zoom-modal')) {
        setShowOwnerZoom(false);
      }
      if (showContact && contactRef.current && !contactRef.current.contains(e.target)) {
        setShowContact(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showZoom, showOwnerZoom, showContact]);

  return (
    <div className="ServicesDetails-MM-Page">
      <div className="custom-container">
        <div className="ServicesDetails-MM">
          <div className="ServicesDetails-MM-1">
            <div className="CLasss-Toops">
              <div className="Oksu-TOop">
                <div className="Oksu-TOop-1">
                  <div className="Oksu-TOop-IMg">
                    <img 
                      src={StoreOwner1} 
                      alt="Owner" 
                      onClick={() => setShowOwnerZoom(true)}
                      style={{ cursor: 'pointer' }}
                    />
                    <button onClick={() => setShowOwnerZoom(true)}>
                      <EyeIcon />
                    </button>
                  </div>
                </div>
                <div className="Oksu-TOop-2">
                  <div className="Oksu-TOop-2-Main">
                    <p>ID:009823</p>
                    <h3>Ndubuisi Prince Godson</h3>
                    <div className="Oksu-TOop-BTNs">
                        <div className="Hghhs-Btnca" ref={contactRef}>
                      <button 
                        className="custom-btn-radius custom-btn-background"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowContact(prev => !prev);
                        }}
                      >
                        Contact Details
                      </button>
                      <AnimatePresence>
                        {showContact && (
                          <motion.div
                            className="Oks-BTNS-Gen-Drop"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ul className="AGhs-Ul">
                              <li>
                                <span><PhoneIcon /><b>09037494084</b></span>
                                <span 
                                  className="Serve-Sab-Batn" 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    copyToClipboard('09037494084', 'first');
                                  }}
                                >
                                  {copiedContact.first ? 'Copied!' : 'Copy'}
                                </span>
                              </li>
                              <li>
                                <span><PhoneIcon /><b>08101317299</b></span>
                                <span 
                                  className="Serve-Sab-Batn" 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    copyToClipboard('08101317299', 'second');
                                  }}
                                >
                                  {copiedContact.second ? 'Copied!' : 'Copy'}
                                </span>
                              </li>
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      </div>
                      <div className="Hghhs-Btnca">
                      <span className="DrooMenu custom-btn-border-color custom-btn-white-hover custom-btn-radius">
                        <EllipsisHorizontalIcon />
                      </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="JUjs-po">
                <span className="statusOS">
                  <i className="online-Sttaus online"></i>Online
                </span>
                <span className="VVef-Badge verified">Verified</span>
              </div>
            </div>

            <div className="Rafs-BABst">
              <div className="Prodduc-BansSPlY">
                <div className="Prodduc-BansSPlY-Top poprtliosImg">
                  <img 
                    src={currentImage} 
                    alt="Portfolio" 
                    onClick={() => setShowZoom(true)}
                    style={{ cursor: 'pointer' }}
                  />
                  <button onClick={() => setShowZoom(true)}>
                    <EyeIcon />
                  </button>
                </div>
                <div className="Prodduc-BansSPlY-Footer">
                  {images.map((img, index) => (
                    <span 
                      key={index}
                      className={currentImage === img ? 'active' : ''}
                      onClick={() => setCurrentImage(img)}
                    >
                      <img src={img} alt={`Thumbnail ${index + 1}`} />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="Rafs-BABst">
              <h3>About me</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>

            <div className="OOIk-BBDYS">
              <div className="OOIk-Part">
                <h3>
                  <span><BriefcaseIcon /></span>Profession:
                </h3>
                <p>Auto Detailing</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><CalendarDaysIcon /></span>Member Since:
                </h3>
                <p>05 May, 2025</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><ClockIcon /></span>Experience:
                </h3>
                <p>8 Years</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><MapPinIcon /></span>Location:
                </h3>
                <p>Kano State, Kano</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><ArrowTrendingUpIcon /></span>Distance from you:
                </h3>
                <p>726 km</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><BanknotesIcon /></span>Hourly Rate:
                </h3>
                <h4>
                  From: ₦35 <span>/hour</span>
                </h4>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><StarIcon /></span>Rating:
                </h3>
                <p>4.8</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><ChatBubbleBottomCenterTextIcon /></span>Reviews:
                </h3>
                <p>300</p>
              </div>
            </div>
          </div>

          <div className="ServicesDetails-MM-2">
            <ServicesReviewSec />
          </div>
        </div>
      </div>

      {/* Portfolio Image Zoom Modal */}
      <AnimatePresence>
        {showZoom && (
          <>
            <motion.div
              className="zoom-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseZoom}
              />
              <motion.img
                src={currentImage}
                alt="Zoomed Portfolio"
                className="zoomed-image"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                onClick={handleCloseZoom}
                style={{ cursor: 'pointer' }}
              />
              <button
                onClick={handleCloseZoom}
                className="zoom-close-btn"
              >
                <XMarkIcon />
              </button>
              <button
                onClick={handlePrevImage}
                className="Zoom-nav-btn prev"
              >
                <ArrowLeftIcon />
              </button>
              <button
                onClick={handleNextImage}
                className="Zoom-nav-btn next"
              >
                <ArrowRightIcon />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Owner Image Zoom Modal */}
      <AnimatePresence>
        {showOwnerZoom && (
          <>
            <motion.div
              className="zoom-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseOwnerZoom}
              />
              <motion.img
                src={StoreOwner1}
                alt="Zoomed Owner"
                className="zoomed-image"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                onClick={handleCloseOwnerZoom}
                style={{ cursor: 'pointer' }}
              />
              <button
                onClick={handleCloseOwnerZoom}
                className="zoom-close-btn"
              >
                <XMarkIcon />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesDetails;