import React from "react";
import About from "./About";
import Footer from "../components/Footer";
import Products from "./Products";
import Contact from "./Contact";
import CustomerReviews from "../components/CustomerReviews";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div>
      <Dashboard />
      <Products />
      <div class="flex justify-center">
      <a
        href="/products"
        class="mt-5 mb-10 bg-beige text-primary px-6 py-3 pb-4 rounded-lg font-bold text-lg transition duration-300 hover:bg-primary hover:text-white"
      >
        View All Products
      </a>

      </div>
      <About />
      <CustomerReviews/>
      <Contact/>
      <Footer />
      
    </div>
  );
};

export default Home;
