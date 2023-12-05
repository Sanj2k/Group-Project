import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../main.css'





export default class extends Component {

    render() {
        return (
            <div className="container">
            <nav className="navbar navbar-dark  navbar-expand-lg">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/" className="navbar-brand">Ctrl + S(tickers)</Link>
                        </li>
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
                            <Link to="/All" className="nav-link">All Stickers</Link>
                        </li>


                    </ul>
                </div>

            </nav>
            </div>
        )
    }
}