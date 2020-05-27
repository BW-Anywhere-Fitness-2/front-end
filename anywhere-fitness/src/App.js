import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MyClassBoard from "./components/ClassBoard";
import PrivateRoute from "./components/PrivateRoute";
//import Login from "./components/Login";
import Clients from "./components/Clients"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/ClassBoard" component={MyClassBoard} />
          <Route path="/Clients" component={Clients} />
          <Route component={Clients} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
