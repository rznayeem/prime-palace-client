import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import Estates from '../../components/Estates/Estates';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Prime Palace | Home</title>
      </Helmet>
      <div className="relative">
        <Banner></Banner>
      </div>
      <Estates></Estates>
    </div>
  );
};

export default Home;
