import React from "react";
import "./css/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/homePage/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: true
    };
  }
  render() {
    const logInHandler = () => {
      this.setState({ isLogged: true });
    };
    const logOutHandler = () => {
      this.setState({ isLogged: false });
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
              />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
