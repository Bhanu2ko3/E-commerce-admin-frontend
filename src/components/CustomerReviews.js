import React from "react";

const reviews = [
  {
    id: 1,
    name: "Sandun Perera",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    feedback: "Amazing quality! The sweets were fresh and delicious. Will order again!"
  },
  {
    id: 2,
    name: "Nisansala Jayawardena",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    feedback: "Great taste and fast delivery. Highly recommended!"
  },
  {
    id: 3,
    name: "Kavindu Senanayake",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    feedback: "Best traditional sweets I've had in a long time. Excellent service!"
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700">Customer Reviews</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-full sm:rounded-lg shadow-lg p-6 flex flex-col items-center text-center max-w-sm mx-auto sm:max-w-md md:max-w-lg">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full border-4 border-green-500"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{review.name}</h3>
              <p className="mt-2 text-yellow-500 text-lg">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
              <p className="mt-2 text-gray-600 text-sm italic">"{review.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
