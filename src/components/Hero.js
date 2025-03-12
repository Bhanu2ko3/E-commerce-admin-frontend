import React from "react";
import menuBg from "../images/menu.png"; // Import the background image

const Hero = () => {
  return (
    <section
      className="text-white text-center py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${menuBg})` }} // Set the background image
    >
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> 

      <div className="relative z-10">
        <h2 className="text-4xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
          Authentic Sri Lankan Sweets
        </h2>
        <p className="mt-4 text-lg" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)' }}>
          Experience the true taste of Sri Lanka!
        </p>

        <a
          href="/products"
          className="mt-6 inline-block bg-beige text-primary px-6 py-3 rounded-lg font-bold transition duration-300 hover:bg-primary hover:text-white"
        >
          View Products
        </a>
      </div>
    </section>
  );
};

export default Hero;
