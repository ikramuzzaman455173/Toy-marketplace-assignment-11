import { useState } from 'react';

const Banner = () => {
  const images = [
    {
      src: 'https://www.thetoyshop.com/medias/Online-Adventure-generic-2023-00447-V4-HP-Hero-DT-1800x560px-33pct-off.jpg?context=bWFzdGVyfHJvb3R8NTUyMDk3fGltYWdlL2pwZWd8aDMyL2gzYS8xMjA1MTEyMDg4MTY5NC5qcGd8ODc3ODBkMmJjODY4ZmJkNTA3NjNlMDk5MWZkZDE2M2I5ZGMyNzAwYThmNTQ5Njk3ZTJkOTZkOGU3NTEzOGU1Nw',
      alt: "banner1",
    },
    {
      src: 'https://www.thetoyshop.com/medias/P7-Big-Toy-Sale-70pct-off-00538-1800x560px.jpg?context=bWFzdGVyfHJvb3R8MzI2NDMxfGltYWdlL2pwZWd8aDhlL2g5Yy8xMjA1MzQ5NTQ4MDM1MC5qcGd8OTY5NzQ2OGU0YTEzOGVkNjNiMzMyMDIwNzEzYzY3NGZlMGMwODY3MzI4MjdhYjE2ZjdkMjFlZjdjZDIzY2JiNg',
      alt: "banner2",
    },
    {
      src: 'https://www.thetoyshop.com/medias/P5-Let-s-Celebrate-Digital-00512-Hero-Desktop-1800x560-saving.jpg?context=bWFzdGVyfHJvb3R8MzAyNTM5fGltYWdlL2pwZWd8aGZmL2g0NS8xMjA1MjMxNzMwNjkxMC5qcGd8ZGE3ZTIxNDZkZjE1MzEwNGJmYzNhZGVkOGZiODgxZDRlYmMwY2FlZDZkZjYxZTgwOTM1ZTBlMzU4Y2MyZDRlMA',
      alt: "banner3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <>
      <div className="carousel md:w-full  sm:w-full  md:h-[300px] h-1/2 md:mt-[5.2rem] mt-[4rem] mb-5">
        {images.map((image, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className={`carousel-item relative w-full ${index === currentSlide ? "current" : ""}`}
          >
            <img src={image.src} alt={image.alt} className="w-full shadow" />

            <div className="absolute flex justify-between transform md:-translate-y-28 sm:-translate-y-16 -translate-y-6 left-5 right-5 bottom-4 gap-8">
              <a
                href={`#slide${index === 0 ? images.length : index}`}
                className="btn btn-circle lg:text-3xl md:text-xl text-xl"
                onClick={() => goToPrevSlide()}
              >
                ❮
              </a>
              <a
                href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle bg-error border-0 lg:text-3xl md:text-xl text-xl text-white hover:bg-error"
                onClick={() => goToNextSlide()}
              >
                ❯
              </a>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="flex gap-2">
                {images.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    className={`w-4 h-4 rounded-full ${
                      dotIndex === currentSlide ? "bg-black" : "bg-gray-300"
                    }`}
                    onClick={() => goToSlide(dotIndex)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;
