import React from "react";
import Navbar from "../navbar/Navbar";

const Header = props => {
  let isLogged = props.isLogged;
  const logOutHandler = props.logOutHandler;
  const userName = props.userName;
  return (
    <header className="header">
      <a className="logo" href="/">
        Longo
      </a>
      {isLogged && <Navbar logOutHandler={logOutHandler} userName={userName} />}
    </header>
  );
};

export default Header;
