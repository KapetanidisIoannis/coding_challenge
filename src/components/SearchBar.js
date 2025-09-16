import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div /*style={{ marginBottom: "20px" }}*/>
      <input
        type="text"
        placeholder="Search repositories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        /*style={{
          paddng: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}*/
      />
    </div>
  );
}

export default SearchBar;
