import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./component/navbar.component";

import Engineering from "./component/engineering.component";
import Physics from "./component/physics.component";
import Computer from "./component/computer.component";
import Chemistry from "./component/chemistry.component";
import Biology from "./component/biology.component";
import Math from "./component/math.component";
import Login from "./component/login.component";
import Signup from "./component/signup.component";


function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        
        <Route path="/engineer" element={<Engineering />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/biology" element={<Biology />} />
        <Route path="/math" element={<Math />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
