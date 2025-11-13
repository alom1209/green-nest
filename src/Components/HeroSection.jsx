import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const HeroSection = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1633849858928-5075d9373449?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kb29yJTIwcGxhbnRzJTIwYmFja2dyb3VuZCUyMGdyZWVufGVufDB8fDB8fHww",
      text: "Bring Nature Home 🌿",
    },
    {
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
,
      text: "Fresh Air, Green Care 🌱",
    },
    {
      image: "https://images.unsplash.com/photo-1616627563513-2b5b1b2b1e46"
,
      text: "Grow Happiness, Grow Plants 🌸",
    },
  ];

  return (
    <div className="w-full h-[60vh] md:h-[80vh] lg:h-[90vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide, index) => (
         <SwiperSlide key={index}>
  <div
    className="relative w-full h-full flex items-center justify-center"
    style={{
      backgroundImage: `url(${slide.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    
    <div className="absolute inset-0 bg-green-600 bg-opacity-40"></div>

    
    <div className="relative text-center px-4 md:px-10 flex flex-col justify-center h-full">
      <h2 className="text-white text-xl sm:text-3xl md:text-5xl font-semibold mb-3 drop-shadow-lg">
        {slide.text}
      </h2>
      <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
       Indoor plants for cleaner air & a brighter home
      </p>
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
