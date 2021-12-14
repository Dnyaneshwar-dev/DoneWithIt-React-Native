import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, updateData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }
    setError(false);
    updateData(response.data);
  };
  return { request, data, error, loading };
};

export default useApi;
