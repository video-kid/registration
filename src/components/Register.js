import React from "react";

let validator = {
  pass: null,

  email: function(mailAddr) {
    if (!mailAddr || !this.emailChecker(mailAddr)) {
      return "mail err";
    }
    return false;
  },
  login: function(curName) {
    if (!curName || curName.lenght < 2) {
      return "name to short";
    }
    return false;
  },
  password: function(pswd) {
    if (!pswd || pswd.length < 5) {
      return "check password";
    }
    this.pass = pswd;
    return false;
  },
  repPassword: function(rPswd) {
    if (rPswd !== this.pass) {
      return "not the same as passw";
    }
    return false;
  },
  emailChecker: function(mailAddr) {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mailAddr
    );
  }
};

const validationHandler = form => {
  let err;
  if (form) {
    for (let field in form) {
      err = validator[field](form[field]);
      if (err) {
        return err;
      }
    }
  }
};

const Register = props => {
  let classList = `${props.className}`;
  if (props.isActive) {
    classList = `${props.className} active`;
  }
  const [error, setError] = React.useState(null);
  const [form, setForm] = React.useState({
    login: "",
    email: "",
    password: "",
    repPassword: ""
  });

  const submitManager = e => {
    e.preventDefault();
    const errorMsg = validationHandler(form);
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    //form to send
    console.log(form);
  };

  const inputHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id={props.type} className={classList} role="tabpanel">
      <span className="errInfoField">{error}</span>
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
            type="text"
            className="input"
            name="email"
            onChange={inputHandler}
          />
          <label htmlFor="email" className="label">
            mail
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
        <div className="form-row">
          <input
            type="password"
            className="input"
            name="repPassword"
            onChange={inputHandler}
          />
          <label htmlFor="repPassword" className="label">
            powtorz haslo
          </label>
        </div>
        <button className="btn btn-action">Submit</button>
      </form>
    </div>
  );
};

export default Register;
