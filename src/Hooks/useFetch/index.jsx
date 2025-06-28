import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useFetch(url) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur lors du chargement");
        }
        return res.json();
      })
      .then((json) => {
        if (!Array.isArray(json)) {
          throw new Error("Format invalide");
        }
        setData(json);
      })
      .catch((err) => {
        console.error("Erreur fetch :", err);
        navigate("/404"); // redirection si échec
      });
  }, [url, navigate]);

  return data;
}

export default useFetch;
