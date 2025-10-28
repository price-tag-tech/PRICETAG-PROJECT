import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  StarIcon,
  MapPinIcon,
  ShareIcon, 
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  TruckIcon,
  MinusIcon, 
  PlusIcon, 
  XMarkIcon,
  Bars3BottomRightIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

import {
  IconShoppingBag,
  IconBriefcase
} from '@tabler/icons-react';

import StoreOwner1 from '../../../../assets/images/Store/Owners/1.jpg';
import StoreOwner2 from '../../../../assets/images/Store/Owners/2.jpg';
import StoreOwner3 from '../../../../assets/images/Store/Owners/3.jpg';
import StoreOwner4 from '../../../../assets/images/Store/Owners/4.jpg';
import StoreOwner5 from '../../../../assets/images/Store/Owners/5.jpg';
import StoreOwner6 from '../../../../assets/images/Store/Owners/6.jpg';

import StoreBanner1 from '../../../../assets/images/Store/Storebanners/1.jpg';
import StoreBanner2 from '../../../../assets/images/Store/Storebanners/2.jpg';
import StoreBanner3 from '../../../../assets/images/Store/Storebanners/3.jpg';
import StoreBanner4 from '../../../../assets/images/Store/Storebanners/4.jpg';
import StoreBanner5 from '../../../../assets/images/Store/Storebanners/5.jpg';
import StoreBanner6 from '../../../../assets/images/Store/Storebanners/6.jpg';

import StoreProducts from './StoreProducts';
import StoreServices from './StoreServices';
import ReviewSec from './ReviewSec';


const stores = [
  {
    id: 1,
    banner: StoreBanner1,
    name: 'MJ Ventures',
    ownerImg: StoreOwner1,
    owner: 'Mary Jane',
    location: 'Lagos State, Ikeja',
    products: 300,
    services: 3,
    memberSince: '10th Jan, 2023',
    rating: 4.0,
    reviews: 200,
  },
  {
    id: 2,
    banner: StoreBanner2,
    name: 'TechCraft Hub',
    ownerImg: StoreOwner2,
    owner: 'Samuel Bright',
    location: 'FCT - Abuja, Wuse',
    products: 520,
    services: 6,
    memberSince: '25th Mar, 2022',
    rating: 4.5,
    reviews: 310,
  },
  {
    id: 3,
    banner: StoreBanner3,
    name: 'Bella Beauty Store',
    ownerImg: StoreOwner3,
    owner: 'Isabella Cruz',
    location: 'Rivers State, Port Harcourt',
    products: 150,
    services: 4,
    memberSince: '18th Jul, 2023',
    rating: 4.2,
    reviews: 180,
  },
  {
    id: 4,
    banner: StoreBanner4,
    name: 'GreenLeaf Organics',
    ownerImg: StoreOwner4,
    owner: 'David Green',
    location: 'Oyo State, Ibadan',
    products: 220,
    services: 2,
    memberSince: '2nd Dec, 2021',
    rating: 4.8,
    reviews: 450,
  },
  {
    id: 5,
    banner: StoreBanner5,
    name: 'HomeEssence',
    ownerImg: StoreOwner5,
    owner: 'Sophia Turner',
    location: 'Delta State, Asaba',
    products: 410,
    services: 5,
    memberSince: '9th Feb, 2024',
    rating: 4.3,
    reviews: 260,
  },
  {
    id: 6,
    banner: StoreBanner6,
    name: 'Urban Wear',
    ownerImg: StoreOwner6,
    owner: 'Michael Adams',
    location: 'Kano State, Kano',
    products: 340,
    services: 3,
    memberSince: '1st May, 2023',
    rating: 4.6,
    reviews: 390,
  },
];

