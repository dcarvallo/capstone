import React from "react";
import Nav from "./Nav";

const Header = () => {

  return (
    <div className="flex justify-around bg-green-600">
      <img src="logo.jpg" width={80}/>
      <Nav />
    </div>
  );
};

export default Header;