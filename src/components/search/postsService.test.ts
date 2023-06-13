import axios from 'axios';
import { fetchPosts } from './postsService';

jest.mock('axios');

describe('fetchPosts', () => {
  it('should fetch posts successfully', async () => {
    const mockData = [
      { id: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, title: 'Post 2', body: 'Body 2' },
    ];

    // Mock the axios.get method to return a successful response
    (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

    // Call the fetchPosts function
    const result = await fetchPosts();

    // Check the result
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts'
    );
  });

  it('should throw an error if fetching posts fails', async () => {
    const errorMessage = 'Failed to fetch posts';

    // Mock the axios.get method to throw an error
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    // Call the fetchPosts function
    await expect(fetchPosts()).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts'
    );
  });
});
