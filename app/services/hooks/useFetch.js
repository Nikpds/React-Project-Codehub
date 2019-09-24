import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url, method, body = null) {
  const config = {
    method: method,
    url: url,
    responseType: "json",
    data: body,
  };

  const [data, setData] = useState({ data: null });

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios(config);
        if (response) setData(response);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return data;
}
