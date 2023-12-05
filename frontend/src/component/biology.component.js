import React, { Component } from "react";
import Navbar from "./navbar.component";

export default class Biology extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <Navbar />
                </div>
                <div className="container bg-secondary rounded-4">
                    <div className="row">
                        <div className="col-sm-3">
                            <br />
                            <img src="images/corner.png" class="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                            <br />
                            <br />
                            <br />

                            <div className="form-check">
                                <h5>Refine Search</h5>
                                <form action="/action_page.php">
                                    Colour
                                    <div className="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2"
                                            value="something" />
                                        <label class="form-check-label" for="check2">Option 2</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2"
                                            value="something" />
                                        <label class="form-check-label" for="check2">Option 2</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2"
                                            value="something" />
                                        <label class="form-check-label" for="check2">Option 2</label>
                                    </div>
                                    Size
                                    <div className="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2"
                                            value="something" />
                                        <label class="form-check-label" for="check2">Option 2</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2"
                                            value="something" />
                                        <label class="form-check-label" for="check2">Option 2</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2"
                                            value="something" />
                                        <label class="form-check-label" for="check2">Option 2</label>
                                    </div>
                                    Style
                                    <div className="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2"
                                            value="something" />
                                        <label class="form-check-label" for="check2">Option 2</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2"
                                            value="something" />
                                        <label class="form-check-label" for="check2">Option 2</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2"
                                            value="something" />
                                        <label class="form-check-label" for="check2">Option 2</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary mt-3">Update Search</button>
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
                                        <button type="button" class="btn btn-primary">Log In</button>
                                        <button type="button" class="btn btn-primary">Sign Up</button>
                                    </div>
                                </div>
                                <row>
                                    <br />
                                    <form action="">
                                        <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                            <div className="input-group">
                                                <input type="search" placeholder="  Search for stickers"
                                                    aria-describedby="button-addon1" class="form-control border-0 bg-secondary" />
                                                <div className="input-group-append">
                                                    <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i
                                                        class="fa fa-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </row>
                                <row>
                                    <br />
                                    <h3>Search Results</h3>
                                </row>
                                <div className="row">
                                    <br />
                                    <div className="col-sm-4">
                                        <img src="images/PLACEHOLDER.png" class="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                        <br />sticker 1
                                    </div>
                                    <div className="col-sm-4">
                                        <img src="images/PLACEHOLDER.png" class="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                        <br />sticker 2
                                    </div>
                                    <div className="col-sm-4">
                                        <img src="images/PLACEHOLDER.png" class="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                        <br />sticker 3
                                    </div>
                                    <br />
                                </div>
                                <div className="row">
                                    <br />
                                    <div className="col-sm-4">
                                        <img src="images/PLACEHOLDER.png" class="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                        <br />sticker 1
                                    </div>
                                    <div className="col-sm-4">
                                        <img src="images/PLACEHOLDER.png" class="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                        <br />sticker 2
                                    </div>
                                    <div className="col-sm-4">
                                        <img src="images/PLACEHOLDER.png" class="img-fluid" alt="Responsive image" style={{ width: '75%' }} />
                                        <br />sticker 3
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