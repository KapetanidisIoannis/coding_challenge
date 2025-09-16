import React, { useState, useEffect } from "react";
import RepoCard from "./components/RepoCard";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  //state για να κραταμε repos
  const [repos, setRepos] = useState([]);
  //state για να ξερουμε αν φορτωνει ακομα
  const [loading, setLoading] = useState(true);
  //state για search
  const [searchTerm, setSearchTerm] = useState("");
  //default ταξινομηση
  const [sortOption, setSortOption] = useState("name");

  useEffect(() => {
    //καλουμε το API
    fetch("https://api.github.com/users/google/repos?per_page=100")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repos", error);
        setLoading(false);
      });
  }, []);

  //φιλτραρουμε τα repos με βαση το search
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //sorting
  const sortedRepos = [...filteredRepos].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "stars") {
      return b.stargazers_count - a.stargazers_count;
    }
    return 0;
  });

  return (
    <div className="app-container">
      <h1>Google GitHub Repositories</h1>
      {/*search input */}
      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Sorting dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="name">Name (A-Z)</option>
          <option value="stars">Stars (desc)</option>
        </select>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="repo-list">
          {sortedRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
