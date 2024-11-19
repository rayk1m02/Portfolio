import React from 'react';
import IntroDisplay from '../components/IntroDisplay';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-secondary-light">
      <header className="py-20 bg-gradient-to-b from-secondary-dark to-primary-800 text-secondary-light">
        <h1 className="text-4xl font-heading font-bold mb-4">Hi, I'm Ray.</h1>
        <p className="text-xl font-sans text-primary-200">Welcome to my portfolio!</p>
      </header>
      <main className="container mx-auto px-4 py-8">
        <IntroDisplay />
      </main>
    </div>
  );
};

export default Home;
