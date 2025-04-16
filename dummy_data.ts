
import { Product } from './app/types';

export const dummyProducts: Product[] = [
    {
      id: 1,
      name: "Premium Backpack",
      price: 59.99,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      description: "Water-resistant travel backpack with USB charging port",
      category: "Bags",
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      name: "Cotton T-Shirt",
      price: 19.99,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      description: "100% organic cotton unisex t-shirt",
      category: "Clothing",
      rating: 4.2,
      inStock: true
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 129.99,
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      description: "Noise-cancelling Bluetooth headphones with 30hr battery",
      category: "Electronics",
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: "Leather Wallet",
      price: 39.99,
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      description: "Genuine leather bifold wallet with RFID protection",
      category: "Accessories",
      rating: 4.3,
      inStock: true
    },
    {
      id: 5,
      name: "Smart Watch",
      price: 199.99,
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      description: "Fitness tracker with heart rate monitor and GPS",
      category: "Electronics",
      rating: 4.6,
      inStock: true
    },
    {
      id: 6,
      name: "Running Shoes",
      price: 89.99,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      description: "Lightweight running shoes with cushioned soles",
      category: "Footwear",
      rating: 4.4,
      inStock: true
    },
    {
      id: 7,
      name: "Coffee Maker",
      price: 49.99,
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      description: "12-cup programmable coffee maker",
      category: "Home",
      rating: 4.1,
      inStock: true
    },
    {
      id: 8,
      name: "Yoga Mat",
      price: 29.99,
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_SY879_.jpg",
      description: "Non-slip eco-friendly yoga mat",
      category: "Fitness",
      rating: 4.3,
      inStock: true
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      description: "Portable waterproof speaker with 20hr playtime",
      category: "Electronics",
      rating: 4.5,
      inStock: true
    },
    {
      id: 10,
      name: "Denim Jeans",
      price: 49.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      description: "Slim fit stretch denim jeans",
      category: "Clothing",
      rating: 4.0,
      inStock: true
    },
    // Continuing the pattern up to 100 items...
    {
      id: 11,
      name: "Wireless Earbuds",
      price: 99.99,
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      description: "True wireless earbuds with charging case",
      category: "Electronics",
      rating: 4.4,
      inStock: true
    },
    {
      id: 12,
      name: "Stainless Steel Water Bottle",
      price: 24.99,
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      description: "Insulated 20oz water bottle",
      category: "Accessories",
      rating: 4.6,
      inStock: true
    },
    {
      id: 13,
      name: "Smartphone Stand",
      price: 14.99,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      description: "Adjustable phone stand for desk use",
      category: "Accessories",
      rating: 4.0,
      inStock: true
    },
    {
      id: 14,
      name: "Laptop Backpack",
      price: 45.99,
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      description: "Padded compartment backpack for 15\" laptops",
      category: "Bags",
      rating: 4.3,
      inStock: true
    },
    {
      id: 15,
      name: "Fitness Tracker",
      price: 79.99,
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      description: "Water-resistant activity tracker with OLED display",
      category: "Electronics",
      rating: 4.2,
      inStock: true
    },
    {
      id: 16,
      name: "Electric Toothbrush",
      price: 39.99,
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      description: "Rechargeable toothbrush with 3 cleaning modes",
      category: "Health",
      rating: 4.5,
      inStock: true
    }
  ];

  // Mock data for products
  export const mockProducts: Product[] = Array(20).fill(null).map((_, i) => ({
    id:  i + 20,
    name: `Product ${i + 18}`,
    price: Math.floor(Math.random() * 100) + 10,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    description: `Product ${i + 1}`,
    category: 'Category1',
    rating: 4.5,
    inStock: Math.random() > 0.2
  }));
