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
    <div className="modal-container">
      <div className="modal roundy">
        <ul className="cards-list dropdown">
          <li className={`card roundy ${!activeTab ? "active" : ""}`}>
            <button
              onClick={handleClick}
              className={`btn tab`}
              data-toggle="tab"
              aria-controls="register"
            >
              register
            </button>
            <Register className="content" type="register"></Register>
          </li>
          <li className={`card roundy dark ${activeTab ? "active" : ""}`}>
            <button
              onClick={handleClick}
              className={`btn tab`}
              data-toggle="tab"
              aria-controls="login"
            >
              login
            </button>

            <Login className="content" type="login"></Login>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
