import {
  EllipsisHorizontalIcon,
  EyeIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  StarIcon,
  ChatBubbleBottomCenterTextIcon,
  MinusIcon,
  ShareIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import StoreOwner1 from "../../../../assets/images/Store/Owners/1.jpg";


import Portfolio1 from '../../../../assets/images/Portfolio/1.jpg';
import Portfolio2 from '../../../../assets/images/Portfolio/2.jpg';
import Portfolio3 from '../../../../assets/images/Portfolio/3.jpg';
import Portfolio4 from '../../../../assets/images/Portfolio/4.jpg';

import ServicesReviewSec from './ServicesReviewSec';


const ServicesDetails = () => {
  return (
    <div className="ServicesDetails-MM-Page">
      <div className="custom-container">
        <div className="ServicesDetails-MM">
          <div className="ServicesDetails-MM-1">
            <div className="Oksu-TOop">
              <div className="Oksu-TOop-1">
                <div className="Oksu-TOop-IMg">
                  <img src={StoreOwner1} alt="Owner" />
                  <span>
                    <EyeIcon />
                  </span>
                </div>
              </div>
              <div className="Oksu-TOop-2">
                <div>
                  <p>ID:009823</p>
                  <h3>Ndubuisi Prince Godson</h3>
                  <div className="Oksu-TOop-BTNs">
                    <button className="custom-btn-radius custom-btn-background">
                      Contact Details
                    </button>
                    <span className="custom-btn-border-color custom-btn-white-hover custom-btn-radius">
                      <EllipsisHorizontalIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="JUjs-po">
              <span className="statusOS">
                <i className="online-Sttaus online"></i>Online
              </span>
              <span className="VVef-Badge verified">Verified</span>
            </div>

               <div className="Rafs-BABst">

                  <div className="Prodduc-BansSPlY">
                          <div className="Prodduc-BansSPlY-Top poprtliosImg">
                               <img  src={Portfolio1}   />
                                  <button>
                                    <EyeIcon />
                                 </button>
                           </div>
                         <div className="Prodduc-BansSPlY-Footer">
                         <span className="active"><img src={Portfolio1} /> </span>
                         <span><img src={Portfolio2} /></span>
                         <span><img src={Portfolio3} /></span>
                         <span><img src={Portfolio4} /></span>
                     </div>
                 </div>
              </div>

            <div className="OOIk-BBDYS">
              <div className="OOIk-Part">
                <h3>
                  <span><BriefcaseIcon /></span>Profession:
                </h3>
                <p>Auto Detailing</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><CalendarDaysIcon /></span>Member Since:
                </h3>
                <p>05 May, 2025</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><ClockIcon /></span>Experience:
                </h3>
                <p>8 Years</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><MapPinIcon /></span>Location:
                </h3>
                <p>Kano State, Kano</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><ArrowTrendingUpIcon /></span>Distance from you:
                </h3>
                <p>726 km</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><BanknotesIcon /></span>Hourly Rate:
                </h3>
                <h4>
                  From: ₦35 <span>/hour</span>
                </h4>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><StarIcon /></span>Rating:
                </h3>
                <p>4.8</p>
              </div>

              <div className="OOIk-Part">
                <h3>
                  <span><ChatBubbleBottomCenterTextIcon /></span>Reviews:
                </h3>
                <p>300</p>
              </div>
            </div>

            <div className="Rafs-BABst">
              <h3>About me</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>

           


                <div className="OOks-Btns">
                    <button className="share-Btn custom-btn-radius" >
                        <ShareIcon /> Share 
                   </button>
                  <a href="#" className="report-Btn custom-btn-radius"><FlagIcon /> Report Abuse</a>
                </div>


          </div>

          <div className="ServicesDetails-MM-2">
            <ServicesReviewSec />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
