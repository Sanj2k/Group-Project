import { useState } from 'react';
import Navbar from "./navbar.component";
import '../main.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

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

        <button type="button" class="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};
export default Signup;