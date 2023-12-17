import React, { useState } from "react";

function Search({ setSearchInput }) {
  const [localSearchInput, setLocalSearchInput] = useState("")

  function handleSearch(e){
    setLocalSearchInput(e.target.value)
    setSearchInput(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={localSearchInput}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
