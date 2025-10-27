import { Link } from 'react-router-dom';
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
    banner: StoreBanner1,
    name: 'MJ Ventures',
    ownerImg: StoreOwner1,
    owner: 'Mary Jane',
    products: 300,
    services: 3,
    memberSince: '10th Jan, 2023',
    rating: 4.0,
    reviews: 200,
  },
  {
    banner: StoreBanner2,
    name: 'TechCraft Hub',
    ownerImg: StoreOwner2,
    owner: 'Samuel Bright',
    products: 520,
    services: 6,
    memberSince: '25th Mar, 2022',
    rating: 4.5,
    reviews: 310,
  },
  {
    banner: StoreBanner3,
    name: 'Bella Beauty Store',
    ownerImg: StoreOwner3,
    owner: 'Isabella Cruz',
    products: 150,
    services: 4,
    memberSince: '18th Jul, 2023',
    rating: 4.2,
    reviews: 180,
  },
  {
    banner: StoreBanner4,
    name: 'GreenLeaf Organics',
    ownerImg: StoreOwner4,
    owner: 'David Green',
    products: 220,
    services: 2,
    memberSince: '2nd Dec, 2021',
    rating: 4.8,
    reviews: 450,
  },
  {
    banner: StoreBanner5,
    name: 'HomeEssence',
    ownerImg: StoreOwner5,
    owner: 'Sophia Turner',
    products: 410,
    services: 5,
    memberSince: '9th Feb, 2024',
    rating: 4.3,
    reviews: 260,
  },
  {
    banner: StoreBanner6,
    name: 'Urban Wear',
    ownerImg: StoreOwner6,
    owner: 'Michael Adams',
    products: 340,
    services: 3,
    memberSince: '1st May, 2023',
    rating: 4.6,
    reviews: 390,
  },
];

const HomeTopStores = () => {
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
          {stores.map((store, index) => (
            <Link to={`/store/${index + 1}`} className="Store-Card" key={index} style={{ textDecoration: 'none' }}>
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

        <div className='Gen-MMor-Btn'>
          <p>See Who’s Leading the Marketplace</p>
          <Link to="/stores" style={{ textDecoration: 'none' }}><ArrowRightIcon /> See More</Link>
        </div>

      </div>
    </div>
  );
};

export default HomeTopStores;