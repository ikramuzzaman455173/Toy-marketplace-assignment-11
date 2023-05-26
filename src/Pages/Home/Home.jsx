import React from 'react'
import Header from '../../Components/Header'
// import ScrollToTopButton from '../SharedPage/ScrollToTopButton'
import WaysToShop from '../../Components/WaysToShop'
import GallerySection from '../../Components/GallerySection'
import ShopByCategory from '../../Components/ShopByCategory'
import useTitle from '../../MyHooks/DynamicTitle'
import PopularProduct from '../../Components/PopularProduct'

const Home = () => {
  useTitle('Home')
  return (
    <div className='pb-20'>
      <Header />
      <div className='text-center mt-20 md:mb-20 mb-0'>
        <WaysToShop />
      </div>
      <div className="mb-20">
        <GallerySection />
      </div>
      <ShopByCategory />
      <div className='mt-20'>
      <PopularProduct/>
      </div>
    </div>
  )
}

export default Home