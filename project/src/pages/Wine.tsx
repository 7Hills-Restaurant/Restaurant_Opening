import React from 'react';

const Wine: React.FC = () => {
  const wineItems = [
    {
      name: "House Red Wine",
      description: "Our signature red wine blend",
      price: "€6.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "House White Wine",
      description: "Crisp and refreshing white wine",
      price: "€6.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Cabernet Sauvignon",
      description: "Full-bodied red wine with rich flavors",
      price: "€8.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Merlot",
      description: "Smooth and velvety red wine",
      price: "€8.49",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Pinot Noir",
      description: "Light-bodied red wine with delicate flavors",
      price: "€9.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Chardonnay",
      description: "Rich and buttery white wine",
      price: "€8.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Sauvignon Blanc",
      description: "Crisp white wine with citrus notes",
      price: "€8.49",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Pinot Grigio",
      description: "Light and refreshing Italian white wine",
      price: "€7.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Riesling",
      description: "Sweet German white wine",
      price: "€8.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Rosé Wine",
      description: "Light and fruity pink wine",
      price: "€7.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Champagne",
      description: "Premium French sparkling wine",
      price: "€12.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Prosecco",
      description: "Italian sparkling wine",
      price: "€9.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Port Wine",
      description: "Sweet Portuguese fortified wine",
      price: "€10.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Sherry",
      description: "Spanish fortified wine",
      price: "€9.49",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Wine Bottle - Red",
      description: "Full bottle of house red wine",
      price: "€24.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Wine Bottle - White",
      description: "Full bottle of house white wine",
      price: "€24.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Wine Selection</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Carefully curated wines to pair perfectly with Indian cuisine
            </p>
          </div>
        </div>
      </section>

      {/* Age Verification Notice */}
      <section className="py-8 bg-yellow-100 border-b-2 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold text-red-900">
              ⚠️ Must be 18+ to purchase alcoholic beverages. ID required.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wineItems.map((item, index) => (
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

export default Wine;