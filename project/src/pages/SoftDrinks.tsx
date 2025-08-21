import React from 'react';

const SoftDrinks: React.FC = () => {
  const softDrinkItems = [
    {
      name: "Mango Lassi",
      description: "Traditional yogurt drink with sweet mango",
      price: "€5.99",
      image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg"
    },
    {
      name: "Sweet Lassi",
      description: "Traditional sweet yogurt drink",
      price: "€4.99",
      image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg"
    },
    {
      name: "Salt Lassi",
      description: "Refreshing salted yogurt drink",
      price: "€4.99",
      image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg"
    },
    {
      name: "Masala Chai",
      description: "Spiced tea with cardamom, ginger, and cinnamon",
      price: "€3.99",
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg"
    },
    {
      name: "Fresh Lime Soda",
      description: "Refreshing lime juice with sparkling water",
      price: "€4.99",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
    },
    {
      name: "Fresh Lime Water",
      description: "Fresh lime juice with still water",
      price: "€4.49",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
    },
    {
      name: "Mango Juice",
      description: "Fresh mango juice",
      price: "€5.49",
      image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg"
    },
    {
      name: "Orange Juice",
      description: "Fresh orange juice",
      price: "€4.99",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
    },
    {
      name: "Apple Juice",
      description: "Fresh apple juice",
      price: "€4.99",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
    },
    {
      name: "Coca Cola",
      description: "Classic Coca Cola",
      price: "€3.49",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
    },
    {
      name: "Sprite",
      description: "Lemon-lime soda",
      price: "€3.49",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
    },
    {
      name: "Fanta",
      description: "Orange flavored soda",
      price: "€3.49",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
    },
    {
      name: "Sparkling Water",
      description: "Refreshing sparkling water",
      price: "€2.99",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
    },
    {
      name: "Still Water",
      description: "Pure still water",
      price: "€2.49",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
    },
    {
      name: "Iced Tea",
      description: "Refreshing iced tea",
      price: "€3.99",
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg"
    },
    {
      name: "Coffee",
      description: "Freshly brewed coffee",
      price: "€3.49",
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Soft Drinks</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Refreshing beverages to complement your meal
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softDrinkItems.map((item, index) => (
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

export default SoftDrinks;