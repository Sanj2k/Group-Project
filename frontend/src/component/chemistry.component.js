import React,{Component} from "react";
import Navbar from "./navbar.component";
export default class chemistry extends Component {
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
                                    <h3>Chemistry Stickers</h3>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <img src="images/chemistry.jpg" className="img-fluid" alt="Responsive image" style={{ width: '90%' }} />
                                    </div>
                                    <div className="col-sm-5">
                                        <h4>Chemistry Name Sticker</h4>
                                        <br />
                                        <h5>Price: $3.99</h5>
                                        <br />
                                        <h6>This sticker is perfect for you and all the chemists in your life!</h6>
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