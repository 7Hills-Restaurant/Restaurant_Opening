import React from 'react';

const Biryani: React.FC = () => {
  const biryaniItems = [
    {
      name: "Hyderabadi Chicken Biryani",
      description: "Fragrant basmati rice with tender chicken pieces and aromatic spices",
      price: "€21.99",
      image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg"
    },
    {
      name: "Hyderabadi Lamb Biryani",
      description: "Premium basmati rice with succulent lamb and traditional spices",
      price: "€26.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    },
    {
      name: "Prawn Biryani",
      description: "Aromatic rice with fresh prawns and coastal spices",
      price: "€27.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    },
    {
      name: "Fish Biryani",
      description: "Delicate fish pieces layered with spiced basmati rice",
      price: "€24.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    },
    {
      name: "Vegetable Biryani",
      description: "Mixed vegetables and paneer with fragrant basmati rice",
      price: "€18.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    },
    {
      name: "Egg Biryani",
      description: "Hard-boiled eggs layered with spiced rice",
      price: "€16.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    },
    {
      name: "Lucknowi Biryani",
      description: "Awadhi-style biryani with tender meat and subtle spices",
      price: "€25.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    },
    {
      name: "Kolkata Biryani",
      description: "Bengali-style biryani with potatoes and boiled eggs",
      price: "€23.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    },
    {
      name: "Dum Biryani",
      description: "Slow-cooked biryani sealed with dough for authentic flavors",
      price: "€24.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    },
    {
      name: "Paneer Biryani",
      description: "Cottage cheese cubes with aromatic basmati rice",
      price: "€19.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    },
    {
      name: "Keema Biryani",
      description: "Spiced minced meat layered with fragrant rice",
      price: "€22.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    },
    {
      name: "Special Mixed Biryani",
      description: "Combination of chicken, lamb, and prawns with basmati rice",
      price: "€29.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Biryani</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Royal rice dishes layered with aromatic spices and tender meats
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biryaniItems.map((item, index) => (
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

export default Biryani;