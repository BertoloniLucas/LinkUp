import React from 'react';

const SearchResults = ({ results }) => (
  <div>
    <h3>Resultados:</h3>
    {results.map((result, index) => (
      <div key={index}>
        <a href={result.link} target="_blank" rel="noopener noreferrer">
          {result.title}
        </a>
      </div>
    ))}
  </div>
);

export default SearchResults;
