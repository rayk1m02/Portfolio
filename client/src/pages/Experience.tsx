import React from 'react';
import { Chrono } from "react-chrono";
import './Experience.module.css'; 

const Experience: React.FC = () => {
  const items = [
    {
      title: "New Graduate",
      cardTitle: "Wheaton College, IL",
      cardSubtitle: "August 2020 - May 2024",
      cardDetailedText: "B.S. Computer Science, Ecnomomics",
      media: {
        type: "IMAGE",
        source: {
          url: "/img/Wheaton.JPG"
        }
      }
    },
    {
      title: "Software Engineer Intern",
      cardTitle: "First Trust Portfolios",
      cardSubtitle: "May 2023 - July 2023",
      cardDetailedText: "Delphi, SQL, Version Control",
      media: {
        type: "IMAGE",
        source: {
          url: "/img/FirstTrust.JPG"
        }
      }
    },
    {
      title: "Product Management Intern",
      cardTitle: "Equinix",
      cardSubtitle: "May 2022 - August 2022",
      cardDetailedText: "UX/UI, Scrum, Intern ambassador",
      media: {
        type: "IMAGE",
        source: {
          url: "/img/Equinix.JPG"
        }
      }
    },
    {
      title: "Project Coordinator",
      cardTitle: "Academic & Institutional Technology",
      cardSubtitle: "March 2022 - December 2022",
      cardDetailedText: "Technical support, Asset management",
      media: {
        type: "IMAGE",
        source: {
          url: "/img/AIT.JPG"
        }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-dark to-primary-800 text-secondary-light pt-20">
      <div className="max-w-4xl mx-auto pt-10">
        <Chrono 
          items={items}
          mode="VERTICAL_ALTERNATING"
          cardHeight={150}
          theme={{
            primary: '#94a3b8', // timeline color
            secondary: 'rgba(255, 255, 255, 0.1)', // date color
            cardBgColor: '#1e293b', // card background
            titleColor: '#e2e8f0', // title color
            titleColorActive: '#ffffff', // active title color
            cardSubtitleColor: '#cbd5e1', // explicitly set subtitle/date color
          }}                  
          disableToolbar={true}
          lineWidth={3}
          fontSizes={{
            cardSubtitle: '0.9rem',
            cardText: '1rem',
            cardTitle: '1.2rem',
            title: '1.2rem',
          }}
        />
      </div>
    </div>
  );
};

export default Experience;
