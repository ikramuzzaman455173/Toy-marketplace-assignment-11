import React, { useEffect } from 'react'
import InfoText from '../Pages/SharedPage/InfoText'
import Rating from 'react-rating'
import { FaStar, FaRegStar } from "react-icons/fa";
import AOS from 'aos';
const PopularProduct = () => {
  const products = [
    {
      img: 'http://slimages.macys.com/is/image/MCY/products/0/optimized/22859015_fpx.tif',
      name: 'Iron Spider',
      currentPrice: 28.99,
      previousPrice: 32.50,
      rating: 4.6,
      details: '6-inch action figure with multiple points of articulation.'
    },
    {
      img: 'http://slimages.macys.com/is/image/MCY/products/0/optimized/22859031_fpx.tif',
      name: 'Spider-Man',
      currentPrice: 48.99,
      previousPrice: 54.50,
      rating: 4.2,
      details: 'Highly detailed 12-inch action figure with interchangeable hands and accessories.'
    },
    {
      img: 'http://slimages.macys.com/is/image/MCY/products/0/optimized/23973188_fpx.tif',
      name: 'Iron Man Hulkbuster',
      currentPrice: 46.99,
      previousPrice: 52.50,
      rating: 3.6,
      details: 'Giant 16-inch action figure with light-up features and sound effects.'
    },
    {
      img: 'http://slimages.macys.com/is/image/MCY/products/0/optimized/22929277_fpx.tif',
      name: 'Black Widow',
      currentPrice: 38.99,
      previousPrice: 42.30,
      rating: 4.5,
      details: '10-inch action figure with weapons and realistic cloth costume.'
    },
  ]
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
      <InfoText title="Our Popular Toys" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5 mx-5" data-aos="fade-up"data-aos-duration="500">
        {/* ====card part start===== */}
        {products.map((item, index) => {
          return (
            <div key={index} className=" w-full rounded-md shadow-md border-2 p-2 my-auto bg-gray-50 text-slate-600 transform hover:-translate-y-4 hover:shadow-lg transition duration-300 cursor-move" data-aos="fade-up" data-aos-duration="500"  data-aos-delay={index * 100}>
              <img src={item.img} alt="toy img" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="md:text-4xl text-3xl  font-semibold tracking-wide info-text text-center">{item.name}</h2>
                  <p className="text-slate-500 font-medium text-[16px] md:text-center">{item.details}</p>
                  <div className='flex items-center gap-2 justify-center text-xl font-bold'>
                    <Rating placeholderRating={item.rating} readonly placeholderSymbol={<FaStar />} className='text-yellow-400' emptySymbol={<FaRegStar />} fullSymbol={<FaStar />}>
                    </Rating>              </div>
                  <div className='flex items-center justify-center gap-6 text-xl font-bold'>
                    <p><span className='text-primary'>$</span>{item.currentPrice}</p>
                    <p className='text-primary'>$<span className='line-through text-slate-400'>{item.previousPrice}</span></p>
                  </div>
                </div>
                <button type="button" className="awesome-btn rounded-full p-2 mt-auto">Buy Now</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PopularProduct