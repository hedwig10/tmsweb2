import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">TMS<span>Logo</span></li>
          </ul>
          <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Warehousing</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
