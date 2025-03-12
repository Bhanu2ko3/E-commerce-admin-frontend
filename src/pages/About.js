import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        {/* About Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            About Sithamu Hela Rasa
          </h2>
          <p className="text-lg text-gray-700">
            Experience the true taste of traditional Sri Lankan sweets! <br /><br />
            Craving for Avurudu kavili? Why wait till Avurudu when you can taste them every day, anytime, anywhere. No matter where you live, buying your favorite Sri Lankan sweet treats is just at your fingertips.
            {showMore && (
              <>
                {" "}
                This is what we do at Kavum Kokis – We prepare and deliver a wide range of Sri Lankan sweets across Sri Lanka and around the world. At kavumkokis.com, we ensure that customers order and get their sweet treats delivered to any corner of the world. So, despite wherever you live, our heritage & traditions are never forgotten.
                <br /><br />
                We are a team of young culinary enthusiasts who adore Sri Lankan tradition. Steeped in Sri Lankan tradition, many of the sweets we cook and sell hold a rich history. Our Sri Lankan sweets section includes various irresistible treats that are guaranteed to leave your mouth watering in anticipation, which you will want to try now and again. New year celebrations, weddings, or official events, we have personalized sweet hampers to fill your table and mark any occasion with true Sri Lankan spirit.
              </>
            )}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 text-primary font-bold"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>

        {/* Objectives Section */}
        <div className="mb-10 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            Objectives
          </h2>
          <p className="text-lg text-gray-700">
            The primary objective of our business is to maximize profits while upholding Sri Lankan tradition. We ensure every Sri Lankan has access to authentic Sri Lankan sweets made with quality ingredients.
          </p>
        </div>

        {/* Values Section */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            Values
          </h2>
          <p className="text-lg text-gray-700">
            We aim to deliver high-quality and authentic traditional Sri Lankan sweets for Sri Lankans living in the country and abroad to let them continue with our cultural values & legacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
