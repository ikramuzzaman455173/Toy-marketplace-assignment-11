import React from 'react'

const ToysRusBanner = ({heading}) => {
  return (
    <>
      <img className='md:w-full mt-[4.5rem] md:h-[250px] md:mt-20 shadow-md' src="https://www.toysrus.com/on/demandware.static/-/Sites-storefront-catalog-TRU/default/dw16d06783/Brand/Marvel.jpg" alt="" />
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-center awesome-btn mt-10 px-20 py-2 cursor-pointer rounded-full md:text-[24px] sm:text-[20px] text-[18px] tracking-wider font-bold text-slate-600'>{heading}</h2>
      </div>
    </>
  )
}

export default ToysRusBanner