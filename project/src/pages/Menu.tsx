import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, Leaf, UtensilsCrossed } from 'lucide-react';

// Menu data structure
const menuCategories = [
  {
    id: "starters",
    name: "Starters",
    subcategories: ["Vegetarian", "Non Vegetarian"]
  },
  {
    id: "tandoori",
    name: "Tandoori Specials"
  },
  {
    id: "idli-dosa",
    name: "Idli & Dosa Corner",
    subcategories: ["Dosa", "Idli", "Vada"]
  },
  {
    id: "veg-main",
    name: "Veg Main Course"
  },
  {
    id: "chicken-main",
    name: "Chicken Main Course"
  },
  {
    id: "lamb-main",
    name: "Lamb Main Course"
  },
  {
    id: "fish-main",
    name: "Fish Main Course"
  },
  {
    id: "prawn-main",
    name: "Prawn Main Course"
  },
  {
    id: "naan-rice",
    name: "Naan & Rice",
    subcategories: ["Naan & Breads", "Rice"]
  },
  {
    id: "biryani",
    name: "Biryani"
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    subcategories: ["Cool Drinks", "Masala", "Water", "Lassi", "Lemonade"]
  },
  {
    id: "alcohol",
    name: "Alcohol Drinks",
    subcategories: ["Cocktails", "Beer Indian", "Beer European", "O.Z Beer", "Draught", "Wine", "Digestive", "Sparkling"]
  },
 {
  id: "hot-drinks",
  name: "Hot Drinks",
  subcategories: ["Indian Tea", "Dip-Tea", "Coffee", "Herbal Tea"]
},
{
  id: "dessert",
  name: "Dessert",
  subcategories: ["Indian Sweets", "Kulfi", "Halwa", "Ice Cream"]
},
];


