// components/Slider.js

import { useState } from 'react';

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < 3; i++) {
      visibleItems.push(items[(currentIndex + i) % items.length]);
    }
    return visibleItems;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto flex items-center justify-between">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={prevSlide}
      >
        Prev
      </button>
      <div className="flex space-x-4 overflow-hidden w-full justify-center">
        {getVisibleItems().map((item, index) => (
          <div key={index} className="flex-none w-1/3 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
