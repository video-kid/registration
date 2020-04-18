import React from "react";
import Data from "../dbHandler/dbHandler.js";

const Login = props => {
  let classList = `${props.className}`;
  const loginEmmiter = props.logInHandler;

  const [error, setError] = React.useState(null);
  const [form, setForm] = React.useState({
    login: "",
    password: ""
  });

  const checkPassword = async (userObj, submittedPassword) => {
    let pswdObj = await Data.findMatches(
      await Data.useTable("passwords"),
      "id",
      await Data.findUserId(userObj)
    );
    if (
      (await pswdObj.length) === 1 &&
      (await pswdObj[0].password) === submittedPassword
    ) {
      return await userObj;
    }
  };

  const loginHandler = async (login, password) => {
    let checkedObj = await Data.getFirst(
      await Data.findMatches(await Data.useTable("users"), "login", login)
    );

    if (await checkedObj) {
      let accountToLogIn = await checkPassword(checkedObj, password);
      if (accountToLogIn) {
        loginEmmiter();
        return accountToLogIn;
      }
    }

    return setError("check login and pw again");
  };

  const submitManager = async e => {
    e.preventDefault();
    if (form.login) {
      await loginHandler(form.login, form.password);
    }
  };

  const inputHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id={props.type} className={classList} role="tabpanel">
      <form className="form" onSubmit={submitManager}>
        <span className="errInfoField">{error}</span>
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
        <button className="btn btn-gradient">Submit</button>
      </form>
    </div>
  );
};

export default Login;
