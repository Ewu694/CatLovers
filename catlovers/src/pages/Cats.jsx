import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/styles.css';

const Cats = () => {
  const [catImageUrl, setCatImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [favoriteMessage, setFavoriteMessage] = useState('');

  const fetchCatImage = async () => {
    setLoading(true);
    setFavoriteMessage('');
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      const imageUrl = response.data[0].url;
      setCatImageUrl(imageUrl);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    } finally {
      setLoading(false);
    }
  };

  const favoriteCatImage = async () => {
    try {
      const response = await axios.post('http://localhost:5173/cats', { imageUrl: catImageUrl, userId: 123 });
      setFavoriteMessage(response.data);
    } catch (error) {
      console.error('Error favoriting cat image:', error);
      setFavoriteMessage('An error occurred while favoriting the image.');
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className="cat-container">
      <h1>Random Cat Image</h1>
      <div style={{ marginTop: "20px" }}>
        {catImageUrl ? (
          <img
            src={catImageUrl}
            alt="Random Cat"
            className="cat-image"
          />
        ) : (
          <p>Click the button to load a random cat image!</p>
        )}
      </div>
      <button onClick={fetchCatImage} className='button'>
        {loading ? "Loading..." : "Get Cat Image"}
      </button>
      {catImageUrl && (
        <button onClick={favoriteCatImage} className='button' style={{ marginLeft: "10px" }}>
          Favorite
        </button>
      )}
      {favoriteMessage && <p>{favoriteMessage}</p>}
    </div>
  );
};

export default Cats;