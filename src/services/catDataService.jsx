const fetchRandomCatData = async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex].description;
  } catch (error) {
    throw new Error('Failed to fetch random cat data');
  }
};

export { fetchRandomCatData };
