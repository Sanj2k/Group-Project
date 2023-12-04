import React, {Component} from "react";
import { Link } from 'react-router-dom';

import '../main.css'





export default class extends Component{
   
    render(){
        return(
            <nav className="navbar navbar-dark  navbar-expand-lg">
                
                <Link to="/" className="navbar-brand">CTRL Strickers</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/engineer" className="nav-link">Engineering Stickers</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/physics" className="nav-link">Physics Stickers</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/computer" className="nav-link">Computer Science Stickers</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/chemistry" className="nav-link">Chemistry Stickers</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/biology" className="nav-link">Biology Stickers</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/math" className="nav-link">Math Stickers</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/signup" className="nav-link">Sign up</Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
        )
    }
}