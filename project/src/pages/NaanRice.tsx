import React from 'react';

const NaanRice: React.FC = () => {
  const naanItems = [
    {
      name: "Plain Naan",
      description: "Traditional leavened bread baked in tandoor",
      price: "€3.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Butter Naan",
      description: "Naan brushed with butter",
      price: "€4.49",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Garlic Naan",
      description: "Naan topped with fresh garlic and herbs",
      price: "€4.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Cheese Naan",
      description: "Naan stuffed with melted cheese",
      price: "€5.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Keema Naan",
      description: "Naan stuffed with spiced minced lamb",
      price: "€6.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Peshwari Naan",
      description: "Sweet naan with coconut, almonds, and raisins",
      price: "€5.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Tandoori Roti",
      description: "Whole wheat bread baked in tandoor",
      price: "€3.49",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Chapati",
      description: "Thin unleavened bread",
      price: "€2.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    }
  ];

  const riceItems = [
    {
      name: "Basmati Rice",
      description: "Fragrant long-grain basmati rice",
      price: "€4.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Jeera Rice",
      description: "Basmati rice with cumin seeds",
      price: "€5.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Pilau Rice",
      description: "Spiced basmati rice with whole spices",
      price: "€6.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Coconut Rice",
      description: "Basmati rice cooked with coconut milk",
      price: "€6.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Lemon Rice",
      description: "South Indian style rice with lemon and curry leaves",
      price: "€6.49",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Vegetable Fried Rice",
      description: "Indo-Chinese style fried rice with vegetables",
      price: "€8.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Egg Fried Rice",
      description: "Fried rice with scrambled eggs",
      price: "€9.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    },
    {
      name: "Chicken Fried Rice",
      description: "Fried rice with chicken pieces",
      price: "€11.99",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
    }
  ];

  const MenuSection = ({ title, items }: { title: string; items: any[] }) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-red-900 mb-8 text-center border-b-2 border-yellow-500 pb-4">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Naan & Rice</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Freshly baked breads and aromatic rice dishes to complement your meal
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MenuSection title="Naan & Breads" items={naanItems} />
          <MenuSection title="Rice Dishes" items={riceItems} />
        </div>
      </section>
    </div>
  );
};

export default NaanRice;