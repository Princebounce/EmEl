import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clickaway from "../../assets/click_away.png"

const Carousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-300">
      <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
      <Slider {...carouselSettings}>
       
        <div>
          <p>Carousel Item 1</p>
        </div>
        <div>
          <p>Carousel Item 2</p>
        </div>
        <div>
          <p>Carousel Item 3</p>
        </div>
        <div>
          <p>Carousel Item 4</p>
        </div>
        <div>
          <p>Carousel Item 5</p>
        </div>
        <div>
          <p>Carousel Item 6</p>
        </div>
        <div>
          <p>Carousel Item 7</p>
        </div>
        <div>
          <p>Carousel Item 8</p>
        </div>
        <div>
          <p>Carousel Item 9</p>
        </div>
        <div>
          <p>Carousel Item 10</p>
        </div>
      </Slider>

      <div className="flex mx-0 bottom-0 mt-8">
        <div className="w-2/5">
          {/* Your PNG image */}
          <img src={Clickaway} alt="clickaway" className="w-full" />
        </div>
        <div className="bg-customClick w-3/5 text-white p-8 flex flex-col justify-center">
          <p className="text-lg mb-4">You are just one click away from a global chatter</p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Sign Up</button>
            <button className="text-white py-2 px-4 rounded">Try for Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
