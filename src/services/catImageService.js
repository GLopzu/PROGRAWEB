const fetchRandomCatImage = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      return data[0].url;
    } catch (error) {
      throw new Error('Failed to fetch random cat image');
    }
  };
  
  export default { fetchRandomCatImage };