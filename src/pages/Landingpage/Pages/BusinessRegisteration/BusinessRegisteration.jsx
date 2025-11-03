import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";
import BusReg1 from './Img/BusReg1.jpg';

const BusinessRegisteration = () => {
  
    useDocumentTitle("Business Registeration");

  return (
    <div className="BusinessRegisteration">
     <div className="custom-container">
     <div className="BusinessRegisteration-Main">
        <div className="BusinessRegisteration-Banner">
            {/* <img src={BusReg1} /> */}
        </div>
        <div className="BusinessRegisteration-Dlt"></div>
     </div>
     </div>
    </div>
  );
};

export default BusinessRegisteration;
