
import { MenuItemProps } from "@/components/MenuCard";

export const menuData: MenuItemProps[] = [
  {
    id: "falafel-plate",
    name: "Falafel Plate",
    description: "Crispy falafel served with hummus, tahini sauce, and fresh vegetables",
    price: "$12.99",
    image: "/lovable-uploads/461af79c-ba3e-4d43-a832-48fb9dfa02e9.png",
    tags: ["Vegetarian", "Popular"]
  },
  {
    id: "chicken-plate", 
    name: "Grilled Chicken Plate",
    description: "Marinated chicken served with rice, salad, and garlic sauce",
    price: "$15.99",
    image: "/lovable-uploads/141febf5-6aa5-4347-bc21-f189f85f5ee6.png",
    tags: ["Popular", "Gluten-Free"]
  },
  {
    id: "kofta-plate",
    name: "Kofta Plate",
    description: "Seasoned ground beef kebabs served with rice, hummus and pita bread",
    price: "$16.99",
    image: "/lovable-uploads/dd692edd-2445-4490-ad54-882815cfc842.png",
    tags: ["Popular"]
  },
  {
    id: "samosa-plate",
    name: "Samosa Plate",
    description: "Crispy pastry filled with spiced vegetables served with house sauce",
    price: "$9.99",
    image: "/lovable-uploads/a8c9548b-5dee-49ef-8607-66971758aff2.png",
    tags: ["Vegetarian"]
  },
  {
    id: "combo-plate",
    name: "Combo Special",
    description: "A generous portion of falafel, samosas and fries with our signature sauces",
    price: "$18.99",
    image: "/lovable-uploads/cc05a2ab-08a0-4a8c-b188-0bf69dd773cb.png",
    tags: ["Popular"]
  },
  {
    id: "hummus-plate",
    name: "Hummus Plate",
    description: "Creamy hummus served with olive oil, paprika and warm pita bread",
    price: "$8.99",
    image: "/images/placeholder.svg",
    tags: ["Vegetarian", "Gluten-Free"]
  },
  {
    id: "shawarma-wrap",
    name: "Chicken Shawarma Wrap",
    description: "Seasoned chicken wrapped in warm pita with garlic sauce and pickles",
    price: "$13.99",
    image: "/images/placeholder.svg",
    tags: ["Popular"]
  },
  {
    id: "falafel-wrap",
    name: "Falafel Wrap",
    description: "Crispy falafel wrapped in pita with tahini, vegetables and house sauce",
    price: "$11.99",
    image: "/images/placeholder.svg",
    tags: ["Vegetarian"]
  }
];

export const menuCategories = [
  { id: "all", name: "All Items" },
  { id: "vegetarian", name: "Vegetarian" },
  { id: "popular", name: "Popular" },
  { id: "gluten-free", name: "Gluten-Free" }
];
