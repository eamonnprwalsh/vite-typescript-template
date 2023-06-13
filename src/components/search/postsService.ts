import axios, { AxiosResponse } from 'axios';
import { Posts } from './interfaces';

export const fetchPosts = async (): Promise<Posts[]> => {
  const response: AxiosResponse<Posts[]> = await axios
    .get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
    .catch((error) => {
      return Promise.reject(error);
    });
  return response.data;
};
