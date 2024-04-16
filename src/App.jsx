// App.jsx
import React, { useState, useEffect } from 'react';
import CatImage from './components/CatImage.jsx';
import CatData from './components/CatData.jsx';
import Loading from './components/Loading.jsx';
import { fetchCatImageWithText } from './services/catImageService.jsx';
import { fetchRandomCatData } from './services/catDataService.jsx';
import './App.css';
import './Loader.css'

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
      console.log(imageUrl) //
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
        <><div className="cats-info">
          {catImage && <CatImage imageUrl={catImage} altText={catData} />}
          {catData && <CatData catData={catData} />}
        </div>
          <div className='next-btn'>
            <button onClick={reloadCatData}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
