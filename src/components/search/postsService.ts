import axios, { AxiosResponse } from 'axios';
import { Posts } from './interfaces';
export const fetchPosts = async (): Promise<Posts[]> => {
  try {
    const response: AxiosResponse<Posts[]> = await axios.get<Posts[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  } catch (error: any) {
    throw new Error('Failed to fetch posts');
  }
};
