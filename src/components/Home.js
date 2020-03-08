import React from "react";
import Register from "./Register";
import Login from "./Login";

const Home = props => {
  const [activeTab, setActiveTab] = React.useState(null);
  return (
    <div className="card">
      <div className="btn-container">
        <button className="btn tab">register</button>
        <button className="btn tab">login</button>
      </div>
      <Register type="register"></Register>
      <Login type="login"></Login>
    </div>
  );
};

export default Home;
