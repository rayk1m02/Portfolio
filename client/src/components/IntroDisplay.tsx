import React, { useEffect, useState } from 'react';
import { getIntroData } from '../api/intro';

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

  if (!introData) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">      
      <div className="space-y-4">

        <div className="flex items-center text-gray-700">
          <span className="mr-2">✉️</span>
          <span className="hover:text-blue-600 transition-colors">
            {introData.email}
          </span>
        </div>

        <div className="flex items-center text-gray-700">
          <span className="mr-2">📞</span>
          <span>{introData.phone}</span>
        </div>

        <div className="flex items-center text-gray-700">
          <span className="mr-2">🧳</span>
          <a 
            href={`https://${introData.linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            {introData.linkedIn}
          </a>
        </div>

        <div className="flex items-center text-gray-700">
          <span className="mr-2">🤖</span>
          <a 
            href={`https://${introData.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            {introData.github}
          </a>
        </div>

        <div className="flex items-center text-gray-700">
          <span className="mr-2">📄</span>
          <span className="font-medium">Resume</span>
        </div>
        
      </div>
    </div>
  );
  
};

export default IntroDisplay;
