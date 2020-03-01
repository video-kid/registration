import React from "react";
import Data from "./dbHandler/dbHandler.js";

const Login = props => {
  const [form, setForm] = React.useState({
    login: "",
    password: ""
  });

  const submitManager = e => {
    e.preventDefault();
    //data from login form
    console.log(form);
    //data from 'db'
    console.log(Data("bla", "bla"));
  };

  const inputHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="formWrapper">
      <h2>{props.type}</h2>
      <form className="form" onSubmit={submitManager}>
        <div className="form-row">
          <input
            type="text"
            className="input"
            name="login"
            onChange={inputHandler}
          />
          <label htmlFor="login" className="label">
            login
          </label>
        </div>
        <div className="form-row">
          <input
            type="password"
            className="input"
            name="password"
            onChange={inputHandler}
          />
          <label htmlFor="password" className="label">
            haslo
          </label>
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
