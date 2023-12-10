import { useState, useEffect } from 'react';
import Navbar from './navbar';
import '../main.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/register', {
        email, 
        password
      });
  
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  return (
    <div>
      <Navbar />
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>

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
        <button type="button" className="btn btn-primary">Sign Up</button>
        <br /> 
        <p>Have an account already?</p>
        <p><a href="/login" className="nav-link">Log in here</a></p>
      </form>
    </div>
  );
};

export default Signup;