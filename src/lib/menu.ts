import { MenuItemProps } from "@/components/MenuCard";

export const menuData: MenuItemProps[] = [
  // Plates
  {
    id: "chicken-shawarma-plate",
    name: "Chicken Shawarma Plate",
    description: "Marinated chicken served with rice, salad, hummus, and warm pita",
    price: "$16",
    image: "/images/menu/chicken-shawarma-plate.jpeg",
    tags: ["Plates", "Popular"],
    imagePosition: "center 60%",
  },
  {
    id: "beef-shawarma-plate", 
    name: "Beef Shawarma Plate",
    description: "Juicy, marinated beef served with hummus, rice, side salad, jajik, tartoor & sweet pomegranate sauce and warm Iraqi bread.",
    price: "$18",
    image: "/images/menu/beef-shawarma-plate.jpeg",
    tags: ["Plates"],
    imagePosition: "center 60%",
  },
  {
    id: "half-chicken-beef-plate",
    name: "1/2 Chicken & 1/2 Beef Plate",
    description: "The best of both worlds - our chicken and beef shawarma served together",
    price: "$17",
    image: "/images/menu/half-chicken-beef-plate.jpeg",
    tags: ["Plates", "Popular"],
    imagePosition: "center 60%",
  },
  
  // Fried Dishes
  {
    id: "falafel-dish",
    name: "Falafel Dish",
    description: "Crispy falafel served with tahini sauce, rice, salad, and pita bread",
    price: "$17",
    image: "/images/menu/falafel-dish.jpeg",
    tags: ["Fried Dishes", "Vegetarian"]
  },
  {
    id: "sambusa-dish",
    name: "Sambusa Dish",
    description: "Crispy pastry triangles filled with seasoned meat, served with rice and salad",
    price: "$18",
    image: "/images/menu/sambusa-dish.jpeg",
    tags: ["Fried Dishes"]
  },
  {
    id: "combo-dish",
    name: "Combo Dish",
    description: "4 falafel, 4 Sambusas, rice, side salad, hummus, jajik, sauces, meat or falafel wrap and bread",
    price: "$25",
    image: "/images/menu/combo-dish.jpeg",
    tags: ["Fried Dishes", "Popular"]
  },
  
  // Wraps
  {
    id: "chicken-shawarma-wrap",
    name: "Chicken shawarma wrap meal",
    description: "Seasoned chicken wrapped in warm pita with garlic sauce and pickles",
    price: "$16",
    image: "/images/menu/wrap-placeholder.png",
    tags: ["Wraps", "Popular"]
  },
  {
    id: "beef-shawarma-wrap",
    name: "Beef Shawarma wrap meal",
    description: "Marinated beef wrapped in warm pita with garlic sauce and pickles",
    price: "$18",
    image: "/images/menu/wrap-placeholder.png",
    tags: ["Wraps"]
  },
  {
    id: "falafel-wrap",
    name: "Falafel wrap meal",
    description: "Crispy falafel wrapped in pita with tahini, vegetables and house sauce",
    price: "$17",
    image: "/images/menu/wrap-placeholder.png",
    tags: ["Wraps", "Vegetarian"]
  },
  
  // Sides
  {
    id: "hummus-with-bread",
    name: "Hummus with Bread",
    description: "Creamy hummus served with olive oil, paprika, and warm pita bread",
    price: "$7",
    image: "/images/menu/hummus-with-bread.jpeg",
    tags: ["Sides", "Vegetarian", "Gluten-Free"]
  },
  {
    id: "jajik-with-bread",
    name: "Jajik with Bread",
    description: "Refreshing yogurt with cucumber and mint, served with pita bread",
    price: "$7",
    image: "/images/menu/jajik-with-bread.jpg",
    tags: ["Sides", "Vegetarian", "Gluten-Free"]
  },
  {
    id: "chickpea-salad",
    name: "Chickpea Salad",
    description: "A refreshing mix of chickpeas, vegetables, and herbs",
    price: "$7",
    image: "/images/menu/chickpea-salad.jpeg",
    tags: ["Sides", "Vegetarian", "Gluten-Free"]
  },
  
  // Drinks
  {
    id: "laban",
    name: "Laban",
    description: "Traditional Middle Eastern yogurt drink",
    price: "$4",
    image: "/images/menu/laban.jpeg",
    tags: ["Drinks"]
  },
  
  // Desserts
  {
    id: "burma",
    name: "Burma",
    description: "Traditional Middle Eastern pastry with nuts and honey",
    price: "$1.50",
    image: "/images/menu/burma.jpeg",
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
