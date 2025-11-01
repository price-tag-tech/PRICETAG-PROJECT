import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";
import { useState, useRef, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowsPointingOutIcon,
   TagIcon,
  IdentificationIcon,
  MapPinIcon,
  StarIcon,
  PlusIcon,
  MinusIcon,
  UserCircleIcon,
  EyeIcon,
  PhoneIcon,
  BanknotesIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  FlagIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
  ArrowUpOnSquareIcon,
  SparklesIcon,
  ShareIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
  XMarkIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

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


import Thumbnail1 from '../../../../assets/images/Store/Thumbnail/1.jpg';
import Thumbnail2 from '../../../../assets/images/Store/Thumbnail/2.jpg';
import Thumbnail3 from '../../../../assets/images/Store/Thumbnail/3.jpg';


import ReviewSec from './ReviewSec';

const stores = [
  {
    id: 1,
    banner: null, // Not used here
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
    banner: null,
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
    banner: null,
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
    banner: null,
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
    banner: null,
    name: 'HomeEssence',
    ownerImg: StoreOwner1, // Reuse for demo
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
    banner: null,
    name: 'Urban Wear',
    ownerImg: StoreOwner2, // Reuse for demo
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

const ProductDetails = () => {
  const { id } = useParams();

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
      owner: 'TechCraft Hub',
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
      owner: 'Bella Beauty Store',
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
      owner: 'GreenLeaf Organics',
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
      owner: 'HomeEssence',
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
      owner: 'Urban Wear',
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
      owner: 'Bella Beauty Store',
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
      owner: 'GreenLeaf Organics',
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
      owner: 'TechCraft Hub',
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
      owner: 'Bella Beauty Store',
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
      owner: 'GreenLeaf Organics',
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
      owner: 'HomeEssence',
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
      owner: 'Urban Wear',
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
      owner: 'Bella Beauty Store',
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
      owner: 'GreenLeaf Organics',
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
      owner: 'TechCraft Hub',
      rating: 4.3,
      reviews: 260,
      verified: false
    },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    useDocumentTitle("Product not found");
    return <div>Product not found</div>;
  }

  useDocumentTitle(product.title);

  // Find the corresponding store based on product.owner (store name)
  const store = stores.find(s => s.name === product.owner);

  if (!store) {
    return <div>Store not found for this product</div>;
  }

  const storeId = store.id;

  const [showContact, setShowContact] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [copiedContact, setCopiedContact] = useState({ first: false, second: false });
  const [quantity, setQuantity] = useState(1);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [currentImage, setCurrentImage] = useState(product.img);
  const [showZoom, setShowZoom] = useState(false);
  const [userLat, setUserLat] = useState(null);
  const [userLng, setUserLng] = useState(null);

  // Use product.img as first thumbnail, followed by the imported thumbnails
  const images = [product.img, Thumbnail1, Thumbnail2, Thumbnail3];

  const contactRef = useRef(null);
  const paymentRef = useRef(null);
  const shareRef = useRef(null);
  const modalRef = useRef(null);
  const bankModalRef = useRef(null);

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

  const distance = userLat && userLng ? calculateDistance(userLat, userLng, store.lat, store.lng) : null;
  const distanceDisplay = distance ? `${distance} km` : 'Unknown';

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

  useEffect(() => {
    const handleClick = (e) => {
      if (showContact && contactRef.current && !contactRef.current.contains(e.target)) {
        setShowContact(false);
      }
      if (showPayment && paymentRef.current && !paymentRef.current.contains(e.target)) {
        setShowPayment(false);
      }
      if (showShareModal && modalRef.current && !modalRef.current.contains(e.target)) {
        setShowShareModal(false);
      }
      if (showBankModal && bankModalRef.current && !bankModalRef.current.contains(e.target)) {
        setShowBankModal(false);
      }
      if (showZoom && !e.target.closest('.zoom-modal')) {
        setShowZoom(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showContact, showPayment, showShareModal, showBankModal, showZoom]);

  const handleSubButtonClick = (setter) => {
    setter(false);
  };

  const copyToClipboard = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedContact(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedContact(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const copyAccountToClipboard = async () => {
    const accountNumber = '1234567890';
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    } catch (err) {
      console.error('Failed to copy account: ', err);
    }
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const shareLink = window.location.href;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCloseShareModal = () => {
    setShowShareModal(false);
  };

  const handleCloseBankModal = () => {
    setShowBankModal(false);
  };

  const handleCloseZoom = () => {
    setShowZoom(false);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };

  return (
    <div className="ProductDetails-Paggs">
         <div className="custom-container">
            <div className="ProductDetails-MaiNn">
                <div className="ProductDetails-MaiNn-1">
                    <div className="Prodduc-BansSPlY">
                        <div className="Prodduc-BansSPlY-Top">
                            <img 
                              src={currentImage} 
                              alt="Product" 
                              onClick={() => setShowZoom(true)}
                              style={{ cursor: 'pointer' }}
                            />
                            <button onClick={() => setShowZoom(true)}>
                              <EyeIcon />
                            </button>
                        </div>
                        <div className="Prodduc-BansSPlY-Footer">
                          {images.map((img, index) => (
                            <span 
                              key={index}
                              className={currentImage === img ? 'active' : ''}
                              onClick={() => setCurrentImage(img)}
                            >
                              <img src={img} alt={`Thumbnail ${index + 1}`} />
                            </span>
                          ))}
                        </div>
                    </div>

                    <div className="GTha-POls">
                      <div className="GTha-POls-Top">
                            <h3 className="mid-text">{product.title}</h3>
                            <div className="akkjns-Pps">
                              <p>
                                <b><MapPinIcon /> {store.location}, </b>
                              </p>
                              <p>
                                <span><SparklesIcon /> Promoted</span>
                                <span><ClockIcon /> 20 min ago</span>
                              </p>
                            </div>

                              <div className="Ujsyja-Ols">
                               <ul className="Satgbs-Ujs">
                                  <li>
                                    <span><TagIcon /> <b>Category:</b></span> Electronics
                                  </li>
                                  <li>
                                    <span><ArrowsPointingOutIcon /> <b>Condition:</b></span> Brand New
                                  </li>
                                  <li>
                                    <span><IdentificationIcon /> <b>Product ID:</b></span> {product.id}
                                  </li>
                                  <li>
                                    <span><MapPinIcon /> <b>Distance from you:</b></span> {distanceDisplay}
                                  </li>
                                  <li>
                                    <span><EyeIcon /> <b>Views:</b></span> 6437
                                  </li>
                                  <li>
                                    <span><CheckCircleIcon /> <b>Availability:</b></span> Available
                                  </li>
                                  <li>
                                    <span><StarIcon /> <b>Rating:</b></span> {product.rating}
                                  </li>
                                  <li>
                                    <span><ChatBubbleLeftRightIcon /> <b>Reviews:</b></span> {product.reviews}
                                  </li>

                                   <li>
                                    <span><InformationCircleIcon /> <b>Other Informations:</b></span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                  </li>

                                </ul>

                              </div>

                      </div>
                    </div>


                </div>
                 <div className="ProductDetails-MaiNn-2">
                    <div className="ProductDetails-MaiNn-2DlTS">
                         <div className="ProductDetails-MaiNn-2DlTS-1">

                            <h2>{product.price} <span>{product.oldPrice}</span></h2>
                            <h6>You save {product.save}</h6>

                            <div className="Quahs-Soka">
                              <span onClick={handleDecrement} style={{ cursor: 'pointer' }}><MinusIcon /></span>
                               <b>{quantity}</b>
                                <span onClick={handleIncrement} style={{ cursor: 'pointer' }}><PlusIcon /></span>
                            </div>

                            <h4>
                              <b>
                                <StarIcon />
                                {product.rating}
                              </b>
                              <span>Reviews: {product.reviews}</span>
                            </h4>

                         </div>
                         
                           <div className="ProductDetails-MaiNn-2DlTS-2">
                             <div className="BBy-SeL">
                              <div className="BBy-SeL-1"><span>Owner:</span></div>
                              <div className="BBy-SeL-2">
                                <b><img src={store.ownerImg} alt={store.owner} /></b>
                                <h6><span>{store.owner}</span></h6>
                              </div>
                            </div>
                            <Link to={`/store/${storeId}`} className="ProdStore-OwN">
                              <b>{product.owner}</b>
                              <span className={`VVef-Badge ${product.verified ? 'verified' : 'unverified'}`}>{product.verified ? 'Verified' : 'Unverified'}</span>
                            </Link>
                            <p className="Mebe-SunP"><UserCircleIcon />Member since {store.memberSince}</p>

                            <div className="Oks-BTNS">
                              <div className="Oks-BTNS-Content" ref={contactRef}>
                                <button 
                                  className="custom-btn-background custom-btn-radius"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowContact(prev => !prev);
                                  }}
                                >
                                  <PhoneIcon /> Show Contact
                                </button>
                                <AnimatePresence>
                                  {showContact && (
                                    <motion.div
                                      className="Oks-BTNS-Gen-Drop"
                                      initial={{ y: -20, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      exit={{ y: -20, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <ul className="AGhs-Ul">
                                        <li>
                                          <span><PhoneIcon /><b>09037494084</b></span>
                                          <span 
                                            className="Serve-Sab-Batn" 
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              copyToClipboard('09037494084', 'first');
                                            }}
                                          >
                                            {copiedContact.first ? 'Copied!' : 'Copy'}
                                          </span>
                                        </li>
                                        <li>
                                          <span><PhoneIcon /><b>08101317299</b></span>
                                          <span 
                                            className="Serve-Sab-Batn" 
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              copyToClipboard('08101317299', 'second');
                                            }}
                                          >
                                            {copiedContact.second ? 'Copied!' : 'Copy'}
                                          </span>
                                        </li>
                                      </ul>
                                      <div className="AGhs-Dae">
                                        <p>
                                          <span>❗️</span> Never pay in advance! Even for the delivery
                                        </p>
                                        <p>
                                          <span>✅</span> Inform the seller you got their number on pricetag so they know where you came from
                                        </p>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                              <div className="Oks-BTNS-Content" ref={paymentRef}>
                                <button 
                                  className="custom-btn-border-color custom-btn-white-hover custom-btn-radius"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPayment(prev => !prev);
                                  }}
                                >
                                  <BanknotesIcon /> Make Payment
                                </button>
                                <AnimatePresence>
                                  {showPayment && (
                                    <motion.div
                                      className="Oks-BTNS-Gen-Drop"
                                      initial={{ y: -20, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      exit={{ y: -20, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <ul className="AGhs-Ul">
                                        <li>
                                          <span><CreditCardIcon/><b>Pay online</b></span>
                                          <span 
                                            className="Serve-Sab-Batn" 
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              // Add proceed logic here if needed
                                              handleSubButtonClick(setShowPayment);
                                            }}
                                          >
                                            Proceed
                                          </span>
                                        </li>
                                        <li>
                                          <span><BuildingLibraryIcon /><b>Bank transfer</b></span>
                                          <span 
                                            className="Serve-Sab-Batn" 
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleSubButtonClick(setShowPayment);
                                              setShowBankModal(true);
                                            }}
                                          >
                                            View Details
                                          </span>
                                        </li>
                                      </ul>
                                      <div className="AGhs-Dae">
                                        <p>
                                          <span>🛡️</span> We recommend paying online through our secure payment system to keep proper records and ensure transaction tracking.
                                        </p>
                                        <p>
                                          <span>💰</span> If you choose to pay via bank transfer, confirm the store’s verified account details before sending money.
                                        </p>
                                        <p>
                                          <span>🧾</span> Always keep your payment receipt or transaction ID for future reference.
                                        </p>
                                         <p>
                                          <span>⚠️</span> Avoid paying into personal accounts that are not verified by our platform.
                                        </p>
                                         <p>
                                          <span>📞</span> If anything feels suspicious, contact our support team immediately before completing payment.
                                        </p>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                           </div>

                            <div className="ProductDetails-MaiNn-2DlTS-3">
                              <button className="AddToCart-Btn custom-btn-radius"><PlusIcon /> Add to cart</button>
                              <Link to={`/store/${storeId}`} className="VisiteStor-Btn custom-btn-radius"><BuildingStorefrontIcon /> Visit Store</Link>
                            </div>

                          <div className="ProductDetails-MaiNn-2DlTS-5">
                            <h3>Safety tips</h3>
                            <ul>
                                <li>
                                  <MinusIcon />
                                  <span>Avoid paying in advance, even for delivery.</span>
                                </li>
                                <li>
                                  <MinusIcon />
                                  <span>Buy only from verified and trusted stores.</span>
                                </li>
                                <li>
                                  <MinusIcon />
                                  <span>Meet sellers in safe, public places when possible.</span>
                                </li>
                                <li>
                                  <MinusIcon />
                                  <span>Inspect the item carefully and ensure the packed item matches what you checked.</span>
                                </li>
                                <li>
                                  <MinusIcon />
                                  <span>Use only secure payment options provided on our platform.</span>
                                </li>
                                <li>
                                  <MinusIcon />
                                  <span>Be cautious of deals that look too good to be true.</span>
                                </li>
                                <li>
                                  <MinusIcon />
                                  <span>Report any suspicious sellers or activities immediately.</span>
                                </li>
                              </ul>

                          </div>

                          
                            <div className="ProductDetails-MaiNn-2DlTS-3" ref={shareRef}>
                              <button 
                                className="share-Btn custom-btn-radius"
                                onClick={() => setShowShareModal(true)}
                              >
                                <ShareIcon /> Share 
                              </button>
                              <a href="#" className="report-Btn custom-btn-radius"><FlagIcon /> Report Abuse</a>
                            </div>


                    </div>
                 </div>
            </div>
         </div>
             <div className="Produt-RevSec">
         <div className="custom-container">
          <ReviewSec />
         </div>
         </div>

      {/* Share Modal */}
      {showShareModal && (
        <>
          <div 
            className="modal-backdrop" 
            onClick={handleCloseShareModal}
          />
          <div 
            className="cities-modal" 
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Share Product</h3>
              <button 
                onClick={handleCloseShareModal}
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
              <div className="review-input-group">
                <label htmlFor="share-link">Product Link</label>
                <input
                  id="share-link"
                  type="text"
                  value={shareLink}
                  readOnly
                  placeholder="Product link will appear here"
                />
              </div>
              <button 
                type="button" 
                className="custom-btn-background custom-btn-radius ssuba-btn"
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </>
      )}

      {/* Bank Details Modal */}
      {showBankModal && (
        <>
          <div 
            className="modal-backdrop" 
            onClick={handleCloseBankModal}
          />
          <div 
            className="cities-modal" 
            ref={bankModalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Bank Transfer Details</h3>
              <button 
                onClick={handleCloseBankModal}
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
              <div className="review-input-group">
                <label htmlFor="bank-name">Bank Name</label>
                <input
                  id="bank-name"
                  type="text"
                  value="First Bank Nigeria"
                  readOnly
                  placeholder="Bank name"
                />
              </div>
              <div className="review-input-group">
                <label htmlFor="account-name">Account Name</label>
                <input
                  id="account-name"
                  type="text"
                  value={product.owner}
                  readOnly
                  placeholder="Account name"
                />
              </div>
              <div className="review-input-group">
                <label htmlFor="account-number">Account Number</label>
                <input
                  id="account-number"
                  type="text"
                  value="1234567890"
                  readOnly
                  placeholder="Account number"
                />
              </div>
              <button 
                type="button" 
                className="custom-btn-background custom-btn-radius ssuba-btn"
                onClick={copyAccountToClipboard}
              >
                {copiedAccount ? 'Copied!' : 'Copy Account'}
              </button>
            </div>
          </div>
        </>
      )}

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {showZoom && (
          <>
      
            <motion.div
              className="zoom-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
                    <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseZoom}
            />
              <motion.img
                src={currentImage}
                alt="Zoomed Product"
                className="zoomed-image"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                onClick={handleCloseZoom}
                style={{ cursor: 'pointer' }}
              />
              <button
                onClick={handleCloseZoom}
                className="zoom-close-btn"
              >
                <XMarkIcon />
              </button>
              <button
                onClick={handlePrevImage}
                className="Zoom-nav-btn prev"
              >
                <ArrowLeftIcon />
              </button>
              <button
                onClick={handleNextImage}
                className="Zoom-nav-btn next"
              >
                <ArrowRightIcon />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;