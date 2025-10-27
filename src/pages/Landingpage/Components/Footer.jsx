import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';

const Footer = () => {
  
  return (
      <footer className="site-Footer">
        <div className="custom-container">
            <div className="Top-Footer">
                <div className="foot-Links">
                    <Link to="/products">Products</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/stores">Find Stores</Link>
                     <Link to="/open-store">Open a  Store</Link>
                      <Link to="/become-agent">Become an Agent</Link>
                </div>

                 <div className="foot-Links">
                     <Link to="/pricing">Pricing</Link>
                    <Link to="/how-it-works">How it Works</Link>
                    <Link to="/company">Company Info</Link>
                     <Link to="/support">Help and Support</Link>
                </div>

                 <div className="foot-Links">
                    <Link to="/return-policy">Return Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                     <Link to="/privacy">Privacy Policy</Link>
                </div>

            </div>
             <div className="Sub-Footer">
                <div className="Sub-Footer-1">
                    <Link to="/" className='Foot-Logo'><img src={Logo} /></Link>
                </div>
                <div className="Sub-Footer-2">
                    <h6>Connect:</h6>
                    <div className="Sub-FFot-LinkS">
                        <a href="https://instagram.com/pricetagofficial">Instagram</a>
                         <a href="https://linkedin.com/company/pricetag">LinkedIn</a>
                          <a href="https://twitter.com/pricetag">Twitter</a>
                           <a href="https://facebook.com/pricetag">Facebook</a>
                            <a href="https://youtube.com/pricetag">YouTube</a>
                    </div>
                </div>
                 <div className="Sub-Footer-3">
                    <p>© 2025 Pricetag. All rights reserved.</p>
                 </div>
             </div>
        </div>
      </footer>
  );
};

export default Footer;