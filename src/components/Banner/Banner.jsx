import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import 'aos/dist/aos.css';

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(0);

  const sliderData = [
    {
      img: 'https://i.ibb.co/2hPpJRw/banner-1.jpg',
      title: 'Escape 1',
      des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.',
    },
    {
      img: 'https://i.ibb.co/wLXJD9y/banner-2.jpg',
      title: 'Escape 2',
      des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.',
    },
    {
      img: 'https://i.ibb.co/vDTMxKy/banner-3.jpg',
      title: 'Escape 3',
      des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.',
    },
    {
      img: 'https://i.ibb.co/vDTMxKy/banner-3.jpg',
      title: 'Escape 3',
      des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.',
    },
    {
      img: 'https://i.ibb.co/vDTMxKy/banner-3.jpg',
      title: 'Escape 3',
      des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.',
    },
    {
      img: 'https://i.ibb.co/vDTMxKy/banner-3.jpg',
      title: 'Escape 3',
      des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.',
    },
  ];

  return (
    <div className="mx-auto h-[90vh] md:h-[100vh] -mt-[111px]">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        data-aos="zoom-in-right"
        className="mySwiper2 mx-auto h-[100vh] bg-[#00000080] bg-blend-multiply"
      >
        {sliderData.map((slider, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="absolute inset-0 bg-cover bg-center bg-[#00000040] bg-blend-multiply"
              style={{ backgroundImage: `url(${slider.img})` }}
            >
              <div className="text-center mt-36">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-6xl font-extrabold text-white font-bodoni"
                >
                  Find Your Dream Home at <br />
                  <span className="mr-2">Prime</span>
                  <span className="text-[#F85359]">Palace</span>
                </h1>
                <p
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="mt-7 text-white text-xl"
                >
                  Explore a Wide Range of Residential Properties in Your Desired
                  Location .<br />
                  Discover Comfort, Luxury, and Convenience .
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mySwiper absolute bottom-[200px] md:bottom-[200px] lg:bottom-[300px] max-w-[80%]"
      >
        {sliderData.map((slider, idx) => (
          <SwiperSlide key={idx}>
            <img
              className="hover:shadow-lg btn h-auto w-auto p-0 rounded-xl border m-5 cursor-pointer"
              src={slider.img}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
