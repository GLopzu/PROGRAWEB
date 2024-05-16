import React, { useState } from 'react';
import Favorites from './components/favorites/favorites';
import GifResults from './components/gifResults/gifResults';
import SearchForm from './hooks/searchForm/searchForm'
import useGifSearch from './hooks/userGifSearch/userGifSearch';
import './App.css'



const API_KEY = 'H1buVKs8ApPFK2PRrdzInmcJNiQ0PIth';

const App = () => {
  const { query, setQuery, loading, results } = useGifSearch(API_KEY);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (gif) => {
    setFavorites([...favorites, gif]);
  };

  return (
    <div>
      <h1>GIF Search</h1>
      <SearchForm  query={query} setQuery={setQuery} />
      <p>{results.length} results found</p>
      <GifResults loading={loading} results={results} addToFavorites={addToFavorites} />
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
