import React from "react";

const Navbar = props => {
  const logoutEmmiter = props.logOutHandler;

  return (
    <nav className="navbar">
      <ul className="menu">
        <li className="menu-elem">menu elem 1</li>
        <li className="menu-elem">menu elem 2</li>
        <li className="menu-elem">menu elem 3</li>
      </ul>
      <button className="btn log-out" onClick={logoutEmmiter}>
        log Out
      </button>
    </nav>
  );
};

export default Navbar;
