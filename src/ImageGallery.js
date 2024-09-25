import React, { useState } from "react";
import "./output.css";

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images for the gallery
  const images = [
    {
      src: "https://th.bing.com/th/id/R.c9c905906ed5f6b395dec5514f75b7cb?rik=cI0aaM39DTF6dA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fHd-Laptop-wallpapers.jpg&ehk=fdAGF7dNdtQMtY9E7s8hArE8z60Wx9Vbg4oAC9aYUcs%3d&risl=&pid=ImgRaw&r=0",
      alt: "Laptops",
      category: "Laptops",
    },
    {
      src: "https://th.bing.com/th/id/OIP.ZAQYhsGCygVFUJzkrto-LAHaJQ?rs=1&pid=ImgDetMain",
      alt: "Mobiles",
      category: "Mobiles",
    },
    {
      src: "https://th.bing.com/th/id/OIP.5p2WDrGI-3u10exNZvdA4gHaGR?rs=1&pid=ImgDetMain",
      alt: "Electronics",
      category: "Makeup",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full mx-auto p-8">
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-4 py-2 rounded-full focus:outline-none z-10"
        >
          ◀
        </button>

        <div className="relative">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-96 object-cover rounded-md shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {images[currentIndex].category}
            </h2>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none">
              Browse {images[currentIndex].category}
            </button>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white px-4 py-2 rounded-full focus:outline-none z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
