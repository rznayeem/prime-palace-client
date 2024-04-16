import { useEffect } from 'react';
import { useState } from 'react';
import House from './House/House';
import 'aos/dist/aos.css';

const Estates = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('estateData.json')
      .then(res => res.json())
      .then(data => setHouses(data));
  }, []);

  return (
    <div className="bg-[url('https://i.ibb.co/x3NC3Hg/toppng-com-abstract-lines-abstract-lines-white-264x485.png')]  bg-[#F9FAFB]">
      <div className="container mx-auto py-24">
        <div className="text-center space-y-4 pb-10">
          <h1 className="font-bodoni text-5xl font-medium">
            Real Estates Property
          </h1>
          <p>
            Experience Luxury Living: Step into a world of luxury with our
            exclusive collection of high-end properties <br /> boasting
            top-notch amenities and breathtaking views.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {houses.map((house, idx) => (
            <House house={house} key={idx}></House>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Estates;
