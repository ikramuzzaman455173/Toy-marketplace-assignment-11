import { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom'
import NavBar from '../SharedPage/NavBar'
import Footer from '../SharedPage/Footer'
import LoadingSpinner from '../SharedPage/LoadingSpinner';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopButton from "../SharedPage/ScrollToTopButton";
const MainPageLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {isLoading ? <><LoadingSpinner /></> :
        <>
          <NavBar />
          <div className='min-h-[calc(100vh-140px)]'>
          <ScrollToTopButton />
            <Outlet></Outlet>
          </div>
          <Footer />
        </>}
      <ToastContainer />
    </>
  )
}

export default MainPageLayout