import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../main.css'
import { Link } from "react-router-dom";
export default class Home extends Component {
    componentDidMount() {
        document.title = "Home"; // Set the desired page title here
      }
    render() {
        return (
            <div className="container">
                <div className="row top-buffer">
                    <div className="col-sm-7 bg-secondary">
                        <div className="row">
                            <div className="mx-auto">
                                <br />
                                <img src="images/logo.png" className="rounded mx-auto d-block" alt="..." style={{ width: '70%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="container pt-5">
                            <br />
                            <p className="text-center text-secondary">
                            <Link to="/engineer" className="nav-link">Engineering Stickers</Link>
                            </p>
                            <hr />
                            <p className="text-center text-secondary">
                            <Link to="/physics" className="nav-link">Physics Stickers</Link>
                            </p>
                            <hr />
                            <p className="text-center text-secondary">
                            <Link to="/computer" className="nav-link">Computer Science Stickers</Link>
                            </p>
                            <hr />
                            <p className="text-center text-secondary">
                            <Link to="/chemistry" className="nav-link">Chemistry Stickers</Link>
                            </p>
                            <hr />
                            <p className="text-center text-secondary">
                            <Link to="/biology" className="nav-link">Biology Stickers</Link>
                            </p>
                            <hr />
                            <p className="text-center text-secondary">
                            <Link to="/math" className="nav-link">Math Stickers</Link>
                            </p>
                            <hr />
                            <p className="text-center text-secondary">
                            <Link to="/All" className="nav-link">All Stickers</Link>
                            </p>
                        </div>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7 bg-secondary p-5 text-center">
                        <button type="button" className="btn btn-primary"><a href="/login" className="nav-link">Log In</a></button>
                        <button type="button" className="btn btn-primary"><a href="/signup" className="nav-link">Sign Up</a></button>
                    </div>
                    <div className="col-sm-5"></div>
                </div>
            </div>
        )
    }
}