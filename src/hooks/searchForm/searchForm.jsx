
import React from 'react';

const SearchForm = ({ query, setQuery }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar una función de búsqueda si prefieres que se active al enviar el formulario
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search GIFs..."
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
