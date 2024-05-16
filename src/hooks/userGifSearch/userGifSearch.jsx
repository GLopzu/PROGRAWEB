
import { useState, useEffect, useCallback } from 'react';
import debounce from 'just-debounce-it';

const useGifSearch = (apiKey) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchGifs = useCallback(
    debounce(async (searchQuery) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=10`
        );
        const data = await response.json();
        setResults(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GIFs:', error);
        setLoading(false);
      }
    }, 300),
    [apiKey]
  );

  useEffect(() => {
    if (query.trim() !== '') {
      searchGifs(query);
    } else {
      setResults([]);
    }
  }, [query, searchGifs]);

  return { query, setQuery, loading, results };
};

export default useGifSearch;
