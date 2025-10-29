import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";
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
} from '@heroicons/react/24/outline';




import Product1 from '../../../../assets/images/Store/Products/1.jpg';
import Product2 from '../../../../assets/images/Store/Products/2.jpg';
import Product3 from '../../../../assets/images/Store/Products/3.jpg';
import Product4 from '../../../../assets/images/Store/Products/4.jpg';

import StoreOwner1 from '../../../../assets/images/Store/Owners/1.jpg';

import ReviewSec from './ReviewSec';

const ProductDetails = () => {
  
    useDocumentTitle("Product Details");

  return (
    <div className="ProductDetails-Paggs">
         <div className="custom-container">
            <div className="ProductDetails-MaiNn">
                <div className="ProductDetails-MaiNn-1">
                    <div className="Prodduc-BansSPlY">
                        <div className="Prodduc-BansSPlY-Top">
                            <img src={Product1} />
                            <button><EyeIcon /> </button>
                        </div>
                        <div className="Prodduc-BansSPlY-Footer">
                            <span className="active"><img src={Product1} /></span>
                            <span><img src={Product2} /></span>
                            <span><img src={Product3} /></span>
                            <span><img src={Product4} /></span>
                        </div>
                    </div>

                    <div className="GTha-POls">
                      <div className="GTha-POls-Top">
                            <h3 className="mid-text">Compact Drip Coffee Maker – Single Serve</h3>
                            <div className="akkjns-Pps">
                              <p>
                                <b><MapPinIcon /> Abia state, Umuahia, </b>
                              </p>
                              <p>
                                <span><FlagIcon /> Promoted</span>
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
                                    <span><IdentificationIcon /> <b>Product ID:</b></span> 441364
                                  </li>
                                  <li>
                                    <span><MapPinIcon /> <b>Distance from you:</b></span> 481 km
                                  </li>
                                  <li>
                                    <span><EyeIcon /> <b>Views:</b></span> 6437
                                  </li>
                                  <li>
                                    <span><CheckCircleIcon /> <b>Availability:</b></span> Available
                                  </li>
                                  <li>
                                    <span><StarIcon /> <b>Rating:</b></span> 4.3
                                  </li>
                                  <li>
                                    <span><ChatBubbleLeftRightIcon /> <b>Reviews:</b></span> 40
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

                            <h2>₦5,999.99 <span>₦6,999.99</span></h2>
                            <h6>You save ₦1,000</h6>

                            <div className="Quahs-Soka">
                              <span><MinusIcon /></span>
                               <b>1</b>
                                <span><PlusIcon /></span>
                            </div>

                            <h4>
                              <b>
                                <StarIcon />
                                4.0
                              </b>
                              <span>Reviews: 329</span>
                            </h4>

                         </div>
                         
                           <div className="ProductDetails-MaiNn-2DlTS-2">
                             <div className="BBy-SeL">
                              <div className="BBy-SeL-1"><span>Owner:</span></div>
                              <div className="BBy-SeL-2">
                                <b><img src={StoreOwner1} /></b>
                                <h6><span>Prince Godson</span></h6>
                              </div>
                            </div>
                            <a href="#" className="ProdStore-OwN">
                              <b>GreenLeaf Organics</b>
                              <span className="VVef-Badge verified">Verified</span>
                            </a>
                            <p className="Mebe-SunP"><UserCircleIcon />Member since 1st May, 2023</p>

                            <div className="Oks-BTNS">
                              <button className="custom-btn-background custom-btn-radius"><PhoneIcon /> Show Contact</button>
                              <button className="custom-btn-border-color custom-btn-white-hover custom-btn-radius"><BanknotesIcon /> Make Payment</button>
                            </div>
                           </div>

                            <div className="ProductDetails-MaiNn-2DlTS-3">
                              <button className="AddToCart-Btn custom-btn-radius"><PlusIcon /> Add to cart</button>
                              <a href="#" className="VisiteStor-Btn custom-btn-radius"><BuildingStorefrontIcon /> Visit Store</a>
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

                    </div>
                 </div>
            </div>
         </div>
             <div className="Produt-RevSec">
         <div className="custom-container">
          <ReviewSec />
         </div>
         </div>
    </div>
  );
};

export default ProductDetails;
