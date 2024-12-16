import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

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
      <Link to='/'>
        <h1>Cat Lovers</h1>
      </Link>
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

export default Login;