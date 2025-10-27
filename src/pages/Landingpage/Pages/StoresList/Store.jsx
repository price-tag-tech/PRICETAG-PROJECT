import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";
import { useParams } from 'react-router-dom';
import { 
  StarIcon,
  MapPinIcon,
  ShareIcon, 
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

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

const Store = () => {
  const { id } = useParams();
  const store = stores.find(s => s.id === parseInt(id));

  useDocumentTitle(store ? store.name : "Store");

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
          <button className="share-BTn"><ShareIcon /><span>Share Store</span></button>
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
              <div className="Sttart-Card">
                <h3 className="big-text">4.3</h3>
                <span><StarIcon /> Rating</span>
              </div>

              <div className="Sttart-Card">
                <h3 className="big-text">10</h3>
                <span><ChatBubbleLeftRightIcon /> Reviews</span>
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
            
      </div>

    </div>
  );
};

export default Store;