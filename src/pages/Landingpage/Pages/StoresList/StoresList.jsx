import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";
import { useState, useMemo, useRef, useEffect } from 'react';
import { motion } from "framer-motion";

import { Link } from 'react-router-dom';
import { ArrowRightIcon, StarIcon, ArrowsUpDownIcon, MapPinIcon, XMarkIcon } from '@heroicons/react/24/outline';
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

const StoresList = () => {

  useDocumentTitle("Stores");

  const [visibleStores, setVisibleStores] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Most Popular');
  const [currentLocation, setCurrentLocation] = useState('Loading...');
  const [locationOpen, setLocationOpen] = useState(false);
  const [states, setStates] = useState([]);
  const [showCitiesModal, setShowCitiesModal] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [isFetchingCities, setIsFetchingCities] = useState(false);
  const sortRef = useRef(null);
  const locationRef = useRef(null);

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

  const parseDate = (dateStr) => {
    const cleanedStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
    return new Date(cleanedStr);
  };

  const sortedStores = useMemo(() => {
    let sorted = [...stores];
    switch (selectedSort) {
      case 'Most Popular':
        sorted.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'Newest Stores':
        sorted.sort((a, b) => parseDate(b.memberSince) - parseDate(a.memberSince));
        break;
      case 'Oldest Stores':
        sorted.sort((a, b) => parseDate(a.memberSince) - parseDate(b.memberSince));
        break;
      default:
        break;
    }
    return sorted;
  }, [selectedSort]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleStores(prev => prev + 3);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="Sttore-PPage forOthernPag">
      <div className="custom-container">
        <div className="Sttore-TToP">
         <div className="Sttore-TToP-1">
          <h3 className="big-text">Find stores</h3>
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
                  <span onClick={(e) => { e.stopPropagation(); setSelectedSort('Newest Stores'); setIsDropdownOpen(false); }}>Newest Stores</span>
                  <span onClick={(e) => { e.stopPropagation(); setSelectedSort('Oldest Stores'); setIsDropdownOpen(false); }}>Oldest Stores</span>
                </div>
              </motion.div>
            </div>
           </div>

         </div>
        </div>

        <div className="Gen-Store-Cards">
          {sortedStores.slice(0, visibleStores).map((store) => (
            <Link to={`/store/${store.id}`} className="Store-Card" key={store.id} style={{ textDecoration: 'none' }}>
              <div className="Top-Store-Card">
                <img src={store.banner} alt={store.name} />
              </div>
              <div className="Sub-Store-Card">
                <h3 className='mid-text'>{store.name}</h3>
                <ul>
                  <li>
                    <span>Owner</span>
                    <h6>
                      <span className="ProfIcon">
                        <img src={store.ownerImg} alt={store.owner} />
                      </span>
                      <span className="ProfNamE">
                        <b>{store.owner}</b>
                      </span>
                    </h6>
                  </li>
                  <li>
                    <span>Products</span>
                    <p>{store.products}</p>
                  </li>
                  <li>
                    <span>Services</span>
                    <p>{store.services}</p>
                  </li>
                  <li>
                    <span>Location</span>
                    <p>{store.location}</p>
                  </li>
                  <li>
                    <span>Member Since</span>
                    <p>{store.memberSince}</p>
                  </li>
                </ul>
                <div className="Foot-Store-Card">
                  <h4>
                    <b>
                      <StarIcon /> {store.rating}
                    </b>
                    <span>Reviews: {store.reviews}</span>
                  </h4>
                  <h6>
                    <ArrowRightIcon />
                  </h6>
                </div>
              </div>
            </Link>
          ))}
        </div>

      {visibleStores < sortedStores.length && (
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
  );
};

export default StoresList;