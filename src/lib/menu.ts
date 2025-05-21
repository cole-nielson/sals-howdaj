import { MenuItemProps } from "@/components/MenuCard";

export const menuData: MenuItemProps[] = [
  // Protein Plates
  {
    id: "steak-shawarma-plate",
    name: "Steak Shawarma Plate",
    description: "Juicy, marinated steak over fragrant rice with fresh salad, hummus, and warm pita",
    price: "$15.99",
    image: "/lovable-uploads/141febf5-6aa5-4347-bc21-f189f85f5ee6.png",
    tags: ["Protein Plates", "Popular"]
  },
  {
    id: "chicken-shawarma-plate", 
    name: "Chicken Shawarma Plate",
    description: "Marinated chicken served with rice, salad, and garlic sauce",
    price: "$14.99",
    image: "/lovable-uploads/141febf5-6aa5-4347-bc21-f189f85f5ee6.png",
    tags: ["Protein Plates"]
  },
  {
    id: "half-steak-chicken-plate",
    name: "½ Steak & Chicken Plate",
    description: "The best of both worlds - our steak and chicken shawarma served together",
    price: "$16.99",
    image: "/lovable-uploads/dd692edd-2445-4490-ad54-882815cfc842.png",
    tags: ["Protein Plates"]
  },
  
  // Fried Dishes
  {
    id: "sambusa-dish",
    name: "Sambusa Dish",
    description: "Crispy pastry filled with seasoned meat or vegetables",
    price: "$9.99",
    image: "/lovable-uploads/a8c9548b-5dee-49ef-8607-66971758aff2.png",
    tags: ["Fried Dishes"]
  },
  {
    id: "falafel-dish",
    name: "Falafel Dish",
    description: "Crispy falafel served with tahini sauce and fresh vegetables",
    price: "$10.99",
    image: "/lovable-uploads/461af79c-ba3e-4d43-a832-48fb9dfa02e9.png",
    tags: ["Fried Dishes", "Vegetarian"]
  },
  {
    id: "combo-dish",
    name: "Combo Dish",
    description: "A generous portion of falafel and sambusa with our signature sauces",
    price: "$12.99",
    image: "/lovable-uploads/cc05a2ab-08a0-4a8c-b188-0bf69dd773cb.png",
    tags: ["Fried Dishes", "Popular"]
  },
  
  // Wraps
  {
    id: "steak-wrap",
    name: "Steak Wrap",
    description: "Marinated steak wrapped in warm pita with garlic sauce and pickles",
    price: "$11.99",
    image: "/images/placeholder.svg",
    tags: ["Wraps"]
  },
  {
    id: "chicken-wrap",
    name: "Chicken Wrap",
    description: "Seasoned chicken wrapped in warm pita with garlic sauce and pickles",
    price: "$10.99",
    image: "/images/placeholder.svg",
    tags: ["Wraps", "Popular"]
  },
  {
    id: "falafel-wrap",
    name: "Falafel Wrap",
    description: "Crispy falafel wrapped in pita with tahini, vegetables and house sauce",
    price: "$9.99",
    image: "/images/placeholder.svg",
    tags: ["Wraps", "Vegetarian"]
  },
  
  // Sides
  {
    id: "hummus",
    name: "Hummus",
    description: "Creamy hummus served with olive oil and paprika",
    price: "$4.99",
    image: "/images/placeholder.svg",
    tags: ["Sides", "Vegetarian", "Gluten-Free"]
  },
  {
    id: "jajik",
    name: "Jajik",
    description: "Refreshing yogurt with cucumber and mint",
    price: "$4.99",
    image: "/images/placeholder.svg",
    tags: ["Sides", "Vegetarian", "Gluten-Free"]
  },
  {
    id: "chickpea-salad",
    name: "Chickpea Salad",
    description: "A refreshing mix of chickpeas, vegetables, and herbs",
    price: "$5.99",
    image: "/images/placeholder.svg",
    tags: ["Sides", "Vegetarian", "Gluten-Free"]
  },
  {
    id: "rice",
    name: "Rice",
    description: "Aromatic basmati rice with herbs and spices",
    price: "$3.99",
    image: "/images/placeholder.svg",
    tags: ["Sides", "Vegetarian", "Gluten-Free"]
  },
  {
    id: "fries",
    name: "Fries",
    description: "Crispy golden fries with our special seasoning",
    price: "$3.99",
    image: "/images/placeholder.svg",
    tags: ["Sides", "Vegetarian"]
  },
  {
    id: "pickles",
    name: "Pickles",
    description: "House-made pickled vegetables",
    price: "$2.99",
    image: "/images/placeholder.svg",
    tags: ["Sides", "Vegetarian", "Gluten-Free"]
  },
  {
    id: "bread",
    name: "Bread",
    description: "Warm, fresh-baked pita bread",
    price: "$1.99",
    image: "/images/placeholder.svg",
    tags: ["Sides", "Vegetarian"]
  },
  
  // Drinks
  {
    id: "bottled-glass-soda",
    name: "Bottled Glass Soda",
    description: "Premium bottled soda",
    price: "$3.99",
    image: "/images/placeholder.svg",
    tags: ["Drinks"]
  },
  {
    id: "canned-soda",
    name: "Canned Soda",
    description: "Assorted canned sodas",
    price: "$1.99",
    image: "/images/placeholder.svg",
    tags: ["Drinks"]
  },
  {
    id: "laban",
    name: "Laban",
    description: "Traditional yogurt drink",
    price: "$3.99",
    image: "/images/placeholder.svg",
    tags: ["Drinks"]
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    description: "Refreshing bottled water",
    price: "$1.99",
    image: "/images/placeholder.svg",
    tags: ["Drinks"]
  },
  
  // Desserts
  {
    id: "desserts",
    name: "Desserts",
    description: "New fresh authentic Middle Eastern desserts available every week!",
    price: "Varies",
    image: "/images/placeholder.svg",
    tags: ["Desserts"]
  }
];

export const menuCategories = [
  { id: "all", name: "All Items" },
  { id: "protein plates", name: "Protein Plates" },
  { id: "fried dishes", name: "Fried Dishes" },
  { id: "wraps", name: "Wraps" },
  { id: "sides", name: "Sides" },
  { id: "drinks", name: "Drinks" },
  { id: "desserts", name: "Desserts" },
  { id: "vegetarian", name: "Vegetarian" },
  { id: "popular", name: "Popular" },
  { id: "gluten-free", name: "Gluten-Free" }
];
