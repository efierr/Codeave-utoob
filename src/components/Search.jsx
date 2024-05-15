import React, { useState } from "react";
import "./Search.css";
import { searchForVideos } from "../utils/youtubeFetch.js";

export default function Search({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSearch() {
    // search query
    // fetch for videos based off search q
    console.log(searchQuery);
    searchForVideos(searchQuery)
      .then((response) => {
        console.log(response);
        setSearchResults(response);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="search_bar">
      <input
        type="text"
        id="search"
        placeholder="search videos"
        value={searchQuery}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>search</button>
    </div>
  );
}
