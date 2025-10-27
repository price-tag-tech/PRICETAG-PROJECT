import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Product1 from '../../../../assets/images/Store/Products/1.jpg';
import Product2 from '../../../../assets/images/Store/Products/2.jpg';
import Product3 from '../../../../assets/images/Store/Products/3.jpg';
import Product4 from '../../../../assets/images/Store/Products/4.jpg';
import Product5 from '../../../../assets/images/Store/Products/5.jpg';
import Product6 from '../../../../assets/images/Store/Products/6.jpg';

import StoreOwner1 from '../../../../assets/images/Store/Owners/1.jpg';
import StoreOwner2 from '../../../../assets/images/Store/Owners/2.jpg';
import StoreOwner3 from '../../../../assets/images/Store/Owners/3.jpg';
import StoreOwner4 from '../../../../assets/images/Store/Owners/4.jpg';

const ProductSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const products = [
    { 
      img: Product1, 
      title: '4 sheets/Set Cartoon Face Stickers, Self-Adhesive...', 
      price: '₦149.99', 
      oldPrice: '₦199.99', 
      save: '₦50', 
      ownerImg: StoreOwner1, 
      owner: 'MJ Ventures',
      rating: 4.5,
      reviews: 150
    },
    { 
      img: Product2, 
      title: 'Multifunctional Adjustable Kitchen Rack Organizer...', 
      price: '₦799.99', 
      oldPrice: '₦999.99', 
      save: '₦200', 
      ownerImg: StoreOwner2, 
      owner: 'Smart Haven',
      rating: 4.2,
      reviews: 220
    },
    { 
      img: Product3, 
      title: 'Rechargeable LED Touch Lamp with Dimmable Brightness...', 
      price: '₦3,499.99', 
      oldPrice: '₦3,999.99', 
      save: '₦500', 
      ownerImg: StoreOwner3, 
      owner: 'GlowMart',
      rating: 4.8,
      reviews: 180
    },
    { 
      img: Product4, 
      title: 'Smart Wireless Earbuds with Noise Cancellation...', 
      price: '₦12,999.99', 
      oldPrice: '₦15,999.99', 
      save: '₦3,000', 
      ownerImg: StoreOwner4, 
      owner: 'TechZilla',
      rating: 4.6,
      reviews: 350
    },
    { 
      img: Product5, 
      title: 'Soft Cotton Throw Pillow Set – Modern Home Decoration...', 
      price: '₦2,499.99', 
      oldPrice: '₦3,000.00', 
      save: '₦500', 
      ownerImg: StoreOwner1, 
      owner: 'CozyHome',
      rating: 4.3,
      reviews: 120
    },
    { 
      img: Product6, 
      title: 'Portable Rechargeable Mini Fan – Foldable, USB-Powered...', 
      price: '₦1,299.99', 
      oldPrice: '₦1,599.99', 
      save: '₦300', 
      ownerImg: StoreOwner2, 
      owner: 'Cool Breeze Stores',
      rating: 4.7,
      reviews: 280
    },
  ];

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="Prodc-Sec">
      <div className="Prodc-Sec-TOp">
        <h3 className="big-text">Trending Products</h3>
      </div>
      <div className='Prodc-Sec-Main'>
        <div className="scroll-btns">
          <button ref={prevRef} className="scroll-btn prev-btn">
            <ChevronLeftIcon />
          </button>
          <button ref={nextRef} className="scroll-btn next-btn">
            <ChevronRightIcon />
          </button>
        </div>
      
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={20}
          loop={true} 
          speed={800} 
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 }, 
            480: { slidesPerView: 1.5, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 15 }, 
            768: { slidesPerView: 2.5, spaceBetween: 15 }, 
            1024: { slidesPerView: 3, spaceBetween: 20 }, 
            1280: { slidesPerView: 4, spaceBetween: 20 }, 
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="Prodc-Card">
                <Link to={`/product-detail/${index + 1}`} className="Prodc-Link">
                  <div className="Prodc-Card-Top">
                    <img src={item.img} alt={`Product ${index + 1}`} />
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='Gen-MMor-Btn'>
        <p>Explore What’s Trending Now</p>
        <Link to="/products"><ArrowRightIcon /> See More</Link>
      </div>
    </div>
  );
};

export default ProductSlider;