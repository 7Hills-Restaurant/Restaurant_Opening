import React from 'react';

const Starters: React.FC = () => {
  const vegetarianStarters = [
    {
      name: "Samosa (2 pcs)",
      description: "Crispy pastry filled with spiced potatoes and peas",
      price: "€6.99",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    },
    {
      name: "Paneer Tikka",
      description: "Grilled cottage cheese cubes marinated in yogurt and spices",
      price: "€12.99",
      image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg"
    },
    {
      name: "Aloo Tikki",
      description: "Golden potato patties served with mint and tamarind chutney",
      price: "€8.99",
      image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg"
    },
    {
      name: "Vegetable Pakora",
      description: "Mixed vegetables in spiced chickpea batter, deep fried",
      price: "€7.99",
      image: "https://images.pexels.com/photos/5560756/pexels-photo-5560756.jpeg"
    },
    {
      name: "Paneer 65",
      description: "Spicy fried cottage cheese with curry leaves and green chilies",
      price: "€13.99",
      image: "https://images.pexels.com/photos/8629140/pexels-photo-8629140.jpeg"
    },
    {
      name: "Gobi Manchurian",
      description: "Crispy cauliflower florets in Indo-Chinese sauce",
      price: "€10.99",
      image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg"
    }
  ];

  const nonVegetarianStarters = [
    {
      name: "Chicken Tikka",
      description: "Tender chicken pieces marinated in yogurt and aromatic spices",
      price: "€14.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Seekh Kebab",
      description: "Spiced minced lamb grilled on skewers",
      price: "€16.99",
      image: "https://images.pexels.com/photos/5560756/pexels-photo-5560756.jpeg"
    },
    {
      name: "Fish Amritsari",
      description: "Crispy fried fish with traditional Punjabi spices",
      price: "€15.99",
      image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg"
    },
    {
      name: "Chicken 65",
      description: "Spicy fried chicken with curry leaves and red chilies",
      price: "€13.99",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
      name: "Mutton Cutlet",
      description: "Spiced minced mutton patties, crumb fried",
      price: "€17.99",
      image: "https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg"
    },
    {
      name: "Prawn Koliwada",
      description: "Crispy fried prawns with spices and herbs",
      price: "€18.99",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    }
  ];

  const MenuSection = ({ title, items }: { title: string; items: any[] }) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-red-900 mb-8 text-center border-b-2 border-yellow-500 pb-4">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
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
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Starters</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Begin your culinary journey with our delicious appetizers
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MenuSection title="Vegetarian Starters" items={vegetarianStarters} />
          <MenuSection title="Non-Vegetarian Starters" items={nonVegetarianStarters} />
        </div>
      </section>
    </div>
  );
};

export default Starters;