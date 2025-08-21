import React from 'react';

const IdliDosa: React.FC = () => {
  const idliDosaItems = [
    {
      name: "Plain Dosa",
      description: "Crispy rice and lentil crepe served with sambar and chutney",
      price: "€9.99",
      image: "https://images.pexels.com/photos/5560754/pexels-photo-5560754.jpeg"
    },
    {
      name: "Masala Dosa",
      description: "Crispy crepe filled with spiced potato curry, served with sambar",
      price: "€11.99",
      image: "https://images.pexels.com/photos/5560754/pexels-photo-5560754.jpeg"
    },
    {
      name: "Rava Dosa",
      description: "Crispy semolina crepe with onions and green chilies",
      price: "€12.99",
      image: "https://images.pexels.com/photos/5560753/pexels-photo-5560753.jpeg"
    },
    {
      name: "Mysore Masala Dosa",
      description: "Spicy dosa with red chutney and potato filling",
      price: "€13.99",
      image: "https://images.pexels.com/photos/5560754/pexels-photo-5560754.jpeg"
    },
    {
      name: "Cheese Dosa",
      description: "Crispy dosa filled with melted cheese and spices",
      price: "€14.99",
      image: "https://images.pexels.com/photos/5560753/pexels-photo-5560753.jpeg"
    },
    {
      name: "Paper Dosa",
      description: "Extra large, paper-thin crispy dosa",
      price: "€15.99",
      image: "https://images.pexels.com/photos/5560754/pexels-photo-5560754.jpeg"
    },
    {
      name: "Idli Sambar (4 pcs)",
      description: "Steamed rice cakes served with lentil curry and chutney",
      price: "€9.99",
      image: "https://images.pexels.com/photos/14676464/pexels-photo-14676464.jpeg"
    },
    {
      name: "Rava Idli (4 pcs)",
      description: "Steamed semolina cakes with vegetables and spices",
      price: "€10.99",
      image: "https://images.pexels.com/photos/14676464/pexels-photo-14676464.jpeg"
    },
    {
      name: "Mini Idli Sambar",
      description: "Small steamed rice cakes in sambar curry",
      price: "€11.99",
      image: "https://images.pexels.com/photos/14676464/pexels-photo-14676464.jpeg"
    },
    {
      name: "Uttapam",
      description: "Thick pancake topped with onions, tomatoes, and chilies",
      price: "€12.99",
      image: "https://images.pexels.com/photos/5560753/pexels-photo-5560753.jpeg"
    },
    {
      name: "Medu Vada (3 pcs)",
      description: "Crispy lentil donuts served with sambar and chutney",
      price: "€8.99",
      image: "https://images.pexels.com/photos/5560756/pexels-photo-5560756.jpeg"
    },
    {
      name: "Sambar Vada",
      description: "Lentil donuts soaked in sambar curry",
      price: "€10.99",
      image: "https://images.pexels.com/photos/5560756/pexels-photo-5560756.jpeg"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Idli & Dosa Corner</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Authentic South Indian delicacies made fresh daily
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {idliDosaItems.map((item, index) => (
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

export default IdliDosa;