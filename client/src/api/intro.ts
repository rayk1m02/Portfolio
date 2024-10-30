import axiosInstance from './axiosInstance';
export const getIntroData = async () => {
  try {
    const response = await axiosInstance.get('/intro');
    return response.data;
  } catch (error) {
    console.error('Error fetching intro data:', error);
    throw error;
  }
};
