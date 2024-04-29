import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  //async function to fetch data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const resData = await response.json();
      setData(resData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  //fetching datafetchData from url
  useEffect(() => {
    fetchData();
  }, [url]);
  return { loading, data, error };
};

export default useFetch;