const menuItems=[
  // Starters - Vegetarian
  { id: "1", name: "Paani Puri", price: 10.00, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"/menu/paani-puri.jpg" },
  { id: "2", name: "Samosa", price: 6.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"/menu/samosa-image.jpg" },
  { id: "3", name: "Samosa Ragaada", price: 9.00, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Ragda-Samosa.jpg" },
  { id: "4", name: "Spring Roll", price: 7.00, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Vegetable-Spring-Rolls-2-1.jpg" },
  { id: "5", name: "Veg Platter", price: 13.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/veg-platter.jpg" },
  { id: "6", name: "Aloo Chana Chaat", price: 7.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/chana-aloo-chaat.jpg" },
  { id: "7", name: "Kachori", price: 6.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/kachori.jpg" },
  { id: "8", name: "Onion Bhaji", price: 8.00, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Onion-Bhaji.jpg" },
  { id: "9", name: "Gobi Pakoda", price: 7.00, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Gobi-Pakoda.jpg" },
  { id: "10", name: "Paneer Pakoda", price: 9.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Paneer-Pakoda.jpg" },
  { id: "11", name: "Paneer 65", price: 10.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Paneer-65.jpg" },
  { id: "12", name: "Chili Paneer", price: 11.00, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Chili-Paneer.jpg" },
  { id: "13", name: "Mirchi Bhaji", price: 8.00, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Mirchi-Bhaji.webp" },
  { id: "14", name: "Masala Papad", price: 8.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Masalapapad.jpg" },

  // Starters - Non Vegetarian
  { id: "15", name: "Chicken Samosa", price: 8.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/Chickensamosa.jpg" },
  { id: "16", name: "Lamb Samosa", price: 8.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/lambsamosa.jpg" },
  { id: "17", name: "Chicken Pakoda", price: 8.50, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/ChickenPakoda.jpg" },
  { id: "18", name: "Chicken Spring Roll", price: 7.50, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/ChickenSpringRoll.jpg" },
  { id: "19", name: "Chicken 65", price: 10.50, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/Chicken65.jpg" },
  { id: "20", name: "Prawn Pakoda", price: 9.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/PrawnPakoda.jpg" },
  { id: "21", name: "Fish Amritsar", price: 10.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/FishAmritsar.jpg" },
  { id: "22", name: "Egg Bonda", price: 9.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/EggBonda.jpg" },
  { id: "23", name: "Chili Chicken", price: 11.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/ChiliChicken.jpg" },
  { id: "24", name: "Non Veg Platter", price: 17.50, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/NonVegPlatter.jpg" },

  // Tandoori Specials
  { id: "25", name: "Paneer Tikka", price: 15.50, category: "tandoori", isVeg: true, imgUrl:"/menu/PaneerTikka.jpg" },
  { id: "26", name: "Chicken Tikka", price: 15.50, category: "tandoori", isVeg: false, imgUrl:"/menu/ChickenTikka.jpg" },
  { id: "27", name: "Chicken Tandoori", price: 17.50, category: "tandoori", isVeg: false, imgUrl:"/menu/ChickenTandoori.jpg" },
  { id: "28", name: "Lamb Seekh Kebab", price: 15.50, category: "tandoori", isVeg: false, imgUrl:"/menu/LambSeekhKebab.jpg" },
  { id: "29", name: "Chicken Seekh Kebab", price: 16.50, category: "tandoori", isVeg: false, imgUrl:"/menu/ChickenSeekhKebab.jpg" },
  { id: "30", name: "Fish Tandoori", price: 16.50, category: "tandoori", isVeg: false, imgUrl:"/menu/FishTandoori.jpg" },

  // Idli & Dosa Corner - Dosa
  { id: "31", name: "Plain Dosa", price: 9.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true, imgUrl:"/menu/PlainDosa.jpg" },
  { id: "32", name: "Cheese Plain Dosa", price: 6.00, category: "idli-dosa", subcategory: "Dosa", isVeg: true, imgUrl:"/menu/CheesePlainDosa.jpg" },
  { id: "33", name: "Paneer Plain Dosa", price: 6.00, category: "idli-dosa", subcategory: "Dosa", isVeg: true, imgUrl:"/menu/PaneerPlainDosa.jpg" },
  { id: "34", name: "Masala Dosa", price: 6.00, category: "idli-dosa", subcategory: "Dosa", isVeg: true, imgUrl:"/menu/MasalaDosa.jpg" },
  { id: "35", name: "Cheese Masala Dosa", price: 6.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true, imgUrl:"/menu/CheeseMasalaDosa.jpg" },
  { id: "36", name: "Paneer Masala Dosa", price: 5.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true, imgUrl:"/menu/PaneerMasalaDosa.jpg" },
  { id: "37", name: "Onion Dosa", price: 5.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true, imgUrl:"/menu/OnionDosa.jpg" },
  { id: "38", name: "Butter Dosa", price: 5.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true, imgUrl:"/menu/ButterDosa.jpg" },

  // Idli & Dosa Corner - Idli
  { id: "39", name: "Plain Idli 3pc", price: 5.50, category: "idli-dosa", subcategory: "Idli", isVeg: true, imgUrl:"/menu/PlainIdli3pc.jpg" },
  { id: "40", name: "Sambar Idli 3pc", price: 5.50, category: "idli-dosa", subcategory: "Idli", isVeg: true, imgUrl:"/menu/SambarIdli3pc.jpg" },

  // Idli & Dosa Corner - Vada
  { id: "41", name: "Plain Vada", price: 5.50, category: "idli-dosa", subcategory: "Vada", isVeg: true, imgUrl:"/menu/PlainVada.jpg" },
  { id: "42", name: "Sambar Vada", price: 5.50, category: "idli-dosa", subcategory: "Vada", isVeg: true, imgUrl:"/menu/SambarVada.jpg" },
  { id: "43", name: "Punugulu", price: 5.50, category: "idli-dosa", subcategory: "Vada", isVeg: true, imgUrl:"/menu/Punugulu.jpg" },

  { id: "44", name: "Mix Veg", price: 15.50, category: "veg-main", isVeg: true, imgUrl:"/menu/MixVeg.jpg" },
  { id: "45", name: "Paneer Jalfrezi", price: 16.00, category: "veg-main", isVeg: true, imgUrl:"/menu/PaneerJalfrezi.jpg" },
  { id: "46", name: "Paneer Butter Masala", price: 17.00, category: "veg-main", isVeg: true, imgUrl:"/menu/PaneerButterMasala.jpg" },
  { id: "47", name: "Paneer Vindaloo", price: 15.50, category: "veg-main", isVeg: true, imgUrl:"/menu/PaneerVindaloo.jpg" },
  { id: "48", name: "Dal Thadka", price: 15.50, category: "veg-main", isVeg: true, imgUrl:"/menu/DalThadka.jpg" },
  { id: "49", name: "Mushroom Paneer", price: 14.50, category: "veg-main", isVeg: true, imgUrl:"/menu/MushroomPaneer.jpg" },
  { id: "50", name: "Bagara Baingan", price: 16.50, category: "veg-main", isVeg: true, imgUrl:"/menu/BagaraBaingan.jpg" },
  { id: "51", name: "Sambar", price: 16.50, category: "veg-main", isVeg: true, imgUrl:"/menu/Sambar.jpg" },
  { id: "52", name: "Dal Makhani", price: 15.50, category: "veg-main", isVeg: true, imgUrl:"/menu/DalMakhani.jpg" },
  { id: "53", name: "Rajma", price: 14.50, category: "veg-main", isVeg: true, imgUrl:"/menu/Rajma.jpg" },
  { id: "54", name: "Mutter Paneer", price: 16.50, category: "veg-main", isVeg: true, imgUrl:"/menu/MutterPaneer.jpg" },
  { id: "55", name: "Aloo Mutter Paneer", price: 15.50, category: "veg-main", isVeg: true, imgUrl:"/menu/AlooMutterPaneer.jpg" },
  { id: "56", name: "Paneer Korma", price: 16.50, category: "veg-main", isVeg: true, imgUrl:"/menu/PaneerKorma.jpg" },
  { id: "57", name: "Aloo Baingan", price: 16.50, category: "veg-main", isVeg: true, imgUrl:"/menu/AlooBaingan.jpg" },
  { id: "58", name: "Palak Paneer", price: 16.50, category: "veg-main", isVeg: true, imgUrl:"/menu/PalakPaneer.jpg" },
  { id: "59", name: "Paneer Do Piaza", price: 15.50, category: "veg-main", isVeg: true, imgUrl:"/menu/PaneerDoPiaza.jpg" },
  { id: "60", name: "Baingan Bharta", price: 15.50, category: "veg-main", isVeg: true, imgUrl:"/menu/BainganBharta.jpg" },

  // Chicken Main Course
  { id: "61", name: "Chicken Jalfrezi", price: 16.50, category: "chicken-main", isVeg: false, imgUrl:"/menu/ChickenJalfrezi.jpg" },
  { id: "62", name: "Butter Chicken", price: 16.50, category: "chicken-main", isVeg: false, imgUrl:"/menu/ButterChicken.jpg" },
  { id: "63", name: "Chicken Vindaloo", price: 15.50, category: "chicken-main", isVeg: false, imgUrl:"/menu/ChickenVindaloo.jpg" },
  { id: "64", name: "Chicken Korma", price: 15.50, category: "chicken-main", isVeg: false, imgUrl:"/menu/ChickenKorma.jpg" },
  { id: "65", name: "Palak Chicken", price: 16.50, category: "chicken-main", isVeg: false, imgUrl:"/menu/PalakChicken.jpg" },
  { id: "66", name: "Chicken Do Piaza", price: 15.00, category: "chicken-main", isVeg: false, imgUrl:"/menu/ChickenDoPiaza.jpg" },
  { id: "67", name: "Pepper Chicken", price: 15.00, category: "chicken-main", isVeg: false, imgUrl:"/menu/PepperChicken.jpg" },
  { id: "68", name: "Chicken Dhansak", price: 15.00, category: "chicken-main", isVeg: false, imgUrl:"/menu/ChickenDhansak.jpg" },
  { id: "69", name: "Chicken Tikka Masala", price: 16.50, category: "chicken-main", isVeg: false, imgUrl:"/menu/ChickenTikkaMasala.jpg" },

  // Lamb Main Course
  { id: "70", name: "Lamb Jalfrezi", price: 15.50, category: "lamb-main", isVeg: false, imgUrl:"/menu/LambJalfrezi.jpg" },
  { id: "71", name: "Lamb Vindaloo", price: 14.50, category: "lamb-main", isVeg: false, imgUrl:"/menu/LambVindaloo.jpg" },
  { id: "72", name: "Lamb Korma", price: 15.00, category: "lamb-main", isVeg: false, imgUrl:"/menu/LambKorma.jpg" },
  { id: "73", name: "Palak Lamb", price: 14.50, category: "lamb-main", isVeg: false, imgUrl:"/menu/PalakLamb.jpg" },
  { id: "74", name: "Lamb Do Piaza", price: 15.50, category: "lamb-main", isVeg: false, imgUrl:"/menu/LambDoPiaza.jpg" },
  { id: "75", name: "Lamb Kebab Masala", price: 14.50, category: "lamb-main", isVeg: false, imgUrl:"/menu/LambKebabMasala.jpg" },
  { id: "76", name: "Pepper Lamb", price: 15.00, category: "lamb-main", isVeg: false, imgUrl:"/menu/PepperLamb.jpg" },
  { id: "77", name: "Lamb Dhansak", price: 14.50, category: "lamb-main", isVeg: false, imgUrl:"/menu/LambDhansak.jpg" },
  { id: "78", name: "Lamb Tikka Masala", price: 16.50, category: "lamb-main", isVeg: false, imgUrl:"/menu/LambTikkaMasala.jpg"  },

  // Fish Main Course
  { id: "79", name: "Fish Jalfrezi", price: 15.50, category: "fish-main", isVeg: false, imgUrl:"/menu/FishJalfrezi.jpg" },
  { id: "80", name: "Goan Fish Curry", price: 15.00, category: "fish-main", isVeg: false, imgUrl:"/menu/GoanFishCurry.jpg" },
  { id: "81", name: "Fish Vindaloo", price: 15.50, category: "fish-main", isVeg: false, imgUrl:"/menu/FishVindaloo.jpg" },

  // Prawn Main Course
  { id: "82", name: "Prawn Jalfrezi", price: 15.50, category: "prawn-main", isVeg: false, imgUrl:"/menu/PrawnJalfrezi.jpg" },
  { id: "83", name: "Prawn fry", price: 14.50, category: "prawn-main", isVeg: false, imgUrl:"/menu/Prawnfry.jpg" },
  { id: "84", name: "Prawn Vindaloo", price: 15.00, category: "prawn-main", isVeg: false, imgUrl:"/menu/PrawnVindaloo.jpg" },
  { id: "85", name: "Prawn Masala", price: 14.50, category: "prawn-main", isVeg: false, imgUrl:"/menu/PrawnMasala.jpg" },

  // Naan & Rice - Naan & Breads
  { id: "86", name: "Naan", price: 4.50, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true, imgUrl:"/menu/Naan.jpg" },
  { id: "87", name: "Butter Naan", price: 5.00, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true, imgUrl:"/menu/ButterNaan.jpg" },
  { id: "88", name: "Garlic Naan", price: 5.50, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true, imgUrl:"/menu/GarlicNaan.jpg" },
  { id: "89", name: "Roti Tandoori", price: 4.50, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true, imgUrl:"/menu/RotiTandoori.jpg" },
  { id: "90", name: "Cheese Naan", price: 6.00, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true, imgUrl:"/menu/CheeseNaan.jpg" },
  { id: "91", name: "Lachha Paratha", price: 5.00, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true, imgUrl:"/menu/LachhaParatha.jpg" },
  { id: "92", name: "Plain Paratha", price: 5.00, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true, imgUrl:"/menu/PlainParatha.jpg" },

  // Naan & Rice - Rice
  { id: "93", name: "Bagara Rice", price: 5.00, category: "naan-rice", subcategory: "Rice", isVeg: true, imgUrl:"/menu/BagaraRice.jpg" },
  { id: "94", name: "Plain Rice", price: 4.50, category: "naan-rice", subcategory: "Rice", isVeg: true, imgUrl:"/menu/PlainRice.jpg" },
  { id: "95", name: "Fried Rice", price: 5.50, category: "naan-rice", subcategory: "Rice", isVeg: true, imgUrl:"/menu/FriedRice.jpg" },
  { id: "96", name: "Saffron Rice", price: 5.50, category: "naan-rice", subcategory: "Rice", isVeg: true, imgUrl:"/menu/SaffronRice.jpg" },

  // Biryani
  { id: "97", name: "Mix Biryani", price: 21.50, category: "biryani", isVeg: false, imgUrl:"/menu/MixBiryani.jpg" },
  { id: "98", name: "Lamb Biryani", price: 19.50, category: "biryani", isVeg: false, imgUrl:"/menu/LambBiryani.jpg" },
  { id: "99", name: "Chicken Biryani", price: 18.50, category: "biryani", isVeg: false, imgUrl:"/menu/ChickenBiryani.jpg" },
  { id: "100", name: "Prawn Biryani", price: 19.50, category: "biryani", isVeg: false, imgUrl:"/menu/PrawnBiryani.jpg" },
  { id: "101", name: "Chicken Tikka Biryani", price: 19.50, category: "biryani", isVeg: false, imgUrl:"/menu/ChickenTikkaBiryani.jpg" },
  { id: "102", name: "Fish Biryani", price: 18.50, category: "biryani", isVeg: false, imgUrl:"/menu/FishBiryani.jpg" },
  { id: "103", name: "Paneer Biryani", price: 18.50, category: "biryani", isVeg: true, imgUrl:"/menu/PaneerBiryani.jpg" },
  { id: "104", name: "Vegetable Biryani", price: 18.50, category: "biryani", isVeg: true, imgUrl:"/menu/Vegetable Biryani.jpg" },

  // Soft Drinks - Cool Drinks
  { id: "105", name: "Coca Cola (Normal / Zero)", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/CocaCola.jpg" },
  { id: "106", name: "Fanta", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/Fanta.jpg" },
  { id: "107", name: "Sprite", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/Sprite.jpg" },
  { id: "108", name: "Ice Tea", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/IceTea.jpg" },
  { id: "109", name: "Thums Up", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/ThumsUp.jpg" },
  { id: "110", name: "Limca", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/Limca.jpg" },
  { id: "111", name: "Indian Tonic", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/IndianTonic.jpg" },

  // Soft Drinks - Masala
  { id: "112", name: "Shikanji", price: 5.50, category: "soft-drinks", subcategory: "Masala", isVeg: true, imgUrl:"/menu/Shikanji.jpg" },
  { id: "113", name: "Chaas", price: 5.50, category: "soft-drinks", subcategory: "Masala", isVeg: true, imgUrl:"/menu/Chaas.jpg" },

  // Soft Drinks - Water
  { id: "114", name: "Sparkling / Still (1/2 ltr)", price: 4.00, category: "soft-drinks", subcategory: "Water", isVeg: true, imgUrl:"/menu/SparklingStill.jpg" },
  { id: "115", name: "Still / Sparkling (1 ltr)", price: 6.50, category: "soft-drinks", subcategory: "Water", isVeg: true, imgUrl:"/menu/StillSparkling.jpg" },

  // Soft Drinks - Lassi
  { id: "116", name: "Special Lassi", price: 9.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/SpecialLassi.jpg" },
  { id: "117", name: "Mango Lassi", price: 6.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/MangoLassi.jpg" },
  { id: "118", name: "Rose Lassi", price: 6.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/RoseLassi.jpg" },
  { id: "119", name: "Jeera Lassi", price: 5.50, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/jeeraLassi.jpg" },
  { id: "120", name: "Salt Lassi", price: 5.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/SaltLassi.jpg" },
  { id: "121", name: "Sweet Lassi", price: 5.50, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/SweetLassi.jpg" },
  { id: "122", name: "Natural Lassi", price: 5.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/NaturalLassi.jpg" },
  { id: "123", name: "Chocolate Lassi", price: 7.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/ChocolateLassi.jpg" },

  // Soft Drinks - Lemonade
  { id: "124", name: "Lemon Juice", price: 5.00, category: "soft-drinks", subcategory: "Lemonade", isVeg: true, imgUrl:"/menu/LemonJuice.jpg" },
  { id: "125", name: "Lemon Soda", price: 6.00, category: "soft-drinks", subcategory: "Lemonade", isVeg: true, imgUrl:"/menu/LemonSoda.jpg" },
  { id: "126", name: "Ginger Juice", price: 6.00, category: "soft-drinks", subcategory: "Lemonade", isVeg: true, imgUrl:"/menu/GingerJuice.jpg" },

  // Alcohol Drinks - Cocktails
  { id: "127", name: "Mojito", price: 10.00, category: "alcohol", subcategory: "Cocktails", isVeg: true, imgUrl:"/menu/Mojito.jpg" },
  { id: "128", name: "Aperol Spritz", price: 10.00, category: "alcohol", subcategory: "Cocktails", isVeg: true, imgUrl:"/menu/AperolSpritz.jpg" },
  { id: "129", name: "Nigroni", price: 7.00, category: "alcohol", subcategory: "Cocktails", isVeg: true, imgUrl:"/menu/Nigroni.jpg" },
  { id: "130", name: "Blue Lagoon", price: 7.00, category: "alcohol", subcategory: "Cocktails", isVeg: true, imgUrl:"/menu/BlueLagoon.jpg" },
  { id: "131", name: "Margarita", price: 7.50, category: "alcohol", subcategory: "Cocktails", isVeg: true, imgUrl:"/menu/Margarita.jpg" },
  { id: "132", name: "Martini", price: 7.00, category: "alcohol", subcategory: "Cocktails", isVeg: true, imgUrl:"/menu/Martini.jpg" },

  // Alcohol Drinks - Beer Indian
  { id: "133", name: "Cobra Large 650ml", price: 9.50, category: "alcohol", subcategory: "Beer Indian", isVeg: true, imgUrl:"/menu/CobraLarge.jpg" },
  { id: "134", name: "King Fisher Large 650ml", price: 9.50, category: "alcohol", subcategory: "Beer Indian", isVeg: true, imgUrl:"/menu/KingFisherLarge.jpg" },
  { id: "135", name: "Cobra Small 330ml", price: 5.00, category: "alcohol", subcategory: "Beer Indian", isVeg: true, imgUrl:"/menu/CobraSmall.jpg" },
  { id: "136", name: "King Fisher Small 330ml", price: 5.00, category: "alcohol", subcategory: "Beer Indian", isVeg: true, imgUrl:"/menu/KingFisherSmall.jpg" },

  // Alcohol Drinks - Beer European
  { id: "137", name: "Duvel", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true, imgUrl:"/menu/Duvel.jpg" },
  { id: "138", name: "Chinmay Blue", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true, imgUrl:"/menu/ChinmayBlue.jpg" },
  { id: "139", name: "Jupiller", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true, imgUrl:"/menu/Jupiller.jpg" },
  { id: "140", name: "Leffe Blonde", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true, imgUrl:"/menu/LeffeBlonde.jpg" },

  // Alcohol Drinks - O.Z Beer
  { id: "141", name: "Hoegaarden", price: 5.00, category: "alcohol", subcategory: "O.Z Beer", isVeg: true, imgUrl:"/menu/Hoegaarden.jpg" },
  { id: "142", name: "Stella", price: 5.00, category: "alcohol", subcategory: "O.Z Beer", isVeg: true, imgUrl:"/menu/Stella.jpg" },

  // Alcohol Drinks - Draught
  { id: "143", name: "Stella", price: 6.00, category: "alcohol", subcategory: "Draught", isVeg: true, imgUrl:"/menu/StellaDraught.jpg" },
  { id: "144", name: "Hoegaarden", price: 6.00, category: "alcohol", subcategory: "Draught", isVeg: true, imgUrl:"/menu/HoegaardenDraught.jpg" },
  { id: "145", name: "Triple Karmeliet", price: 6.00, category: "alcohol", subcategory: "Draught", isVeg: true, imgUrl:"/menu/TripleKarmeliet.jpg" },

  // Alcohol Drinks - Wine (simplified for space)
  { id: "146", name: "House Wine Red - Glass", price: 7.00, category: "alcohol", subcategory: "Wine", isVeg: true, imgUrl:"/menu/HouseWineRed.jpg" },
  { id: "147", name: "House Wine White - Glass", price: 6.50, category: "alcohol", subcategory: "Wine", isVeg: true, imgUrl:"/menu/HouseWineWhite.jpg" },
  { id: "148", name: "House Wine Rose - Glass", price: 7.50, category: "alcohol", subcategory: "Wine", isVeg: true, imgUrl:"/menu/HouseWineRose.jpg" },
  { id: "149", name: "La Croisade (White)", price: 24.00, category: "alcohol", subcategory: "Wine", isVeg: true, imgUrl:"/menu/LaCroisade(White).jpg" },
  { id: "150", name: "Cote du Rhone (Red)", price: 24.00, category: "alcohol", subcategory: "Wine", isVeg: true, imgUrl:"/menu/CoteduRhone(Red).jpg" },

  // Alcohol Drinks - Digestive
  { id: "151", name: "Amaretto", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true, imgUrl:"/menu/Amaretto.jpg" },
  { id: "152", name: "Grappa", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true, imgUrl:"/menu/grappaDigestive.jpg" },
  { id: "153", name: "Cognac", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true, imgUrl:"/menu/Cognac.jpg" },
  { id: "154", name: "Campari", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true, imgUrl:"/menu/Campari.jpg" },
  { id: "155", name: "Ricard", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true, imgUrl:"/menu/Ricard.jpg" },
  { id: "156", name: "Porto", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true, imgUrl:"/menu/Porto.jpg" },

  // Alcohol Drinks - Sparkling
  { id: "157", name: "Cava", price: 7.00, category: "alcohol", subcategory: "Sparkling", isVeg: true, imgUrl:"/menu/Cava.jpg" },
  { id: "158", name: "Champaign", price: 7.00, category: "alcohol", subcategory: "Sparkling", isVeg: true, imgUrl:"/menu/Champaign.jpg" },
  { id: "159", name: "Chardonnay", price: 7.00, category: "alcohol", subcategory: "Sparkling", isVeg: true, imgUrl:"/menu/Chardonnay.jpg" },



// Indian Tea
{ id: "160", name: "Plain Tea", price: 4.00, category: "hot-drinks", subcategory: "Indian Tea", isVeg: true, imgUrl: "/menu/plain-tea.jpg" },
{ id: "161", name: "Ginger Tea", price: 4.50, category: "hot-drinks", subcategory: "Indian Tea", isVeg: true, imgUrl: "/menu/ginger-tea.jpg" },
{ id: "162", name: "Ellachi Tea", price: 4.50, category: "hot-drinks", subcategory: "Indian Tea", isVeg: true, imgUrl: "/menu/ellachi-tea.jpg" },
{ id: "163", name: "Masala Tea", price: 4.50, category: "hot-drinks", subcategory: "Indian Tea", isVeg: true, imgUrl: "/menu/masala-tea.jpg" },
{ id: "164", name: "Dip-Tea", price: 4.00, category: "hot-drinks", subcategory: "Dip-Tea", isVeg: true, imgUrl: "/menu/dip-tea.jpg" },

// Coffee
{ id: "165", name: "Coffee", price: 4.00, category: "hot-drinks", subcategory: "Coffee", isVeg: true, imgUrl: "/menu/coffee.jpg" },
{ id: "166", name: "Espresso", price: 4.00, category: "hot-drinks", subcategory: "Coffee", isVeg: true, imgUrl: "/menu/espresso.jpg" },
{ id: "167", name: "Double Espresso", price: 4.00, category: "hot-drinks", subcategory: "Coffee", isVeg: true, imgUrl: "/menu/double-espresso.jpg" },
{ id: "168", name: "Cappuccino", price: 4.00, category: "hot-drinks", subcategory: "Coffee", isVeg: true, imgUrl: "/menu/cappuccino.jpg" },

// Herbal Tea
{ id: "169", name: "Green Tea", price: 4.00, category: "hot-drinks", subcategory: "Herbal Tea", isVeg: true, imgUrl: "/menu/green-tea.jpg" },
{ id: "170", name: "Black Tea", price: 4.00, category: "hot-drinks", subcategory: "Herbal Tea", isVeg: true, imgUrl: "/menu/black-tea.jpg" },
{ id: "171", name: "Mint Tea", price: 4.00, category: "hot-drinks", subcategory: "Herbal Tea", isVeg: true, imgUrl: "/menu/mint-tea.jpg" },
{ id: "172", name: "Jasmine Tea", price: 4.00, category: "hot-drinks", subcategory: "Herbal Tea", isVeg: true, imgUrl: "/menu/jasmine-tea.jpg" },
{ id: "173", name: "Chamomile Tea", price: 4.00, category: "hot-drinks", subcategory: "Herbal Tea", isVeg: true, imgUrl: "/menu/chamomile-tea.jpg" },



// Indian Sweets
{ id: "174", name: "Gulab Jamun", price: 6.50, category: "dessert", subcategory: "Indian Sweets", isVeg: true, imgUrl: "/menu/gulab-jamun.jpg" },
{ id: "175", name: "Gulab Jamun + Ice Cream", price: 7.50, category: "dessert", subcategory: "Indian Sweets", isVeg: true, imgUrl: "/menu/gulab-jamun-icecream.jpg" },

// Kulfi
{ id: "176", name: "Pistachio Kulfi", price: 7.50, category: "dessert", subcategory: "Kulfi", isVeg: true, imgUrl: "/menu/pistachio-kulfi.jpg" },
{ id: "177", name: "Mango Kulfi", price: 7.50, category: "dessert", subcategory: "Kulfi", isVeg: true, imgUrl: "/menu/mango-kulfi.jpg" },
{ id: "178", name: "Malai Kulfi", price: 7.50, category: "dessert", subcategory: "Kulfi", isVeg: true, imgUrl: "/menu/malai-kulfi.jpg" },

// Halwa
{ id: "179", name: "Gajar Ka Halwa", price: 7.50, category: "dessert", subcategory: "Halwa", isVeg: true, imgUrl: "/menu/gajar-halwa.jpg" },

// Ice Cream
{ id: "180", name: "Vanilla", price: 7.00, category: "dessert", subcategory: "Ice Cream", isVeg: true, imgUrl: "/menu/vanilla-icecream.jpg" },
{ id: "181", name: "Dame Blanche", price: 9.50, category: "dessert", subcategory: "Ice Cream", isVeg: true, imgUrl: "/menu/dame-blanche.jpg" },
{ id: "182", name: "Chocolate", price: 7.00, category: "dessert", subcategory: "Ice Cream", isVeg: true, imgUrl: "/menu/chocolate-icecream.jpg" }

  
];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || item.subcategory === selectedSubcategory;
      const matchesDietary = dietaryFilter === 'all' || 
        (dietaryFilter === 'veg' && item.isVeg) ||
        (dietaryFilter === 'non-veg' && !item.isVeg);
      
      return matchesSearch && matchesCategory && matchesSubcategory && matchesDietary;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedSubcategory, dietaryFilter, sortBy]);

  const getSubcategories = () => {
    if (selectedCategory === 'all') return [];
    const category = menuCategories.find(cat => cat.id === selectedCategory);
    return category?.subcategories || [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-red-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200">
              Discover authentic Indian flavors crafted with traditional recipes
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Search and Filter Section */}
      <div className="bg-white shadow-lg sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedSubcategory('all');
                  }}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {menuCategories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>

              {/* Subcategory Filter */}
              {getSubcategories().length > 0 && (
                <div className="relative">
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="all">All Subcategories</option>
                    {getSubcategories().map(subcategory => (
                      <option key={subcategory} value={subcategory}>{subcategory}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
              )}

              {/* Dietary Filter */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setDietaryFilter('all')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    dietaryFilter === 'all' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setDietaryFilter('veg')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    dietaryFilter === 'veg' 
                      ? 'bg-white text-green-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Leaf size={16} />
                  Veg
                </button>
                <button
                  onClick={() => setDietaryFilter('non-veg')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    dietaryFilter === 'non-veg' 
                      ? 'bg-white text-red-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <UtensilsCrossed size={16} />
                  Non-Veg
                </button>
              </div>
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredAndSortedItems.length} dish{filteredAndSortedItems.length !== 1 ? 'es' : ''}
          </div>
        </div>
      </div>

      {/* Menu Items Grid - 4 per row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredAndSortedItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    // onError={(e) => {
                    //   e.target.src = 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg';
                    // }}
                  />
                  <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full font-bold text-sm">
                    €{item.price.toFixed(2)}
                  </div>
                  <div className="absolute top-2 left-2">
                    {item.isVeg ? (
                      <div className="bg-green-500 p-1 rounded-full">
                        <Leaf size={14} className="text-white" />
                      </div>
                    ) : (
                      <div className="bg-red-500 p-1 rounded-full">
                        <UtensilsCrossed size={14} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-red-900 mb-2 line-clamp-2">{item.name}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      {menuCategories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                  {item.subcategory && (
                    <span className="text-sm text-gray-500 mb-3 block">{item.subcategory}</span>
                  )}
                  
                
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;