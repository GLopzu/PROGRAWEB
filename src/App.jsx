// App.jsx
import React, { useState, useEffect } from 'react';
import CatImage from './components/CatImage.jsx';
import CatData from './components/CatData.jsx';
import Loading from './components/Loading.jsx';
import { fetchCatImageWithText } from './services/catImageService.jsx';
import { fetchRandomCatData } from './services/catDataService.jsx';
import './App.css';

const App = () => {
  const [catImage, setCatImage] = useState(null);
  const [catData, setCatData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCatData();
  }, []);

  const fetchCatData = async () => {
    setLoading(true);
    try {
      const data = await fetchRandomCatData();
      const firstFourWords = data.split(' ').slice(0, 4).join(' '); // Obtenemos las primeras cuatro palabras
      const imageUrl = await fetchCatImageWithText(firstFourWords);
      setCatImage(imageUrl);
      setCatData(data);
    } catch (error) {
      console.error('Error fetching cat data:', error);
    } finally {
      setLoading(false);
    }
  };

  const reloadCatData = () => {
    fetchCatData();
  };

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {catImage && <CatImage imageUrl={catImage} altText={catData} />}
          {catData && <CatData catData={catData} />}
          <button onClick={reloadCatData}>Reload</button>
        </>
      )}
    </div>
  );
};

export default App;
