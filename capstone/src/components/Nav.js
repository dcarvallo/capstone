import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About.js"
import Contact from "./Contact.js"
import Booking from "./Booking.js"
import Main from "./Main.js";

const Nav = () => {

  return (
    <> 
      <nav className="flex items-center">
        <div className="align-middle">
          <Link to="/" className="mr-6 text-blue-500 hover:text-blue-800">Homepage</Link>
        <Link to="/about" className="mr-6 text-blue-500 hover:text-blue-800">About Little Lemon</Link>
        <Link to="/Booking" className="mr-6 text-blue-500 hover:text-blue-800">Reservation</Link>
        <Link to="/contact" className="mr-6 text-blue-500 hover:text-blue-800">Contact</Link>
        </div>
      </nav>
        
     </>
  );
};

export default Nav;