import PropTypes from 'prop-types';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { PiToilet } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import 'animate.css';

const House = ({ house }) => {
  const {
    image,
    title,
    price,
    status,
    location,
    segment,
    bedroom,
    toilet,
    id,
  } = house;

  return (
    <div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="space-y-4 rounded-lg border  p-6 shadow-lg bg-white"
      >
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <img
              alt="card navigate ui"
              className="object-cover w-full md:h-[214px] lg:h-[290px] rounded-lg transition duration-300 ease-in-out hover:scale-110"
              src={image}
            />
          </div>
          <h3 className="absolute right-4 bottom-4 bg-black rounded-full px-4 py-2 font-semibold text-white">
            $ {price}
          </h3>
          <h4 className="bg-[#BDA76E] text-white text-[14px] absolute top-4 left-4 px-2 rounded-full">
            for {status}
          </h4>
        </div>
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Type: {segment}
          </p>
          <div className="flex items-center hover:text-sky-500 cursor-pointer">
            <IoLocationSharp className="text-xl text-sky-500 mr-3" />
            {location}
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <MdOutlineBedroomParent className="text-blue-600" /> {bedroom}
            </div>
            <div className="flex gap-2 items-center">
              <PiToilet className="text-blue-600" />
              {toilet}
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <Link to={`estate_details/${id}`}>
            <button className="btn bg-[#F85359] text-white text-[18px]">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

House.propTypes = {
  house: PropTypes.shape({
    bedroom: PropTypes.any,
    segment: PropTypes.any,
    id: PropTypes.any,
    image: PropTypes.any,
    location: PropTypes.any,
    price: PropTypes.any,
    status: PropTypes.any,
    title: PropTypes.any,
    toilet: PropTypes.any,
  }),
};

export default House;
