import React from "react";
import Unlogged from "../unLogged/Unlogged";
import Header from "../header/Header";
import Panel from "../panel/Panel";

const Home = props => {
  const isLogged = props.isLogged;
  const logInHandler = props.logInHandler;
  const logOutHandler = props.logOutHandler;
  const userData = props.userData;
  return (
    <>
      <Header isLogged={isLogged} logOutHandler={logOutHandler} />
      {isLogged ? (
        <Panel userData={userData} />
      ) : (
        <Unlogged logInHandler={logInHandler} />
      )}
    </>
  );
};

export default Home;
