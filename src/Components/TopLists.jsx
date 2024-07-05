import React from 'react';

const TopLists = () => {
  const cardsData = [
    { title: 'Top List', description: 'This is the description for card 1.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
    { title: 'Top List', description: 'This is the description for card 2.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
    { title: 'Top List', description: 'This is the description for card 3.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
    { title: 'Top List', description: 'This is the description for card 4.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
    { title: 'Top List', description: 'This is the description for card 5.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
    { title: 'Top List', description: 'This is the description for card 6.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopLists;
