import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const fetchCatAPI = async () => {
    try {
      const response = await axios.get('https://cataas.com/cat');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
      <div className="form-container">
        {isLogin ? (
          <LoginForm toggleForm={toggleForm} />
        ) : (
          <CreateAccountForm toggleForm={toggleForm} />
        )}
      </div>
  );
}

function LoginForm({ toggleForm }) {
  return (
    <div className="form">
      <h1>Cat Lovers</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <p onClick={toggleForm}>Create Account</p>
    </div>
  );
}

function CreateAccountForm({ toggleForm }) {
  return (
    <div className="form">
      <h1>Cat Lovers</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>Create Account</button>
      <p onClick={toggleForm}>Login</p>
    </div>
  );
}

export default App;