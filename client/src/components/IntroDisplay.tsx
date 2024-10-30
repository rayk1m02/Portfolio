import React, { useEffect, useState } from 'react';
import { getIntroData } from '../api/intro';

const IntroDisplay: React.FC = () => {
  const [introData, setIntroData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching intro data...');
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{introData.name}</h1>
      <p>Email: {introData.email}</p>
      <p>Phone: {introData.phone}</p>
      <p>LinkedIn: <a href={`https://${introData.linkedIn}`} target="_blank" rel="noopener noreferrer">{introData.linkedIn}</a></p>
      <p>GitHub: <a href={`https://${introData.github}`} target="_blank" rel="noopener noreferrer">{introData.github}</a></p>
    </div>
  );
};

export default IntroDisplay;
