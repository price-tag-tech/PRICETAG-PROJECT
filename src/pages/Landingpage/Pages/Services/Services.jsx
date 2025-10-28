import { Link } from 'react-router-dom';
import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";
import { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from "framer-motion";
import { StarIcon, ArrowsUpDownIcon, MapPinIcon, BriefcaseIcon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

import StoreOwner1 from '../../../../assets/images/Store/Owners/1.jpg';
import StoreOwner2 from '../../../../assets/images/Store/Owners/2.jpg';
import StoreOwner3 from '../../../../assets/images/Store/Owners/3.jpg';
import StoreOwner4 from '../../../../assets/images/Store/Owners/4.jpg';

const serviceData = [
  { title: "Home Cleaning Service", owner: "MJ Ventures", img: StoreOwner1, rating: 4.2, reviews: 200, price: 25 },
  { title: "Plumbing Service", owner: "FixIt Pro", img: StoreOwner2, rating: 4.5, reviews: 150, price: 30 },
  { title: "Electrician Service", owner: "Spark Masters", img: StoreOwner3, rating: 4.7, reviews: 180, price: 35 },
  { title: "Gardening Service", owner: "Green Thumb", img: StoreOwner4, rating: 4.3, reviews: 120, price: 20 },
  { title: "Painting Service", owner: "Color Experts", img: StoreOwner1, rating: 4.1, reviews: 95, price: 28 },
  { title: "Car Wash Service", owner: "Shiny Cars", img: StoreOwner2, rating: 4.6, reviews: 210, price: 15 },
  { title: "Moving Service", owner: "MoveFast", img: StoreOwner3, rating: 4.4, reviews: 140, price: 50 },
  { title: "Laundry Service", owner: "Clean & Fresh", img: StoreOwner4, rating: 4.5, reviews: 175, price: 18 },
  { title: "AC Repair Service", owner: "MJ Ventures", img: StoreOwner1, rating: 4.3, reviews: 160, price: 40 },
  { title: "Roofing Service", owner: "FixIt Pro", img: StoreOwner2, rating: 4.6, reviews: 130, price: 45 },
  { title: "HVAC Installation", owner: "Spark Masters", img: StoreOwner3, rating: 4.8, reviews: 190, price: 55 },
  { title: "Lawn Mowing", owner: "Green Thumb", img: StoreOwner4, rating: 4.2, reviews: 110, price: 22 },
  { title: "Interior Design", owner: "Color Experts", img: StoreOwner1, rating: 4.4, reviews: 85, price: 60 },
  { title: "Auto Detailing", owner: "Shiny Cars", img: StoreOwner2, rating: 4.7, reviews: 220, price: 35 },
  { title: "Furniture Assembly", owner: "MoveFast", img: StoreOwner3, rating: 4.1, reviews: 105, price: 25 },
  { title: "Dry Cleaning", owner: "Clean & Fresh", img: StoreOwner4, rating: 4.5, reviews: 155, price: 20 },
  { title: "Pest Control", owner: "MJ Ventures", img: StoreOwner1, rating: 4.6, reviews: 145, price: 32 },
  { title: "Locksmith Service", owner: "FixIt Pro", img: StoreOwner2, rating: 4.9, reviews: 200, price: 38 },
  { title: "Solar Panel Installation", owner: "Spark Masters", img: StoreOwner3, rating: 4.7, reviews: 170, price: 70 },
  { title: "Tree Trimming", owner: "Green Thumb", img: StoreOwner4, rating: 4.3, reviews: 135, price: 28 },
];

const categories = [
  "All", "Fashion", "Culinary", "Hospitality", "Teaching", "Administrative", "Sales and Marketing", "Home Care",
  "Carpentry", "Technician", "Building Construction", "Logistics", "Driving", "Events", "Info Tech",
  "Cleaning", "Beauty and Wellness", "Health Worker", "Security Jobs", "Factory Jobs", "Agric Jobs",
  "Music", "Fine Art", "Finance", "Laundry Services", "Engineering", "Law", "Journalism", "Warehousing"
];

const Services = () => {
  useDocumentTitle("Services");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentLocation, setCurrentLocation] = useState('Loading...');
  const [locationOpen, setLocationOpen] = useState(false);
  const [states, setStates] = useState([]);
  const [showCitiesModal, setShowCitiesModal] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [isFetchingCities, setIsFetchingCities] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Most Popular');
  const [visibleServices, setVisibleServices] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const locationRef = useRef(null);
  const sortRef = useRef(null);

  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

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
    if (!isDropdownOpen) return;

    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

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

  const sortedServices = useMemo(() => {
    let sorted = [...serviceData];
    switch (selectedSort) {
      case 'Most Popular':
        sorted.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'Highest Rated':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'Lowest Price':
        sorted.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    return sorted;
  }, [selectedSort]);

  // Handle drag scrolling
  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };
  const handleMouseLeave = () => { isDown = false; };
  const handleMouseUp = () => { isDown = false; };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Buttons scroll
  const scrollLeftBtn = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };
  const scrollRightBtn = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleServices(prev => prev + 8);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="Service-Sec Servi-PPage forOthernPag">
      <div className="custom-container">
          <div className="Sttore-TToP Services-Top">
            <div className="Sttore-TToP-1">
              <h3 className="big-text">Services</h3>
            </div>
            <div className="Sttore-TToP-2">
              <div ref={locationRef} className="SoRts-Sec" onClick={() => setLocationOpen(!locationOpen)}>
                <p>Location:</p>
                <button>
                  <MapPinIcon />
                  {currentLocation === 'Loading...' ? 'Loading location..' : currentLocation}
                </button>
                <motion.div 
                  className="Store-Gen-DropDown"
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


              <div ref={sortRef} className="Ngalla-Op">
                <div className="SoRts-Sec" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <p>Sort by:</p>
                  <button>
                    <ArrowsUpDownIcon />
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
                      <span onClick={(e) => { e.stopPropagation(); setSelectedSort('Most Popular'); setIsDropdownOpen(false); }}>Most Popular</span>
                      <span onClick={(e) => { e.stopPropagation(); setSelectedSort('Highest Rated'); setIsDropdownOpen(false); }}>Highest Rated</span>
                      <span onClick={(e) => { e.stopPropagation(); setSelectedSort('Lowest Price'); setIsDropdownOpen(false); }}>Lowest Price</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Scroll Section - Next/Prev buttons only here */}
          <div className="Sub-Services-TOops-Wrapper">
            <button className="service-scroll-btn prev" onClick={scrollLeftBtn}>
              <ChevronLeftIcon />
            </button>

            <div
              className="Sub-Services-TOops"
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <ul>
                {categories.map((cat, i) => (
                  <li 
                    key={i} 
                    className={cat === selectedCategory ? 'active' : ''}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <BriefcaseIcon />{cat}
                  </li>
                ))}
              </ul>
            </div>

            <button className="service-scroll-btn next" onClick={scrollRightBtn}>
             <ChevronRightIcon />
            </button>
          </div>

        <div className="Service-Sec-Main">
          <div className="Sttore-TToP Services-Top">
            <h3 className="mid-text">
              {selectedCategory} Services in{' '}
             <span className='cureent-Spanns'>
                 {currentLocation === 'Loading...' ? (
                <motion.div
                  className="location-loader inline-location-loader"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={{ display: 'inline-block', width: '16px', height: '16px', verticalAlign: 'middle' }}
                />
              ) : (
                currentLocation
              )}
             </span>
            </h3>
          </div>

          {/* Service Cards - No buttons or custom scrolling here */}
          <div className="Service-Sec-cards">
            {sortedServices.slice(0, visibleServices).map((service, index) => (
              <Link
                to={`/service/${index + 1}`}
                className="Service-Card"
                key={index}
                style={{ textDecoration: 'none' }}
              >
                <div className="Service-Card-Top">
                  <h2>{service.title}</h2>
                </div>
                <div className="Service-Card-Main">
                  <div className="Service-Card-Main-1">
                    <img src={service.img} alt={service.owner} />
                  </div>
                  <div className="Service-Card-Main-2">
                    <div className='Service-Card-Main-2-Dlt'>
                      <h3>{service.owner}</h3>
                      <h5>
                        <b><StarIcon />{service.rating}</b>
                        <span>Reviews: {service.reviews}</span>
                      </h5>
                      <h4>From: ₦{service.price} <span>/hour</span></h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        {visibleServices < sortedServices.length && (
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
  );
};

export default Services;