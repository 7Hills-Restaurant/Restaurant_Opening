import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredDishes = [
    {
      name: "Butter Chicken",
      description: "Tender chicken in rich tomato and cream sauce",
      price: "€18.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
      category: "chicken"
    },
    {
      name: "Hyderabadi Biryani",
      description: "Fragrant basmati rice with tender lamb and aromatic spices",
      price: "€24.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg",
      category: "biryani"
    },
    {
      name: "Masala Dosa",
      description: "Crispy crepe filled with spiced potato curry",
      price: "€11.99",
      image: "https://images.pexels.com/photos/5560754/pexels-photo-5560754.jpeg",
      category: "idli-dosa"
    }
  ];

  const menuCategories = [
    { name: "Starters", path: "/starters", image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg" },
    { name: "Idli & Dosa", path: "/idli-dosa", image: "https://images.pexels.com/photos/5560754/pexels-photo-5560754.jpeg" },
    { name: "Chicken", path: "/chicken", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg" },
    { name: "Lamb", path: "/lamb", image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg" },
    { name: "Fish & Prawn", path: "/fish-prawn", image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg" },
    { name: "Tandoori", path: "/tandoori", image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg" },
    { name: "Naan & Rice", path: "/naan-rice", image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg" },
    { name: "Biryani", path: "/biryani", image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Authentic Taste of India
            <span className="block text-3xl md:text-5xl text-yellow-400 mt-4">at 7 Hills</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
            Experience the rich flavors and aromatic spices of traditional Indian cuisine in the heart of the city
          </p>
          <Link
            to="/starters"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 animate-bounce-in"
          >
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Featured Dishes</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our most popular dishes that showcase the authentic flavors of India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-red-900 mb-3">{dish.name}</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">{dish.description}</p>
                  <Link
                    to={`/${dish.category}`}
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                  >
                    View Category →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Menu Categories</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our diverse menu categories, each offering authentic Indian flavors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold text-center px-4">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Authentic Indian Cuisine?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Visit us today and embark on a culinary journey through the diverse flavors of India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/starters"
              className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;