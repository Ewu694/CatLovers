import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/styles.css';

const Cats = () => {
  const [catImageUrl, setCatImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatImage = async () => {
    setLoading(true);
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
    </div>
  );
};

export default Cats;