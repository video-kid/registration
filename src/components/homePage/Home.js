import React from "react";
import Unlogged from "../unLogged/Unlogged";
import Header from "../header/Header";
import Panel from "../panel/Panel";

const Home = props => {
  const isLogged = props.isLogged;
  const logInHandler = props.logInHandler;
  const logOutHandler = props.logOutHandler;
  const setAdminView = props.setAdminView;
  const userData = props.userData;
  const { login } = props.userData;
  const isAdmin = props.isAdmin;
  return (
    <>
      <Header
        isLogged={isLogged}
        logOutHandler={logOutHandler}
        userName={login}
      />
      {isLogged ? (
        <Panel
          userData={userData}
          setAdminView={setAdminView}
          isAdmin={isAdmin}
        />
      ) : (
        <Unlogged logInHandler={logInHandler} />
      )}
    </>
  );
};

export default Home;
