import React, { Component } from "react";
import Navbar from "./navbar.component";
export default class Engineering extends Component {
    componentDidMount() {
        document.title = "Engineering Stickers"; // Set the desired page title here
      }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container bg-secondary rounded-4">
                    <div className="row">
                        <div className="col-sm-3">
                            <br />
                            <img src="images/corner.png" className="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className="col-sm-9">
                            <br />
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h1>CRTL + (S)ticker</h1>
                                    </div>
                                    <div className="col-sm-4">
                                        <button type="button" className="btn btn-primary">
                                            <a href="/login" className="nav-link">
                                                Log In
                                            </a>
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            <a href="/signup" className="nav-link">
                                                Sign Up
                                            </a>
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <br />
                                </div>
                                <div className="row">
                                    <br />
                                    <h3>Engineering Stickers</h3>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <img src="images/engineering.jpg" className="img-fluid" alt="Responsive image" style={{ width: '90%' }} />
                                    </div>
                                    <div className="col-sm-5">
                                        <h4>Engineering Name Sticker</h4>
                                        <br />
                                        <h5>Price: $3.99</h5>
                                        <br />
                                        <h6>This sticker is perfect for you and all the engineers in your life!</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}