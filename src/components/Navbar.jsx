import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarUIMenu extends Component {
    render() {
        return (
            <div className="ui-container">
                <h1 style={{ color: 'green' }}>The Pet Adoption Service</h1>
                <div className="ui secondary menu">
                    <a href="./home" className="item active">
                      <Link to="/home">Home</Link>
                    </a>
                    <a href="./about" className="item">
                     <Link to="./About">About</Link>
                    </a>
                    <a href="./FindAPet" className="item">
                      <Link to="./FindAPet">Find A Pet</Link>
                    </a>
                    <a href="./Contact" className="item">
                      <Link to="./Contact">Contact</Link>
                    </a>
                    <a href="./FAQ" className="item"> 
                      <Link to="./FAQ">FAQ</Link>
                    </a>
                </div>
            </div>
        );
    }
}

export default NavBarUIMenu;

