import React from 'react';

export interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags?: string[];
  imagePosition?: string;
}

const MenuCard: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  image,
  tags = [],
  imagePosition = 'center'
}) => {
  return (
    <div className="bg-desert-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover-scale">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-playfair text-xl font-bold">{name}</h3>
          <span className="font-medium text-desert-orange">{price}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            let tagClass = '';
            
            switch(tag.toLowerCase()) {
              case 'veg':
              case 'vegetarian':
                tagClass = 'veg';
                break;
              case 'gf':
              case 'gluten-free':
                tagClass = 'gf';
                break;
              case 'spicy':
                tagClass = 'spicy';
                break;
              case 'popular':
                tagClass = 'popular';
                break;
              default:
                tagClass = '';
            }
            
            return (
              <span key={tag} className={`menu-tag ${tagClass}`}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
