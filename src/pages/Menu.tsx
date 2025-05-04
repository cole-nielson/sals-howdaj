
import React, { useState, useEffect } from 'react';
import MenuCard from '@/components/MenuCard';
import { menuData, menuCategories } from '@/lib/menu';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(menuData);

  // Filter menu items based on active category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(menuData);
    } else {
      const filtered = menuData.filter(item => 
        item.tags?.some(tag => tag.toLowerCase() === activeCategory)
      );
      setFilteredItems(filtered);
    }
  }, [activeCategory]);

  return (
    <>
      {/* Menu Header */}
      <section className="pt-32 pb-12 px-4 bg-desert-tan">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg mb-8">
            Discover our authentic Middle Eastern flavors, crafted with love and tradition.
            Each dish tells a story from the streets of Damascus.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-desert-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {menuCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-desert-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <MenuCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                tags={item.tags}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-2">No menu items found</h3>
              <p className="text-gray-500">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-desert-tan">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-playfair text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="mb-6">
            Visit our food truck today or contact us for catering options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/location"
              className="bg-brand-red hover:bg-opacity-90 text-white px-6 py-3 rounded-full transition-colors"
            >
              Find Our Truck
            </a>
            <a
              href="/catering"
              className="bg-desert-orange hover:bg-opacity-90 text-white px-6 py-3 rounded-full transition-colors"
            >
              Catering Options
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
