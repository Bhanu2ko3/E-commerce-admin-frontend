import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";  // Adjust the path if necessary

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleRemoveItem = (id, packQuantity) => {
    removeFromCart(id, packQuantity);
  };

  const handleQuantityChange = (id, quantity, packQuantity) => {
    if (quantity > 0) {  // Prevent negative values
      updateQuantity(id, quantity, packQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.packQuantity / 10) * item.quantity,
      0
    );
  };

  const totalAmount = calculateTotal();

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, totalAmount } });
  };

  return (
    <div className="font-sans max-w-7xl mx-auto bg-white py-4">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
          <hr className="border-gray-300 mt-4 mb-8" />

          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={`${item.id}-${item.packQuantity}`} className="grid grid-cols-3 items-center gap-4">
                  <div className="col-span-2 flex items-center gap-4">
                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                      <img
                        src={item.image}
                        className="w-full h-full object-contain"
                        alt={item.name}
                      />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-800">
                        {item.name} ({item.packQuantity} pack)
                      </h3>
                      <h6
                        className="text-xs text-red-500 cursor-pointer mt-0.5"
                        onClick={() => handleRemoveItem(item.id, item.packQuantity)}
                      >
                        Remove
                      </h6>

                      <div className="flex gap-4 mt-4">
                        <div>
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.packQuantity)}
                            className="px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs bg-transparent rounded-md"
                          >
                            -
                          </button>
                          <span className="mx-2.5">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.packQuantity)}
                            className="px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs bg-transparent rounded-md"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <h4 className="text-base font-bold text-gray-800">
                      RS.{(item.price * (item.packQuantity / 10) * item.quantity).toFixed(2)}
                    </h4>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
          <div className="flex border border-primary overflow-hidden rounded-md">
            <input
              type="email"
              placeholder="Promo code"
              className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
            />
            <button
              type="button"
              className="flex items-center justify-center font-semibold tracking-wide bg-primary hover:bg-primary px-4 text-sm text-white"
            >
              Apply
            </button>
          </div>

          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-base">
              Discount <span className="ml-auto font-bold">RS.0.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base font-bold">
              Total <span className="ml-auto">RS.{totalAmount.toFixed(2)}</span>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-primary hover:bg-primary text-white rounded-md"
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
              onClick={() => navigate("/products")}
            >
              Continue Shopping{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
