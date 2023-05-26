import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const WaysToShop = () => {
  const byAge = [
    { img: 'https://img.creator-prod.zmags.com/assets/images/63c177dc2a22912ce2ab6cb4.png?im=Resize,width=595' },
    { img: 'https://img.creator-prod.zmags.com/assets/images/63c177dc2a22912ce2ab6cb5.png?im=Resize,width=595' },
    { img: 'https://img.creator-prod.zmags.com/assets/images/63c177dcf6b59320adf413fd.png?im=Resize,width=595' },
    { img: 'https://img.creator-prod.zmags.com/assets/images/63c177dcf6b59320adf413fc.png?im=Resize,width=595' },
    { img: 'https://img.creator-prod.zmags.com/assets/images/63c177e02a22912ce2ab6cbf.png?im=Resize,width=595' }
  ]
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <div className='flex items-center justify-center flex-col relative'>
      <img className='md:w-[320px] w-[290px] h-[40px]' src="https://img.creator-prod.zmags.com/assets/images/645d0f206df9f10f76e41146.png?im=Resize,width=924" alt="" />
      <img className='md:w-[90%] lg:block md:block sm:block hidden sm:w-[90%] lg:w-[1050px]  lg:h-[300px] h-[700px] md:h-[500px] shadow rounded-md lg:mt-5 md:mt-3' src="https://img.creator-prod.zmags.com/assets/images/63c1778af6b59320adf41351.png?im=Resize,width=3532" alt="" />
      <div className="grid grid-cols-2 md:mx-auto mx-5 lg:grid-cols-5 md:grid-cols-3 lg:absolute md:absolute sm:absolute static md:top-32 top-0 md:mt-2 mt-10 gap-6 md:gap-4 pb-20" data-aos="zoom-in">
        {byAge.map((item, index) => (
          <div
            key={index}
            className="transform  hover:scale-105 transition duration-300">
            <img className='md:w-[180px] md:h-[180px] w-full h-full bg-info hover:bg-error duration-300 transition p-3 rounded-md shadow-md object-fill cursor-pointer ' src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WaysToShop
