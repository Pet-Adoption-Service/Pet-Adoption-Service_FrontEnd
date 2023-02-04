import React, { Component } from 'react';
class NavBarUIMenu extends Component {
    render() {
        return (
            <div className="ui container">
                <h2 style={{ color: 'green' }}>The Pet Adoption Service</h2>
                <h3>Become a pet owner today!</h3>
                <div className="ui secondary menu">
                    <a href="./home" className="item active">
                        Home
                    </a>
                    <a href="./about" className="item">
                        About
                    </a>
                    <a href="./FindAPet" className="item">
                        Find A Pet
                    </a>
                    <a href="./Contact" className="item">
                        Contact
                    </a>
                    <a href="./FAQ" className="item"> 
                        FAQ 
                    </a>
                </div>
            </div>
        );
    }
}

export default NavBarUIMenu;

