import React from "react";
import "./css/style.css";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <main className="App">
      <div className="card">
        <Register type="register"></Register>
        <Login type="login"></Login>
      </div>
    </main>
  );
}

export default App;
