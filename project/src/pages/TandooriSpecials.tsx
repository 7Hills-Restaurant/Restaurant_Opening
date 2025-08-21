import React from 'react';

const TandooriSpecials: React.FC = () => {
  const tandooriItems = [
    {
      name: "Tandoori Chicken (Half)",
      description: "Marinated chicken cooked in traditional clay oven",
      price: "€16.99",
      image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg"
    },
    {
      name: "Tandoori Chicken (Full)",
      description: "Whole chicken marinated and cooked in tandoor",
      price: "€29.99",
      image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg"
    },
    {
      name: "Chicken Tikka",
      description: "Boneless chicken pieces marinated in yogurt and spices",
      price: "€18.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Seekh Kebab",
      description: "Spiced minced lamb grilled on skewers in tandoor",
      price: "€19.99",
      image: "https://images.pexels.com/photos/5560756/pexels-photo-5560756.jpeg"
    },
    {
      name: "Paneer Tikka",
      description: "Cottage cheese cubes marinated and grilled in tandoor",
      price: "€15.99",
      image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg"
    },
    {
      name: "Tandoori Fish",
      description: "Fresh fish marinated in spices and cooked in tandoor",
      price: "€21.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Tandoori Prawns",
      description: "Large prawns marinated and grilled in tandoor",
      price: "€24.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Lamb Chops",
      description: "Tender lamb chops marinated in yogurt and spices",
      price: "€26.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Mixed Tandoori Platter",
      description: "Assorted tandoori items - chicken, lamb, and fish",
      price: "€32.99",
      image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg"
    },
    {
      name: "Tandoori Vegetables",
      description: "Mixed vegetables marinated and grilled in tandoor",
      price: "€14.99",
      image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg"
    },
    {
      name: "Chicken Malai Tikka",
      description: "Creamy chicken tikka marinated in cashew and cream",
      price: "€19.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Hariyali Chicken",
      description: "Chicken marinated in mint and coriander paste",
      price: "€18.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tandoori Specials</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Authentic clay oven specialties with smoky flavors and aromatic spices
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tandooriItems.map((item, index) => (
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

export default TandooriSpecials;