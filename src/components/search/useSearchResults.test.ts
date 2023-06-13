import { renderHook, act } from '@testing-library/react-hooks';
import { useSearchResults } from './useSearchResults';
import { fetchPosts } from './postsService';

jest.mock('./postsService');

describe('useSearchResults', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and return posts', async () => {
    const mockPosts = [
      { id: 1, title: 'Post 1', body: 'Body of Post 1' },
      { id: 2, title: 'Post 2', body: 'Body of Post 2' },
    ];

    (fetchPosts as jest.Mock).mockResolvedValueOnce(mockPosts);

    await act(async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useSearchResults()
      );
      expect(result.current).toEqual([]);

      await waitForNextUpdate();

      expect(result.current).toEqual(mockPosts);
      expect(fetchPosts).toHaveBeenCalledTimes(1);
    });
  });

  it('should handle error during fetching', async () => {
    const errorMessage = 'Failed to fetch posts';
    (fetchPosts as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
    await act(async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useSearchResults()
      );

      expect(result.current).toEqual([]);

      await waitForNextUpdate();

      expect(result.error).toEqual(new Error(errorMessage));
      expect(fetchPosts).toHaveBeenCalledTimes(1);
    });
  });
});
