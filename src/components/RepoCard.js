import React from "react";

function RepoCard({ repo }) {
  //αν δεν εχει περγραφη βαζουμε lorem50
  const description =
    repo.description ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.";

  return (
    <div className="repo-card">
      {/* αν το repo ειναι δημοφιλες (πανω απο 100 stars) δειχνει αστερι πανω δεξια) */}
      {repo.stargazers_count > 1000 && <span className="popular-icon">⭐</span>}

      <h2>{repo.name}</h2>
      <p>⭐({repo.stargazers_count})</p>
      <p>{description}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        Visit Repository →
      </a>
    </div>
  );
}

export default RepoCard;
