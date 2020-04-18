import React from "react";
import "./css/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
  }
  render() {
    const logInHandler = () => {
      this.setState({ isLogged: true });
    };
    return (
      <Router>
        <main className="App main">
          <Switch>
            <Route exact path="/">
              <Home
                isLogged={this.state.isLogged}
                logInHandler={logInHandler}
              />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
