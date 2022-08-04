import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            My Doctor
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/home">Reviews</Link>
            </li>
            <li>
              <Link to="/home">Appoinment</Link>
            </li>
            <li>
              <Link to="/home">Contact Us</Link>
            </li>
            <li>
              <Link to="/home">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
