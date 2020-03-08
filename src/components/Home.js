import React from "react";
import Register from "./Register";
import Login from "./Login";

const Home = props => {
  const [activeTab, setActiveTab] = React.useState(false);
  const handleClick = e => {
    e.preventDefault();
    setActiveTab(!activeTab);
  };
  return (
    <div className="homepage">
      <div className="homepage-form card">
        <div className="btn-container navbar">
          <button
            onClick={handleClick}
            className="btn tab nav-item"
            data-toggle="tab"
            aria-controls="register"
          >
            register
          </button>
          <button
            onClick={handleClick}
            className="btn tab nav-item"
            data-toggle="tab"
            aria-controls="login"
          >
            login
          </button>
        </div>
        <Register
          className="formWrapper"
          type="register"
          isActive={!activeTab}
        ></Register>
        <Login
          className="formWrapper"
          type="login"
          isActive={activeTab}
        ></Login>
      </div>
    </div>
  );
};

export default Home;
