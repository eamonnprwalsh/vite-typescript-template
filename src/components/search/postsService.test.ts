import axios from 'axios';
import { act } from '@testing-library/react';
import { fetchPosts } from './postsService';

jest.mock('axios');

describe('fetchPosts', () => {
  it('should fetch posts successfully', async () => {
    const mockResponse = [
      { id: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, title: 'Post 2', body: 'Body 2' },
    ];

    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockResponse });

    let result;

    await act(async () => {
      result = await fetchPosts();
    });

    expect(result).toEqual(mockResponse);

    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts'
    );
  });

  it('should handle errors', async () => {
    const mockError = new Error('Failed to fetch posts');

    (axios.get as jest.Mock).mockRejectedValueOnce(mockError);

    await act(async () => {
      await expect(fetchPosts()).rejects.toThrowError(mockError);
    });
  });
});
