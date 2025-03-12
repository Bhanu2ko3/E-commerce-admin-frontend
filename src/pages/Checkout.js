import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { cartItems, totalAmount } = location.state || {}; // Get cart data passed from Cart page

  return (
    <div className="font-[sans-serif] bg-white">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
        {/* Cart Summary Section */}
        <div className="bg-gray-100 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">
                {cartItems && cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex items-start gap-4">
                      <div className="w-32 h-28 flex p-3 shrink-0 bg-gray-200 rounded-md">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full object-contain"
                        />
                      </div>
                      <div className="w-full">
                        <h3 className="text-base font-bold lg:text-lg text-gray-800">
                          {item.name}
                        </h3>
                        <ul className="text-sm text-gray-800 space-y-1 mt-3">
                          <li className="flex flex-wrap gap-4">
                            Size <span className="ml-auto">{item.packQuantity} pack</span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Quantity <span className="ml-auto">{item.quantity}</span>
                          </li>
                          <li className="flex flex-wrap gap-4 ">
                            Total Price <span className="ml-auto">${(item.price * item.quantity).toFixed(2)}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No items in cart</p>
                )}
              </div>
            </div>

            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-200 w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-base lg:text-lg font-bold text-gray-800">
                Total <span className="ml-auto">${totalAmount.toFixed(2)}</span>
              </h4>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
          <h2 className="text-3xl font-bold text-gray-800">Complete your order</h2>
          <form className="mt-8">
            <div>
              <h3 className="text-base lg:text-lg text-gray-800 mb-4">
                Personal Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-base rounded-md focus:outline-primary"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-base rounded-md focus:outline-primary"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-base rounded-md focus:outline-primary"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="Phone No."
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-base rounded-md focus:outline-primary"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-base lg:text-lg text-gray-800 mb-4">
                Shipping Address
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Address Line"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-base rounded-md focus:outline-primary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-base rounded-md focus:outline-primary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="State"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-base rounded-md focus:outline-primary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-base rounded-md focus:outline-primary"
                  />
                </div>
              </div>

              <div className="flex gap-4 max-md:flex-col mt-8">
                <button
                  type="button"
                  className="rounded-md px-4 py-2.5 w-full text-base tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-md px-4 py-2.5 w-full text-base tracking-wide bg-primary hover:bg-primary text-white"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
