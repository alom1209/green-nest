import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const HeroSection = () => {
  const slides = [
    {
      image: "https://i.postimg.cc/qM4rR8fL/snake-plant.jpg",
      text: "Bring Nature Home 🌿",
    },
    {
      image: "https://i.postimg.cc/JnQ4j9dT/monstera.jpg",
      text: "Fresh Air, Green Care 🌱",
    },
    {
      image: "https://i.postimg.cc/K8fyqNqJ/succulent.jpg",
      text: "Grow Happiness, Grow Plants 🌸",
    },
  ];

  return (
    <div className="w-full h-[60vh] md:h-[80vh] lg:h-[90vh]">
      <Swiper
        spaceBetween={20}
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
    {/* Overlay */}
    <div className="absolute inset-0 bg-green-600 bg-opacity-40"></div>

    {/* Centered Text */}
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
