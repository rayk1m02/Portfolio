import React from 'react';
import { Chrono } from "react-chrono";

const Experience: React.FC = () => {
  const items = [
    {
      title: "Software Developer Intern",
      cardTitle: "First Trust",
      cardSubtitle: "May 2023 - July 2023",
      cardDetailedText: "Skills: Delphi, SQL, Version Control",
      media: {
        type: "IMAGE",
        source: {
          url: "/img/firsttrust-logo.jpg"
        }
      }
    },
    {
      title: "Product Management Intern",
      cardTitle: "Equinix",
      cardSubtitle: "May 2022 - August 2022",
      cardDetailedText: "Skills: UX/UI, Cross-collaboration, Agile method, Intern ambassador",
      media: {
        type: "IMAGE",
        source: {
          url: "/img/firsttrust-logo.jpg"
        }
      }
    },
    {
      title: "Project Coordinator",
      cardTitle: "Academic & Institutional Technology",
      cardSubtitle: "March 2022 - December 2022",
      cardDetailedText: "Skills: Technical support, Asset/vendor management",
      media: {
        type: "IMAGE",
        source: {
          url: "/img/firsttrust-logo.jpg"
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
          cardHeight={200}
          theme={{
            primary: '#333',
            secondary: '#fff',
            cardBgColor: '#f5f5f5',
            titleColor: '#333',
            titleColorActive: '#000',
          }}
        />
      </div>
    </div>
  );
};

export default Experience;
