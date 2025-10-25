
import logo from "./logo.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import add_address_iamge from "./add_address_image.svg";
import organic_vegitable_image from "./organic_vegitable_image.png";
import fresh_fruits_image from "./fresh_fruits_image.png";
import bottles_image from "./bottles_image.png";
import maggi_image from "./maggi_image.png";
import dairy_product_image from "./dairy_product_image.png";
import bakery_image from "./bakery_image.png";
import grain_image from "./grain_image.png";
import potato_image_1 from "./potato_image_1.png";
import potato_image_2 from "./potato_image_2.png";
import potato_image_3 from "./potato_image_3.png";
import potato_image_4 from "./potato_image_4.png";
import tomato_image from "./tomato_image.png";
import carrot_image from "./carrot_image.png";
import apple_image from "./apple_image.png";
import amul_milk_image from "./amul_milk_image.png";
import coca_cola_image from "./coca_cola_image.png";
import brown_bread_image from "./brown_bread_image.png";
import basmati_rice_image from "./basmati_rice_image.png";
import paneer_image from "./paneer_image.png";
import orange_image from "./orange_image.png";
import pepsi_image from "./pepsi_image.png";
import wheat_flour_image from "./wheat_flour_image.png";
import cheese_image from "./cheese_image.png";
import eggs_image from "./eggs_image.png";
import spinach_image_1 from "./spinach_image_1.png";
import onion_image_1 from "./onion_image_1.png";
import banana_image_1 from "./banana_image_1.png";
import mango_image_1 from "./mango_image_1.png";
import grapes_image_1 from "./grapes_image_1.png";
import paneer_image_2 from "./paneer_image_2.png";
import sprite_image_1 from "./sprite_image_1.png";
import fanta_image_1 from "./fanta_image_1.png";
import seven_up_image_1 from "./seven_up_image_1.png";
import top_ramen_image from "./top_ramen_image.png";
import knorr_soup_image from "./knorr_soup_image.png";
import yippee_image from "./yippee_image.png";
import maggi_oats_image from "./maggi_oats_image.png";
import butter_croissant_image from "./butter_croissant_image.png";
import chocolate_cake_image from "./chocolate_cake_image.png";
import whole_wheat_bread_image from "./whole_wheat_bread_image.png";
import vanilla_muffins_image from "./vanilla_muffins_image.png";
import quinoa_image from "./quinoa_image.png";
import brown_rice_image from "./brown_rice_image.png";
import barley_image from "./barley_image.png";


export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  add_address_iamge,
  box_icon,
};

