
const fetchCatImageWithText = async (text) => {
  try {
    const response = await fetch(`https://cataas.com/cat/says/${encodeURIComponent(text)}`);
    const imageUrl = response.url;
    return imageUrl;
  } catch (error) {
    throw new Error('Failed to fetch cat image with text');
  }
};

export { fetchCatImageWithText };
