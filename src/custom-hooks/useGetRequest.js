import axios from 'axios';
import { useState } from 'react';

export const useGetRequest = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { token } = JSON.parse(sessionStorage.getItem(`adminData`));

  const getDefault = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return { loading, getDefault, data };
};
