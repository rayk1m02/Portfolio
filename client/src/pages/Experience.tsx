import React from 'react';
import { Chrono } from "react-chrono";
import './Experience.module.css'; 
import { items } from '../components/Experience/ExperienceData';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-dark to-primary-800 text-secondary-light pt-20">
      <div className="max-w-4xl mx-auto pt-10">
        <Chrono 
          items={items}
          mode="VERTICAL_ALTERNATING"
          cardHeight={150}
          theme={{
            primary: '#94a3b8', // timeline color
            secondary: 'rgba(255, 255, 255, 0.1)', // title background 
            cardBgColor: '#1e293b', // card background
            titleColor: '#e2e8f0', // title color
            titleColorActive: '#ffffff', // active title color
          }}                  
          disableToolbar={true}
          lineWidth={3}
        />
      </div>
    </div>
  );
};

export default Experience;
