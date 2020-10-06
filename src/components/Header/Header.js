import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
      <div className="row">
        <nav className="nav ">
          <ul>
            <li>
              <Link to="/home">
                <img className="logo" src="https://i.ibb.co/RhkQ613/Group-1329.png" alt="" />
              </Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/home">Donation</Link>
            </li>
            <li>
              <Link to="/home">Event</Link>
            </li>
            <li>
              <Link to="/home">Blog</Link>
            </li>
            <li>
            <button type="button" className="btn btn-success"><Link to="/register">Register</Link></button>
            </li>
            <li><button type="button" className="btn btn-info"><Link to="/admin">Admin</Link></button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    );
};

export default Header;