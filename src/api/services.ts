import axiosClient from './apiHelper';

export const getNews = async () => {
  try {
    const response = await axiosClient.get('/news?category=general');
    return response.data;
  } catch (error) {
    throw error;
  }
};
