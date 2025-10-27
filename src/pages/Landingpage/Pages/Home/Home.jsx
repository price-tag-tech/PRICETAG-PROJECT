import Header from './Header';
import FeaturesSec from './featuresSec';
import GetStartedHomeSec from './GetStartedHomeSec';
import StartStoreSec from './StartStoreSec';
import HomeTopStores from './HomeTopStores';
import SumryProductServices from './SumryProductServices';
import ServicesCards from './ServicesCards';


const Home = () => {

  return (
    <div className="pg-landing-page">
      <Header />
      <FeaturesSec />
      <SumryProductServices />
      <GetStartedHomeSec />
      <StartStoreSec />
      <HomeTopStores />
      <ServicesCards />
    </div>
  );
};

export default Home;
