import React, { Component } from 'react';
class NavBarUIMenu extends Component {
    render() {
        return (
            <div className="ui container">
                <h1 style={{ color: 'green' }}>The Pet Adoption Service</h1>
                <div className="ui secondary menu">
                    <a href="./home" className="item active">
                      <h4>Home</h4>
                    </a>
                    <a href="./about" className="item">
                      <h4>About</h4>
                    </a>
                    <a href="./FindAPet" className="item">
                      <h4>Find A Pet</h4>
                    </a>
                    <a href="./Contact" className="item">
                      <h4>Contact</h4>
                    </a>
                    <a href="./FAQ" className="item"> 
                      <h4>FAQ</h4>
                    </a>
                </div>
            </div>
        );
    }
}

export default NavBarUIMenu;

