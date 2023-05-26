import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import InfoText from '../Pages/SharedPage/InfoText';
import Rating from "react-rating"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FaStar,FaRegStar} from "react-icons/fa";
import { Link } from 'react-router-dom';
const ShopByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [data, setData] = useState([])

  const handleTabChange = (index) => {
    setSelectedCategory(index);
  };

  useEffect(() => {
    fetch('https://toy-marketplace-server-side-ten.vercel.app/toysCategory').then(response => response.json()).then(data => {
      // console.log(data)
      setData(data)
    }).catch(error => console.log(`404 page not found ${error}`))
  }, [])

  useEffect(() => {
    AOS.init();
  }, []);

  // console.log('data',data);

  return (
    <>
      <InfoText title="Shop By Category" />
      <div className="flex justify-center">
        <div className="max-w-5xl w-full">
          <Tabs
            selectedIndex={selectedCategory}
            onSelect={handleTabChange}
            className="react-tabs border-2 p-4 rounded-md shadow-sm"
          >
            <TabList className="react-tabs__tab-list bg-neutral rounded-[5px] text-white">
              {data.map((category) => (
                <Tab key={category.subcategory} className="react-tabs__tab text-base-100">
                  {category.subcategory}
                </Tab>
              ))}
            </TabList>
            {data.map((category) => (
              <TabPanel key={category.subcategory} className="react-tabs__tab-panel bg-base-100 p-10 rounded-md shadow-sm">
                <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4 mt-4" data-aos="zoom-out-up">
                  {category.toys.map((toy, index) => (
                    <div key={index} className="flex flex-col items-center border-2 shadow-md bg-base-100 rounded-[5px]  pb-5 p-2">
                      <img src={toy.toyimg} alt={toy.toysname} className="w-full md:object-fill object-cover rounded-[5px] shadow h-[200px]" />
                      <div className="text-center mt-2 md:text-xl text-[20px] md:font-bold font-medium text-slate-700">{toy.toysname}</div>
                      <div className='text-[17px] text-error font-bold'><span className='text-slate-500'>$ </span>{toy.price}</div>
                      {/* <div className='text-[17px] text-neutral'>Rating: <span className='text-error font-bold'>{toy.rating}</span></div> */}
                      <div className="flex justify-center items-center">
                        <Rating placeholderRating={toy.rating} readonly placeholderSymbol={<FaStar />} className='text-yellow-500' emptySymbol={<FaRegStar />} fullSymbol={<FaStar />}>
                        </Rating>
                        <p className="text-lg pl-2 font-medium text-slate-500 ">{toy.rating}</p>
                      </div>
                      <Link to={`/toy/${toy._id}`} className="awesome-btn p-2 px-5 rounded-md tracking-wider mt-4">
                        View Details
                      </Link>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
