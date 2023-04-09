import React from "react";
import Nav from "./Nav";

const Header = () => {

  return (
    <div className="flex justify-around bg-slate-600">
      <img src="logo.png" width={80}/>
      <Nav />
    </div>
  );
};

export default Header;