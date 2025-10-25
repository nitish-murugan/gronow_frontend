import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

import banner1 from '../assets/banners/6.png';
import banner2 from '../assets/banners/1.png';
import banner3 from '../assets/banners/3.png';
import banner4 from '../assets/banners/2.png';
import banner5 from '../assets/banners/4.png';
import banner6 from '../assets/banners/5.png';
import bannerElectronics from '../assets/banners/banner_electronics.svg';
import bannerFashion from '../assets/banners/banner_fashion.svg';
import bannerAllProducts from '../assets/banners/banner_allproducts.svg';


function MainBanner() {
  const slides = [
    {
      url: bannerAllProducts,
    },
    {
      url: banner1,
    },
    {
      url: banner2,
    },
    {
      url: bannerElectronics,
    },
    {
      url: banner3,
    },
    {
      url: banner4,
    },
    {
      url: bannerFashion,
    },
    {
      url: banner5,
    },
    {
      url: banner6,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const navigate = useNavigate();

  const handleClick = (event) => {
    const bannerRect = event.currentTarget.getBoundingClientRect();
    const clickY = event.clientY;
    const distanceFromBottom = bannerRect.bottom - clickY;

    if (distanceFromBottom <= 50) {
      navigate('/products');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className='max-w-[500px] h-[180px] sm:max-w-[1000px] sm:h-[280px] md:max-w-[1800px] md:h-[520px] w-full mx-auto pt-0 pb-0 px-0 relative group'
      onClick={handleClick}
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-3xl bg-center bg-cover duration-700 shadow-2xl hover:shadow-3xl transition-all'
      ></div>
      {/* Left Arrow */}
      <div className='block sm:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-3 sm:left-6 text-xl md:text-2xl rounded-full p-3 bg-white/90 text-primary cursor-pointer shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='block sm:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 sm:right-6 text-xl md:text-2xl rounded-full p-3 bg-white/90 text-primary cursor-pointer shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-xl sm:text-2xl cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? 'text-primary scale-125' : 'text-gray-400'} hover:scale-125`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainBanner;
