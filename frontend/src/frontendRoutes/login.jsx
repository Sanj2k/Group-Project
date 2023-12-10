import { useState, useEffect } from 'react';
import '../App';
import Navbar from './navbar';
import '../main.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  useEffect(() => {
    document.title = "Log In";
  }, []);

  return (
    <div>
      <Navbar />
      <form className="login" onSubmit={handleSubmit}>
        <h3>Log in</h3>

        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <br />
        <button type="button" class="btn btn-primary"><a href="/LoginConfirm" className="nav-link">Log In</a></button>
        <br /> 
        <p>No account?</p>
        <p><a href="/signup" className="nav-link">Sign up here</a></p>

      </form>

    </div>
  );
};

export default Login;