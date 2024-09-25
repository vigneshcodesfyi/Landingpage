import React from "react";
import ShippingIcon from "@mui/icons-material/LocalShipping";
import LockIcon from "@mui/icons-material/Lock";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import "./output.css";

const WhyUs = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Flex container for features */}
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-6">
        {/* Feature 1: Free Shipping */}
        <div className="flex flex-col items-center mb-6 md:mb-0 w-full md:w-1/3">
          <ShippingIcon className="text-blue-600 text-4xl" />
          <h3 className="text-xl font-semibold mt-2">Free Shipping</h3>
          <p className="text-gray-600 text-center">On all orders over $50.</p>
        </div>

        {/* Feature 2: Secured Payment */}
        <div className="flex flex-col items-center mb-6 md:mb-0 w-full md:w-1/3">
          <LockIcon className="text-blue-600 text-4xl" />
          <h3 className="text-xl font-semibold mt-2">Secured Payment</h3>
          <p className="text-gray-600 text-center">
            Your payment information is safe with us.
          </p>
        </div>

        {/* Feature 3: Easy Returns */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <UndoOutlinedIcon className="text-blue-600 text-4xl" />
          <h3 className="text-xl font-semibold mt-2">Easy Returns</h3>
          <p className="text-gray-600 text-center">
            30-day return policy, hassle-free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
