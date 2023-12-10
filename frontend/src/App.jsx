import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
} from "react-router-dom";
import Home from "./frontendRoutes/home";
import Engineering from './frontendRoutes/engineering'
import Physics from "./frontendRoutes/physics";
import Computer from "./frontendRoutes/computer";
import Chemistry from "./frontendRoutes/chemistry";
import Biology from "./frontendRoutes/biology";
import Math from "./frontendRoutes/math";
import Login from "./frontendRoutes/login";
import Signup from "./frontendRoutes/signup";
import All from './frontendRoutes/allStickers';
import LoginConfirm from './frontendRoutes/confirmLogin';
import "bootstrap/dist/css/bootstrap.min.css"
import './main.css'
function App() {
    return (
        <>
            { }
            <Router>
               <Routes>
                    <Route path="/" element={<Home />} />
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
        </>
    );
}

export default App;