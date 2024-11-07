import React, { useState } from 'react';
import SearchForm from './components/searchForm.js';
import SearchResults from './components/SearchResults.js';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <h1>Buscador de Partners para Startups</h1>
      <SearchForm setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
