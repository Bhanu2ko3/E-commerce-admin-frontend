import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '../Context/CartContext';  // Import the useCart hook

export default function ProductOverview() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  const { addToCart } = useCart();  // Access the addToCart function from the context

  const [PackQuantity, setQuantity] = useState(10);
  const [inputQuantity, setInputQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);  // State to track if the item is added to the cart

  const productRef = useRef(null);  // Create a reference for the product container

  useEffect(() => {
    // Scroll the product container into view
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  if (!product) {
    return <div className="text-center text-red-500 text-lg">No product found</div>;
  }

  const calculatePrice = () => {
    let unitPrice = parseFloat(product.price.replace('$', '').trim());
    let quantityMultiplier = 1;

    if (PackQuantity === 10) {
      quantityMultiplier = 1;
    } else if (PackQuantity === 20) {
      quantityMultiplier = 2;
    } else if (PackQuantity === 50) {
      quantityMultiplier = 5;
    }

    return unitPrice * quantityMultiplier * inputQuantity;
  };

  const handleAddToCart = () => {
    const cartProduct = { 
      ...product, 
      quantity: inputQuantity, // Selected Quantity
      packQuantity: PackQuantity, // Pack Size (10, 20, 50)
      totalPrice: calculatePrice() // Total Price Calculation
    };
    addToCart(cartProduct);  
    setAddedToCart(true);
    setQuantity(10); // Reset the selected quantity to 10 Pack
    setInputQuantity(1); // Reset the custom quantity input to 1
    window.alert(`${product.name} added to cart!`);
  };

  const handleIncreaseQuantity = () => {
    setInputQuantity(inputQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (inputQuantity > 1) setInputQuantity(inputQuantity - 1);
  };

  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <motion.div 
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        ref={productRef}  // Attach the ref to the product container
      >
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-lg" />
        <h2 className="text-2xl font-bold text-gray-900 mt-4">{product.name}</h2>
        
        <p className="text-lg text-primary font-semibold mt-2">RS.{product.price}</p>
        <div className="flex justify-center mt-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`h-6 w-6 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
          ))}
        </div>

        <p className="text-gray-700 mt-4">
          {product.name} is a delicious Sri Lankan sweet that you will love. Freshly made and packed with flavor!
        </p>

        <div className="mt-6">
          <label className="block text-left text-gray-700">Amount : {PackQuantity} Pack</label>
          <div className="flex justify-center gap-4 mt-2">
            <button onClick={() => setQuantity(10)} className={`w-20 h-12 border border-gray-300 rounded-md ${PackQuantity === 10 ? 'bg-[#1B5E20] text-white' : 'bg-white'}`}>10 Pack</button>
            <button onClick={() => setQuantity(20)} className={`w-20 h-12 border border-gray-300 rounded-md ${PackQuantity === 20 ? 'bg-[#1B5E20] text-white' : 'bg-white'}`}>20 Pack</button>
            <button onClick={() => setQuantity(50)} className={`w-20 h-12 border border-gray-300 rounded-md ${PackQuantity === 50 ? 'bg-[#1B5E20] text-white' : 'bg-white'}`}>50 Pack</button>
          </div>

          <div className="mt-4">
            <label className="block text-left text-gray-700"></label>
            <div className="flex items-center justify-center mt-2">
              <button className="w-10 h-10 bg-gray-200 rounded-md" onClick={handleDecreaseQuantity}>-</button>
              <input type="number" min="1" value={inputQuantity} onChange={(e) => setInputQuantity(Number(e.target.value))} className="w-24 p-2 mx-2 border border-gray-300 rounded-md text-center" />
              <button className="w-10 h-10 bg-gray-200 rounded-md" onClick={handleIncreaseQuantity}>+</button>
            </div>
          </div>
        </div>

        <div className="mt-4 text-lg font-semibold text-gray-900">Price: {calculatePrice()} LKR</div>
        
        {/* Clear Button */}
        <button 
          className="mt-4 text-gray-600 hover:text-[#1B5E20]"
          onClick={() => {
            setQuantity(10); // Reset the selected quantity to 10 Pack
            setInputQuantity(1); // Reset the custom quantity input to 1
          }}
        >
          Clear Selection
        </button>

        <button className="mt-6 w-full bg-[#1B5E20] text-white py-2 rounded-md hover:bg-[#1B5E20]" onClick={handleAddToCart}>Add to Cart</button>
        {addedToCart && (
          <button
            className="mt-4 w-full bg-beige text-black py-2 rounded-md hover:bg-blue-600"
            onClick={() => navigate('/cart')}  // Navigate to the cart page
          >
            View Cart
          </button>
        )}
      </motion.div>
    </div>
  );
}
