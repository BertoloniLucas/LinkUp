import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ setResults }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/search', { description });
    setResults(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Describe tu producto o servicio"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
