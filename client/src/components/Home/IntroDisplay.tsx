import React, { useEffect, useState } from 'react';
import { getIntroData } from '../../api/intro';
import { Link } from 'react-router-dom';

const IntroDisplay: React.FC = () => {
  const [introData, setIntroData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching intro data...');
        // axios attempts to fetch data from express server 
        // using HTTP GET request to localhost:5001/api/into
        const data = await getIntroData();
        console.log('Intro data fetched:', data);
        setIntroData(data);
      } catch (error) {
        console.error('Failed to fetch intro data:', error);
      }
    };
    fetchData();
  }, []);

  // if (!introData) {
  //   return (
  //     <div className="flex justify-center items-center min-h-[200px]">
  //       <div className="text-accent-blue text-xs text-center">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-[335px] mx-auto p-5 rounded-lg text-sm text-center">      
      <div className="space-y-4">
        <div className="flex items-center text-accent-blue font-semibold">
          <span className="mr-2">📧</span>
          <span className="text-primary-200">{introData.email || "hkapray@gmail.com"}</span>
        </div>
        <div className="flex items-center font-semibold">
          <span className="mr-2">🧳</span>
          <a 
            href={introData.linkedIn || "https://www.linkedin.com/in/raykim02"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-200 hover:text-primary-50 transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="flex items-center font-semibold">
          <span className="mr-2">🤖</span>
          <a 
            href={introData.github || "https://github.com/rayk1m02"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-200 hover:text-primary-50 transition-colors duration-200"
          >
            GitHub ↗
          </a>
        </div>
        <div className="flex items-center text-accent-blue font-semibold">
          <span className="mr-2">📄</span>
          <Link 
            to="/cv" 
            target="_blank"
            className="text-primary-200 hover:text-primary-50 transition-colors"
          >
            Resume ↗
          </Link>
        </div>
      </div>
    </div>
  );
  
};

export default IntroDisplay;


