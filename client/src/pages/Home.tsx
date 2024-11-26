import React from 'react';
import Header from '../components/Home/Header';
import MainA from '../components/Home/MainA';
import MainB from '../components/Home/MainB';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-secondary-light">
      <Header />
      <div className="border-b border-dashed border-primary-400"></div>
      <main className="w-full bg-gradient-to-b from-primary-800 to-primary-500">
        <MainA />
        <MainB />
      </main>
      <div className="border-b border-dashed border-primary-400"></div>
      <footer className="w-full px-12 py-10 bg-gradient-to-b from-primary-500 to-secondary-dark text-primary-500 text-center">
        <p className="text-lg font-sans">{new Date().toLocaleDateString().replace(/\//g, '.')}</p>
      </footer>
    </div>
  );
};

export default Home;