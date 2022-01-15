import { useState, useEffect, useCallback } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const request = useCallback(async (url, options) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
    return data;
  }, []);

  return { data, error, isLoading, request };
};

export default useFetch;
