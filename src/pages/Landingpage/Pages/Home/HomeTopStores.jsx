import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';
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
    lat: 6.6018,
    lng: 3.3515,
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
    lat: 9.0765,
    lng: 7.3986,
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
    lat: 4.8156,
    lng: 7.0498,
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
    lat: 7.3775,
    lng: 3.9059,
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
    lat: 6.1982,
    lng: 6.7317,
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
    lat: 12.0001,
    lng: 8.5167,
    products: 340,
    services: 3,
    memberSince: '1st May, 2023',
    rating: 4.6,
    reviews: 390,
  },
];

const HomeTopStores = () => {
  const [userLat, setUserLat] = useState(null);
  const [userLng, setUserLng] = useState(null);

  // Haversine formula to calculate distance
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return Math.round(distance);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLat(latitude);
          setUserLng(longitude);
        },
        (error) => {
          console.error('Geolocation error:', error);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      );
    }
  }, []);

  const getStoreId = (name, id) => {
    const initials = name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    return `${initials}PT${String(id).padStart(3, '0')}`;
  };

  return (
    <div className="GenFitSec">
      <div className="custom-container">
        <div className="Topl-Gen-Head">
          <div className="Topl-Gen-Head-Part">
            <p className="Subb-Had-Pp">Top Stores</p>
            <h3 className="big-text">Discover the Best Stores in One Place.</h3>
          </div>
        </div>

        <div className="Gen-Store-Cards">
          {stores.map((store) => {
            const storeId = getStoreId(store.name, store.id);
            const distance = userLat && userLng ? calculateDistance(userLat, userLng, store.lat, store.lng) : 'Unknown';
            const distanceDisplay = typeof distance === 'number' ? `${distance} km` : distance;
            return (
              <Link to={`/store/${store.id}`} className="Store-Card" key={store.id} style={{ textDecoration: 'none' }}>
                <div className="Top-Store-Card">
                  <img src={store.banner} alt={store.name} />
                </div>
                <div className="Sub-Store-Card">
                  <h3 className='mid-text'>{store.name}</h3>
                  <ul>
                    <li>
                      <span>Store ID</span>
                      <p>{storeId}</p>
                    </li>
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
                      <span>Distance from you:</span>
                      <p>{distanceDisplay}</p>
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
            );
          })}
        </div>

        <div className='Gen-MMor-Btn'>
          <p>See Who’s Leading the Marketplace</p>
          <Link to="/stores" style={{ textDecoration: 'none' }}><ArrowRightIcon /> See More</Link>
        </div>

      </div>
    </div>
  );
};

export default HomeTopStores;