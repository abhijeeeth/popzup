import React from 'react';
import { FcElectronics ,  } from "react-icons/fc";
import { FaCar ,  } from "react-icons/fa";

import { MdTableBar } from "react-icons/md";


const categories = [
  { name: 'Electronics', icon: <FcElectronics />  },
  { name: 'Cars', icon: <FaCar /> },
  { name: 'Furniture', icon: <MdTableBar /> },
  { name: 'Jobs', icon: '💼' },
  { name: 'Real Estate', icon: '🏠' },
  { name: 'Services', icon: '🛠️' },
  { name: 'Jobs', icon: '💼' },
  { name: 'Real Estate', icon: '🏠' },
  { name: 'Services', icon: '🛠️' },
  { name: 'Jobs', icon: '💼' },
  { name: 'Real Estate', icon: '🏠' },
  { name: 'Services', icon: '🛠️' },

];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-mono drop-shadow-sm text-gray-500 font-bold text-center mb-8">Explore Categories</h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
