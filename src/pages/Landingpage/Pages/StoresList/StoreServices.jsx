import { Link } from 'react-router-dom';
import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";
import { useState, useMemo } from 'react';
import { StarIcon } from '@heroicons/react/24/outline';

const StoreServices = ({ store }) => {
  useDocumentTitle(`${store?.name || 'Store'} Services`);

  const [selectedSort, setSelectedSort] = useState('Most Popular');
  const [visibleServices, setVisibleServices] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const serviceData = [
    { title: "Home Cleaning Service", owner: store?.owner || "Mary Johnson", img: store?.ownerImg || null, rating: 4.2, reviews: 200, price: 25 },
    { title: "Plumbing Service", owner: store?.owner || "Mary Johnson", img: store?.ownerImg || null, rating: 4.5, reviews: 150, price: 30 }
  ];

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

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleServices(prev => prev + 8);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="Service-Sec Servi-PPage forOthernPag">
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
  );
};

export default StoreServices;