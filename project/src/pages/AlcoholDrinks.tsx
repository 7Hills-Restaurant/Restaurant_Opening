import React from 'react';

const AlcoholDrinks: React.FC = () => {
  const alcoholItems = [
    {
      name: "Kingfisher Beer",
      description: "India's premium lager beer",
      price: "€4.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Cobra Beer",
      description: "Smooth premium lager",
      price: "€5.49",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Heineken",
      description: "International premium lager",
      price: "€5.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Corona",
      description: "Mexican beer with lime",
      price: "€6.49",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Stella Artois",
      description: "Belgian premium lager",
      price: "€6.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Whiskey (Single)",
      description: "Premium Indian whiskey",
      price: "€7.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Whiskey (Double)",
      description: "Premium Indian whiskey double shot",
      price: "€14.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Rum (Single)",
      description: "Premium rum",
      price: "€6.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Rum (Double)",
      description: "Premium rum double shot",
      price: "€12.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Vodka (Single)",
      description: "Premium vodka",
      price: "€7.49",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Vodka (Double)",
      description: "Premium vodka double shot",
      price: "€13.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Gin (Single)",
      description: "Premium gin",
      price: "€7.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Gin (Double)",
      description: "Premium gin double shot",
      price: "€14.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Brandy (Single)",
      description: "Premium brandy",
      price: "€8.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Brandy (Double)",
      description: "Premium brandy double shot",
      price: "€16.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      name: "Cocktail - Mojito",
      description: "Classic rum cocktail with mint and lime",
      price: "€9.99",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Alcoholic Beverages</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Premium spirits and beers to enhance your dining experience
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
            {alcoholItems.map((item, index) => (
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

export default AlcoholDrinks;