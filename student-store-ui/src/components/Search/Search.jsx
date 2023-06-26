import * as React from "react";
import "./Search.css";
//import { useState } from "react"
export default function Search({ text, updateText, runSearch }) {
  //const [selectedIncrement, setSelectedIncrement] = useState(0);

  return (
    <div className="search">
      <input
        className="searchBar"
        type="text"
        placeholder="type here"
        value={text}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={runSearch} className="searchBarButton">
        Search
      </button>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
