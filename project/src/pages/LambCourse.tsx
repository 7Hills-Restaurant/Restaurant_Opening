import React from 'react';

const LambCourse: React.FC = () => {
  const lambItems = [
    {
      name: "Lamb Vindaloo",
      description: "Spicy Goan curry with tender lamb pieces",
      price: "€22.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Lamb Rogan Josh",
      description: "Kashmiri-style lamb curry with aromatic spices",
      price: "€24.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Lamb Korma",
      description: "Mild lamb curry in creamy cashew and yogurt sauce",
      price: "€23.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Lamb Saag",
      description: "Tender lamb cooked with fresh spinach and spices",
      price: "€22.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Lamb Madras",
      description: "South Indian style spicy lamb curry",
      price: "€24.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Lamb Biryani",
      description: "Fragrant basmati rice with tender lamb and aromatic spices",
      price: "€26.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    },
    {
      name: "Lamb Jalfrezi",
      description: "Stir-fried lamb with bell peppers and onions",
      price: "€23.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Lamb Curry",
      description: "Traditional home-style lamb curry",
      price: "€21.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Lamb Kadai",
      description: "Lamb cooked in traditional iron wok with bell peppers",
      price: "€24.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Lamb Do Pyaza",
      description: "Lamb curry with double onions and aromatic spices",
      price: "€23.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Lamb Bhuna",
      description: "Dry lamb curry with thick gravy and spices",
      price: "€25.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Keema Curry",
      description: "Spiced minced lamb curry with peas",
      price: "€20.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Lamb Main Course</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Premium lamb dishes cooked to perfection with traditional spices
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lambItems.map((item, index) => (
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

export default LambCourse;