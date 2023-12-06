import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';

import Navbar from "./component/navbar.component";

import Home from './component/home.component';
import Engineering from "./component/engineering.component";
import Physics from "./component/physics.component";
import Computer from "./component/computer.component";
import Chemistry from "./component/chemistry.component";
import Biology from "./component/biology.component";
import Math from "./component/math.component";
import Login from "./component/login.component";
import Signup from "./component/signup.component";
import All from './component/allStickers.component';
import LoginConfirm from './component/confirmLogin.component';



const App = () => {
  return (
    
    <Router>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/engineer" element={<Engineering />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/biology" element={<Biology />} />
        <Route path="/math" element={<Math />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all" element={<All />} />
        <Route path="/navbar" element={<navbar />} />
        <Route path="/LoginConfirm" element={<LoginConfirm />} />
        </Routes>
    </Router>
  );
}

export default App;
