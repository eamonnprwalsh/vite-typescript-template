import { useState, useEffect } from 'react';
import { fetchPosts } from './postsService';
import { Posts } from './interfaces';

export const useSearchResults = (): Posts[] => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [, /* error */ setError] = useState();
  let results: any;
  useEffect(() => {
    const fetchData = async () => {
      results = await fetchPosts().catch((error) => {
        setError(() => {
          throw new Error(error.message);
        });
      });
      setPosts(results);
    };
    fetchData();
  }, []);
  return posts;
};
