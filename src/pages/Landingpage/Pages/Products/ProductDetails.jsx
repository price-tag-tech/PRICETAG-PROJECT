import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";
import { 
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline';


import Product1 from '../../../../assets/images/Store/Products/1.jpg';
import Product2 from '../../../../assets/images/Store/Products/2.jpg';
import Product3 from '../../../../assets/images/Store/Products/3.jpg';
import Product4 from '../../../../assets/images/Store/Products/4.jpg';

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
                            <button><ArrowsPointingOutIcon /> </button>
                        </div>
                        <div className="Prodduc-BansSPlY-Footer">
                            <span className="active"><img src={Product1} /></span>
                            <span><img src={Product2} /></span>
                            <span><img src={Product3} /></span>
                            <span><img src={Product4} /></span>
                        </div>
                    </div>
                </div>
                 <div className="ProductDetails-MaiNn-2">
                    <div className="ProductDetails-MaiNn-2DlTS">
                         <div className="ProductDetails-MaiNn-2DlTS-1">
                            <h3 className="mid-text">Compact Drip Coffee Maker – Single Serve</h3>
                            <h2>₦5,999.99 <span>₦6,999.99</span></h2>
                         </div>
                          <div className="ProductDetails-MaiNn-2DlTS-2"></div>
                           <div className="ProductDetails-MaiNn-2DlTS-3"></div>
                            <div className="ProductDetails-MaiNn-2DlTS-4"></div>
                    </div>
                 </div>
            </div>
         </div>
    </div>
  );
};

export default ProductDetails;
