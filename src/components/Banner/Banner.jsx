import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import 'aos/dist/aos.css';

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(0);

  const sliderData = [
    {
      img: 'https://i.ibb.co/ZhFRKSq/pexels-thgusstavo-santana-2387624.jpg',
      title: 'Escape 1',
      des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.',
    },
    {
      img: 'https://i.ibb.co/wLXJD9y/banner-2.jpg',
      title: 'Escape 2',
      des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.',
    },
    {
      img: 'https://i.ibb.co/t28By2J/829688.jpg',
      title: 'Escape 3',
      des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.',
    },
    {
      img: 'https://i.ibb.co/NthQThd/luxury-house-mgayhrm416op3g3r.jpg',
      title: 'Escape 3',
      des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.',
    },
    {
      img: 'https://i.ibb.co/r2hjMCh/banner1.jpg',
      title: 'Escape 3',
      des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.',
    },
    {
      img: 'https://i.ibb.co/25CJbtT/vecteezy-unique-industrial-architecture-house-in-daylight-28112810-1.jpg',
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
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        data-aos="zoom-in-right"
        className="mySwiper2 mx-auto h-[100vh] bg-[#00000080] bg-blend-multiply"
      >
        {sliderData.map((slider, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="absolute inset-0 bg-cover bg-center bg-[#00000040] bg-blend-multiply"
              style={{ backgroundImage: `url(${slider.img})` }}
            >
              <div className="text-center mt-52">
                <h1 className="lg:text-6xl animate__animated animate__fadeInLeft text-3xl font-extrabold text-white font-bodoni">
                  Find Your Dream Home at <br className="hidden lg:flex" />
                  <span className="mr-2">Prime</span>
                  <span className="text-[#F85359]">Palace</span>
                </h1>
                <p className="mt-7 animate__animated animate__fadeInRight text-white text-xl">
                  Explore a Wide Range of Residential Properties in Your Desired
                  Location .<br className="hidden lg:flex" />
                  Discover Comfort, Luxury, and Convenience .
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mySwiper absolute bottom-[300px] max-w-[80%]"
      >
        {sliderData.map((slider, idx) => (
          <SwiperSlide key={idx}>
            <img
              className="hover:shadow-lg btn h-auto w-full p-0 rounded-xl border  m-6 cursor-pointer"
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
