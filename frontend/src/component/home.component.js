import React, { Component } from "react";

export default class Home extends Component {
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
                                <a href="/engineer" className="nav-link">Engineering Stickers</a>
                            </p>
                            <hr />
                            <p className="text-center text-secondary">
                                <a href="/physics" className="nav-link">Physics Stickers</a>
                            </p>
                            <hr />
                            <p className="text-center text-secondary">
                                <a href="/computer" className="nav-link">Computer Science Stickers</a>
                            </p>
                            <hr />
                            <p className="text-center text-secondary">
                                <a href="/chemistry" className="nav-link">Chemistry Stickers</a>
                            </p>
                            <hr />
                            <p className="text-center text-secondary">
                                <a href="/biology" className="nav-link">Biology Stickers</a>
                            </p>
                            <hr />
                            <p className="text-center text-secondary">
                                <a href="/math" className="nav-link">Math Stickers</a>
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