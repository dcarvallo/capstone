import React from "react";
const Footer = () => {

  return (
    <div className="block md:flex items-center  justify-center md:items-center bg-slate-800 h-32">
      <div className="md:w-1/2 flex justify-center">
          <img width="100px" src="logo.jpg" className="img-fluid" id="logo1" />
      </div>
      <div id="copy" className="md:w-1/2">
          <p className="text-white">Little Lemon footer information</p>
      </div>
    </div>
    )
  }

export default Footer;

