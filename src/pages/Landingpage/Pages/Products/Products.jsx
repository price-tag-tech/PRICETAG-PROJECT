import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";
import { useRef, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { 
  ArrowRightIcon, 
  ChevronRightIcon, 
  MinusIcon, 
  PlusIcon, 
  ArrowsUpDownIcon,
  Bars3BottomRightIcon,
  StarIcon,
  XMarkIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

import Product1 from '../../../../assets/images/Store/Products/1.jpg';
import Product2 from '../../../../assets/images/Store/Products/2.jpg';
import Product3 from '../../../../assets/images/Store/Products/3.jpg';
import Product4 from '../../../../assets/images/Store/Products/4.jpg';
import Product5 from '../../../../assets/images/Store/Products/5.jpg';
import Product6 from '../../../../assets/images/Store/Products/6.jpg';
import Product7 from '../../../../assets/images/Store/Products/7.jpg';
import Product8 from '../../../../assets/images/Store/Products/8.jpg';
import Product9 from '../../../../assets/images/Store/Products/9.jpg';
import Product10 from '../../../../assets/images/Store/Products/10.jpg';
import Product11 from '../../../../assets/images/Store/Products/11.jpg';
import Product12 from '../../../../assets/images/Store/Products/12.jpg';
import Product13 from '../../../../assets/images/Store/Products/13.jpg';
import Product14 from '../../../../assets/images/Store/Products/14.jpg';
import Product15 from '../../../../assets/images/Store/Products/15.jpg';
import Product16 from '../../../../assets/images/Store/Products/16.jpg';
import Product17 from '../../../../assets/images/Store/Products/17.jpg';
import Product18 from '../../../../assets/images/Store/Products/18.jpg';

import StoreOwner1 from '../../../../assets/images/Store/Owners/1.jpg';
import StoreOwner2 from '../../../../assets/images/Store/Owners/2.jpg';
import StoreOwner3 from '../../../../assets/images/Store/Owners/3.jpg';
import StoreOwner4 from '../../../../assets/images/Store/Owners/4.jpg';


import AddToCartIcon from '../../../../assets/images/add-to-cart-icon.svg';

const Products = () => {

    useDocumentTitle("Products");

  const [currentLocation, setCurrentLocation] = useState('Loading...');
  const [minFocused, setMinFocused] = useState(false);
  const [maxFocused, setMaxFocused] = useState(false);
  const [priceOpen, setPriceOpen] = useState(true);
  const [verifiedOpen, setVerifiedOpen] = useState(true);
  const [discountOpen, setDiscountOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Recommended');
  const [visibleProducts, setVisibleProducts] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [states, setStates] = useState([]);
  const [showCitiesModal, setShowCitiesModal] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [isFetchingCities, setIsFetchingCities] = useState(false);
  const [verifiedFilter, setVerifiedFilter] = useState('all'); // 'all', 'verified', 'unverified'
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const sortRef = useRef(null);
  const locationRef = useRef(null);
  const categoriesRef = useRef(null);

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

  // Fetch Nigerian states from API
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('https://nga-states-lga.onrender.com/fetch');
        const data = await response.json();
        // Normalize names (fix spacing and add " State")
        const normalizedStates = data.map(state => {
          let name = state.replace('Ibom', ' Ibom').replace('Cross River', 'Cross River');
          if (name === 'FCT') {
            name = 'FCT - Abuja';
          }
          return `${name} State`;
        });
        setStates(normalizedStates.sort());
      } catch (error) {
        console.error('Error fetching states:', error);
        // Fallback to hardcoded list if API fails
        setStates([
          "Abia State", "Adamawa State", "Akwa Ibom State", "Anambra State", "Bauchi State",
          "Bayelsa State", "Benue State", "Borno State", "Cross River State", "Delta State",
          "Ebonyi State", "Edo State", "Ekiti State", "Enugu State", "FCT - Abuja",
          "Gombe State", "Imo State", "Jigawa State", "Kaduna State", "Kano State",
          "Katsina State", "Kebbi State", "Kogi State", "Kwara State", "Lagos State",
          "Nasarawa State", "Niger State", "Ogun State", "Ondo State", "Osun State",
          "Oyo State", "Plateau State", "Rivers State", "Sokoto State", "Taraba State",
          "Yobe State", "Zamfara State"
        ]);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(res => res.json())
            .then(data => {
              const state = (data.address?.state || '').replace(' State', '') || 'Unknown';
              const city = data.address?.city || data.address?.town || data.address?.village || 'Unknown City';
              setCurrentLocation(`${state}, ${city}`);
            })
            .catch(err => {
              console.error('Reverse geocoding error:', err);
              setCurrentLocation('Unable to fetch location details');
            });
        },
        (error) => {
          console.error('Geolocation error:', error);
          setCurrentLocation('Location access denied');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      );
    } else {
      setCurrentLocation('Geolocation not supported');
    }
  }, []);

  useEffect(() => {
    if (!isDropdownOpen) return;

    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  useEffect(() => {
    if (!locationOpen) return;

    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setLocationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [locationOpen]);

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

  const handleStateSelect = async (state) => {
    setSelectedState(state);
    setIsFetchingCities(true);
    setShowCitiesModal(true);
    setLocationOpen(false);
    try {
      // Normalize state name for API, remove " State" and " - Abuja"
      const apiState = state.replace(' State', '').replace(' - Abuja', '');
      const response = await fetch(`https://nga-states-lga.onrender.com/?state=${apiState}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cities');
      }
      const data = await response.json();
      let cityList = [];
      if (Array.isArray(data)) {
        cityList = data;
      } else if (data.areas && Array.isArray(data.areas)) {
        cityList = data.areas;
      }
      setCities(cityList.sort());
    } catch (error) {
      console.error('Error fetching cities:', error);
      setCities([]); // Fallback to empty list
    }
    setIsFetchingCities(false);
  };

  const handleCitySelect = (city) => {
    const stateName = selectedState.replace(' State', '');
    setCurrentLocation(`${stateName}, ${city}`);
    setShowCitiesModal(false);
  };

  const handleCloseModal = () => {
    setShowCitiesModal(false);
    setIsFetchingCities(false);
  };

  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^\d.]/g, ''));
  };

  const products = [
    { 
      id: 1,
      img: Product1, 
      title: '4 sheets/Set Cartoon Face Stickers, Self-Adhesive', 
      price: '₦149.99', 
      oldPrice: '₦199.99', 
      save: '₦50', 
      ownerImg: StoreOwner1, 
      owner: 'MJ Ventures',
      rating: 4.5,
      reviews: 150,
      verified: true
    },
    { 
      id: 2,
      img: Product2, 
      title: 'Multifunctional Adjustable Kitchen Rack Organizer', 
      price: '₦799.99', 
      oldPrice: '₦999.99', 
      save: '₦200', 
      ownerImg: StoreOwner2, 
      owner: 'Smart Haven',
      rating: 4.2,
      reviews: 220,
      verified: false
    },
    { 
      id: 3,
      img: Product3, 
      title: 'Rechargeable LED Touch Lamp with Dimmable Brightness', 
      price: '₦3,499.99', 
      oldPrice: '₦3,999.99', 
      save: '₦500', 
      ownerImg: StoreOwner3, 
      owner: 'GlowMart',
      rating: 4.8,
      reviews: 180,
      verified: true
    },
    { 
      id: 4,
      img: Product4, 
      title: 'Smart Wireless Earbuds with Noise Cancellation', 
      price: '₦12,999.99', 
      oldPrice: '₦15,999.99', 
      save: '₦3,000', 
      ownerImg: StoreOwner4, 
      owner: 'TechZilla',
      rating: 4.6,
      reviews: 350,
      verified: false
    },
    { 
      id: 5,
      img: Product5, 
      title: 'Soft Cotton Throw Pillow Set – Modern Home Decoration', 
      price: '₦2,499.99', 
      oldPrice: '₦3,000.00', 
      save: '₦500', 
      ownerImg: StoreOwner1, 
      owner: 'CozyHome',
      rating: 4.3,
      reviews: 120,
      verified: true
    },
    { 
      id: 6,
      img: Product6, 
      title: 'Portable Rechargeable Mini Fan – Foldable, USB-Powered', 
      price: '₦1,299.99', 
      oldPrice: '₦1,599.99', 
      save: '₦300', 
      ownerImg: StoreOwner2, 
      owner: 'Cool Breeze Stores',
      rating: 4.7,
      reviews: 280,
      verified: false
    },
    { 
      id: 7,
      img: Product7, 
      title: 'Wireless Charging Pad for Smartphones – Fast Charge', 
      price: '₦1,999.99', 
      oldPrice: '₦2,499.99', 
      save: '₦500', 
      ownerImg: StoreOwner3, 
      owner: 'GlowMart',
      rating: 4.4,
      reviews: 90,
      verified: true
    },
    { 
      id: 8,
      img: Product8, 
      title: 'Fitness Tracker Smart Watch with Heart Rate Monitor', 
      price: '₦8,999.99', 
      oldPrice: '₦10,999.99', 
      save: '₦2,000', 
      ownerImg: StoreOwner4, 
      owner: 'TechZilla',
      rating: 4.5,
      reviews: 200,
      verified: false
    },
    { 
      id: 9,
      img: Product9, 
      title: 'Premium Organic Green Tea Set – 20 Bags', 
      price: '₦599.99', 
      oldPrice: '₦799.99', 
      save: '₦200', 
      ownerImg: StoreOwner1, 
      owner: 'MJ Ventures',
      rating: 4.6,
      reviews: 160,
      verified: true
    },
    { 
      id: 10,
      img: Product10, 
      title: 'Portable Bluetooth Speaker with Waterproof Design', 
      price: '₦3,499.99', 
      oldPrice: '₦3,999.99', 
      save: '₦500', 
      ownerImg: StoreOwner2, 
      owner: 'Smart Haven',
      rating: 4.7,
      reviews: 240,
      verified: false
    },
    { 
      id: 11,
      img: Product11, 
      title: 'Non-Slip Yoga Mat – Extra Thick Comfort', 
      price: '₦1,499.99', 
      oldPrice: '₦1,999.99', 
      save: '₦500', 
      ownerImg: StoreOwner3, 
      owner: 'GlowMart',
      rating: 4.3,
      reviews: 110,
      verified: true
    },
    { 
      id: 12,
      img: Product12, 
      title: 'Compact Drip Coffee Maker – Single Serve', 
      price: '₦5,999.99', 
      oldPrice: '₦6,999.99', 
      save: '₦1,000', 
      ownerImg: StoreOwner4, 
      owner: 'TechZilla',
      rating: 4.8,
      reviews: 300,
      verified: false
    },
    { 
      id: 13,
      img: Product13, 
      title: 'Ergonomic Office Chair with Adjustable Lumbar Support', 
      price: '₦25,999.99', 
      oldPrice: '₦29,999.99', 
      save: '₦4,000', 
      ownerImg: StoreOwner1, 
      owner: 'CozyHome',
      rating: 4.4,
      reviews: 210,
      verified: true
    },
    { 
      id: 14,
      img: Product14, 
      title: 'Wireless Gaming Mouse with RGB Lighting', 
      price: '₦4,499.99', 
      oldPrice: '₦5,499.99', 
      save: '₦1,000', 
      ownerImg: StoreOwner2, 
      owner: 'Cool Breeze Stores',
      rating: 4.6,
      reviews: 190,
      verified: false
    },
    { 
      id: 15,
      img: Product15, 
      title: 'Ceramic Non-Stick Frying Pan Set', 
      price: '₦2,999.99', 
      oldPrice: '₦3,499.99', 
      save: '₦500', 
      ownerImg: StoreOwner3, 
      owner: 'GlowMart',
      rating: 4.2,
      reviews: 140,
      verified: true
    },
    { 
      id: 16,
      img: Product16, 
      title: 'Noise-Cancelling Over-Ear Headphones', 
      price: '₦18,999.99', 
      oldPrice: '₦22,999.99', 
      save: '₦4,000', 
      ownerImg: StoreOwner4, 
      owner: 'TechZilla',
      rating: 4.7,
      reviews: 420,
      verified: false
    },
    { 
      id: 17,
      img: Product17, 
      title: 'Eco-Friendly Bamboo Toothbrush Pack – 10 Pieces', 
      price: '₦399.99', 
      oldPrice: '₦599.99', 
      save: '₦200', 
      ownerImg: StoreOwner1, 
      owner: 'MJ Ventures',
      rating: 4.5,
      reviews: 80,
      verified: true
    },
    { 
      id: 18,
      img: Product18, 
      title: 'Adjustable Dumbbell Set – 5-50 lbs', 
      price: '₦15,499.99', 
      oldPrice: '₦18,499.99', 
      save: '₦3,000', 
      ownerImg: StoreOwner2, 
      owner: 'Smart Haven',
      rating: 4.3,
      reviews: 260,
      verified: false
    },
  ];

  const displayedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      if (verifiedFilter === 'all') return true;
      if (verifiedFilter === 'verified') return product.verified;
      if (verifiedFilter === 'unverified') return !product.verified;
      return true;
    });

    let sorted = [...filtered];
    switch (selectedSort) {
      case 'Recommended':
        sorted.sort((a, b) => (b.rating - a.rating) || (b.reviews - a.reviews));
        break;
      case 'Newest':
        sorted.sort((a, b) => b.id - a.id);
        break;
      case 'Lowest price':
        sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case 'Highest price':
        sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      default:
        break;
    }
    return sorted;
  }, [verifiedFilter, selectedSort]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProducts(prev => prev + 9);
      setIsLoading(false);
    }, 1000);
  };

  const categories = [
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

  return (
    <div className="ProdcO-Page forOthernPag">
        <div className="custom-container">
    <div className={`Genrg-ProuctPG GTha-AUhsms ${isShrunk ? 'ShrinkSec' : ''}`}>
      <div className="Mobill-Boody-Oak" onClick={() => setIsShrunk(!isShrunk)} />
       <div className="Genrg-ProuctPG-1">
        <div className="FLG-Top">
          <span onClick={() => setIsShrunk(!isShrunk)}><XMarkIcon /></span>
        </div>

        <div ref={locationRef} className="Prod-Side-Cnts-1" onClick={() => setLocationOpen(!locationOpen)}>
          <div className="Prod-Side-Cnts-10">
            <h5>Location</h5>
            <p>{currentLocation === 'Loading...' ? 'Loading location..' : currentLocation}</p>
          </div>
          <div className="Prod-Side-Cnts-11">
              <ChevronRightIcon />
          </div>
           <motion.div 
            className="Prodct-Gen-DropDown"
            variants={containerVariants}
            initial={false}
            animate={locationOpen ? "open" : "closed"}
            style={{ 
              originY: 0, 
              overflow: "hidden",
              pointerEvents: locationOpen ? 'auto' : 'none'
            }}
          >
            <div className="Gen-DropDown-Main Onnshn-olas custom-scroll-bar">
              {states.map((state, index) => (
                <span 
                  key={index} 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStateSelect(state);
                  }}
                >
                  {state}
                </span>
              ))}
            </div>
          </motion.div>
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
          <h3 onClick={() => setVerifiedOpen(!verifiedOpen)}>
            Verified Stores
            {verifiedOpen ? <MinusIcon /> : <PlusIcon />}
          </h3>
        <motion.div 
          className="Prod-Side-Cnts-Subsna"
          variants={accordionVariants}
          initial={false}
          animate={verifiedOpen ? "open" : "closed"}
          style={{ overflow: "hidden" }}
        >
          <div className="Prod-Side-Cnts-UUssL">
            <label>
              <input 
                type="radio" 
                name="verified" 
                checked={verifiedFilter === 'all'}
                onChange={() => setVerifiedFilter('all')}
              />
              <p>Show all</p>
            </label>
            <label>
              <input 
                type="radio" 
                name="verified" 
                checked={verifiedFilter === 'verified'}
                onChange={() => setVerifiedFilter('verified')}
              />
              <p>Verified Stores <span>• {displayedProducts.filter(p => p.verified).length} ads</span></p>
            </label>
            <label>
              <input 
                type="radio" 
                name="verified" 
                checked={verifiedFilter === 'unverified'}
                onChange={() => setVerifiedFilter('unverified')}
              />
              <p>Unverified Stores <span>• {displayedProducts.filter(p => !p.verified).length} ads</span></p>
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
          Products
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
                {categories.map((cat, index) => (
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
          <div ref={sortRef} className="Ngalla-Op">
        <div className="SoRts-Sec" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <p>Sort by:</p>
            <button>
              <ArrowsUpDownIcon  />
              {selectedSort}
            </button>
            <motion.div 
              className="Prodct-Gen-DropDown"
              variants={containerVariants}
              initial={false}
              animate={isDropdownOpen ? "open" : "closed"}
              style={{ 
                originY: 0, 
                overflow: "hidden",
                pointerEvents: isDropdownOpen ? 'auto' : 'none'
              }}
            >
              <div className="Gen-DropDown-Main">
                <span onClick={(e) => { e.stopPropagation(); setSelectedSort('Recommended'); setIsDropdownOpen(false); }}>Recommended first</span>
                <span onClick={(e) => { e.stopPropagation(); setSelectedSort('Newest'); setIsDropdownOpen(false); }}>Newest first</span>
                <span onClick={(e) => { e.stopPropagation(); setSelectedSort('Lowest price'); setIsDropdownOpen(false); }}>Lowest price first</span>
                <span onClick={(e) => { e.stopPropagation(); setSelectedSort('Highest price'); setIsDropdownOpen(false); }}>Highest price first</span>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
      <div className='Prodc-Sec-Main'>
        <div className="Prodc-Sec-Main-Grids">
          {displayedProducts.slice(0, visibleProducts).map((item, index) => (
            <div key={item.id} className="Prodc-Card">
               <button className="addTo-Cart">
                    <img src={AddToCartIcon} />
                  </button>
              <Link to={`/product-detail/${item.id}`} className="Prodc-Link">
                <div className="Prodc-Card-Top">
                  <div className={`Prodc-MM-TtPp ${item.verified ? 'verified' : 'unverified'}`}>
                    <span>{item.verified ? 'Verified' : 'Unverified'}</span>
                  </div>

                  <img src={item.img} alt={`Product ${item.id}`} />
                </div>
                <div className="Prodc-Card-BBDt">
                  <h2>{item.title}</h2>
                 
                  <h3>
                    {item.price}
                    <span>{item.oldPrice}</span>
                  </h3>
                  <h4>You save {item.save}</h4>
                   <p className="prodct-Rating">
                     <b>
                       <StarIcon />{item.rating}
                     </b>
                     <span>Reviews: {item.reviews}</span>
                  </p>
                  <div className="BBy-SeL">
                    <div className="BBy-SeL-1"><span>By:</span></div>
                    <div className="BBy-SeL-2">
                      <b><img src={item.ownerImg} alt={item.owner} /></b>
                      <h6><span>{item.owner}</span></h6>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {visibleProducts < displayedProducts.length && (
        <div className="LoaderMore">
          <button 
            className={`custom-btn-border-color custom-btn-radius ${isLoading ? 'is-loading' : ''}`} 
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading ? 'Loading..' : 'Load More'}
          </button>
        </div>
      )}
      </div>
      
      {/* Cities Modal */}
      {showCitiesModal && (
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
              <h3>Cities in {selectedState}</h3>
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
            <div className="modal-body custom-scroll-bar">
              {isFetchingCities ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <motion.div
                    className="location-loader"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <p className="Ladais-tctx">Loading cities in {selectedState}...</p>
                </div>
              ) : cities.length > 0 ? (
                cities.map((city, index) => (
                  <span 
                    key={index} 
                    onClick={() => handleCitySelect(city)}
                    className="city-item"
                   >
                    {city}
                  </span>
                ))
              ) : (
                <div className="no-cities-message">No cities found</div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
    </div>
    </div>
  );
};

export default Products;