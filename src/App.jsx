import React, { useState, useEffect } from 'react';
import CatImage from './components/CatImage';
import CatData from './components/CatData';
import Loader from './components/Loader';
import { fetchRandomCatImage } from './services/catImageService';
import { fetchRandomCatData } from './services/catDataService';

const App = () => {
  const [catImage, setCatImage] = useState(null);
  const [catData, setCatData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchRandomCatImage()
      .then(image => setCatImage(image))
      .catch(error => console.error('Error fetching cat image:', error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchRandomCatData()
      .then(data => setCatData(data))
      .catch(error => console.error('Error fetching cat data:', error))
      .finally(() => setLoading(false));
  }, []);

  const reloadCatData = () => {
    setLoading(true);
    fetchRandomCatImage()
      .then(image => setCatImage(image))
      .catch(error => console.error('Error fetching cat image:', error))
      .finally(() => setLoading(false));

    setLoading(true);
    fetchRandomCatData()
      .then(data => setCatData(data))
      .catch(error => console.error('Error fetching cat data:', error))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {catImage && <CatImage imageUrl={catImage} altText={catData && catData.substring(0, catData.indexOf(' ', 4))} />}
          {catData && <CatData catData={catData} />}
          <button onClick={reloadCatData}>Reload</button>
        </>
      )}
    </div>
  );
};

export default App;
