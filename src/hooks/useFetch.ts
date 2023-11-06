import { useState, useEffect } from "react";
import { IApiResponse } from "../types/interfaces/IApiResponse";

const BASE_URL = process.env.REACT_APP_API_URL;
function useFetch<T>(endpoint: string): IApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}${endpoint}`, { signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const jsonData: T = await response.json();
        setData(jsonData);
      } catch (error: any) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [endpoint]);

  return { data, isLoading, error };
}

export default useFetch;
