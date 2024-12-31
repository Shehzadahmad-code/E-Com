// Slider.js
import React, { useContext, useEffect, useState } from "react";
import slider1 from "../assets/ecomslider.png";
import slider2 from "../assets/slider2.avif";
import slider3 from "../assets/slider3.jpg";
import { ProductContext } from "../App";

const images = [
<div className="w-full h-[16rem] flex flex-col items-start justify-center text-slate-300 text-5xl relative ">
  <div className="w absolute inset-0 bg-cover bg-center opacity-70 max-h-[84vw]" style={{ backgroundImage: `url(${slider1})` }}></div>
  
  <h1 className="text-4xl font-bold ml-4 z-10">Exclusive Deals, Just for You!</h1>
  <p className="text-xl ml-4 z-10">
    Shop the best discounts of the season on our top products.
  </p>
  <button className="bg-orange-600 rounded-full text-xl p-2 ml-[30%] mt-3 z-10 font-semibold text-white">
     Shop Now
   </button>
</div>,
  <div className="w-full h-[16rem] flex flex-col items-start justify-center text-slate-300 text-5xl relative">
  <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${slider2})` }}></div>
  
  <h1 className="text-4xl font-bold ml-4 z-10">Exclusive Deals, Just for You!</h1>
  <p className="text-xl ml-4 z-10">
    Shop the best discounts of the season on our top products.
  </p>
  <button className="bg-orange-600 rounded-full text-xl p-2 ml-[30%] mt-3 z-10 font-semibold text-white">
     Shop Now
   </button>
</div>,
  <div className="w-full h-[16rem] flex flex-col items-start justify-center text-slate-300 text-5xl relative">
  <div className="absolute inset-0 bg-cover bg-center opacity-70 max-h-[84vh]" style={{ backgroundImage: `url(${slider3})` }}></div>
  
  <h1 className="text-4xl font-bold ml-4 z-10">Exclusive Deals, Just for You!</h1>
  <p className="text-xl ml-4 z-10">
    Shop the best discounts of the season on our top products.
  </p>
  <button className="bg-orange-600 rounded-full text-xl font-semibold text-white p-2 ml-[30%] mt-3 z-10">
     Shop Now
   </button>
</div>,
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const {search}=useContext(ProductContext)
  return (
    
    <div className={`${search ? 'hidden' : 'relative w-screen max-w-3xl mx-auto overflow-hidden rounded-lg shadow-xl hover:shadow-2xl max-h-64 mt-8 bg-black'}`}>
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%) ` }}
      >
        {images.map((slide, index) => (
          <div key={index} className="w-full h-[84vh] flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      
      {/* <button
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❯
      </button> */}

      {/* Dots for Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
