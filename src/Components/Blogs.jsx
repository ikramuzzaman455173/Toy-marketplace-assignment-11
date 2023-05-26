import React from 'react'
import ToysRusBanner from '../Pages/SharedPage/ToysRusBanner'
import BlogContent from './BlogContent'
import useTitle from '../MyHooks/DynamicTitle'

const Blogs = () => {
  useTitle('Blogs Page')
  return (
    <>
      <ToysRusBanner heading="ToysRus Blogs Page" />
        <BlogContent/>
    </>
  )
}

export default Blogs