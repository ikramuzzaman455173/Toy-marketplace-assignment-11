import React, { useState } from 'react';
import ToysRusBanner from '../Pages/SharedPage/ToysRusBanner';
import Rating from "react-rating"
import { FaStar, FaRegStar } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import useTitle from '../MyHooks/DynamicTitle';
const ToysDetails = () => {
  const [fold, setFold] = useState(true)
  const toy = useLoaderData()
  useTitle('Toy Details Page')
  // console.log(toy);
  const { seller_name, seller_email, price, quantity, rating, description, toyimg, toysname, subcategory } = toy || {}
  const data = { price };
  const priceString = data.price.toString();
  const [dollars, cents] = priceString.split(".");
  return (
    <>
      <ToysRusBanner heading={subcategory} />
      <div className="min-w-screen min-h-screen mt-20 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded border-8 border-slate-300 shadow-md p-10 lg:p-20 mx-auto relative md:text-left">
          <div className="md:flex items-center -mx-10">
            {/* ====magnify image part start===== */}

            {/* <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img src={toyimg} className="w-full border-4 rounded-md shadow-md p-2 border-base-100" alt="toy img" />
              </div>
            </div> */}

            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
              <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: 'Toy Image',
                      isFluidWidth: true,
                      src: toyimg,
                    },
                    largeImage: {
                      src: toyimg,
                      width: 1200,
                      height: 1800
                    }
                  }}
                />
              </div>
            </div>
            {/* ====magnify image part end===== */}
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase sm:text-2xl text-2xl md:text-4xl mb-5 text-slate-600 text-center info-text">{toysname}</h1>
                {
                  fold ? <>
                    <p className='mb-5 md:text-justify md:text-[17px] text-slate-700'>{description.substring(0, 100)} .....</p>
                    <span className='cursor-pointer font-bold text-slate-500 hover:text-primary' onClick={() => setFold(!fold)}>Read More</span>
                    {/* <span onClick={() => setFold(false)}>Read More</span> */}
                  </> :
                    <>
                      <p className='mb-5 text-slate-700 md:text-[17px]'>{description}</p>
                      <span className='cursor-pointer font-bold text-slate-500 hover:text-primary' onClick={() => setFold(true)}>Read Less</span>
                    </>
                }
              </div>

              <div className='flex items-center flex-col border-2 p-2 justify-center rounded bg-base-100 shadow-md mb-4'>
                <h3 className='seller'>serller Name : <span className='text-primary md:font-medium tracking-normal'>{seller_name}</span></h3>
                <h3 className='seller'>serller Email: <span className='text-primary md:font-medium tracking-normal lowercase'>{seller_email}</span></h3>
              </div>

              <div className='flex items-center md:flex-row sm:flex-row flex-col gap-4 justify-between'>
                <p className='font-bold text-xl text-slate-600'>Qunatity: <span className='text-primary'>{quantity}</span></p>
                <div className='flex  items-center justify-center gap-2 text-xl'>
                  <Rating placeholderRating={rating} readonly placeholderSymbol={<FaStar />} className='text-yellow-400' emptySymbol={<FaRegStar />} fullSymbol={<FaStar />}>
                  </Rating>
                  <span className='font-bold text-primary'>{rating}</span>
                </div>
              </div>

              <div>
                <div className="inline-block align-bottom mr-5 mt-4 text-slate-700">
                  <span className="text-2xl leading-none align-baseline text-primary">$</span>
                  <span className="font-bold text-5xl leading-none align-baseline">{dollars}</span>
                  <span className="text-2xl leading-none align-baseline">.{cents}</span>
                </div>
                <div className="inline-block align-center">
                  <button className="awesome-btn opacity-75 hover:opacity-100 rounded-full px-10 py-2 md:mt-0 mt-4 font-semibold pt-4">BUY NOW </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ToysDetails;
