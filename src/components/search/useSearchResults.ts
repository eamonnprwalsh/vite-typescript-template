import { useState, useEffect } from 'react';
import { fetchPosts } from './postsService';
import { Posts } from './interfaces';

export const useSearchResults = (): Posts[] => {
  const [posts, setPosts] = useState<Posts[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchPosts();
        setPosts(results);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, []);
  return posts;
};
