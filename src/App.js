import React from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import ImageGallery from "./ImageGallery";
import WhyUs from "./WhyUs";
import Footer from "./Footer";
import Products from "./ProductComponent";
import ProductComponent from "./ProductComponent";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 29.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Product 2",
    price: 39.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Product 3",
    price: 49.99,
    image: "https://via.placeholder.com/150",
  },
  // Add more products as needed
];

const App = () => {
  return (
    <div className=" mx-auto">
      <Navbar />
      <ImageGallery />
      <ProductCard />
      <WhyUs />
      <ProductComponent />
      <Footer />
    </div>
  );
};

export default App;
