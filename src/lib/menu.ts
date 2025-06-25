import { MenuItemProps } from "@/components/MenuCard";

export const menuData: MenuItemProps[] = [
  // Plates
  {
    id: "chicken-shawarma-plate",
    name: "Chicken Shawarma Plate",
    description: "Marinated chicken served with rice, salad, hummus, and warm pita",
    price: "$16",
    image: "/updated_img/RadionStudios-20.jpeg",
    tags: ["Plates", "Popular"],
    imagePosition: "center 60%",
  },
  {
    id: "beef-shawarma-plate", 
    name: "Beef Shawarma Plate",
    description: "Juicy, marinated beef over fragrant rice with fresh salad, hummus, and warm pita",
    price: "$18",
    image: "/updated_img/RadionStudios-6.jpeg",
    tags: ["Plates"],
    imagePosition: "center 60%",
  },
  {
    id: "half-chicken-beef-plate",
    name: "1/2 Chicken & 1/2 Beef Plate",
    description: "The best of both worlds - our chicken and beef shawarma served together",
    price: "$17",
    image: "/updated_img/RadionStudios-5.jpeg",
    tags: ["Plates", "Popular"],
    imagePosition: "center 60%",
  },
  
  // Fried Dishes
  {
    id: "falafel-dish",
    name: "Falafel Dish",
    description: "Crispy falafel served with tahini sauce, rice, salad, and pita bread",
    price: "$17",
    image: "/updated_img/RadionStudios-22.jpeg",
    tags: ["Fried Dishes", "Vegetarian"]
  },
  {
    id: "sambusa-dish",
    name: "Sambusa Dish",
    description: "Crispy pastry triangles filled with seasoned meat, served with rice and salad",
    price: "$18",
    image: "/updated_img/RadionStudios-24.jpeg",
    tags: ["Fried Dishes"]
  },
  {
    id: "combo-dish",
    name: "Combo Dish",
    description: "A generous portion of falafel and sambusa with rice, salad, and signature sauces",
    price: "$25",
    image: "/updated_img/RadionStudios-16.jpeg",
    tags: ["Fried Dishes", "Popular"]
  },
  
  // Wraps
  {
    id: "chicken-shawarma-wrap",
    name: "Chicken Shawarma Wrap",
    description: "Seasoned chicken wrapped in warm pita with garlic sauce and pickles",
    price: "$11",
    image: "/lovable-uploads/34ab7668-b0a7-4272-ba68-9ad5cb53bfc2.png",
    tags: ["Wraps", "Popular"]
  },
  {
    id: "beef-shawarma-wrap",
    name: "Beef Shawarma Wrap",
    description: "Marinated beef wrapped in warm pita with garlic sauce and pickles",
    price: "$13",
    image: "/lovable-uploads/34ab7668-b0a7-4272-ba68-9ad5cb53bfc2.png",
    tags: ["Wraps"]
  },
  {
    id: "falafel-wrap",
    name: "Falafel Wrap",
    description: "Crispy falafel wrapped in pita with tahini, vegetables and house sauce",
    price: "$11",
    image: "/lovable-uploads/34ab7668-b0a7-4272-ba68-9ad5cb53bfc2.png",
    tags: ["Wraps", "Vegetarian"]
  },
  
  // Sides
  {
    id: "hummus-with-bread",
    name: "Hummus with Bread",
    description: "Creamy hummus served with olive oil, paprika, and warm pita bread",
    price: "$7",
    image: "/updated_img/RadionStudios-4.jpeg",
    tags: ["Sides", "Vegetarian", "Gluten-Free"]
  },
  {
    id: "jajik-with-bread",
    name: "Jajik with Bread",
    description: "Refreshing yogurt with cucumber and mint, served with pita bread",
    price: "$7",
    image: "/updated_img/RadionStudios-35.jpeg",
    tags: ["Sides", "Vegetarian", "Gluten-Free"]
  },
  {
    id: "chickpea-salad",
    name: "Chickpea Salad",
    description: "A refreshing mix of chickpeas, vegetables, and herbs",
    price: "$7",
    image: "/updated_img/RadionStudios-35.jpeg",
    tags: ["Sides", "Vegetarian", "Gluten-Free"]
  },
  
  // Drinks
  {
    id: "laban",
    name: "Laban",
    description: "Traditional Middle Eastern yogurt drink",
    price: "$4",
    image: "/updated_img/RadionStudios-1.jpeg",
    tags: ["Drinks"]
  },
  
  // Desserts
  {
    id: "burma",
    name: "Burma",
    description: "Traditional Middle Eastern pastry with nuts and honey",
    price: "$1.50",
    image: "/updated_img/RadionStudios-30.jpeg",
    tags: ["Desserts"],
    imagePosition: "center 85%",
  }
];

export const menuCategories = [
  { id: "all", name: "All Items" },
  { id: "plates", name: "Plates" },
  { id: "fried dishes", name: "Fried Dishes" },
  { id: "wraps", name: "Wraps" },
  { id: "sides", name: "Sides" },
  { id: "desserts", name: "Desserts" }
];
