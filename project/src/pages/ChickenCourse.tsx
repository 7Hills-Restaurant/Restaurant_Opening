import React from 'react';

const ChickenCourse: React.FC = () => {
  const chickenItems = [
    {
      name: "Butter Chicken",
      description: "Tender chicken in rich tomato and cream sauce",
      price: "€18.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Chicken Tikka Masala",
      description: "Grilled chicken in spiced tomato-based curry",
      price: "€19.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Chicken Korma",
      description: "Mild chicken curry in creamy cashew and yogurt sauce",
      price: "€17.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Chicken Vindaloo",
      description: "Spicy Goan-style chicken curry with vinegar and spices",
      price: "€18.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Chicken Saag",
      description: "Chicken cooked with fresh spinach and aromatic spices",
      price: "€17.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Chicken Jalfrezi",
      description: "Stir-fried chicken with bell peppers and onions",
      price: "€18.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Chicken Madras",
      description: "South Indian style spicy chicken curry",
      price: "€19.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Chicken Curry",
      description: "Traditional home-style chicken curry",
      price: "€16.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Chicken Biryani",
      description: "Fragrant basmati rice with spiced chicken",
      price: "€21.99",
      image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg"
    },
    {
      name: "Chicken Chettinad",
      description: "Spicy South Indian chicken with black pepper and curry leaves",
      price: "€20.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Chicken Do Pyaza",
      description: "Chicken curry with double onions and aromatic spices",
      price: "€18.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Chicken Kadai",
      description: "Chicken cooked in traditional iron wok with bell peppers",
      price: "€19.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Chicken Main Course</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Succulent chicken dishes prepared with authentic Indian spices
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chickenItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-red-900 mb-3">{item.name}</h4>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChickenCourse;