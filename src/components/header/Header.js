import React from "react";
import Navbar from "../navbar/Navbar";

const Header = props => {
  let isLogged = props.isLogged;
  const logOutHandler = props.logOutHandler;
  return (
    <header className="header">
      <a className="logo" href="/">
        Longo
      </a>
      {isLogged && <Navbar logOutHandler={logOutHandler} />}
    </header>
  );
};

export default Header;
