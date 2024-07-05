import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <div className=" flex flex-col items-center p-4">
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
      </div>
      <div className="w-[100%] max-w-6xl">
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
          <div>
            <img src="https://images.unsplash.com/photo-1603486002664-a7319421e133?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1549213821-4708d624e1d1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default App;
