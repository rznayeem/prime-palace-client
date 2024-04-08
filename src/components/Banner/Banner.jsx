import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import bannerBg from '../../assets/bannerBg.png';

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(0);

  console.log(bannerBg);

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
    <div className="container relative mx-auto h-[80vh] my-10">
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
        onSlideChange={() => console.log('slide change')}
        className="mySwiper2 mx-auto z-0 h-[80vh] rounded-2xl"
      >
        {sliderData.map((slider, idx) => (
          <SwiperSlide key={idx}>
            <img className="" src={slider.img} alt="" />
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
        className="mySwiper absolute bottom-[300px] max-w-[80%]"
      >
        {sliderData.map((slider, idx) => (
          <SwiperSlide key={idx}>
            <img
              className="hover:shadow-lg h-auto w-auto p-0 rounded-xl border m-5"
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
