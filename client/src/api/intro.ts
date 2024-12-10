import axios from 'axios';
import axiosInstance from './axiosInstance';

export const getIntroData = async () => {

  // try {
  //   const response = await axiosInstance.get('/intro'); 
  //   return response.data;
  // } catch (error) {
  //   console.error('Error fetching intro data:', error);
  //   if (axios.isAxiosError(error)) {
  //     console.error('It is Axios error:', error.response?.data);
  //   }
  //   throw error;
  // }

  return {
    name: "Raymond Kim",
    email: "hkapray@gmail.com",
    phone: "312.383.7496",
    linkedIn: "https://www.linkedin.com/in/raykim02",
    github: "https://github.com/rayk1m02"
  };

};
