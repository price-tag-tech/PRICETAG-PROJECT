import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/outline';

import AddToCartIcon from '../../../../assets/images/add-to-cart-icon.svg';

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

const StoreProducts = ({ store }) => {
  const [visibleProducts, setVisibleProducts] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

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
      ownerImg: store?.ownerImg || null, 
      owner: store?.name || 'MJ Ventures',
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
      ownerImg: store?.ownerImg || null, 
      owner: store?.name || 'Smart Haven',
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
      ownerImg: store?.ownerImg || null, 
      owner: store?.name || 'GlowMart',
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
      ownerImg: store?.ownerImg || null, 
      owner: store?.name || 'TechZilla',
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
      ownerImg: store?.ownerImg || null, 
      owner: store?.name || 'CozyHome',
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
      ownerImg: store?.ownerImg || null, 
      owner: store?.name || 'Cool Breeze Stores',
      rating: 4.7,
      reviews: 280,
      verified: false
    },
  ];

  const displayedProducts = useMemo(() => {
    // Default to showing all products, sorted by recommended
    let filtered = products.filter(product => true); // No filtering

    let sorted = [...filtered];
    // Hardcoded sort: Recommended
    sorted.sort((a, b) => (b.rating - a.rating) || (b.reviews - a.reviews));
    return sorted;
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProducts(prev => prev + 9);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="Genrg-ProuctPG-2">
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
  );
};

export default StoreProducts;