import React from 'react';

const FishPrawn: React.FC = () => {
  const fishPrawnItems = [
    {
      name: "Fish Curry",
      description: "Fresh fish in coconut-based Kerala style curry",
      price: "€19.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Fish Tikka Masala",
      description: "Grilled fish in spiced tomato-based curry",
      price: "€21.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Fish Vindaloo",
      description: "Spicy Goan-style fish curry with vinegar and spices",
      price: "€20.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Fish Madras",
      description: "South Indian style spicy fish curry",
      price: "€21.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Fish Korma",
      description: "Mild fish curry in creamy cashew and coconut sauce",
      price: "€20.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Bengali Fish Curry",
      description: "Traditional Bengali-style fish curry with mustard oil",
      price: "€22.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Prawn Curry",
      description: "Fresh prawns in coconut-based curry sauce",
      price: "€23.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Prawn Tikka Masala",
      description: "Grilled prawns in spiced tomato-based curry",
      price: "€25.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Prawn Vindaloo",
      description: "Spicy Goan-style prawn curry",
      price: "€24.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Prawn Malai Curry",
      description: "Prawns in creamy coconut milk curry",
      price: "€26.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Goan Fish Curry",
      description: "Traditional Goan fish curry with coconut and kokum",
      price: "€22.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
      name: "Prawn Biryani",
      description: "Fragrant basmati rice with spiced prawns",
      price: "€27.99",
      image: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Fish & Prawn</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Fresh seafood delicacies from the coastal regions of India
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fishPrawnItems.map((item, index) => (
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

export default FishPrawn;