export const categories = [
  {
    text: "Fresh Vegetables",
    path: "Vegetables",
    image: organic_vegitable_image,
    bgColor: "#FEF6DA",
  },
  {
    text: "Fresh Fruits",
    path: "Fruits",
    image: fresh_fruits_image,
    bgColor: "#FEE0E0",
  },
  {
    text: "Dairy Products",
    path: "Dairy",
    image: dairy_product_image,
    bgColor: "#FEE6CD",
  },
  {
    text: "Beverages",
    path: "Drinks",
    image: bottles_image,
    bgColor: "#F0F5DE",
  },
  {
    text: "Bakery & Breads",
    path: "Bakery",
    image: bakery_image,
    bgColor: "#E0F6FE",
  },
  {
    text: "Grains & Cereals",
    path: "Grains",
    image: grain_image,
    bgColor: "#F1E3F9",
  },
  {
    text: "Instant Food",
    path: "Instant",
    image: maggi_image,
    bgColor: "#E1F5EC",
  },
  {
    text: "Snacks & Munchies",
    path: "Snacks",
    image: box_icon,
    bgColor: "#FFE5E5",
  },
  {
    text: "Electronics",
    path: "Electronics",
    image: refresh_icon,
    bgColor: "#E3F2FD",
  },
  {
    text: "Fashion & Clothing",
    path: "Clothing",
    image: trust_icon,
    bgColor: "#FCE4EC",
  },
  {
    text: "Sports & Fitness",
    path: "Sports",
    image: delivery_truck_icon,
    bgColor: "#F1F8E9",
  },
  {
    text: "Home & Kitchen",
    path: "Home",
    image: leaf_icon,
    bgColor: "#FFF3E0",
  },
  {
    text: "Beauty & Care",
    path: "Beauty",
    image: star_icon,
    bgColor: "#F3E5F5",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes.",
  },
  {
    icon: leaf_icon,
    title: "Freshness Guaranteed",
    description: "Fresh produce straight from the source.",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality groceries at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];

export const dummyProducts = [
  // Vegetables
  {
    _id: "gd46g23h",
    name: "Fresh Potato 500g",
    category: "Vegetables",
    price: 25,
    offerPrice: 20,
    image: ["https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500"],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd47g34h",
    name: "Fresh Tomato 1 kg",
    category: "Vegetables",
    price: 40,
    offerPrice: 35,
    image: ["https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500"],
    description: [
      "Juicy and ripe",
      "Rich in Vitamin C",
      "Perfect for salads and sauces",
      "Farm fresh quality",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd48g45h",
    name: "Fresh Carrot 500g",
    category: "Vegetables",
    price: 30,
    offerPrice: 28,
    image: ["https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500"],
    description: [
      "Sweet and crunchy",
      "Good for eyesight",
      "Ideal for juices and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd49g56h",
    name: "Fresh Spinach 500g",
    category: "Vegetables",
    price: 18,
    offerPrice: 15,
    image: ["https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500"],
    description: [
      "Rich in iron",
      "High in vitamins",
      "Perfect for soups and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd50g67h",
    name: "Fresh Onion 500g",
    category: "Vegetables",
    price: 22,
    offerPrice: 19,
    image: ["https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500"],
    description: [
      "Fresh and pungent",
      "Perfect for cooking",
      "A kitchen staple",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Fruits
  {
    _id: "ek51j12k",
    name: "Fresh Apple 1 kg",
    category: "Fruits",
    price: 120,
    offerPrice: 110,
    image: ["https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500"],
    description: [
      "Crisp and juicy",
      "Rich in fiber",
      "Boosts immunity",
      "Perfect for snacking and desserts",
      "Organic and farm fresh",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek52j23k",
    name: "Fresh Orange 1 kg",
    category: "Fruits",
    price: 80,
    offerPrice: 75,
    image: ["https://images.unsplash.com/photo-1547514701-42782101795e?w=500"],
    description: [
      "Juicy and sweet",
      "Rich in Vitamin C",
      "Perfect for juices and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek53j34k",
    name: "Fresh Banana 1 kg",
    category: "Fruits",
    price: 50,
    offerPrice: 45,
    image: ["https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500"],
    description: [
      "Sweet and ripe",
      "High in potassium",
      "Great for smoothies and snacking",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek54j45k",
    name: "Fresh Mango 1 kg",
    category: "Fruits",

    price: 150,
    offerPrice: 140,
    image: ["https://images.unsplash.com/photo-1605664515377-3a75500c48e4?w=500"],
    description: [
      "Sweet and flavorful",
      "Perfect for smoothies and desserts",
      "Rich in Vitamin A",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek55j56k",
    name: "Fresh Grapes 500g",
    category: "Fruits",
    price: 70,
    offerPrice: 65,
    image: ["https://images.unsplash.com/photo-1599819177423-f6f70139e84d?w=500"],
    description: [
      "Fresh and juicy",
      "Rich in antioxidants",
      "Perfect for snacking and fruit salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Dairy
  {
    _id: "ek56j67k",
    name: "Fresh Milk 1L",
    category: "Dairy",
    price: 60,
    offerPrice: 55,
    image: ["https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500"],
    description: [
      "Pure and fresh",
      "Rich in calcium",
      "Ideal for tea, coffee, and desserts",
      "Trusted brand quality",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek57j78k",
    name: "Fresh Paneer 200g",
    category: "Dairy",
    price: 90,
    offerPrice: 85,
    image: ["https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500"],
    description: [
      "Soft and fresh",
      "Rich in protein",
      "Ideal for curries and snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek58j89k",
    name: "Farm Fresh Eggs 12 pcs",
    category: "Dairy",
    price: 90,
    offerPrice: 85,
    image: ["https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500"],
    description: [
      "Farm fresh",
      "Rich in protein",
      "Ideal for breakfast and baking",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek59j90k",
    name: "Greek Yogurt 400g",
    category: "Dairy",
    price: 90,
    offerPrice: 85,
    image: ["https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500"],
    description: [
      "Creamy and thick",
      "Rich in probiotics",
      "Perfect for breakfast",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek60j01k",
    name: "Cheddar Cheese 200g",
    category: "Dairy",
    price: 140,
    offerPrice: 130,
    image: ["https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500"],
    description: [
      "Creamy and delicious",
      "Perfect for pizzas and sandwiches",
      "Rich in calcium",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Drinks
  {
    _id: "ek61j12k",
    name: "Coca-Cola 1.5L",
    category: "Drinks",
    price: 80,
    offerPrice: 75,
    image: ["https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500"],
    description: [
      "Refreshing and fizzy",
      "Perfect for parties and gatherings",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek62j23k",
    name: "Pepsi 1.5L",
    category: "Drinks",
    price: 78,
    offerPrice: 73,
    image: ["https://images.unsplash.com/photo-1629203849700-f4b45e89e1be?w=500"],
    description: [
      "Chilled and refreshing",
      "Perfect for celebrations",
      "Best served cold",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek63j34k",
    name: "Fresh Orange Juice 1L",
    category: "Drinks",
    price: 79,
    offerPrice: 74,
    image: ["https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500"],
    description: [
      "100% natural juice",
      "No added sugar",
      "Rich in Vitamin C",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek64j45k",
    name: "Mineral Water 1L",
    category: "Drinks",
    price: 77,
    offerPrice: 72,
    image: ["https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500"],
    description: [
      "Pure and clean",
      "Natural minerals",
      "Perfect hydration",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek65j56k",
    name: "Iced Tea Lemon 500ml",
    category: "Drinks",
    price: 76,
    offerPrice: 71,
    image: ["https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500"],
    description: [
      "Refreshing lemon flavor",
      "Ready to drink",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Grains
  {
    _id: "ek66j67k",
    name: "Basmati Rice 5kg",
    category: "Grains",
    price: 550,
    offerPrice: 520,
    image: ["https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"],
    description: [
      "Long grain and aromatic",
      "Perfect for biryani and pulao",
      "Premium quality",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek67j78k",
    name: "Wheat Flour 5kg",
    category: "Grains",
    price: 250,
    offerPrice: 230,
    image: ["https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500"],
    description: [
      "High-quality whole wheat",
      "Soft and fluffy rotis",
      "Rich in nutrients",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek68j89k",
    name: "Organic Quinoa 500g",
    category: "Grains",
    price: 450,
    offerPrice: 420,
    image: ["https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"],
    description: [
      "High in protein and fiber",
      "Gluten-free",
      "Rich in vitamins and minerals",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek69j90k",
    name: "Brown Rice 1kg",
    category: "Grains",
    price: 120,
    offerPrice: 110,
    image: ["https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500"],
    description: [
      "Whole grain and nutritious",
      "Helps in weight management",
      "Good source of magnesium",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek70j01k",
    name: "Oats 1kg",
    category: "Grains",
    price: 150,
    offerPrice: 140,
    image: ["https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=500"],
    description: [
      "Rich in fiber",
      "Helps improve digestion",
      "Perfect for breakfast",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Bakery
  {
    _id: "bk01a24z",
    name: "Brown Bread 400g",
    category: "Bakery",
    price: 40,
    offerPrice: 35,
    image: ["https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500"],
    description: [
      "Soft and healthy",
      "Made from whole wheat",
      "Ideal for breakfast and sandwiches",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk02b30y",
    name: "Butter Croissant 100g",
    category: "Bakery",
    price: 50,
    offerPrice: 45,
    image: ["https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500"],
    description: [
      "Flaky and buttery",
      "Freshly baked",
      "Perfect for breakfast or snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk03c31x",
    name: "Chocolate Cake 500g",
    category: "Bakery",
    price: 350,
    offerPrice: 325,
    image: ["https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"],
    description: [
      "Rich and moist",
      "Made with premium cocoa",
      "Ideal for celebrations and parties",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk04d32w",
    name: "Cookies Assorted 200g",
    category: "Bakery",
    price: 45,
    offerPrice: 40,
    image: ["https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500"],
    description: [
      "Variety of flavors",
      "Crunchy and delicious",
      "Perfect for tea time",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk05e33v",
    name: "Vanilla Cupcakes 6 pcs",
    category: "Bakery",
    price: 100,
    offerPrice: 90,
    image: ["https://images.unsplash.com/photo-1587668421804-1ef5d388d0b1?w=500"],
    description: [
      "Soft and fluffy",
      "Perfect for a quick snack",
      "Made with real vanilla",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Instant
  {
    _id: "in01f25u",
    name: "Instant Noodles 280g",
    category: "Instant",

    price: 55,
    offerPrice: 50,
    image: ["https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500"],
    description: [
      "Instant and easy to cook",
      "Delicious taste",
      "Popular among kids and adults",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in02g26t",
    name: "Cup Noodles 70g",
    category: "Instant",
    price: 45,
    offerPrice: 40,
    image: ["https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500"],
    description: [
      "Quick and easy to prepare",
      "Just add hot water",
      "Perfect for busy days",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in03h27s",
    name: "Instant Soup Mix 70g",
    category: "Instant",
    price: 35,
    offerPrice: 30,
    image: ["https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500"],
    description: [
      "Convenient for on-the-go",
      "Healthy and nutritious",
      "Variety of flavors",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in04i28r",
    name: "Instant Pasta 200g",
    category: "Instant",
    price: 50,
    offerPrice: 45,
    image: ["https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500"],
    description: [
      "Ready in 5 minutes",
      "Italian flavor",
      "Perfect for quick meals",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in05j29q",
    name: "Ready to Eat Meal 300g",
    category: "Instant",
    price: 40,
    offerPrice: 35,
    image: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500"],
    description: [
      "Just heat and eat",
      "Preservative free",
      "Homestyle taste",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Snacks
  {
    _id: "sn01k30p",
    name: "Potato Chips 100g",
    category: "Snacks",
    price: 30,
    offerPrice: 25,
    image: ["https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500"],
    description: [
      "Crispy and crunchy",
      "Perfect for movie nights",
      "Multiple flavors available",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "sn02l31o",
    name: "Salted Peanuts 200g",
    category: "Snacks",
    price: 60,
    offerPrice: 55,
    image: ["https://images.unsplash.com/photo-1587049332358-223fd84e1a9c?w=500"],
    description: [
      "Crunchy and tasty",
      "High in protein",
      "Great snack option",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "sn03m32n",
    name: "Chocolate Cookies 150g",
    category: "Snacks",
    price: 80,
    offerPrice: 75,
    image: ["https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500"],
    description: [
      "Sweet and delicious",
      "Perfect for tea time",
      "Chocolate chip variant",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "sn04n33m",
    name: "Namkeen Mix 250g",
    category: "Snacks",
    price: 70,
    offerPrice: 65,
    image: ["https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500"],
    description: [
      "Traditional Indian snack",
      "Spicy and crispy",
      "Perfect for gatherings",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "sn05o34l",
    name: "Butter Popcorn 100g",
    category: "Snacks",
    price: 40,
    offerPrice: 35,
    image: ["https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500"],
    description: [
      "Light and fluffy",
      "Perfect for movie time",
      "Buttery flavor",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Electronics
  {
    _id: "el01p35k",
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 2999,
    offerPrice: 2499,
    image: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"],
    description: [
      "Premium sound quality",
      "30 hours battery life",
      "Noise cancellation",
      "Comfortable fit",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "el02q36j",
    name: "Smart Watch Fitness Tracker",
    category: "Electronics",
    price: 4999,
    offerPrice: 3999,
    image: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"],
    description: [
      "Heart rate monitor",
      "Sleep tracking",
      "Water resistant",
      "Multiple sport modes",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "el03r37i",
    name: "Power Bank 20000mAh",
    category: "Electronics",
    price: 1999,
    offerPrice: 1599,
    image: ["https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500"],
    description: [
      "Fast charging support",
      "Dual USB ports",
      "LED indicator",
      "Compact design",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "el04s38h",
    name: "USB-C Cable 6ft",
    category: "Electronics",
    price: 499,
    offerPrice: 349,
    image: ["https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"],
    description: [
      "Fast data transfer",
      "Durable braided cable",
      "Universal compatibility",
      "6 feet long",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "el05t39g",
    name: "Wireless Mouse",
    category: "Electronics",
    price: 899,
    offerPrice: 699,
    image: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"],
    description: [
      "Ergonomic design",
      "Silent clicks",
      "Long battery life",
      "Precise tracking",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Clothing
  {
    _id: "cl01u40f",
    name: "Men's Cotton T-Shirt",
    category: "Clothing",
    price: 599,
    offerPrice: 449,
    image: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"],
    description: [
      "100% pure cotton",
      "Comfortable fit",
      "Multiple colors available",
      "Machine washable",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "cl02v41e",
    name: "Women's Casual Jeans",
    category: "Clothing",
    price: 1499,
    offerPrice: 1199,
    image: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"],
    description: [
      "Stretchable denim",
      "Slim fit design",
      "Fade resistant",
      "All sizes available",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "cl03w42d",
    name: "Formal Shirt for Men",
    category: "Clothing",
    price: 999,
    offerPrice: 799,
    image: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"],
    description: [
      "Premium fabric",
      "Wrinkle free",
      "Perfect for office",
      "Regular fit",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "cl04x43c",
    name: "Summer Dress for Women",
    category: "Clothing",
    price: 1299,
    offerPrice: 999,
    image: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"],
    description: [
      "Light and breezy",
      "Floral print",
      "Perfect for summer",
      "Comfortable fit",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "cl05y44b",
    name: "Sports Track Pants",
    category: "Clothing",
    price: 799,
    offerPrice: 599,
    image: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500"],
    description: [
      "Moisture wicking",
      "Elastic waistband",
      "Side pockets",
      "Ideal for gym",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Sports
  {
    _id: "sp01z45a",
    name: "Yoga Mat with Carry Bag",
    category: "Sports",
    price: 899,
    offerPrice: 699,
    image: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500"],
    description: [
      "Non-slip surface",
      "Extra thick padding",
      "Eco-friendly material",
      "Includes carry bag",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "sp02a46z",
    name: "Dumbbells Set 5kg",
    category: "Sports",
    price: 1499,
    offerPrice: 1199,
    image: ["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500"],
    description: [
      "Cast iron construction",
      "Rubber grip",
      "Perfect for home gym",
      "Durable and long-lasting",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "sp03b47y",
    name: "Badminton Racket",
    category: "Sports",
    price: 1299,
    offerPrice: 999,
    image: ["https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500"],
    description: [
      "Lightweight aluminum frame",
      "Comfortable grip",
      "Professional grade",
      "Includes cover",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "sp04c48x",
    name: "Resistance Bands Set",
    category: "Sports",
    price: 699,
    offerPrice: 549,
    image: ["https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500"],
    description: [
      "5 resistance levels",
      "Latex-free",
      "Portable and compact",
      "Perfect for home workouts",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "sp05d49w",
    name: "Football Size 5",
    category: "Sports",
    price: 999,
    offerPrice: 799,
    image: ["https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=500"],
    description: [
      "Official size and weight",
      "Durable synthetic leather",
      "Machine stitched",
      "Suitable for all surfaces",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Home & Kitchen
  {
    _id: "hk01e50v",
    name: "Non-Stick Cookware Set",
    category: "Home",
    price: 2999,
    offerPrice: 2499,
    image: ["https://images.unsplash.com/photo-1584990347449-39d4a677d2e8?w=500"],
    description: [
      "5-piece set",
      "Non-stick coating",
      "Induction compatible",
      "Easy to clean",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "hk02f51u",
    name: "Dinner Set 24 Pieces",
    category: "Home",
    price: 1999,
    offerPrice: 1599,
    image: ["https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500"],
    description: [
      "Microwave safe",
      "Elegant design",
      "Serves 6 people",
      "Dishwasher safe",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "hk03g52t",
    name: "Electric Kettle 1.5L",
    category: "Home",
    price: 1299,
    offerPrice: 999,
    image: ["https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500"],
    description: [
      "Auto shut-off",
      "Boil dry protection",
      "1500W power",
      "Stainless steel body",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "hk04h53s",
    name: "Vacuum Cleaner",
    category: "Home",
    price: 4999,
    offerPrice: 3999,
    image: ["https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500"],
    description: [
      "Powerful suction",
      "HEPA filter",
      "Bagless design",
      "Multiple attachments",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "hk05i54r",
    name: "Storage Container Set",
    category: "Home",
    price: 899,
    offerPrice: 699,
    image: ["https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500"],
    description: [
      "Airtight lids",
      "BPA free plastic",
      "Stackable design",
      "Set of 10 pieces",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Beauty & Personal Care
  {
    _id: "bp01j55q",
    name: "Face Wash Gel",
    category: "Beauty",
    price: 299,
    offerPrice: 249,
    image: ["https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500"],
    description: [
      "Deep cleansing",
      "All skin types",
      "Paraben free",
      "Dermatologically tested",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bp02k56p",
    name: "Hair Dryer Professional",
    category: "Beauty",
    price: 1999,
    offerPrice: 1599,
    image: ["https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500"],
    description: [
      "2000W power",
      "3 heat settings",
      "Cool shot button",
      "Lightweight design",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bp03l57o",
    name: "Body Lotion 400ml",
    category: "Beauty",
    price: 499,
    offerPrice: 399,
    image: ["https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500"],
    description: [
      "24-hour moisture",
      "Non-greasy formula",
      "Pleasant fragrance",
      "Suitable for all skin types",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bp04m58n",
    name: "Shampoo & Conditioner Set",
    category: "Beauty",
    price: 799,
    offerPrice: 649,
    image: ["https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500"],
    description: [
      "Sulfate-free formula",
      "Strengthens hair",
      "Adds shine",
      "500ml each",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bp05n59m",
    name: "Sunscreen SPF 50",
    category: "Beauty",
    price: 599,
    offerPrice: 499,
    image: ["https://images.unsplash.com/photo-1556228994-67aea0806add?w=500"],
    description: [
      "Broad spectrum protection",
      "Water resistant",
      "Non-comedogenic",
      "PA+++ rating",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.purusottamreddy321@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
