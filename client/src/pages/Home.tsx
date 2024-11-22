import React from 'react';
import IntroDisplay from '../components/IntroDisplay';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-secondary-light">
      <header className="h-[80vh] py-20 bg-gradient-to-b from-secondary-dark to-primary-800 text-secondary-light">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 space-y-*">
          {/* Left column */}
          <div>
            <h1 className="text-4xl font-heading font-bold mb-6">Hi, I'm Ray.</h1>
            <p className="text-xl font-sans text-primary-200 mb-4">I'm a Full Stack Developer based in ______</p>
            <p className="text-xl font-sans text-primary-200 mb-20">Thanks for visiting!</p>
          <IntroDisplay />
          </div>
          {/* Right column */}
          <div className="flex justify-center items-center">
            {/* Placehodler for profile image */}
            <div className="w-60 h-60 rounded-full bg-gray-300">
              {/* Replace with an <img> tag later */}
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        { /**  
         * Need to add profile image to right
         * Need to move welcome sentence to left position
         * Need to move IntroDisplay to bottom left with smaller size
        */}
      </main>
    </div>
  );
};

export default Home;
