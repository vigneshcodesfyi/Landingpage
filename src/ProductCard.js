import React from "react";
import "./output.css";

const ProductCard = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Small Card 1 */}
      <div className="relative shadow-lg rounded-lg overflow-hidden mb-10">
        <img
          src="https://th.bing.com/th/id/OIP.mzGR5vbrhIJ0pjF-HWPKegHaEK?rs=1&pid=ImgDetMain"
          alt="Small Card 1"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start text-white p-4">
          <h3 className="text-xl font-bold">Small Card 1</h3>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none mt-2">
            Browse
          </button>
        </div>
      </div>

      {/* Small Card 2 */}
      <div className="relative shadow-lg rounded-lg overflow-hidden mb-10">
        <img
          src="https://th.bing.com/th/id/OIP.AUoXC70Vrxi-HEvYfoUhmAHaFj?rs=1&pid=ImgDetMain"
          alt="Small Card 2"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start text-white p-4">
          <h3 className="text-xl font-bold">Small Card 2</h3>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none mt-2">
            Browse
          </button>
        </div>
      </div>
      <div className="relative shadow-lg rounded-lg overflow-hidden  md:col-span-2 mb-10">
        <img
          src="https://thumbs.dreamstime.com/z/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg"
          alt="Small Card 2"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start text-white p-4">
          <h3 className="text-xl font-bold">Large Card </h3>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none mt-2">
            Browse
          </button>
        </div>
      </div>

      {/* Large Card */}
      <div className="relative shadow-lg rounded-lg overflow-hidden md:col-span-2 mb-10">
        <img
          src="https://th.bing.com/th?q=Microwave+Products&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
          alt="Large Card"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start text-white p-4">
          <h3 className="text-xl font-bold">Large Card</h3>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none mt-2">
            Browse
          </button>
        </div>
      </div>

      {/* Small Card 3 */}
      <div className="relative shadow-lg rounded-lg overflow-hidden mb-10">
        <img
          src="https://th.bing.com/th/id/OIP.Ffyu7Wbezo-dCIsVVols0AHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="Small Card 3"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start text-white p-4">
          <h3 className="text-xl font-bold">Small Card 3</h3>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none mt-2">
            Browse
          </button>
        </div>
      </div>

      {/* Small Card 4 */}
      <div className="relative shadow-lg rounded-lg overflow-hidden mb-10">
        <img
          src="https://th.bing.com/th/id/OIP.0g4DoZvvGbDLGcPeFSImMQHaE5?rs=1&pid=ImgDetMain"
          alt="Small Card 4"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start text-white p-4">
          <h3 className="text-xl font-bold">Small Card 4</h3>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none mt-2">
            Browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
