import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/20/solid";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../Context/CartContext";
import axios from "axios";

export default function ProductOverview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [packQuantity, setPackQuantity] = useState(10);
  const [inputQuantity, setInputQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const productRef = useRef(null);
  const API_URL = "http://localhost:5000/api/products"; // Backend API URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = location.state?.id;
        if (!productId) {
          throw new Error("Product ID not found!");
        }

        const response = await axios.get(`${API_URL}/${productId}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.message || "Failed to load product details!");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [location.state?.id]);

  useEffect(() => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [product]);

  if (loading) return <div className="text-center text-gray-500 text-lg">Loading product...</div>;
  if (error) return <div className="text-center text-red-500 text-lg">{error}</div>;
  if (!product) return <div className="text-center text-red-500 text-lg">No product found</div>;

  const calculatePrice = () => {
    return product.price * (packQuantity / 10) * inputQuantity;
  };

  const handleAddToCart = async () => {
    const cartProduct = {
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: inputQuantity,
      packQuantity: packQuantity,
      totalPrice: calculatePrice(),
    };

    try {
      await axios.post("http://localhost:5000/api/cart", cartProduct);
      addToCart(cartProduct);
      setAddedToCart(true);
      setPackQuantity(10);
      setInputQuantity(1);
      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Error adding to cart!");
    }
  };

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    setInputQuantity(value > 0 ? value : 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        ref={productRef}
      >
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-lg" />
        <h2 className="text-2xl font-bold text-gray-900 mt-4">{product.name}</h2>
        <p className="text-lg text-primary font-semibold mt-2">RS.{product.price}</p>

        <div className="flex justify-center mt-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`h-6 w-6 ${i < product.rating ? "text-yellow-500" : "text-gray-300"}`} />
          ))}
        </div>

        <p className="text-gray-700 mt-4">{product.description}</p>

        <div className="mt-6">
          <label className="block text-left text-gray-700">Amount: {packQuantity} Pack</label>
          <div className="flex justify-center gap-4 mt-2">
            {[10, 20, 50].map((qty) => (
              <button
                key={qty}
                onClick={() => setPackQuantity(qty)}
                className={`w-20 h-12 border border-gray-300 rounded-md ${
                  packQuantity === qty ? "bg-[#1B5E20] text-white" : "bg-white"
                }`}
              >
                {qty} Pack
              </button>
            ))}
          </div>

          <div className="mt-4">
            <label className="block text-left text-gray-700">Quantity</label>
            <div className="flex items-center justify-center mt-2">
              <button className="w-10 h-10 bg-gray-200 rounded-md" onClick={() => setInputQuantity(inputQuantity > 1 ? inputQuantity - 1 : 1)}>
                -
              </button>
              <input
                type="number"
                min="1"
                value={inputQuantity}
                onChange={handleQuantityChange}
                className="w-24 p-2 mx-2 border border-gray-300 rounded-md text-center"
              />
              <button className="w-10 h-10 bg-gray-200 rounded-md" onClick={() => setInputQuantity(inputQuantity + 1)}>
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 text-lg font-semibold text-gray-900">Price: {calculatePrice()} LKR</div>

        {/* Clear Button */}
        <button
          className="mt-4 text-gray-600 hover:text-[#1B5E20]"
          onClick={() => {
            setPackQuantity(10);
            setInputQuantity(1);
          }}
        >
          Clear Selection
        </button>

        <button className="mt-6 w-full bg-[#1B5E20] text-white py-2 rounded-md hover:bg-[#1B5E20]" onClick={handleAddToCart}>
          Add to Cart
        </button>

        {addedToCart && (
          <button className="mt-4 w-full bg-gray-200 text-black py-2 rounded-md hover:bg-blue-600" onClick={() => navigate("/cart")}>
            View Cart
          </button>
        )}
      </motion.div>
    </div>
  );
}
