import React, { useEffect, useState } from "react";
import Reccipe from "./components/Reccipe";

export const BASE_URL = "http://127.0.0.1:8000";
const App = () => {
  const [receptek, setReceptek] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/recipes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setReceptek(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {receptek.map((recept) => (
        <Reccipe {...recept} />
      ))}
    </div>
  );
};

export default App;
