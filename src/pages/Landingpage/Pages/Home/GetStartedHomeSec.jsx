
import GetiImg1 from '../../../../assets/images/GetiImg/1.png';
import GetiImg2 from '../../../../assets/images/GetiImg/2.png';
import GetiImg3 from '../../../../assets/images/GetiImg/3.png';



const GetStartedHomeSec = () => {
  

  return (
        <div className="GenFitSec">
      <div className="custom-container">
        <div className="Topl-Gen-Head">
          <div className="Topl-Gen-Head-Part">
            <h3 className="big-text">
             Simplify Your Shopping Journey.
            </h3>
          </div>

           <div className="Topl-Gen-Head-Part">
            <p>Compare prices, explore verified stores, and get the best value — all in one seamless experience.</p>
           </div>
        </div>

        <div className="Getti-Grid">
            <div className="Getti-card">
                <img src={GetiImg1} />
                <h4 className='mid-text'>Compare Prices Instantly</h4>
                <p>Find the best deals across multiple stores in seconds. Save time and money with smart price comparisons.</p>
            </div>

               <div className="Getti-card">
                <img src={GetiImg2} />
                <h4 className='mid-text'>Discover Trusted Stores</h4>
                <p>Shop from verified businesses offering quality products and services. Every store you see is built to earn your trust.</p>
            </div>

               <div className="Getti-card">
                <img src={GetiImg3} />
                <h4 className='mid-text'>Shop Smarter, Every Time</h4>
                <p>Enjoy a seamless experience — from browsing to checkout. The easiest way to make confident, informed purchases.</p>
            </div>


        </div>


        </div>
        </div>
  );
};

export default GetStartedHomeSec;
