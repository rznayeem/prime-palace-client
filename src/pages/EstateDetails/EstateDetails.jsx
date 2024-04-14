import { useLoaderData, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { PiToilet } from 'react-icons/pi';

const EstateDetails = () => {
  const selectedEstates = useLoaderData();
  const { id } = useParams();

  const selectedEstate = selectedEstates.find(
    selectedEstate => selectedEstate.id === parseInt(id)
  );

  const {
    image,
    title,
    name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    segment,
    bedroom,
    toilet,
  } = selectedEstate;

  return (
    <div>
      <Helmet>
        <title>Prime Palace | Estate Details</title>
      </Helmet>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex  relative flex-col container mx-auto overflow-hidden rounded">
          <div className="">
            <img
              src={image}
              alt=""
              className="w-full h-60 sm:h-[600px] dark:bg-gray-500 object-cover rounded-lg"
            />
            <h4 className="bg-[#F85359] text-white text-xl absolute top-4 left-4 px-4 py-2 rounded-full">
              for {status}
            </h4>
          </div>
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 sm:px-10 sm:mx-12 lg:rounded-lg dark:bg-gray-50 border">
            <div className="space-y-2">
              <div
                rel="noopener noreferrer"
                className="text-2xl flex flex-col lg:flex-row items-center justify-between font-semibold sm:text-3xl"
              >
                <h1>{title}</h1>
                <h1 className="mt-4 text-xl font-semibold border p-4 rounded-lg bg-slate-200 border-blue-300">
                  Price: {price}
                </h1>
              </div>
              <div className=" dark:text-gray-600 flex flex-col lg:flex-row gap-10">
                <h1>
                  Name:
                  <a rel="noopener noreferrer" className="ml-3">
                    {name}
                  </a>
                </h1>
                <div className="flex items-center hover:text-sky-500 cursor-pointer">
                  <IoLocationSharp className="text-xl text-sky-500 mr-3" />
                  {location}
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center">
                    <MdOutlineBedroomParent className="text-blue-600" />{' '}
                    {bedroom}
                  </div>
                  <div className="flex gap-2 items-center">
                    <PiToilet className="text-blue-600" />
                    {toilet}
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <h1 className="text-blue-300">
                  <span className="mr-3 font-semibold text-black">
                    Total area:
                  </span>{' '}
                  {area}
                </h1>
                <h3>
                  <span className="font-semibold">Segment:</span> {segment}
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-3 lg:gap-6 items-center">
                <span className="lg:text-xl font-semibold">Facilities:</span>
                {facilities.map((facility, idx) => (
                  <div className="flex" key={idx}>
                    <h1 className="bg-blue-300 text-white px-4 py-2 rounded-full">
                      #{facility}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="dark:text-gray-800">
              <p>
                <span className="mr-2 font-semibold">Description:</span>{' '}
                {description}
              </p>
            </div>
            <div className="flex justify-center">
              <button className="btn bg-[#F85359] text-xl text-white">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
