import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About 7 Hills</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Bringing authentic Indian flavors to your table 
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
                alt="Indian Chef"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-900 rounded-full opacity-20"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-red-900 mb-6">Our Story</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
               We’re two friends brought together by a shared passion for cooking and a dedication to serving others. This restaurant is our dream come true — a place where every dish is made with care, and every guest is treated like family.

              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We live by the belief <span className="font-bold text-red-500">"Atithi Devo Bhava"</span> — the guest is God — so your comfort and satisfaction will always be our top priority. From the kitchen to your table, we aim to serve not just food, but warmth, happiness, and unforgettable flavors.
              </p>
        
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      {/* <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Our Achievements</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-red-900 mb-2">25+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-red-900 mb-2">50+</div>
              <div className="text-gray-600">Authentic Dishes</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-red-900 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-red-900 mb-2">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌶️</span>
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-4">Authentic Flavors</h3>
              <p className="text-gray-700">
                We use traditional recipes and imported spices to ensure every dish delivers the authentic taste of India.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-4">Expert Chefs</h3>
              <p className="text-gray-700">
                Our master chefs bring decades of experience and traditional cooking techniques to every dish.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥘</span>
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-4">Fresh Ingredients</h3>
              <p className="text-gray-700">
                We source the finest and freshest ingredients daily to ensure the highest quality in every meal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;