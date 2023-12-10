import React,{Component} from "react";
import navbar from "./navbar";

export default class LoginConfirm extends Component {
    componentDidMount() {
        document.title = "Login Confirmation"; // Set the desired page title here
      }
    render() {
        return (
            <div>
                <navbar />
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
                                        <h1>You are now logged in!</h1>
                                        <p><a href="/" className="nav-link">Return to Home</a></p>
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
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}