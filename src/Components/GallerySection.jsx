import React, { useState,useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfoText from "../Pages/SharedPage/InfoText";
import {FcNext,FcPrevious} from "react-icons/fc";
import {FaWindowClose} from "react-icons/fa";
const images = [
  "https://bbts1.azureedge.net/site-images/p/2023/03/9f306334-79ce-43a0-9888-07b8bafda760.jpg",
  "https://bbts1.azureedge.net/site-images/p/2022/09/1611a3b5-3f7b-4130-b4dd-ff3b81fbfc91.jpg",
  "https://bbts1.azureedge.net/site-images/p/2023/01/64f3da37-fd7a-4ea1-9844-c1686c6c632a.jpg",
  "https://bbts1.azureedge.net/site-images/p/2022/08/32b9b964-cff1-4297-9450-538e53085f26.jpg",
  "https://bbts1.azureedge.net/site-images/p/2022/09/9e4eec5b-28c4-4a02-81e0-fc0877902b66.jpg",
  "https://bbts1.azureedge.net/site-images/p/2021/10/a3ed8520-ba69-400c-a451-a5c872f87f7b.jpg",
  "https://bbts1.azureedge.net/site-images/p/2022/09/b71228f0-d4c9-489e-8747-deed96fda449.jpg",
  "https://bbts1.azureedge.net/site-images/p/2021/11/61a4de0b-2aae-4faf-9920-259771563931.jpg",
  "https://bbts1.azureedge.net/site-images/p/2020/03/da26c069-eec0-4af0-ab6b-c3df318cd04c.jpg",
];

const titles = [
  "Action Toys Img-1",
  "Action Toys Img-2",
  "Action Toys Img-3",
  "Action Toys Img-4",
  "Action Toys Img-5",
  "Action Toys Img-6",
  "Action Toys Img-7",
  "Action Toys Img-8",
  "Action Toys Img-9"
];

const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleImageClick = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };

  const handleImageClose = () => {
    setIsOpen(false);
    setCurrentIndex(null);
  };

  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  const handleNextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    let slideTimeout;

    if (isOpen) {
      slideTimeout = setTimeout(() => {
        handleNextImage();
      }, 3000);
    }

    return () => {
      clearTimeout(slideTimeout);
    };
  }, [isOpen, currentIndex]);

  return (
    <div className="mx-5">
      <InfoText title="Our Toys Image Gallery" />
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry>
          {images.map((image, index) => (
            <div
              className="relative"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleImageClick(index)}
            >
              <img
                className="border-2 p-2 rounded-md border-base-100 shadow-md"
                src={image}
                alt={`Image ${index + 1}`}
              />
              {hoveredIndex === index && (
                <div className="absolute top-0 left-0 w-full cursor-move h-full bg-gradient-to-r from-black to-error opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-100 pointer-events-none">
                    <span>{titles[index]}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative">
            <img
              className="max-w-full max-h-full"
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
            />
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={handlePrevImage}
              disabled={currentIndex === 0}
            >
              <FcPrevious />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={handleNextImage}
              disabled={currentIndex === images.length - 1}
            >
              <FcNext />
            </button>
            <button
              className="absolute top-4 right-4 text-white font-bold text-xl"
              onClick={handleImageClose}
            >
              <FaWindowClose />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`inline-block w-2 h-2 rounded-full mx-1 ${
                    index === currentIndex ? "bg-white" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
