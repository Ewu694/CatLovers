import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5173/api/login', { username, password });
      if (response.status === 200) {
        navigate('/cats');
      } else {
        setErrorMessage(response.data);
      }
    } catch (error) {
      setErrorMessage('An error occurred: ' + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <div className="form-container">
      <Link to='/'><h1>Cat Lovers</h1></Link>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        <Link to='/create-account'>Create Account</Link>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Login;