const Store = () => {
  const { id } = useParams();
  const store = stores.find(s => s.id === parseInt(id));

  useDocumentTitle(store ? store.name : "Store");

  const [isProduct, setIsProduct] = useState(true);
  const [minFocused, setMinFocused] = useState(false);
  const [maxFocused, setMaxFocused] = useState(false);
  const [priceOpen, setPriceOpen] = useState(true);
  const [discountOpen, setDiscountOpen] = useState(true);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showShareModal, setShowShareModal] = useState(false);

  const categoriesRef = useRef(null);

  const shareLink = `${window.location.origin}/store/${store.id}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setShowShareModal(false);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleCloseShareModal = () => {
    setShowShareModal(false);
  };

  useEffect(() => {
    if (!isCategoriesOpen) return;

    const handleClickOutside = (event) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCategoriesOpen]);

  useEffect(() => {
    setSelectedCategory('All Categories');
  }, [isProduct]);

  const accordionVariants = {
    open: { 
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    closed: { 
      height: 0, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    open: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    closed: { 
      y: -9, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const slideVariants = {
    enter: { 
      x: -5, 
      opacity: 0 
    },
    center: { 
      x: 0, 
      opacity: 1 
    },
    exit: { 
      x: 5, 
      opacity: 0 
    }
  };

  const productCategories = [
    'All Categories',
    'Vehicles',
    'Property',
    'Mobile Phones & Tablets',
    'Electronics',
    'Home, Furniture & Appliances',
    'Fashion',
    'Beauty & Personal Care',
    'Services',
    'Repair & Construction',
    'Commercial Equipment & Tools',
    'Leisure & Activities',
    'Babies & Kids',
    'Food, Agriculture & Farming',
    'Animals & Pets',
    'Jobs',
    'Seeking Work - CVs'
  ];

  const servicesCategories = [
    'All Categories',
    'Fashion',
    'Culinary',
    'Hospitality',
    'Teaching',
    'Administrative',
    'Sales and Marketing',
    'Home Care',
    'Carpentry',
    'Technician',
    'Building Construction',
    'Logistics',
    'Driving',
    'Events',
    'Info Tech',
    'Cleaning',
    'Beauty and Wellness',
    'Health Worker',
    'Security Jobs',
    'Factory Jobs',
    'Agric Jobs',
    'Music',
    'Fine Art',
    'Finance',
    'Laundry Services',
    'Engineering',
    'Law',
    'Journalism',
    'Warehousing'
  ];

  const currentCategories = isProduct ? productCategories : servicesCategories;

  if (!store) {
    return (
      <div className="custom-container">
        <h1>Store not found</h1>
      </div>
    );
  }

  return (
    <div className="Store-Detail-Page">
      <div className="custom-container">
         <div className="Mobile-Store-Header-TTOp">
          <div className="rateD-Store">
             <div className="rateD-Store-1">
                <span>
                   <img src={store.ownerImg} alt={store.owner} className="Owner-Img" />
                </span>
              </div>
              <div className="rateD-Store-2">
                <div className="rateD-Store-2-Dlt">
                  <h4>{store.owner}</h4>
                  <p>{store.location}</p>
                </div>
              </div>
          </div>
          <button className="share-BTn custom-btn-border-color custom-btn-white-hover custom-btn-radius" onClick={() => setShowShareModal(true)}>
            <ShareIcon /><span>Share Store</span>
          </button>
        </div>

        <div className="Store-Detail-Top">
          <h2 className="large-text">{store.name}</h2>
        </div>
      <div className="Store-Header-Section">
        <img src={store.banner} alt={store.name} className="Store-Banner-Img" />

        <div className="Store-Header-TTOp">
          <div className="rateD-Store">
             <div className="rateD-Store-1">
                <span>
                   <img src={store.ownerImg} alt={store.owner} className="Owner-Img" />
                </span>
              </div>
              <div className="rateD-Store-2">
                <div className="rateD-Store-2-Dlt">
                  <h4>{store.owner}</h4>
                  <p>{store.location}</p>
                </div>
              </div>
          </div>
          <button className="share-BTn" onClick={() => setShowShareModal(true)}>
            <ShareIcon /><span>Share Store</span>
          </button>
        </div>

        <div className="Store-Header-Foooter">
          <div className="Store-Header-DLT">
           <h3 className="big-text">Looking Expensive with Italina Wears</h3>
          <p>Delivering quality products and reliable services designed to exceed your expectations.</p>
          <div className="GGhs-BtnS">
            <button><PhoneIcon /> Contact Store</button>
            <button className="Store-Map-Btn"><MapPinIcon /> </button>
          </div>
          </div>
        </div>
      </div>

       <div className="Sttart-Start">
        <div className="Sttart-Start-Main">
              <div className="Sttart-Card">
                <h3 className="big-text">{store.products}</h3>
                <span><IconShoppingBag /> Products</span>
              </div>

              <div className="Sttart-Card">
                <h3 className="big-text">{store.services}</h3>
                <span><IconBriefcase /> Services</span>
              </div>

              <div className="Sttart-Card">
                <h3 className="big-text">180.42K</h3>
                <span><ChartBarIcon /> Sales</span>
              </div>

              <div className="Sttart-Card">
                <h3 className="big-text">80%</h3>
                <span><TruckIcon /> Delivery</span>
              </div>
              
            </div>

           <div className="Product-ServiceSwich">
             {/* Switch Button Section */}
             <div
               className='switch-container'
               onClick={() => setIsProduct(!isProduct)}
             >
               <motion.div
                 className='switch-slider'
                 layout
                 transition={{ type: "spring", stiffness: 500, damping: 30 }}
                 animate={{ x: isProduct ? 0 : '100%' }}
               />
               <span className={`switch-label ${isProduct ? 'active' : ''}`}>Products</span>
               <span className={`switch-label ${!isProduct ? 'active' : ''}`}>Services</span>
             </div>
           </div>
            </div>
            
      </div>

     <div className="ProdcO-Page">
        <div className="custom-container">
    <div className={`Genrg-ProuctPG GTha-AUhsms ${isShrunk ? 'ShrinkSec' : ''}`}>
      <div className="Mobill-Boody-Oak" onClick={() => setIsShrunk(!isShrunk)} />
       <div className="Genrg-ProuctPG-1">
        <div className="FLG-Top">
          <span onClick={() => setIsShrunk(!isShrunk)}><XMarkIcon /></span>
        </div>

        <div className="Prod-Side-Cnts-2">
          <h3 onClick={() => setPriceOpen(!priceOpen)}>
            Price, ₦ 
            {priceOpen ? <MinusIcon /> : <PlusIcon />}
          </h3>
          <motion.div 
            className="Prod-Side-Cnts-Subsna"
            variants={accordionVariants}
            initial={false}
            animate={priceOpen ? "open" : "closed"}
            style={{ overflow: "hidden" }}
          >
          <div className="GHnas">
            <div className={`GHnas-Cont ${minFocused ? 'IsFocused' : ''}`}>
              <label htmlFor="min-price">Min</label>
              <input 
                id="min-price"
                type="text" 
                onFocus={() => setMinFocused(true)}
                onBlur={() => setMinFocused(false)}
              />
            </div>
            <span className="OOik-ICOn"><MinusIcon /></span>
            <div className={`GHnas-Cont ${maxFocused ? 'IsFocused' : ''}`}>
              <label htmlFor="max-price">Max</label>
              <input 
                id="max-price"
                type="text" 
                onFocus={() => setMaxFocused(true)}
                onBlur={() => setMaxFocused(false)}
              />
            </div>
          </div>
          <div className="Prod-Side-Cnts-UUssL">
            <label>
              <input type="radio" name="price" />
              <p>Under 22 K <span>• 0 ads</span></p>
            </label>
            <label>
              <input type="radio" name="price" />
              <p>22 - 130 K <span>• 0 ads</span></p>
            </label>
            <label>
              <input type="radio" name="price" />
              <p>130 K - 12 M <span>• 0 ads</span></p>
            </label>
            <label>
              <input type="radio" name="price" />
              <p>12 - 56 M <span>• 0 ads</span></p>
            </label>
            <label>
              <input type="radio" name="price" />
              <p>More than 56 M  <span>• 0 ads</span></p>
            </label>
            
          </div>
          </motion.div>
        </div>

        <div className="Prod-Side-Cnts-2">
          <h3 onClick={() => setDiscountOpen(!discountOpen)}>
            Discount
            {discountOpen ? <MinusIcon /> : <PlusIcon />}
          </h3>
        <motion.div 
          className="Prod-Side-Cnts-Subsna"
          variants={accordionVariants}
          initial={false}
          animate={discountOpen ? "open" : "closed"}
          style={{ overflow: "hidden" }}
        >
          <div className="Prod-Side-Cnts-UUssL">
            <label>
              <input type="radio" name="discount" />
              <p>Show all</p>
            </label>
            <label>
              <input type="radio" name="discount" />
              <p>With discount <span>• 0 ads</span></p>
            </label>
            <label>
              <input type="radio" name="discount" />
              <p>Without discount <span>• 0 ads</span></p>
            </label>
          </div>
          </motion.div>
        </div>
        
       </div>
           <div className="Genrg-ProuctPG-2">
             <div className="Prodc-Sec-TOp GGba-TTop">
        <h3 className="mid-text">
          <span onClick={() => setIsShrunk(!isShrunk)}>
            <Bars3BottomRightIcon />
          </span> 
          {isProduct ? 'Products' : 'Services'}
        </h3>
        <div className="Sttore-TToP-2">
          <div ref={categoriesRef} className="SoRts-Sec" onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}>
            <p>Categories:</p>
            <button>
              <Squares2X2Icon  />
              <span className="spannhsns-OLs">{selectedCategory}</span>
            </button>
            <motion.div 
              className="Prodct-Gen-DropDown"
              variants={containerVariants}
              initial={false}
              animate={isCategoriesOpen ? "open" : "closed"}
              style={{ 
                originY: 0, 
                overflow: "hidden",
                pointerEvents: isCategoriesOpen ? 'auto' : 'none'
              }}
            >
              <div className="Gen-DropDown-Main UUJ-Carrts custom-scroll-bar">
                {currentCategories.map((cat, index) => (
                  <span 
                    key={index} 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setSelectedCategory(cat); 
                      setIsCategoriesOpen(false); 
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isProduct ? (
          <motion.div
            key="products"
            className="Ppro-Pabs"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <StoreProducts store={store} />
          </motion.div>
        ) : (
          <motion.div
            key="services"
            className="Ppro-Pabs"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <StoreServices store={store} />
          </motion.div>
        )}
      </AnimatePresence>

      </div>
    </div>
    </div>
    </div>
    <div className="Store-RevSec">
         <div className="custom-container">
          <ReviewSec store={store} />
         </div>
         </div>

      {/* Share Modal */}
      {showShareModal && (
        <>
          <div 
            className="modal-backdrop" 
            onClick={handleCloseShareModal}
          />
          <div 
            className="cities-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Share Store</h3>
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
                <label htmlFor="share-link">Store Link</label>
                <input
                  id="share-link"
                  type="text"
                  value={shareLink}
                  readOnly
                  placeholder="Store link will appear here"
                />
              </div>
              <button 
                type="button" 
                className="custom-btn-background custom-btn-radius ssuba-btn"
                onClick={handleCopy}
              >
                Copy Link
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Store;