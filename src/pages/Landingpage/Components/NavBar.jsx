import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import CartIcon from '../../../assets/images/cart-icon.svg';
import Logo from '../../../assets/images/logo.png';
// Outline Heroicons
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Tabler Icons
import {
  IconShoppingBag,
  IconBriefcase,
  IconBuildingStore,
  IconChevronDown,
  IconSearch,
  IconUser,
  IconX
} from '@tabler/icons-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [desktopSearchFocused, setDesktopSearchFocused] = useState(false);
  const [mobileSearchFocused, setMobileSearchFocused] = useState(false);
  const [selectedSearchOption, setSelectedSearchOption] = useState('Products');
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const searchRef = useRef(null);
  const searchToggleRef = useRef(null);

  const optionMap = {
    'Products': IconShoppingBag,
    'Services': IconBriefcase,
    'Stores': IconBuildingStore
  };

  const handleSelectSearchOption = (option) => {
    setSelectedSearchOption(option);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && toggleRef.current !== event.target) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleSearchClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target) && searchToggleRef.current !== event.target) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleSearchClickOutside);
    } else {
      document.removeEventListener('mousedown', handleSearchClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleSearchClickOutside);
    };
  }, [isSearchOpen]);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleSearchToggle = (e) => {
    e.stopPropagation();
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setMobileSearchFocused(false);
  };

  const handleCartClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // Add cart functionality here if needed
  };

  const SelectedIcon = optionMap[selectedSearchOption];

  return (
    <nav className={`pg-navbar ${isMenuOpen ? 'show-pg-NAv-Menu' : ''} ${isSearchOpen ? 'show-pg-NAv-SearCh' : ''}`}>
     <div className='custom-container'>
      <div className='pg-navbar-content'>
        <div className='pg-navbar-L'>
          <Link to="/" className='pg-site-logo'>
            <img src={Logo} />
          </Link>
        </div>
        <div className='pg-navbar-R'>
          <div className={`pg-navbar-Search-Sec ${desktopSearchFocused ? 'focused' : ''}`}>
              <div className='pg-navbar-Search-Sec-1 with-Dropdown'>
                <button className='pg-search-option-btn'>
                  <SelectedIcon />
                 <span>{selectedSearchOption}</span>
                  <b><IconChevronDown /></b>
                </button>
                 <div className='Gen-DropDown'>
                  <div className='Gen-DropDown-Main'>
                  <span onClick={() => handleSelectSearchOption('Products')}><IconShoppingBag /> Products</span>
                  <span onClick={() => handleSelectSearchOption('Services')}><IconBriefcase /> Services</span>
                  <span onClick={() => handleSelectSearchOption('Stores')}><IconBuildingStore /> Stores</span>
                  </div>
                </div>
                
              </div>
              <div className='pg-navbar-Search-Sec-2'>
                <input 
                  type='text' 
                  placeholder={`Search for ${selectedSearchOption}`}
                  onFocus={() => setDesktopSearchFocused(true)}
                  onBlur={() => setDesktopSearchFocused(false)}
                />
                <button><IconSearch /></button>
              </div>
          </div>
          <div className='pg-navbar-Icons'>
            <ul>
               <li className='with-Dropdown'>
                <span>Explore<IconChevronDown /></span>
                  <div className='Gen-DropDown'>
                     <div className='Gen-DropDown-Main'>
                      <Link to="/products" onClick={handleMenuLinkClick}>Products</Link>
                      <Link to="/services" onClick={handleMenuLinkClick}>Services</Link>
                      </div>
                </div>
              </li>

              <li className='with-Dropdown'>
                <span>Stores <IconChevronDown /></span>
                  <div className='Gen-DropDown'>
                     <div className='Gen-DropDown-Main'>
                      <Link to="/stores" onClick={handleMenuLinkClick}>Find Stores</Link>
                      <Link to="/open-store" onClick={handleMenuLinkClick}>Open a Store</Link>
                      </div>
                </div>
              </li>
              <li>
                <Link to="/login" onClick={handleMenuLinkClick}>Login</Link>
              </li>
              <li className='with-Dropdown'>
                <span className='custom-btn-background'>Get started <IconChevronDown /></span>
                <div className='Gen-DropDown'>
                  <div className='Gen-DropDown-Main'>
                  <Link to="/signup" onClick={handleMenuLinkClick}>Create Account</Link>
                  <Link to="/agent" onClick={handleMenuLinkClick}>Become an Agent</Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/cart" className='custom-btn-border-color custom-btn-white-hover cart-iconBx' onClick={handleCartClick}>
                  <img src={CartIcon} />
                  <b>1</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='pg-mobile-icons'>
          <span className='search-ICn' ref={searchToggleRef} onClick={handleSearchToggle}><IconSearch /></span>
          <Link to="/cart" onClick={handleCartClick}><img src={CartIcon} /> <b>1</b></Link>
          <div className='pg-mmag-toggs-sec with-Dropdown'>
          <span className='getstart-Drops'><IconUser /> <b><IconChevronDown /></b></span>
           <div className='Gen-DropDown'>
                  <div className='Gen-DropDown-Main'>
                  <Link to="/signup" onClick={handleMenuLinkClick}>Create Account</Link>
                  <Link to="/agent" onClick={handleMenuLinkClick}>Become an Agent</Link>
                  </div>
                </div>

          </div>
           <span className='pg-menu-togller' ref={toggleRef} onClick={handleMenuToggle}></span>
        </div>

      </div>
     </div>
     <div className='pg-mobile-SearCh' ref={searchRef}>
       <div className='custom-container'>
       <div className={`pg-navbar-Search-Sec ${mobileSearchFocused ? 'focused' : ''}`}>
              <div className='pg-navbar-Search-Sec-1 with-Dropdown'>
                <button className='pg-search-option-btn'>
                  <SelectedIcon />
                  <b><IconChevronDown /></b>
                </button>
                 <div className='Gen-DropDown'>
                  <div className='Gen-DropDown-Main'>
                  <span onClick={() => handleSelectSearchOption('Products')}><IconShoppingBag /> Products</span>
                  <span onClick={() => handleSelectSearchOption('Services')}><IconBriefcase /> Services</span>
                  <span onClick={() => handleSelectSearchOption('Stores')}><IconBuildingStore /> Stores</span>
                  </div>
                </div>
                
              </div>
              <div className='pg-navbar-Search-Sec-2'>
                <input 
                  type='text' 
                  placeholder={`Search for ${selectedSearchOption}`}
                  onFocus={() => setMobileSearchFocused(true)}
                  onBlur={() => setMobileSearchFocused(false)}
                />
                <button className='close-seachh' onClick={handleSearchClose}><IconX /></button>
                <button><IconSearch /></button>
              </div>
          </div>
          </div>
     </div>


<div className='pg-Mobile-Menu-Dropdown' ref={menuRef}>
  <Link to="/products" onClick={handleMenuLinkClick}>Products</Link>
  <Link to="/services" onClick={handleMenuLinkClick}>Services</Link>
  <Link to="/stores" onClick={handleMenuLinkClick}>Find Stores</Link>
  <Link to="/open-store" onClick={handleMenuLinkClick}>Open a Store</Link>
  <Link to="/agent" onClick={handleMenuLinkClick}>Become an Agent</Link>
  <Link to="/signup" className='custom-btn-background' onClick={handleMenuLinkClick}>Create Account</Link>
  <Link to="/login" onClick={handleMenuLinkClick}>Login</Link>
</div>

    </nav>
  );
};

export default NavBar;