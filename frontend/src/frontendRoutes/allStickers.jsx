import React,{Component} from "react";
import Navbar from "./navbar";

export default class All extends Component {
    componentDidMount() {
        document.title = "All Stickers"; // Set the desired page title here
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

                        <div className="form-check">
                            <h5>Refine Search</h5>
                            <form action="/action_page.php">
                                Colour
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                        value="something" />
                                    <label className="form-check-label" htmlFor="check2">Option 2</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                        value="something" />
                                    <label className="form-check-label" htmlFor="check2">Option 2</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                        value="something" />
                                    <label className="form-check-label" htmlFor="check2">Option 2</label>
                                </div>
                                Size
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                        value="something" />
                                    <label className="form-check-label" htmlFor="check2">Option 2</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                        value="something" />
                                    <label className="form-check-label" htmlFor="check2">Option 2</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                        value="something" />
                                    <label className="form-check-label" htmlFor="check2">Option 2</label>
                                </div>
                                Style
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                        value="something" />
                                    <label className="form-check-label" htmlFor="check2">Option 2</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                        value="something" />
                                    <label className="form-check-label" htmlFor="check2">Option 2</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                        value="something" />
                                    <label className="form-check-label" htmlFor="check2">Option 2</label>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Update Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <br />
                        <div className="container">
                            <div className="row">

                                <div className="col-sm-8">
                                    <h1>
                                        CRTL + (S)ticker
                                    </h1>
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
                                <form action="">
                                    
                                </form>
                            </div>
                            <div className="row">
                                <br />
                                <h3>Search Results</h3>
                            </div>
                            <div className="row">
                                <br />
                                <div className="col-sm-4">
                                    <a href="/engineer" className="nav-link">
                                    <img src="images/engineering.jpg" className="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                    <br />
                                    <b>Engineering Name Sticker</b><br />
                                    $3.99
                                    </a>
                                </div>
                                <div className="col-sm-4">
                                <a href="/physics" className="nav-link">
                                    <img src="images/physics.jpg" className="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                    <br />
                                    <b>Physics Name Sticker</b><br />
                                    $3.99
                                    </a>
                                </div>
                                <div className="col-sm-4">
                                <a href="/computer" className="nav-link">
                                    <img src="images/computer.jpg" className="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                    <br />
                                    <b>Computer Science Name Sticker</b><br />
                                    $3.99
                                    </a>
                                </div>
                                <br />
                            </div>
                            <div className="row">
                                <br />
                                <div className="col-sm-4">
                                <a href="/chemistry" className="nav-link">
                                    <img src="images/chemistry.jpg" className="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                    <br />
                                    <b>Chemistry Name Sticker</b><br />
                                    $3.99
                                    </a>
                                </div>
                                <div className="col-sm-4">
                                <a href="/biology" className="nav-link">
                                    <img src="images/biology.jpg" className="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                    <br />
                                    <b>Biology Name Sticker</b><br />
                                    $3.99
                                    </a>
                                </div>
                                <div className="col-sm-4">
                                <a href="/math" className="nav-link">
                                    <img src="images/math.jpg" className="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                    <br />
                                    <b>Math Name Sticker</b><br />
                                    $3.99
                                    </a>
                                </div>
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