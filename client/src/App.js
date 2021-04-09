import React, { useEffect, useState } from "react";
import "./App.css";

function url(path) {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : path;
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url("/api/"))
      .then((res) => res.json())
      .then((apiData) => {
        setData(apiData.data);
      });
  }, [setData]);

  return (
    <div className="App">
      <header className="App-header">{data}</header>
    </div>
  );
}

export default App;
