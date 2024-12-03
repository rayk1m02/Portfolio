import React from 'react';
import IntroDisplay from './IntroDisplay';

const Header = () => {
  return (
    <header className="h-[79vh] bg-gradient-to-b from-secondary-dark to-primary-800 text-secondary-light">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-2 md:pt-20">
        {/* Left column */}
        <div className="mt-[100px]">
          <h1 className="text-5xl font-heading font-bold mb-12 pt-2">Hi, I'm Ray</h1>
          <p className="text-2xl font-sans text-primary-200 mb-1 font-semibold">I'm a Full Stack Developer </p>
          <p className="text-2xl font-sans text-primary-200 mb-20 font-semibold">based in Texas.</p>
          <p className="text-xl font-sans italic font-light text-primary-600 pt-5">Thanks for visiting my portfolio!</p>
        </div>
        {/* Right column */}
        <div className="flex flex-row justify-center items-center pl-20 pt-8">
          <img 
            src='/img/Home/pp.JPG'
            alt="Profile Picture" 
            className="w-[250px] h-[250px] rounded-full object-cover"
          />
          <div className="ml-5">
            <IntroDisplay />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;