import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';
import BackImg from './../images/image1.png';

const Slider = () => {
  const slides = [
    {
      url: BackImg,
    },
    {
      url: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/304874960_178577688013215_476653196921177400_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=783fdb&_nc_ohc=TLj2prGxxykAX82Yp11&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCEkjYQy1UjTUV_CWNXiFkkfCBl2Blq5t3_p7vfz8oIfg&oe=659D8E93',
    },
    {
      url: 'https://ictsamacharcdn.prixacdn.net/media/albums/341638207smart-health-nepal_cgKWuIxmbG_L9hf2MkwOs.jpeg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isFirstSlide = currentIndex === slides.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


  const autoplayInterval = 3000;

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    return () => clearInterval(autoplayTimer);
  }, [currentIndex]);

  return (
    <div className=' h-[300px] w-full md:h-[350px] lg:h-[550px] relative group mb-10 p-10 '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500 transition-all rounded-[20px]'
      ></div>

      <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <MdKeyboardArrowLeft size={40} onClick={prevSlide} />
      </div>

      <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <MdKeyboardArrowRight size={40} onClick={nextSlide} />
      </div>

      <div className='flex justify-center top-10 py-2 mt-5 '>
        {slides.map((slide, index) => (
          <div key={index} onClick={() => goToSlide(index)} className='text-2xl cursor-pointer'>
            <RxDotFilled className={`text-${index === currentIndex ? '#1FB4A1' : 'gray-500'}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
