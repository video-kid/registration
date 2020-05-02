import React from "react";
import "./css/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/homePage/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      userData: {},
      isAdmin: false
    };
  }
  render() {
    const logInHandler = accountData => {
      this.setState({ isLogged: true });
      this.setState({ userData: accountData });
    };
    const logOutHandler = () => {
      this.setState({ isLogged: false });
      this.setState({ isAdmin: false });
      this.setState({ userData: {} });
    };
    const setAdminView = status => {
      this.setState({ isAdmin: status });
    };
    return (
      <Router>
        <main className="App main">
          <Switch>
            <Route exact path="/">
              <Home
                isLogged={this.state.isLogged}
                logInHandler={logInHandler}
                logOutHandler={logOutHandler}
                userData={this.state.userData}
                setAdminView={setAdminView}
                isAdmin={this.state.isAdmin}
              />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
