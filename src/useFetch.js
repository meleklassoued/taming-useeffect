import React, { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("useeffect use fetch"); 

    if (options.url) {
      fetch(options.url)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [options.url]);
  return {
    data,
  };
};
