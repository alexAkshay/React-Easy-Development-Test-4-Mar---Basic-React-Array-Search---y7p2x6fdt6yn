import React from "react";
import { useState } from "react/cjs/react.production.min";

import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta",
];
const App = () => {
  const [list, setList] = useState("");
  const handleChange = (event) => {
    setList(event.target.value);
  };
  return (
    <div id="main">
      <input id="search-input" type="text" onChange={handleChange} />
      <ul>
        {list.map((data) => {
          return <li>{data}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
