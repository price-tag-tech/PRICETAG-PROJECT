import { Link } from 'react-router-dom';
import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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
];

const ServicesCards = () => {
  return (
    <div className="Service-Sec">
      <div className="custom-container">
        <div className="Service-Sec-Main">
          <div className="Service-Sec-TOp">
            <h3 className="big-text">Popular Services</h3>
          </div>
          <div className="Service-Sec-cards">
            {serviceData.map((service, index) => (
              <Link to={`/service/${index + 1}`} className="Service-Card" key={index} style={{ textDecoration: 'none' }}>
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
          <div className='Gen-MMor-Btn'>
            <p>Discover Services Our Clients Love</p>
            <Link to="/services" style={{ textDecoration: 'none' }}><ArrowRightIcon /> See More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;